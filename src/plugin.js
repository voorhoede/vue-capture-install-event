// Import vue component
import VueCaptureInstallEvent from './vue-capture-install-event.vue';

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueCaptureInstallEvent', VueCaptureInstallEvent);

  Vue.prototype.$installEvent = null

  window.addEventListener('beforeinstallprompt', (event) => {
    Vue.prototype.$installEvent = event
    event.preventDefault()
  }, true)
}

// Create module definition for Vue.use()
export default {
  install,
}
