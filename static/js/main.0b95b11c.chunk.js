(this["webpackJsonpapi-app"]=this["webpackJsonpapi-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(13),n(14),n(3)),o=n.n(s),u=n(4),j=n(2);n(6).config();var f=n(0);var l=function(e){var t=e.description,n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],s=function(){var e=Object(u.a)(o.a.mark((function e(n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,fetch(n).then((function(e){return e.json()}));case 3:a=e.sent,console.log(a),c=a.data[Math.floor(20*Math.random())].images.original.url,i(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s(function(e){var t;return t="Clear"===e?"sunny":e,console.log(e),"http://api.giphy.com/v1/gifs/".concat("search?q=",t,"&limit=","20","&api_key=","oj7y67dGoJOLsovSxaoWbyLH3oLftshR")}(t))}),[t]),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"gif-wrapper",children:Object(f.jsx)("img",{className:"generated-gif",src:r,alt:"gif"})})})};function p(){window.location.reload(!1)}var h=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:"refresh-btn",id:"rotate",onClick:p,children:e.title})})},d=function(){var e=(new Date).getFullYear(),t=(new Date).getDate(),n=(new Date).getDay(),a=(new Date).getHours(),c=(new Date).getMinutes();return Object(f.jsx)("header",{children:Object(f.jsxs)("p",{className:"top",children:["Stockholm, Sweden ",a,":",c," ",t,"/",n,"/",e]})})};n(6).config();var b=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(j.a)(i,2),p=s[0],b=s[1],O=Object(a.useState)(""),m=Object(j.a)(O,2),v=m[0],x=m[1],g=Object(a.useState)(""),w=Object(j.a)(g,2),k=w[0],y=w[1],S="https://api.openweathermap.org/data/2.5/weather".concat("?q=","stockholm","&appid=","70217054e825227b613f9205df5ff9e7","&units=","metric");Object(a.useEffect)((function(){N()}),[]);var N=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S).then((function(e){return e.json()})).catch((function(e){r("Big problem happened, Sorry :(")}));case 2:t=e.sent,n=t.main.temp,a=t.main.feels_like,c=t.weather[0].main,i=t.weather[0].description,r(n),b(a),x(c),y(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(d,{}),Object(f.jsxs)("h1",{className:"weather-heading",children:["It's ",k,"!"]}),Object(f.jsx)(h,{title:"New GIF"}),Object(f.jsx)(l,{description:v}),Object(f.jsxs)("p",{className:"temp-text",children:["Today the temperature in Stockholm is ",Math.round(c),"\xb0C, but it feels more like ",Math.round(p),"\xb0C."]})]})};var O=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(b,{})})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0b95b11c.chunk.js.map