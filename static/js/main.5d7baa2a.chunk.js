(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],[,,,,,,,,,,,function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=(t(19),t(21),t(22),t(23),t(1)),s=t(2),r=t(4),m=t(3),i=t(5),o=t(7),u=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).state={scrollingLock:!1},t.handleScroll=t.handleScroll.bind(Object(o.a)(t)),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.scrollY>5?(console.log("should lock"),this.setState({scrollingLock:!0})):window.scrollY<5&&(console.log("not locked"),this.setState({scrollingLock:!1}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"sticky-wrapper ".concat(this.state.scrollingLock?"is-sticky":"")},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-header fixed-top sticky sticky-dark pl-0 pr-0"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("img",{src:"./../assets/images/logo.png",height:"35",alt:"logo"})),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("i",{className:"ion ion-md-menu"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#features"},"Features")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#services"},"Services")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#pricing"},"Pricing")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#team"},"Team")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")))))))}}]),a}(l.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,null),n.a.createElement("section",{id:"header",className:"height-half","data-image":"./assets/images/header.jpg"},n.a.createElement("div",{className:"overlay-bg"}),n.a.createElement("div",{className:"d-table w-100 h-100"},n.a.createElement("div",{className:"d-table-cell align-middle"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"header-title mt-4"},"Let's Bring The Revolution",n.a.createElement("br",null),"to The World"),n.a.createElement("p",{className:"header-description mt-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",n.a.createElement("br",null),"Nullam lacus dolor, venenatis non aliquet vitae, gravida vitae erat."),n.a.createElement("a",{href:"/",className:"btn btn-custom btn-round mt-3"},"Learn More"))))))))}}]),a}(l.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section",id:"features"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"section-title"}," Features "),n.a.createElement("p",{className:"section-subtitle"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex. Suspendisse sagittis rutrum condimentum."),n.a.createElement("div",{className:"mt-5"},n.a.createElement("div",{className:"row feature"},n.a.createElement("div",{className:"col-md-6 feature-img"},n.a.createElement("img",{src:"assets/images/img3.jpg",className:"img-fluid mb-5 mb-md-0",alt:"handshake"})),n.a.createElement("div",{className:"col-md-6 feature-detail"},n.a.createElement("h2",{className:"feature-title"},"Good for Small Business"),n.a.createElement("p",{className:"feature-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, augue pellentesque varius viverra, augue eros facilisis nulla, et tempus libero orci vitae risus."),n.a.createElement("div",{className:"btn btn-custom btn-text"},n.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},"Learn More"," ",n.a.createElement("i",{className:"ion ion-ios-arrow-round-forward ml-2 icon-btn"}))))),n.a.createElement("div",{className:"row feature"},n.a.createElement("div",{className:"col-md-6 feature-img feature-right"},n.a.createElement("img",{src:"assets/images/img2.jpg",className:"img-fluid mb-5 mb-md-0",alt:"sibiloo"})),n.a.createElement("div",{className:"col-md-6 feature-detail"},n.a.createElement("h2",{className:"feature-title"},"Super Fast Response"),n.a.createElement("p",{className:"feature-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, augue pellentesque varius viverra, augue eros facilisis nulla, et tempus libero orci vitae risus."),n.a.createElement("div",{className:"btn btn-custom btn-text"},n.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},"Learn More"," ",n.a.createElement("i",{className:"ion ion-ios-arrow-round-forward ml-2 icon-btn"}))))),n.a.createElement("div",{className:"row feature"},n.a.createElement("div",{className:"col-md-6 feature-img"},n.a.createElement("img",{src:"assets/images/img4.jpg",className:"img-fluid mb-5 mb-md-0",alt:"switches"})),n.a.createElement("div",{className:"col-md-6 feature-detail"},n.a.createElement("h2",{className:"feature-title"},"Using Good Technology"),n.a.createElement("p",{className:"feature-description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, augue pellentesque varius viverra, augue eros facilisis nulla, et tempus libero orci vitae risus."),n.a.createElement("div",{className:"btn btn-custom btn-text"},n.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},"Learn More"," ",n.a.createElement("i",{className:"ion ion-ios-arrow-round-forward ml-2 icon-btn"}))))))))}}]),a}(l.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section bg-gray",id:"services"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"section-title"}," Services "),n.a.createElement("p",{className:"section-subtitle"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex. Suspendisse sagittis rutrum condimentum."),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"service-box text-center"},n.a.createElement("h4",{className:"service-title"},n.a.createElement("i",{className:"ion ion-ios-laptop"}),"Web Design"),n.a.createElement("p",{className:"service-description mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex."))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"service-box text-center"},n.a.createElement("h4",{className:"service-title"},n.a.createElement("i",{className:"ion ion-ios-phone-portrait"}),"Mobile Application"),n.a.createElement("p",{className:"service-description mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex."))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"service-box text-center"},n.a.createElement("h4",{className:"service-title"},n.a.createElement("i",{className:"ion ion-logo-game-controller-a"}),"Game Design"),n.a.createElement("p",{className:"service-description mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex."))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"service-box text-center"},n.a.createElement("h4",{className:"service-title"},n.a.createElement("i",{className:"ion ion-ios-code"}),"Web Programming"),n.a.createElement("p",{className:"service-description mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex."))))))}}]),a}(l.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{id:"started"},n.a.createElement("div",{className:"overlay-bg"}),n.a.createElement("div",{className:"container text-center"},n.a.createElement("h2",{className:"text-title text-white"},"Are You Ready for Amazing Thing?"),n.a.createElement("div",{className:"text-description text-white"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex. And lorem stil ipsum."),n.a.createElement("div",{className:"btn btn-custom btn-round"},"Learn More")))}}]),a}(l.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section",id:"pricing"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"section-title"},"Pricing"),n.a.createElement("p",{className:"section-subtitle"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex. Suspendisse sagittis rutrum condimentum."),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"pricing-box"},n.a.createElement("div",{className:"pricing"},n.a.createElement("h5",null,"Basic"),n.a.createElement("h2",{className:"price"},"$5"),n.a.createElement("p",{className:"text-muted"},"/month"),n.a.createElement("div",{className:"pricing-border"}),n.a.createElement("div",{className:"plan-features mt-4"},n.a.createElement("p",null,"Bandwidth: ",n.a.createElement("b",{className:"text-custom"},"30GB")),n.a.createElement("p",null,"Space: ",n.a.createElement("b",{className:"text-custom"},"15GB")),n.a.createElement("p",null,"Support: ",n.a.createElement("b",{className:"text-custom"},"No")),n.a.createElement("p",null,n.a.createElement("b",{className:"text-custom"},"1")," Domain"),n.a.createElement("p",null,n.a.createElement("b",{className:"text-custom"},"No")," Hidden Fees"))),n.a.createElement("div",{className:"btn btn-block pricing-button"},"Join Now"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"pricing-box active"},n.a.createElement("div",{className:"pricing"},n.a.createElement("h5",null,"Medium"),n.a.createElement("h2",{className:"price"},"$10"),n.a.createElement("p",{className:"text-muted"},"/month"),n.a.createElement("div",{className:"pricing-border"}),n.a.createElement("div",{className:"plan-features mt-4"},n.a.createElement("p",null,"Bandwidth: ",n.a.createElement("b",{className:"text-custom"},"100GB")),n.a.createElement("p",null,"Space: ",n.a.createElement("b",{className:"text-custom"},"50GB")),n.a.createElement("p",null,"Support: ",n.a.createElement("b",{className:"text-custom"},"No")),n.a.createElement("p",null,n.a.createElement("b",{className:"text-custom"},"3")," Domain"),n.a.createElement("p",null,n.a.createElement("b",{className:"text-custom"},"No")," Hidden Fees"))),n.a.createElement("div",{className:"btn btn-block pricing-button"},"Join Now"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"pricing-box"},n.a.createElement("div",{className:"pricing"},n.a.createElement("h5",null,"Premium"),n.a.createElement("h2",{className:"price"},"$20"),n.a.createElement("p",{className:"text-muted"},"/month"),n.a.createElement("div",{className:"pricing-border"}),n.a.createElement("div",{className:"plan-features mt-4"},n.a.createElement("p",null,"Bandwidth: ",n.a.createElement("b",{className:"text-custom"},"Unlimited")),n.a.createElement("p",null,"Space: ",n.a.createElement("b",{className:"text-custom"},"100GB")),n.a.createElement("p",null,"Support: ",n.a.createElement("b",{className:"text-custom"},"Yes")),n.a.createElement("p",null,n.a.createElement("b",{className:"text-custom"},"5")," Domain"),n.a.createElement("p",null,n.a.createElement("b",{className:"text-custom"},"Yes")," Hidden Fees"))),n.a.createElement("div",{className:"btn btn-block pricing-button"},"Join Now"))))))}}]),a}(l.Component),b=function(e){return n.a.createElement("div",{className:"col-lg-3 col-sm-6"},n.a.createElement("div",{className:"team-box"},n.a.createElement("div",{className:"team-wrapper mb-4 mb-lg-0"},n.a.createElement("div",{className:"team-member"},n.a.createElement("img",{src:e.photo,alt:"Person 1"}))),n.a.createElement("div",{className:"team-info"},n.a.createElement("div",{className:"team-name"},e.teamname),n.a.createElement("div",{className:"team-designation"},e.skill)),n.a.createElement("div",{className:"team-socmed"},n.a.createElement("div",{className:"border-separator"}),n.a.createElement("ul",{className:"list-socmed list-unstyled m-0"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-dribbble"})))))))},g=[{teamname:"Ali Sadoughi",skill:"Front-end Developer",photo:"assets/images/person1.png"},{teamname:"Mamad Nazari",skill:"Back-end Developer",photo:"assets/images/person2.png"},{teamname:"Nima Ab",skill:"Lawyer",photo:"assets/images/person3.png"},{teamname:"Hamed Nazari",skill:"Khoshgel",photo:"assets/images/person4.png"}],h=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=g.map((function(e,a){return n.a.createElement(b,{key:a,teamname:e.teamname,skill:e.skill,photo:e.photo})}));return n.a.createElement("section",{className:"section bg-gray",id:"team"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:"section-title"},"Team"),n.a.createElement("p",{className:"section-subtitle"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex. Suspendisse sagittis rutrum condimentum."),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-5"},e))))}}]),a}(l.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section",id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"section-title"},"Contact"),n.a.createElement("p",{className:"section-subtitle"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut varius ex. Suspendisse sagittis rutrum condimentum.")),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-lg-4 pr-5"},n.a.createElement("div",{className:"contact-detail mt-3"},n.a.createElement("i",{className:"ion ion-ios-map"})," ",n.a.createElement("p",{className:"fw-bold"},"1431 Arkham City Amazon Village, California")),n.a.createElement("div",{className:"contact-detail mt-4"},n.a.createElement("i",{className:"ion ion-ios-call"})," ",n.a.createElement("p",null,"Phone: ",n.a.createElement("span",{className:"fw-bold"},"+628-998-61-376"))),n.a.createElement("div",{className:"contact-detail mt-4"},n.a.createElement("i",{className:"ion ion-ios-mail"})," ",n.a.createElement("p",null,"Email: ",n.a.createElement("span",{className:"fw-bold"},"hello@example.comm")))),n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("form",{method:"post",action:"php/contact.php",name:"contact-form",className:"contact-form",id:"contact-form"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"form-group mt-2"},n.a.createElement("input",{name:"name",id:"name",type:"text",className:"form-control",placeholder:"Your name*"}))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"form-group mt-2"},n.a.createElement("input",{name:"email",id:"email",type:"email",className:"form-control",placeholder:"Your email*"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"form-group mt-2"},n.a.createElement("input",{type:"text",className:"form-control",id:"subject",placeholder:"Your Subject.."})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"form-group mt-2"},n.a.createElement("textarea",{name:"comments",id:"comments",rows:"4",className:"form-control",placeholder:"Your message..."})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 text-right"},n.a.createElement("input",{type:"submit",id:"submit",name:"send",className:"btn btn-custom",value:"Send Message"}))))))))}}]),a}(l.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-lg-3 mt-4"},n.a.createElement("div",{className:"widget-title"},"Revolution"),n.a.createElement("ul",{className:"list-unstyled footer-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"#header"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#features"},"Features")),n.a.createElement("li",null,n.a.createElement("a",{href:"#services"},"Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"#pricing"},"Pricing")),n.a.createElement("li",null,n.a.createElement("a",{href:"#team"},"Team")),n.a.createElement("li",null,n.a.createElement("a",{href:"#contact"},"Contact")))),n.a.createElement("div",{className:"col-md-4 col-lg-3 mt-4"},n.a.createElement("div",{className:"widget-title"},"Useful Links"),n.a.createElement("ul",{className:"list-unstyled footer-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Term of Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Privacy & Policy")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Sitemaps")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Our Rules")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Career")))),n.a.createElement("div",{className:"col-md-4 col-lg-3 mt-4"},n.a.createElement("div",{className:"widget-title"},"Support"),n.a.createElement("ul",{className:"list-unstyled footer-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Help Center")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Live Chat")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Press")))),n.a.createElement("div",{className:"col-lg-3 mt-4"},n.a.createElement("div",{className:"widget-title"},"Newsletter"),n.a.createElement("form",{className:"form subscribe"},n.a.createElement("input",{placeholder:"Your Email",className:"form-control mb-3",required:""}),n.a.createElement("a",{href:"/",className:"btn btn-custom btn-block submit"},"Subscribe")))),n.a.createElement("div",{className:"border-separator"}),n.a.createElement("div",{className:"footer-bottom"},n.a.createElement("div",{className:"d-flex"},"2020 \xa9 Revolution Corp",n.a.createElement("div",{className:"ml-auto"},n.a.createElement("ul",{className:"list-socmed list-unstyled m-0"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("i",{className:"ion ion-logo-dribbble"})))))))))}}]),a}(l.Component);a.a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement(E,null),n.a.createElement(N,null),n.a.createElement(p,null),n.a.createElement(v,null),n.a.createElement(h,null),n.a.createElement(f,null),n.a.createElement(x,null))}},function(e,a,t){e.exports=t(14)},function(e,a,t){"use strict";t.r(a),function(e){var a=t(0),l=t.n(a),n=t(10),c=t.n(n),s=t(12),r=t(11),m=t(6),i=t.n(m);window.jQuery=i.a,window.$=i.a,e.jQuery=i.a,c.a.render(l.a.createElement(s.a,null),document.getElementById("root")),r.a()}.call(this,t(8))},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){}],[[13,1,2]]]);
//# sourceMappingURL=main.5d7baa2a.chunk.js.map