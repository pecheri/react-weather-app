(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(13),a=n.n(c),i=n(3),o=n(0);var l=function(){return Object(o.jsx)("div",{className:"text-yellow-400 text-6xl",children:"Weather"})};var u=function(e){var t=e.data,n=e.timezone,r=e.backgroundChange;if(t){var c=t.dt,a=new Date(1e3*c).toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:n});return r(t.dt,t.sunrise,t.sunset),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Current Weather"}),Object(o.jsx)("p",{children:a}),Object(o.jsx)("p",{children:t.weather[0].description}),Object(o.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")}),Object(o.jsxs)("p",{children:[Math.round(t.temp),"F"]}),Object(o.jsxs)("p",{children:[t.humidity,"%"]})]})}return Object(o.jsx)("div",{children:"Loading..."})};var s=function(e){var t=e.data,n=e.timezone,r=e.backgroundChange;if(t){var c=t.slice(0,6),a=t[0].dt,i=new Date(1e3*a).toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:n}),l=function(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0,timeZone:n})},u=c.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:l(e.dt)}),Object(o.jsx)("p",{children:e.weather[0].description}),Object(o.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),Object(o.jsxs)("p",{children:[Math.round(e.temp),"F"]}),Object(o.jsxs)("p",{children:[e.humidity,"%"]})]},t)}));return r(t[0].dt,t[0].sunrise,t[0].sunset),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Hourly Weather"}),Object(o.jsx)("p",{children:i}),u]})}return Object(o.jsx)("div",{children:"Loading..."})};var d=function(e){var t=e.data,n=e.timezone,r=e.backgroundChange;if(e.date,t){var c={hour:"numeric",hour12:!1,timeZone:n},a=t[0].dt,i=new Date(1e3*a).toLocaleTimeString("en-US",c),l=t[0].sunrise,u=(new Date(1e3*l).toLocaleTimeString("en-US",c),t[0].sunset),s=(new Date(1e3*u).toLocaleTimeString("en-US",c),function(e){return new Date(1e3*e).toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:n})}),d=function(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,timeZone:n})},j=t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:s(e.dt)}),Object(o.jsx)("p",{children:e.weather[0].description}),Object(o.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),Object(o.jsxs)("p",{children:["MIN: ",Math.round(e.temp.min),"F"]}),Object(o.jsxs)("p",{children:["MAX: ",Math.round(e.temp.max),"F"]}),Object(o.jsxs)("p",{children:["Sunrise: ",d(e.sunrise)]}),Object(o.jsxs)("p",{children:["Sunset: ",d(e.sunset)]}),Object(o.jsxs)("p",{children:[e.humidity,"%"]})]},t)}));return r(i.dt,t[0].sunrise,t[0].sunset),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"DailyWeather"}),j]})}return Object(o.jsx)("div",{children:"Loading..."})},j=n(14),h=n.n(j);var b=function(e){var t=e.selectedPage,n=e.apiFilter,c=e.lat,a=e.lon,l=(e.timezone,e.backgroundChange),j=function(e,t,n){var c=Object(r.useState)({}),a=Object(i.a)(c,2),o=a[0],l=a[1],u="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&exclude=").concat(e,"&units=imperial&appid=0f4895c08c6b38a4ddbee7eb8e8f71e3");return Object(r.useEffect)((function(){h.a.get(u).then((function(e){var t=e.data;l(t),console.log(t)}))}),[u]),o}(n,c,a);return j.current||j.hourly||j.daily?"current"===t?Object(o.jsx)(u,{data:j.current,timezone:j.timezone,backgroundChange:l}):"hourly"===t?Object(o.jsx)(s,{data:j.hourly,timezone:j.timezone,backgroundChange:l}):"daily"===t?Object(o.jsx)(d,{data:j.daily,timezone:j.timezone,backgroundChange:l,date:j.current}):void 0:Object(o.jsx)("div",{children:"Loading..."})},m=[{label:"Los Angeles",value:"losAngeles",lat:34.05,lon:-118.24,timezone:"America/Los_Angeles"},{label:"New York",value:"newYork",lat:40.71,lon:-74.01,timezone:"America/New_York"},{label:"Tokyo",value:"tokyo",lat:35.68,lon:139.65,timezone:"Japan"},{label:"London",value:"london",lat:51.51,lon:-.13,timezone:"Europe/London"}];var O=function(e){var t=e.onChange,n=m.map((function(e,t){return Object(o.jsx)("option",{value:e.value,children:e.label},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"city",children:"Select Area: "}),Object(o.jsx)("select",{name:"city",id:"city",onChange:t,children:n})]})};var g=function(e){var t=e.backgroundChange,n=Object(r.useState)("current"),c=Object(i.a)(n,2),a=c[0],l=c[1],u=Object(r.useState)("minutely,hourly,daily,alerts"),s=Object(i.a)(u,2),d=s[0],j=s[1],h=Object(r.useState)(m[0].label),g=Object(i.a)(h,2),p=g[0],x=g[1],v=Object(r.useState)(m[0].lat),y=Object(i.a)(v,2),f=y[0],w=y[1],S=Object(r.useState)(m[0].lon),k=Object(i.a)(S,2),z=k[0],C=k[1],L=Object(r.useState)(m[0].timezone),D=Object(i.a)(L,2),T=D[0],F=D[1],U="minutely,hourly,daily,alerts",A="minutely,current,daily,alerts",M="minutely,hourly,current,alerts",N=function(e){var t=e.currentTarget.value;l(t),j("current"===t?U:"hourly"===t?A:M)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{selector:m,onChange:function(e){var t=e.currentTarget.value;m.forEach((function(e){e.value===t&&(x(e.label),w(e.lat),C(e.lon),F(e.timezone))}))}}),Object(o.jsx)("button",{onClick:N,value:"current",children:"Today"}),Object(o.jsx)("button",{onClick:N,value:"hourly",children:"Hourly"}),Object(o.jsx)("button",{onClick:N,value:"daily",children:"Daily"}),Object(o.jsx)("p",{children:p}),Object(o.jsx)(b,{selectedPage:a,apiFilter:d,lat:f,lon:z,timezone:T,backgroundChange:t})]})};var p=function(){return Object(o.jsx)("div",{children:"Footer"})};var x=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{className:"bg-blue-500",children:[Object(o.jsx)(l,{className:n}),Object(o.jsx)(g,{backgroundChange:function(e,t,n){e-t>0&&e-n<0?(console.log("daytime"),c("day")):(console.log("nighttime"),c("night"))}}),Object(o.jsx)(p,{})]})};n(38);a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.33c1ad62.chunk.js.map