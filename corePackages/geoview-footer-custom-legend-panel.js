/*! Package:geoview-footer-custom-legend-panel: 1.0.0 - "8351e78d8091b6fcafe2d4f87eb51d5fbb7be8c8" - 2024-08-21T19:07:34.959Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[224],{74375:(e,t,o)=>{o.d(t,{b:()=>g});var r=o(54440),n=o(26742),i=o(50581),a=o(58611),l=o(81112),s=o(70642),d=o(24864),u=o(58066);function c(e,t,o){return t=(0,a.A)(t),(0,i.A)(e,p()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var g=function(e){function t(){var e;(0,r.A)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return e=c(this,t,[].concat(n)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){this.value&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(d.G)},50662:(e,t,o)=>{o.d(t,{G:()=>i});var r=function(e){return{legendCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"},"&:hover":{border:"2px solid #FFFF00"},"&.active":{border:"2px solid #FFFFFF"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.geoViewColor.grey.dark[900]," !important"),color:e.palette.geoViewColor.grey.light[900],fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .legendCardThumbnail":{position:"absolute",height:"100%",width:"100%",overflow:"hidden",border:"1px solid theme.palette.geoViewColor.ccc",display:"flex",align:"center",objectFit:"cover",top:0,left:0},"& .legendCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.85),transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.palette.geoViewColor.primary.main,"& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.55)}}},"&.active":{borderColor:e.palette.geoViewColor.primary.light[200],"& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:"transparent"}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}},n=o(97282);function i(e){var t=e.mapId,o=e.config.legendList,i=window.cgpv,a=i.api,l=i.ui,s=a.maps[t],d=l.elements,u=d.Card,c=d.Box,p=l.useTheme(),g=r(p);return(0,n.jsx)(c,{sx:g.legendCard,children:o.map((function(e,t){return(0,n.jsx)(u,{tabIndex:0,className:"legendCardThumbnail",onClick:function(){return s.zoomToLngLatExtentOrCoordinate(e.extent,{maxZoom:14})},title:e.legendTitle,contentCard:(0,n.jsx)(n.Fragment,{children:"string"==typeof e.imageUrl&&(0,n.jsx)(c,{component:"img",src:e.imageUrl,alt:"",className:"legendCardThumbnail"},t)})},t)}))})}},50743:(e,t,o)=>{var r=o(54440),n=o(26742),i=o(50581),a=o(58611),l=o(96050),s=o(81112),d=o(70642),u=o(34346),c=o(74375),p=o(44292),g=o(58259),m=o(71727),h=o(50662),f=o(97282);function v(e,t,o){return t=(0,a.A)(t),(0,i.A)(e,C()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}var b=function(e){function t(){var e;(0,r.A)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return e=v(this,t,[].concat(n)),(0,d.A)(e,"translations",(0,u.NK)({en:{footerCustomLegendPanel:{title:"Custom Legend"}},fr:{footerCustomLegendPanel:{title:"Légende Personalisée"}}})),e}return(0,s.A)(t,e),(0,n.A)(t,[{key:"schema",value:function(){return g}},{key:"defaultConfig",value:function(){return(0,u.NK)(m)}},{key:"onAdd",value:function(){var e,o,r,n,i;(e=t,o="onAdd",r=this,n=3,i=(0,l.A)((0,a.A)(1&n?e.prototype:e),o,r),2&n?function(e){return i.apply(r,e)}:i)([])}},{key:"onCreateContentProps",value:function(){var e=(0,f.jsx)(h.G,{mapId:this.pluginProps.mapId,config:{isOpen:!0,legendList:[]}});return{id:"footer-custom-legend-panel",value:this.value,label:"footerCustomLegendPanel.title",icon:(0,f.jsx)(p.A,{}),content:e}}},{key:"handleProvideCallbackRedraw",value:function(e){this.callbackRedraw=e}}])}(c.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["footer-custom-legend-panel"]=(0,u.KX)(b)},71727:e=>{e.exports=JSON.parse('{"isOpen":false,"legendList":[],"version":"1.0"}')},58259:e=>{e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Custom Legend Panel Schema","type":"object","version":"1.0","comments":"Configuration for GeoView Custom Legend package.","additionalProperties":false,"properties":{"isOpen":{"description":"Specifies whether the Custom Legend panel is initially open or closed","type":"boolean","default":false},"legendList":{"description":"Custom Legend ********DESCRIPTION TO DO*****************.","type":"array","items":{"type":"object","additionalProperties":false,"properties":{"imageUrl":{"type":"string"},"legendTitle":{"type":"string"},"extent":{"type":"array","minItems":4,"maxItems":4,"items":[{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90},{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90}]}},"required":["legendTitle","extent"]}},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}}}')}},e=>{var t;t=50743,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-custom-legend-panel.js.map