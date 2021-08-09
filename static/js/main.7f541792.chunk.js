(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{38:function(e,t,l){},39:function(e,t,l){"use strict";l.r(t);var a=l(1),s=l(13),n=l.n(s),c=l(2),i=l(0);var o=function(){return Object(i.jsxs)("div",{className:"relative sm:w-screen flex justify-center sm:h-24",children:[Object(i.jsx)("h1",{className:"text-amber-400 text-6xl font-pacifico pt-8 pl-10 absolute top-0 left-0 z-50 sm:text-5xl sm:pt-5 sm:pl-5",children:"Weather"}),Object(i.jsx)("h1",{className:"text-white text-6xl font-pacifico pt-8 pl-10 absolute top-1 left-1 sm:text-5xl sm:pt-5 sm:pl-5",children:"Weather"})]})};var r=function(e){var t=e.data,l=e.timezone,s=e.backgroundChange,n=e.selectedPage,o=e.dayOrNight,r=Object(a.useState)(null),m=Object(c.a)(r,2),x=m[0],d=m[1];if(Object(a.useEffect)((function(){"current"===n?setTimeout((function(){d({opacity:"1",transition:"opacity 0.5s ease"}),console.log("fadein")}),500):d(null),console.log(x)}),[n]),t){var u=t.dt,h=new Date(1e3*u),j=(new Date).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,timeZone:l}),b=h.toLocaleDateString("en-US",{month:"long",day:"numeric",timeZone:l}),p=function(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0,timeZone:l})};return s(t.sunrise,t.sunset),Object(i.jsxs)("div",{className:"font-baloo pt-10 opacity-0",style:x,children:[Object(i.jsxs)("div",{className:"day"===o?"bg-white bg-opacity-60 rounded-xl flex-col p-6 mt-10 w-400px mx-auto xs:w-11/12":"bg-gray-300 bg-opacity-70 rounded-xl flex-col p-6 mt-10 w-400px mx-auto xs:w-11/12",children:[Object(i.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(i.jsx)("p",{className:"text-2xl pb-4 pl-7 pt-1.5 font-medium sm:pl-1",children:b}),Object(i.jsxs)("div",{className:"pr-7 sm:pr-1",children:[Object(i.jsx)("p",{className:"text-sm w-full text-right",children:"Current Time"}),Object(i.jsx)("p",{className:"w-full text-right",children:j})]})]}),Object(i.jsxs)("div",{className:"w-full mx-auto",children:[Object(i.jsxs)("div",{className:"flex flex-row w-full",children:[Object(i.jsx)("div",{className:"w-48",children:Object(i.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),className:"mx-auto w-28"})}),Object(i.jsxs)("div",{className:"pt-5 xs:pr-3",children:[Object(i.jsxs)("p",{className:"text-5xl font-medium",children:[Math.round(t.temp),Object(i.jsx)("span",{className:"text-3xl align-top font-normal",children:"\xb0F"})]}),Object(i.jsx)("p",{className:"text-xl pl-4 leading-5",children:t.weather[0].description})]})]}),Object(i.jsxs)("div",{className:"grid grid-cols-2 mx-auto w-60 pt-4 pl-10",children:[Object(i.jsx)("p",{className:"text-lg",children:"Humidity:"}),Object(i.jsxs)("p",{className:"text-lg font-medium",children:[t.humidity,"%"]}),Object(i.jsx)("p",{className:"text-lg",children:"Sunset:"}),Object(i.jsx)("p",{className:"text-lg font-medium",children:p(t.sunrise)}),Object(i.jsx)("p",{className:"text-lg",children:"Sunrise:"}),Object(i.jsx)("p",{className:"text-lg font-medium",children:p(t.sunset)})]})]})]}),Object(i.jsx)("div",{className:"h-"})]})}return Object(i.jsx)("div",{children:"Loading..."})};var m=function(e){var t=e.data,l=e.timezone,s=e.backgroundChangeforHourly,n=e.selectedPage,o=e.dayOrNight,r=Object(a.useState)(null),m=Object(c.a)(r,2),x=m[0],d=m[1];if(Object(a.useEffect)((function(){"hourly"===n?setTimeout((function(){d("1"),console.log("fadein")}),500):d(null),console.log(x)}),[n]),t){var u=t.slice(0,12),h=t[0].dt,j=(new Date(1e3*h).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:l}),function(e){return new Date(1e3*e).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:l})}),b=function(e){return new Date(1e3*e).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0,timeZone:l})},p=u.map((function(e,t){return Object(i.jsxs)("div",{className:"day"===o?"bg-white bg-opacity-60 rounded-xl flex-col p-6 mb-10 mx-auto w-60 opacity-0 lg:mb-6 sm:w-full sm:max-w-sm sm:p-4":"bg-gray-300 bg-opacity-70 rounded-xl flex-col p-6 mb-10 mx-auto w-60 opacity-0 lg:mb-6 sm:w-full sm:max-w-sm sm:p-4",style:{opacity:x,transition:"opacity ".concat(.3*t,"s ease")},children:[Object(i.jsx)("p",{className:"text-xl font-medium",children:b(e.dt)}),Object(i.jsx)("p",{className:"text-sm sm:float-left xs:float-none",children:j(e.dt)}),Object(i.jsxs)("div",{className:"flex flex-row justify-center sm:flex-none sm:float-left sm:w-2/5 sm:flex-col xs:flex xs:flex-row xs:float-none xs:w-full",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"w-20",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")})}),Object(i.jsxs)("div",{className:"w-1/2 sm:flex sm:flex-row sm:w-full xs:flex-none xs:flex-col xs:w-1/2 xs:pl-2",children:[Object(i.jsxs)("p",{className:"font-medium text-3xl ",children:[Math.round(e.temp),Object(i.jsx)("span",{className:"text-lg align-top font-normal",children:"\xb0F"})]}),Object(i.jsx)("p",{className:"leading-5 text-base pl-3 sm:pt-4 sm:pl-1 xs:pt-0 xs:pl-3",children:e.weather[0].description})]})]}),Object(i.jsxs)("div",{className:"grid grid-cols-3 sm:mt-4 xs:mt-0 xs:pl-5",children:[Object(i.jsx)("p",{className:"col-span-2 pl-3",children:"Precipitation:"}),Object(i.jsxs)("p",{className:"font-medium",children:[e.pop,"%"]}),Object(i.jsx)("p",{className:"col-span-2 pl-3",children:"Humidity:"}),Object(i.jsxs)("p",{className:"font-medium",children:[e.humidity,"%"]}),Object(i.jsx)("p",{className:"col-span-2 pl-3",children:"Wind:"}),Object(i.jsxs)("p",{className:"font-medium",children:[Math.round(e.wind_speed),"mph"]})]})]},t)}));return s(t[0].weather[0].icon),Object(i.jsx)("div",{className:"flex flex-col justify-center",children:Object(i.jsx)("div",{className:"grid grid-cols-4 w-1100px mx-auto pt-16 xl:grid-cols-3 xl:w-800px lg:w-765px md:grid-cols-2 md:w-530px sm:grid-cols-none sm:w-full sm:px-5 sm:pt-20",children:p})})}return Object(i.jsx)("div",{children:"Loading..."})};var x=function(e){var t=e.data,l=e.timezone,s=e.backgroundChange,n=(e.date,e.selectedPage),o=e.dayOrNight,r=Object(a.useState)(null),m=Object(c.a)(r,2),x=m[0],d=m[1];if(Object(a.useEffect)((function(){"daily"===n?setTimeout((function(){d("1"),console.log("fadein")}),500):d(null),console.log(x)}),[n]),t){var u={hour:"numeric",hour12:!1,timeZone:l},h=t[0].dt,j=(new Date(1e3*h).toLocaleTimeString("en-US",u),t[0].sunrise),b=(new Date(1e3*j).toLocaleTimeString("en-US",u),t[0].sunset),p=(new Date(1e3*b).toLocaleTimeString("en-US",u),function(e){return new Date(1e3*e).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:l})}),g=t.map((function(e,t){return Object(i.jsxs)("div",{className:"day"===o?"bg-white bg-opacity-60 rounded-xl flex-col p-6 mb-10 mx-auto w-60 opacity-0 lg:mb-6 sm:w-full sm:max-w-sm sm:p-4":"bg-gray-300 bg-opacity-70 rounded-xl flex-col p-6 mb-10 mx-auto w-60 opacity-0 lg:mb-6 sm:w-full sm:max-w-sm sm:p-4",style:{opacity:x,transition:"opacity ".concat(.3*t,"s ease")},children:[Object(i.jsx)("p",{className:"text-xl pb-1 font-medium",children:p(e.dt)}),Object(i.jsxs)("div",{className:"flex flex-row justify-center h-28",children:[Object(i.jsx)("div",{className:"",children:Object(i.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png")})}),Object(i.jsxs)("div",{className:"w-1/2 pr-3 xs:w-5/12",children:[Object(i.jsxs)("div",{className:"text-right",children:[Object(i.jsx)("span",{className:"text-sm",children:"MAX "}),Object(i.jsx)("span",{className:"font-medium text-3xl",children:Math.round(e.temp.max)}),Object(i.jsx)("span",{className:"text-lg align-top",children:"\xb0F"})]}),Object(i.jsxs)("div",{className:"text-right",children:[Object(i.jsx)("span",{className:"text-sm",children:"MIN "}),Object(i.jsx)("spam",{className:"font-medium text-3xl",children:Math.round(e.temp.min)}),Object(i.jsx)("span",{className:"text-lg align-top",children:"\xb0F"})]}),Object(i.jsx)("p",{className:"leading-5 capitalize pl-3 sm:text-right",children:e.weather[0].description})]})]}),Object(i.jsxs)("div",{className:"grid grid-cols-3 mt-3 align-bottom sm:px-16 xs:px-10  ",children:[Object(i.jsx)("p",{className:"col-span-2 pl-5 xs:pl-1",children:"Precipitation:"}),Object(i.jsxs)("p",{className:"font-medium",children:[e.pop,"%"]}),Object(i.jsx)("p",{className:"col-span-2 pl-5 xs:pl-1",children:"Humidity:"}),Object(i.jsxs)("p",{className:"font-medium",children:[e.humidity,"%"]})]})]},t)}));return s(t[0].sunrise,t[0].sunset),Object(i.jsx)("div",{className:"grid grid-cols-4 w-1100px mx-auto pt-16 xl:grid-cols-3 xl:w-800px lg:w-765px md:grid-cols-2 md:w-530px sm:grid-cols-none sm:w-full sm:px-5 sm:pt-20",children:g})}return Object(i.jsx)("div",{children:"Loading..."})},d=l(14),u=l.n(d);var h=function(e){var t=e.selectedPage,l=e.apiFilter,s=e.lat,n=e.lon,o=e.backgroundChange,d=e.backgroundChangeforHourly,h=e.dayOrNight,j=function(e,t,l){var s=Object(a.useState)({}),n=Object(c.a)(s,2),i=n[0],o=n[1],r="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(l,"&exclude=").concat(e,"&units=imperial&appid=0f4895c08c6b38a4ddbee7eb8e8f71e3");return Object(a.useEffect)((function(){u.a.get(r).then((function(e){var t=e.data;o(t)}))}),[r]),i}(l,s,n);return j.current||j.hourly||j.daily?"current"===t?Object(i.jsx)(r,{data:j.current,timezone:j.timezone,backgroundChange:o,selectedPage:t,dayOrNight:h}):"hourly"===t?Object(i.jsx)(m,{data:j.hourly,timezone:j.timezone,backgroundChangeforHourly:d,selectedPage:t,dayOrNight:h}):"daily"===t?Object(i.jsx)(x,{data:j.daily,timezone:j.timezone,backgroundChange:o,selectedPage:t,dayOrNight:h}):void 0:Object(i.jsx)("div",{children:"Loading..."})},j=[{label:"Los Angeles",value:"losAngeles",lat:34.05,lon:-118.24,timezone:"America/Los_Angeles"},{label:"New York",value:"newYork",lat:40.71,lon:-74.01,timezone:"America/New_York"},{label:"Tokyo",value:"tokyo",lat:35.68,lon:139.65,timezone:"Japan"},{label:"London",value:"london",lat:51.51,lon:-.13,timezone:"Europe/London"}];var b=function(e){var t=e.onChange,l=e.dayOrNight,a=e.selectedCityName,s=j.map((function(e,t){return Object(i.jsx)("option",{value:e.value,children:e.label},t)}));return Object(i.jsxs)("div",{className:"day"===l?"font-baloo font-semibold mt-32 h-12 text-gray-600 flex absolute top-0 right-56 pt-0 2xl:right-36 xl:right-8 lg:mt-12 sm:right-3 sm:top-28":" font-baloo font-semibold mt-32 h-12 text-white flex absolute top-0 right-56 pt-0 2xl:right-36 xl:right-8 lg:mt-12 sm:right-3 sm:top-28",children:[Object(i.jsxs)("label",{htmlFor:"city",className:"pr-2 text-lg h-12 mt-2",children:["Location"," "]}),Object(i.jsx)("select",{className:"day"===l?"rounded bg-white bg-opacity-60 text-gray-600 text-xl px-3 sm:text-lg sm:h-10 cursor-pointer":"rounded bg-yellow-400 bg-opacity-30 text-white text-xl px-3 sm:text-lg sm:h-10 cursor-pointer",name:"city",id:"city",onChange:t,value:a,children:s})]})};var p=function(e){var t=e.backgroundChange,l=e.backgroundChangeforHourly,s=e.dayOrNight,n=Object(a.useState)("current"),o=Object(c.a)(n,2),r=o[0],m=o[1],x=Object(a.useState)("minutely,hourly,daily,alerts"),d=Object(c.a)(x,2),u=d[0],p=d[1],g=Object(a.useState)(j[0].label),f=Object(c.a)(g,2),O=f[0],y=f[1],w=Object(a.useState)(j[0].lat),N=Object(c.a)(w,2),v=N[0],S=N[1],k=Object(a.useState)(j[0].lon),C=Object(c.a)(k,2),z=C[0],L=C[1],D=Object(a.useState)(j[0].timezone),T=Object(c.a)(D,2),P=(T[0],T[1]),H="minutely,hourly,daily,alerts",U="minutely,current,daily,alerts",F="minutely,hourly,current,alerts",Z=function(e){var t=e.currentTarget.value;m(t),p("current"===t?H:"hourly"===t?U:F)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{onClick:function(){m("current"),p("minutely,hourly,daily,alerts"),y(j[0].label),S(j[0].lat),L(j[0].lon),P(j[0].timezone)},className:"bg-pink-400 opacity-0 w-64 h-24 flex absolute top-5 left-7 z-50 cursor-pointer sm:top-2 sm:left-2 sm:w-56 sm:h-20"}),Object(i.jsxs)("div",{className:"flex flex-row justify-between ",children:[Object(i.jsxs)("div",{className:"w-1000px h-12 pl-4 mt-32 flex flex-row justify-left bg-gradient-to-r from-amber-400 via-amber-400 bg-opacity-30 text-white xl:w-800px lg:w-600px sm:mt-0 sm:bg-amber-400 sm:justify-center sm:w-screen sm:pl-0",children:[Object(i.jsx)("button",{onClick:Z,value:"current",className:"current"===r?" text-gray-600 px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg":"px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg",children:"Today"}),Object(i.jsx)("button",{onClick:Z,value:"hourly",className:"hourly"===r?"text-gray-600  px-6 h-12 mx-20 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 lg:mx-10 xs:text-lg":"px-6 h-12 mx-20 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 lg:mx-10 xs:text-lg",children:"Hourly"}),Object(i.jsx)("button",{onClick:Z,value:"daily",className:"daily"===r?"text-gray-600 px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg":"px-6 h-12 text-xl font-baloo font-bold hover:text-gray-500 transition lg:px-3 xs:text-lg",children:"Daily"})]}),Object(i.jsx)(b,{selector:j,onChange:function(e){var t=e.currentTarget.value;y(t),j.forEach((function(e){e.value===t&&(S(e.lat),L(e.lon),P(e.timezone))})),console.log(O)},dayOrNight:s,selectedCityName:O})]}),Object(i.jsx)("div",{className:"font-baloo",children:Object(i.jsx)(h,{selectedPage:r,apiFilter:u,lat:v,lon:z,backgroundChange:t,backgroundChangeforHourly:l,dayOrNight:s})})]})};var g=function(){var e=(new Date).getFullYear();return Object(i.jsx)("div",{className:"text-right pt-40 mr-10 pb-5",children:Object(i.jsxs)("small",{className:"w-screen font-baloo text-amber-400",children:["\xa9 ",e," Ryo Inciong"]})})};var f=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),l=t[0],s=t[1];return Object(i.jsxs)("div",{className:"night"===l?"bg-nighttime bg-scroll h-full min-h-screen transition-all duration-500":"bg-daytime bg-scroll h-full min-h-screen transition-all duration-500",style:{backgroundAttachment:"fixed",backgroundPosition:"bottom"},children:[Object(i.jsx)(o,{className:l}),Object(i.jsx)(p,{backgroundChange:function(e,t){var l=(new Date).getTime()/1e3;s(l-e>0&&l-t<0?"day":"night")},backgroundChangeforHourly:function(e){/d$/.test(e)?(console.log("daytime"),s("day")):(console.log("nighttime"),s("night"))},dayOrNight:l}),Object(i.jsx)(g,{})]})};l(38);n.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7f541792.chunk.js.map