function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DZG2:function(t,e,n){"use strict";n.r(e);var o,i,r,s=n("ofXK"),a=n("tyNb"),c=n("sbAP"),l=n("lJxs"),p=n("fXoL"),d=n("Y+9w"),b=["progressBar"],g=["progressIndicator"],h=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.progressBarEl=this.progressBar.nativeElement,this.scrollProgressEl=this.scrollProgress.nativeElement,this.articleNext=document.getElementById("articleNext")?document.getElementById("articleNext").offsetHeight:0,this.bottomOffset=(this.articleNext+150+250)/document.body.scrollHeight*100,this.bottomOffset+=1.1*this.bottomOffset}},{key:"scroll",value:function(t){this.updateProgress()}},{key:"updateProgress",value:function(){var t=this,e=window.pageYOffset/document.body.scrollHeight*(100+this.bottomOffset);this.scrollProgressEl.style.transform="translateY("+e+"%)",e>100?(this.progressBarEl.style.animationName="progress-fade-out",setTimeout((function(){t.progressBarEl.style.opacity="0"}),500)):(this.progressBarEl.style.animationName="progress-fade-in",setTimeout((function(){t.progressBarEl.style.opacity="1"}),500))}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=p.Ab({type:r,selectors:[["dev-progress"]],viewQuery:function(t,e){var n;1&t&&(p.ic(b,!0),p.ic(g,!0)),2&t&&(p.ec(n=p.Sb())&&(e.progressBar=n.first),p.ec(n=p.Sb())&&(e.scrollProgress=n.first))},hostBindings:function(t,e){1&t&&p.Rb("scroll",(function(t){return e.scroll(t)}),!1,p.fc)},decls:9,vars:0,consts:[[1,"aside-container"],["progressBar",""],[1,"aside-align"],[1,"overlap-container"],["tabIndex","{-1}",1,"progress-container"],["aria-hidden","true",1,"track-line"],[1,"progress-line"],["progressIndicator",""]],template:function(t,e){1&t&&(p.Lb(0,"aside",0,1),p.Lb(2,"div",2),p.Lb(3,"div"),p.Hb(4,"div",3),p.Kb(),p.Kb(),p.Lb(5,"div",4),p.Lb(6,"div",5),p.Hb(7,"div",6,7),p.Kb(),p.Kb(),p.Kb())},encapsulation:2}),r),f=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=p.Ab({type:i,selectors:[["dev-post-next"]],decls:17,vars:0,consts:[["id","articleNext",1,"section"],[1,"footer-next-heading"],[1,"footer-spacer"],["numberOfArticles","{numberOfArticles}",1,"next-articles-grid"],[1,"post-row"],["href","","id","article-link-bigger",1,"article-link"],[1,"image-container"],["src","",1,"article-image"],[1,"article-title"],[1,"article-excerpt"],[1,"article-metadata"]],template:function(t,e){1&t&&(p.Lb(0,"section",0),p.Lb(1,"h3",1),p.lc(2,"Mais artigos de Patrick Lima"),p.Kb(),p.Hb(3,"div",2),p.Lb(4,"div",3),p.Lb(5,"div",4),p.Lb(6,"a",5),p.Lb(7,"div"),p.Lb(8,"div",6),p.Hb(9,"img",7),p.Kb(),p.Lb(10,"div"),p.Lb(11,"h2",8),p.lc(12," Titulo do Artigo "),p.Kb(),p.Lb(13,"p",9),p.lc(14," Descri\xe7\xe3o do Artigo "),p.Kb(),p.Lb(15,"div",10),p.lc(16,' 1 de Janeiro de 2006" \xb7 5 min leitura '),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb())},encapsulation:2}),i),u=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=p.Ab({type:o,selectors:[["dev-post-hero"]],inputs:{post:"post"},decls:13,vars:2,consts:[[1,"post-hero"],[1,"post-hero-section"],[1,"post-header"],[1,"post-author"],[1,"post-time"],[1,"post-progress-icon"],["mode","dark",1,"post-progress-position"],["mode","dark","offset","300",1,"post-progress-position2"],[1,"post-time-to-read"]],template:function(t,e){1&t&&(p.Lb(0,"div",0),p.Lb(1,"section",1),p.Lb(2,"header",2),p.Lb(3,"h1"),p.lc(4),p.Kb(),p.Lb(5,"div",3),p.lc(6,"por Patrick Lima"),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Lb(7,"section",4),p.Lb(8,"div",5),p.Hb(9,"div",6),p.Hb(10,"div",7),p.Kb(),p.Lb(11,"div",8),p.lc(12),p.Kb(),p.Kb()),2&t&&(p.wb(4),p.mc(e.post.title),p.wb(8),p.nc("",e.post.timeToRead," min leitura"))},styles:[".post-hero[_ngcontent-%COMP%]{position:absolute;height:100%;left:0;right:0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow:hidden}h1[_ngcontent-%COMP%]{line-height:1.3;text-transform:none;margin-bottom:1rem;font-size:48px;font-family:var(--serif);font-weight:700}@media(max-width:768px){.post-hero[_ngcontent-%COMP%]{min-height:100vh;margin-top:10px;border-top-left-radius:15px;border-top-right-radius:15px;background:#fafafa}}.post-hero-section[_ngcontent-%COMP%]{position:static;width:100%;max-width:1220px;margin:0 auto;padding:0 2.5rem;display:block}@media(max-width:1024px){.post-hero-section[_ngcontent-%COMP%]{max-width:100%;display:block}}@media(max-width:768px){.post-hero-section[_ngcontent-%COMP%]{display:block;padding:0 2.5rem}}@media(max-width:540px){.post-hero-section[_ngcontent-%COMP%]{max-width:100%}}.post-header[_ngcontent-%COMP%]{max-width:680px}@media(max-width:768px){.post-header[_ngcontent-%COMP%]{max-width:480px}}.post-author[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--grey)}.post-time[_ngcontent-%COMP%]{max-width:1220px;padding:0 2.5rem;display:block;width:100%;position:absolute;bottom:0;margin:0 auto;left:0;right:0}@media(max-width:1024px){.post-time[_ngcontent-%COMP%]{max-width:100%;display:block}}@media(max-width:768px){.post-time[_ngcontent-%COMP%]{display:block;padding:0 2.5rem}}@media(max-width:540px){.post-time[_ngcontent-%COMP%]{max-width:100%}}.post-progress-icon[_ngcontent-%COMP%]{position:relative;width:1px;height:90px;overflow:hidden;z-index:10}.post-progress-position[_ngcontent-%COMP%]{position:relative;width:1px;height:90px;-webkit-transform-origin:center bottom;transform-origin:center bottom;background:rgba(0,0,0,.3)}.post-progress-position2[_ngcontent-%COMP%]{position:absolute;width:1px;height:30px;top:0;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transform-origin:center bottom;transform-origin:center bottom;background:#000}.post-time-to-read[_ngcontent-%COMP%]{top:6px;left:51px;position:absolute;color:rgba(0,0,0,.3)}"],changeDetection:0}),o);function m(t,e){if(1&t&&(p.Jb(0),p.lc(1,"\n        "),p.Hb(2,"dev-post-hero",3),p.lc(3,"\n      "),p.Ib()),2&t){var n=e.ngIf;p.wb(2),p.bc("post",n)}}var x,v,w=[{path:":slug",component:(x=function(){function t(e,n){_classCallCheck(this,t),this._router=e,this._posts=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.currentPost$=this._posts.posts$.pipe(Object(l.a)((function(e){return e.filter((function(e){return e.route===t._router.routerState.snapshot.url})).pop()})))}}]),t}(),x.\u0275fac=function(t){return new(t||x)(p.Gb(a.c),p.Gb(d.a))},x.\u0275cmp=p.Ab({type:x,selectors:[["dev-posts"]],decls:16,vars:3,consts:[[1,"wrapper"],[4,"ngIf"],[1,"post-content"],[3,"post"]],template:function(t,e){1&t&&(p.lc(0,"\n    "),p.Lb(1,"div",0),p.lc(2,"\n      "),p.kc(3,m,4,1,"ng-container",1),p.Wb(4,"async"),p.lc(5,"\n    "),p.Kb(),p.lc(6,"\n\n    "),p.Hb(7,"dev-progress"),p.lc(8,"\n\n    "),p.Lb(9,"article",2),p.lc(10,"\n      "),p.Hb(11,"scully-content"),p.lc(12,"\n    "),p.Kb(),p.lc(13,"\n\n    "),p.Hb(14,"dev-post-next"),p.lc(15,"\n  ")),2&t&&(p.wb(3),p.bc("ngIf",p.Xb(4,1,e.currentPost$)))},directives:[s.k,h,c.a,f,u],pipes:[s.b],styles:["header[_ngcontent-%COMP%] {\n        border-bottom: 1px solid var(--divider);\n        position: relative;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        position: relative;\n        z-index: 5;\n        min-height: 600px;\n        height: calc(100vh - 100px);\n        display: flex;\n        overflow: hidden;\n        background: rgb(250, 250, 250);\n      }\n\n      @media (max-width: 768px) {\n        .wrapper[_ngcontent-%COMP%] {\n          min-height: calc(100vh - 70px);\n          background: linear-gradient(rgb(25, 28, 34), rgb(8, 8, 11) 3%);\n        }\n      }"]}),x)}],y=((v=function t(){_classCallCheck(this,t)}).\u0275mod=p.Eb({type:v}),v.\u0275inj=p.Db({factory:function(t){return new(t||v)},imports:[[a.e.forChild(w)],a.e]}),v);n.d(e,"PostModule",(function(){return C}));var k,C=((k=function t(){_classCallCheck(this,t)}).\u0275mod=p.Eb({type:k}),k.\u0275inj=p.Db({factory:function(t){return new(t||k)},imports:[[s.c,a.e,y,c.b]]}),k)}}]);