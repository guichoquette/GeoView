/*! Package:geoview-time-slider: 1.0.0 - "b8863e64584c0a28762bb5913069c0d5e9acd716" - 2024-07-24T17:08:04.831Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{93921:(e,t,n)=>{n.d(t,{b:()=>f});var r=n(36549),i=n(80085),a=n(95174),o=n(42450),l=n(43021),s=n(24515),c=n(26666),u=n(6335);function d(e,t,n){return t=(0,o.A)(t),(0,a.A)(e,p()?Reflect.construct(t,n||[],(0,o.A)(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,r.A)(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=d(this,t,[].concat(i)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,i.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){this.value&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},5763:(e,t,n)=>{var r=n(36549),i=n(80085),a=n(95174),o=n(54111),l=n(42450),s=n(43021),c=n(24515),u=n(16896),d=n(46074),p=n(66193),f=n(93921),g=n(22557),m=n(86124),h=n(83850),v=n(68194),y=n(42877),w=n(57882),x=n(23620),b=n(6335),P=n(888),j=n(68990),A=n(40956),S=n(66630),L=n(83336),D=n(22059),T=n(30538),I=n(87286),k=n(75666),O=n(34340),E=n(19981),C=n(687),V=n(84085),F=n(23938),M=n(48056),R=n(72712),N=n(97282);const B=["className","children","classes","IconComponent","input","inputProps","variant"],z=["root"],G=(0,N.jsx)(F.A,{}),U=T.forwardRef((function(e,t){const n=(0,M.b)({name:"MuiNativeSelect",props:e}),{className:r,children:i,classes:a={},IconComponent:o=V.A,input:l=G,inputProps:s}=n,c=(0,D.A)(n,B),u=(0,C.A)(),d=(0,E.A)({props:n,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,k.A)({root:["root"]},R.w,t)})((0,L.A)({},n,{classes:a})),f=(0,D.A)(a,z);return(0,N.jsx)(T.Fragment,{children:T.cloneElement(l,(0,L.A)({inputComponent:O.Ay,inputProps:(0,L.A)({children:i,classes:f,IconComponent:o,variant:d.variant,type:void 0},s,l?l.props.inputProps:{}),ref:t},c,{className:(0,I.A)(p.root,l.props.className,r)}))})}));U.muiName="Select";const H=U;var K=n(72459),Y=n(42360),q=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"}}};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){b.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,n=e.config,r=e.layerPath,i=e.mapId,a=t.react,o=t.ui,l=a.useState,s=a.useRef,c=a.useEffect,u=a.useCallback,d=o.elements,f=d.Grid,g=d.Slider,m=d.Typography,h=d.Checkbox,y=d.Tooltip,L=d.IconButton,D=d.LockIcon,T=d.LockOpenIcon,I=d.ArrowLeftIcon,k=d.PlayArrowIcon,O=d.PauseIcon,E=d.ArrowRightIcon,C=d.SwitchRightIcon,V=d.SwitchLeftIcon,F=(0,j.A)(),M=q(F),R=l(!1),B=(0,P.A)(R,2),z=B[0],G=B[1],U=s(),J=s(),_=s(),X=(0,v.Gg)(),$=X.setTitle,Q=X.setDefaultValue,Z=X.setDescription,ee=X.setValues,te=X.setLocked,ne=X.setReversed,re=X.setDelay,ie=X.setFiltering,ae=(0,Y.t)(),oe=(0,v.ky)()[r],le=oe.title,se=oe.description,ce=oe.defaultValue,ue=oe.discreteValues,de=oe.range,pe=oe.minAndMax,fe=oe.field,ge=oe.fieldAlias,me=oe.filtering,he=oe.singleHandle,ve=oe.values,ye=oe.delay,we=oe.locked,xe=oe.reversed,be=(0,w.Yo)(),Pe=x.K.findLayerByPath(be,r).layerName;c((function(){var e;b.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==n||null===(e=n.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===le&&$(r,(0,K.getLocalizedValue)(null==t?void 0:t.title,ae)||""),void 0===se&&Z(r,(0,K.getLocalizedValue)(null==t?void 0:t.description,ae)||""),void 0===we&&te(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===xe&&ne(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===ce&&Q(r,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e;b.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",n,r);var t=null==n||null===(e=n.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?ee(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):de.includes(null==t?void 0:t.defaultValue)?ee(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):ee(r,[new Date(de[0]).getTime()]))}),[n,r,de,ie,ee]);var je,Ae=de.map((function(e){return new Date(e).getTime()})),Se=pe[1]-pe[0],Le=new Date(pe[1]).getDate()-new Date(pe[0]).getDate(),De=new Date(pe[1]).getFullYear()-new Date(pe[0]).getFullYear();0===Le&&Se<864e5?je="day":0===De&&(je="year");var Te=[];if(de.length<4&&ue){var Ie=(new Date(de[de.length-1]).getTime()-new Date(de[0]).getTime())/4;Te=[pe[0],pe[0]+Ie,pe[0]+2*Ie,pe[0]+3*Ie,pe[1]]}else Te=de.length<6||he?Ae:[pe[0],new Date(de[Math.round(de.length/4)]).getTime(),new Date(de[Math.round(de.length/2)]).getTime(),new Date(de[Math.round(3*de.length/4)]).getTime(),pe[1]];for(var ke=[],Oe=0;Oe<Te.length;Oe++)ke.push({value:Te[Oe],label:je?"".concat("day"===je?new Date(Te[Oe]).toTimeString().split(" ")[0]:new Date(Te[Oe]).toISOString().slice(5,10)):new Date(Te[Oe]).toISOString().slice(0,10)});function Ee(){if(he&&!ue){var e,t=Ae.indexOf(ve[0]);e=Ae[t]===pe[0]?Ae.length-1:t-1,ee(r,[Ae[e]])}else if(he){var n=(pe[1]-pe[0])/20,i=ve[0]-n<pe[0]?pe[1]:ve[0]-n;ee(r,[i])}else{var a=(0,P.A)(ve,2),o=a[0],l=a[1];if(l-o==pe[1]-pe[0])return _.current=(pe[1]-pe[0])/10,void ee(r,[l-_.current,l]);if(_.current||(_.current=l-o),we&&xe){if(o===pe[0]&&(o=l),(o-=_.current)<pe[0])o=(0,P.A)(pe,1)[0]}else if(we){if((l-=_.current)<o&&(l=o),l===o)l=(0,P.A)(pe,2)[1]}else{if(l>J.current&&o===J.current?l=J.current:l-=_.current,l<=pe[0])l=(0,P.A)(pe,2)[1];if((o=l-_.current)<pe[0])o=(0,P.A)(pe,1)[0];o<J.current&&l>J.current&&(o=J.current)}ee(r,[o,l])}}function Ce(){if(he&&!ue){var e,t=Ae.indexOf(ve[0]);e=Ae[t]===pe[1]?0:t+1,ee(r,[Ae[e]])}else if(he){var n=(pe[1]-pe[0])/20,i=ve[0]+n>pe[1]?pe[0]:ve[0]+n;ee(r,[i])}else{var a=(0,P.A)(ve,2),o=a[0],l=a[1];if(l-o==pe[1]-pe[0])return _.current=(pe[1]-pe[0])/10,void ee(r,[o,o+_.current]);if(_.current||(_.current=l-o),we&&xe){if((o+=_.current)>=l)o=(0,P.A)(pe,1)[0]}else if(we){if(l===pe[1]&&(l=o),(l+=_.current)>pe[1])l=(0,P.A)(pe,2)[1]}else{if(o<J.current&&l===J.current?o=J.current:o+=_.current,o>=pe[1])o=(0,P.A)(pe,1)[0];if((l=o+_.current)>pe[1])l=(0,P.A)(pe,2)[1];l>J.current&&o<J.current&&(l=J.current)}ee(r,[o,l])}}function Ve(){return xe?we?(0,K.getLocalizedMessage)("timeSlider.slider.unlockRight",ae):(0,K.getLocalizedMessage)("timeSlider.slider.lockRight",ae):we?(0,K.getLocalizedMessage)("timeSlider.slider.unlockLeft",ae):(0,K.getLocalizedMessage)("timeSlider.slider.lockLeft",ae)}c((function(){b.vF.logTraceUseEffect("TIME-SLIDER - values filtering",ve,me),z&&(U.current=xe?window.setTimeout((function(){return Ee()}),ye):window.setTimeout((function(){return Ce()}),ye))}),[ve,me,xe,we]),c((function(){b.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",z),z&&(xe?Ee():Ce())}),[z]);var Fe=u((function(e){b.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",r),clearTimeout(U.current),G(!1),_.current=void 0,ee(r,e)}),[r,ee]),Me=u((function(e){return b.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",je),"day"===je?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===je?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[je]);return(0,N.jsx)(f,{children:(0,N.jsxs)("div",{children:[(0,N.jsxs)(f,{container:!0,sx:M.rightPanelBtnHolder,children:[(0,N.jsx)(f,{item:!0,xs:9,children:(0,N.jsxs)(m,{component:"div",sx:W(W({},M.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(le||Pe),void 0!==je&&" (".concat("day"===je?new Date(ce).toLocaleDateString():new Date(ce).getFullYear(),")")]})}),(0,N.jsx)(f,{item:!0,xs:3,children:(0,N.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,N.jsx)(y,{title:me?(0,K.getLocalizedMessage)("timeSlider.slider.disableFilter",ae):(0,K.getLocalizedMessage)("timeSlider.slider.enableFilter",ae),placement:"top",enterDelay:1e3,children:(0,N.jsx)(h,{checked:me,onChange:function(e,t){return ie(r,n=t),void(n||(clearInterval(U.current),G(!1)));var n}})})})})]}),(0,N.jsx)(f,{item:!0,xs:12,children:(0,N.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,N.jsx)(g,{sliderId:r,mapId:i,style:{width:"80%",color:"primary"},min:pe[0],max:pe[1],value:ve,marks:ke,step:ue?.1:null,onChangeCommitted:Fe,onValueDisplay:Me},ve[1]?ve[1]+ve[0]:ve[0])})}),(0,N.jsx)(f,{item:!0,xs:12,children:(0,N.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!he&&(0,N.jsx)(L,{className:"buttonOutline","aria-label":Ve(),tooltip:Ve(),tooltipPlacement:"top",onClick:function(){return clearTimeout(U.current),void te(r,!we)},children:we?(0,N.jsx)(D,{}):(0,N.jsx)(T,{})}),(0,N.jsx)(L,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.back",ae),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:z||!me,onClick:function(){return J.current=xe?ve[1]:ve[0],void Ee()},children:(0,N.jsx)(I,{})}),(0,N.jsx)(L,{className:"buttonOutline","aria-label":z?(0,K.getLocalizedMessage)("timeSlider.slider.pauseAnimation",ae):(0,K.getLocalizedMessage)("timeSlider.slider.playAnimation",ae),tooltip:z?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!me,onClick:function(){return clearTimeout(U.current),J.current=xe?ve[1]:ve[0],void G(!z)},children:z?(0,N.jsx)(O,{}):(0,N.jsx)(k,{})}),(0,N.jsx)(L,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.forward",ae),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:z||!me,onClick:function(){return e=(0,P.A)(ve,1),J.current=e[0],void Ce();var e},children:(0,N.jsx)(E,{})}),(0,N.jsx)(L,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.changeDirection",ae),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(U.current),ne(r,!xe),void(z&&(xe?Ee():Ce()))},children:xe?(0,N.jsx)(C,{}):(0,N.jsx)(V,{})}),(0,N.jsx)(p.Box,{component:"span",sx:{paddingLeft:"10px"},children:(0,N.jsxs)(A.A,{sx:{width:"150px"},children:[(0,N.jsx)(S.A,{variant:"standard",children:(0,K.getLocalizedMessage)("timeSlider.slider.timeDelay",ae)}),(0,N.jsxs)(H,{defaultValue:ye,inputProps:{name:"timeDelay",onChange:function(e){return function(e){re(r,e.target.value)}(e)}},children:[(0,N.jsx)("option",{value:500,children:"0.5s"}),(0,N.jsx)("option",{value:750,children:"0.75s"}),(0,N.jsx)("option",{value:1e3,children:"1.0s"}),(0,N.jsx)("option",{value:1500,children:"1.5s"}),(0,N.jsx)("option",{value:2e3,children:"2.0s"}),(0,N.jsx)("option",{value:3e3,children:"3.0s"}),(0,N.jsx)("option",{value:5e3,children:"5.0s"})]})]})})]})}),se&&(0,N.jsx)(f,{item:!0,xs:12,children:(0,N.jsx)(m,{component:"div",sx:{px:"20px",py:"5px"},children:se})}),ge&&(0,N.jsx)(f,{item:!0,xs:12,children:(0,N.jsx)(m,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(ge," (").concat(fe,")")})})]})})}function X(e){var t=e.mapId,n=e.configObj,r=window.cgpv.react,i=r.useCallback,a=r.useMemo,o=r.useEffect,l=(0,y.wE)(),s=(0,v.ky)(),c=(0,v.h4)(),u=(0,v.Gg)().setSelectedLayerPath,d=(0,w.Yo)(),f=i((function(e){b.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),u(e.layerPath)}),[u]),g=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},m=a((function(){b.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",s);return l.map((function(e){return{layerPath:e,timeSliderLayerInfo:s[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:x.K.findLayerByPath(d,e.layerPath).layerName,layerPath:e.layerPath,layerFeatures:g(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,n=x.K.findLayerByPath(d,e.layerPath).layerName,(0,N.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[n,t.filtering&&": ".concat(g(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t,n}))}),[d,s,l]);o((function(){b.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",m,c),c&&!m.map((function(e){return e.layerPath})).includes(c)&&u("")}),[m,c,u]);var P=i((function(e){e&&u("")}),[u]);return(0,N.jsx)(h.PE,{selectedLayerPath:c,onLayerListClicked:f,layerList:m,onGuideIsOpen:P,guideContentIds:["timeSlider"],children:c?(0,N.jsx)(_,{mapId:t,config:n,layerPath:c},c):null})}const $=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}}},"required":["sliders"]}'),Q={sliders:[]};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t=(0,l.A)(t),(0,a.A)(e,ne()?Reflect.construct(t,n||[],(0,l.A)(e).constructor):t.apply(e,n))}function ne(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ne=function(){return!!e})()}function re(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.add(e)}var ie=new WeakSet,ae=function(e){function t(){var e;(0,r.A)(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return re(e=te(this,t,[].concat(i)),ie),(0,c.A)(e,"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),e}return(0,s.A)(t,e),(0,i.A)(t,[{key:"schema",value:function(){return $}},{key:"defaultConfig",value:function(){return(0,u.NK)(Q)}},{key:"onCreateContentProps",value:function(){var e=this;return this.configObj.sliders.forEach((function(t){if(t.temporalDimension){var n={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.P.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],n)}if(t.defaultValue){var r=t.layerPaths[0],i=g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(r).getTemporalDimension(r);g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(r).setTemporalDimension(r,ee(ee({},i),{},{default:t.defaultValue}))}})),{id:"time-slider",value:this.value,label:"timeSlider.title",icon:(0,N.jsx)(p.TimeSliderIcon,{}),content:(0,N.jsx)(X,{mapId:this.pluginProps.mapId,configObj:this.configObj})}}},{key:"onAdd",value:function(){var e=this;this.mapViewer().onMapLayersProcessed((function(){var t=e.mapViewer().layer.getLayerEntryConfigIds(),n=function(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}(ie,e,oe).call(e,t);n&&n.forEach((function(t){var n=e.mapViewer().layer.getLayerEntryConfig(t);m.t.checkInitTimeSliderLayerAndApplyFilters(e.pluginProps.mapId,n)}))})),(0,o.A)((0,l.A)(t.prototype),"onAdd",this).call(this)}}])}(f.b);function oe(e){var t=this;return e.filter((function(e){return t.mapViewer().layer.getGeoviewLayerHybrid(e).getTemporalDimension(e)}))}window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(ae)}},e=>{var t;t=5763,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map