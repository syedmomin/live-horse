"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[360],{3360:(O,d,s)=>{s.r(d),s.d(d,{SuccessStoriesModule:()=>M});var c=s(6895),p=s(2655),f=s(7834),u=s(564),t=s(4650),l=s(5643);function g(n,i){if(1&n&&(t.TgZ(0,"span",23),t._uU(1),t.ALo(2,"slice"),t.qZA()),2&n){const e=t.oxw().$implicit;t.Q6J("ngbTooltip",e.text),t.xp6(1),t.hij(" ",e.text.length>80?t.Dn7(2,2,e.text,0,80)+"...":e.text," ")}}function m(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",24)(1,"button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,a=t.oxw();return t.KtG(a.openPdfModal(r.filePath))}),t._UZ(2,"i",26),t.qZA(),t.TgZ(3,"a",27),t._UZ(4,"i",28),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(3),t.Q6J("href","./assets/pdf/"+e.filePath,t.LSH)}}const _=function(n,i){return{"background-image":n,transform:i}};function x(n,i){if(1&n&&(t.TgZ(0,"div",20),t.YNc(1,g,3,6,"span",21),t.YNc(2,m,5,1,"div",22),t.qZA()),2&n){const e=i.$implicit,o=i.index,r=t.oxw();t.Q6J("ngStyle",t.WLB(3,_,"url("+e.imageUrl+")",r.getTransform(o))),t.xp6(1),t.Q6J("ngIf",e.text),t.xp6(1),t.Q6J("ngIf",e.text)}}function h(n,i){if(1&n&&(t.TgZ(0,"div",32)(1,"p",33),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.text)}}function C(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",34)(1,"div",35),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,a=t.oxw();return t.KtG(a.openPdfModal(r.filePath))}),t._UZ(2,"i",26),t.qZA(),t.TgZ(3,"div")(4,"a",36),t._UZ(5,"i",37),t.qZA()()()}if(2&n){const e=t.oxw().$implicit;t.xp6(4),t.Q6J("href","./assets/pdf/"+e.filePath,t.LSH)}}function b(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,h,3,1,"div",30),t.YNc(2,C,6,1,"div",31),t.qZA()),2&n){const e=i.index;t.xp6(1),t.Q6J("ngIf",0!==e),t.xp6(1),t.Q6J("ngIf",0!==e)}}const v=function(n){return{transform:n}};let w=(()=>{class n{constructor(e){this.modalService=e,this.currentIndex=0,this.carouselTransform="",this.pdfCarouselCount=6,this.pdfList=u.t,this.filteredList=[...this.pdfList]}ngOnInit(){this.updateCarouselTransform()}getTransform(e){return`rotateY(${360/this.pdfCarouselCount*e}deg) translateZ(430px)`}rotateCarousel(e){this.currentIndex=(this.currentIndex+e+this.pdfCarouselCount)%this.pdfCarouselCount,this.updateCarouselTransform()}updateCarouselTransform(){this.carouselTransform=`rotateY(${-360/this.pdfCarouselCount*this.currentIndex}deg)`}openPdfModal(e){const o=this.modalService.open(f.r,{ariaLabelledBy:"modal-basic-title",centered:!0,size:"lg"});o.componentInstance.fileName=e,o.componentInstance.pdfSrc=`./assets/pdf/${e}`}filterList(e){const o=e.target.value.toLowerCase();this.filteredList=o?this.pdfList.filter(r=>r.text.toLowerCase().includes(o)):[...this.pdfList]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-success-stories"]],decls:21,vars:5,consts:[[1,"science-page"],["autoplay","","muted","","loop","","id","videoWhitePaper"],["src","./assets/videos/white-paper-background.mp4","type","video/mp4"],[1,"container"],[1,"header-science"],[1,"text-primary"],[1,"carousel-wrapper"],[1,"arrow","left-arrow",3,"click"],[1,"fas","fa-chevron-left"],[1,"carousel-container"],[1,"carousel",3,"ngStyle"],["class","carousel__face",3,"ngStyle",4,"ngFor","ngForOf"],[1,"arrow","right-arrow",3,"click"],[1,"fas","fa-chevron-right"],[1,"input-group","mb-3","mt-2"],["type","text","placeholder","Search...",1,"form-control",3,"input"],[1,"btn","btn-primary"],[1,"fas","fa-search"],[1,"card"],["class","d-flex flex-row justify-content-between my-2",4,"ngFor","ngForOf"],[1,"carousel__face",3,"ngStyle"],["placement","top","tooltipClass","my-custom-class","container","body",3,"ngbTooltip",4,"ngIf"],["class","button-container",4,"ngIf"],["placement","top","tooltipClass","my-custom-class","container","body",3,"ngbTooltip"],[1,"button-container"],[1,"icon-button",3,"click"],[1,"fa-solid","fa-eye-low-vision","fa-lg"],["download","",1,"icon-button",3,"href"],[1,"fa-solid","fa-download","fa-lg"],[1,"d-flex","flex-row","justify-content-between","my-2"],["class","d-flex flex-column p-3",4,"ngIf"],["class","price pt-4",4,"ngIf"],[1,"d-flex","flex-column","p-3"],[1,"mb-1"],[1,"price","pt-4"],[3,"click"],["download","",3,"href"],[1,"fa-solid","fa-download","fa-lg","download-icon"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"video",1),t._UZ(2,"source",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),t._uU(6,"Success Stories"),t.qZA()(),t.TgZ(7,"div",6)(8,"span",7),t.NdJ("click",function(){return o.rotateCarousel(-1)}),t._UZ(9,"i",8),t.qZA(),t.TgZ(10,"div",9)(11,"div",10),t.YNc(12,x,3,6,"div",11),t.qZA()(),t.TgZ(13,"span",12),t.NdJ("click",function(){return o.rotateCarousel(1)}),t._UZ(14,"i",13),t.qZA()(),t.TgZ(15,"div",14)(16,"input",15),t.NdJ("input",function(a){return o.filterList(a)}),t.qZA(),t.TgZ(17,"button",16),t._UZ(18,"i",17),t.qZA()(),t.TgZ(19,"div",18),t.YNc(20,b,3,2,"div",19),t.qZA()()()),2&e&&(t.xp6(11),t.Q6J("ngStyle",t.VKq(3,v,o.carouselTransform)),t.xp6(1),t.Q6J("ngForOf",o.pdfList.slice(0,o.pdfCarouselCount)),t.xp6(8),t.Q6J("ngForOf",o.filteredList))},dependencies:[c.sg,c.O5,c.PC,l._L,c.OU],styles:['#videoWhitePaper[_ngcontent-%COMP%]{position:fixed;right:0;bottom:0;opacity:.1;min-width:100%;min-height:100%}.header-science[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;padding-top:80px;margin-bottom:20px;text-align:center}.carousel-wrapper[_ngcontent-%COMP%]{position:relative;display:grid;justify-items:center;align-items:end;width:100%;height:44vh;padding-bottom:10px;overflow:hidden}.carousel-container[_ngcontent-%COMP%]{position:relative;width:400px;height:250px;perspective:1000px}.carousel[_ngcontent-%COMP%]{position:absolute;width:100%;transform-style:preserve-3d;transition:transform .5s ease-in-out}.carousel__face[_ngcontent-%COMP%]{position:absolute;width:350px;height:180px;top:20px;left:10px;background-size:cover;background-position:center;border-radius:10px;border:2px solid #212529;box-shadow:inset 0 0 0 2000px #0006;display:grid;align-items:center;align-content:center;transition:transform .5s ease,opacity .5s ease}.carousel__face[_ngcontent-%COMP%]:hover{border:2px solid #ff8927}.carousel__face[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;color:#fff;padding:10px 20px;text-shadow:2px 2px 6px rgba(0,0,0,.8);background:linear-gradient(65.12deg,#000000 .81%,rgba(39,39,39,.8392156863) 92.26%);border-radius:8px;max-width:80%;margin:0 auto;text-align:center}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px;margin-top:15px}.icon-button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ff7607,#B9570F);border:none;border-radius:50%;color:#fff;padding:12px;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 10px #0000004d;position:relative;overflow:hidden}.icon-button[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;left:50%;width:300%;height:300%;background:rgba(209,111,31,.2);border-radius:50%;transform:translate(-50%,-50%) scale(0);transition:transform .5s ease}.icon-button[_ngcontent-%COMP%]:hover:before{transform:translate(-50%,-50%) scale(1)}.icon-button[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#de6909,#c6580e);transform:scale(1.15)}.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.2rem}.icon-button[_ngcontent-%COMP%]   i.fa-eye-low-vision[_ngcontent-%COMP%], .icon-button[_ngcontent-%COMP%]   i.fa-download[_ngcontent-%COMP%]{color:#fff}.arrow[_ngcontent-%COMP%]{color:#767575;cursor:pointer;position:absolute;font-size:5rem;z-index:1;transition:color .3s ease;margin:0 20px}.arrow[_ngcontent-%COMP%]:hover{color:#fff}.left-arrow[_ngcontent-%COMP%]{left:0;top:30%}.right-arrow[_ngcontent-%COMP%]{right:0;top:30%}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ff8927;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#ff8927}.card[_ngcontent-%COMP%]{position:relative;overflow:scroll;height:450px;padding-right:20px;padding-left:10px;background-color:#0000001f}.form-control[_ngcontent-%COMP%]{border-radius:7px;border:1.5px solid #ff8927;background-color:transparent}input.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border:1.5px solid #f07006;background-color:transparent;letter-spacing:1px}.btn-primary[_ngcontent-%COMP%]{color:#fff;border-radius:7px}.btn-primary[_ngcontent-%COMP%]:focus{box-shadow:none}.text[_ngcontent-%COMP%]{font-size:13px;color:#9ca1a4}.price[_ngcontent-%COMP%]{width:100px;display:flex;justify-content:space-evenly}.price[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#e77b07}.flex-row[_ngcontent-%COMP%]{border:1px solid #ff8927;border-radius:10px}.flex-column[_ngcontent-%COMP%]{height:80px}.flex-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.download-icon[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width: 450px){.card[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center}.price[_ngcontent-%COMP%]{border:none;margin:0 auto}}']}),n})();var P=s(2271);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,l.HK,P.m,p.Bz.forChild([{path:"",component:w}])]}),n})()}}]);