(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o);n(15),n(3),n(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);var c=n(4),i=n(5),u=n(7),l=n(6),g=n(8),m=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={count:0,tags:["tag1","tag2","tag3"]},n}return Object(g.a)(t,e),Object(i.a)(t,[{key:"renderTags",value:function(){return 0===this.state.tags.length?r.a.createElement("p",null,"No Tags"):r.a.createElement("ul",null,this.state.tags.map(function(e){return r.a.createElement("li",{key:e},e)}))}},{key:"render",value:function(){var e=this.getBadgeClasses();return r.a.createElement("div",null,r.a.createElement("span",{className:e},this.formatCount()),r.a.createElement("button",{className:"btn btn-secondary btn-sm"},"Increment"),this.renderTags())}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.state.count?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.state.count;return 0===e?"Zero":e}}]),t}(a.Component);s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.2bd243c5.chunk.js.map