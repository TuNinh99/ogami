(self["webpackChunkogami"]=self["webpackChunkogami"]||[]).push([[698],{1755:function(t,e,l){"use strict";l.d(e,{Z:function(){return c}});var n=l(6252),a={class:"breadcumbs"},i=(0,n.Wm)("div",{class:"breadcumbs__container container"}," Home > Shop ",-1);function s(t,e,l,s,o,c){return(0,n.wg)(),(0,n.j4)("div",a,[i])}var o={name:"breadcumbs"};o.render=s;var c=o},1782:function(t,e,l){"use strict";l.d(e,{Z:function(){return f}});var n=l(6252),a={class:"cart__container-step row"},i={class:"col-12 col-sm-6 col-md-4 item"},s=(0,n.Wm)("div",{class:"step__block-content"},[(0,n.Wm)("h2",null,"Shopping Cart"),(0,n.Wm)("span",null,"01")],-1),o={class:"col-12 col-sm-6 col-md-4 item"},c=(0,n.Wm)("div",{class:"step__block-content"},[(0,n.Wm)("h2",null,"checkout"),(0,n.Wm)("span",null,"02")],-1),r={class:"col-12 col-sm-6 col-md-4 item"},u=(0,n.Wm)("div",{class:"step__block-content"},[(0,n.Wm)("h2",null,"completed"),(0,n.Wm)("span",null,"03")],-1);function m(t,e,l,m,d,f){return(0,n.wg)(),(0,n.j4)("div",a,[(0,n.Wm)("div",i,[(0,n.Wm)("div",{class:{step__block:!0,active:0===this.$store.state.stepActive}},[s],2)]),(0,n.Wm)("div",o,[(0,n.Wm)("div",{class:{step__block:!0,active:1===this.$store.state.stepActive}},[c],2)]),(0,n.Wm)("div",r,[(0,n.Wm)("div",{class:{step__block:!0,active:2===this.$store.state.stepActive}},[u],2)])])}var d={name:"step-block"};d.render=m;var f=d},9088:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return Y}});l(2479),l(8309),l(6977);var n=l(6252),a=l(9963),i=l(3577),s={class:"cart"},o={class:"cart__container container"},c={key:0,class:"cart__container-table"},r=(0,n.Wm)("colgroup",null,[(0,n.Wm)("col",{style:{width:"9.375em"}}),(0,n.Wm)("col",{style:{width:"20%"}}),(0,n.Wm)("col",{style:{width:"20%"}}),(0,n.Wm)("col",{style:{width:"20%"}}),(0,n.Wm)("col",{style:{width:"20%"}})],-1),u=(0,n.Wm)("th",null,"image",-1),m=(0,n.Wm)("th",null,"product name",-1),d=(0,n.Wm)("th",null,"price",-1),f=(0,n.Wm)("th",null,"quantity",-1),h=(0,n.Wm)("th",null,"total",-1),p=(0,n.Wm)("i",{class:"fas fa-times"},null,-1),v={class:"table__img"},y={class:"table__img-wraper"},W={class:"table__name"},_={class:"table__price"},b=(0,n.Uk)(" US$ "),g={class:"table__quantity"},k={class:"table__quantity-selector"},C={class:"selector__number"},N={class:"selector__controller"},w={class:"table__total"},x=(0,n.Uk)(" US$ "),S={class:"table__remove"},q=(0,n.Wm)("i",{class:"fas fa-times"},null,-1),I={key:1,class:"cart__container-footer"},$=(0,n.Wm)("div",{class:"footer__coupon"},[(0,n.Wm)("input",{type:"text",placeholder:"Coupo Code"}),(0,n.Wm)("button",null,"apply coupon")],-1),M={class:"footer__update"},j={key:2,class:"cart__container-total"},A=(0,n.Wm)("h5",null,"cart total",-1),z=(0,n.Wm)("th",null,"subtotal",-1),O=(0,n.Wm)("tr",null,[(0,n.Wm)("th",null,"shipping"),(0,n.Wm)("td",null,"Free shipping")],-1),U={class:"total"},P=(0,n.Wm)("th",null,"total",-1),R=(0,n.Wm)("button",null,"Proceed to Checkout",-1),T={key:3,class:"cart__container-nothing"},J=(0,n.Wm)("i",{class:"far fa-list-alt"},null,-1),Z=(0,n.Wm)("h6",null,"Nothing in your cart",-1),F={class:"notify"},Q=(0,n.Wm)("i",{class:"fas fa-times"},null,-1),B={class:"notify__button"};function H(t,e,l,H,K,L){var E=(0,n.up)("breadcumbs"),Y=(0,n.up)("step-block"),D=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)("div",s,[(0,n.Wm)("div",o,[(0,n.Wm)(E),(0,n.Wm)(Y),0!==this.cart.length?((0,n.wg)(),(0,n.j4)("div",c,[(0,n.Wm)("table",null,[r,(0,n.Wm)("thead",null,[(0,n.Wm)("tr",null,[u,m,d,f,h,(0,n.Wm)("th",null,[(0,n.Wm)("button",{class:"remove__btn",onClick:e[1]||(e[1]=(0,a.iM)((function(){return L.removeAllCart&&L.removeAllCart.apply(L,arguments)}),["prevent"]))},[p])])])]),(0,n.Wm)("tbody",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(Object.values(this.cart),(function(t,e){return(0,n.wg)(),(0,n.j4)("tr",{key:e},[(0,n.Wm)("td",v,[(0,n.Wm)("div",y,[(0,n.Wm)("img",{src:t.image,alt:""},null,8,["src"])])]),(0,n.Wm)("td",W,(0,i.zw)(t.name),1),(0,n.Wm)("td",_,[(0,n.Wm)("span",null,(0,i.zw)(t.price),1),b]),(0,n.Wm)("td",g,[(0,n.Wm)("div",k,[(0,n.Wm)("div",C,(0,i.zw)(t.quantity),1),(0,n.Wm)("div",N,[(0,n.Wm)("button",{class:{"selector__controller-minus":!0,show:t.quantity<=1},disabled:t.quantity<=1,onClick:(0,a.iM)((function(e){return t.quantity--}),["prevent"])}," - ",10,["disabled","onClick"]),(0,n.Wm)("button",{class:"selector__controller-plus",onClick:(0,a.iM)((function(e){return t.quantity++}),["prevent"])}," + ",8,["onClick"])])])]),(0,n.Wm)("td",w,[(0,n.Wm)("span",null,(0,i.zw)((t.price*t.quantity).toFixed(2)),1),x]),(0,n.Wm)("td",S,[(0,n.Wm)("button",{class:"remove__btn",onClick:(0,a.iM)((function(t){return L.removeItem(e)}),["prevent"])},[q],8,["onClick"])])])})),128))])])])):(0,n.ry)("",!0),0!==this.cart.length?((0,n.wg)(),(0,n.j4)("div",I,[$,(0,n.Wm)("div",M,[(0,n.Wm)("button",{class:"footer__update-btn",onClick:e[2]||(e[2]=(0,a.iM)((function(){return L.updateQuantity&&L.updateQuantity.apply(L,arguments)}),["prevent"]))}," update cart ")])])):(0,n.ry)("",!0),0!==this.cart.length?((0,n.wg)(),(0,n.j4)("div",j,[A,(0,n.Wm)("table",null,[(0,n.Wm)("tbody",null,[(0,n.Wm)("tr",null,[z,(0,n.Wm)("td",null,(0,i.zw)(this.$store.state.totalPay)+" US$",1)]),O,(0,n.Wm)("tr",U,[P,(0,n.Wm)("td",null,(0,i.zw)(this.$store.state.totalPay)+" US$",1)])])]),(0,n.Wm)(D,{to:{name:"checkout"}},{default:(0,n.w5)((function(){return[R]})),_:1})])):((0,n.wg)(),(0,n.j4)("div",T,[J,Z]))]),(0,n.Wm)("div",{class:{model:!0,enable:this.stateNotify}},[(0,n.Wm)("div",F,[(0,n.Wm)("p",null,(0,i.zw)(this.contentNotify),1),(0,n.Wm)("div",{class:"notify__close",onClick:e[3]||(e[3]=(0,a.iM)((function(){return L.cancelNotify&&L.cancelNotify.apply(L,arguments)}),["prevent"]))},[Q]),(0,n.Wm)("div",B,[(0,n.Wm)("button",{class:"notify__button-cancel",onClick:e[4]||(e[4]=(0,a.iM)((function(){return L.cancelNotify&&L.cancelNotify.apply(L,arguments)}),["prevent"]))}," Cancel "),(0,n.Wm)("button",{class:"notify__button-ok",onClick:e[5]||(e[5]=(0,a.iM)((function(){return L.removeItemCart&&L.removeItemCart.apply(L,arguments)}),["prevent"]))}," OK ")])])],2),(0,n.Wm)("div",{class:{layer:!0,enable:this.stateNotify},onClick:e[6]||(e[6]=(0,a.iM)((function(){return L.cancelNotify&&L.cancelNotify.apply(L,arguments)}),["prevent"]))},null,2)])}l(561),l(9653),l(1249),l(5827);var K=l(1755),L=l(1782),E={components:{Breadcumbs:K.Z,StepBlock:L.Z},data:function(){return{cart:null,quantity:null,total:[],stateNotify:!1,contentNotify:null,indexItemRemove:null}},name:"the-cart",methods:{removeAllCart:function(){this.contentNotify="Are you sure to all products from cart",this.indexItemRemove=null,this.stateNotify=!this.stateNotify,this.manipulateClass("add","body","fixed")},removeItem:function(t){this.contentNotify="Are you sure to remove this product from cart",this.indexItemRemove=t,this.stateNotify=!this.stateNotify,this.manipulateClass("add","body","fixed")},cancelNotify:function(){this.manipulateClass("remove","body","fixed"),this.stateNotify=!this.stateNotify},removeItemCart:function(){this.manipulateClass("remove","body","fixed"),this.stateNotify=!this.stateNotify,null===this.indexItemRemove?(this.cart.length=0,localStorage.setItem("cart",JSON.stringify(this.cart)),this.$store.state.totalPay=0):(this.cart.splice(this.indexItemRemove,1),localStorage.setItem("cart",JSON.stringify(this.cart)),this.$store.state.amount=this.cart.length,this.caculateTotal(this.cart))},updateQuantity:function(){for(var t=[],e=Object.values(this.cart),l=document.querySelectorAll(".selector__number"),n=0;n<l.length;n++)t.push(Number(l[n].innerText));t.map((function(t,l){e[l].quantity!==t&&(e[l].quantity=t)})),this.caculateTotal(e),localStorage.setItem("cart",JSON.stringify(e))},caculateTotal:function(t){var e=t.reduce((function(t,e){return t+=Number(e.quantity)*Number(e.price),t}),0);this.$store.state.totalPay=e.toFixed(2)},manipulateClass:function(t,e,l){var n=document.querySelector(e);"add"===t?n.classList.add(l):n.classList.remove(l)}},created:function(){this.$store.state.stepActive,this.cart=JSON.parse(localStorage.getItem("cart"))}};E.render=H;var Y=E},6135:function(t,e,l){"use strict";var n=l(7593),a=l(3070),i=l(9114);t.exports=function(t,e,l){var s=n(e);s in t?a.f(t,s,i(0,l)):t[s]=l}},561:function(t,e,l){"use strict";var n=l(2109),a=l(1400),i=l(9958),s=l(7466),o=l(7908),c=l(5417),r=l(6135),u=l(1194),m=u("splice"),d=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var l,n,u,m,v,y,W=o(this),_=s(W.length),b=a(t,_),g=arguments.length;if(0===g?l=n=0:1===g?(l=0,n=_-b):(l=g-2,n=f(d(i(e),0),_-b)),_+l-n>h)throw TypeError(p);for(u=c(W,n),m=0;m<n;m++)v=b+m,v in W&&r(u,m,W[v]);if(u.length=n,l<n){for(m=b;m<_-n;m++)v=m+n,y=m+l,v in W?W[y]=W[v]:delete W[y];for(m=_;m>_-n+l;m--)delete W[m-1]}else if(l>n)for(m=_-n;m>b;m--)v=m+n-1,y=m+l-1,v in W?W[y]=W[v]:delete W[y];for(m=0;m<l;m++)W[m+b]=arguments[m+2];return W.length=_-n+l,u}})}}]);
//# sourceMappingURL=TheCart.0574f1ec.js.map