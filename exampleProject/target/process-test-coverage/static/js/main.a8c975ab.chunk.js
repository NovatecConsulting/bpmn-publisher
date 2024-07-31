/*-
 * #%L
 * Camunda Process Test Coverage Report Generator
 * %%
 * Copyright (C) 2019 - 2024 Camunda
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
(this["webpackJsonp@flowsquad/flowcov-viewer"]=this["webpackJsonp@flowsquad/flowcov-viewer"]||[]).push([[0],{88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n(0),i=n.n(a),c=n(10),s=n.n(c),l=n(132),d=n(119),u=n(131),m=n(66),b=Object(m.a)({palette:{primary:{light:"#32d35c",main:"#26b44b",dark:"#3d9a4c",contrastText:"#fff"},secondary:{light:"#455a64",main:"#37474f",dark:"#263238",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",hint:"rgba(0, 0, 0, 0.38)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(34, 36, 38, 0.1)",background:{paper:"rgba(34, 36, 38, 0.1)",default:"#FFFFFF"}},typography:{fontFamily:"Helvetica, Arial, sans-serif"}}),g=n(16),h=n(130),p=n(138),j=n(133),f=n(139),x=n(4),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return function(t,n,r){return r.indexOf(r.find((function(n){return e(n)===e(t)})))===n}},O=function(e,t){return e.filter((function(e){return e.type===t})).map((function(e){return e.definitionKey})).filter(v())},C=n(137),w=n(134),y=n(122),k=n(123),N=n(124),S=n(125),E=n(126),T=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},R=n(26),F=n(11),A=n.n(F),M=n(21),B=n(65),L=n(60),q=n.n(L),z=n(61),D=Object(d.a)((function(){return{root:{height:"640px",overflow:"hidden"},modeler:{height:"640px"},highlight:{"&:not(.djs-connection) .djs-visual > :nth-child(1)":{fill:"rgba(50, 205, 50, 0.50) !important"}},highlightSequenceFlow:{stroke:"rgba(20, 125, 20, 1) !important",strokeWidth:"2px !important"},transactionBoundary:{backgroundColor:"rgba(180, 21, 21, 0.7)",borderRadius:"1px",minHeight:"50px",width:"4px"},transactionBoundarySmall:{backgroundColor:"rgba(180, 21, 21, 0.7)",borderRadius:"1px",minHeight:"32px",width:"4px"},executionListener:{backgroundColor:"rgba(21, 66, 180, 0.7)",color:"white",borderRadius:"4px",fontFamily:"Arial",fontSize:"12px",padding:"5px",minHeight:"16px",minWidth:"16px",textAlign:"center",whiteSpace:"nowrap"}}})),I=function(e){var t=e.businessObject,n=e.loopCharacteristics,r=t.eventDefinitions||[],o=r.length&&r[0].$type,a="bpmn:ReceiveTask"===e.type||"bpmn:UserTask"===e.type||"bpmn:ServiceTask"===e.type&&"external"===t.type,i="bpmn:IntermediateCatchEvent"===e.type&&("bpmn:MessageEventDefinition"===o||"bpmn:TimerEventDefinition"===o||"bpmn:SignalEventDefinition"===o||"bpmn:ConditionalEventDefinition"===o),c=t.asyncAfter||n&&n.asyncAfter,s=t.asyncBefore||n&&n.asyncBefore;return{before:!!(a||i||s),after:!!c}},W=function(e){var t=D(),n=e.data,i=e.setListener,c=Object(a.useMemo)((function(){return{send:function(){var e=Object(M.a)(A.a.mark((function e(t){var n,o,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="RESET_ZOOM"===e.t0?3:"ZOOM_IN"===e.t0?5:"ZOOM_OUT"===e.t0?7:9;break;case 3:return null===(n=r)||void 0===n||n.get("canvas").zoom("fit-viewport",!0),e.abrupt("break",9);case 5:return null===(o=r)||void 0===o||o.get("zoomScroll").zoom(1),e.abrupt("break",9);case 7:return null===(a=r)||void 0===a||a.get("zoomScroll").zoom(-1),e.abrupt("break",9);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),[]);return Object(a.useEffect)((function(){i&&i(c)}),[i,c]),Object(a.useEffect)((function(){(r=new B.a({container:"#bpmn-canvas",moddleExtensions:{camunda:z}})).get("zoomScroll").toggle(!1)}),[]),Object(a.useEffect)((function(){Object(M.a)(A.a.mark((function o(){return A.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!r||!n){o.next=2;break}return o.delegateYield(A.a.mark((function o(){var a,i,c,s,l,d,u,m;return A.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return a=r.get("canvas"),i=r.get("overlays"),c=r.get("elementRegistry"),o.next=5,r.importXML(n.xml);case 5:for(a.zoom("fit-viewport",!0),e.showCoverage&&(null===(s=n.highlightFlowNodes)||void 0===s||s.forEach((function(e){a.addMarker(e,t.highlight)})),null===(l=n.highlightSequenceFlows)||void 0===l||l.forEach((function(e){q()("g[data-element-id='".concat(e,"']")).find("path").addClass(t.highlightSequenceFlow)}))),d=c.getAll(),u=function(n){var r=d[n];if("label"!==r.type){if(e.showTransactionBoundaries){var o=I(r);o.before&&i.add(r.id,"note",{position:{bottom:"bpmn:IntermediateCatchEvent"===r.type?34:64,left:"bpmn:IntermediateCatchEvent"===r.type?-3:-5},html:"<div class='".concat("bpmn:IntermediateCatchEvent"===r.type?t.transactionBoundarySmall:t.transactionBoundary,"' />")}),o.after&&i.add(r.id,"note",{position:{bottom:64,right:-1},html:"<div class='".concat(t.transactionBoundary,"' />")})}if(e.showExpressions){var a;if(null===(a=r.businessObject.extensionElements)||void 0===a?void 0:a.values)r.businessObject.extensionElements.values.forEach((function(e){var n=e.$type,o=e.event,a=e.fields;n.toLowerCase()!=="camunda:executionListener".toLowerCase()||"end"!==o&&"start"!==o||!a||a.forEach((function(e){var n=Object(R.a)({bottom:0},"end"===o?"right":"left",0),a="<div class='".concat(t.executionListener,"'>").concat(e.expression,"</div>");i.add(r.id,"note",{position:n,html:a})}))}));if("bpmn:SequenceFlow"===r.type&&r.businessObject.conditionExpression){var c={left:0};r.waypoints[0].y>r.waypoints[r.waypoints.length-1].y?c.top=-29:c.bottom=-3,i.add(r.id,"note",{position:c,html:"<div class='".concat(t.executionListener,"'>").concat(r.businessObject.conditionExpression.body,"</div>")})}r.businessObject.$attrs["camunda:delegateExpression"]&&i.add(r.id,"note",{position:{bottom:-3,left:0},html:"<div class='".concat(t.executionListener,"'>").concat(r.businessObject.$attrs["camunda:delegateExpression"],"</div>")})}}},m=0;m<d.length;m++)u(m);case 10:case"end":return o.stop()}}),o)}))(),"t0",2);case 2:case"end":return o.stop()}}),o)})))()}),[n,t,e.showCoverage,e.showExpressions,e.showTransactionBoundaries]),Object(o.jsx)("div",{className:Object(x.a)(t.root,e.className),children:Object(o.jsx)("div",{className:t.modeler,id:"bpmn-canvas"})})},_=Object(d.a)((function(e){return{settings:{zoom:.85,padding:"0.5rem 0.5rem 0rem 1rem",display:"flex"},settingsLabel:{transition:e.transitions.create("opacity"),opacity:.38,"&:hover":{opacity:.87}},sectionContainer:{border:"2px solid rgba(34, 36, 38, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.54)",borderRadius:"4px",display:"flex",flexDirection:"column",maxWidth:"960px",width:"100%",margin:"2rem auto 0rem auto"},sectionTitle:{height:"36px",padding:"0.5rem",backgroundColor:"rgba(34, 36, 38, 0.1)",display:"block",width:"100%",fontWeight:500},sectionTitleFlex:{display:"flex"},sectionTitleRight:{flexGrow:1,textAlign:"right",color:e.palette.text.hint},viewer:{height:"640px",width:"100%"},viewerContainer:{position:"relative",height:"640px","&>div":{position:"absolute"}},settingsSpacer:{flexGrow:1}}})),G=function(e){var t=_(),n=e.selectedModel,r=e.selectedRun,i=Object(a.useState)(void 0),c=Object(g.a)(i,2),s=c[0],l=c[1],d=Object(a.useState)(void 0),u=Object(g.a)(d,2),m=u[0],b=u[1],h=Object(a.useState)(!0),p=Object(g.a)(h,2),j=p[0],f=p[1],x=Object(a.useState)(!1),v=Object(g.a)(x,2),O=v[0],R=v[1],F=Object(a.useState)(!1),A=Object(g.a)(F,2),M=A[0],B=A[1],L=Object(a.useCallback)((function(){n&&T("".concat(n.key,".bpmn"),n.xml)}),[n]);return Object(a.useEffect)((function(){l(r&&n?{xml:n.xml,highlightFlowNodes:r.coveredNodes.map((function(e){return e.id})),highlightSequenceFlows:r.coveredSequenceFlows}:n?{xml:n.xml,highlightFlowNodes:n.coveredNodes.map((function(e){return e.id})),highlightSequenceFlows:n.coveredSequenceFlows}:void 0)}),[n,r]),n?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:t.sectionContainer,children:[Object(o.jsx)("div",{className:t.sectionTitle,children:Object(o.jsx)("span",{children:"Model Viewer"})}),Object(o.jsxs)("div",{className:t.settings,children:[Object(o.jsx)(C.a,{label:"Show Coverage",className:t.settingsLabel,control:Object(o.jsx)(w.a,{size:"small",color:"primary",checked:j,onChange:function(e,t){return f(t)},name:"ShowCoverage"})}),Object(o.jsx)(C.a,{label:"Show Transaction Boundaries",className:t.settingsLabel,control:Object(o.jsx)(w.a,{size:"small",color:"primary",checked:O,onChange:function(e,t){return R(t)},name:"ShowTransactionBoundaries"})}),Object(o.jsx)(C.a,{label:"Show Expressions",className:t.settingsLabel,control:Object(o.jsx)(w.a,{size:"small",color:"primary",checked:M,onChange:function(e,t){return B(t)},name:"ShowExpressions"})}),Object(o.jsx)("div",{className:t.settingsSpacer}),Object(o.jsx)(y.a,{title:"Zoom In",onClick:function(){return null===m||void 0===m?void 0:m.send("ZOOM_IN")},children:Object(o.jsx)(k.a,{})}),Object(o.jsx)(y.a,{title:"Zoom Out",onClick:function(){return null===m||void 0===m?void 0:m.send("ZOOM_OUT")},children:Object(o.jsx)(N.a,{})}),Object(o.jsx)(y.a,{title:"Reset Zoom",onClick:function(){return null===m||void 0===m?void 0:m.send("RESET_ZOOM")},children:Object(o.jsx)(S.a,{})}),Object(o.jsx)(y.a,{disabled:!n,title:"Download BPMN",onClick:L,children:Object(o.jsx)(E.a,{})})]}),Object(o.jsx)("div",{className:t.viewerContainer,children:Object(o.jsx)(W,{className:t.viewer,showCoverage:j,showExpressions:M,showTransactionBoundaries:O,setListener:b,data:s})})]})}):null},P=Object(d.a)((function(){return{sectionContainer:{border:"2px solid rgba(34, 36, 38, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.54)",borderRadius:"4px",display:"flex",flexDirection:"column",maxWidth:"960px",width:"100%",margin:"1rem auto 0rem auto"},sectionTitle:{height:"36px",padding:"0.5rem",backgroundColor:"rgba(34, 36, 38, 0.1)",display:"block",width:"100%",fontWeight:500},sectionContent:{display:"flex",flexDirection:"column",padding:"1rem"}}})),Z=function(e){var t=P();return Object(o.jsxs)("div",{className:t.sectionContainer,children:[Object(o.jsx)("span",{className:t.sectionTitle,children:e.title}),Object(o.jsx)("div",{className:t.sectionContent,children:e.children})]})},H=n(136),V=Object(d.a)((function(){return{tooltip:{fontSize:"0.85rem",backgroundColor:"rgba(0, 0, 0, 0.87)"},tooltipArrow:{color:"rgba(0, 0, 0, 0.87)"}}})),K=function(e){var t=V();return Object(o.jsx)(H.a,{title:e.title,arrow:!0,placement:e.placement||"top",classes:{arrow:t.tooltipArrow,tooltip:t.tooltip},children:Object(o.jsx)("span",{children:e.children})})},U=n(128),Y=n(129),$=Object(d.a)((function(e){return{summaryRow:{cursor:"pointer",transition:e.transitions.create("background-color"),"&:hover":{backgroundColor:"rgba(34, 36, 38, 0.1)"},"&>td":{paddingTop:"0.5rem",paddingBottom:"0.5rem"},"&>td:first-child":{paddingLeft:"1rem"}},summaryRowActive:{backgroundColor:"rgba(34, 36, 38, 0.15)","&>td":{fontWeight:500},"&:hover":{backgroundColor:"rgba(34, 36, 38, 0.15)"}},summaryColumnName:{textAlign:"left",display:"flex"},summaryColumnCount:{textAlign:"right"},summaryColumnCoverage:{textAlign:"right",width:"1%",paddingLeft:"1rem"},separator:{margin:"0 0.25rem"},rowIcon:{marginRight:"0.5rem"},spacingRow:{"&>td":{padding:"0.25rem"}},summaryColumnNamePadding:{paddingLeft:"2.75rem !important"},coverageGreen:{backgroundColor:"rgba(0, 255, 0, 0.38)"},coverageYellow:{backgroundColor:"rgba(255, 255, 0, 0.38)"},coverageRed:{backgroundColor:"rgba(255, 0, 0, 0.38)"},spacingColumn:{width:"3rem"},empty:{padding:"1rem",textAlign:"center",fontWeight:"bold"},playIcon:{color:e.palette.primary.main}}})),J=function(e){var t,n=$(),r=e.type,a=e.model,c=e.onClick,s=e.selected,l={coverage:a.coverage,covered:a.coveredNodeCount+a.coveredSequenceFlowCount,icon:"model"===r?U.a:Y.a,name:"model"===r?a.key:a.name,total:a.totalElementCount};return Object(o.jsxs)("tr",{onClick:c,className:Object(x.a)(n.summaryRow,s&&n.summaryRowActive),children:[Object(o.jsxs)("td",{className:Object(x.a)(n.summaryColumnName,"run"===r&&n.summaryColumnNamePadding),children:[i.a.createElement(l.icon,{className:n.rowIcon,fontSize:"small"}),l.name]}),Object(o.jsx)("td",{className:n.summaryColumnCount,children:l.covered}),Object(o.jsx)("td",{className:n.summaryColumnCount,children:l.total}),Object(o.jsx)("td",{className:n.spacingColumn}),Object(o.jsx)("td",{className:Object(x.a)(n.summaryColumnCoverage,(t={},Object(R.a)(t,n.coverageGreen,l.coverage>=.9),Object(R.a)(t,n.coverageYellow,l.coverage<.9&&l.coverage>=.5),Object(R.a)(t,n.coverageRed,l.coverage<.5),t)),children:"".concat((100*l.coverage).toFixed(2),"%")})]})},X=Object(d.a)((function(e){return{summaryTable:{borderSpacing:"0px !important"},summaryHead:{backgroundColor:"rgba(34, 36, 38, 0.05)","&>th":{paddingTop:"1rem",paddingBottom:"1rem"},"&>th:first-child":{paddingLeft:"1rem"},"&>th:last-child":{paddingRight:"1rem"}},summaryRow:{cursor:"pointer",transition:e.transitions.create("background-color"),"&:hover":{backgroundColor:"rgba(34, 36, 38, 0.1)"},"&>td":{paddingTop:"0.5rem",paddingBottom:"0.5rem"},"&>td:first-child":{paddingLeft:"1rem"},"&>td:last-child":{paddingRight:"1rem"}},summaryRowActive:{backgroundColor:"rgba(34, 36, 38, 0.15)","&>td":{fontWeight:500},"&:hover":{backgroundColor:"rgba(34, 36, 38, 0.15)"}},summaryFoot:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontWeight:500,"&>td":{paddingTop:"1rem",paddingBottom:"1rem"},"&>td:first-child":{paddingLeft:"1rem"},"&>td:last-child":{paddingRight:"1rem"}},summaryColumnCount:{textAlign:"right"},summaryColumnCoverage:{textAlign:"right",width:"1%",paddingLeft:"1rem"},separator:{margin:"0 0.25rem"},rowIcon:{marginRight:"0.5rem"},spacingRow:{"&>td":{padding:"0.25rem"}},summaryColumnNamePadding1:{paddingLeft:"2.75rem !important"},summaryColumnNamePadding2:{paddingLeft:"4.5rem !important"},coverageGreen:{backgroundColor:"rgba(0, 255, 0, 0.38)"},coverageYellow:{backgroundColor:"rgba(255, 255, 0, 0.38)"},coverageRed:{backgroundColor:"rgba(255, 0, 0, 0.38)"},spacingColumn:{width:"3rem"},empty:{padding:"1rem",textAlign:"center",fontWeight:"bold"}}})),Q=function(e){var t=X();return Object(o.jsx)(Z,{title:"Build Summary",children:Object(o.jsxs)("table",{className:t.summaryTable,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:t.summaryHead,children:[Object(o.jsx)("th",{"aria-hidden":!0}),Object(o.jsx)("th",{className:t.summaryColumnCount,children:Object(o.jsx)(K,{title:"Covered Flow Nodes & Sequence Flows",children:Object(o.jsx)("span",{children:"Covered"})})}),Object(o.jsx)("th",{className:t.summaryColumnCount,children:Object(o.jsx)(K,{title:"Total Flow Nodes & Sequence Flows",children:Object(o.jsx)("span",{children:"Total"})})}),Object(o.jsx)("th",{className:t.spacingColumn,"aria-hidden":!0}),Object(o.jsx)("th",{className:t.summaryColumnCoverage,children:"Coverage"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsx)("tr",{className:t.spacingRow,children:Object(o.jsx)("td",{})},"spacing1"),0===e.selectedSuite.models.length&&Object(o.jsx)("tr",{children:Object(o.jsx)("td",{className:t.empty,colSpan:99,children:"This suite contains no models."})}),e.selectedSuite.models.map((function(t){return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)(J,{type:"model",selected:e.selectedModel===t,model:t,onClick:function(){return e.onModelSelected(t)}},t.key),e.selectedModel===t&&t.runs.map((function(t){return Object(o.jsx)(J,{type:"run",selected:e.selectedRun===t,model:t,onClick:function(){return e.onRunSelected(t)}},t.id)}))]},t.key)})),Object(o.jsx)("tr",{className:t.spacingRow,children:Object(o.jsx)("td",{})},"spacing2")]})]})})},ee=Object(d.a)((function(){return{title:{fontSize:"2rem",marginBottom:0},subtitle:{marginTop:"0.25rem",paddingBottom:"0.5rem",marginBottom:"1.5rem",borderBottom:"2px solid #666"},selectorTitle:{fontWeight:"bold",fontSize:"1rem",marginTop:"0.5rem"},page:{display:"flex",flexDirection:"column",width:"960px",maxWidth:"960px",margin:"2rem auto 1rem auto"},selector:{display:"flex",flexWrap:"wrap",padding:"0.5rem 0",flexDirection:"row"},item:{flex:"0 0 calc((100% - 2.25rem)/4)",marginBottom:"0.75rem",marginRight:"0.75rem",borderRadius:"0.25rem",color:"black",border:"2px solid darkgreen",display:"flex",padding:"0.5rem",flexDirection:"column",cursor:"pointer","&>span":{whiteSpace:"nowrap"},"&:nth-child(4n)":{marginRight:0}},itemSelected:{backgroundColor:"darkgreen",color:"white"},itemTitle:{fontWeight:"bold",marginBottom:"0.25rem"},itemSubtitle:{fontSize:"0.75rem"},selectWrapper:{display:"flex",marginTop:"0.5rem",marginBottom:"2rem"},select:{width:"calc((100% - 1rem) / 3)",marginRight:"0.5rem","&:last-child":{marginRight:0}},hint:{fontSize:"1.5rem",textAlign:"center",marginTop:"1rem",marginBottom:"1rem",fontWeight:"bold"},paper:{backgroundColor:"white"}}})),te=function(){var e=ee(),t=Object(a.useState)(void 0),n=Object(g.a)(t,2),r=n[0],i=n[1],c=Object(a.useState)(void 0),s=Object(g.a)(c,2),l=s[0],d=s[1],u=Object(a.useState)(void 0),m=Object(g.a)(u,2),b=m[0],C=m[1],w=Object(a.useMemo)((function(){return e=window.COVERAGE_DATA.suites,t=window.COVERAGE_DATA.models,e.map((function(e){var n=e.runs.flatMap((function(e){return e.events})).map((function(e){return e.modelKey})).filter(v()).map((function(n){var r=t.find((function(e){return e.key===n}));if(!r)throw new Error("Could not find required model with key ".concat(n));var o=e.runs.map((function(e){var t=e.events.filter((function(e){return e.modelKey===n})),o=O(t,"TAKE"),a=O(t,"START"),i=O(t,"END"),c=a.map((function(e){return{id:e,ended:-1!==i.indexOf(e)}}));return{id:e.id,name:e.name,totalElementCount:r.totalElementCount,coveredNodes:c,coveredNodeCount:c.length,coveredSequenceFlows:o,coveredSequenceFlowCount:o.length,coverage:(c.length+o.length)/r.totalElementCount}})),a=o.flatMap((function(e){return e.coveredSequenceFlows})).filter(v()),i=o.flatMap((function(e){return e.coveredNodes})).filter(v((function(e){return e.id})));return{id:r.id,key:r.key,xml:r.xml,runs:o,coveredSequenceFlows:a,coveredSequenceFlowCount:a.length,coveredNodes:i,coveredNodeCount:i.length,totalElementCount:r.totalElementCount,coverage:(i.length+a.length)/r.totalElementCount}})),r=n.flatMap((function(e){return e.coveredSequenceFlows})).filter(v()),o=n.flatMap((function(e){return e.coveredNodes})).filter(v((function(e){return e.id}))),a=n.reduce((function(e,t){return e+t.totalElementCount}),0);return{id:e.id,name:e.name,models:n,coveredSequenceFlows:r,coveredSequenceFlowCount:r.length,coveredNodes:o,coveredNodeCount:o.length,totalElementCount:a,coverage:(o.length+r.length)/a}}));var e,t}),[window.COVERAGE_DATA]),y=Object(a.useMemo)((function(){return w.find((function(e){return e.id===l}))}),[w,l]),k=Object(a.useMemo)((function(){return null===y||void 0===y?void 0:y.models.find((function(e){return e.key===r}))}),[y,r]),N=Object(a.useMemo)((function(){return null===k||void 0===k?void 0:k.runs.find((function(e){return e.id===b}))}),[k,b]);return Object(a.useEffect)((function(){i(void 0),C(void 0)}),[l]),Object(a.useEffect)((function(){C(void 0)}),[r]),Object(o.jsxs)("div",{className:e.page,children:[Object(o.jsx)("h1",{className:e.title,children:"Test Coverage Report"}),Object(o.jsx)("span",{className:e.subtitle,children:"".concat(window.COVERAGE_DATA.suites.length," Suites, ").concat(window.COVERAGE_DATA.models.length," Models processed.")}),y&&Object(o.jsxs)("div",{className:e.selectWrapper,children:[Object(o.jsxs)(h.a,{className:e.select,size:"small",color:"primary",variant:"outlined",children:[Object(o.jsx)(p.a,{id:"test-suite",children:"Test Suite"}),Object(o.jsx)(j.a,{label:"Test Suite",value:l,labelId:"test-suite",MenuProps:{classes:{paper:e.paper}},onChange:function(e){return d(e.target.value)},children:w.map((function(e){return Object(o.jsx)(f.a,{value:e.id,children:e.name.substr(e.name.lastIndexOf(".")+1)},e.id)}))})]}),k&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(h.a,{className:e.select,size:"small",color:"primary",variant:"outlined",children:[Object(o.jsx)(p.a,{id:"model",children:"Model"}),Object(o.jsx)(j.a,{label:"Model",value:r,labelId:"model",MenuProps:{classes:{paper:e.paper}},onChange:function(e){return i(e.target.value)},children:y.models.map((function(e){return Object(o.jsx)(f.a,{value:e.key,children:e.key},e.key)}))})]}),Object(o.jsxs)(h.a,{className:e.select,size:"small",color:"primary",variant:"outlined",children:[Object(o.jsx)(p.a,{id:"run",children:"Run"}),Object(o.jsxs)(j.a,{label:"Run",value:void 0===b?"":b,labelId:"run",MenuProps:{classes:{paper:e.paper}},onChange:function(e){return C(""===e.target.value?void 0:e.target.value)},children:[Object(o.jsx)(f.a,{value:"",children:Object(o.jsx)("em",{children:"None"})}),k.runs.map((function(e){return Object(o.jsx)(f.a,{value:e.id,children:e.name},e.id)}))]})]})]})]}),!y&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:e.selector,children:w.map((function(t){return Object(o.jsxs)("div",{onClick:function(){return d(t.id)},className:Object(x.a)(e.item,l===t.id&&e.itemSelected),children:[Object(o.jsx)("span",{className:e.itemTitle,children:t.name.substr(t.name.lastIndexOf(".")+1)}),Object(o.jsx)("span",{className:e.itemSubtitle,children:"".concat((100*t.coverage).toFixed(2),"% Coverage")})]},t.id)}))}),Object(o.jsx)("div",{className:e.hint,children:"Please select a test suite to see details."})]}),y&&!k&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:e.selector,children:y.models.map((function(t){return Object(o.jsxs)("div",{onClick:function(){return i(t.key)},className:Object(x.a)(e.item,r===t.key&&e.itemSelected),children:[Object(o.jsx)("span",{className:e.itemTitle,children:t.key}),Object(o.jsx)("span",{className:e.itemSubtitle,children:"Coverage: ".concat((100*t.coverage).toFixed(2),"%")})]},t.key)}))}),Object(o.jsx)("div",{className:e.hint,children:"Please select a model to see details."})]}),y&&k&&!N&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:e.selectorTitle,children:"Select a run to see details for that run."}),Object(o.jsx)("div",{className:e.selector,children:k.runs.map((function(t){return Object(o.jsxs)("div",{onClick:function(){return C(t.id)},className:Object(x.a)(e.item,b===t.id&&e.itemSelected),children:[Object(o.jsx)("span",{className:e.itemTitle,children:t.name}),Object(o.jsx)("span",{className:e.itemSubtitle,children:"Coverage: ".concat((100*t.coverage).toFixed(2),"%")})]},t.id)}))})]}),y&&k&&Object(o.jsx)(G,{selectedModel:k,selectedRun:N}),y&&Object(o.jsx)(Q,{selectedSuite:y,selectedModel:k,selectedRun:N,onModelSelected:function(e){return i(e.key)},onRunSelected:function(e){return C(e.id)}})]})},ne=Object(d.a)((function(){return{root:{minHeight:"100vh",display:"flex",flexDirection:"column"}}})),re=function(){var e=ne();return Object(o.jsx)(u.a,{theme:b,children:Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsx)(l.a,{}),Object(o.jsx)(te,{})]})})};n(88);s.a.render(Object(o.jsx)(re,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.a8c975ab.chunk.js.map