(this["webpackJsonpcreate-react-wedding"]=this["webpackJsonpcreate-react-wedding"]||[]).push([[0],{22:function(e,n,t){e.exports=t(33)},27:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(16),o=t.n(i),c=(t(27),t(8)),u=t(20),l=t(3),s=t(4),d=t(6),m=t(5),f=t(7),h=t(1),p=t(2),g=t(10),v=t.n(g);t(29);function b(){var e=Object(h.a)(["\n  width: 90%;\n  height: 40vw;\n  margin: 0 auto;\n"]);return b=function(){return e},e}var w=p.a.div(b()),E=function(){return r.a.createElement(w,null,r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.9742934839057!2d17.74245321636064!3d59.83295838183788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fc8db47fb087f%3A0xd37895e96ddf6fba!2sDanmarks%20kyrka!5e0!3m2!1ssv!2sse!4v1569006706360!5m2!1ssv!2sse",width:"100%",height:"100%",style:{border:0},title:"dk-map"}))},k=t(21);function O(){var e=Object(h.a)(["\n  padding-bottom: ",";\n"]);return O=function(){return e},e}var x="#2D372C",j="#E0E3E9",y="#B8C6D0",S=(p.a.div(O(),(function(e){return e.paddingBottom})),"@media only screen and (min-width: 896px)");function I(){var e=Object(h.a)(["\n  ",": 4vw;\n  height: 8vw;\n  background: ",";\n"]);return I=function(){return e},e}function C(){var e=Object(h.a)(["\n  width: 0;\n  height: 0;\n  ","\n"]);return C=function(){return e},e}var P=p.a.div(C(),(function(e){return function(e){var n=e%2===0?"bottom":"top",t=e%4<2?"left":"right";return"\n  border-".concat(e%2===0?"top":"bottom",": 100px solid ").concat(y,";\n  border-").concat(t,": 100vw solid transparent; \n  margin-").concat(n,": 4vw;\n  ")}(e.index)})),z=p.a.div(I(),(function(e){return e.index%2===0?"margin-top":"margin-bottom"}),y),B=function(e){var n=e.index;return n%2===0?r.a.createElement("div",null,r.a.createElement(z,{index:n}),r.a.createElement(P,{index:n})):r.a.createElement("div",null,r.a.createElement(P,{index:n}),r.a.createElement(z,{index:n}))};function M(){var e=Object(h.a)(["\n  position: relative;\n  width: ",";\n"]);return M=function(){return e},e}function A(){var e=Object(h.a)(["\n  position: relative;\n  ",";\n  ","\n  width: 100%;\n  background-position: ",";\n  background-repeat: no-repeat;\n  background-size: ",";\n  // margin-top: 100px;\n  ",";\n"]);return A=function(){return e},e}function N(){var e=Object(h.a)(["\n  ","\n  align-items: center;\n  justify-content: space-around;\n  ",";\n  ",";\n  @media only screen and (min-width: 800px) {\n    margin: 0 5vw;\n  }\n"]);return N=function(){return e},e}var K=p.a.div(N(),(function(e){return"display: flex;"}),(function(e){return"left"===e.backgroundPosition&&"flex-direction: row-reverse"}),(function(e){return(!e.backgroundPosition||"center"===e.backgroundPosition)&&"flex-direction: column"})),D=p.a.div(A(),(function(e){return e.backgroundUrl&&'\n    background-image: url("'.concat(e.backgroundUrl,'");')}),(function(e){return!!e.backgroundUrl&&"min-height: 50vw;"}),(function(e){return e.backgroundPosition||"center"}),(function(e){return e.backgroundSize||"contain"}),(function(e){return e.minHeight?"min-height: ".concat(e.minHeight):""})),F=p.a.div(M(),(function(e){return e.backgroundPosition&&"center"!==e.backgroundPosition?"50%":"100%"})),L=function(e){var n=e.children,t=Object(k.a)(e,["children"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,t,n,r.a.createElement(F,t,r.a.createElement(D,t))),r.a.createElement(B,{index:t.index}))},R=function(e){var n=e.data,t=void 0===n?{}:n;return r.a.createElement(r.a.Fragment,null,t.h1&&r.a.createElement("h1",null,t.h1),t.h2&&r.a.createElement("h2",null,t.h2),t.p&&r.a.createElement("p",null,t.p))};function U(){var e=Object(h.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return U=function(){return e},e}function q(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  margin-bottom: 48px;\n\n  "," {\n    flex-direction: row;\n    ",";\n  }\n"]);return q=function(){return e},e}var H=p.a.div(q(),S,(function(e){return"left"===e.backgroundPosition&&"flex-direction: row-reverse"})),J=p.a.div(U(),S),W=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(L,Object.assign({},e,{backgroundPosition:"center"}),r.a.createElement(H,e,r.a.createElement(J,null,r.a.createElement(R,{data:e})),r.a.createElement(E,null)))}}]),n}(a.Component);function Q(){var e=Object(h.a)(['\n  text-align: center;\n\n  h1 {\n    font-size: 72px;\n    font-family: "Satisfy", sans-serif;\n  }\n\n  p {\n    font-size: 24px;\n  }\n']);return Q=function(){return e},e}function T(){var e=Object(h.a)(["\n  // padding-bottom: 40vw;\n  // color: white;\n  position: relative;\n"]);return T=function(){return e},e}var V=p.a.div(T()),Y=p.a.div(Q()),$=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.data,n=void 0===e?{}:e;return r.a.createElement(L,Object.assign({},n,{backgroundPosition:"center"}),r.a.createElement(V,null,r.a.createElement(Y,null,r.a.createElement(R,{data:n}))))}}]),n}(a.Component);function _(){var e=Object(h.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  margin: 48px;\n  "," {\n    width: 50%;\n  }\n"]);return _=function(){return e},e}var G=p.a.div(_(),S),X=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=e.data,t=e.children;return r.a.createElement(L,n,r.a.createElement(G,null,r.a.createElement(R,{data:n})),t)}}]),n}(a.Component);function Z(){var e=Object(h.a)(['\n  text-align: center;\n\n  h1 {\n    font-size: 72px;\n    font-family: "Satisfy", sans-serif;\n  }\n\n  // p {\n  //   font-size: 24px;\n  // }\n']);return Z=function(){return e},e}function ee(){var e=Object(h.a)(["\n  // padding-bottom: 40vw;\n  // color: white;\n  position: relative;\n"]);return ee=function(){return e},e}var ne=p.a.div(ee()),te=p.a.div(Z()),ae=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.data,n=void 0===e?{}:e,t=n&&n.iframeSrc;return r.a.createElement(L,Object.assign({},n,{backgroundPosition:"center"}),r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(R,{data:n}))),r.a.createElement("iframe",{src:t,width:"100%",height:"1250",frameborder:"0",marginheight:"0",marginwidth:"0",title:"osa"},"L\xe4ser in\xa0\u2026"))}}]),n}(a.Component),re={apiKey:"AIzaSyBhwsa3RtllrM6JtvqHakVKz3OnSQ1959I",authDomain:"create-react-wedding.firebaseapp.com",databaseURL:"https://create-react-wedding.firebaseio.com",projectId:"create-react-wedding",storageBucket:"create-react-wedding.appspot.com",messagingSenderId:"14129889005",appId:"1:14129889005:web:4ebf7de0f115d9b6b2d6e4"};t(32);function ie(){var e=Object(h.a)(["\n  svg {\n    height: 80px;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"]);return ie=function(){return e},e}var oe=p.a.div(ie()),ce=function(){return r.a.createElement(oe,null,r.a.createElement("svg",{width:"55",height:"80",viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg",fill:"#FFF"},r.a.createElement("g",{transform:"matrix(1 0 0 -1 0 80)"},r.a.createElement("rect",{width:"10",height:"20",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"15",width:"10",height:"80",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"30",width:"10",height:"50",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("rect",{x:"45",width:"10",height:"30",rx:"3"},r.a.createElement("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})))))};function ue(){var e=Object(h.a)(["\n  background: ",";\n  color: ",";\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  overflow: auto;\n"]);return ue=function(){return e},e}function le(){var e=Object(h.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n  :hover {\n    background: ",";\n    color: ",";\n  }\n\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0.25em;\n  padding: 0.75em 2em;\n  border: 2px solid ",";\n  border-radius: 3px;\n  cursor: pointer;\n"]);return le=function(){return e},e}function se(){var e=Object(h.a)(["\n  color: ",";\n  font-size: 1em;\n  border: 2px solid ",";\n  border-radius: 3px;\n\n  /* here we use the dynamically computed prop */\n  margin: 0.25em;\n  padding: 0.75em;\n"]);return se=function(){return e},e}var de=p.a.input(se(),x,x),me=p.a.button(le(),j,x,x,j,x),fe=p.a.div(ue(),j,x),he=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={pw:"",everythingOK:!1,sections:[],menuIsExpanded:!1},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){v.a.initializeApp(re),localStorage.getItem("kaffekick")&&this.checkPassword(localStorage.getItem("kaffekick"))}},{key:"checkPassword",value:function(e){var n=this;(this.state.pw||e)&&(this.pollRef=v.a.database().ref("/idrottshall/kaffe"),this.pollRef.on("value",(function(t){var a=e||n.state.pw.toLowerCase();t.val()===a?(n.setState({everythingOK:!0}),localStorage.setItem("kaffekick",a),n.getSections()):localStorage.removeItem("kaffekick")})))}},{key:"getSections",value:function(){var e=this;this.state.everythingOK&&v.a.database().ref("/sections").orderByChild("index").on("child_added",(function(n){e.setState({sections:[].concat(Object(u.a)(e.state.sections),[Object(c.a)({},n.val(),{backgroundPosition:["right","left"][(e.state.sections.length-1)%2],sectionId:Math.random().toString(36).slice(2)})])})}))}},{key:"renderSections",value:function(){var e=this.state.sections;return e&&e.length?e.map((function(e,n){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:"anchor-".concat(e.sectionId),style:{position:"absolute",top:"-40%"}}),function(){switch(e.type){case"start":return r.a.createElement($,{key:n,data:Object(c.a)({},e,{index:n})});case"venue":return r.a.createElement(W,{key:n,data:Object(c.a)({},e,{index:n})});case"osa":return r.a.createElement(ae,{key:n,data:Object(c.a)({},e,{index:n})});default:return r.a.createElement(X,{key:n,data:Object(c.a)({},e,{index:n})})}}())})):null}},{key:"renderMenu",value:function(){var e=this,n=this.state.sections;return n&&n.length?n.map((function(n){return n?r.a.createElement("div",{onClick:function(){e.setState({menuIsExpanded:!1}),document.querySelector(".anchor-".concat(n.sectionId)),window.scroll({top:document.querySelector(".anchor-".concat(n.sectionId)).getBoundingClientRect().top,left:0,behavior:"smooth"})}},n.h1):null})):null}},{key:"render",value:function(){var e=this,n=this.state,t=n.everythingOK,a=n.menuIsExpanded,i=n.sections,o=!!localStorage.getItem("kaffekick");return t||o?r.a.createElement(fe,null,r.a.createElement("div",{className:"App"},i&&i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-header"},r.a.createElement("h3",{onClick:function(){return e.setState({menuIsExpanded:!a})}},"Br\xf6llopsmeny ",a?"\u2796":"\u2795"),a&&this.renderMenu()),this.renderSections()):r.a.createElement(ce,null))):r.a.createElement(fe,null,r.a.createElement("div",{className:"App"},r.a.createElement("form",{type:"POST",onSubmit:function(n){n.preventDefault(),e.checkPassword()},style:{position:"absolute",top:"40%",transform:"translateY(-40%)",left:0,right:0}},r.a.createElement("h1",null,"L\xf6senord"),r.a.createElement(de,{onChange:function(n){return e.setState({pw:n.target.value})},type:"password",placeholder:"L\xf6senord"}),r.a.createElement(me,{type:"submit"},"OK"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=t(19);t.n(pe).a.polyfill(),o.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);