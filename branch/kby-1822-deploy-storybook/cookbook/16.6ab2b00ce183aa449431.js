(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NnGZ:function(i,t,r){"use strict";r.r(t),r.d(t,"kirby_badge",function(){return e});var o=r("U2RL");const e=class{constructor(i){Object(o.e)(this,i),this.size="md"}get cssClass(){return(i=>{const t={};return(i=>void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])([this.size,this.themeColor]).forEach(i=>t[i]=!0),t})()}get badgeContent(){return"sm"===this.size?Object(o.c)("span",null):this.text?Object(o.c)("span",null,this.text):Object(o.c)("slot",null)}render(){return Object(o.c)(o.a,{class:this.cssClass},Object(o.c)("ion-badge",null,this.badgeContent))}};e.style=":host{position:var(--kirby-badge-position, relative);left:var(--kirby-badge-left, auto);right:var(--kirby-badge-right, auto);top:var(--kirby-badge-top, auto);z-index:var(--kirby-badge-z-index, none);font-size:10px;line-height:1}:host ion-badge{--background:var(--kirby-white);--color:var(--kirby-white-contrast);--ion-color-base:var(--kirby-badge-background-color);--ion-color-contrast:var(--kirby-badge-color);box-sizing:border-box;border-radius:8px;font-size:inherit;position:relative;box-shadow:var(--kirby-badge-elevation, none)}:host ::slotted(kirby-icon){--kirby-icon-font-size:16px;position:absolute;top:0;left:0}:host(.sm) ion-badge{padding:initial;min-height:initial;min-width:initial;height:8px;width:8px}:host(.md) ion-badge{--padding-top:3px;--padding-end:5px;--padding-bottom:3px;--padding-start:5px;min-width:16px;min-height:16px}:host(.success) ion-badge{--background:var(--kirby-success);--color:var(--kirby-badge-color, var(--kirby-success-contrast))}:host(.warning) ion-badge{--background:var(--kirby-warning);--color:var(--kirby-badge-color, var(--kirby-warning-contrast))}:host(.danger) ion-badge{--background:var(--kirby-danger);--color:var(--kirby-badge-color, var(--kirby-text-color-white))}"}}]);