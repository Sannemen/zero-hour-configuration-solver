(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r(2),l=r(0),c=r.n(l),a=r(6),u=r.n(a),i=r(1),s=r.n(i),m=function(e){var t=e.style,r=e.size,o=e.selected,l=e.onSelect;return c.a.createElement("div",{style:Object(n.a)({width:2*r+.5*r,height:2*r+.5*r},t)},function(e,t,r){for(var n=[],o=e;o<t;o++)n.push(r(o));return n}(0,12,function(e){return c.a.createElement("div",{key:e,style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",width:.4*r,height:.4*r,border:"solid",transform:"\n\t\t\t\t\t\t\ttranslate(".concat(r,"px, ").concat(r,"px)\n\t\t\t\t\t\t\trotate(").concat(30*e+285,"deg)\n\t\t\t\t\t\t\ttranslate(").concat(r,"px, 0px)\n\t\t\t\t\t\t\trotate(-").concat(30*e+285,"deg)\n\t\t\t\t\t\t"),cursor:"pointer",backgroundColor:o===e?"green":"grey"},onClick:function(t){t.preventDefault(),l(e)}},e+1)}))},b=[{justify:"space-between",terminals:[6,1]},{justify:"space-around",terminals:[5,3]},{justify:"space-around",terminals:[4]},{justify:"space-between",terminals:[7,2]}],d=function(e){var t=e.color,r=e.number,n=e.right,o=(e.opposite,Object(l.useMemo)(function(){return"black"===t?"#000000":function(e){var t=(e.R+e.G+e.B)/3>128?0:255;return s.a.rgb2hex(t,t,t)}(s.a.name2rgb(t))},[t])),a=Object(l.useMemo)(function(){return s.a.hex2hsv(o).V>50?"black":"white"},[o]);return c.a.createElement("div",{style:{display:"flex",flexDirection:n?"row-reverse":"row",justifyContent:"space-between",width:100,height:100,backgroundColor:t,border:"solid 2px",transform:"translate(".concat(n?"":"-","2px, 0px)")}},c.a.createElement("div",null),b.map(function(e,t){return c.a.createElement("div",{key:t,style:{display:"flex",flexDirection:n?"column":"column-reverse",justifyContent:e.justify}},e.terminals.map(function(e){return c.a.createElement("div",{key:e,style:{display:"flex",justifyContent:"center",alignItems:"center",width:20,height:20,color:r===e?a:o,backgroundColor:r===e?o:null}},e)}))}),c.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},c.a.createElement("div",{style:{backgroundColor:t,width:2,height:30,transform:"translate(".concat(n?"-":"","2px, 0px)")}})))},p=[["green","black"],["white","purple"],["yellow","blue"],["red","cyan"]],y=function(e){var t=e.color,r=e.number;return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:100*(p.length+1),border:"solid 2px"}},c.a.createElement("div",null),p.map(function(e,n){return c.a.createElement("div",{key:n,style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},e.map(function(e,n){return c.a.createElement(d,{key:e,color:e,number:t===e&&r,right:n>0})}))}),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},c.a.createElement("div",{style:{width:100,height:2,transform:"translate(0px, 2px)",backgroundColor:"white"}})))},f={void:{"1-2":{color:"red",number:1},"1-7":{color:"yellow",number:3},"1-10":{color:"red",number:6},"1-12":{color:"cyan",number:3},"2-4":{color:"green",number:2},"2-5":{color:"yellow",number:2},"2-6":{color:"cyan",number:1},"2-7":{color:"yellow",number:6},"2-9":{color:"purple",number:5},"3-3":{color:"green",number:7},"4-6":{color:"blue",number:4},"4-8":{color:"white",number:5},"4-9":{color:"yellow",number:1},"5-6":{color:"red",number:5},"5-9":{color:"purple",number:7},"6-5":{color:"purple",number:1},"6-9":{color:"white",number:7},"6-11":{color:"cyan",number:4},"7-2":{color:"white",number:6},"7-4":{color:"green",number:5},"7-9":{color:"yellow",number:4},"7-12":{color:"blue",number:5},"8-4":{color:"cyan",number:2},"8-5":{color:"cyan",number:7},"8-10":{color:"red",number:3},"8-12":{color:"cyan",number:6},"9-3":{color:"green",number:3},"9-7":{color:"purple",number:4},"9-9":{color:"purple",number:2},"10-2":{color:"white",number:2},"10-3":{color:"green",number:4},"10-5":{color:"blue",number:2},"10-12":{color:"green",number:6},"11-1":{color:"blue",number:6},"11-6":{color:"red",number:7},"11-7":{color:"purple",number:3},"11-11":{color:"blue",number:3},"12-2":{color:"cyan",number:5}}},h={void:{2:{"1-1-2-12":{color:"white",number:1},"1-1-4-5":{color:"red",number:2},"4-3-2-4":{color:"green",number:1},"4-3-2-11":{color:"purple",number:6},"8-6-2-9":{color:"white",number:3},"8-6-9-2":{color:"yellow",number:5},"11-4-2-8":{color:"blue",number:7},"11-4-4-11":{color:"yellow",number:7},"11-4-5-4":{color:"red",number:4},"12-5-7-1":{color:"white",number:4},"12-5-12-11":{color:"blue",number:1}},3:{"1-1-8-10":{color:"white",number:1},"1-1-6-5":{color:"red",number:2},"4-3-2-9":{color:"green",number:1},"4-3-4-7":{color:"purple",number:6},"8-6-2-10":{color:"white",number:3},"8-6-12-12":{color:"yellow",number:5},"11-4-4-8":{color:"blue",number:7},"11-4-12-3":{color:"yellow",number:7},"11-4-7-6":{color:"red",number:4},"12-5-5-7":{color:"white",number:4},"12-5-4-4":{color:"blue",number:1}}}},g=(r(13),{void:{label:"Void",color:"purple"}});u.a.render(c.a.createElement(function(){var e=Object(l.useReducer)(function(e,t){return Object.values(Object(n.a)({},e,t))},[0,0,0,0]),t=Object(o.a)(e,2),r=t[0],a=t[1],u=Object(l.useState)("void"),i=Object(o.a)(u,2),b=i[0],d=i[1],p=Object(l.useState)("3"),w=Object(o.a)(p,2),x=w[0],v=w[1],E=Object(l.useMemo)(function(){var e=s.a.name2rgb(g[b].color);return s.a.rgb2hex(Math.max(0,e.R-50),Math.max(0,e.G-50),Math.max(0,e.B-50))},[b]),j=Object(l.useMemo)(function(){var e=r.map(function(e){return e+1});return f[b][e.slice(0,2).join("-")]||h[b][x][e.join("-")]||{color:"grey",number:0}},[r,x,b]),k=Object(l.useMemo)(function(){return Object.keys(h[b][x]).some(function(e){return e.startsWith(r.slice(0,2).map(function(e){return e+1}).join("-"))})},[r,x,b]);return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:"0px 8px"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}},c.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.a.createElement("h3",null,"Configuration"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},Object.entries(g).map(function(e){var t=Object(o.a)(e,2),r=t[0],n=t[1],l=(n.label,n.color);return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:50,height:50,borderRadius:"100%",backgroundColor:b===r?E:l,cursor:"pointer",marginRight:8},onClick:function(e){e.preventDefault(),d(r)}},c.a.createElement("div",{style:{width:25,height:25,borderRadius:"100%",backgroundColor:l}}))})),c.a.createElement("h3",null,"Console 1"),c.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.a.createElement(m,{size:65,selected:r[0],onSelect:function(e){return a({0:e})}}),c.a.createElement(m,{size:75,selected:r[1],onSelect:function(e){return a({1:e})}})),c.a.createElement("h3",null,"Console"," ",c.a.createElement("select",{value:x,onChange:function(e){return v(e.target.value)}},c.a.createElement("option",{value:2},"2"),c.a.createElement("option",{value:3},"3"))," ",k?c.a.createElement("span",{style:{color:"green"}},"Necessary"):c.a.createElement("span",{style:{color:"red"}},"Not Necessary")),c.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.a.createElement(m,{size:65,selected:r[2],onSelect:function(e){return a({2:e})}}),c.a.createElement(m,{size:75,selected:r[3],onSelect:function(e){return a({3:e})}}))),c.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:"0 1 400px"}},c.a.createElement("h3",null,"Solution"," ",j.number>0?c.a.createElement("span",{style:{color:"green"}},"Found"):c.a.createElement("span",{style:{color:"red"}},"Not Found")),c.a.createElement(y,{color:j.color,number:j.number}))),c.a.createElement("div",{style:{marginTop:"4em"}},c.a.createElement("h4",null,"Instructions"),c.a.createElement("p",{style:{maxWidth:600}},"To use, simply click numbers on the first console corresponding to those that are lit up in-game. If the console below says 'Necessary', you must also go to that console and enter the sections that are lit up. Selecting a proper sequence will cause one of the numbers in the solution to be highlighted, and this is the terminal you need to go to in-game to lock the sequence.")),c.a.createElement("div",{style:{marginTop:"4em"}},"Created by DeedleFake. Inspired by"," ",c.a.createElement("a",{href:"https://dm.reddit.com/r/raidsecrets/comments/bmi7fv/void_configuration_solution_solver_mobile_support/emwtklf/"},"this comment"),"."))},null),document.querySelector("#root"))},7:function(e,t,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.79e10b75.chunk.js.map