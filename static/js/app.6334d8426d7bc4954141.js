webpackJsonp([1],{"0SF1":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("vue-ins-progress-bar")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},a,!1,function(e){s("0SF1")},null,null).exports,o=s("/ocq"),r={name:"HomePage",data:()=>({text:"to finish",isLoading:!0,handler:null,loaded:!1}),methods:{onload(){this.loaded=!0},start(){this.$insProgress.start()},finish(){this.$insProgress.finish()},change(e){this.isLoading=e.value,this.text=this.isLoading?"to finish":"to start",this.isLoading?this.start():this.finish()}},created(){this.$insProgress.start()},mounted(){this.handler=(()=>{this.onload()}),window.addEventListener("load",this.handler)},beforeDestroy(){window.removeEventListener("load",this.handler)}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("img",{staticClass:"rainbow",style:{opacity:e.loaded?1:0},attrs:{src:"https://user-images.githubusercontent.com/11075892/42421484-e620f0d8-8308-11e8-8b6c-0e659eadfcd3.png"}}),e._v(" "),s("br"),e._v(" "),s("h2",{staticClass:"switch",style:{opacity:e.loaded?1:0}},[e._v("Press  "),s("toggle-button",{attrs:{value:e.isLoading,labels:{checked:"Loading",unchecked:"Finished"},width:80},on:{change:e.change}}),e._v("  "+e._s(e.text))],1)])},staticRenderFns:[]};var h=s("VU/8")(r,d,!1,function(e){s("kah0")},"data-v-7ad45fa0",null).exports;n.default.use(o.a);var l=new o.a({routes:[{path:"/",name:"HomePage",component:h}]}),c=s("CmzC"),u=s.n(c),p=s("nkUn"),f=s.n(p);n.default.config.productionTip=!1;n.default.use(u.a,{position:"fixed",show:!0,height:"3px"}),n.default.use(f.a),new n.default({el:"#app",router:l,components:{App:i},template:"<App/>"})},kah0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6334d8426d7bc4954141.js.map