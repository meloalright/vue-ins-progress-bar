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
            timer: { fadeAway: null, fill: null },
            isFull: false,
            isWFA: false
        },
        init (vm) {
            this.$vm = vm
        },
        __fillBeginning () {
            this.state.isFull = false
            this.$vm.INSPB.options.show = true
            this.$vm.INSPB.options.__isDisplay = true
        },
        __fillFinally () {
            this.state.isFull = true
            this.state.timer.fill = null
        },
        __fadeBeginning () {
            this.state.isWFA = false
            this.$vm.INSPB.options.show = false
        },
        __fadeFinally () {
            this.$vm.INSPB.options.__isDisplay = false
            this.state.timer.fadeAway = null
            this.state.isFull = null
        },
        __isFilling () {
            return this.state.timer.fill
        },
        __isFading () {
            return this.state.timer.fadeAway
        },
        __killFading () {
            clearTimeout(this.state.timer.fadeAway)
            this.state.isWFA = false
            this.state.timer.fadeAway = null
        },
        __waiting () {
            this.state.isWFA = true
        },
        __isWaiting () {
            return this.state.isWFA;
        },
        start (time) {
            if (!this.$vm) return
            this.__killFading();
            if (this.__isFilling()) return
            this.__fillBeginning();
            this.state.timer.fill = setTimeout(() => {
                this.__fillFinally()
                if (this.__isWaiting()) { this.finish() } 
            }, 500)
        },
        height (h) {
            this.$vm.INSPB.options.height = `${h}px`
        },
        __hide () {
            if (this.__isFading()) return
            if (this.__isFilling()) {
                this.__waiting()
                return
            }
            this.__fadeBeginning()
            this.state.timer.fadeAway = setTimeout(() => {
                this.__fadeFinally()
            }, 500)
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
