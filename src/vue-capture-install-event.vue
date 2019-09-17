<template>
  <component :is="tag" v-if="show" @click="executeInstallEvent">
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
      show: false,
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', this.onInstallable, true)
    window.addEventListener('appinstalled', this.onInstall, true)
  },
  destroyed() {
    window.removeEventListener('beforeinstallprompt', this.onInstallable, true)
    window.removeEventListener('appinstalled', this.onInstall, true)
  },
  methods: {
    executeInstallEvent() {
      this.$installEvent.prompt()

      this.$installEvent.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            /**
             * Emitted when the prompt is accepted by the user
             */
            this.$emit('installed')
          } else {
            /**
             * Emitted when the prompt is dismissed by the user
             */
            this.$emit('dismissed')
          }
        });
    },
    onInstallable() {
      this.show = true
    },
    onInstall() {
      this.show = false
    },
  },
}
</script>
