(this["webpackJsonpfin-project-front"]=this["webpackJsonpfin-project-front"]||[]).push([[10],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){e.exports={navigation_link:"Navigation_navigation_link__2AaYf",navigation_container:"Navigation_navigation_container__2l-nP",navigation_nav_link:"Navigation_navigation_nav_link__1WBZo",navigation_home_icon:"Navigation_navigation_home_icon__1AE_A",navigation_stat_icon:"Navigation_navigation_stat_icon__1dqXB",navigation_dollar_icon:"Navigation_navigation_dollar_icon__2Zse7",navigation_page_home:"Navigation_navigation_page_home__2rySn",navigation_page_stat:"Navigation_navigation_page_stat__2iwgI",active_link:"Navigation_active_link__nCjyh"}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(24),i=n.p+"static/media/icons.31f6f444.svg",c=n(4),o=function(e){var t=e.name,n=e.size,a=e.className,o=e.color;return Object(c.jsx)("svg",{className:"icon icon-".concat(t," ").concat(a),fill:o,stroke:o,width:n,height:n,children:Object(c.jsx)("use",{xlinkHref:"".concat(i,"#icon-").concat(t)})})},r=n(135),s=n.n(r),l=function(){return Object(c.jsx)("div",{className:s.a.navigation_container,children:Object(c.jsxs)("nav",{className:s.a.navigation_nav_link,children:[Object(c.jsxs)(a.c,{to:"/fin-project-front/home",className:s.a.navigation_link,activeClassName:s.a.active_link,children:[Object(c.jsx)(o,{name:"home",className:s.a.navigation_home_icon}),Object(c.jsx)("p",{className:s.a.navigation_page_home,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})]}),Object(c.jsxs)(a.c,{to:"/fin-project-front/statistics",className:s.a.navigation_link,activeClassName:s.a.active_link,children:[Object(c.jsx)(o,{name:"statistic",className:s.a.navigation_stat_icon}),Object(c.jsx)("p",{className:s.a.navigation_page_stat,children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})]}),Object(c.jsx)(a.c,{to:"/fin-project-front/currency",className:s.a.navigation_link,activeClassName:s.a.active_link,children:Object(c.jsx)(o,{name:"dollar",className:s.a.navigation_dollar_icon})})]})})}},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),i=n(24),c=(n(131),n(118)),o=(n(132),n(18)),r=n(19),s=n(22),l=n(38),d=(n(133),n(4)),j=document.querySelector("#modal-root");function h(e){var t=e.onClose,n=Object(o.c)(),i=Object(a.useCallback)((function(){n(l.a.logout())}),[n]);Object(a.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var c=Object(a.useCallback)((function(e){e.currentTarget===e.target&&t()}),[t]);return Object(s.createPortal)(Object(d.jsx)("div",{className:"modal-backdrop",onClick:c,children:Object(d.jsxs)("div",{className:"modal-content",onClose:t,children:[Object(d.jsx)("span",{className:"logout-modal-text",children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?"}),Object(d.jsxs)("div",{className:"modal-buttons",children:[Object(d.jsx)("button",{className:"logout-modalBtn",onClick:i,children:"\u0412\u044b\u0439\u0442\u0438"}),Object(d.jsx)("button",{className:"close-modalBtn",onClick:c,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})}),j)}function b(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(o.d)(r.c.getUserName),l=Object(a.useCallback)((function(){i(!0)})),j=Object(a.useCallback)((function(){i(!1)}));return Object(d.jsxs)("div",{className:"user-menu",children:[Object(d.jsx)("span",{className:"user-name",children:s}),Object(d.jsxs)("button",{className:"logout-button",type:"button",onClick:l,children:[Object(d.jsx)("svg",{className:"logout-icon",children:Object(d.jsx)("use",{href:"../../../../images/icons/logout-icon.svg"})}),Object(d.jsx)("span",{className:"exit-button-text",children:"\u0412\u044b\u0439\u0442\u0438"})]}),n?Object(d.jsx)(h,{onClose:j}):null]})}function u(){return Object(d.jsxs)("div",{className:"auth-bar",children:[Object(d.jsx)(i.b,{to:"/fin-project-front/home",className:"logo bar-logo"}),Object(d.jsx)(b,{})]})}},144:function(e,t,n){"use strict";var a=n(32),i=n.n(a),c=n(25),o=n(37),r=n(118),s=n(0),l=n(369),d=n(373),j=n(376),h=n(382),b=n(374),u=n(375),m=n(40),f=n.n(m),g=n(372),x=n.p+"static/media/vector.2c3a3c54.svg",v=n.p+"static/media/vector1.94d94956.svg",p=(n(134),n(4)),O=function(e){return Number.parseFloat(e).toFixed(2)};t.a=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],m=Object(s.useState)(!1),_=Object(r.a)(m,2),N=_[0],w=_[1],k=Object(s.useState)(!1),y=Object(r.a)(k,2),C=y[0],F=y[1];Object(s.useEffect)((function(){B(),F(window.innerWidth>1279),S()}),[]);var B=function(){window.addEventListener("resize",(function(){F(window.innerWidth>1279)}))},S=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((function(e){return e.json()})).then((function(e){return e}));case 4:t=e.sent,n=t.filter((function(e){return"BTC"!==e.ccy})),a((function(e){return[].concat(Object(c.a)(e),Object(c.a)(n))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Smth wrong with search fetch",e.t0);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),E=Object(l.a)((function(e){return{root:{fontFamily:"Circe","border-top-left-radius":20,"border-top-right-radius":20,padding:0,"border-bottom-left-radius":20,"border-bottom-right-radius":20},table:{"@media (min-width: 320px) and (max-width:767px )":{width:280},"@media (min-width: 768px) and (max-width:1279px )":{width:334},"@media (min-width: 1280)":{width:348},"@media (min-width: 320px) and (max-width:1279px )":{backgroundImage:"url(".concat(v,")"),backgroundPosition:"bottom",backgroundRepeat:"no-repeat","border-bottom-left-radius":20,"border-bottom-right-radius":20},"text-align":"center",border:"none",background:"#4a56e2","border-top-left-radius":20,"border-top-right-radius":20,fontFamily:"Circe"},tableBody:{"@media (min-width: 320px) and (max-width:1279px )":{}},head:{"@media (min-width: 320px) and (max-width:1279px )":{height:50},"@media (min-width: 1280)":{height:60},"text-align":"center","border-bottom":"none",color:"#ffffff","font-size":"18px",fontFamily:"Circe","line-height":"27px"},headCell:{"font-weight":"bold","@media (min-width: 1280)":{padding:0},"@media (min-width: 320px) and (max-width:1279px )":{padding:0},"text-align":"center",color:"#ffffff","font-size":"18px",fontFamily:"Circe","border-bottom":"none","line-height":"27px",background:"#6e78e8"},row:{"@media (min-width: 1280)":{height:51}},cell:{padding:13,"text-align":"center",border:"none","@media (min-width: 320px) and (max-width:1279px )":{height:41,padding:0},"@media (min-width: 1280)":{height:51},fontFamily:"Circe",color:"#ffffff","font-weight":400,"font-size":"16px","line-height":"24px"},cellRadiusLeft:{"border-top-left-radius":20},cellRadiusRight:{"border-top-right-radius":20},vector:{background:"#4a56e2","border-bottom-left-radius":20,"border-bottom-right-radius":20}}}))();return Object(p.jsxs)("div",{children:[Object(p.jsx)(g.a,{className:E.root,children:Object(p.jsxs)(d.a,{className:E.table,children:[Object(p.jsx)(b.a,{className:E.head,children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(h.a,{className:E.headCell+" "+E.cellRadiusLeft,children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(p.jsx)(h.a,{className:E.headCell,children:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"}),Object(p.jsx)(h.a,{className:E.headCell+" "+E.cellRadiusRight,children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"})]})}),Object(p.jsx)(j.a,{className:E.tableBody,children:n.map((function(e){return Object(p.jsxs)(u.a,{className:E.row,children:[Object(p.jsx)(h.a,{className:E.cell,children:e.ccy}),Object(p.jsx)(h.a,{className:E.cell,children:O(e.buy)}),Object(p.jsx)(h.a,{className:E.cell,children:O(e.sale)})]},e.ccy)}))})]})}),N&&Object(p.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),C&&Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("img",{src:x,className:E.vector,alt:"vector"})]})]})}},250:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(129),i=n(0),c=n(7),o=n(143),r=n(144),s=n(142),l=(n(250),n(40)),d=n.n(l),j=n(30),h=(n(251),n(4));function b(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(a.a,{query:"(max-width: 767px)",render:function(){return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)(o.a,{}),Object(h.jsxs)("div",{style:{overflow:"scroll",height:"90vh"},children:[Object(h.jsx)("div",{className:"left-side-block",children:Object(h.jsx)(s.a,{})}),Object(h.jsx)("div",{className:"right-side-block",children:Object(h.jsx)("div",{className:"currency-block",style:{width:"334px",display:"inline-flex","align-items":"center","justify-content":"center","margin-top":"30px"},children:Object(h.jsx)(r.a,{})})})]})]})}}),Object(h.jsx)(a.a,{query:"(min-width: 768px)",render:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)(d.a,{type:"ThreeDots",color:"brown",height:80,width:80}),children:Object(h.jsx)(j.a,{path:"/fin-project-front/currency",redirectTo:"/fin-project-front/home",children:Object(h.jsx)(c.a,{to:"/fin-project-front/home"})})})})}})]})}},251:function(e,t,n){}}]);
//# sourceMappingURL=10.70ead767.chunk.js.map