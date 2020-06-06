function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,i,e){return i&&_defineProperties(t.prototype,i),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fOOd:function(t,i,e){"use strict";e.r(i);var s,n,c,a,r=e("PCNd"),o=e("tyNb"),l=e("lJxs"),d=e("fXoL"),u=e("7e2C"),b=function(){return["/about"]},p=((a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=d.Ab({type:a,selectors:[["dev-bio"]],decls:10,vars:2,consts:[[1,"bio-container"],[1,"bio-link",3,"routerLink"],[1,"bio-avatar"],[1,"bio-avatar-inner"],["src","assets/img/avatar.jpg",1,"author-avatar"],[1,"bio-text"],["href","https://www.corbion.com/","target","_blank","rel","noopener"]],template:function(t,i){1&t&&(d.Lb(0,"div",0),d.Lb(1,"a",1),d.Lb(2,"div",2),d.Lb(3,"div",3),d.Hb(4,"img",4),d.Kb(),d.Kb(),d.Lb(5,"p",5),d.ic(6," Atualmente trabalho como analista na "),d.Lb(7,"a",6),d.ic(8,"Corbion"),d.Kb(),d.ic(9,". Eu desenvolvo principalmente no front-end e sou f\xe3 de Angular e CSS. Aspirante a cientista de dados e interessado em Python. "),d.Kb(),d.Kb(),d.Kb()),2&t&&(d.wb(1),d.ac("routerLink",d.bc(1,b)))},directives:[o.d],encapsulation:2}),a),f=((c=function(){function t(){_classCallCheck(this,t),this.fill="var(--primary)"}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=d.Ab({type:c,selectors:[["dev-tiles"]],inputs:{fill:"fill"},decls:2,vars:1,consts:[["width","26","height","26","viewBox","0 0 26 26","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","tiles","d","M4.33337 13.8424H12.0371V5.4165H4.33337V13.8424ZM4.33337 20.5832H12.0371V15.5276H4.33337V20.5832ZM13.963 20.5832H21.6667V12.1572H13.963V20.5832ZM13.963 5.4165V10.4721H21.6667V5.4165H13.963Z"]],template:function(t,i){1&t&&(d.Tb(),d.Lb(0,"svg",0),d.Hb(1,"path",1),d.Kb()),2&t&&(d.wb(1),d.xb("fill",i.fill))},encapsulation:2}),c),h=((n=function(){function t(){_classCallCheck(this,t),this.fill="var(--grey)"}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=d.Ab({type:n,selectors:[["dev-rows"]],inputs:{fill:"fill"},decls:2,vars:1,consts:[["width","26","height","26","viewBox","0 0 26 26","fill","none","xmlns","http://www.w3.org/2000/svg"],["id","rows","d","M4.33331 15.1665H8.41174V10.8332H4.33331V15.1665ZM4.33331 20.5832H8.41174V16.2498H4.33331V20.5832ZM4.33331 9.74984H8.41174V5.4165H4.33331V9.74984ZM9.43135 15.1665H21.6666V10.8332H9.43135V15.1665ZM9.43135 20.5832H21.6666V16.2498H9.43135V20.5832ZM9.43135 5.4165V9.74984H21.6666V5.4165H9.43135Z"]],template:function(t,i){1&t&&(d.Tb(),d.Lb(0,"svg",0),d.Hb(1,"path",1),d.Kb()),2&t&&(d.wb(1),d.xb("fill",i.fill))},encapsulation:2}),n),v=((s=function(){function t(){_classCallCheck(this,t),this.clickedGrid=new d.n,this.clickedRows=new d.n,this.isGridClicked=!0}return _createClass(t,[{key:"onClickGrid",value:function(){this.clickedGrid.emit(),this.isGridClicked=!0}},{key:"onClickRows",value:function(){this.clickedRows.emit(),this.isGridClicked=!1}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=d.Ab({type:s,selectors:[["dev-hero"]],outputs:{clickedGrid:"clickedGrid",clickedRows:"clickedRows"},decls:11,vars:2,consts:[[1,"section"],[1,"heading-container"],[1,"hero-heading"],[1,"subheading-container"],[1,"grid-controls-container"],[1,"grid-button",3,"click"],[3,"fill"]],template:function(t,i){1&t&&(d.Lb(0,"section",0),d.Lb(1,"div",1),d.Lb(2,"h1",2),d.ic(3," Oi! Sou Patrick Lima - um desenvolvedor de sistemas que trabalha na intera\xe7\xe3o entre pessoas e software. "),d.Kb(),d.Kb(),d.Lb(4,"div",3),d.Hb(5,"dev-bio"),d.Lb(6,"div",4),d.Lb(7,"button",5),d.Rb("click",(function(t){return i.onClickGrid()})),d.Hb(8,"dev-tiles",6),d.Kb(),d.Lb(9,"button",5),d.Rb("click",(function(t){return i.onClickRows()})),d.Hb(10,"dev-rows",6),d.Kb(),d.Kb(),d.Kb(),d.Kb()),2&t&&(d.wb(8),d.ac("fill",i.isGridClicked?"var(--primary)":"var(--grey)"),d.wb(2),d.ac("fill",i.isGridClicked?"var(--grey)":"var(--primary)"))},directives:[p,f,h],encapsulation:2}),s),m=e("ofXK"),w=e("miTN"),k=function(t){return[t]};function L(t,i){if(1&t&&(d.Jb(0),d.Lb(1,"a",1),d.Lb(2,"div",2),d.Lb(3,"div",3),d.Hb(4,"img",4),d.Kb(),d.Lb(5,"div"),d.Lb(6,"h2",5),d.ic(7),d.Kb(),d.Lb(8,"p",6),d.ic(9),d.Kb(),d.Lb(10,"div",7),d.ic(11),d.Vb(12,"date"),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Ib()),2&t){var e=d.Ub();d.wb(1),d.ac("routerLink",d.cc(9,k,e.post.route)),d.wb(3),d.ac("src",e.post.hero,d.fc),d.wb(3),d.kc(" ",e.post.title," "),d.wb(2),d.kc(" ",e.post.description," "),d.wb(2),d.lc("",d.Xb(12,6,e.post.date,"dd/MM/yyyy")," \u2022 ",e.post.timeToRead," min de leitura")}}var g,y=((g=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=d.Ab({type:g,selectors:[["dev-list-item"]],inputs:{post:"post"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"article-link",3,"routerLink"],[1,"list-item-row"],[1,"image-container"],[1,"article-image",3,"src"],[1,"article-title"],[1,"article-excerpt"],[1,"article-metadata"]],template:function(t,i){1&t&&d.hc(0,L,13,11,"ng-container",0),2&t&&d.ac("ngIf",i.post)},directives:[m.k,o.d],pipes:[m.e],encapsulation:2}),g),C=function(t){return{"grid-template-columns":t}};function H(t,i){if(1&t&&(d.Lb(0,"div",2),d.Hb(1,"dev-list-item",3),d.Hb(2,"dev-list-item",3),d.Kb()),2&t){var e=i.$implicit,s=i.odd,n=d.Ub();d.yb(n.isList?"post-row":"post-grid"),d.ac("ngStyle",d.cc(5,C,n.isList?"":s?n.wide:n.narrow)),d.wb(1),d.ac("post",e[0]),d.wb(1),d.ac("post",e[1])}}var K,_,V,P,M=((_=function t(){_classCallCheck(this,t),this.isList=!1,this.narrow="1fr 457px",this.wide="457px 1fr"}).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=d.Ab({type:_,selectors:[["dev-list"]],inputs:{pairPosts:"pairPosts",isList:"isList"},decls:3,vars:1,consts:[["id","articlesList",1,"articles-list-container"],[3,"class","ngStyle",4,"ngFor","ngForOf"],[3,"ngStyle"],[3,"post"]],template:function(t,i){1&t&&(d.Lb(0,"div",0),d.hc(1,H,3,7,"div",1),d.Kb(),d.Hb(2,"dev-paginator")),2&t&&(d.wb(1),d.ac("ngForOf",i.pairPosts))},directives:[m.j,w.a,m.l,y],encapsulation:2}),_),R=((K=function(){function t(){_classCallCheck(this,t),this.isList=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||K)},K.\u0275cmp=d.Ab({type:K,selectors:[["dev-articles"]],inputs:{pairPosts:"pairPosts",isList:"isList"},decls:4,vars:2,consts:[[1,"section"],[3,"pairPosts","isList"],[1,"articles-paginator"],[1,"articles-gradient"]],template:function(t,i){1&t&&(d.Lb(0,"section",0),d.Hb(1,"dev-list",1),d.Hb(2,"div",2),d.Kb(),d.Hb(3,"div",3)),2&t&&(d.wb(1),d.ac("pairPosts",i.pairPosts)("isList",i.isList))},directives:[M],encapsulation:2}),K),G=[{path:"",component:(V=function(){function t(i){_classCallCheck(this,t),this._posts=i,this.isList=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.pairPosts$=this._posts.posts$.pipe(Object(l.a)((function(t){return t.reduce((function(t,i,e,s){return e%2==0&&t.push(s.slice(e,e+2)),t}),[])}))),this.listRemoveWidth=window.matchMedia("(max-width: 735px)"),this.listAddWidth=window.matchMedia("(min-width: 735px)")}},{key:"resize",value:function(t){this.adjustListAtMobile()}},{key:"adjustListAtMobile",value:function(){this.listRemoveWidth.matches?document.getElementById("articlesList").classList.remove("articles-list-container-alt"):this.listAddWidth.matches&&this.isList&&document.getElementById("articlesList").classList.add("articles-list-container-alt")}},{key:"makeGrid",value:function(){document.getElementById("articlesList").classList.remove("articles-list-container-alt"),this.isList=!1}},{key:"makeRows",value:function(){document.getElementById("articlesList").classList.add("articles-list-container-alt"),this.isList=!0}}]),t}(),V.\u0275fac=function(t){return new(t||V)(d.Gb(u.a))},V.\u0275cmp=d.Ab({type:V,selectors:[["dev-home"]],hostBindings:function(t,i){1&t&&d.Rb("resize",(function(t){return i.resize(t)}),!1,d.ec)},decls:3,vars:4,consts:[[3,"clickedGrid","clickedRows"],[3,"pairPosts","isList"]],template:function(t,i){1&t&&(d.Lb(0,"dev-hero",0),d.Rb("clickedGrid",(function(t){return i.makeGrid()}))("clickedRows",(function(t){return i.makeRows()})),d.Kb(),d.Hb(1,"dev-articles",1),d.Vb(2,"async")),2&t&&(d.wb(1),d.ac("pairPosts",d.Wb(2,2,i.pairPosts$))("isList",i.isList))},directives:[v,R],pipes:[m.b],encapsulation:2}),V)}],A=((P=function t(){_classCallCheck(this,t)}).\u0275mod=d.Eb({type:P}),P.\u0275inj=d.Db({factory:function(t){return new(t||P)},imports:[[o.e.forChild(G)],o.e]}),P);e.d(i,"HomeModule",(function(){return I}));var x,I=((x=function t(){_classCallCheck(this,t)}).\u0275mod=d.Eb({type:x}),x.\u0275inj=d.Db({factory:function(t){return new(t||x)},imports:[[r.a,A]]}),x)}}]);