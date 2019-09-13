// Import vue component
import component from './vue-capture-install-event.vue';

window.VCIE_installEvent = null

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueCaptureInstallEvent', component);

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
  }, true)
}

// Create module definition for Vue.use()
export default {
  install,
}
