"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[212],{212:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(433),a=t(439),i=t(791),u=t(256),c=t(689),o=t(87),s=t(184);function f(e){var n=e.movies,t=(0,c.TH)();return(0,s.jsx)("ul",{children:n.map((function(e){var n=e.title,r=e.id;return(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"movies/".concat(r),state:{from:t},children:n})},r)}))})}var m=function(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],c=n[1],o=(0,i.useState)([]),m=(0,a.Z)(o,2),l=m[0],v=m[1],d=(0,i.useState)(!1),p=(0,a.Z)(d,2),h=p[0],k=p[1];return(0,i.useEffect)((function(){t||(k(!0),(0,u.vw)().then((function(e){var n=e.data.results;v((0,r.Z)(n)),c(!0)})).catch((function(e){return console.log(e)})).finally((function(){k(!1)})))}),[t]),(0,s.jsx)(s.Fragment,{children:!h&&t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Trending today"}),(0,s.jsx)(f,{movies:l})]})})}},256:function(e,n,t){t.d(n,{Hx:function(){return c},Y5:function(){return u},bI:function(){return s},vw:function(){return i},xc:function(){return o}});var r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="80fe24ea6ea4db327f1f3c79898b7ba2",i=function(e){return(0,r.Z)("trending/movie/day",{params:{api_key:a,page:e}})},u=function(e){return(0,r.Z)("movie/".concat(e),{params:{api_key:a}})},c=function(e){return(0,r.Z)("movie/".concat(e,"/reviews"),{params:{api_key:a}})},o=function(e){return(0,r.Z)("movie/".concat(e,"/credits"),{params:{api_key:a}})},s=function(e){return(0,r.Z)("search/movie",{params:{api_key:a,query:e}})}}}]);
//# sourceMappingURL=212.fef93d6c.chunk.js.map