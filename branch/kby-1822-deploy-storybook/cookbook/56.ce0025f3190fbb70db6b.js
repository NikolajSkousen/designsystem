(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{TpdJ:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_tab",function(){return a}),i.d(e,"ion_tabs",function(){return r});var n=i("20ZU"),s=i("wEJo"),o=i("acej");i("1vRN");const a=class{constructor(t){Object(s.o)(this,t),this.loaded=!1,this.active=!1}componentWillLoad(){var t=this;return Object(n.a)(function*(){t.active&&(yield t.setActive())})()}setActive(){var t=this;return Object(n.a)(function*(){yield t.prepareLazyLoaded(),t.active=!0})()}changeActive(t){t&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(o.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}render(){const{tab:t,active:e,component:i}=this;return Object(s.j)(s.c,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===i,"tab-hidden":!e}},Object(s.j)("slot",null))}get el(){return Object(s.k)(this)}static get watchers(){return{active:["changeActive"]}}};a.style=":host(.tab-hidden){display:none !important}";const r=class{constructor(t){Object(s.o)(this,t),this.ionNavWillLoad=Object(s.g)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(s.g)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(s.g)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=t=>{const{href:e,tab:i}=t.detail;if(this.useRouter&&void 0!==e){const t=document.querySelector("ion-router");t&&t.push(e)}else this.select(i)}}componentWillLoad(){var t=this;return Object(n.a)(function*(){if(t.useRouter||(t.useRouter=!!document.querySelector("ion-router")&&!t.el.closest("[no-router]")),!t.useRouter){const e=t.tabs;e.length>0&&(yield t.select(e[0]))}t.ionNavWillLoad.emit()})()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}select(t){var e=this;return Object(n.a)(function*(){const i=c(e.tabs,t);return!!e.shouldSwitch(i)&&(yield e.setActive(i),yield e.notifyRouter(),e.tabSwitch(),!0)})()}getTab(t){var e=this;return Object(n.a)(function*(){return c(e.tabs,t)})()}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(t){var e=this;return Object(n.a)(function*(){const i=c(e.tabs,t);return e.shouldSwitch(i)?(yield e.setActive(i),{changed:!0,element:e.selectedTab,markVisible:()=>e.tabSwitch()}):{changed:!1,element:e.selectedTab}})()}getRouteId(){var t=this;return Object(n.a)(function*(){const e=t.selectedTab&&t.selectedTab.tab;return void 0!==e?{id:e,element:t.selectedTab}:void 0})()}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return Object(s.j)(s.c,{onIonTabButtonClick:this.onTabClicked},Object(s.j)("slot",{name:"top"}),Object(s.j)("div",{class:"tabs-inner"},Object(s.j)("slot",null)),Object(s.j)("slot",{name:"bottom"}))}get el(){return Object(s.k)(this)}},c=(t,e)=>{const i="string"==typeof e?t.find(t=>t.tab===e):e;return i||console.error(`tab with id: "${i}" does not exist`),i};r.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);