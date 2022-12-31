"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[717],{3717:(j,m,i)=>{i.r(m),i.d(m,{ShopModule:()=>H});var p=i(9808),v=i(4466),c=i(5497);class h{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var t=i(4893),g=i(520),l=i(4004),d=i(9646),C=i(2340);class b{constructor(){this.data=[]}}let _=(()=>{class n{constructor(e){this.http=e,this.baseUrl=C.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new b,this.shopParams=new h,this.productCache=new Map}getProducts(e){!1===e&&(this.productCache=new Map),this.productCache.size>0&&!0===e&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")));let o=new g.LE;return 0!==this.shopParams.brandId&&(o=o.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(o=o.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(o=o.append("search",this.shopParams.search)),o=o.append("sort",this.shopParams.sort),o=o.append("pageIndex",this.shopParams.pageNumber.toString()),o=o.append("pageIndex",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:o}).pipe((0,l.U)(s=>(this.productCache.set(Object.values(this.shopParams).join("-"),s.body.data),this.pagination=s.body,this.pagination)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProduct(e){let o;return this.productCache.forEach(s=>{o=s.find(a=>a.id===e)}),o?(0,d.of)(o):this.http.get(this.baseUrl+"products/"+e)}getBrands(){return this.brands.length>0?(0,d.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,l.U)(e=>(this.brands=e,this.brands)))}getTypes(){return this.types.length>0?(0,d.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,l.U)(e=>(this.types=e,e)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=i(2382);function S(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1," Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Result"),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.hij("",e.totalCount," ")}}function x(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1," There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," results for this filter "),t.qZA())}let P=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"header"),t.YNc(1,S,8,3,"span",0),t.YNc(2,x,5,0,"span",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.totalCount&&o.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===o.totalCount))},directives:[p.O5],styles:[""]}),n})();var f=i(7556);let y=(()=>{class n{constructor(e){this.basketService=e}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","shadow-sm","h-100"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","me-2",3,"click"],["type","button",1,"btn","btn-primary","me-2",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"button",4),t.NdJ("click",function(){return o.addItemToBasket()}),t.qZA(),t.TgZ(5,"button",5),t._uU(6,"View"),t.qZA()()(),t.TgZ(7,"div",6)(8,"a",7)(9,"h6",8),t._uU(10),t.qZA()(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"currency"),t.qZA()()()),2&e&&(t.xp6(2),t.s9C("src",o.product.pictureUrl,t.LSH),t.s9C("alt",o.product.name),t.xp6(3),t.MGl("routerLink","/shop/",o.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",o.product.id,""),t.xp6(2),t.Oqu(o.product.name),t.xp6(2),t.Oqu(t.lcZ(13,6,o.product.price)))},directives:[c.rH,c.yS],pipes:[p.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s;-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s;-webkit-transition:all .5s;-moz-transition:all .5s;-ms-transition:all .5s;-o-transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px);-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translateX();-webkit-transform:translateX(20px);-moz-transform:translateX();-ms-transform:translateX();-o-transform:translateX()}"]}),n})();var T=i(2492);let Z=(()=>{class n{constructor(){this.pageChanged=new t.vpe}ngOnInit(){}onPagerChange(e){this.pageChanged.emit(e.page)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(e,o){1&e&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(a){return o.onPagerChange(a)}),t.qZA()),2&e&&t.Q6J("boundaryLinks",!0)("totalItems",o.totalCount)("ngModel",o.pageNumber)("itemsPerPage",o.pageSize)},directives:[T.Qt,u.JJ,u.On],styles:[""]}),n})();const w=["search"];function A(n,r){if(1&n&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&n){const e=r.$implicit,o=t.oxw(2);t.Q6J("selected",o.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function k(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"li",19),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onBrandSelected(a.id)}),t._uU(1),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw(2);t.ekj("active",e.id===o.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"li",19),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).onTypeSelected(a.id)}),t._uU(1),t.qZA()}if(2&n){const e=r.$implicit,o=t.oxw(2);t.ekj("active",e.id===o.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function I(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5",11),t._uU(2,"Sort"),t.qZA(),t.TgZ(3,"select",12),t.NdJ("change",function(s){return t.CHM(e),t.oxw().onSortSelected(s.target.value)}),t.YNc(4,A,2,3,"option",13),t.qZA(),t.TgZ(5,"h5",14),t._uU(6,"Brands"),t.qZA(),t.TgZ(7,"ul",15),t.YNc(8,k,2,4,"li",16),t.qZA(),t.TgZ(9,"h5",17),t._uU(10,"Types"),t.qZA(),t.TgZ(11,"ul",15),t.YNc(12,N,2,4,"li",16),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function O(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",21)(2,"input",22,23),t.NdJ("keyup.enter",function(){return t.CHM(e),t.oxw().onSearch()}),t.qZA()(),t.TgZ(4,"div",21)(5,"button",24),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSearch()}),t._uU(6,"Search"),t.qZA()(),t.TgZ(7,"div",21)(8,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().onReset()}),t._uU(9,"Reset"),t.qZA()()()}}function M(n,r){if(1&n&&(t.TgZ(0,"div",26),t._UZ(1,"app-product-item",27),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("product",e)}}function U(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",28)(1,"app-pager",29),t.NdJ("pageChanged",function(s){return t.CHM(e),t.oxw().onPageChanged(s)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("pageSize",e.shopParams.pageSize)("totalCount",e.totalCount)("pageNumber",e.shopParams.pageNumber)}}let q=(()=>{class n{constructor(e){this.shopService=e,this.sortOptions=[{name:"Alphabetic",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(e=!1){this.shopService.getProducts(e).subscribe(o=>{this.products=o.data,this.totalCount=o.count},o=>{console.log(o)})}getBrands(){this.shopService.getBrands().subscribe(e=>{this.brands=[{id:0,name:"All"},...e]},e=>{console.log(e)})}getTypes(){this.shopService.getTypes().subscribe(e=>{this.types=[{id:0,name:"All"},...e]},e=>{console.log(e)})}onBrandSelected(e){const o=this.shopService.getShopParams();o.brandId=e,o.pageNumber=1,this.shopService.setShopParams(o),this.getProducts()}onTypeSelected(e){const o=this.shopService.getShopParams();o.typeId=e,o.pageNumber=1,this.shopService.setShopParams(o),this.getTypes()}onSortSelected(e){const o=this.shopService.getShopParams();o.sort=e,this.shopService.setShopParams(o),this.getProducts()}onPageChanged(e){const o=this.shopService.getShopParams();o.pageNumber!==e&&(o.pageNumber=e,this.shopService.setShopParams(o),this.getProducts(!0))}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm.nativeElement.value,this.shopParams.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new h,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop"]],viewQuery:function(e,o){if(1&e&&t.Gf(w,5),2&e){let s;t.iGM(s=t.CRH())&&(o.searchTerm=s.first)}},decls:11,vars:7,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],["class","row mt-2",4,"ngIf"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],["class","col mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ms-3","mt-4","mb-3"],[1,"form-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"text-warning","ms-3","mt-2"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"text-warning","ms-3"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"row","mt-2"],[1,"col"],["type","text","placeholder","Search",1,"form-control",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-outline-success",3,"click"],[1,"col","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","totalCount","pageNumber","pageChanged"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2),t.YNc(3,I,13,3,"ng-container",3),t.qZA(),t.TgZ(4,"section",4)(5,"div",5),t._UZ(6,"app-paging-header",6),t.YNc(7,O,10,0,"div",7),t.qZA(),t.TgZ(8,"div",8),t.YNc(9,M,2,1,"div",9),t.qZA(),t.YNc(10,U,2,3,"div",10),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.types&&o.brands),t.xp6(3),t.Q6J("totalCount",o.totalCount)("pageSize",o.shopParams.pageSize)("pageNumber",o.shopParams.pageNumber),t.xp6(1),t.Q6J("ngIf",o.products),t.xp6(2),t.Q6J("ngForOf",o.products),t.xp6(1),t.Q6J("ngIf",o.totalCount>0))},directives:[p.O5,p.sg,u.YN,u.Kr,P,y,Z],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95620cc;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px}"]}),n})();var z=i(9957);function J(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6)(10,"i",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().decrementQuantity()}),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA(),t.TgZ(13,"i",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().incrementQuantity()}),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().addItemToBasket()}),t._uU(15,"Add to Cart"),t.qZA()()(),t.TgZ(16,"div",11)(17,"div",12)(18,"h4"),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.hij(" ",t.lcZ(8,6,e.product.price),""),t.xp6(5),t.Oqu(e.quantity),t.xp6(9),t.Oqu(e.product.description)}}const F=[{path:"",component:q},{path:":id",component:(()=>{class n{constructor(e,o,s,a){this.shopService=e,this.activateRoute=o,this.bcService=s,this.basketService=a,this.quantity=1,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get("id")).subscribe(e=>{this.product=e,this.bcService.set("@productDetails",e.name)},e=>{console.log(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(c.gz),t.Y36(z.pm),t.Y36(f.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ms-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ms-3"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,22,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.product))},directives:[p.O5],pipes:[p.H9],styles:[""]}),n})(),data:{breadcrumb:{alis:"productDetails"}}}];let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(F)],c.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,v.m,Q]]}),n})()}}]);