"use strict";var cssLoad=function(e,t,n){function i(e){return r.body?e():setTimeout(function(){i(e)})}var o=function e(t){for(var n=s.href,i=a.length;i--;)if(a[i].href===n)return t();setTimeout(function(){e(t)})},r=window.document,a=r.styleSheets,s=r.createElement("link"),n=n||"all";if(s.rel="stylesheet",s.href=e,s.media=n,!t){var d=(r.getElementsByTagName("head")[0]||r.body).childNodes;t=d[d.length-1]}i(function(){t.parentNode.insertBefore(s,t||t.nextSibling)}),s.addEventListener&&s.addEventListener("load",function(e){if(navigator.userAgent.toLowerCase().match(/firefox/)){var n=r.createElement("script");t.parentNode.insertBefore(n,t||t.nextSibling)}}),s.onloadcssdefined=o,o(function(){s.media!==n&&(s.media=n)})};module.exports=cssLoad;