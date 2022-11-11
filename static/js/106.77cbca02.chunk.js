"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[106],{4635:function(n,e,t){t.d(e,{Df:function(){return s},HI:function(){return p},Jh:function(){return h},_r:function(){return v},gH:function(){return l}});var r=t(5861),i=t(7757),o=t.n(i),c=t(4569),a=t.n(c);function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/trending/movie/day").then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("https://api.themoviedb.org/3/search/movie?api_key=28ee55ee4f041c26782ede9b7957398f&query=".concat(e)).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/movie/".concat(e)).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/movie/".concat(e,"/credits")).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a().get("/movie/".concat(e,"/reviews")).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a().defaults.baseURL="https://api.themoviedb.org/3/",a().defaults.params={api_key:"28ee55ee4f041c26782ede9b7957398f",page:1,language:"en-US"}},2106:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,i,o,c,a,s,u=t(885),l=t(2791),f=t(4635),p=t(6871),d=t(168),h=t(7939),x=t(3504),v=(0,h.ZP)("div")(r||(r=(0,d.Z)(["\nborder-top:    2px solid  black;\nborder-bottom: 2px solid black;\nmargin-top: 10px;\n"]))),g=(0,h.ZP)(x.OL)(i||(i=(0,d.Z)(["\ndisplay: inline-block;\n  text-decoration: none;\n  padding: 12px;\n  font-weight: 500;\n  color: #2a363b;\n  font-size: 18px;\n  &.active {\n    color: red;\n  }\n"]))),m=t(184),w=function(){return(0,m.jsxs)(v,{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)(g,{to:"cast",children:"Casts"}),(0,m.jsx)(g,{to:"reviews",children:"Reviews"})]})]})},b=t(4005),j=(0,h.ZP)("div")(o||(o=(0,d.Z)(["\n display: flex;\n flex-direction: row;\n font-weight: 400;\n color: #2a363b;\n font-size: 18px;\n margin-top: 10px;\n"]))),Z=(0,h.ZP)("div")(c||(c=(0,d.Z)(["\nmargin-left: 20px"]))),y=(0,h.ZP)("ul")(a||(a=(0,d.Z)(["\ndisplay: flex;\n flex-direction: row;\n padding-left: 0px;\n"]))),k=(0,h.ZP)("li")(s||(s=(0,d.Z)(["\nmargin-right: 10px;\n"]))),_=function(n){var e=n.movie;return(0,m.jsxs)(j,{children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,onError:function(n){var e=n.currentTarget;e.onerror=null,e.src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"}}),(0,m.jsxs)(Z,{children:[(0,m.jsxs)("h2",{children:[e.title,"(",e.release_date.slice(0,4),") "]}),(0,m.jsxs)("p",{children:["User score: ",10*e.vote_average,"% "]}),(0,m.jsx)("h3",{children:"Overview: "}),(0,m.jsx)("p",{children:e.overview}),(0,m.jsx)("h3",{children:"Genres:"}),(0,m.jsxs)(y,{children:[e.genres.map((function(n){return(0,m.jsx)(k,{children:n.name},n.id)}))," "]})]})]})};function H(){var n=(0,p.TH)(),e=(0,p.s0)(),t=(0,l.useState)(null),r=(0,u.Z)(t,2),i=r[0],o=r[1],c=(0,p.UO)().movieId;return(0,l.useEffect)((function(){(0,f.HI)(c).then((function(n){return o(n)}))}),[c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.Z,{onClick:function(){var t,r;e(null!==(t=null===n||void 0===n||null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/")},children:"Go back"}),i&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{movie:i}),(0,m.jsx)(w,{}),(0,m.jsx)(p.j3,{})]})]})}}}]);
//# sourceMappingURL=106.77cbca02.chunk.js.map