(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_refresher",(function(){return Refresher})),__webpack_require__.d(__webpack_exports__,"ion_refresher_content",(function(){return RefresherContent}));var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(79),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(80),_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(536),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(69),_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1263),_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38),_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(537),_spinner_configs_cd7845af_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1269);const createBaseAnimation=pullingRefresherIcon=>{const spinner=pullingRefresherIcon.querySelector("ion-spinner"),circle=spinner.shadowRoot.querySelector("circle"),spinnerArrowContainer=pullingRefresherIcon.querySelector(".spinner-arrow-container"),arrowContainer=pullingRefresherIcon.querySelector(".arrow-container"),arrow=arrowContainer?arrowContainer.querySelector("ion-icon"):null,baseAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().duration(1e3).easing("ease-out"),spinnerArrowContainerAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(spinnerArrowContainer).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),circleInnerAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(circle).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),circleOuterAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(spinner).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(arrowContainer&&arrow){const arrowContainerAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(arrowContainer).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),arrowAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(arrow).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);baseAnimation.addAnimation([arrowContainerAnimation,arrowAnimation])}return baseAnimation.addAnimation([spinnerArrowContainerAnimation,circleInnerAnimation,circleOuterAnimation])},createScaleAnimation=pullingRefresherIcon=>{const height=pullingRefresherIcon.clientHeight,spinnerAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(pullingRefresherIcon).keyframes([{offset:0,transform:`scale(0) translateY(-${height+20}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation])},createTranslateAnimation=pullingRefresherIcon=>{const height=pullingRefresherIcon.clientHeight,spinnerAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().addElement(pullingRefresherIcon).keyframes([{offset:0,transform:`translateY(-${height+20}px)`},{offset:1,transform:"translateY(100px)"}]);return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation])},setSpinnerOpacity=(spinner,opacity)=>{spinner.style.setProperty("opacity",opacity.toString())},translateElement=(el,value)=>{if(!el)return Promise.resolve();const trans=transitionEndAsync(el,200);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>{el.style.setProperty("transition","0.2s all ease-out"),void 0===value?el.style.removeProperty("transform"):el.style.setProperty("transform",`translate3d(0px, ${value}, 0px)`)})),trans},shouldUseNativeRefresher=async(referenceEl,mode)=>{const refresherContent=referenceEl.querySelector("ion-refresher-content");if(!refresherContent)return Promise.resolve(!1);await new Promise((resolve=>Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.c)(refresherContent,resolve)));const pullingSpinner=referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),refreshingSpinner=referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==pullingSpinner&&null!==refreshingSpinner&&("ios"===mode&&Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.a)("mobile")&&void 0!==referenceEl.style.webkitOverflowScrolling||"md"===mode)},transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},Refresher=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.ionRefresh=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionRefresh",7),this.ionPull=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionPull",7),this.ionStart=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async checkNativeRefresher(){const useNativeRefresher=await shouldUseNativeRefresher(this.el,Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this));if(useNativeRefresher&&!this.nativeRefresher){const contentEl=this.el.closest("ion-content");this.setupNativeRefresher(contentEl)}else useNativeRefresher||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(el,state){this.state=state,"ios"===Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)?await translateElement(el,void 0):await transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach((ani=>ani.destroy())),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(pullingSpinner,refreshingSpinner){this.elementToTransform=this.scrollEl;const ticks=pullingSpinner.shadowRoot.querySelectorAll("svg");let MAX_PULL=.16*this.scrollEl.clientHeight;const NUM_TICKS=ticks.length;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>ticks.forEach((el=>el.style.setProperty("animation","none"))))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)((()=>{const scrollTop=this.scrollEl.scrollTop,refresherHeight=this.el.clientHeight;if(scrollTop>0){if(8===this.state){const ratio=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.j)(0,scrollTop/(.5*refresherHeight),1);return void Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>setSpinnerOpacity(refreshingSpinner,1-ratio)))}return void Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>setSpinnerOpacity(pullingSpinner,0)))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const opacity=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.j)(0,Math.abs(scrollTop)/refresherHeight,.99),pullAmount=this.progress=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.j)(0,(Math.abs(scrollTop)-30)/MAX_PULL,1),currentTickToShow=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.j)(0,Math.floor(pullAmount*NUM_TICKS),NUM_TICKS-1);var spinner,lastVelocityY;8===this.state||currentTickToShow===NUM_TICKS-1?(this.pointerDown&&(spinner=refreshingSpinner,lastVelocityY=this.lastVelocityY,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>{spinner.style.setProperty("--refreshing-rotation-duration",lastVelocityY>=1?"0.5s":"2s"),spinner.style.setProperty("opacity","1")}))),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_4__.d)({style:"light"}),this.pointerDown||translateElement(this.elementToTransform,`${refresherHeight}px`))):(this.state=2,((spinner,ticks,opacity,currentTickToShow)=>{Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>{setSpinnerOpacity(spinner,opacity),ticks.forEach(((el,i)=>el.style.setProperty("opacity",i<=currentTickToShow?"0.99":"0")))}))})(pullingSpinner,ticks,opacity,currentTickToShow))}))},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await Promise.resolve().then(__webpack_require__.bind(null,535))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||translateElement(this.elementToTransform,"0px"),0===MAX_PULL&&(MAX_PULL=.16*this.scrollEl.clientHeight)},onMove:ev=>{this.lastVelocityY=ev.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)((()=>translateElement(this.elementToTransform,`${this.el.clientHeight}px`)))}}),this.disabledChanged()}async setupMDNativeRefresher(contentEl,pullingSpinner,refreshingSpinner){const circle=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.g)(pullingSpinner).querySelector("circle"),pullingRefresherIcon=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),refreshingCircle=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.g)(refreshingSpinner).querySelector("circle");null!==circle&&null!==refreshingCircle&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>{circle.style.setProperty("animation","none"),refreshingSpinner.style.setProperty("animation-delay","-655ms"),refreshingCircle.style.setProperty("animation-delay","-655ms")})),this.gesture=(await Promise.resolve().then(__webpack_require__.bind(null,535))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:ev=>{ev.data={animation:void 0,didStart:!1,cancelled:!1},this.state=2},onMove:ev=>{if(ev.velocityY<0&&0===this.progress&&!ev.data.didStart||ev.data.cancelled)ev.data.cancelled=!0;else{if(!ev.data.didStart){ev.data.didStart=!0,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>this.scrollEl.style.setProperty("--overflow","hidden")));const animation=((type,pullingSpinner)=>"scale"===type?createScaleAnimation(pullingSpinner):createTranslateAnimation(pullingSpinner))((contentEl=>{const previousSibling=contentEl.previousElementSibling;return null!==previousSibling&&"ION-HEADER"===previousSibling.tagName?"translate":"scale"})(contentEl),pullingRefresherIcon);return ev.data.animation=animation,animation.progressStart(!1,0),this.ionStart.emit(),void this.animations.push(animation)}this.progress=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.j)(0,ev.deltaY/180*.5,1),ev.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:ev=>{if(!ev.data.didStart)return;if(Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>this.scrollEl.style.removeProperty("--overflow"))),this.progress<=.4)return this.gesture.enable(!1),void ev.data.animation.progressEnd(0,this.progress,500).onFinish((()=>{this.animations.forEach((ani=>ani.destroy())),this.animations=[],this.gesture.enable(!0),this.state=1}));const progress=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__.a)([0,0],[0,0],[1,1],[1,1],this.progress)[0],snapBackAnimation=(pullingRefresherIcon=>Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)().duration(125).addElement(pullingRefresherIcon).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(pullingRefresherIcon);this.animations.push(snapBackAnimation),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((async()=>{pullingRefresherIcon.style.setProperty("--ion-pulling-refresher-translate",100*progress+"px"),ev.data.animation.progressEnd(),await snapBackAnimation.play(),this.beginRefresh(),ev.data.animation.destroy()}))}}),this.disabledChanged()}async setupNativeRefresher(contentEl){if(this.scrollListenerCallback||!contentEl||this.nativeRefresher||!this.scrollEl)return;this.setCss(0,"",!1,""),this.nativeRefresher=!0;const pullingSpinner=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),refreshingSpinner=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)?this.setupiOSNativeRefresher(pullingSpinner,refreshingSpinner):this.setupMDNativeRefresher(contentEl,pullingSpinner,refreshingSpinner)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const contentEl=this.el.closest("ion-content");contentEl?(await new Promise((resolve=>Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl,resolve))),this.scrollEl=await contentEl.getScrollElement(),this.backgroundContentEl=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.g)(contentEl).querySelector("#background-content"),await shouldUseNativeRefresher(this.el,Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this))?this.setupNativeRefresher(contentEl):(this.gesture=(await Promise.resolve().then(__webpack_require__.bind(null,535))).createGesture({el:contentEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:ev=>this.onMove(ev),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.q)((()=>Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.q)((()=>this.resetNativeRefresher(this.elementToTransform,32)))))):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.q)((()=>Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_3__.q)((()=>this.resetNativeRefresher(this.elementToTransform,16))))):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!!this.scrollEl&&(1===this.state&&!(this.scrollEl.scrollTop>0))}onStart(){this.progress=0,this.state=1}onMove(detail){if(!this.scrollEl)return;const ev=detail.event;if(ev.touches&&ev.touches.length>1)return;if(0!=(56&this.state))return;const pullFactor=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,deltaY=detail.deltaY*pullFactor;if(deltaY<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(ev.cancelable&&ev.preventDefault(),this.setCss(deltaY,"0ms",!0,""),0===deltaY)return void(this.progress=0);const pullMin=this.pullMin;this.progress=deltaY/pullMin,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),deltaY<pullMin?this.state=2:deltaY>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(state,delay){setTimeout((()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")}),600),this.state=state,this.setCss(0,this.closeDuration,!0,delay)}setCss(y,duration,overflowVisible,delay){this.nativeRefresher||(this.appliedStyles=y>0,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)((()=>{if(this.scrollEl&&this.backgroundContentEl){const scrollStyle=this.scrollEl.style,backgroundStyle=this.backgroundContentEl.style;scrollStyle.transform=backgroundStyle.transform=y>0?`translateY(${y}px) translateZ(0px)`:"",scrollStyle.transitionDuration=backgroundStyle.transitionDuration=duration,scrollStyle.transitionDelay=backgroundStyle.transitionDelay=delay,scrollStyle.overflow=overflowVisible?"hidden":""}})))}render(){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{slot:"fixed",class:{[mode]:!0,[`refresher-${mode}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};Refresher.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};const RefresherContent=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef)}componentWillLoad(){if(void 0===this.pullingIcon){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),overflowRefresher=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("refreshingIcon","ios"===mode&&Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.a)("mobile")?_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner",overflowRefresher):"circular")}if(void 0===this.refreshingSpinner){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);this.refreshingSpinner=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("refreshingSpinner",_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner","ios"===mode?"lines":"circular"))}}render(){const pullingIcon=this.pullingIcon,hasSpinner=null!=pullingIcon&&void 0!==_spinner_configs_cd7845af_js__WEBPACK_IMPORTED_MODULE_7__.a[pullingIcon],mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{class:mode},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-pulling"},this.pullingIcon&&hasSpinner&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-pulling-icon"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"spinner-arrow-container"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===mode&&"circular"===this.pullingIcon&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"arrow-container"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!hasSpinner&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-pulling-icon"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-pulling-text",innerHTML:Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.pullingText)})),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-refreshing-icon"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"refresher-refreshing-text",innerHTML:Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.refreshingText)})))}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}}},1263:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hapticSelectionStart})),__webpack_require__.d(__webpack_exports__,"b",(function(){return hapticSelectionChanged})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hapticSelection})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hapticImpact})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hapticSelectionEnd}));const HapticEngine={getEngine(){const win=window;return win.TapticEngine||win.Capacitor&&win.Capacitor.isPluginAvailable("Haptics")&&win.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.impact({style:style})},notification(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.notification({style:style})},selection(){this.impact({style:"light"})},selectionStart(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionStart():engine.gestureSelectionStart())},selectionChanged(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionChanged():engine.gestureSelectionChanged())},selectionEnd(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionEnd():engine.gestureSelectionEnd())}},hapticSelection=()=>{HapticEngine.selection()},hapticSelectionStart=()=>{HapticEngine.selectionStart()},hapticSelectionChanged=()=>{HapticEngine.selectionChanged()},hapticSelectionEnd=()=>{HapticEngine.selectionEnd()},hapticImpact=options=>{HapticEngine.impact(options)}},1269:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SPINNERS}));const SPINNERS={bubbles:{dur:1e3,circles:9,fn:(dur,index,total)=>{const animationDelay=dur*index/total-dur+"ms",angle=2*Math.PI*index/total;return{r:5,style:{top:9*Math.sin(angle)+"px",left:9*Math.cos(angle)+"px","animation-delay":animationDelay}}}},circles:{dur:1e3,circles:8,fn:(dur,index,total)=>{const step=index/total,animationDelay=dur*step-dur+"ms",angle=2*Math.PI*step;return{r:5,style:{top:9*Math.sin(angle)+"px",left:9*Math.cos(angle)+"px","animation-delay":animationDelay}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(_,index)=>({r:6,style:{left:9-9*index+"px","animation-delay":-110*index+"ms"}})},lines:{dur:1e3,lines:12,fn:(dur,index,total)=>({y1:17,y2:29,style:{transform:`rotate(${30*index+(index<6?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(dur,index,total)=>({y1:12,y2:20,style:{transform:`rotate(${30*index+(index<6?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})}}}}]);