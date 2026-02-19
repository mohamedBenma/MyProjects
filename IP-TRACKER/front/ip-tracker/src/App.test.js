import { mount } from '@vue/test-utils'
import { vi, test, expect, beforeEach, afterEach } from 'vitest'
import App from './App.vue'

vi.mock('./components/Map.vue', () => ({
  default: { name: 'Map', props: ['lat', 'lang'], template: '<div />' },
}))

vi.mock('./components/IpData.vue', () => ({
  default: { name: 'IpData', props: ['displayData', 'loading'], template: '<div />' },
}))

beforeEach(() => {
  vi.restoreAllMocks()
  vi.spyOn(App.methods, 'init').mockImplementation(() => Promise.resolve())

  global.fetch = vi
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        ip: '8.8.8.8',
        latitude: 37.386,
        longitude: -122.0838,
        timezone: { utc: '-07:00' },
        connection: { isp: 'Google LLC' },
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        address: {
          city: 'Mountain View',
          postcode: '94043',
          county: 'Santa Clara County',
          country: 'United States',
        },
      }),
    })
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('getOwnIp sets lat and passes props to children (when searching IP)', async () => {
  const wrapper = mount(App)

  wrapper.vm.ip = '8.8.8.8'
  await wrapper.vm.getOwnIp()
  await wrapper.vm.$nextTick()

  expect(wrapper.vm.lat).toBe(37.386)

  const ipDataComp = wrapper.findComponent({ name: 'IpData' })
  expect(ipDataComp.props('displayData')).toMatchObject({
    ip: '8.8.8.8',
    postal: '94043',
    country: 'United States',
    timezone: '-07:00',
    isp: 'Google LLC',
  })
})
