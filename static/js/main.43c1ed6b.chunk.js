(this["webpackJsonpmy-first-react-app"]=this["webpackJsonpmy-first-react-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),s=a(15),n=a.n(s),l=(a(22),a(9)),r=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(128, 51, 51)":"white"};return Object(r.jsxs)("div",{className:"container",style:{border:"2px solid white",borderRadius:"8px"},children:[Object(r.jsx)("h1",{className:"my-3",children:"About Hell's Service"}),Object(r.jsxs)("div",{className:"accordion my-3",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:t,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],s=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container mb-3 my-3",children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",placeholder:"Enter your text here",value:o,onChange:function(e){s(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"light"===e.mode?"white":"rgb(128 51 51)",color:"dark"===e.mode?"white":"black"}})}),Object(r.jsx)("button",{disabled:0===o.length,className:"btn btn-danger mx-1 my-2",onClick:function(){var t=o.toUpperCase();s(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to UpperCase"}),Object(r.jsx)("button",{disabled:0===o.length,className:"btn btn-danger mx-1 my-2",onClick:function(){var t=o.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to LowerCase"}),Object(r.jsx)("button",{disabled:0===o.length,className:"btn btn-danger mx-1 my-2",onClick:function(){s(""),e.showAlert("Text Cleared","success")},children:"Clear Text"}),Object(r.jsx)("button",{disabled:0===o.length,className:"btn btn-danger mx-1 my-2",onClick:function(){navigator.clipboard.writeText(o),document.getSelection().removeAllRanges(),e.showAlert("Copied to clipboaed","success")},children:"Copy Text"})]}),Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[o.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",o.length," characters"]}),Object(r.jsxs)("p",{children:["You can read the above text in ",.008*o.split(" ").filter((function(e){return 0!==e.length})).length," minutes"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:o.length>0?o:"Nothing to preview here"})]})]})}var h=a(8);function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(h.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.b,{className:"nav-link active","aria-current":"page",to:"/",children:e.home})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(h.b,{className:"nav-link active",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:e.modeTextColour})]})]})]})})}function j(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})}b.defaultProps={title:"Enter the title here",home:"Enter home here",aboutText:"Enter about the website here"};var u=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)("Switch to Dark Mode"),n=Object(l.a)(s,2),m=n[0],p=n[1],g=Object(c.useState)(null),x=Object(l.a)(g,2),O=x[0],v=x[1],y=function(e,t){v({msg:e,type:t}),setTimeout((function(){v(null)}),2e3)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(h.a,{children:[Object(r.jsx)(b,{title:"Hell",home:"UnderWorld",aboutText:"About Hell's Service",modeTextColour:m,mode:a,toggleMode:function(){"light"===a?(o("dark"),p("Switch to Light Mode"),document.body.style.color="white",document.body.style.backgroundColor="rgb(63 0 0)",y("Dark Mode Enabled","success")):(o("light"),p("Switch to Dark Mode"),document.body.style.color="black",document.body.style.backgroundColor="white",y("Light Mode Enabled","success"))}}),Object(r.jsx)(j,{alert:O}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/about",children:Object(r.jsx)(i,{mode:a})}),Object(r.jsx)(u.a,{path:"/",children:Object(r.jsx)(d,{showAlert:y,heading:"Hell's Service - Word Counter, Character Counter",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),o(e),s(e),n(e)}))};n.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.43c1ed6b.chunk.js.map