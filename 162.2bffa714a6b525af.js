"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[162],{4162:(v,d,i)=>{i.r(d),i.d(d,{PurchaseModule:()=>C});var s=i(6895),p=i(2655),l=(()=>{return(t=l||(l={})).UnitedStates="United States",t.Canada="Canada",t.UnitedKingdom="United Kingdom",t.Australia="Australia",t.Germany="Germany",t.France="France",t.Spain="Spain",t.Italy="Italy",t.India="India",t.China="China",t.Japan="Japan",t.Brazil="Brazil",t.Mexico="Mexico",t.Russia="Russia",t.SouthAfrica="South Africa",t.Argentina="Argentina",t.Sweden="Sweden",t.Norway="Norway",t.NewZealand="New Zealand",t.Switzerland="Switzerland",t.Netherlands="Netherlands",t.Belgium="Belgium",t.Denmark="Denmark",t.Singapore="Singapore",t.SouthKorea="South Korea",l;var t})(),e=i(4650),r=i(433),g=i(5643);function f(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9),e._UZ(3,"img",10),e.qZA(),e.TgZ(4,"div",11)(5,"h3"),e._uU(6),e.qZA(),e.TgZ(7,"h2",12),e._uU(8),e.qZA(),e.TgZ(9,"a",13),e.NdJ("click",function(){e.CHM(o);const a=e.oxw(),m=e.MAs(8);return e.KtG(a.openModal(m))}),e._uU(10,"Book Demo"),e.qZA()()()()}if(2&t){const o=n.$implicit;e.xp6(6),e.Oqu(o.name),e.xp6(2),e.hij("$ ",o.price,"")}}function u(t,n){if(1&t&&(e.TgZ(0,"div",46),e._UZ(1,"input",47),e.TgZ(2,"label",48),e._uU(3),e.qZA()()),2&t){const o=n.$implicit;e.xp6(1),e.Q6J("formControlName",o.toLowerCase()),e.xp6(2),e.Oqu(o)}}function _(t,n){if(1&t&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function h(t,n){if(1&t&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function b(t,n){if(1&t&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function Z(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",14)(1,"h5",15),e._uU(2,"Feedback Form"),e.qZA(),e.TgZ(3,"button",16),e.NdJ("click",function(){const m=e.CHM(o).$implicit;return e.KtG(m.dismiss("Cross click"))}),e.qZA()(),e.TgZ(4,"div",17)(5,"form",18),e.NdJ("ngSubmit",function(){e.CHM(o);const a=e.oxw();return e.KtG(a.onSubmit())}),e.TgZ(6,"div",19)(7,"div",20)(8,"label",21),e._uU(9,"First Name"),e.qZA(),e._UZ(10,"input",22),e.qZA(),e.TgZ(11,"div",20)(12,"label",23),e._uU(13,"Last Name"),e.qZA(),e._UZ(14,"input",24),e.qZA()(),e.TgZ(15,"div",25),e.YNc(16,u,4,2,"div",26),e.qZA(),e.TgZ(17,"div",19)(18,"div",20)(19,"label",27),e._uU(20,"Company Name"),e.qZA(),e._UZ(21,"input",28),e.qZA(),e.TgZ(22,"div",20)(23,"label",29),e._uU(24,"Barn Name"),e.qZA(),e._UZ(25,"input",30),e.qZA()(),e.TgZ(26,"div",19)(27,"div",20)(28,"label",31),e._uU(29,"Email"),e.qZA(),e._UZ(30,"input",32),e.qZA(),e.TgZ(31,"div",20)(32,"label",33),e._uU(33,"Phone"),e.qZA(),e.TgZ(34,"div",34)(35,"select",35),e.YNc(36,_,2,2,"option",36),e.qZA(),e._UZ(37,"input",37),e.qZA()()(),e.TgZ(38,"div",25)(39,"label",38),e._uU(40,"Country"),e.qZA(),e.TgZ(41,"select",39),e.YNc(42,h,2,2,"option",36),e.qZA()(),e.TgZ(43,"div",25)(44,"label",40),e._uU(45,"Billing Address"),e.qZA(),e._UZ(46,"input",41),e.qZA(),e.TgZ(47,"div",25)(48,"label",42),e._uU(49,"How did you hear about Equstech?"),e.qZA(),e.TgZ(50,"select",43),e.YNc(51,b,2,2,"option",36),e.qZA()(),e.TgZ(52,"div",44)(53,"button",45),e._uU(54,"Submit"),e.qZA()()()()}if(2&t){const o=e.oxw();e.xp6(5),e.Q6J("formGroup",o.feedBackForm),e.xp6(11),e.Q6J("ngForOf",o.ownerOptions),e.xp6(20),e.Q6J("ngForOf",o.countryCodes),e.xp6(6),e.Q6J("ngForOf",o.countries),e.xp6(9),e.Q6J("ngForOf",o.hearAboutOptions)}}let x=(()=>{class t{constructor(o,c,a){this.renderer=o,this.fb=c,this.modalService=a,this.ownerOptions=["Owner","Rider","Vet","Groom","Vendor","Farrier"],this.countries=Object.values(l),this.countryCodes=["+1","+44","+91","+92","+81","+49","+33","+61"],this.hearAboutOptions=["Facebook Ads","A Friend Told Me","Saw It on Facebook","Saw It on Instagram","Search Engine","Other"],this.productCard=[{image:"",name:"K2 Product",price:"40.80"},{image:"",name:"K2 Product",price:"40.80"},{image:"",name:"K2 Product",price:"40.80"}]}ngOnInit(){this.initializeForm()}initializeForm(){this.feedBackForm=this.fb.group({firstName:[""],lastName:[""],owner:[!1],rider:[!1],vet:[!1],groom:[!1],vendor:[!1],farrier:[!1],companyName:[""],email:[""],barnName:[""],countryCode:["+1"],phone:[""],country:[""],billingAddress:[""],hearAbout:[""]})}openModal(o){this.modalService.open(o,{size:"lg"});const a=document.querySelector(".modal-content");a&&this.renderer.setStyle(a,"background","linear-gradient(279deg, rgb(30 30 30) 0.11%, rgba(7, 7, 7, 0.98) 99.89%)")}onSubmit(){this.feedBackForm.valid&&console.log(this.feedBackForm.value)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(e.Qsj),e.Y36(r.qu),e.Y36(g.FF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-purchase"]],decls:9,vars:1,consts:[[1,"section"],[1,"container"],[1,"header-purchase"],[1,"text-primary"],[1,"row"],["class","col-4",4,"ngFor","ngForOf"],["content",""],[1,"col-4"],[1,"card"],[1,"imgBox"],["src","./assets/images/product.png","alt","corsair",1,"mouse"],[1,"contentBox"],[1,"price"],[1,"buy",3,"click"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col"],["for","firstName",1,"form-label"],["type","text","id","firstName","formControlName","firstName",1,"form-control"],["for","lastName",1,"form-label"],["type","text","id","lastName","formControlName","lastName",1,"form-control"],[1,"mb-3"],["class","form-check form-check-inline",4,"ngFor","ngForOf"],["for","companyName",1,"form-label"],["type","text","id","companyName","formControlName","companyName",1,"form-control"],["for","barnName",1,"form-label"],["type","text","id","barnName","formControlName","barnName",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email",1,"form-control"],["for","phone",1,"form-label"],[1,"input-group"],["formControlName","countryCode",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["type","text","id","phone","formControlName","phone",1,"form-control","w-75"],["for","country",1,"form-label"],["id","country","formControlName","country",1,"form-select"],["for","billingAddress",1,"form-label"],["type","text","id","billingAddress","formControlName","billingAddress",1,"form-control"],["for","hearAbout",1,"form-label"],["id","hearAbout","formControlName","hearAbout",1,"form-select"],[1,"d-grid","mt-3"],["type","submit",1,"btn","btn-primary"],[1,"form-check","form-check-inline"],["type","checkbox",1,"form-check-input",3,"formControlName"],[1,"form-check-label"],[3,"value"]],template:function(o,c){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Purchase"),e.qZA()(),e.TgZ(5,"div",4),e.YNc(6,f,11,2,"div",5),e.qZA()()(),e.YNc(7,Z,55,5,"ng-template",null,6,e.W1O)),2&o&&(e.xp6(6),e.Q6J("ngForOf",c.productCard))},dependencies:[s.sg,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.sg,r.u],styles:['.header-purchase[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;padding-bottom:20px;text-align:center}.card[_ngcontent-%COMP%]{position:relative;width:320px;height:480px;background:#191919;border-radius:20px;overflow:hidden}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-50%;width:100%;height:100%;background:#ff8927;transform:skewY(345deg);transition:.5s}.card[_ngcontent-%COMP%]:hover:before{top:-70%;transform:skewY(390deg)}.card[_ngcontent-%COMP%]:after{content:"EQUSTECH";position:absolute;bottom:0;left:0;font-weight:600;font-size:6em;color:#0000001a}.card[_ngcontent-%COMP%]   .imgBox[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;justify-content:center;align-items:center;padding-top:20px;z-index:1}.card[_ngcontent-%COMP%]   .imgBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;transition:.5s}.card[_ngcontent-%COMP%]   .contentBox[_ngcontent-%COMP%]{position:relative;padding:20px;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:2}.card[_ngcontent-%COMP%]   .contentBox[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:#fff;font-weight:500;text-transform:uppercase;letter-spacing:1px}.card[_ngcontent-%COMP%]   .contentBox[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:24px;color:#fff;font-weight:600;letter-spacing:1px}.card[_ngcontent-%COMP%]   .contentBox[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]{position:relative;top:100px;opacity:0;padding:10px 30px;margin-top:15px;color:#fff;text-decoration:none;background:#ff8927;border-radius:30px;text-transform:uppercase;letter-spacing:1px;transition:.5s}.card[_ngcontent-%COMP%]:hover   .contentBox[_ngcontent-%COMP%]   .buy[_ngcontent-%COMP%]{top:0;opacity:1}.mouse[_ngcontent-%COMP%]{height:300px;width:auto}label[_ngcontent-%COMP%]{margin:0}.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{font-size:1rem;padding:.5rem 1rem;background:linear-gradient(312deg,rgb(113,117,121) 5%,#000000 95%);box-shadow:0 0 2px #00000020;border-radius:15px;border:1px solid #6c757d;color:#fff}.form-select[_ngcontent-%COMP%]{--bs-form-select-bg-img: url(/assets/images/down-arrow.svg)}.form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:#000;color:#fff}.modal-content[_ngcontent-%COMP%]{background-color:transparent!important;background:linear-gradient(226deg,rgba(106,104,104,.842) .11%,rgba(7,7,7,.98) 99.89%)}']}),t})(),C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,r.u5,r.UX,p.Bz.forChild([{path:"",component:x}])]}),t})()}}]);