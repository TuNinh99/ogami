(self["webpackChunkogami"]=self["webpackChunkogami"]||[]).push([[326],{266:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return F}});var i=n(6252),r={class:"products"},s={class:"products__content"};function a(t,e,n,a,o,c){var l=(0,i.up)("the-product");return(0,i.wg)(),(0,i.j4)("div",r,[(0,i.Wm)("div",s,[(0,i.Wm)(l)])])}n(8309),n(6977),n(9653),n(2526),n(1817),n(1539),n(3948);var o=n(9963),c=n(3577),l={class:"product-item"},u={class:"wraper",style:{"margin-bottom":"1.75em"}},d={key:0,class:"product__container container",style:{border:"none"}},f={class:"product__container-images"},m={class:"images__main"},g={class:"images__slide"},h={class:"product__container-content",style:{"text-align":"left"}},v=(0,i.Wm)("div",{class:"content__delivery"},"Free delivery",-1),p={class:"content__main"},y={class:"content__main-price"},b={key:0},_={class:"price__rate"},w=(0,i.Wm)("i",{class:"fas fa-star"},null,-1),W={class:"content__main-quantity"},S={class:"quantity__controller"},k={class:"content__main-pay"},I=(0,i.Wm)("span",null," US$",-1),j={class:"content__btn"},O=(0,i.Wm)("button",{class:"content__btn-buy"},"buy now",-1),C=(0,i.uE)('<div class="content__share"><span class="content__share-title">Share link: </span><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-linkedin"></i></a><a href="#"><i class="fab fa-pinterest-p"></i></a></div>',1),q={key:1,class:"error"},$={class:"detail"},M={class:"detail__redirect"},N={class:"detail__content"},P={class:"detail__content-item show"},z={class:"detail__content-item"},A=(0,i.Wm)("p",null,"Nutrients in 100 grams",-1),L={class:"detail__content-item"};function E(t,e,n,r,s,a){var E=this;return(0,i.wg)(),(0,i.j4)("div",l,[(0,i.Wm)("div",u,[null!==this.$store.state.item?((0,i.wg)(),(0,i.j4)("div",d,[(0,i.Wm)("div",f,[(0,i.Wm)("div",m,[(0,i.Wm)("img",{src:a.getImagesItem()[this.slide_item],alt:""},null,8,["src"])]),(0,i.Wm)("div",g,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.getImagesItem(),(function(t,e){return(0,i.wg)(),(0,i.j4)("div",{class:{"images__slide-item":!0,show:0===e},key:e,onClick:(0,o.iM)((function(t){return a.handleShowImage(e)}),["prevent"])},[(0,i.Wm)("img",{src:t,alt:""},null,8,["src"])],10,["onClick"])})),128))])]),(0,i.Wm)("div",h,[(0,i.Wm)("h6",null,(0,c.zw)(a.getItem().type),1),(0,i.Wm)("h2",null,(0,c.zw)(a.getItem().name),1),(0,i.Wm)("p",null,(0,c.zw)(a.getItem().origin),1),v,(0,i.Wm)("div",p,[(0,i.Wm)("div",y,[(0,i.Wm)("del",null,[a.getItem().price!==a.getItem().sale?((0,i.wg)(),(0,i.j4)("span",b,(0,c.zw)(a.getItem().sale)+" US$",1)):(0,i.ry)("",!0)]),(0,i.Wm)("h5",null,[(0,i.Uk)((0,c.zw)(a.getItem().price)+" ",1),(0,i.Wm)("span",null,"US$ / "+(0,c.zw)(a.getItem().unit),1)]),(0,i.Wm)("ul",_,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(this.rate,(function(t,e){return(0,i.wg)(),(0,i.j4)("li",{class:{"price__rate-star":!0,active:E.rate[e]},key:e,onClick:(0,o.iM)((function(t){return a.handleRate(e)}),["prevent"])},[w],10,["onClick"])})),128))])]),(0,i.Wm)("div",W,[(0,i.Wm)("div",{class:"quantity__number",contenteditable:"true",onInput:e[1]||(e[1]=function(){return t.editNumber&&t.editNumber.apply(t,arguments)})},(0,c.zw)(this.quantity),33),(0,i.Wm)("div",S,[(0,i.Wm)("button",{class:{"quantity__controller-minus":!0,show:this.quantity<=1},disabled:this.quantity<=1,onClick:e[2]||(e[2]=(0,o.iM)((function(t){return E.quantity--}),["prevent"]))}," - ",10,["disabled"]),(0,i.Wm)("button",{class:"quantity__controller-plus",onClick:e[3]||(e[3]=(0,o.iM)((function(t){return E.quantity++}),["prevent"]))}," + ")])]),(0,i.Wm)("div",k,[(0,i.Uk)(" Total: "+(0,c.zw)((Number(a.getItem().price)*this.quantity+this.delivery).toFixed(2))+" ",1),I])]),(0,i.Wm)("div",j,[(0,i.Wm)("button",{class:"content__btn-card",onClick:e[4]||(e[4]=(0,o.iM)((function(){return a.handleAddCart&&a.handleAddCart.apply(a,arguments)}),["prevent"]))}," add to card "),O]),C])])):((0,i.wg)(),(0,i.j4)("div",q,"Dont't find your product"))]),(0,i.Wm)("div",$,[(0,i.Wm)("ul",M,[(0,i.Wm)("li",{class:"detail__redirect-tab active",onClick:e[5]||(e[5]=(0,o.iM)((function(t){return a.selectContent(0)}),["prevent"]))}," description "),(0,i.Wm)("li",{class:"detail__redirect-tab tab-center",onClick:e[6]||(e[6]=(0,o.iM)((function(t){return a.selectContent(1)}),["prevent"]))}," nutrition "),(0,i.Wm)("li",{class:"detail__redirect-tab",onClick:e[7]||(e[7]=(0,o.iM)((function(t){return a.selectContent(2)}),["prevent"]))}," review ")]),(0,i.Wm)("div",N,[(0,i.Wm)("div",P,(0,c.zw)(a.getItem().description),1),(0,i.Wm)("div",z,[A,(0,i.Wm)("table",null,[(0,i.Wm)("tbody",null,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.getNutrition().keys,(function(t,e){return(0,i.wg)(),(0,i.j4)("tr",{key:e},[(0,i.Wm)("td",null,(0,c.zw)(a.getNutrition().keys[e]),1),(0,i.Wm)("td",null,(0,c.zw)(a.getNutrition().values[e]),1)])})),128))])])]),(0,i.Wm)("div",L,(0,c.zw)(a.getItem().description),1)])])])}n(2479),n(7941),n(1249);var T={name:"the-product",data:function(){return{products:null,item:null,slide_item:0,quantity:1,delivery:0,images:[],rate:[!0,!0,!0,!0,!1]}},methods:{images_item:function(t){return Object.values(t.images)},handleRate:function(t){for(var e=0;e<this.rate.length;e++)this.rate[e]=e<=t},getItem:function(){return this.$store.state.item},getImagesItem:function(){return Object.values(this.$store.state.item.images)},getNutrition:function(){return{keys:Object.keys(this.getItem().nutrition||{}),values:Object.values(this.getItem().nutrition||{})}},handleShowImage:function(t){this.slide_item=t;for(var e=document.querySelectorAll(".images__slide-item"),n=0;n<e.length;n++)n===t?e[n].classList.add("show"):e[n].classList.remove("show")},selectContent:function(t){for(var e=document.querySelectorAll(".detail__redirect-tab"),n=document.querySelectorAll(".detail__content-item"),i=0;i<e.length;i++)i===t?(e[i].classList.add("active"),n[i].classList.add("show")):(e[i].classList.remove("active"),n[i].classList.remove("show"))},handleAddCart:function(){if(""===localStorage.getItem("cart")){var t=[];this.addCart(t)}else{var e=JSON.parse(localStorage.getItem("cart"));this.addCart(e)}},addCart:function(t){var e=this.$store.state.item,n=0;if(""!==localStorage.getItem("cart")){t.map((function(t){t.id!==e.id&&n++})),n===t.length?(t.push(this.inforProduct(e)),this.showMessage("Product added to cart")):this.showMessage("shopping cart is already"),this.$store.state.amount=t.length,console.log(this.$store.state.amount);var i=JSON.stringify(t);localStorage.setItem("cart",i)}},inforProduct:function(t){return{id:t.id,name:t.name,image:t.images.item1,price:t.price,quantity:this.quantity}},showMessage:function(t){var e=this;this.$store.state.message=t,this.$store.state.showMessage=!this.$store.state.showMessage,setTimeout((function(){e.$store.state.showMessage=!e.$store.state.showMessage}),2500)}}};T.render=E;var U=T,x={components:{TheProduct:U},name:"products"};x.render=a;var F=x},7235:function(t,e,n){var i=n(857),r=n(6656),s=n(6061),a=n(3070).f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||a(e,t,{value:s.f(t)})}},1156:function(t,e,n){var i=n(5656),r=n(8006).f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==s.call(t)?o(t):r(i(t))}},6061:function(t,e,n){var i=n(5112);e.f=i},7941:function(t,e,n){var i=n(2109),r=n(7908),s=n(1956),a=n(7293),o=a((function(){s(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return s(r(t))}})},1817:function(t,e,n){"use strict";var i=n(2109),r=n(9781),s=n(7854),a=n(6656),o=n(111),c=n(3070).f,l=n(9920),u=s.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var m=f.prototype=u.prototype;m.constructor=f;var g=m.toString,h="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=g.call(t);if(a(d,t))return"";var n=h?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},2526:function(t,e,n){"use strict";var i=n(2109),r=n(7854),s=n(5005),a=n(1913),o=n(9781),c=n(133),l=n(3307),u=n(7293),d=n(6656),f=n(3157),m=n(111),g=n(9670),h=n(7908),v=n(5656),p=n(7593),y=n(9114),b=n(30),_=n(1956),w=n(8006),W=n(1156),S=n(5181),k=n(1236),I=n(3070),j=n(5296),O=n(8880),C=n(1320),q=n(2309),$=n(6200),M=n(3501),N=n(9711),P=n(5112),z=n(6061),A=n(7235),L=n(8003),E=n(9909),T=n(2092).forEach,U=$("hidden"),x="Symbol",F="prototype",J=P("toPrimitive"),H=E.set,K=E.getterFor(x),Y=Object[F],D=r.Symbol,R=s("JSON","stringify"),Q=k.f,B=I.f,G=W.f,V=j.f,X=q("symbols"),Z=q("op-symbols"),tt=q("string-to-symbol-registry"),et=q("symbol-to-string-registry"),nt=q("wks"),it=r.QObject,rt=!it||!it[F]||!it[F].findChild,st=o&&u((function(){return 7!=b(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=Q(Y,e);i&&delete Y[e],B(t,e,n),i&&t!==Y&&B(Y,e,i)}:B,at=function(t,e){var n=X[t]=b(D[F]);return H(n,{type:x,tag:t,description:e}),o||(n.description=e),n},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof D},ct=function(t,e,n){t===Y&&ct(Z,e,n),g(t);var i=p(e,!0);return g(n),d(X,i)?(n.enumerable?(d(t,U)&&t[U][i]&&(t[U][i]=!1),n=b(n,{enumerable:y(0,!1)})):(d(t,U)||B(t,U,y(1,{})),t[U][i]=!0),st(t,i,n)):B(t,i,n)},lt=function(t,e){g(t);var n=v(e),i=_(n).concat(gt(n));return T(i,(function(e){o&&!dt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?b(t):lt(b(t),e)},dt=function(t){var e=p(t,!0),n=V.call(this,e);return!(this===Y&&d(X,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(X,e)||d(this,U)&&this[U][e])||n)},ft=function(t,e){var n=v(t),i=p(e,!0);if(n!==Y||!d(X,i)||d(Z,i)){var r=Q(n,i);return!r||!d(X,i)||d(n,U)&&n[U][i]||(r.enumerable=!0),r}},mt=function(t){var e=G(v(t)),n=[];return T(e,(function(t){d(X,t)||d(M,t)||n.push(t)})),n},gt=function(t){var e=t===Y,n=G(e?Z:v(t)),i=[];return T(n,(function(t){!d(X,t)||e&&!d(Y,t)||i.push(X[t])})),i};if(c||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===Y&&n.call(Z,t),d(this,U)&&d(this[U],e)&&(this[U][e]=!1),st(this,e,y(1,t))};return o&&rt&&st(Y,e,{configurable:!0,set:n}),at(e,t)},C(D[F],"toString",(function(){return K(this).tag})),C(D,"withoutSetter",(function(t){return at(N(t),t)})),j.f=dt,I.f=ct,k.f=ft,w.f=W.f=mt,S.f=gt,z.f=function(t){return at(P(t),t)},o&&(B(D[F],"description",{configurable:!0,get:function(){return K(this).description}}),a||C(Y,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:D}),T(_(nt),(function(t){A(t)})),i({target:x,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=D(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:gt}),i({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),R){var ht=!c||u((function(){var t=D();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}));i({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var i,r=[t],s=1;while(arguments.length>s)r.push(arguments[s++]);if(i=e,(m(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),r[1]=e,R.apply(null,r)}})}D[F][J]||O(D[F],J,D[F].valueOf),L(D,x),M[U]=!0}}]);
//# sourceMappingURL=Products.8e695bea.js.map