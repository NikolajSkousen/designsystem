"use strict";(globalThis.webpackChunkdesignsystem=globalThis.webpackChunkdesignsystem||[]).push([[5675],{25182:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hapticSelectionStart,b:()=>hapticSelectionChanged,c:()=>hapticSelection,d:()=>hapticImpact,h:()=>hapticSelectionEnd});const HapticEngine={getEngine(){const win=window;return win.TapticEngine||win.Capacitor&&win.Capacitor.isPluginAvailable("Haptics")&&win.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.impact({style})},notification(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.notification({style})},selection(){this.impact({style:"light"})},selectionStart(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionStart():engine.gestureSelectionStart())},selectionChanged(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionChanged():engine.gestureSelectionChanged())},selectionEnd(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionEnd():engine.gestureSelectionEnd())}},hapticSelection=()=>{HapticEngine.selection()},hapticSelectionStart=()=>{HapticEngine.selectionStart()},hapticSelectionChanged=()=>{HapticEngine.selectionChanged()},hapticSelectionEnd=()=>{HapticEngine.selectionEnd()},hapticImpact=options=>{HapticEngine.impact(options)}},25675:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_reorder:()=>Reorder,ion_reorder_group:()=>ReorderGroup});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47854),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22035),_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25182);const Reorder=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}onClick(ev){const reorderGroup=this.el.closest("ion-reorder-group");ev.preventDefault(),reorderGroup&&reorderGroup.disabled||ev.stopImmediatePropagation()}render(){const mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),reorderIcon="ios"===mode?"reorder-three-outline":"reorder-two-sharp";return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:mode},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null,(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{name:reorderIcon,lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}};Reorder.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const ReorderGroup=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionItemReorder=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const contentEl=this.el.closest("ion-content");contentEl&&(this.scrollEl=await contentEl.getScrollElement()),this.gesture=(await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,86326))).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:detail=>this.canStart(detail),onStart:ev=>this.onStart(ev),onMove:ev=>this.onMove(ev),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(listOrReorder){return Promise.resolve(this.completeSync(listOrReorder))}canStart(ev){if(this.selectedItemEl||0!==this.state)return!1;const reorderEl=ev.event.target.closest("ion-reorder");if(!reorderEl)return!1;const item=findReorderItem(reorderEl,this.el);return!!item&&(ev.data=item,!0)}onStart(ev){ev.event.preventDefault();const item=this.selectedItemEl=ev.data,heights=this.cachedHeights;heights.length=0;const el=this.el,children=el.children;if(!children||0===children.length)return;let sum=0;for(let i=0;i<children.length;i++){const child=children[i];sum+=child.offsetHeight,heights.push(sum),child.$ionIndex=i}const box=el.getBoundingClientRect();if(this.containerTop=box.top,this.containerBottom=box.bottom,this.scrollEl){const scrollBox=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=scrollBox.top+AUTO_SCROLL_MARGIN,this.scrollElBottom=scrollBox.bottom-AUTO_SCROLL_MARGIN}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=indexForItem(item),this.selectedItemHeight=item.offsetHeight,this.state=1,item.classList.add(ITEM_REORDER_SELECTED),(0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.a)()}onMove(ev){const selectedItem=this.selectedItemEl;if(!selectedItem)return;const scroll=this.autoscroll(ev.currentY),top=this.containerTop-scroll,bottom=this.containerBottom-scroll,currentY=Math.max(top,Math.min(ev.currentY,bottom)),deltaY=scroll+currentY-ev.startY,normalizedY=currentY-top,toIndex=this.itemIndexForTop(normalizedY);if(toIndex!==this.lastToIndex){const fromIndex=indexForItem(selectedItem);this.lastToIndex=toIndex,(0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.b)(),this.reorderMove(fromIndex,toIndex)}selectedItem.style.transform=`translateY(${deltaY}px)`}onEnd(){const selectedItemEl=this.selectedItemEl;if(this.state=2,!selectedItemEl)return void(this.state=0);const toIndex=this.lastToIndex,fromIndex=indexForItem(selectedItemEl);toIndex===fromIndex?this.completeSync():this.ionItemReorder.emit({from:fromIndex,to:toIndex,complete:this.completeSync.bind(this)}),(0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__.h)()}completeSync(listOrReorder){const selectedItemEl=this.selectedItemEl;if(selectedItemEl&&2===this.state){const children=this.el.children,len=children.length,toIndex=this.lastToIndex,fromIndex=indexForItem(selectedItemEl);if(toIndex!==fromIndex&&(void 0===listOrReorder||!0===listOrReorder)){const ref=fromIndex<toIndex?children[toIndex+1]:children[toIndex];this.el.insertBefore(selectedItemEl,ref)}Array.isArray(listOrReorder)&&(listOrReorder=reorderArray(listOrReorder,fromIndex,toIndex));for(let i=0;i<len;i++)children[i].style.transform="";selectedItemEl.style.transition="",selectedItemEl.classList.remove(ITEM_REORDER_SELECTED),this.selectedItemEl=void 0,this.state=0}return listOrReorder}itemIndexForTop(deltaY){const heights=this.cachedHeights;let i=0;for(i=0;i<heights.length&&!(heights[i]>deltaY);i++);return i}reorderMove(fromIndex,toIndex){const itemHeight=this.selectedItemHeight,children=this.el.children;for(let i=0;i<children.length;i++){const style=children[i].style;let value="";i>fromIndex&&i<=toIndex?value=`translateY(${-itemHeight}px)`:i<fromIndex&&i>=toIndex&&(value=`translateY(${itemHeight}px)`),style.transform=value}}autoscroll(posY){if(!this.scrollEl)return 0;let amount=0;return posY<this.scrollElTop?amount=-SCROLL_JUMP:posY>this.scrollElBottom&&(amount=SCROLL_JUMP),0!==amount&&this.scrollEl.scrollBy(0,amount),this.scrollEl.scrollTop-this.scrollElInitial}render(){const mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},indexForItem=element=>element.$ionIndex,findReorderItem=(node,container)=>{let parent;for(;node;){if(parent=node.parentElement,parent===container)return node;node=parent}},AUTO_SCROLL_MARGIN=60,SCROLL_JUMP=10,ITEM_REORDER_SELECTED="reorder-selected",reorderArray=(array,from,to)=>{const element=array[from];return array.splice(from,1),array.splice(to,0,element),array.slice()};ReorderGroup.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);