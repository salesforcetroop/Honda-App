import{parseFragment as c,registerTemplate as m,freezeTemplate as g,registerDecorators as f,registerComponent as h,LightningElement as _}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F3_0_0/s/161b99d695053a1fe56ab76b88ac3049278f464f/bundle_lwc.js";const B=c`<div class="slds-text-heading_medium${0}"${2}>Fuel Consumption (litres/100km)<sup${3}>D32</sup></div>`,K=c`<div class="slds-text-heading_medium${0}"${2}>Seating Capacity</div>`,X=c`<div class="slds-text-heading_medium${0}"${2}>Alloy Wheels</div>`,q={classMap:{"slds-grid":!0,"slds-wrap":!0},key:0},G={classMap:{"slds-col":!0,"slds-size_12-of-12":!0},key:1},J={classMap:{"slds-col":!0,"slds-size_12-of-12":!0,"slds-large-size_4-of-12":!0,"slds-text-align_center":!0},key:3},Q={classMap:{"slds-text-heading_large":!0},key:4},Y={key:5},Z={classMap:{"slds-col":!0,"slds-size_12-of-12":!0,"slds-large-size_4-of-12":!0,"slds-text-align_center":!0},key:8},ee={classMap:{"slds-text-heading_large":!0},key:9},te={key:10},se={classMap:{"slds-col":!0,"slds-size_12-of-12":!0,"slds-large-size_4-of-12":!0,"slds-text-align_center":!0},key:13},re={classMap:{"slds-text-heading_large":!0},key:14},ae={key:15};function P(s,e,r,t){const{h:a,d:n,t:i,st:l}=s;return[a("div",q,[a("div",G,[a("img",{attrs:{src:e.selectedVariant.selectedimage,alt:"honda image"},key:2})]),a("div",J,[a("div",Q,[a("strong",Y,[i(n(e.selectedVariant.fuelConsumption))])]),l(B(),7)]),a("div",Z,[a("div",ee,[a("strong",te,[i(n(e.selectedVariant.seatingCapacity))])]),l(K(),12)]),a("div",se,[a("div",re,[a("strong",ae,[i(n(e.selectedVariant.allowWheels)+'"')])]),l(X(),17)])])]}var le=m(P);P.stylesheets=[],P.stylesheetToken="lwc-3re1gl0c0i7",g(P);function C(s,e){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),r.push.apply(r,t)}return r}function O(s){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?C(Object(r),!0).forEach(function(t){ie(s,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(r,t))})}return s}function ie(s,e,r){return e=ne(e),e in s?Object.defineProperty(s,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[e]=r,s}function ne(s){var e=oe(s,"string");return typeof e=="symbol"?e:String(e)}function oe(s,e){if(typeof s!="object"||s===null)return s;var r=s[Symbol.toPrimitive];if(r!==void 0){var t=r.call(s,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}class M extends _{constructor(...e){super(...e);this._selectedVariant={}}get selectedVariant(){return this._selectedVariant}set selectedVariant(e){if(e){let t=`/public/assets/honda/${e.variant.toLowerCase().replaceAll(" ","")}/${e.imageName}.png`;console.log("selectedimage",t),this._selectedVariant=O(O({},e),{},{selectedimage:t})}}}f(M,{publicProps:{selectedVariant:{config:3}},fields:["_selectedVariant"]});var ce=h(M,{tmpl:le,sel:"components-car-details",apiVersion:59});function de(s,e,r){var t=s?"["+s+"]":"";return"label"+t+'{font-size: 20px;border: 0.56px solid grey;padding: 12px 24px;width: 100%;color: black;border-radius: 5px;display: flex;justify-content: space-between;cursor: pointer;margin-bottom: 6px;background-color: #f2f2f2;}input[type="radio"]:checked'+t+"+label"+t+"{background-color: #ffc200;}"}var S=[de];const ue={"slds-hidden":!0},pe={"slds-radio__label":!0},me={key:3},ge={key:4};function y(s,e,r,t){const{k:a,gid:n,b:i,h:l,d:o,t:d,i:k}=s,{_m0:V}=t;return k(e.variants,function(u){return l("div",{key:a(0,u.variant)},[l("input",{classMap:ue,attrs:{type:"radio",id:n(u.variant),name:"variants"},props:{value:u.variant,checked:u.checked},key:1,on:{change:V||(t._m0=i(e.changeHandler))}}),l("label",{classMap:pe,attrs:{for:n(u.variant)},key:2},[l("span",me,[d(o(u.variant))]),l("span",ge,[d("From "+o(u.formattedPrice))])])])})}var fe=m(y);y.stylesheets=[],S&&y.stylesheets.push.apply(y.stylesheets,S),y.stylesheetToken="lwc-2l9ecvf6fe1",g(y);class j extends _{constructor(...e){super(...e);this.variants=void 0}changeHandler(e){const{value:r}=e.target;console.log("value",r);let t=this.variants.find(a=>a.variant===r);this.dispatchEvent(new CustomEvent("selection",{detail:{selected:t,variant:r}}))}}f(j,{publicProps:{variants:{config:0}}});var he=h(j,{tmpl:fe,sel:"components-range-selection",apiVersion:59});function _e(s,e,r){var t=s?"["+s+"]":"";return".color_circle"+t+"{height: 50px;width: 50px;display: block;border-radius: 50%;cursor: pointer;}.ignite_red"+t+" {background: linear-gradient(135deg, rgb(228, 26, 44) 24%, rgb(163, 2, 14) 62%, rgb(228, 26, 44) 62%, rgb(228, 26, 44) 62%, rgb(228, 26, 44) 100%);}.sporty_blue"+t+" {background: linear-gradient(135deg, rgb(0, 117, 217) 24%, rgb(0, 53, 192) 62%, rgb(0, 117, 217) 62%, rgb(0, 117, 217) 62%, rgb(0, 117, 217) 100%);}.crystal_black"+t+" {background: linear-gradient(135deg, rgb(48, 48, 48) 24%, rgb(26, 26, 27) 62%, rgb(48, 48, 48) 62%, rgb(48, 48, 48) 62%, rgb(48, 48, 48) 100%);}.platinum_white"+t+' {background: linear-gradient(135deg, rgb(234, 234, 233) 24%, rgb(197, 198, 192) 62%, rgb(234, 234, 233) 62%, rgb(234, 234, 233) 62%, rgb(234, 234, 233) 100%);}input[type="radio"]:checked'+t+"+label"+t+'{border: 5px solid #ffc200;}input[type="radio"]:checked'+t+"+label"+t+"+div"+t+"{color: #ffc200;}"}var N=[_e];const ye={classMap:{"slds-grid":!0,"slds-m-top_medium":!0},key:0},be={"slds-hidden":!0},ve={classMap:{"slds-text-heading_medium":!0,"slds-m-left_medium":!0},key:3};function b(s,e,r,t){const{gid:a,b:n,h:i,d:l,t:o}=s,{_m0:d}=t;return[i("div",ye,[i("input",{classMap:be,attrs:{type:"radio",id:a(e.color.value),name:"colors"},props:{checked:e.color.checked,value:e.color.value},key:1,on:{change:d||(t._m0=n(e.selectionHandler))}}),i("label",{className:e.colorSelectList,attrs:{for:a(e.color.value)},key:2}),i("div",ve,[o(l(e.color.label))])])]}var ke=m(b);b.stylesheets=[],N&&b.stylesheets.push.apply(b.stylesheets,N),b.stylesheetToken="lwc-739jhth4bt6",g(b);class D extends _{constructor(...e){super(...e);this.color=void 0}get colorSelectList(){return`slds-radio__label color_circle ${this.color.value}`}selectionHandler(e){this.dispatchEvent(new CustomEvent("colorselection",{detail:this.color.value}))}}f(D,{publicProps:{color:{config:0}}});var $e=h(D,{tmpl:ke,sel:"components-color-selection",apiVersion:59});function Pe(s,e,r){var t=s?"["+s+"]":"";return"footer"+t+"{background: #f2f2f2;padding: 32px;display: flex;align-items: center;border-top: 1px solid #cdcdcd;}.price"+t+"{font-size: 40px;}button"+t+"{padding: 8px 24px;font-size: 20px;border-radius: 20px;}"}var H=[Pe];const we=c`<sup${3}>*</sup>`,Ve=c`<button class="slds-button slds-button_destructive${0}"${2}>Save and Contact Us</button>`,xe={classMap:{"slds-p-around_medium":!0,"slds-wrap":!0,"slds-grid":!0,"slds-grid_align-spread":!0},key:0},Ce={classMap:{price:!0},key:1};function v(s,e,r,t){const{d:a,t:n,st:i,h:l,b:o}=s,{_m0:d,_m1:k}=t;return[l("footer",xe,[l("div",Ce,[n(a(e.formatedPrice)),i(we(),3)]),i(Ve(),5,{on:{click:k||(t._m1=o(e.contactUsHandler))}})])]}var Oe=m(v);v.stylesheets=[],H&&v.stylesheets.push.apply(v.stylesheets,H),v.stylesheetToken="lwc-jcicmu9s7k",g(v);class z extends _{constructor(...e){super(...e);this.price=void 0}get formatedPrice(){return this.formatter(this.price)}formatter(e){return e?new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD",maximumFractionDigits:0}).format(e):null}contactUsHandler(){this.dispatchEvent(new CustomEvent("openmodal",{}))}}f(z,{publicProps:{price:{config:0}}});var Me=h(z,{tmpl:Oe,sel:"components-price-footer",apiVersion:59});const Se=c`<div class="slds-backdrop slds-backdrop_open${0}" role="presentation"${2}></div>`,je={"slds-modal":!0,"slds-fade-in-open":!0},Ne={classMap:{"slds-modal__container":!0},key:1},De={classMap:{"slds-modal__header":!0},key:2},He={"slds-modal__title":!0,"slds-hyphenate":!0},ze={"slds-modal__content":!0,"slds-p-around_medium":!0},Ee={key:5},E=[],Te={classMap:{"slds-modal__footer":!0},key:6},Ae={attrs:{name:"footer"},key:7};function $(s,e,r,t){const{gid:a,d:n,t:i,h:l,s:o,st:d}=s;return[l("section",{classMap:je,attrs:{role:"dialog",tabindex:"-1","aria-modal":"true","aria-labelledby":a("modal-heading-01")},key:0},[l("div",Ne,[l("div",De,[l("h1",{classMap:He,attrs:{id:a("modal-heading-01")},key:3},[i(n(e.heading))])]),l("div",{classMap:ze,attrs:{id:a("modal-content-id-1")},key:4},[o("",Ee,E,r)]),l("div",Te,[o("footer",Ae,E,r)])])]),d(Se(),9)]}var Le=m($);$.slots=["","footer"],$.stylesheets=[],$.stylesheetToken="lwc-42s9bakjnfm",g($);class T extends _{constructor(...e){super(...e);this.heading=void 0}}f(T,{publicProps:{heading:{config:0}}});var Ie=h(T,{tmpl:Le,sel:"components-modal",apiVersion:59});const Fe=c`<h2 class="slds-text-heading_large${0}"${2}>CR-V Range</h2>`,Re=c`<h2 class="slds-text-heading_large slds-m-top_large${0}"${2}>CR-V Colors</h2>`,We=c`<h1${3}>form will come here</h1>`,Ue=c`<button class="slds-button slds-button_neutral${0}"${2}>Cancel</button>`,Be=c`<button class="slds-button slds-button_destructive${0}"${2}>Submit</button>`,Ke={key:0},Xe={classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-m-bottom_large":!0,"slds-p-around_medium":!0},key:1},qe={classMap:{"slds-col":!0,"slds-size_12-of-12":!0,"slds-large-size_8-of-12":!0},key:2},Ge={classMap:{"slds-col":!0,"slds-size_12-of-12":!0,"slds-large-size_4-of-12":!0},key:4},Je={classMap:{"slds-grid":!0,"slds-wrap":!0},key:11},Qe={classMap:{"slds-col":!0,"slds-large-size_12-of-12":!0},key:12},Ye={props:{heading:"Fill in your form"},key:15},Ze={attrs:{slot:"footer"},key:18};function w(s,e,r,t){const{c:a,h:n,st:i,b:l,k:o,i:d,f:k,fr:V}=s,{_m0:u,_m1:F,_m2:R,_m3:nt,_m4:W,_m5:ot,_m6:U}=t;return[n("main",Ke,[n("div",Xe,[n("div",qe,[a("components-car-details",ce,{props:{selectedVariant:e.selectedVariant},key:3})]),n("div",Ge,k([i(Fe(),6),a("components-range-selection",he,{props:{variants:e.crvVariants},key:7,on:{selection:u||(t._m0=l(e.selectionHandler))}}),i(Re(),9),d(e.colorsList,function(x){return a("components-color-selection",$e,{props:{color:x},key:o(10,x.value),on:{colorselection:F||(t._m1=l(e.colorSelectionHandler))}})})]))]),n("div",Je,[n("div",Qe,[a("components-price-footer",Me,{props:{price:e.animatedPriceValue},key:13,on:{openmodal:R||(t._m2=l(e.openModalHandler))}})])])]),e.showModal?V(14,[a("components-modal",Ie,Ye,[i(We(),17),n("div",Ze,[i(Ue(),20,{on:{click:W||(t._m4=l(e.cancelHandler))}}),i(Be(),22,{on:{click:U||(t._m6=l(e.sumitHandler))}})])])],0):null]}var et=m(w);w.stylesheets=[],w.stylesheetToken="lwc-igm28e5dgl",g(w);function A(s,e){var r=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),r.push.apply(r,t)}return r}function p(s){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?A(Object(r),!0).forEach(function(t){tt(s,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(r,t))})}return s}function tt(s,e,r){return e=st(e),e in s?Object.defineProperty(s,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[e]=r,s}function st(s){var e=rt(s,"string");return typeof e=="symbol"?e:String(e)}function rt(s,e){if(typeof s!="object"||s===null)return s;var r=s[Symbol.toPrimitive];if(r!==void 0){var t=r.call(s,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}const L=[{variant:"VTi",price:38900,formattedPrice:"$38,900",fuelConsumption:7,seatingCapacity:5,allowWheels:17,checked:!0,imageName:"ignite_red"},{variant:"VTi 7",formattedPrice:"$40,900",price:40900,fuelConsumption:7.3,seatingCapacity:7,allowWheels:17,imageName:"ignite_red"},{variant:"VTi X",formattedPrice:"$41,900",price:41900,fuelConsumption:7.3,seatingCapacity:5,allowWheels:18,imageName:"ignite_red"},{variant:"VTi LX AWD",formattedPrice:"$53,600",price:53600,fuelConsumption:7.4,seatingCapacity:5,allowWheels:19,imageName:"ignite_red"}],at=[{label:"Ignite Red (Metallic)",value:"ignite_red",checked:!0},{label:"Brilliant Sporty Blue",value:"sporty_blue"},{label:"Crystal Black",value:"crystal_black"},{label:"Platinum White (Pearlescent)",value:"platinum_white"}],lt=38e3;class I extends _{constructor(...e){super(...e);this.showModal=!1,this.crvVariants=L,this.selectedVariant=L[0],this.colorsList=at,this.selectedPrice=this.selectedVariant.price,this.selectedImageName=this.colorsList[0].value,this.selectedColorName=this.colorsList[0].label,this.animatedPriceValue=void 0}connectedCallback(){this.animatePrice()}selectionHandler(e){console.log("selected event",e.detail.selected),console.log("selected variant",e.detail.variant);const{selected:r,variant:t}=e.detail;this.selectedVariant=p(p({},r),{},{imageName:this.selectedImageName}),this.selectedPrice=this.selectedVariant.price,this.updateVariants(t),this.animatePrice()}colorSelectionHandler(e){console.log("selected color",e.detail),this.selectedImageName=e.detail,this.selectedVariant=p(p({},this.selectedVariant),{},{imageName:this.selectedImageName}),this.updateColors(this.selectedImageName)}updateColors(e){this.colorsList=this.colorsList.map(r=>{let t=r.value===e;return t&&(this.selectedColorName=r.label),p(p({},r),{},{checked:t})})}updateVariants(e){this.crvVariants=this.crvVariants.map(r=>{let t=r.variant===e;return p(p({},r),{},{checked:t})})}openModalHandler(){this.showModal=!0}cancelHandler(){this.showModal=!1}sumitHandler(){}animatePrice(){this.animatedPriceValue=lt;let e=window.setInterval(()=>{this.selectedPrice!==this.animatedPriceValue?this.animatedPriceValue=this.animatedPriceValue+100:window.clearInterval(e)},10)}}f(I,{fields:["showModal","crvVariants","selectedVariant","colorsList","selectedPrice","selectedImageName","selectedColorName","animatedPriceValue"]});var it=h(I,{tmpl:et,sel:"pages-build-and-price",apiVersion:59});export{it as default};
