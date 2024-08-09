/*! Package:geoview-legend-panel: 1.0.0 - "cd31e6180dfb14d7a6eebf56e2a55dea544aa639" - 2024-08-09T18:39:53.631Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[32],{67814:(e,t,n)=>{n.d(t,{i:()=>p});var o=n(59682),i=n(41108),r=n(95947),a=n(89153),l=n(79778),s=n(74780);function u(e,t,n){return t=(0,a.A)(t),(0,r.A)(e,d()?Reflect.construct(t,n||[],(0,a.A)(e).constructor):t.apply(e,n))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}var p=function(e){function t(){var e;(0,o.A)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=u(this,t,[].concat(i)),(0,s.A)(e,"buttonPanel",void 0),(0,s.A)(e,"buttonProps",void 0),(0,s.A)(e,"panelProps",void 0),e}return(0,l.A)(t,e),(0,i.A)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.panelProps.content=this.onCreateContent(),this.buttonPanel=this.mapViewer().appBarApi.createAppbarPanel(this.buttonProps,this.panelProps,this.buttonProps.id)||void 0}},{key:"onRemove",value:function(){this.api&&this.buttonPanel&&this.mapViewer().appBarApi.removeAppbarPanel(this.buttonPanel.buttonPanelId,this.buttonProps.id)}}])}(n(79724).G)},60685:(e,t,n)=>{var o=n(59682),i=n(41108),r=n(95947),a=n(89153),l=n(79778),s=n(74780),u=n(30139),d=n(67814),p=n(93990),c=n(97282);function g(e){var t=e.mapId,n=e.config.legendList,o=window.cgpv,i=o.api,r=o.ui,a=i.maps[t],l=r.elements,s=l.Card,u=l.Box,d=function(e){return{legendCard:{"& .MuiCard-root":{backgroundColor:e.palette.grey.A700,color:e.palette.primary.light,display:"flex",flexDirection:"column",backgroundClip:"padding-box",border:"2px solid rgba(255,255,255,0.25)",borderRadius:"6px",boxShadow:"none",marginBottom:"16px",width:"300px",transition:"all 0.3s ease-in-out","&:last-child":{marginBottom:"0px"},"&:hover":{border:"2px solid #FFFF00"},"&.active":{border:"2px solid #FFFFFF"}},"& .MuiCardHeader-root":{backgroundColor:"".concat(e.palette.geoViewColor.grey.dark[900]," !important"),color:e.palette.geoViewColor.grey.light[900],fontSize:14,fontWeight:400,margin:0,padding:"0 12px",height:60,width:"100%",order:2},"& .MuiCardContent-root":{order:1,height:190,position:"relative",padding:0,"&:last-child":{padding:0},"& .legendCardThumbnail":{position:"absolute",height:"100%",width:"100%",overflow:"hidden",border:"1px solid theme.palette.geoViewColor.ccc",display:"flex",align:"center",objectFit:"cover",top:0,left:0},"& .legendCardThumbnailOverlay":{display:"block",height:"100%",width:"100%",position:"absolute",backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.85),transition:"all 0.3s ease-in-out"}},"&:hover":{cursor:"pointer",borderColor:e.palette.geoViewColor.primary.main,"& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:e.palette.geoViewColor.grey.lighten(.5,.55)}}},"&.active":{borderColor:e.palette.geoViewColor.primary.light[200],"& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:"transparent"}},"&:hover":{borderColor:"rgba(255,255,255,0.75)","& .MuiCardContent-root":{"& .legendCardThumbnailOverlay":{backgroundColor:"rgba(0,0,0,0)"}}}}}}}(r.useTheme());return(0,c.jsx)(u,{sx:d.legendCard,children:n.map((function(e,t){return(0,c.jsx)(s,{tabIndex:0,className:"legendCardThumbnail",onClick:function(){return a.zoomToLngLatExtentOrCoordinate(e.extent,{maxZoom:14})},title:e.legendTitle,contentCard:(0,c.jsx)(c.Fragment,{children:"string"==typeof e.imageUrl&&(0,c.jsx)(u,{component:"img",src:e.imageUrl,alt:"",className:"legendCardThumbnail"},t)})},t)}))})}const m=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Custom Legend Panel Schema","type":"object","version":"1.0","comments":"Configuration for GeoView Custom Legend package.","additionalProperties":false,"properties":{"isOpen":{"description":"Specifies whether the Custom Legend panel is initially open or closed","type":"boolean","default":false},"legendList":{"description":"Custom Legend ********DESCRIPTION TO DO*****************.","type":"array","items":{"type":"object","additionalProperties":false,"properties":{"imageUrl":{"type":"string"},"legendTitle":{"type":"string"},"extent":{"type":"array","minItems":4,"maxItems":4,"items":[{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90},{"type":"number","minimum":-180,"maximum":180},{"type":"number","minimum":-90,"maximum":90}]}},"required":["legendTitle","extent"]}},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}}}'),h=JSON.parse('{"isOpen":false,"legendList":[],"version":"1.0"}');function v(e,t,n){return t=(0,a.A)(t),(0,r.A)(e,f()?Reflect.construct(t,n||[],(0,a.A)(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var C=function(e){function t(){var e;(0,o.A)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=v(this,t,[].concat(i)),(0,s.A)(e,"translations",(0,u.NKs)({en:{LegendPanel:{title:"Legend"}},fr:{LegendPanel:{title:"Légende"}}})),(0,s.A)(e,"onCreateContent",(function(){return(0,c.jsx)(g,{mapId:e.pluginProps.mapId,config:e.configObj||{}})})),e}return(0,l.A)(t,e),(0,i.A)(t,[{key:"schema",value:function(){return m}},{key:"defaultConfig",value:function(){return(0,u.NKs)(h)}},{key:"onCreateButtonProps",value:function(){return{id:"legend-panel",tooltip:"LegendPanel.title",tooltipPlacement:"right",children:(0,c.jsx)(p.A,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"LegendPanel.title",icon:(0,c.jsx)(p.A,{}),width:350,status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onRemoved",value:function(){}}])}(d.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["legend-panel"]=(0,u.KXH)(C)}},e=>{var t;t=60685,e(e.s=t)}]);
//# sourceMappingURL=geoview-legend-panel.js.map