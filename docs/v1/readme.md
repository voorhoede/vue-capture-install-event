# @voorhoede/vue-capture-install-event

**Save the PWA install event for later**

When visiting a PWA users often gets prompted with a banner asking if they want to install it to their homescreen:

<figure>
  <img src="./img/infobar.png">
  <figcaption>The prompt (although its looks often change over time)</figcaption>
</figure>

This component prevents the prompt from showing up and saves the event. This gives the developer the oppertunity to use this event at a chosen time. This way the likeability of the app getting installed will be much bigger.

[[toc]]

## Installation

```
npm install @voorhoede/vue-capture-install-event
```

## Usage

Your application needs to be a PWA that [meets all the requirements](https://developers.google.com/web/fundamentals/app-install-banners/#criteria) to trigger the install prompt. Make sure you implement these into your app before moving forward, otherwise using this component would make no sense.

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueCaptureInstallEvent from '@voorhoede/vue-capture-install-event'

Vue.use(VueCaptureInstallEvent)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="@voorhoede/vue-capture-install-event/dist/vue-capture-install-event.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/@voorhoede/vue-capture-install-event"></script>
```

## Examples

<video width="600" controls autoplay>
  <source src="./img/pwa-example.mp4" type="video/mp4">
</video>

::: demo
<vue-capture-install-event><button>Install this PWA</button></vue-capture-install-event>
:::

<!-- The API section is auto generated, don't touch please -->

## API

### capture-install-event 

#### slots 

- `default` 

#### props 

- `tag` ***String*** (*optional*) `default: 'div'` 

  The tag that the component should be rendered as 
