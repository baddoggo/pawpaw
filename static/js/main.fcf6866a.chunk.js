(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a.p+"static/media/NormalMap.ab4323a8.png"},132:function(e,t,a){e.exports=a.p+"static/media/paw.35bfb10e.png"},140:function(e,t,a){e.exports=a(274)},145:function(e,t,a){},146:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=(a(145),a(40)),i=(a(146),a(19)),m=a(41),d=a(278),s=a(281),u=a(282),h=a(283),E=a(131),p=a.n(E),g=a(132),w=a.n(g);function f(e){return l.a.createElement(d.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,{id:"contained-modal-title-vcenter"},"\xd2\u0334\u030a\u033f\u032d\u035aw\u0338\u0301\u0300\u0324\u032a\xd3\u0338\u0360\u0353")),l.a.createElement(d.a.Body,null,l.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u0412\u043e\u0437\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d")),l.a.createElement(d.a.Footer,null,l.a.createElement(s.a,{onClick:function(){window.location.search=""}},"\u0412\u043e\u0437\u0440\u0430\u0449\u0435\u043d\u0438\u0435")))}var v=function(e){var t,a,r,c,d,E,g,v=l.a.useState(!1),y=Object(o.a)(v,2),b=y[0],x=y[1],C=Object(n.useRef)(null),k=60,O=k-15,A=!1,B=new Image;Object(n.useEffect)(function(){var e=new URL(window.location.href).searchParams.get("img");B.id="loadingImg",B.crossOrigin="anonymous",B.onload=function(){B.width>B.height?B.setAttribute("style","max-width: 100%; height: auto; width: auto/9;"):B.setAttribute("style","max-height: 100%; width: auto; height: auto/9;"),E=new i.Application(B.width,B.height),a=i.RenderTexture.create(E.screen.width,E.screen.height),B.remove(),console.log(B),E.loader.add("one",p.a),E.loader.add("aim",w.a),E.loader.load(j),E.loader.onComplete.add(S)},B.onerror=function(){x(!0)},B.src=e,g.appendChild(B)});var S=function(){g.appendChild(E.view),document.getElementById("loader").remove(),g.onmouseover=function(){g.style.cursor="none"}},j=function(e,n){var l=new i.Sprite(new i.Texture(new i.BaseTexture(B)));l.width=E.screen.width,l.height=E.screen.height,l.anchor.set(.5),l.x=E.screen.width/2,l.y=E.screen.height/2,E.renderer.render(l,a),t=new i.Sprite(a),E.stage.addChild(t),r=new i.Sprite(n.one.texture),E.stage.addChild(r),r.anchor.set(.5),(c=new i.Sprite(n.aim.texture)).width=k,c.height=k,c.alpha=.7,c.anchor.set(.5),E.stage.addChild(c),(d=new i.filters.DisplacementFilter(r)).scale.x=0,d.scale.y=0,r.width=k,r.height=k,t.filters=[d],E.stage.interactive=!0,E.stage.on("mousemove",H).on("pointerdown",I).on("pointerup",P),E.start()},I=function(e){A=!0,r.position.copy(e.data.global),m.a.to(d.scale,.3,{x:-20,y:-20}),m.a.to(c,.3,{width:O,height:O,alpha:.1})},P=function(e){A=!1,m.a.to(d.scale,.5,{x:0,y:0}),m.a.to(c,.3,{width:k,height:k,alpha:.7})},H=function(e){c.position.copy(e.data.global),A&&r.position.copy(e.data.global)},N=l.a.createElement(u.a,{id:"popover-basic"},l.a.createElement(u.a.Content,null,"\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430"));return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"rangeblock"},l.a.createElement("label",{className:"labelrange",for:"size"},l.a.createElement("h5",null,"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0440\u0438\u0446\u0435\u043b\u0430 :3")),l.a.createElement("input",{onInput:function(){k=C.current.value,O=k-15,c.width=k,c.height=k,r.width=k,r.height=k},ref:C,type:"range",id:"size",name:"size",min:"60",max:"90"}),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement("div",{style:{width:"250px",display:"flex"}},l.a.createElement(s.a,{variant:"primary",onClick:function(){window.location.search=""}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),l.a.createElement("div",{style:{margin:"15px"}}),l.a.createElement(h.a,{trigger:"click",placement:"top",overlay:N},l.a.createElement(s.a,{variant:"primary",onClick:function(){!function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.focus(),t.select();try{var a=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+a)}catch(n){console.log("Oops, unable to copy")}document.body.removeChild(t)}(window.location.href)}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f")))),l.a.createElement("div",{id:"boopBlock",ref:function(e){g=e}},l.a.createElement("div",{id:"loader"})),l.a.createElement(f,{show:b,onHide:function(){window.location.search=""}}))},y=a(277),b=a(279);a(271);function x(e){return l.a.createElement(d.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,{id:"contained-modal-title-vcenter"},"\xd2w\xd3")),l.a.createElement(d.a.Body,null,l.a.createElement("h4",null,"\u0423\u043f\u0441\u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u043e\u0441\u044c"),l.a.createElement("p",null,"\u042d\u0442\u043e \u0447\u0430\u0441\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e ",l.a.createElement("b",null," \u0442\u0440\u0451\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c "),"."),l.a.createElement("h4",null,"\u041f\u0435\u0440\u0432\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430"),l.a.createElement("p",null,l.a.createElement("b",null,"\u041d\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435. ")," \u041f\u0440\u043e\u0432\u0435\u0440\u0442\u0438 \u0432\u0432\u043e\u0434 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430."),l.a.createElement("h4",null,"\u0412\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430"),l.a.createElement("p",null,"\u0420\u0435\u0441\u0441\u0443\u0440 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e ",l.a.createElement("b",null," \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442 \u0438\u043b\u0438 \u043d\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u0435\u043d "),". \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437. \u0415\u0441\u043b\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c \u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u044d\u0442\u043e \u043e\u043a\u043d\u043e \u043d\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437, \u0442\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u0430\u0448\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 3."),l.a.createElement("h4",null,"\u0422\u0440\u0435\u0442\u044c\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430"),l.a.createElement("p",null,"\u0420\u0435\u0441\u0443\u0440c \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",l.a.createElement("b",null,"\u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"),". \u042d\u0442\u043e\u0442 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441(\u0441\u043c\u043e\u0442\u0440\u0438 \u043d\u0438\u0436\u0435) \u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443."),l.a.createElement("h4",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b"),l.a.createElement("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b: ",l.a.createElement("b",null," ",l.a.createElement("a",{href:"https://vk.com"},"VK"),", ",l.a.createElement("a",{href:"https://twitter.com"},"Twitter"),",",l.a.createElement("a",{href:"https://imgur.com/"},"Imgur")),"."),l.a.createElement("p",null,"\u042d\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c \u0431\u0440\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u044d\u0442\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0442\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u044d\u0442\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043e \u0441 \u043f\u0440\u0438\u0447\u0438\u043d\u043e\u0439 1 \u0438\u043b\u0438 2, \u043b\u0438\u0431\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e \u044d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0438 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439  \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439.")),l.a.createElement(d.a.Footer,null,l.a.createElement(s.a,{onClick:e.onHide},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))}function C(e){return l.a.createElement(d.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,{id:"contained-modal-title-vcenter"},"OWO")),l.a.createElement(d.a.Body,null,l.a.createElement("h4",null,"\u041f\u0440\u0438\u0432\u0435\u0442"),l.a.createElement("p",null,"\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u043d\u0430 \u043a\u043e\u043b\u0435\u043d\u043a\u0435, \u0440\u0430\u0434\u0438 \u0437\u0430\u0431\u0430\u0432\u044b \u0438 \u0442.\u0434. \u0438 \u0442.\u043f."),l.a.createElement("p",null,'\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0437\u044f\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430 \u0438 "\u043f\u043e\u0442\u044b\u043a\u0430\u0442\u044c" \u0432 \u043d\u0435\u0433\u043e. \u041e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u043e \u0442\u044b\u043a\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u044b\u043f\u0443\u043a\u043b\u044b\u0435 \u0432\u044b\u043f\u0443\u043a\u043b\u043e\u0441\u0442\u0438 \u0438 \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043b\u0430\u043f\u043a\u0438 :3'),l.a.createElement("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e \u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432: ",l.a.createElement("b",null," ",l.a.createElement("a",{href:"https://vk.com"},"VK"),", ",l.a.createElement("a",{href:"https://twitter.com"},"Twitter"),",",l.a.createElement("a",{href:"https://imgur.com/"}," Imgur")),". \u0422\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u0438 \u043d\u0435 \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u044e\u0442 \u0431\u0440\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c (\u043a\u0430\u043a \u044d\u0442\u043e\u0442)"),l.a.createElement("p",null,"\u0420\u0430\u0437\u0432\u043b\u0435\u043a\u0430\u0439\u0442\u0435\u0441\u044c %3")),l.a.createElement(d.a.Footer,null,l.a.createElement(s.a,{onClick:e.onHide},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))}var k=function(e){var t,a=Object(n.useState)(e.error),r=Object(o.a)(a,2),c=r[0],i=r[1],m=Object(n.useState)(!1),d=Object(o.a)(m,2),u=d[0],h=d[1];return Object(n.useEffect)(function(){t=document.getElementById("urlimg")}),l.a.createElement("div",{className:"Main"},l.a.createElement("div",{className:"label"},l.a.createElement("div",null,"Paw"),l.a.createElement("div",null,"Paw")),l.a.createElement("div",{className:"urlin"},l.a.createElement(y.a,{className:"mb-3"},l.a.createElement(b.a.Control,{id:"urlimg",type:"text",as:"input",placeholder:"\u0412\u0441\u0442\u0430\u0432\u0442\u0435 URL \u043a\u0430\u0440\u0442\u0438\u043d\u0438\u043a\u0438 \u0447\u0442\u043e\u0431\u044b \u0442\u044b\u043a\u0430\u0442\u044c"}),l.a.createElement(y.a.Append,null,l.a.createElement(s.a,{variant:"primary",onClick:function(){var e=new URLSearchParams(window.location.search),a=t.value,n=new Image;n.id="loadingImg",n.crossOrigin="anonymous",n.src=a,n.onerror=function(){i(!0)},n.onload=function(){e.set("img",a),console.log(e.toString()),window.location.search=e}}},"UWU"),l.a.createElement("div",{style:{width:"5px"}}),l.a.createElement(s.a,{variant:"primary",onClick:function(){return h(!0)}},"\u0418\u043d\u0444\u043e")))),l.a.createElement(x,{show:c,onHide:function(){return i(!1)}}),l.a.createElement(C,{show:u,onHide:function(){return h(!1)}}))},O=a(280);a(272);var A=function(e){return l.a.createElement("div",{className:"ErrorMob"},l.a.createElement(O.a,{size:200,mood:"ko",color:"#61dafb"}),l.a.createElement("h5",{style:{color:"white",textAlign:"center"}},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 [\u043f\u043e\u043a\u0430] \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e."),l.a.createElement("h5",{style:{color:"white",textAlign:"center"}},"\u0421\u043e\u0440\u044f\u043d."))};var B=new URLSearchParams(window.location.search).get("img"),S=l.a.createElement("div",null);S=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?l.a.createElement(A,null):null===B?l.a.createElement(k,{error:!1}):l.a.createElement(v,null),c.a.render(S,document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.fcf6866a.chunk.js.map