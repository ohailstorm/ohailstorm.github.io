(this["webpackJsonpcreate-react-wedding"]=this["webpackJsonpcreate-react-wedding"]||[]).push([[0],{22:function(e,n,t){e.exports=t(33)},27:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(16),c=t.n(i),o=(t(27),t(8)),l=t(20),u=t(3),s=t(4),d=t(6),m=t(5),f=t(7),h=t(1),p=t(2),g=t(10),v=t.n(g);t(29);function b(){var e=Object(h.a)(["\n  width: 90%;\n  height: 40vw;\n  margin: 0 auto;\n"]);return b=function(){return e},e}p.a.div(b());var w=t(21);function E(){var e=Object(h.a)(["\n  padding-bottom: ",";\n"]);return E=function(){return e},e}var k="#3a3f44",x="#c7d2ec",O="#ead895",y=(p.a.div(E(),(function(e){return e.paddingBottom})),"@media only screen and (min-width: 896px)");function j(){var e=Object(h.a)(["\n  // ",": 4vw;\n  height: 120px;\n  background: ",";\n  margin-bottom: 4vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return j=function(){return e},e}function S(){var e=Object(h.a)(["\n  width: 0;\n  height: 0;\n  ","\n"]);return S=function(){return e},e}p.a.div(S(),(function(e){return function(e){var n=e%2===0?"bottom":"top",t=e%4<2?"left":"right";return"\n  border-".concat(e%2===0?"top":"bottom",": 100px solid ").concat(O,";\n  border-").concat(t,": 100vw solid transparent; \n  margin-").concat(n,": 4vw;\n  ")}(e.index)}));var C=p.a.div(j(),(function(e){return e.index%2===0?"margin-top":"margin-bottom"}),O),I=function(e){var n=e.index,t=e.text;return r.a.createElement(C,{index:n},r.a.createElement("h1",null,(t||"").replace(/at/g,"a".concat(String.fromCharCode("127"),"t"))))};function z(){var e=Object(h.a)(["\n  position: relative;\n  width: ",";\n"]);return z=function(){return e},e}function P(){var e=Object(h.a)(["\n  position: relative;\n  ",";\n  ","\n  width: 100%;\n  background-position: ",";\n  background-repeat: no-repeat;\n  background-size: ",";\n  ",";\n  @media only screen and (min-width: 1200px) {\n    ","\n  }\n"]);return P=function(){return e},e}function A(){var e=Object(h.a)(["\n  ","\n  align-items: center;\n  justify-content: space-around;\n  ",";\n  ",";\n  margin: 48px 5vw;\n  max-width: 1200px;\n  "," {\n    margin: 48px 5vw;\n  }\n  @media only screen and (min-width: 1200px) {\n    margin: 48px auto;\n  }\n"]);return A=function(){return e},e}var B=p.a.div(A(),(function(e){return"display: flex;"}),(function(e){return"left"===e.backgroundPosition&&"flex-direction: row-reverse"}),(function(e){return(!e.backgroundPosition||"center"===e.backgroundPosition)&&"flex-direction: column"}),y),M=p.a.div(P(),(function(e){return e.backgroundUrl&&'\n    background-image: url("'.concat(e.backgroundUrl,'");')}),(function(e){return!!e.backgroundUrl&&"min-height: 50vw;"}),(function(e){return e.backgroundPosition||"center"}),(function(e){return e.backgroundSize||"contain"}),(function(e){return e.minHeight?"min-height: ".concat(e.minHeight):""}),(function(e){return!!e.backgroundUrl&&"min-height: 600px;"})),K=p.a.div(z(),(function(e){return e.backgroundPosition&&"center"!==e.backgroundPosition?"50%":"100%"})),N=function(e){var n=e.children,t=Object(w.a)(e,["children"]);return r.a.createElement(r.a.Fragment,null,t.h1&&r.a.createElement(I,{index:t.index,text:t.h1}),r.a.createElement(B,t,n,r.a.createElement(K,t,r.a.createElement(M,t))))},U=function(e){var n=e.data,t=void 0===n?{}:n;return r.a.createElement(r.a.Fragment,null,t.h2&&r.a.createElement("h2",null,t.h2.replace(/at/g,"a".concat(String.fromCharCode("127"),"t"))),t.p&&r.a.createElement("p",null,t.p))};function F(){var e=Object(h.a)([""]);return F=function(){return e},e}function D(){var e=Object(h.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return D=function(){return e},e}function L(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  margin-bottom: 48px;\n\n  "," {\n    flex-direction: row;\n    ",";\n  }\n"]);return L=function(){return e},e}p.a.div(L(),y,(function(e){return"left"===e.backgroundPosition&&"flex-direction: row-reverse"}));var R=p.a.div(D(),y),q=p.a.h2(F()),H=function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.data,n=e&&e.h2?e.h2.replace(/\s/g," | "):null;return r.a.createElement(N,Object.assign({},e,{backgroundUrl:"/images/kyrka.png",backgroundPosition:"center"}),r.a.createElement(R,null,r.a.createElement(q,null,n),r.a.createElement("p",null,"Danmarks Kyrka, Uppsala")))}}]),n}(a.Component);function J(){var e=Object(h.a)(['\n  text-align: center;\n\n  h1 {\n    // font-family: "Satisfy", sans-serif;\n    white-space: pre-line;\n    line-height: 0.7;\n    font-size: 88px;\n    ',' {\n      font-size: 150px;\n    }\n  }\n\n  h2 {\n    font-family: "belista", sans-serif;\n    text-transform: none;\n    font-size: 56px;\n    '," {\n      font-size: 89px;\n    }\n  }\n\n  p {\n    font-size: 24px;\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(h.a)(["\n  // padding-bottom: 40vw;\n  // color: white;\n  position: relative;\n"]);return W=function(){return e},e}var Q=p.a.div(W()),T=p.a.div(J(),y,y),V=function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.data,n=void 0===e?{}:e;return r.a.createElement(N,{backgroundUrl:"/images/blommor.png"},r.a.createElement(Q,null,r.a.createElement(T,null,n.h1&&r.a.createElement("h1",null,n.h1.replace(/at/g,"a".concat(String.fromCharCode("127"),"t")).replace("&","".concat(String.fromCharCode("10"),"&").concat(String.fromCharCode("10")))),n.h2&&r.a.createElement("h2",null,n.h2.replace(/at/g,"a".concat(String.fromCharCode("127"),"t"))))))}}]),n}(a.Component);function Y(){var e=Object(h.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return Y=function(){return e},e}var $=p.a.div(Y(),y),_=function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.data,t=e.children;return r.a.createElement(N,n,r.a.createElement($,null,r.a.createElement(U,{data:n})),t)}}]),n}(a.Component);function G(){var e=Object(h.a)(['\n  text-align: center;\n\n  h1 {\n    font-size: 72px;\n    font-family: "Satisfy", sans-serif;\n  }\n\n  // p {\n  //   font-size: 24px;\n  // }\n']);return G=function(){return e},e}function X(){var e=Object(h.a)(["\n  // padding-bottom: 40vw;\n  // color: white;\n  position: relative;\n"]);return X=function(){return e},e}var Z=p.a.div(X()),ee=p.a.div(G()),ne=function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.data,n=void 0===e?{}:e,t=n&&n.iframeSrc;return r.a.createElement(N,Object.assign({},n,{backgroundPosition:"center"}),r.a.createElement(Z,null,r.a.createElement(ee,null,r.a.createElement(U,{data:n}))),r.a.createElement("iframe",{src:t,width:"100%",height:"1250",frameborder:"0",marginheight:"0",marginwidth:"0",title:"osa"},"L\xe4ser in\xa0\u2026"))}}]),n}(a.Component),te={apiKey:"AIzaSyBhwsa3RtllrM6JtvqHakVKz3OnSQ1959I",authDomain:"create-react-wedding.firebaseapp.com",databaseURL:"https://create-react-wedding.firebaseio.com",projectId:"create-react-wedding",storageBucket:"create-react-wedding.appspot.com",messagingSenderId:"14129889005",appId:"1:14129889005:web:4ebf7de0f115d9b6b2d6e4"};t(32);function ae(){var e=Object(h.a)(["\n  svg {\n    height: 80px;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"]);return ae=function(){return e},e}var re=p.a.div(ae()),ie=function(){return r.a.createElement(re,null,r.a.createElement("svg",{width:"55",height:"80",viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg",fill:"#FFF"},r.a.createElement("g",{transform:"matrix(1 0 0 -1 0 80)"},r.a.createElement("rect",{width:"10",height:"20",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"15",width:"10",height:"80",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"30",width:"10",height:"50",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"45",width:"10",height:"30",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})))))};function ce(){var e=Object(h.a)(["\n  width: 50%;\n"]);return ce=function(){return e},e}function oe(){var e=Object(h.a)(["\n  border-left: 2px solid ",";\n  height: 125px;\n  margin: 32px;\n"]);return oe=function(){return e},e}function le(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    white-space: nowrap;\n    margin-block-start: 0em;\n    margin-block-end: 0em;\n    a {\n      font-size: inherit;\n    }\n  }\n"]);return le=function(){return e},e}function ue(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 50%;\n"]);return ue=function(){return e},e}function se(){var e=Object(h.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return se=function(){return e},e}p.a.div(se(),y);var de=p.a.div(ue()),me=p.a.div(le()),fe=p.a.div(oe(),k),he=p.a.p(ce()),pe=function(e){var n=e.data;return r.a.createElement(N,n,r.a.createElement(he,null,n.p),r.a.createElement(de,null,r.a.createElement(me,null,r.a.createElement("h2",null,"Erika"),r.a.createElement("h2",null,r.a.createElement("a",{href:"tel:".concat(n.erika.tel)},n.erika.tel))),r.a.createElement(fe,null),r.a.createElement(me,null,r.a.createElement("h2",null,"Daniel"),r.a.createElement("h2",null,r.a.createElement("a",{href:"tel:".concat(n.daniel.tel)},n.daniel.tel)))),r.a.createElement(he,null,"Eller via mail till"),r.a.createElement("a",{href:"mailto:".concat(n.daniel.mail)},n.daniel.mail))};function ge(){var e=Object(h.a)(["\n  background: ",";\n  color: ",";\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n"]);return ge=function(){return e},e}function ve(){var e=Object(h.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n  :hover {\n    background: ",";\n    color: ",";\n  }\n\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0.25em;\n  padding: 0.75em 2em;\n  border: 2px solid ",';\n  border-radius: 3px;\n  cursor: pointer;\n  font-family: "Arsenal", sans-serif;\n']);return ve=function(){return e},e}function be(){var e=Object(h.a)(["\n  color: ",";\n  font-size: 1em;\n  border: 2px solid ",';\n  border-radius: 3px;\n\n  /* here we use the dynamically computed prop */\n  margin: 0.25em;\n  padding: 0.75em;\n  font-family: "Arsenal", sans-serif;\n']);return be=function(){return e},e}var we=p.a.input(be(),k,k),Ee=p.a.button(ve(),x,k,k,x,k),ke=p.a.div(ge(),x,k),xe=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={pw:"",everythingOK:!1,sections:[],menuIsExpanded:!1},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){v.a.initializeApp(te),localStorage.getItem("kaffekick")&&this.checkPassword(localStorage.getItem("kaffekick"))}},{key:"checkPassword",value:function(e){var n=this;(this.state.pw||e)&&(this.pollRef=v.a.database().ref("/idrottshall/kaffe"),this.pollRef.on("value",(function(t){var a=e||n.state.pw.toLowerCase();t.val()===a?(n.setState({everythingOK:!0}),localStorage.setItem("kaffekick",a),n.getSections()):localStorage.removeItem("kaffekick")})))}},{key:"getSections",value:function(){var e=this;this.state.everythingOK&&v.a.database().ref("/sections").orderByChild("index").on("child_added",(function(n){e.setState({sections:[].concat(Object(l.a)(e.state.sections),[Object(o.a)({},n.val(),{backgroundPosition:"center",sectionId:Math.random().toString(36).slice(2)})])})}))}},{key:"renderSections",value:function(){var e=this.state.sections;return e&&e.length?e.map((function(e,n){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:"anchor-".concat(e.sectionId),style:{position:"absolute",top:"-40%"}}),function(){switch(e.type){case"start":return r.a.createElement(V,{key:n,data:Object(o.a)({},e,{index:n})});case"venue":return r.a.createElement(H,{key:n,data:Object(o.a)({},e,{index:n})});case"osa":return r.a.createElement(ne,{key:n,data:Object(o.a)({},e,{index:n})});case"contactInfo":return r.a.createElement(pe,{key:n,data:Object(o.a)({},e,{index:n})});default:return r.a.createElement(_,{key:n,data:Object(o.a)({},e,{index:n})})}}())})):null}},{key:"renderMenu",value:function(){var e=this,n=this.state.sections;return n&&n.length?n.map((function(n){return n?r.a.createElement("div",{onClick:function(){e.setState({menuIsExpanded:!1}),document.querySelector(".anchor-".concat(n.sectionId)),window.scroll({top:document.querySelector(".anchor-".concat(n.sectionId)).getBoundingClientRect().top,left:0,behavior:"smooth"})}},n.h1):null})):null}},{key:"render",value:function(){var e=this,n=this.state,t=n.everythingOK,a=n.menuIsExpanded,i=n.sections,c=!!localStorage.getItem("kaffekick");return t||c?r.a.createElement(ke,null,r.a.createElement("div",{className:"App"},i&&i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-header"},r.a.createElement("h3",{onClick:function(){return e.setState({menuIsExpanded:!a})}},"Br\xf6llopsmeny"),a&&this.renderMenu()),this.renderSections()):r.a.createElement(ie,null))):r.a.createElement(ke,null,r.a.createElement("div",{className:"App"},r.a.createElement("form",{type:"POST",onSubmit:function(n){n.preventDefault(),e.checkPassword()},style:{position:"absolute",top:"40%",transform:"translateY(-40%)",left:0,right:0}},r.a.createElement("h1",null,"L\xf6senord"),r.a.createElement(we,{onChange:function(n){return e.setState({pw:n.target.value})},type:"password",placeholder:"L\xf6senord"}),r.a.createElement(Ee,{type:"submit"},"OK"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=t(19);t.n(Oe).a.polyfill(),c.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);