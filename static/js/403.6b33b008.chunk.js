"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[403],{403:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(433),a=n(439),u=n(791),i=n(87),c=n(256),o=n(689),s=n(184);function f(e){var t=e.movies,n=(0,o.TH)();return(0,s.jsx)("ul",{children:t.map((function(e){var t=e.title,r=e.id;return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"".concat(r),state:{from:n},children:t})},r)}))})}var l=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),n=t[0],o=t[1],l=(0,u.useState)([]),m=(0,a.Z)(l,2),h=m[0],d=m[1],p=(0,u.useState)(!1),v=(0,a.Z)(p,2),x=v[0],y=v[1],b=n.get("query");return(0,u.useEffect)((function(){b&&(y(!0),(0,c.bI)(b).then((function(e){var t=e.data.results;d((0,r.Z)(t))})).catch((function(e){return console.log(e)})).finally((function(){y(!1)})))}),[b]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value;""!==t.trim()?o({query:t.trim()}):alert("Enter data for search")},children:[(0,s.jsx)("input",{type:"text",name:"query",defaultValue:b}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)(s.Fragment,{children:!x&&(0,s.jsxs)(s.Fragment,{children:[h.length>0&&(0,s.jsx)(f,{movies:h}),0===h.length&&b&&(0,s.jsx)("p",{children:"No matches found! Please enter other data for search."})]})})]})}},256:function(e,t,n){n.d(t,{Hx:function(){return c},Y5:function(){return i},bI:function(){return s},vw:function(){return u},xc:function(){return o}});var r=n(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="80fe24ea6ea4db327f1f3c79898b7ba2",u=function(e){return(0,r.Z)("trending/movie/day",{params:{api_key:a,page:e}})},i=function(e){return(0,r.Z)("movie/".concat(e),{params:{api_key:a}})},c=function(e){return(0,r.Z)("movie/".concat(e,"/reviews"),{params:{api_key:a}})},o=function(e){return(0,r.Z)("movie/".concat(e,"/credits"),{params:{api_key:a}})},s=function(e){return(0,r.Z)("search/movie",{params:{api_key:a,query:e}})}}}]);
//# sourceMappingURL=403.6b33b008.chunk.js.map