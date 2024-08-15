/*! Package:geoview-custom-legend-panel: 1.0.0 - "c46c0a0e45aacbb8f1614bea2eac1ae8858a09e7" - 2024-08-15T20:01:24.816Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[762],{74375:(e,t,o)=>{o.d(t,{b:()=>g});var n=o(54440),r=o(26742),i=o(50581),a=o(58611),l=o(81112),s=o(70642),d=o(24864),u=o(58066);function c(e,t,o){return t=(0,a.A)(t),(0,i.A)(e,p()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var g=function(e){function t(){var e;(0,n.A)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=c(this,t,[].concat(r)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){this.value&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(d.G)},26065:(e,t,o)=>{var n=o(54440),r=o(26742),i=o(50581),a=o(58611),l=o(96050),s=o(81112),d=o(70642),u=o(34346),c=o(74375),p=o(44292),g=o(66408);const m=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Custom Legend Panel Schema","type":"object","version":"1.0","comments":"Configuration for GeoView Custom Legend package.","additionalProperties":false,"properties":{"isOpen":{"description":"Specifies whether the Custom Legend panel is initially open or closed","type":"boolean","default":false},"legendList":{"description":"Custom Legend ********DESCRIPTION TO DO*****************.","type":"array","items":{"type":"object","additionalProperties":false,"properties":{"imageUrl":{"type":"string"},"legendTitle":{"type":"string"},"extent":{"type":"array","minItems":4,"maxItems":4,"items":[{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90},{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90}]}},"required":["legendTitle","extent"]}},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}}}'),h=JSON.parse('{"isOpen":false,"legendList":[],"version":"1.0"}');var f=o(97282);function v(e){var t=e.mapId,o=e.config.legendList,n=window.cgpv,r=n.api,i=n.ui,a=r.maps[t],l=i.elements,s=l.Card,d=l.Box,u=function(e){return{legendCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"},"&:hover":{border:"2px solid #FFFF00"},"&.active":{border:"2px solid #FFFFFF"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.geoViewColor.grey.dark[900]," !important"),color:e.palette.geoViewColor.grey.light[900],fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .legendCardThumbnail":{position:"absolute",height:"100%",width:"100%",overflow:"hidden",border:"1px solid theme.palette.geoViewColor.ccc",display:"flex",align:"center",objectFit:"cover",top:0,left:0},"& .legendCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.85),transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.palette.geoViewColor.primary.main,"& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.55)}}},"&.active":{borderColor:e.palette.geoViewColor.primary.light[200],"& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:"transparent"}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(i.useTheme());return(0,f.jsx)(d,{sx:u.legendCard,children:o.map((function(e,t){return(0,f.jsx)(s,{tabIndex:0,className:"legendCardThumbnail",onClick:function(){return a.zoomToLngLatExtentOrCoordinate(e.extent,{maxZoom:14})},title:e.legendTitle,contentCard:(0,f.jsx)(f.Fragment,{children:"string"==typeof e.imageUrl&&(0,f.jsx)(d,{component:"img",src:e.imageUrl,alt:"",className:"legendCardThumbnail"},t)})},t)}))})}function C(e,t,o){return t=(0,a.A)(t),(0,i.A)(e,b()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var y=function(e){function t(){var e;(0,n.A)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=C(this,t,[].concat(r)),(0,d.A)(e,"translations",(0,u.NK)({en:{LegendPanel:{title:"Custom Legend"}},fr:{LegendPanel:{title:"Légende Personalisée"}}})),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"schema",value:function(){return m}},{key:"defaultConfig",value:function(){return(0,u.NK)(h)}},{key:"onAdd",value:function(){var e,o,n,r,i;g.U.setGeochartCharts(this.pluginProps.mapId,this.configObj.charts),(e=t,o="onAdd",n=this,r=3,i=(0,l.A)((0,a.A)(1&r?e.prototype:e),o,n),2&r?function(e){return i.apply(n,e)}:i)([])}},{key:"onCreateContentProps",value:function(){var e=(0,f.jsx)(v,{mapId:this.pluginProps.mapId,config:{isOpen:!0,legendList:[]}});return{id:"custom-legend-panel",value:this.value,label:"custom-legend-panel.title",icon:(0,f.jsx)(p.A,{}),content:e}}},{key:"handleProvideCallbackRedraw",value:function(e){this.callbackRedraw=e}}])}(c.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins.geochart=(0,u.KX)(y)}},e=>{var t;t=26065,e(e.s=t)}]);
//# sourceMappingURL=geoview-custom-legend-panel.js.map