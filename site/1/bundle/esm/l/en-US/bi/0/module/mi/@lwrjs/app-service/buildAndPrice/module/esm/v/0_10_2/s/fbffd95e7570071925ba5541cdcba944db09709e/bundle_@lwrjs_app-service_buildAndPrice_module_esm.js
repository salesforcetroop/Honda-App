import{init as F,load as I}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2FesmLoader%2Fv%2F0_10_2/s/480e1658ec03a2fbd4e6d4ee1582bfc1d4b8e2b0/bundle_lwr_esmLoader.js";import"/1/bundle/esm/l/en-US/bi/0/module/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F3_0_0/s/1674859a13ca69e54a8280dadba5260ddc479b09/bundle_@lwc_synthetic-shadow.js";import{logOperationStart as s,logOperationEnd as c}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwr%2Fprofiler%2Fv%2F0_10_2/s/d6eabfb949c22b9f40aad81e5f9fc68567cf47f9/bundle_lwr_profiler.js";import{hydrateComponent as T,createElement as E}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F3_0_0/s/161b99d695053a1fe56ab76b88ac3049278f464f/bundle_lwc.js";const L=globalThis.LWR;globalThis.LWR.define?globalThis.LWR=Object.freeze({define:globalThis.LWR.define}):delete globalThis.LWR;function A(){return L}const P="lwr.bootstrap.",_=`${P}end`,h="lwr.bootstrap.init",l="lwr.bootstrap.init.module";function R(e,n,o){T(e,n,o)}function w(e,n){return E(e,{is:n})}function g(e){return e.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,n=>`-${n.toLowerCase()}`)}const S=/-([a-z])/g;function v(e){return e.replace(S,n=>n[1].toUpperCase())}function x(e,n={}){if(typeof customElements=="undefined"||typeof document=="undefined"){s({id:_});return}s({id:h});let o=0;for(const[i,p]of e){const a=g(i);if(!document.body.querySelector(a)){s({id:l,specifier:i,specifierIndex:++o});const t=w(a,p),r=document.querySelector("[lwr-root]");r?r.appendChild(t):document.body.appendChild(t),c({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"spa"}});continue}const y=document.querySelectorAll(a);for(const t of y){s({id:l,specifier:i,specifierIndex:++o});const r=t.dataset.lwrPropsId;if(r){R(t,p,n[r]||{}),c({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"ssr"}});continue}const d=w(a,p);for(const{name:f,value:u}of t.attributes){d.setAttribute(f,u);const b=v(f);b in d&&(d[b]=u)}for(;t.childNodes.length>0;)d.appendChild(t.childNodes[0]);const m=t.parentElement;m&&m.replaceChild(d,t),c({id:l,specifier:i,specifierIndex:o,metadata:{renderMode:"csr"}})}}c({id:h}),s({id:_})}const C=A(),{imports:O,index:N,importMappings:j,endpoints:M}=C;F({imports:O,index:N,importMappings:j,endpoints:M});const{rootComponents:U,ssrProps:W}=C;Promise.all(U.map(async e=>{const n=g(e);return I(e,"@lwrjs/app-service/buildAndPrice/module/esm/v/0_10_2").then(({default:o})=>{x([[n,o]],W)})}));
