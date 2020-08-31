(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(166),l=n(167),s=n(70),u=n(26),m=n(12),p=n(157),f=n(172),v=n(14),d=n.n(v),b=n(44),h=n(23),E=n(46),g=n.n(E),O=n(156),y=n(52),D=n(169),C=n(155),j=function(e){var t=e.result,n=e.amount,a=e.fromCurrency,o=e.toCurrency,c=e.currencyOptions,i=e.exchangeRate,l=e.currencySymbol,s=e.onChangeAmount,u=e.onChangeFromCurrency,m=e.onChangeToCurrency,p=e.onClickSwitch,f=N();return r.a.createElement("div",{className:f.converter},r.a.createElement(y.a,{variant:"subtitle1",component:"span"},"Exchange Rate"),r.a.createElement(y.a,{variant:"subtitle2",component:"span"},i),r.a.createElement(y.a,{variant:"h3",component:"h1"},"".concat(l," ").concat(t)),r.a.createElement(D.a,{id:"outlined-number",label:"Amount",type:"number",InputLabelProps:{shrink:!0},variant:"outlined",className:f.textFiled,value:n,onChange:s,InputProps:{inputProps:{min:0}}}),r.a.createElement("div",{className:f.selectRow},r.a.createElement(F,{value:a,onChangeCurrency:u,label:"From",currencyOptions:c}),r.a.createElement(C.a,{color:"inherit",onClick:p},r.a.createElement(O.a,null)),r.a.createElement(F,{value:o,onChangeCurrency:m,label:"To",currencyOptions:c})))},N=Object(p.a)((function(){return Object(f.a)({converter:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:260,height:260,margin:"auto"},selectRow:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},textFiled:{width:"100%",margin:"30px 0 10px"}})}));var R=n(75),x=function(e){return{onAddConversion:function(t){e(function(e){return{type:"ADD_CONVERSION",conversion:e}}(t))}}},S=(Object(u.b)(null,x),Object(u.b)(null,x)((function(e){var t=e.onAddConversion,n=e.date,o=Object(a.useState)(""),c=Object(m.a)(o,2),i=c[0],l=c[1],s=Object(a.useState)(""),u=Object(m.a)(s,2),p=u[0],f=u[1],v=Object(a.useState)([]),E=Object(m.a)(v,2),O=E[0],y=E[1],D=Object(a.useState)(1),C=Object(m.a)(D,2),N=C[0],x=C[1],S=Object(a.useState)(0),w=Object(m.a)(S,2),L=w[0],k=w[1],A=Object(a.useState)(null),F=Object(m.a)(A,2),M=F[0],I=F[1],B=Object(a.useState)(!0),P=Object(m.a)(B,2),K=P[0],$=P[1],G=R,U=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],o=n[1];return{getExchangeRatesData:function(){var t=Object(h.a)(d.a.mark((function t(){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("".concat("https://api.exchangeratesapi.io","/").concat(e));case 3:return n=t.sent,a=n.data,r=Object.keys(null===a||void 0===a?void 0:a.rates),c=null===a||void 0===a?void 0:a.base,i=Number(null===a||void 0===a?void 0:a.rates[r[0]]),t.abrupt("return",{currencies:r,baseCurrency:c,initialRate:i});case 11:t.prev=11,t.t0=t.catch(0),o(!0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),exchangeRatesDataError:r}}(n),Z=U.getExchangeRatesData,H=U.exchangeRatesDataError,V=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],o=n[1];return{getNewExchangeRate:function(){var t=Object(h.a)(d.a.mark((function t(n,a){var r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==a){t.next=2;break}return t.abrupt("return",1);case 2:return t.prev=2,t.next=5,g.a.get("".concat("https://api.exchangeratesapi.io","/").concat(e,"?base=").concat(n,"&symbols=").concat(a));case 5:c=t.sent,i=c.data,r=Number(null===i||void 0===i?void 0:i.rates[a]),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),o(!0);case 13:return t.abrupt("return",r||0);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}(),newExchangeRateError:r}}(n),W=V.getNewExchangeRate,Y=V.newExchangeRateError;Object(a.useEffect)((function(){Object(h.a)(d.a.mark((function e(){var t,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:n=t.currencies,a=t.baseCurrency,r=t.initialRate,y([a].concat(Object(b.a)(n))),l(a),f(n[0]),k(r);case 10:case"end":return e.stop()}}),e)})))()}),[n]);var J=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,l(n),$(!0),e.next=5,W(n,p);case 5:a=e.sent,k(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,f(n),$(!0),e.next=5,W(i,n);case 5:a=e.sent,k(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){L&&I(K?N*L:N/L)}),[K,N,L]),Object(a.useEffect)((function(){null!==M&&t({from:"".concat(N," ").concat(i),to:"".concat(M," ").concat(p),convertedAt:"".concat((new Date).toLocaleDateString()," ").concat((new Date).toLocaleTimeString()),date:n})}),[M]),H||Y?r.a.createElement(T,null):r.a.createElement(j,{result:M||0,amount:N,fromCurrency:i,toCurrency:p,currencyOptions:O,exchangeRate:L,currencySymbol:p?G[p]:"",onChangeAmount:function(e){x(e.target.value)},onChangeFromCurrency:J,onChangeToCurrency:z,onClickSwitch:function(){x(M||0),$(!K),l(p),f(i)}})}))),w=n(153),L=n(171),k=n(168),A=n(158),F=function(e){var t=e.value,n=e.onChangeCurrency,a=e.label,o=e.currencyOptions;return r.a.createElement(w.a,{variant:"outlined"},r.a.createElement(L.a,{id:"currency-select"},a),r.a.createElement(k.a,{labelId:"currency-select",id:"currency-select",value:t,onChange:n,name:"from",label:a},o.map((function(e){return r.a.createElement(A.a,{key:e,value:e},e)}))))},M=n(159),T=function(){var e=I();return r.a.createElement("div",{className:e.root},r.a.createElement(M.a,{color:"error",className:e.icon}),r.a.createElement(y.a,{variant:"h5",component:"h1"},"Ups! Something went wrong :("))},I=Object(p.a)((function(){return Object(f.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 20px"},icon:{marginRight:10}})})),B=n(34),P=n(154),K=n(119),$=n(160),G=n(162),U=n(161),Z=n(163),H=function(e){var t=e.conversions,n=e.onDeleteConversion,a=V();return t.length<1?r.a.createElement("div",{className:a.noDataTextContainer},r.a.createElement(y.a,{variant:"subtitle1",component:"span"},"There are not any conversions")):r.a.createElement(P.a,{className:a.list},t.map((function(e){var t=e.id,o=e.from,c=e.to,i=e.convertedAt,l=e.date,s="checkbox-list-label-".concat(t);return r.a.createElement(K.a,{key:t,role:void 0,dense:!0,button:!0},r.a.createElement("div",{className:a.conversionInfoContainer},r.a.createElement($.a,{id:s,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"subtitle1",component:"span"},"Created At:"),"\xa0",i)}),r.a.createElement($.a,{id:s,primary:r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"subtitle1",component:"span"},"For Date:"),"\xa0",l)}),r.a.createElement($.a,{id:s,primary:r.a.createElement("div",{className:a.conversionInfo},o,r.a.createElement(U.a,{color:"primary"}),c)})),r.a.createElement(G.a,null,r.a.createElement(C.a,{edge:"end","aria-label":"delete",onClick:function(){return n(t)}},r.a.createElement(Z.a,null))))})))},V=Object(p.a)((function(e){return Object(f.a)({list:{width:"100%",height:"35vh",overflowY:"scroll"},conversionInfoContainer:Object(B.a)({},e.breakpoints.up("lg"),{display:"flex",flex:1}),conversionInfo:{display:"flex",alignItems:"center"},noDataTextContainer:{padding:"16px 0 0 16px"}})})),W=n(164),Y=n(165),J=function(e){var t=e.onDeleteAllConversions;return r.a.createElement(W.a,null,r.a.createElement(y.a,{variant:"h6",component:"h2"},"Latest conversions"),r.a.createElement(Y.a,{variant:"contained",color:"secondary",onClick:t},"Delete all"))},z=function(e){return{conversions:e.conversions}},Q=function(e){return{onDeleteAllConversions:function(){e({type:"DELETEALLCONVERSIONS"})},onDeleteConversion:function(t){e(function(e){return{type:"DELETECONVERSION",id:e}}(t))}}},X=(Object(u.b)(z,Q),Object(p.a)((function(){return Object(f.a)({root:{width:"100%",height:"45vh"}})}))),_=Object(u.b)(z,Q)((function(e){var t=e.conversions,n=e.onDeleteAllConversions,a=e.onDeleteConversion,o=X();return r.a.createElement("div",{className:o.root},r.a.createElement(J,{onDeleteAllConversions:n}),r.a.createElement(H,{conversions:t,onDeleteConversion:a}))})),q=function(e){var t=e.date,n=e.todayDate,a=e.onChangeDate,o=ee();return r.a.createElement("form",{noValidate:!0,className:o.datePicker},r.a.createElement(D.a,{id:"date",label:"Choose Date",type:"date",defaultValue:t,onChange:a,InputLabelProps:{shrink:!0},InputProps:{inputProps:{min:"2000-01-01",max:n}}}))},ee=Object(p.a)((function(e){return Object(f.a)({datePicker:Object(B.a)({position:"absolute",top:10,left:10},e.breakpoints.up("sm"),{top:20,left:20})})})),te=Object(p.a)((function(e){return Object(f.a)({root:{margin:0,padding:0,width:"100%",height:"100vh",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column",position:"relative"},line:{width:"100%",height:5,background:e.palette.primary.main}})})),ne=function(){var e=new Date,t=new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().slice(0,10),n=Object(a.useState)(t),o=Object(m.a)(n,2),c=o[0],i=o[1],l=te();return r.a.createElement("div",{className:l.root},r.a.createElement("div",{className:l.line}),r.a.createElement(q,{date:c,onChangeDate:function(e){i(e.target.value)},todayDate:t}),r.a.createElement(S,{date:c}),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(79),re=Object(ae.a)({palette:{primary:{main:"#519D9E"},secondary:{main:"#FBFBFB"},text:{primary:"#343838"}},typography:{fontFamily:'"Roboto", arial, sans-serif',fontSize:14},breakpoints:{values:{xs:0,sm:475,md:600,lg:900,xl:1440}},overrides:{MuiFormLabel:{root:{color:"#519D9E"}},MuiTypography:{h3:{width:"max-content",fontSize:"1.8rem","@media(min-width: 600px)":{fontSize:"3rem"}},h6:{color:"#fff"},subtitle1:{fontWeight:"lighter",color:"#519D9E"},subtitle2:{fontWeight:"lighter",fontSize:"0.775rem"}},MuiToolbar:{root:{width:"100%",background:"#519D9E",display:"flex",justifyContent:"space-between"}},MuiListItemText:{root:{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start"}},MuiButton:{containedSecondary:{color:"#519D9E","&:hover":{backgroundColor:"#fff",opacity:.8,transition:"all 0.3s"}}}}}),oe=n(18),ce=n(76),ie=n(54),le=n(77),se=n.n(le),ue=function(e){return function(t,n,a){return e((function(e,n){var a,r=performance.now(),o=t(e,n),c=performance.now(),i=(a=c-r,Math.round(100*a)/100);return console.log("reducer process time:",i),o}),n,a)}},me=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),console.groupEnd(),a}}},pe=n(78),fe={conversions:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONVERSION":return{conversions:[Object(pe.a)({},t.conversion,{id:Math.floor(1e5*Math.random())})].concat(Object(b.a)(e.conversions))};case"DELETEALLCONVERSIONS":return{conversions:[]};case"DELETECONVERSION":return{conversions:Object(b.a)(e.conversions.filter((function(e){return e.id!==t.id})))};default:return e}},de={key:"root",storage:se.a};var be=function(){var e=[ce.a,me],t=[oe.a.apply(void 0,e),ue],n=oe.d.apply(void 0,t),a=Object(ie.a)(de,ve),r=Object(oe.e)(a,n);return{store:r,persistor:Object(ie.b)(r)}}(),he=be.store,Ee=be.persistor;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:he},r.a.createElement(s.a,{loading:null,persistor:Ee},r.a.createElement(i.a,{theme:re},r.a.createElement(l.a,null),r.a.createElement(ne,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e){e.exports=JSON.parse('{"AED":"\u062f.\u0625.\u200f","AFN":"\u060b","ALL":"Lek","AMD":"\u0564\u0580.","ARS":"$","AUD":"$","AZN":"\u043c\u0430\u043d.","BAM":"KM","BDT":"\u09f3","BGN":"\u043b\u0432.","BHD":"\u062f.\u0628.\u200f","BIF":"FBu","BND":"$","BOB":"Bs","BRL":"R$","BWP":"P","BYN":"\u0440\u0443\u0431.","BZD":"$","CAD":"$","CDF":"FrCD","CHF":"CHF","CLP":"$","CNY":"CN\xa5","COP":"$","CRC":"\u20a1","CVE":"CV$","CZK":"K\u010d","DJF":"Fdj","DKK":"kr","DOP":"RD$","DZD":"\u062f.\u062c.\u200f","EEK":"kr","EGP":"\u062c.\u0645.\u200f","ERN":"Nfk","ETB":"Br","EUR":"\u20ac","GBP":"\xa3","GEL":"GEL","GHS":"GH\u20b5","GNF":"FG","GTQ":"Q","HKD":"$","HNL":"L","HRK":"kn","HUF":"Ft","IDR":"Rp","ILS":"\u20aa","INR":"\u099f\u0995\u09be","IQD":"\u062f.\u0639.\u200f","IRR":"\ufdfc","ISK":"kr","JMD":"$","JOD":"\u062f.\u0623.\u200f","JPY":"\uffe5","KES":"Ksh","KHR":"\u17db","KMF":"FC","KRW":"\u20a9","KWD":"\u062f.\u0643.\u200f","KZT":"\u0442\u04a3\u0433.","LBP":"\u0644.\u0644.\u200f","LKR":"SL Re","LTL":"Lt","LVL":"Ls","LYD":"\u062f.\u0644.\u200f","MAD":"\u062f.\u0645.\u200f","MDL":"MDL","MGA":"MGA","MKD":"MKD","MMK":"K","MOP":"MOP$","MUR":"MURs","MXN":"$","MYR":"RM","MZN":"MTn","NAD":"N$","NGN":"\u20a6","NIO":"C$","NOK":"kr","NPR":"\u0928\u0947\u0930\u0942","NZD":"$","OMR":"\u0631.\u0639.\u200f","PAB":"B/.","PEN":"S/.","PHP":"\u20b1","PKR":"\u20a8","PLN":"z\u0142","PYG":"\u20b2","QAR":"\u0631.\u0642.\u200f","RON":"RON","RSD":"\u0434\u0438\u043d.","RUB":"\u20bd.","RWF":"FR","SAR":"\u0631.\u0633.\u200f","SDG":"SDG","SEK":"kr","SGD":"$","SOS":"Ssh","SYP":"\u0644.\u0633.\u200f","THB":"\u0e3f","TND":"\u062f.\u062a.\u200f","TOP":"T$","TRY":"TL","TTD":"$","TWD":"NT$","TZS":"TSh","UAH":"\u20b4","UGX":"USh","USD":"$","UYU":"$","UZS":"UZS","VEF":"Bs.F.","VND":"\u20ab","XAF":"FCFA","XOF":"CFA","YER":"\u0631.\u064a.\u200f","ZAR":"R","ZMK":"ZK","ZWL":"ZWL$"}')},88:function(e,t,n){e.exports=n(118)}},[[88,1,2]]]);
//# sourceMappingURL=main.72f33909.chunk.js.map