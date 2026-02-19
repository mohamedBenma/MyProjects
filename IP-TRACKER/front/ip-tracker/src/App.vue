<template>
  <div class="page">
    <header class="header">
      <h1>IP Address Tracker</h1>

      <div class="search_bar">
        <div class="flex">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            v-model="ip"
            v-on:keyup.enter="getOwnIp()"
          />
          <p v-if="errorMessage" style="color: red; margin-left: 10px">{{ errorMessage }}</p>
        </div>
        <img src="./assets/icon-arrow.svg" height="40px" @click="handleClick" />
      </div>

      <IpData :displayData="displayData" :loading="loading" class="info-card" />
    </header>

    <main class="content">
      <div v-if="loading" class="map-loading">Loading map…</div>
      <Map v-else :lat="lat" :lang="lang" />
    </main>
  </div>
</template>

<script>
import IpData from './components/IpData.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: { IpData, Map },

  data() {
    return {
      ip: '',
      ipData: null,
      lat: null,
      lang: null,
      geoData: null,
      errorMessage: '',
      loading: true,

      displayData: {
        ip: '',
        city: '',
        region_code: '',
        postal: '',
        village: '',
        county: '',
        country: '',
        timezone: '',
        isp: '',
      },
    }
  },

  methods: {
    isValidIPv4(value) {
      const r =
        /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
      return r.test(value)
    },

    isValidIPv6(value) {
      const r =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/
      return r.test(value)
    },
    isValidSearch(value) {
      return this.isValidIPv4(value) || this.isValidIPv6(value)
    },
    getUserLocation() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error('Geolocation not supported'))
          return
        }

        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => reject(error),
        )
      })
    },

    async getCityFromCoords(lat, lang) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lang}`,
        )

        const data = await res.json()
        const geoData = data.address || 'Unknown'
        this.geoData = geoData
        return geoData
      } catch (e) {
        console.error('Reverse geocoding error', e)
      }
    },
    async handleClick() {
      if (this.ip && this.isValidSearch(this.ip.trim())) await this.init()
      else {
        this.errorMessage = 'Format invalide : entre une IPv4, une IPv6 ou un domaine.'
        this.loading = false
      }
    },

    async init() {
      this.loading = true
      try {
        const coords = await this.getUserLocation()
        this.lat = coords.latitude
        this.lang = coords.longitude

        const geoData = await this.getCityFromCoords(this.lat, this.lang)
        this.geoData = geoData

        await this.getOwnIp()
      } catch (e) {
        console.error('Init error:', e)
        await this.getOwnIp()
      } finally {
        this.loading = false
      }
    },

    async getOwnIp() {
      try {
        const q = encodeURIComponent(this.ip.trim())
        const url = this.ip
          ? `https://ip-tracker-proxy.mbenmaouche09.workers.dev/?q=${q}`
          : `https://ip-tracker-proxy.mbenmaouche09.workers.dev/`
        if (this.ip && !this.isValidSearch(this.ip.trim())) {
          this.errorMessage = 'Format invalide : entre une IPv4, une IPv6 ou un domaine.'
          return
        }
        this.errorMessage = ''
        const res = await fetch(url)

        if (!res.ok) throw new Error('Erreur API')
        const data = await res.json()
        this.displayData.isp = data.connection.isp
        this.displayData.timezone = data?.timezone?.utc || 'Unknown'
        this.displayData.isp = data.connection.isp
        this.displayData.ip = data.ip
        if (!data.success) return console.error(data.message)
        let geo

        // 🔹 Si l'utilisateur a tapé une IP → utiliser coords IP
        if (this.ip) {
          geo = await this.getCityFromCoords(data.latitude, data.longitude)
          this.lat = data.latitude
          this.lang = data.longitude
        }
        // 🔹 Sinon → utiliser GPS déjà récupéré
        else {
          geo = this.geoData
        }

        this.displayData = {
          ip: data.ip,
          city: geo?.city || geo?.town || geo?.city || '',
          region_code: geo?.county || '',
          postal: geo?.postcode || '',
          country: geo?.country || '',
          timezone: data?.timezone?.utc || '',
          isp: data?.connection?.isp || '',
          county: geo?.county || '',
          village: geo?.village || geo?.town || geo?.city || '',
        }
      } catch (e) {
        console.error('IP fetch error', e)
      }
    },
  },

  created() {
    this.init()
  },
  watch: {
    ip(newValue) {
      if (!newValue.trim()) {
        this.errorMessage = ''
      }
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.map-loading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.08);
}

.header {
  background-image: url('./assets/pattern-bg-desktop.png');
  background-size: cover;
  height: 250px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 25px;
}

.search_bar {
  margin-top: 20px;
  display: flex;
}

input {
  width: 400px;
  height: 40px;
  border-radius: 10px 0 0 10px;
  border: none;
  padding-left: 10px;
}

.search_bar img {
  background: black;
  padding: 10px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
}

.content {
  flex: 1;
  display: flex;
}
@media (max-width: 768px) {
  input {
    width: 58vw;
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
}
</style>
