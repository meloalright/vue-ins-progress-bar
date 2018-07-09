'use strict'

import vueInsProgressBar from './vue-ins-progress-bar.vue'

function install (Vue, options = {}) {
    const inBrowser = typeof window !== 'undefined'

    const DEFAULT_OPTION = {
        show: false,
        __isDisplay: false,
        position: 'fixed',
        height: '3px'
    }

    let insProgress = {
        $vm: null,
        state: {
            timer: null
        },
        init (vm) {
            this.$vm = vm
        },
        start (time) {
            if (!this.$vm) return
            clearTimeout(this.timer)
            this.timer = null
            this.$vm.INSPB.options.show = true
            this.$vm.INSPB.options.__isDisplay = true
        },
        height (h) {
            this.$vm.INSPB.options.height = `${h}px`
        },
        __hide () {
            if (this.timer) { return }
            setTimeout(() => {
                this.$vm.INSPB.options.show = false
                this.timer = setTimeout(() => {
                    this.$vm.INSPB.options.__isDisplay = false
                    this.timer = null
                }, 1000)
            }, 100)
        },
        finish () {
            if (!this.$vm) return
            this.__hide()
        }
    }

    let progressOptions = Object.assign(DEFAULT_OPTION, options)

    const INSPBEventBus = new Vue({
        data: {
            INSPB: {
                options: progressOptions
            }
        }
    })

    if (inBrowser) {
        window.INSPBEventBus = INSPBEventBus
        insProgress.init(INSPBEventBus)
    }

    Vue.component('vue-ins-progress-bar', vueInsProgressBar)

    Vue.prototype.$insProgress = insProgress
}

export default {
    install
}
