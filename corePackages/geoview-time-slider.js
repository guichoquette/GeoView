/*! Package:geoview-time-slider: 1.0.0 - "041229183fe4a34aa9699246202883e0b80b9e99" - 2024-07-10T12:51:52.165Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{26507:(e,t,r)=>{r.d(t,{b:()=>f});var n=r(59682),i=r(41108),a=r(95947),o=r(89153),l=r(79778),s=r(74780),c=r(79724),u=r(25828);function d(e,t,r){return t=(0,o.A)(t),(0,a.A)(e,p()?Reflect.construct(t,r||[],(0,o.A)(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=d(this,t,[].concat(i)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,i.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){this.value&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},82194:(e,t,r)=>{var n=r(59682),i=r(41108),a=r(95947),o=r(71104),l=r(89153),s=r(79778),c=r(74780),u=r(49278),d=r(19428),p=r(46877),f=r(26507),g=r(10650),m=r(2898),h=r(1839),v=r(34767),y=r(11728),w=r(2467),b=r(95548),x=r(99046),A=r(25828),P=r(31877),j=r(69505),S=r(43495),D=r(64033),L=r(74112),T=r(30538),I=r(87286),k=r(67529),O=r(92957),E=r(23716),C=r(21746),V=r(63756),F=r(52549),M=r(60215),R=r(59009),N=r(97282);const z=["className","children","classes","IconComponent","input","inputProps","variant"],B=["root"],G=(0,N.jsx)(F.A,{}),U=T.forwardRef((function(e,t){const r=(0,M.A)({name:"MuiNativeSelect",props:e}),{className:n,children:i,classes:a={},IconComponent:o=V.A,input:l=G,inputProps:s}=r,c=(0,L.A)(r,z),u=(0,C.A)(),d=(0,E.A)({props:r,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,k.A)({root:["root"]},R.w,t)})((0,D.A)({},r,{classes:a})),f=(0,L.A)(a,B);return(0,N.jsx)(T.Fragment,{children:T.cloneElement(l,(0,D.A)({inputComponent:O.Ay,inputProps:(0,D.A)({children:i,classes:f,IconComponent:o,variant:d.variant,type:void 0},s,l?l.props.inputProps:{}),ref:t},c,{className:(0,I.A)(p.root,l.props.className,n)}))})}));U.muiName="Select";const H=U;var K=r(95729),Y=r(39462),q=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"}}};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e){A.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,r=e.config,n=e.layerPath,i=e.mapId,a=t.react,o=t.ui,l=a.useState,s=a.useRef,c=a.useEffect,u=a.useCallback,d=o.elements,p=d.Grid,f=d.Slider,g=d.Typography,m=d.Checkbox,v=d.Tooltip,w=d.IconButton,D=d.LockIcon,L=d.LockOpenIcon,T=d.ArrowLeftIcon,I=d.PlayArrowIcon,k=d.PauseIcon,O=d.ArrowRightIcon,E=d.SwitchRightIcon,C=d.SwitchLeftIcon,V=(0,P.A)(),F=q(V),M=l(!1),R=(0,h.A)(M,2),z=R[0],B=R[1],G=s(),U=s(),J=s(),_=(0,y.Gg)(),X=_.setTitle,$=_.setDefaultValue,Q=_.setDescription,Z=_.setValues,ee=_.setLocked,te=_.setReversed,re=_.setDelay,ne=_.setFiltering,ie=(0,Y.t)(),ae=(0,y.ky)()[n],oe=ae.title,le=ae.description,se=ae.defaultValue,ce=ae.discreteValues,ue=ae.range,de=ae.minAndMax,pe=ae.field,fe=ae.fieldAlias,ge=ae.filtering,me=ae.singleHandle,he=ae.values,ve=ae.delay,ye=ae.locked,we=ae.reversed,be=(0,b.Yo)(),xe=x.K.findLayerByPath(be,n).layerName;c((function(){var e;A.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==r||null===(e=r.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===oe&&X(n,(0,K.getLocalizedValue)(null==t?void 0:t.title,ie)||""),void 0===le&&Q(n,(0,K.getLocalizedValue)(null==t?void 0:t.description,ie)||""),void 0===ye&&ee(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===we&&te(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===se&&$(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e;A.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",r,n);var t=null==r||null===(e=r.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Z(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ue.includes(null==t?void 0:t.defaultValue)?Z(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):Z(n,[new Date(ue[0]).getTime()]))}),[r,n,ue,ne,Z]);var Ae,Pe=ue.map((function(e){return new Date(e).getTime()})),je=de[1]-de[0],Se=new Date(de[1]).getDate()-new Date(de[0]).getDate(),De=new Date(de[1]).getFullYear()-new Date(de[0]).getFullYear();0===Se&&je<864e5?Ae="day":0===De&&(Ae="year");var Le=[];if(ue.length<4&&ce){var Te=(new Date(ue[ue.length-1]).getTime()-new Date(ue[0]).getTime())/4;Le=[de[0],de[0]+Te,de[0]+2*Te,de[0]+3*Te,de[1]]}else Le=ue.length<6||me?Pe:[de[0],new Date(ue[Math.round(ue.length/4)]).getTime(),new Date(ue[Math.round(ue.length/2)]).getTime(),new Date(ue[Math.round(3*ue.length/4)]).getTime(),de[1]];for(var Ie=[],ke=0;ke<Le.length;ke++)Ie.push({value:Le[ke],label:Ae?"".concat("day"===Ae?new Date(Le[ke]).toTimeString().split(" ")[0]:new Date(Le[ke]).toISOString().slice(5,10)):new Date(Le[ke]).toISOString().slice(0,10)});function Oe(){if(me&&!ce){var e,t=Pe.indexOf(he[0]);e=Pe[t]===de[0]?Pe.length-1:t-1,Z(n,[Pe[e]])}else if(me){var r=(de[1]-de[0])/20,i=he[0]-r<de[0]?de[1]:he[0]-r;Z(n,[i])}else{var a=(0,h.A)(he,2),o=a[0],l=a[1];if(l-o==de[1]-de[0])return J.current=(de[1]-de[0])/10,void Z(n,[l-J.current,l]);if(J.current||(J.current=l-o),ye&&we){if(o===de[0]&&(o=l),(o-=J.current)<de[0])o=(0,h.A)(de,1)[0]}else if(ye){if((l-=J.current)<o&&(l=o),l===o)l=(0,h.A)(de,2)[1]}else{if(l>U.current&&o===U.current?l=U.current:l-=J.current,l<=de[0])l=(0,h.A)(de,2)[1];if((o=l-J.current)<de[0])o=(0,h.A)(de,1)[0];o<U.current&&l>U.current&&(o=U.current)}Z(n,[o,l])}}function Ee(){if(me&&!ce){var e,t=Pe.indexOf(he[0]);e=Pe[t]===de[1]?0:t+1,Z(n,[Pe[e]])}else if(me){var r=(de[1]-de[0])/20,i=he[0]+r>de[1]?de[0]:he[0]+r;Z(n,[i])}else{var a=(0,h.A)(he,2),o=a[0],l=a[1];if(l-o==de[1]-de[0])return J.current=(de[1]-de[0])/10,void Z(n,[o,o+J.current]);if(J.current||(J.current=l-o),ye&&we){if((o+=J.current)>=l)o=(0,h.A)(de,1)[0]}else if(ye){if(l===de[1]&&(l=o),(l+=J.current)>de[1])l=(0,h.A)(de,2)[1]}else{if(o<U.current&&l===U.current?o=U.current:o+=J.current,o>=de[1])o=(0,h.A)(de,1)[0];if((l=o+J.current)>de[1])l=(0,h.A)(de,2)[1];l>U.current&&o<U.current&&(l=U.current)}Z(n,[o,l])}}function Ce(){return we?ye?(0,K.getLocalizedMessage)("timeSlider.slider.unlockRight",ie):(0,K.getLocalizedMessage)("timeSlider.slider.lockRight",ie):ye?(0,K.getLocalizedMessage)("timeSlider.slider.unlockLeft",ie):(0,K.getLocalizedMessage)("timeSlider.slider.lockLeft",ie)}c((function(){A.vF.logTraceUseEffect("TIME-SLIDER - values filtering",he,ge),z&&(G.current=we?window.setTimeout((function(){return Oe()}),ve):window.setTimeout((function(){return Ee()}),ve))}),[he,ge,we,ye]),c((function(){A.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",z),z&&(we?Oe():Ee())}),[z]);var Ve=u((function(e){A.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",n),clearTimeout(G.current),B(!1),J.current=void 0,Z(n,e)}),[n,Z]),Fe=u((function(e){return A.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",Ae),"day"===Ae?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===Ae?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[Ae]);return(0,N.jsx)(p,{children:(0,N.jsxs)("div",{children:[(0,N.jsxs)(p,{container:!0,sx:F.rightPanelBtnHolder,children:[(0,N.jsx)(p,{item:!0,xs:9,children:(0,N.jsxs)(g,{component:"div",sx:W(W({},F.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(oe||xe),void 0!==Ae&&" (".concat("day"===Ae?new Date(se).toLocaleDateString():new Date(se).getFullYear(),")")]})}),(0,N.jsx)(p,{item:!0,xs:3,children:(0,N.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,N.jsx)(v,{title:ge?(0,K.getLocalizedMessage)("timeSlider.slider.disableFilter",ie):(0,K.getLocalizedMessage)("timeSlider.slider.enableFilter",ie),placement:"top",enterDelay:1e3,children:(0,N.jsx)(m,{checked:ge,onChange:function(e,t){return ne(n,r=t),void(r||(clearInterval(G.current),B(!1)));var r}})})})})]}),(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,N.jsx)(f,{sliderId:n,mapId:i,style:{width:"80%",color:"primary"},min:de[0],max:de[1],value:he,marks:Ie,step:ce?.1:null,onChangeCommitted:Ve,onValueDisplay:Fe},he[1]?he[1]+he[0]:he[0])})}),(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!me&&(0,N.jsx)(w,{className:"buttonOutline","aria-label":Ce(),tooltip:Ce(),tooltipPlacement:"top",onClick:function(){return clearTimeout(G.current),void ee(n,!ye)},children:ye?(0,N.jsx)(D,{}):(0,N.jsx)(L,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.back",ie),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:z||!ge,onClick:function(){return U.current=we?he[1]:he[0],void Oe()},children:(0,N.jsx)(T,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":z?(0,K.getLocalizedMessage)("timeSlider.slider.pauseAnimation",ie):(0,K.getLocalizedMessage)("timeSlider.slider.playAnimation",ie),tooltip:z?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ge,onClick:function(){return clearTimeout(G.current),U.current=we?he[1]:he[0],void B(!z)},children:z?(0,N.jsx)(k,{}):(0,N.jsx)(I,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.forward",ie),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:z||!ge,onClick:function(){return e=(0,h.A)(he,1),U.current=e[0],void Ee();var e},children:(0,N.jsx)(O,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.changeDirection",ie),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(G.current),te(n,!we),void(z&&(we?Oe():Ee()))},children:we?(0,N.jsx)(E,{}):(0,N.jsx)(C,{})}),(0,N.jsxs)(j.A,{sx:{width:"150px"},children:[(0,N.jsx)(S.A,{variant:"standard",children:(0,K.getLocalizedMessage)("timeSlider.slider.timeDelay",ie)}),(0,N.jsxs)(H,{defaultValue:ve,inputProps:{name:"timeDelay",onChange:function(e){return function(e){re(n,e.target.value)}(e)}},children:[(0,N.jsx)("option",{value:500,children:"0.5s"}),(0,N.jsx)("option",{value:750,children:"0.75s"}),(0,N.jsx)("option",{value:1e3,children:"1.0s"}),(0,N.jsx)("option",{value:1500,children:"1.5s"}),(0,N.jsx)("option",{value:2e3,children:"2.0s"}),(0,N.jsx)("option",{value:3e3,children:"3.0s"}),(0,N.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),le&&(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:le})}),fe&&(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(fe," (").concat(pe,")")})})]})})}function X(e){var t=e.mapId,r=e.configObj,n=window.cgpv.react,i=n.useState,a=n.useCallback,o=n.useMemo,l=n.useEffect,s=i(),c=(0,h.A)(s,2),u=c[0],d=c[1],f=(0,w.wE)(),g=(0,y.ky)(),m=(0,b.Yo)(),P=a((function(e){A.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),d(e.layerPath)}),[]),j=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},S=o((function(){A.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",g);return f.map((function(e){return{layerPath:e,timeSliderLayerInfo:g[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:x.K.findLayerByPath(m,e.layerPath).layerName,layerPath:e.layerPath,layerFeatures:j(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,r=x.K.findLayerByPath(m,e.layerPath).layerName,(0,N.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[r,t.filtering&&": ".concat(j(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t,r}))}),[m,g,f]);l((function(){A.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,u),u&&!S.map((function(e){return e.layerPath})).includes(u)&&d("")}),[S,u]);var D=a((function(e){e&&d("")}),[d]);return(0,N.jsx)(v.PE,{selectedLayerPath:u,onLayerListClicked:P,layerList:S,onGuideIsOpen:D,guideContentIds:["timeSlider"],children:u?(0,N.jsx)(_,{mapId:t,config:r,layerPath:u},u):null})}const $=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}}},"required":["sliders"]}'),Q={sliders:[]};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t=(0,l.A)(t),(0,a.A)(e,re()?Reflect.construct(t,r||[],(0,l.A)(e).constructor):t.apply(e,r))}function re(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(re=function(){return!!e})()}function ne(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.add(e)}var ie=new WeakSet,ae=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return ne(e=te(this,t,[].concat(i)),ie),(0,c.A)(e,"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),e}return(0,s.A)(t,e),(0,i.A)(t,[{key:"schema",value:function(){return $}},{key:"defaultConfig",value:function(){return(0,u.NK)(Q)}},{key:"onCreateContentProps",value:function(){var e=this;return this.configObj.sliders.forEach((function(t){if(t.temporalDimension){var r={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.P.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],r)}if(t.defaultValue){var n=t.layerPaths[0],i=g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(n).getTemporalDimension(n);g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(n).setTemporalDimension(n,ee(ee({},i),{},{default:t.defaultValue}))}})),{id:"time-slider",value:this.value,label:"timeSlider.title",icon:(0,N.jsx)(p.TimeSliderIcon,{}),content:(0,N.jsx)(X,{mapId:this.pluginProps.mapId,configObj:this.configObj})}}},{key:"onAdd",value:function(){var e=this;this.mapViewer().onMapLayersProcessed((function(){var t=e.mapViewer().layer.getLayerEntryConfigIds(),r=function(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}(ie,e,oe).call(e,t);r&&r.forEach((function(t){var r=e.mapViewer().layer.getLayerEntryConfig(t);m.t.checkInitTimeSliderLayerAndApplyFilters(e.pluginProps.mapId,r)}))})),(0,o.A)((0,l.A)(t.prototype),"onAdd",this).call(this)}}])}(f.b);function oe(e){var t=this;return e.filter((function(e){return t.mapViewer().layer.getGeoviewLayerHybrid(e).getTemporalDimension(e)}))}window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(ae)}},e=>{var t;t=82194,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map