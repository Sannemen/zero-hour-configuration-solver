(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(2),l=n(3),c=n(0),a=n.n(c),u=n(7),i=n.n(u),m=n(1),s=n.n(m),b=function(e){var t=e.style,n=e.size,r=e.selected,l=e.onSelect;return a.a.createElement("div",{style:Object(o.a)({width:2*n+.5*n,height:2*n+.5*n},t)},function(e,t,n){for(var r=[],o=e;o<t;o++)r.push(n(o));return r}(0,12,function(e){return a.a.createElement("div",{key:e,style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",width:.4*n,height:.4*n,border:"solid",transform:"\n\t\t\t\t\t\t\ttranslate(".concat(n,"px, ").concat(n,"px)\n\t\t\t\t\t\t\trotate(").concat(30*e+285,"deg)\n\t\t\t\t\t\t\ttranslate(").concat(n,"px, 0px)\n\t\t\t\t\t\t\trotate(-").concat(30*e+285,"deg)\n\t\t\t\t\t\t"),cursor:"pointer",backgroundColor:r===e?"green":"grey"},onClick:function(t){t.preventDefault(),l(e)}},e+1)}))},d=[{justify:"space-between",terminals:[6,1]},{justify:"space-around",terminals:[5,3]},{justify:"space-around",terminals:[4]},{justify:"space-between",terminals:[7,2]}],f=function(e){var t=e.color,n=e.number,r=e.right,o=e.found,l=Object(c.useMemo)(function(){return"black"===t?"#000000":function(e){var t=(e.R+e.G+e.B)/3>128?0:255;return s.a.rgb2hex(t,t,t)}(s.a.name2rgb(t))},[t]),u=Object(c.useMemo)(function(){return s.a.hex2hsv(l).V>50?"black":"white"},[l]);return a.a.createElement("div",{style:{display:"flex",flexDirection:r?"row-reverse":"row",justifyContent:"space-between",width:100,height:100,backgroundColor:t,border:"solid 2px",transform:"translate(".concat(r?"":"-","2px, 0px)")}},a.a.createElement("div",null),d.map(function(e,c){return a.a.createElement("div",{key:c,style:{display:"flex",flexDirection:r?"column":"column-reverse",justifyContent:e.justify}},e.terminals.map(function(e){return a.a.createElement("div",{key:e,style:{display:"flex",justifyContent:"center",alignItems:"center",width:20,height:20,color:null!=o["".concat(t,"-").concat(e)]?t:n===e?u:l,backgroundColor:null==o["".concat(t,"-").concat(e)]&&n===e?l:null}},e)}))}),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},a.a.createElement("div",{style:{backgroundColor:t,width:2,height:30,transform:"translate(".concat(r?"-":"","2px, 0px)")}})))},p=[["green","black"],["white","purple"],["yellow","blue"],["red","cyan"]],y=function(e){var t=e.color,n=e.number,r=e.found;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:100*(p.length+1),border:"solid 2px"}},a.a.createElement("div",null),p.map(function(e,o){return a.a.createElement("div",{key:o,style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},e.map(function(e,o){return a.a.createElement(f,{key:e,color:e,number:t===e&&n,right:o>0,found:r})}))}),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},a.a.createElement("div",{style:{width:100,height:2,transform:"translate(0px, 2px)",backgroundColor:"white"}})))},h=function(e){var t=e.style,n=e.barStyle,r=e.value,l=e.max,u=Object(c.useMemo)(function(){return null!=t.height?t.height:32},[t]),i=Object(c.useMemo)(function(){return null!=n&&void 0!==n.backgroundColor?n.backgroundColor:"blue"},[n]),m=Object(c.useMemo)(function(){var e=s.a.name2hex(i);return"#"!==e[0]&&(e=i),s.a.complement(e)},[i]);return a.a.createElement("div",{style:Object(o.a)({padding:0,height:u,border:"2px solid ".concat(i)},t)},a.a.createElement("div",{style:Object(o.a)({width:"".concat(100*r/l,"%"),height:"100%",margin:0,backgroundColor:i,transition:"all .5s"},n)}),a.a.createElement("div",{style:{padding:0,margin:0,textAlign:"center",fontSize:u-8,fontWeight:"bold",mixBlendMode:"difference",color:m,transform:"translate(0, -".concat(u-2,"px)")}},r," / ",l))},g={void:{"1-2":{color:"red",number:1},"1-7":{color:"yellow",number:3},"1-10":{color:"red",number:6},"1-12":{color:"cyan",number:3},"2-4":{color:"green",number:2},"2-5":{color:"yellow",number:2},"2-6":{color:"cyan",number:1},"2-7":{color:"yellow",number:6},"2-9":{color:"purple",number:5},"3-3":{color:"green",number:7},"4-6":{color:"blue",number:4},"4-8":{color:"white",number:5},"4-9":{color:"yellow",number:1},"5-6":{color:"red",number:5},"5-9":{color:"purple",number:7},"6-5":{color:"purple",number:1},"6-9":{color:"white",number:7},"6-11":{color:"cyan",number:4},"7-2":{color:"white",number:6},"7-4":{color:"green",number:5},"7-9":{color:"yellow",number:4},"7-12":{color:"blue",number:5},"8-4":{color:"cyan",number:2},"8-5":{color:"cyan",number:7},"8-10":{color:"red",number:3},"8-12":{color:"cyan",number:6},"9-3":{color:"green",number:3},"9-7":{color:"purple",number:4},"9-9":{color:"purple",number:2},"10-2":{color:"white",number:2},"10-3":{color:"green",number:4},"10-5":{color:"blue",number:2},"10-12":{color:"green",number:6},"11-1":{color:"blue",number:6},"11-6":{color:"red",number:7},"11-7":{color:"purple",number:3},"11-11":{color:"blue",number:3},"12-2":{color:"cyan",number:5}}},v={void:{2:{"1-1-2-12":{color:"white",number:1},"1-1-4-5":{color:"red",number:2},"4-3-2-4":{color:"green",number:1},"4-3-2-11":{color:"purple",number:6},"8-6-2-9":{color:"white",number:3},"8-6-9-2":{color:"yellow",number:5},"11-4-2-8":{color:"blue",number:7},"11-4-4-11":{color:"yellow",number:7},"11-4-5-4":{color:"red",number:4},"12-5-7-1":{color:"white",number:4},"12-5-12-11":{color:"blue",number:1}},3:{"1-1-8-10":{color:"white",number:1},"1-1-6-5":{color:"red",number:2},"4-3-2-9":{color:"green",number:1},"4-3-4-7":{color:"purple",number:6},"8-6-2-10":{color:"white",number:3},"8-6-12-12":{color:"yellow",number:5},"11-4-4-8":{color:"blue",number:7},"11-4-12-3":{color:"yellow",number:7},"11-4-7-6":{color:"red",number:4},"12-5-5-7":{color:"white",number:4},"12-5-4-4":{color:"blue",number:1}}}},x=(n(14),{void:{label:"Void",color:"purple"}});i.a.render(a.a.createElement(function(){var e=Object(c.useReducer)(function(e,t){return Object.values(Object(o.a)({},e,t))},[0,0,0,0]),t=Object(l.a)(e,2),n=t[0],u=t[1],i=Object(c.useState)("void"),m=Object(l.a)(i,2),d=m[0],f=m[1],p=Object(c.useState)("3"),w=Object(l.a)(p,2),E=w[0],j=w[1],k=Object(c.useReducer)(function(e,t){return null!=t?Object(o.a)({},e,Object(r.a)({},"".concat(t.color,"-").concat(t.number),!0)):{}},{}),C=Object(l.a)(k,2),O=C[0],D=C[1],M=Object(c.useMemo)(function(){var e=s.a.name2rgb(x[d].color);return s.a.rgb2hex(Math.max(0,e.R-50),Math.max(0,e.G-50),Math.max(0,e.B-50))},[d]),S=Object(c.useMemo)(function(){var e=n.map(function(e){return e+1});return g[d][e.slice(0,2).join("-")]||v[d][E][e.join("-")]||{color:"grey",number:0}},[n,E,d]),R=Object(c.useMemo)(function(){return Object.keys(v[d][E]).some(function(e){return e.startsWith(n.slice(0,2).map(function(e){return e+1}).join("-"))})},[n,E,d]);return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:"0px 8px"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement("h3",null,"Configuration"),a.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},Object.entries(x).map(function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1],o=(r.label,r.color);return a.a.createElement("div",{key:n,style:{display:"flex",justifyContent:"center",alignItems:"center",width:50,height:50,borderRadius:"100%",backgroundColor:d===n?M:o,cursor:"pointer",marginRight:8},onClick:function(e){e.preventDefault(),d!==n&&(f(n),D(null))}},a.a.createElement("div",{style:{width:25,height:25,borderRadius:"100%",backgroundColor:o}}))})),a.a.createElement("h3",null,"Console 1"),a.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},a.a.createElement(b,{size:65,selected:n[0],onSelect:function(e){return u({0:e})}}),a.a.createElement(b,{size:75,selected:n[1],onSelect:function(e){return u({1:e})}})),a.a.createElement("h3",null,"Console"," ",a.a.createElement("select",{value:E,onChange:function(e){return j(e.target.value)}},a.a.createElement("option",{value:2},"2"),a.a.createElement("option",{value:3},"3"))," ",R?a.a.createElement("span",{style:{color:"green"}},"Necessary"):a.a.createElement("span",{style:{color:"red"}},"Not Necessary")),a.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},a.a.createElement(b,{size:65,selected:n[2],onSelect:function(e){return u({2:e})}}),a.a.createElement(b,{size:75,selected:n[3],onSelect:function(e){return u({3:e})}}))),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:"0 1 400px"}},a.a.createElement("h3",null,"Solution"," ",S.number>0?null==O["".concat(S.color,"-").concat(S.number)]?a.a.createElement("span",{style:{color:"green"}},"Found"):a.a.createElement("span",{style:{color:"blue"}},"Previously Found"):a.a.createElement("span",{style:{color:"red"}},"Not Found")),a.a.createElement(y,{color:S.color,number:S.number,found:O}),a.a.createElement(h,{style:{backgroundColor:"lightgrey",marginTop:16},value:Object.keys(O).length,max:49}),a.a.createElement("button",{style:{marginTop:16,padding:8,borderRadius:8,fontSize:16,alignSelf:"center"},onClick:function(){return S.number>0?D(S):function(){}}},"Mark as Found"))),a.a.createElement("div",{style:{marginTop:"4em"}},a.a.createElement("h4",null,"Instructions"),a.a.createElement("p",{style:{maxWidth:600}},"To use, simply click numbers on the first console corresponding to those that are lit up in-game. If the console below says 'Necessary', you must also go to that console and enter the sections that are lit up. Selecting a proper sequence will cause one of the numbers in the solution to be highlighted, and this is the terminal you need to go to in-game to lock the sequence."),a.a.createElement("p",{style:{maxWidth:600}},"As an extra convienence, clicking the ",a.a.createElement("code",null,"Mark as Found")," ","button below the solution will mark the current terminal as having been found and, presumabely, pressed, removing it from the map and showing how many terminals are left to lock.")),a.a.createElement("div",{style:{marginTop:"4em"}},"Created by DeedleFake. Inspired by"," ",a.a.createElement("a",{href:"https://dm.reddit.com/r/raidsecrets/comments/bmi7fv/void_configuration_solution_solver_mobile_support/emwtklf/"},"this comment"),"."))},null),document.querySelector("#root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dc8f9482.chunk.js.map