(this["webpackJsonpcreate-react-wedding"]=this["webpackJsonpcreate-react-wedding"]||[]).push([[0],{26:function(n,e,t){n.exports=t(37)},31:function(n,e,t){},36:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(20),c=t.n(i),o=(t(31),t(10)),l=t(24),u=t(3),d=t(4),s=t(6),m=t(5),f=t(7),p=t(1),g=t(2),h=t(14),v=t.n(h);t(33);function b(){var n=Object(p.a)(["\n  width: 90%;\n  height: 40vw;\n  margin: 0 auto;\n"]);return b=function(){return n},n}g.a.div(b());var w=t(25);function E(){var n=Object(p.a)(["\n  width: ","%;\n  margin: 48px;\n  ","\n"]);return E=function(){return n},n}function k(){var n=Object(p.a)(["\n  padding-bottom: ",";\n"]);return k=function(){return n},n}var O="#3a3f44",j="#c7d2ec",x="#ead895",y=(g.a.div(k(),(function(n){return n.paddingBottom})),"@media only screen and (min-width: 896px)"),S=g.a.img(E(),(function(n){return n.width||75}),(function(n){return n.marginTop?"margin-top: ".concat(n.marginTop):null}));function C(){var n=Object(p.a)(["\n  // ",": 4vw;\n  height: 120px;\n  background: ",";\n  margin-bottom: 4vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return C=function(){return n},n}function I(){var n=Object(p.a)(["\n  width: 0;\n  height: 0;\n  ","\n"]);return I=function(){return n},n}g.a.div(I(),(function(n){return function(n){var e=n%2===0?"bottom":"top",t=n%4<2?"left":"right";return"\n  border-".concat(n%2===0?"top":"bottom",": 100px solid ").concat(x,";\n  border-").concat(t,": 100vw solid transparent; \n  margin-").concat(e,": 4vw;\n  ")}(n.index)}));var z=g.a.div(C(),(function(n){return n.index%2===0?"margin-top":"margin-bottom"}),x),P=function(n){var e=n.index,t=n.text;return r.a.createElement(z,{index:e},r.a.createElement("h1",null,(t||"").replace(/at/g,"a".concat(String.fromCharCode("127"),"t"))))};function M(){var n=Object(p.a)(["\n  position: relative;\n  width: ",";\n"]);return M=function(){return n},n}function A(){var n=Object(p.a)(["\n  position: relative;\n  ",";\n  ","\n  width: 100%;\n  background-position: ",";\n  background-repeat: no-repeat;\n  background-size: ",";\n  ",";\n  @media only screen and (min-width: 1200px) {\n    ","\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(p.a)(["\n  ","\n  align-items: center;\n  justify-content: space-around;\n  ",";\n  ",";\n  margin: 48px 5vw;\n  max-width: 1200px;\n  "," {\n    margin: 48px 5vw;\n  }\n  @media only screen and (min-width: 1200px) {\n    margin: 48px auto;\n  }\n"]);return B=function(){return n},n}var L=g.a.div(B(),(function(n){return"display: flex;"}),(function(n){return"left"===n.backgroundPosition&&"flex-direction: row-reverse"}),(function(n){return(!n.backgroundPosition||"center"===n.backgroundPosition)&&"flex-direction: column"}),y),U=g.a.div(A(),(function(n){return n.backgroundUrl&&'\n    background-image: url("'.concat(n.backgroundUrl,'");')}),(function(n){return!!n.backgroundUrl&&"min-height: 50vw;"}),(function(n){return n.backgroundPosition||"center"}),(function(n){return n.backgroundSize||"contain"}),(function(n){return n.minHeight?"min-height: ".concat(n.minHeight):""}),(function(n){return!!n.backgroundUrl&&"min-height: 600px;"})),K=g.a.div(M(),(function(n){return n.backgroundPosition&&"center"!==n.backgroundPosition?"50%":"100%"})),N=function(n){var e=n.children,t=Object(w.a)(n,["children"]);return r.a.createElement(r.a.Fragment,null,t.h1&&r.a.createElement(P,{index:t.index,text:t.h1}),r.a.createElement(L,t,e,r.a.createElement(K,t,r.a.createElement(U,t))))},D=function(n){var e=n.data,t=void 0===e?{}:e;return r.a.createElement(r.a.Fragment,null,t.h2&&r.a.createElement("h2",null,t.h2.replace(/at/g,"a".concat(String.fromCharCode("127"),"t"))),t.p&&r.a.createElement("p",null,t.p))};function R(){var n=Object(p.a)([""]);return R=function(){return n},n}function T(){var n=Object(p.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return T=function(){return n},n}function q(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  margin-bottom: 48px;\n\n  "," {\n    flex-direction: row;\n    ",";\n  }\n"]);return q=function(){return n},n}g.a.div(q(),y,(function(n){return"left"===n.backgroundPosition&&"flex-direction: row-reverse"}));var F=g.a.div(T(),y),H=g.a.h2(R()),J=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){var n=this.props.data,e=n&&n.h2?n.h2.replace(/\s/g," | "):null;return r.a.createElement(N,Object.assign({},n,{backgroundUrl:"/images/kyrka.png",backgroundPosition:"center"}),r.a.createElement(F,null,r.a.createElement(H,null,e),r.a.createElement("p",null,"Danmarks Kyrka, Uppsala")))}}]),e}(a.Component);function W(){var n=Object(p.a)(['\n  text-align: center;\n\n  h1 {\n    // font-family: "Satisfy", sans-serif;\n    white-space: pre-line;\n    line-height: 0.7;\n    font-size: 88px;\n    ',' {\n      font-size: 150px;\n    }\n  }\n\n  h2 {\n    font-family: "belista", sans-serif;\n    text-transform: none;\n    font-size: 56px;\n    '," {\n      font-size: 89px;\n    }\n  }\n\n  p {\n    font-size: 24px;\n  }\n"]);return W=function(){return n},n}function Q(){var n=Object(p.a)(["\n  // padding-bottom: 40vw;\n  // color: white;\n  position: relative;\n"]);return Q=function(){return n},n}var V=g.a.div(Q()),Y=g.a.div(W(),y,y),$=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){var n=this.props.data,e=void 0===n?{}:n;return r.a.createElement(N,{backgroundUrl:"/images/blommor.png"},r.a.createElement(V,null,r.a.createElement(Y,null,e.h1&&r.a.createElement("h1",null,e.h1.replace(/at/g,"a".concat(String.fromCharCode("127"),"t")).replace("&","".concat(String.fromCharCode("10"),"&").concat(String.fromCharCode("10")))),e.h2&&r.a.createElement("h2",null,e.h2.replace(/at/g,"a".concat(String.fromCharCode("127"),"t"))))))}}]),e}(a.Component);function _(){var n=Object(p.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return _=function(){return n},n}var G=g.a.div(_(),y),X=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){var n=this.props,e=n.data,t=n.children;return r.a.createElement(N,e,r.a.createElement(G,null,r.a.createElement(D,{data:e})),t)}}]),e}(a.Component);function Z(){var n=Object(p.a)(['\n  text-align: center;\n\n  h1 {\n    font-size: 72px;\n    font-family: "Satisfy", sans-serif;\n  }\n\n  // p {\n  //   font-size: 24px;\n  // }\n']);return Z=function(){return n},n}function nn(){var n=Object(p.a)(["\n  // padding-bottom: 40vw;\n  // color: white;\n  position: relative;\n"]);return nn=function(){return n},n}var en=g.a.div(nn()),tn=g.a.div(Z()),an=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){var n=this.props.data,e=void 0===n?{}:n,t=e&&e.iframeSrc;return r.a.createElement(N,Object.assign({},e,{backgroundPosition:"center"}),r.a.createElement(en,null,r.a.createElement(tn,null,r.a.createElement(D,{data:e}))),r.a.createElement("iframe",{src:t,width:"100%",height:"1400",frameborder:"0",marginheight:"0",marginwidth:"0",title:"osa"},"L\xe4ser in\xa0\u2026"))}}]),e}(a.Component),rn={apiKey:"AIzaSyBhwsa3RtllrM6JtvqHakVKz3OnSQ1959I",authDomain:"create-react-wedding.firebaseapp.com",databaseURL:"https://create-react-wedding.firebaseio.com",projectId:"create-react-wedding",storageBucket:"create-react-wedding.appspot.com",messagingSenderId:"14129889005",appId:"1:14129889005:web:4ebf7de0f115d9b6b2d6e4"};t(36);function cn(){var n=Object(p.a)(["\n  svg {\n    height: 80px;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    filter: brightness(85%);\n  }\n"]);return cn=function(){return n},n}var on=g.a.div(cn()),ln=function(){return r.a.createElement(on,null,r.a.createElement("svg",{width:"140",height:"64",viewBox:"0 0 140 64",xmlns:"http://www.w3.org/2000/svg",fill:"".concat(j)},r.a.createElement("path",{d:"M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z","fill-opacity":".5"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("path",{d:"M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z","fill-opacity":".5"},r.a.createElement("animate",{attributeName:"fill-opacity",begin:"0.7s",dur:"1.4s",values:"0.5;1;0.5",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("path",{d:"M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"})))};function un(){var n=Object(p.a)(["\n  width: 75%;\n  "," {\n    width: 50%;\n  }\n"]);return un=function(){return n},n}function dn(){var n=Object(p.a)(["\n  border-left: 2px solid ",";\n  height: 125px;\n  margin: 8px;\n"]);return dn=function(){return n},n}function sn(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    white-space: nowrap;\n    margin-block-start: 0em;\n    margin-block-end: 0em;\n    font-size: 24px;\n    "," {\n      font-size: 32px;\n    }\n    a {\n      font-size: inherit;\n    }\n  }\n"]);return sn=function(){return n},n}function mn(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 50%;\n"]);return mn=function(){return n},n}function fn(){var n=Object(p.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return fn=function(){return n},n}g.a.div(fn(),y);var pn=g.a.div(mn()),gn=g.a.div(sn(),y),hn=g.a.div(dn(),O),vn=g.a.p(un(),y),bn=function(n){var e=n.data;return r.a.createElement(N,e,r.a.createElement(vn,null,e.p),r.a.createElement(pn,null,r.a.createElement(gn,null,r.a.createElement("h2",null,"Erika"),r.a.createElement("h2",null,r.a.createElement("a",{href:"tel:".concat(e.erika.tel)},e.erika.tel))),r.a.createElement(hn,null),r.a.createElement(gn,null,r.a.createElement("h2",null,"Daniel"),r.a.createElement("h2",null,r.a.createElement("a",{href:"tel:".concat(e.daniel.tel)},e.daniel.tel)))),r.a.createElement(vn,null,"Eller via mail till"),r.a.createElement("a",{href:"mailto:".concat(e.daniel.mail)},e.daniel.mail))};function wn(){var n=Object(p.a)(["\n  width: 75%;\n  "," {\n    width: 50%;\n  }\n"]);return wn=function(){return n},n}function En(){var n=Object(p.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return En=function(){return n},n}g.a.div(En(),y);var kn=g.a.p(wn(),y),On=function(n){var e=n.data;return r.a.createElement(N,e,r.a.createElement(kn,null,e.h2),r.a.createElement(S,{src:"/images/bygdegard.png",width:"50%"}),r.a.createElement(kn,null,e.p),r.a.createElement(S,{src:"/images/blaklint.png",width:"80%",marginTop:"-24px"}))};t(13);function jn(){var n=Object(p.a)(["\n  grid-column-start: 2;\n  grid-column-end: end;\n  grid-row-start: 4;\n  grid-row-end: end;\n"]);return jn=function(){return n},n}function xn(){var n=Object(p.a)(["\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 3;\n  grid-row-end: end;\n"]);return xn=function(){return n},n}function yn(){var n=Object(p.a)(["\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 3;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n  grid-column-start: 3;\n  grid-column-end: end;\n  grid-row-start: 2;\n  grid-row-end: 4;\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(p.a)(["\n  margin: 0;\n  width: 100%;\n"]);return Cn=function(){return n},n}function In(){var n=Object(p.a)(["\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 2;\n  grid-row-end: 3;\n"]);return In=function(){return n},n}function zn(){var n=Object(p.a)(["\n  grid-column-start: 1;\n  grid-column-end: end;\n  grid-row-start: 1;\n  grid-row-end: 2;\n"]);return zn=function(){return n},n}function Pn(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 4fr 3fr 3fr;\n  grid-template-rows: auto auto auto auto auto;\n  grid-gap: 16px;\xa8\n"]);return Pn=function(){return n},n}var Mn=g.a.div(Pn()),An=g.a.p(zn()),Bn=g.a.p(In()),Ln=Object(g.a)(S)(Cn()),Un=Object(g.a)(Ln)(Sn()),Kn=Object(g.a)(Ln)(yn()),Nn=Object(g.a)(Ln)(xn()),Dn=g.a.p(jn()),Rn=function(n){var e=n.data;return r.a.createElement(N,Object.assign({},e,{backgroundUrl:""}),r.a.createElement(Mn,null,r.a.createElement(An,null,e.p),r.a.createElement(Bn,null,e.p2),r.a.createElement(Un,{src:"/images/kostym.png"}),r.a.createElement(Kn,{src:"/images/vallmo.png"}),r.a.createElement(Nn,{src:"/images/klanning.png"}),r.a.createElement(Dn,null,e.p3)))};function Tn(){var n=Object(p.a)(["\n  background: ",";\n  color: ",";\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n"]);return Tn=function(){return n},n}function qn(){var n=Object(p.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n  :hover {\n    background: ",";\n    color: ",";\n  }\n\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0.25em;\n  padding: 0.75em 2em;\n  border: 2px solid ",';\n  border-radius: 3px;\n  cursor: pointer;\n  font-family: "Arsenal", sans-serif;\n']);return qn=function(){return n},n}function Fn(){var n=Object(p.a)(["\n  color: ",";\n  font-size: 1em;\n  border: 2px solid ",';\n  border-radius: 3px;\n\n  /* here we use the dynamically computed prop */\n  margin: 0.25em;\n  padding: 0.75em;\n  font-family: "Arsenal", sans-serif;\n']);return Fn=function(){return n},n}var Hn=g.a.input(Fn(),O,O),Jn=g.a.button(qn(),j,O,O,j,O),Wn=g.a.div(Tn(),j,O),Qn=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(r)))).state={pw:"",everythingOK:!1,sections:[],menuIsExpanded:!1},t}return Object(f.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){v.a.initializeApp(rn),localStorage.getItem("kaffekick")&&this.checkPassword(localStorage.getItem("kaffekick"))}},{key:"checkPassword",value:function(n){var e=this;(this.state.pw||n)&&(this.pollRef=v.a.database().ref("/idrottshall/kaffe"),this.pollRef.on("value",(function(t){var a=n||e.state.pw.toLowerCase();t.val()===a?(e.setState({everythingOK:!0}),localStorage.setItem("kaffekick",a),e.getSections()):localStorage.removeItem("kaffekick")})))}},{key:"getSections",value:function(){var n=this;this.state.everythingOK&&v.a.database().ref("/sections").orderByChild("index").on("child_added",(function(e){n.setState({sections:[].concat(Object(l.a)(n.state.sections),[Object(o.a)({},e.val(),{backgroundPosition:"center",sectionId:Math.random().toString(36).slice(2)})])})}))}},{key:"renderSections",value:function(){var n=this.state.sections;return n&&n.length?n.map((function(n,e){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:"anchor-".concat(n.sectionId),style:{position:"absolute",top:"-40%"}}),function(){switch(n.type){case"start":return r.a.createElement($,{key:e,data:Object(o.a)({},n,{index:e})});case"venue":return r.a.createElement(J,{key:e,data:Object(o.a)({},n,{index:e})});case"osa":return r.a.createElement(an,{key:e,data:Object(o.a)({},n,{index:e})});case"contactInfo":return r.a.createElement(bn,{key:e,data:Object(o.a)({},n,{index:e})});case"festInfo":return r.a.createElement(On,{key:e,data:Object(o.a)({},n,{index:e})});case"dressCode":return r.a.createElement(Rn,{key:e,data:Object(o.a)({},n,{index:e})});default:return r.a.createElement(X,{key:e,data:Object(o.a)({},n,{index:e})})}}())})):null}},{key:"renderMenu",value:function(){var n=this,e=this.state.sections;return e&&e.length?e.map((function(e){return e?r.a.createElement("div",{onClick:function(){n.setState({menuIsExpanded:!1}),document.querySelector(".anchor-".concat(e.sectionId)),window.scroll({top:document.querySelector(".anchor-".concat(e.sectionId)).getBoundingClientRect().top,left:0,behavior:"smooth"})}},e.h1):null})):null}},{key:"render",value:function(){var n=this,e=this.state,t=e.everythingOK,a=e.menuIsExpanded,i=e.sections,c=!!localStorage.getItem("kaffekick");return t||c?r.a.createElement(Wn,null,r.a.createElement("div",{className:"App"},i&&i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-header"},r.a.createElement("h3",{onClick:function(){return n.setState({menuIsExpanded:!a})}},"Br\xf6llopsmeny"),a&&this.renderMenu()),this.renderSections()):r.a.createElement(ln,null))):r.a.createElement(Wn,null,r.a.createElement("div",{className:"App"},r.a.createElement("form",{type:"POST",onSubmit:function(e){e.preventDefault(),n.checkPassword()},style:{position:"absolute",top:"40%",transform:"translateY(-40%)",left:0,right:0}},r.a.createElement("h1",null,"L\xf6senord"),r.a.createElement(Hn,{onChange:function(e){return n.setState({pw:e.target.value})},type:"password",placeholder:"L\xf6senord"}),r.a.createElement(Jn,{type:"submit"},"OK"))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Vn=t(23);t.n(Vn).a.polyfill(),c.a.render(r.a.createElement(Qn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[26,1,2]]]);