<template>
  <div class="ip-datas">
    <div class="box box-first">
      <span>IP ADDRESS</span>
      <h1>
        <template v-if="!loading">
          {{ displayData?.ip }}
        </template>
        <div v-else class="skeleton"></div>
      </h1>
    </div>
    <div class="box">
      <span>LOCATION</span>
      <h1>
        <template v-if="!loading">
          {{ displayData?.village }}, {{ displayData?.county }}, {{ displayData?.postal }},
          {{ displayData?.country }}
        </template>
        <div v-else class="skeleton"></div>
      </h1>
    </div>
    <div class="box">
      <span>TIMEZONE</span>
      <h1>
        <template v-if="!loading"> UTC{{ displayData?.timezone }} </template>
        <div v-else class="skeleton"></div>
      </h1>
    </div>
    <div class="box">
      <span>ISP</span>
      <h1>
        <template v-if="!loading">
          {{ displayData?.isp }}
        </template>
        <div v-else class="skeleton"></div>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  height: 18px;
  width: 80px;
  border-radius: 6px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.ip-datas {
  position: relative;
  top: 20%;
  z-index: 1000;
  background: white;
  padding: 25px 40px;
  width: 80%;
  max-width: 900px;

  margin: 0 auto;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  text-align: left;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding: 0 20px;
  border-left: 1px solid #ddd;
}
.box-first {
  border-left: none;
  padding-left: 0;
}
.box h1 {
  font-size: 16px;
  font-weight: bold;
  color: black;
}
span {
  font-size: 10px;
  color: rgb(168, 168, 168);
}

@media (max-width: 768px) {
  .box h1 {
    font-size: 13px;
    color: black;
  }
  .ip-datas {
    width: 61vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8px 0px;
  }
  .box-first {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
    padding: 0 20px;
    border-left: 1px solid #ddd;
  }
  .box {
    border-left: none;
    padding: 4px 2px;
    gap: 1px;
  }
}
</style>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  components: { Loading },

  props: {
    displayData: {
      type: Object,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },
}
</script>
