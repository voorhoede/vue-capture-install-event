<template>
  <component :is="tag" v-if="installEvent" @click="executeInstallEvent">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CaptureInstallEvent',
  props: {
    /**
      * The tag that the component should be rendered as
     */
    tag: {
      type: String,
      default: 'div',
    },
  },
  data() {
    return {
      installEvent: null,
      beforeinstallpromptEventListener: null,
      appinstalledEventListener: null,
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', this.saveInstallPrompt, true)
    window.addEventListener('appinstalled', this.clearInstallPrompt, true)
  },
  destroyed() {
    window.removeEventListener('beforeinstallprompt', this.saveInstallPrompt, true)
    window.removeEventListener('appinstalled', this.clearInstallPrompt, true)
  },
  methods: {
    executeInstallEvent() {
      if (this.installEvent) {
        this.installEvent.prompt()
      }
    },
    saveInstallPrompt(event) {
      event.preventDefault()
      this.installEvent = event
    },
    clearInstallPrompt() {
      this.installEvent = null
    },
  },
}
</script>
