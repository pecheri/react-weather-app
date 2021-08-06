(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(13),i=n.n(c),a=(n(19),n(20),n(0));var o=function(){return Object(a.jsx)("div",{children:"Header"})},l=n(3);var j=function(e){var t=e.data,n=e.timezone;if(t){var r=t.dt,c=new Date(1e3*r).toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:n});return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Current Weather"}),Object(a.jsx)("p",{children:c}),Object(a.jsx)("p",{children:t.weather[0].description}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")}),Object(a.jsxs)("p",{children:[t.temp,"F"]}),Object(a.jsxs)("p",{children:[t.humidity,"%"]})]})}return Object(a.jsx)("div",{children:"Loading..."})};var s=function(e){var t=e.data,n=e.timezone;if(t){var r=t.slice(0,6),c=t[0].dt,i=new Date(1e3*c).toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:n}),o=function(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0,timeZone:n})},l=r.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:o(e.dt)}),Object(a.jsx)("p",{children:e.weather[0].description}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),Object(a.jsxs)("p",{children:[e.temp,"F"]}),Object(a.jsxs)("p",{children:[e.humidity,"%"]})]},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Hourly Weather"}),Object(a.jsx)("p",{children:i}),l]})}return Object(a.jsx)("div",{children:"Loading..."})};var u=function(e){var t=e.data,n=e.timezone;if(t){var r=function(e){return new Date(1e3*e).toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:n})},c=function(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,timeZone:n})},i=t.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:r(e.dt)}),Object(a.jsx)("p",{children:e.weather[0].description}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")}),Object(a.jsxs)("p",{children:["MIN: ",e.temp.min,"F"]}),Object(a.jsxs)("p",{children:["MAX: ",e.temp.max,"F"]}),Object(a.jsxs)("p",{children:["Sunrise: ",c(e.sunrise)]}),Object(a.jsxs)("p",{children:["Sunset: ",c(e.sunset)]}),Object(a.jsxs)("p",{children:[e.humidity,"%"]})]},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"DailyWeather"}),i]})}return Object(a.jsx)("div",{children:"Loading..."})},d=n(14),h=n.n(d);var b=function(e){var t=e.selectedPage,n=e.apiFilter,c=e.lat,i=e.lon,o=e.timezone,d=function(e,t,n){var c=Object(r.useState)({}),i=Object(l.a)(c,2),a=i[0],o=i[1],j="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&exclude=").concat(e,"&units=imperial&appid=0f4895c08c6b38a4ddbee7eb8e8f71e3");return Object(r.useEffect)((function(){h.a.get(j).then((function(e){var t=e.data;o(t),console.log(t)}))}),[j]),a}(n,c,i);return d.current||d.hourly||d.daily?"current"===t?Object(a.jsx)(j,{data:d.current,timezone:o}):"hourly"===t?Object(a.jsx)(s,{data:d.hourly,timezone:o}):"daily"===t?Object(a.jsx)(u,{data:d.daily,timezone:o}):void 0:Object(a.jsx)("div",{children:"Loading..."})},O=[{label:"Los Angeles",value:"losAngeles",lat:34.05,lon:-118.24,timezone:"America/Los_Angeles"},{label:"New York",value:"newYork",lat:40.71,lon:-74.01,timezone:"America/New_York"},{label:"Tokyo",value:"tokyo",lat:35.68,lon:139.65,timezone:"Japan"},{label:"London",value:"london",lat:51.51,lon:-.13,timezone:"Europe/London"}];var p=function(e){var t=e.onChange,n=O.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.label},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"city",children:"Select Area: "}),Object(a.jsx)("select",{name:"city",id:"city",onChange:t,children:n})]})};var m=function(){var e=Object(r.useState)("current"),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("minutely,hourly,daily,alerts"),o=Object(l.a)(i,2),j=o[0],s=o[1],u=Object(r.useState)(O[0].label),d=Object(l.a)(u,2),h=d[0],m=d[1],x=Object(r.useState)(O[0].lat),v=Object(l.a)(x,2),g=v[0],y=v[1],f=Object(r.useState)(O[0].lon),w=Object(l.a)(f,2),S=w[0],z=w[1],L=Object(r.useState)(O[0].timezone),k=Object(l.a)(L,2),D=k[0],A=k[1],F="minutely,hourly,daily,alerts",C="minutely,current,daily,alerts",T="minutely,hourly,current,alerts",U=function(e){var t=e.currentTarget.value;c(t),s("current"===t?F:"hourly"===t?C:T)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{selector:O,onChange:function(e){var t=e.currentTarget.value;O.forEach((function(e){e.value===t&&(m(e.label),y(e.lat),z(e.lon),A(e.timezone))}))}}),Object(a.jsx)("button",{onClick:U,value:"current",children:"Today"}),Object(a.jsx)("button",{onClick:U,value:"hourly",children:"Hourly"}),Object(a.jsx)("button",{onClick:U,value:"daily",children:"Daily"}),Object(a.jsx)("p",{children:h}),Object(a.jsx)(b,{selectedPage:n,apiFilter:j,lat:g,lon:S,timezone:D})]})};var x=function(){return Object(a.jsx)("div",{children:"Footer"})};var v=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(m,{}),Object(a.jsx)(x,{})]})};i.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.15657073.chunk.js.map