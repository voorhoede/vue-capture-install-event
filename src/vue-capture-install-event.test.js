
import { shallowMount } from '@vue/test-utils'
import VueCaptureInstallEvent from './vue-capture-install-event.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueCaptureInstallEvent)
  expect(wrapper.exists()).toBe(true)
})
