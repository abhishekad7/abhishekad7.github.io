(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(45)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(24),i=t.n(s),c=(t(32),t(4)),r=t(5),o=t(7),m=t(6),d=t(3),h=t(8),p=(t(33),t(10)),u=t(11),b=(t(39),t(14)),E=(t(40),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).finalSkills={algo:92,ds:86,web:80,cli:60,android:50,desktop:30},t.delSkills={algo:0,ds:0,web:0,cli:0,android:0,desktop:0},t.cvLink="/assets/resume.pdf",t.skillsPart=256,t.hundred=0,t.delHundred=0,t.interval=null,document.title="About | abhishekad7",t.state={skills:{algo:0,ds:0,web:0,cli:0,android:0,desktop:0}},t.calcDelSkills=t.calcDelSkills.bind(Object(d.a)(t)),t.fillSkills=t.fillSkills.bind(Object(d.a)(t)),t.nextVal=t.nextVal.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"calcDelSkills",value:function(){this.delSkills={algo:this.finalSkills.algo/this.skillsPart,ds:this.finalSkills.ds/this.skillsPart,web:this.finalSkills.web/this.skillsPart,cli:this.finalSkills.cli/this.skillsPart,android:this.finalSkills.android/this.skillsPart,desktop:this.finalSkills.desktop/this.skillsPart},this.delHundred=100/this.skillsPart}},{key:"componentDidMount",value:function(){this.calcDelSkills(),this.interval=setInterval(this.fillSkills,10)}},{key:"nextVal",value:function(e){return(e=Math.floor(100*e))/100}},{key:"fillSkills",value:function(){if(this.hundred>100)return clearInterval(this.interval),void this.setState({skills:this.finalSkills});this.currSkill={algo:this.nextVal(this.state.skills.algo+this.delSkills.algo),ds:this.nextVal(this.state.skills.ds+this.delSkills.ds),web:this.nextVal(this.state.skills.web+this.delSkills.web),cli:this.nextVal(this.state.skills.cli+this.delSkills.cli),android:this.nextVal(this.state.skills.android+this.delSkills.android),desktop:this.nextVal(this.state.skills.desktop+this.delSkills.desktop)},this.hundred+=this.delHundred,this.setState({skills:this.currSkill})}},{key:"render",value:function(){return n.a.createElement("center",null,n.a.createElement("div",{className:"content-holder"},n.a.createElement("div",{style:{letterSpacing:"4px",fontSize:30},className:"heading"},n.a.createElement("span",null,"Abhishek Kumar")),n.a.createElement("p",{style:{textAlign:"left",margin:"10px 0px 10px 0px",padding:"5px 12px 5px 12px",color:"rgba(210, 210, 210, 1)",letterSpacing:"1.7px"}},"I spent my teenage in Mathura. Being a sports enthusiast I joined my school field hockey team and participated in National School Games in different age groups. You can find me watching movies in my free time. Presently I am IT undergrad @ NIT Allahabad. I am carrying an experience in Software Development and Competitive Programming.")),n.a.createElement("div",{className:"content-holder flex-container"},n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"heading"},n.a.createElement("span",null,"Profile")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Date of Birth")),n.a.createElement("span",{className:"detail"},"28 March 1998")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Profession")),n.a.createElement("span",{className:"detail"},"Student (B.Tech)")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Email")),n.a.createElement("span",{className:"detail"},"abhishekad7@gmail.com")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"My Website")),n.a.createElement("span",{className:"detail"},"abhishekad7.github.io")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Handle")),n.a.createElement("span",{className:"detail"},"abhishekad7")),n.a.createElement("div",{className:"detail-box",style:{marginTop:"30px",fontWeight:"bold"}},n.a.createElement("a",{href:this.cvLink,style:{display:"",textDecoration:"none",border:"solid 2px #ccc",padding:"10px 40px 10px 40px",color:"#fff"}},"Resume"))),n.a.createElement("div",{className:"skills"},n.a.createElement("div",{className:"heading"},n.a.createElement("span",null,"Skills")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Algorithms ")),n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skill-level",style:{width:this.state.skills.algo+"%"}},this.state.skills.algo,"%"))),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Data Structures ")),n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skill-level",style:{width:this.state.skills.ds+"%"}},this.state.skills.ds,"%"))),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Web Development ")),n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skill-level",style:{width:this.state.skills.web+"%"}},this.state.skills.web,"%"))),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Command Line App")),n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skill-level",style:{width:this.state.skills.cli+"%"}},this.state.skills.cli,"%"))),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Android App Development ")),n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skill-level",style:{width:this.state.skills.android+"%"}},this.state.skills.android,"%"))),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Desktop App Development ")),n.a.createElement("div",{className:"skill-box"},n.a.createElement("div",{className:"skill-level",style:{width:this.state.skills.desktop+"%"}},this.state.skills.desktop,"%"))))),n.a.createElement("div",{className:"content-holder"}))}}]),a}(l.Component)),k=(t(41),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).projects=[{title:"Future Trivia",tools:["Django","Javascript"],desc:"A Django based web app for onine quizzing and exams.",sss:["/img/ft1.jpg"],navs:[{href:"https://github.com/abhishekad7/futureTrivia",name:"See on Github"},{href:"https://futuretrivia.pythonanywhere.com/",name:"Live"}]},{title:"Kody Alarm: Coding Calendar",tools:["Java","Android Studio"],desc:"An android app which shows you all upcoming programming contests on AtCoder, Codeforces and Codechef. User can set reminder for upcoming contest.",sss:["/img/kody1.jpg"],navs:[{href:"https://github.com/abhishekad7/coding_calendar",name:"See on Github"},{href:"https://drive.google.com/open?id=1uPofiI-gQ2RiafWQLO3Q8CyZQRGk1lXe",name:"Download App"}]},{title:"This Webapp",tools:["ReactJS","Javascript","CSS"],desc:"A ReactJS based web app. This web app is an image of me.",sss:[],navs:[{href:"https://github.com/abhishekad7/abhishekad7-reactapp",name:"See on Github"},{href:"https://abhishekad7.github.io",name:"Live"}]},{title:"Live Cricker",tools:["Python"],desc:"A Command Line app for getting live cricket matches updates. It shows notification at regular intervals.",sss:[],navs:[{href:"https://github.com/abhishekad7/live-cric",name:"See on Github"}]}],document.title="Projects | abhishead7",t.addProject=t.addProject.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"addProject",value:function(e,a){return n.a.createElement("div",{className:"project",key:a},n.a.createElement("div",{className:"project-heading"},n.a.createElement("span",null,e.title)),n.a.createElement("div",{className:"project-tools"},e.tools.map(function(e,a){return n.a.createElement("span",{key:a},e)})),n.a.createElement("div",{className:"project-desc"},e.desc),n.a.createElement("div",{className:"project-sss"},e.sss.map(function(a,t){return n.a.createElement("img",{alt:e.title,src:a,key:t})})),n.a.createElement("div",{className:"project-nav"},e.navs.map(function(e,a){return n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.href},e.name)})))}},{key:"render",value:function(){var e=this;return n.a.createElement("center",null,n.a.createElement("div",{className:"content-holder"},n.a.createElement("div",{style:{letterSpacing:"4px",fontSize:30},className:"heading"},n.a.createElement("span",null,"Projects")),this.projects.map(function(a,t){return e.addProject(a,t)})))}}]),a}(l.Component)),v=function(e){function a(e){var t;return Object(c.a)(this,a),t=Object(o.a)(this,Object(m.a)(a).call(this,e)),document.title="Contact | abhishekad7",t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("center",null,n.a.createElement("div",{className:"content-holder"},n.a.createElement("div",{style:{letterSpacing:"4px",fontSize:30},className:"heading"},n.a.createElement("span",null,"Contact")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Phone")),n.a.createElement("span",{className:"detail"},"+919557660260")),n.a.createElement("div",{className:"detail-box"},n.a.createElement("label",{className:""},n.a.createElement("span",null,"Email")),n.a.createElement("span",{className:"detail"},"abhishekad7@gmail.com"))),n.a.createElement("div",{className:"content-holder"},n.a.createElement("div",{className:"heading"},n.a.createElement("span",{style:{fontVariant:"normal",fontSize:20,border:"0px"}},"Always happy to hear from you.")),n.a.createElement("form",{method:"POST",action:"https://formspree.io/abhishekad7@gmail.com"},n.a.createElement("div",{className:"form-element"},n.a.createElement("input",{type:"text",name:"Name",placeholder:"Your Name"})),n.a.createElement("div",{className:"form-element"},n.a.createElement("input",{type:"email",name:"Email",placeholder:"Your Email"})),n.a.createElement("div",{className:"form-element"},n.a.createElement("input",{type:"text",name:"Subject",placeholder:"Subject"})),n.a.createElement("div",{className:"form-element"},n.a.createElement("textarea",{name:"Message",placeholder:"Message"})),n.a.createElement("div",{className:"form-element"},n.a.createElement("button",{type:"submit"},"Submit")))))}}]),a}(l.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("center",null,n.a.createElement("div",{className:"content-holder"},n.a.createElement("p",null,n.a.createElement("div",{style:{display:"inline-block",fontSize:14,letterSpacing:1.1}},"\xa9 2019 abhishekad7"),n.a.createElement("div",{style:{display:"inline-block",fontSize:22,letterSpacing:2}},n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://github.com/abhishekad7/"},n.a.createElement(p.a,{icon:u.b}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://www.facebook.com/imabhishekad7/"}," ",n.a.createElement(p.a,{icon:u.a}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://www.linkedin.com/in/abhishekad7/"}," ",n.a.createElement(p.a,{icon:u.c}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://www.twitter.com/imabhishekad7/"}," ",n.a.createElement(p.a,{icon:u.e}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://medium.com/abhishekad7/"}," ",n.a.createElement(p.a,{icon:u.d})))))))}}]),a}(l.Component),g=t(15),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).activeColor="#ff0077",t.inactiveColor="#fff",t.openAbout=t.openAbout.bind(Object(d.a)(t)),t.openProjects=t.openProjects.bind(Object(d.a)(t)),t.openContact=t.openContact.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"setLinkColor",value:function(e){}},{key:"openAbout",value:function(){this.setLinkColor(1)}},{key:"openProjects",value:function(){this.setLinkColor(2)}},{key:"openContact",value:function(){this.setLinkColor(3)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"nav-menu",className:""},n.a.createElement("div",null,n.a.createElement(b.b,{className:"link",to:"/"},"Home"),n.a.createElement(b.b,{className:"link",to:"/ex/about",onClick:this.openAbout},n.a.createElement("span",{id:"link_1"},"About")),n.a.createElement(b.b,{className:"link",to:"/ex/projects",onClick:this.openProjects},n.a.createElement("span",{id:"link_2"},"Projects")),n.a.createElement(b.b,{className:"link",to:"/ex/contact",onClick:this.openContact},n.a.createElement("span",{id:"link_3"},"Contact")))),n.a.createElement("div",{id:"content"},n.a.createElement(g.a,{exact:!0,path:"/ex/about",component:E}),n.a.createElement(g.a,{exact:!0,path:"/ex/projects",component:k}),n.a.createElement(g.a,{exact:!0,path:"/ex/contact",component:v}),n.a.createElement(f,null)))}}]),a}(l.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",width:"100%",height:"100vh",backgroundImage:"url('/img/bg.gif')",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",paddingTop:"40px",textAlign:"center",color:"rgba(220, 220, 220, 1)"}},n.a.createElement("div",{style:{marginTop:"40px"}},n.a.createElement("p",{style:{fontSize:"40px"}},"\ud835\udd40'\ud835\udd5e ",n.a.createElement("span",{style:{color:"#FF0077"}},"\ud835\udd38\ud835\udd53\ud835\udd59\ud835\udd5a\ud835\udd64\ud835\udd59\ud835\udd56\ud835\udd5c \ud835\udd42\ud835\udd66\ud835\udd5e\ud835\udd52\ud835\udd63")),n.a.createElement("p",{style:{fontSize:18,fontVariant:"small-caps",letterSpacing:3}},"| Programmer | Algorithmist | Web-Developer |")),n.a.createElement("div",{style:{width:"100%",padding:"70px 0px 70px 0px",marginTop:"20px"}},n.a.createElement(b.b,{to:"/ex/about"},n.a.createElement("button",{id:"explore-btn",onClick:this.props.main},"Explore about me"))),n.a.createElement("div",{style:{position:"absolute",width:"100%",bottom:"40px"}},n.a.createElement("p",{style:{fontSize:41,letterSpacing:6}},n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://github.com/abhishekad7/",className:"text-light"},n.a.createElement(p.a,{icon:u.b}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://www.facebook.com/imabhishekad7/",className:"text-light"}," ",n.a.createElement(p.a,{icon:u.a}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://www.linkedin.com/in/abhishekad7/",className:"text-light"}," ",n.a.createElement(p.a,{icon:u.c}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://www.twitter.com/imabhishekad7/",className:"text-light"}," ",n.a.createElement(p.a,{icon:u.e}))),n.a.createElement("span",{className:"social-icon"},n.a.createElement("a",{href:"https://medium.com/abhishekad7/",className:"text-light"}," ",n.a.createElement(p.a,{icon:u.d}))))))}}]),a}(l.Component),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).openMain=t.openMain.bind(Object(d.a)(t)),t.openHome=t.openHome.bind(Object(d.a)(t)),t.state={nextpage:n.a.createElement(x,{main:t.openMain})},t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"openHome",value:function(){this.setState({nextpage:n.a.createElement(x,{main:this.openMain})})}},{key:"openMain",value:function(){this.setState({nextpage:n.a.createElement(N,{home:this.openHome})})}},{key:"render",value:function(){return n.a.createElement(b.a,null,n.a.createElement(g.a,{exact:!0,path:"/",component:x}),n.a.createElement(g.a,{path:"/ex",component:N}))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(44);i.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.be2febdb.chunk.js.map