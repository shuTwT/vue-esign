import vueEsign from './vueEsign.vue'

vueEsign.install = function (app:any) {
  if (this.installed) {
    return
  }
  this.installed = true
  app.component('vueEsign', vueEsign)
}

export default vueEsign;
