(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__nGDM2",loading:"QuoteForm_loading__2VPjy",control:"QuoteForm_control__2s-cK",actions:"QuoteForm_actions__3D_mV"}},function(e,t,n){e.exports={header:"MainNavigation_header__15u-s",logo:"MainNavigation_logo__dPJ4F",nav:"MainNavigation_nav__3SyJJ",active:"MainNavigation_active__2JSzX"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2490s",loading:"NewCommentForm_loading__sXWjz",control:"NewCommentForm_control__GojA2",actions:"NewCommentForm_actions__22AJk"}},,,,,function(e,t,n){e.exports={list:"QuoteList_list__2XI-U",sorting:"QuoteList_sorting__1Osz3"}},,function(e,t,n){e.exports={item:"QuoteItem_item__2tbq-"}},,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__ARxFP"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__SSPZ9"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__1laiF"}},function(e,t,n){e.exports={comments:"Comments_comments__12czX"}},function(e,t,n){e.exports={item:"CommentItem_item__3QMeX"}},function(e,t,n){e.exports={comments:"CommentsList_comments__3CxKA"}},function(e,t,n){e.exports={card:"Card_card__2oxQt"}},function(e,t,n){e.exports={main:"Layout_main__EKeZ_"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),s=n(4),a=(n(37),n(2)),o=n(1),i=n.n(o),u=n(23),j=n.n(u),d=n(0),l=function(e){return Object(d.jsxs)("li",{className:j.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(s.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},m=n(21),b=n.n(m),h=function(e){var t,n,c=Object(a.h)(),r=Object(a.i)(),s="asc"===new URLSearchParams(r.search).get("sort"),i=(t=e.quotes,n=s,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:b.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){c.push({pathname:r.pathname,search:"?sort=".concat(s?"desc":"asc")})},children:["Sort ",s?"desc":"asc"]})}),Object(d.jsx)("ul",{className:b.a.list,children:i.map((function(e){return Object(d.jsx)(l,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=n(25),O=n.n(x),f=function(){return Object(d.jsx)("div",{className:O.a.spinner})},p=n(26),v=n.n(p),_=function(){return Object(d.jsxs)("div",{className:v.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(s.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},g=n(12),N=n(5),w=n.n(N),q=n(9),C=n(11);function y(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(y,{status:t?"pending":null,data:null,error:null}),c=Object(C.a)(n,2),r=c[0],s=c[1],a=Object(o.useCallback)(function(){var t=Object(q.a)(w.a.mark((function t(n){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(g.a)({sendRequest:a},r)},S="https://react-http-10733-default-rtdb.firebaseio.com";function F(){return E.apply(this,arguments)}function E(){return(E=Object(q.a)(w.a.mark((function e(){var t,n,c,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(r in c=[],n)s=Object(g.a)({id:r},n[r]),c.push(s);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return R.apply(this,arguments)}function R(){return(R=Object(q.a)(w.a.mark((function e(t){var n,c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return r=Object(g.a)({id:t},c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return I.apply(this,arguments)}function I(){return(I=Object(q.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return J.apply(this,arguments)}function J(){return(J=Object(q.a)(w.a.mark((function e(t){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return(M=Object(q.a)(w.a.mark((function e(t){var n,c,r,s,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(s in r=[],c)a=Object(g.a)({id:s},c[s]),r.push(a);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=k(F,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===n?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f,{})}):r?Object(d.jsx)("p",{className:"centered focused",children:r}):"completed"!==n||c&&0!==c.length?Object(d.jsx)(h,{quotes:c}):Object(d.jsx)(_,{})},T=n(27),U=n.n(T),X=function(e){return Object(d.jsxs)("figure",{className:U.a.quote,children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("figcaption",{children:e.author})]})},z=n(28),G=n.n(z),K=n(16),V=n.n(K),Z=function(e){var t=Object(o.useRef)(),n=k(D),c=n.sendRequest,r=n.status,s=n.error,a=e.onAddedComment;Object(o.useEffect)((function(){"completed"!==r||s||a()}),[r,s,a]);var i=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(d.jsxs)("form",{className:V.a.form,onSubmit:i,children:["pending"===r&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f,{})}),Object(d.jsxs)("div",{className:V.a.control,onSubmit:i,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:V.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},B=n(29),H=n.n(B),W=function(e){return Object(d.jsx)("li",{className:H.a.item,children:Object(d.jsx)("p",{children:e.text})})},Y=n(30),$=n.n(Y),ee=function(e){return Object(d.jsx)("ul",{className:$.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(W,{text:e.text},e.id)}))})},te=function(){var e=Object(o.useState)(!1),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.j)().quoteId,s=k(L),i=s.sendRequest,u=s.status,j=s.data;Object(o.useEffect)((function(){i(r)}),[r,i]);var l,m=Object(o.useCallback)((function(){i(r)}),[i,r]);return"pending"===u&&(l=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f,{})})),"completed"===u&&j&&j.length>0&&(l=Object(d.jsx)(ee,{comments:j})),"completed"!==u||j&&0!==j.length||(l=Object(d.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(d.jsxs)("section",{className:G.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(Z,{quoteId:r,onAddedComment:m}),l]})},ne=function(){var e=Object(a.k)(),t=Object(a.j)().quoteId,n=k(Q,!0),c=n.sendRequest,r=n.status,i=n.data,u=n.error;return Object(o.useEffect)((function(){c(t)}),[c,t]),"pending"===r?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f,{})}):u?Object(d.jsx)("p",{className:"centered",children:u}):i.text?Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)(X,{text:i.text,author:i.author}),Object(d.jsx)(a.c,{path:e.path,exact:!0,children:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(d.jsx)(a.c,{path:"".concat(e.path,"/comments"),children:Object(d.jsx)(te,{})})]}):Object(d.jsx)("p",{children:"No quote found!"})},ce=n(31),re=n.n(ce),se=function(e){return Object(d.jsx)("div",{className:re.a.card,children:e.children})},ae=n(13),oe=n.n(ae),ie=function(e){var t=Object(o.useState)(!1),n=Object(C.a)(t,2),c=n[0],r=n[1],s=Object(o.useRef)(),i=Object(o.useRef)();return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)(a.a,{when:c,message:function(){return"Are you sure you want to leave. All your entered data will be lost!"}}),Object(d.jsx)(se,{children:Object(d.jsxs)("form",{onFocus:function(){r(!0)},className:oe.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(d.jsx)("div",{className:oe.a.loading,children:Object(d.jsx)(f,{})}),Object(d.jsxs)("div",{className:oe.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:s})]}),Object(d.jsxs)("div",{className:oe.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(d.jsx)("div",{className:oe.a.actions,children:Object(d.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},ue=function(){var e=k(A),t=e.sendRequest,n=e.status,c=Object(a.h)();Object(o.useEffect)((function(){"completed"===n&&c.push("/quotes")}),[n,c]);return Object(d.jsx)(ie,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})},je=n(14),de=n.n(je);var le=function(){return Object(d.jsxs)("header",{className:de.a.header,children:[Object(d.jsx)("div",{className:de.a.logo,children:"Great Quotes"}),Object(d.jsx)("nav",{className:de.a.nav,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{activeClassName:de.a.active,to:"/quotes",children:"All Quotes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{activeClassName:de.a.active,to:"/new-quote",children:"New Quote"})})]})})]})},me=n(32),be=n.n(me);var he=function(e){return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(le,{}),Object(d.jsx)("main",{className:be.a.main,children:e.children})]})};var xe=function(){return Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)("h3",{children:"Page Not found!"})})};var Oe=function(){return Object(d.jsx)(he,{children:Object(d.jsxs)(a.e,{children:[Object(d.jsx)(a.c,{path:"/",exact:!0,children:Object(d.jsx)(a.b,{to:"/quotes"})}),Object(d.jsx)(a.c,{path:"/quotes",exact:!0,children:Object(d.jsx)(P,{})}),Object(d.jsx)(a.c,{path:"/quotes/:quoteId",children:Object(d.jsx)(ne,{})}),Object(d.jsx)(a.c,{path:"/new-quote",children:Object(d.jsx)(ue,{})}),Object(d.jsx)(a.c,{path:"*",children:Object(d.jsx)(xe,{})})]})})};r.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(Oe,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.ac982c86.chunk.js.map