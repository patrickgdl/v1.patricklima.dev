(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DZG2:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),i=o("tyNb"),r=o("sbAP"),s=o("lJxs"),c=o("fXoL"),a=o("Y+9w");const p=["progressBar"],d=["progressIndicator"];let b=(()=>{class t{constructor(){}ngOnInit(){this.progressBarEl=this.progressBar.nativeElement,this.scrollProgressEl=this.scrollProgress.nativeElement;const t=document.getElementById("articleNext");this.articleNext=t?t.offsetHeight:0,this.bottomOffset=(this.articleNext+150+250)/document.body.scrollHeight*100,this.bottomOffset+=1.1*this.bottomOffset}scroll(t){this.updateProgress()}updateProgress(){const t=window.pageYOffset/document.body.scrollHeight*(100+this.bottomOffset);this.scrollProgressEl.style.transform="translateY("+t+"%)",t>100?(this.progressBarEl.style.animationName="progress-fade-out",setTimeout(()=>{this.progressBarEl.style.opacity="0"},500)):(this.progressBarEl.style.animationName="progress-fade-in",setTimeout(()=>{this.progressBarEl.style.opacity="1"},500))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ab({type:t,selectors:[["dev-progress"]],viewQuery:function(t,e){var o;1&t&&(c.kc(p,!0),c.kc(d,!0)),2&t&&(c.gc(o=c.Sb())&&(e.progressBar=o.first),c.gc(o=c.Sb())&&(e.scrollProgress=o.first))},hostBindings:function(t,e){1&t&&c.Rb("scroll",(function(t){return e.scroll(t)}),!1,c.hc)},decls:9,vars:0,consts:[[1,"aside-container"],["progressBar",""],[1,"aside-align"],[1,"overlap-container"],["tabIndex","{-1}",1,"progress-container"],["aria-hidden","true",1,"track-line"],[1,"progress-line"],["progressIndicator",""]],template:function(t,e){1&t&&(c.Lb(0,"aside",0,1),c.Lb(2,"div",2),c.Lb(3,"div"),c.Hb(4,"div",3),c.Kb(),c.Kb(),c.Lb(5,"div",4),c.Lb(6,"div",5),c.Hb(7,"div",6,7),c.Kb(),c.Kb(),c.Kb())},encapsulation:2}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ab({type:t,selectors:[["dev-post-next"]],decls:17,vars:0,consts:[["id","articleNext",1,"section"],[1,"footer-next-heading"],[1,"footer-spacer"],["numberOfArticles","{numberOfArticles}",1,"next-articles-grid"],[1,"post-row"],["href","","id","article-link-bigger",1,"article-link"],[1,"image-container"],["src","",1,"article-image"],[1,"article-title"],[1,"article-excerpt"],[1,"article-metadata"]],template:function(t,e){1&t&&(c.Lb(0,"section",0),c.Lb(1,"h3",1),c.nc(2,"Mais artigos meus"),c.Kb(),c.Hb(3,"div",2),c.Lb(4,"div",3),c.Lb(5,"div",4),c.Lb(6,"a",5),c.Lb(7,"div"),c.Lb(8,"div",6),c.Hb(9,"img",7),c.Kb(),c.Lb(10,"div"),c.Lb(11,"h2",8),c.nc(12," Titulo do Artigo "),c.Kb(),c.Lb(13,"p",9),c.nc(14," Descri\xe7\xe3o do Artigo "),c.Kb(),c.Lb(15,"div",10),c.nc(16,' 1 de Janeiro de 2006" \xb7 5 min leitura '),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb())},encapsulation:2}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ab({type:t,selectors:[["dev-post-hero"]],inputs:{post:"post"},decls:20,vars:12,consts:[[1,"post-hero"],[1,"post-hero-section"],[1,"post-header"],[1,"post-author"],[1,"post-time"],[1,"post-progress-icon"],["mode","dark",1,"post-progress-position"],["mode","dark","offset","300",1,"post-progress-position2"],[1,"post-time-to-read"],[1,"article-hero-image"],[1,"nkuvch-0","vLBY","gatsby-image-wrapper",2,"position","relative","overflow","hidden"],[2,"width","100%","padding-bottom","68.75%"],["type","image/webp","sizes","(max-width: 3200px) 100vw, 3200px",3,"srcset"],["sizes","(max-width: 3200px) 100vw, 3200px",3,"srcset"],["sizes","(max-width: 3200px) 100vw, 3200px","alt","","loading","lazy",2,"position","absolute","top","0px","left","0px","width","100%","height","100%","object-fit","cover","object-position","center center","opacity","1","transition","opacity 500ms ease 0s",3,"srcset","src"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"section",1),c.Lb(2,"header",2),c.Lb(3,"h1"),c.nc(4),c.Kb(),c.Lb(5,"div",3),c.nc(6,"por Patrick Lima"),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Lb(7,"section",4),c.Lb(8,"div",5),c.Hb(9,"div",6),c.Hb(10,"div",7),c.Kb(),c.Lb(11,"div",8),c.nc(12),c.Kb(),c.Kb(),c.Lb(13,"div",9),c.Lb(14,"div",10),c.Hb(15,"div",11),c.Lb(16,"picture"),c.Hb(17,"source",12),c.Hb(18,"source",13),c.Hb(19,"img",14),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.wb(4),c.oc(e.post.title),c.wb(8),c.pc("",e.post.timeToRead," min de leitura"),c.wb(5),c.dc("srcset","\n              ",e.post.coverImage,"?w=800&h=550&q=100&fm=webp     800w,\n              ",e.post.coverImage,"??w=1600&h=1100&q=100&fm=webp 1600w,\n              ",e.post.coverImage,"?w=3200&h=2200&q=100&fm=webp  3200w\n            ",c.ic),c.wb(1),c.dc("srcset","",e.post.coverImage,"?w=800&h=550&q=100 800w, ",e.post.coverImage,"?w=1600&h=1100&q=100 1600w, ",e.post.coverImage,"?w=3200&h=2200&q=100 3200w",c.ic),c.wb(1),c.dc("srcset","",e.post.coverImage,"?w=800&h=550&q=100 800w, ",e.post.coverImage,"?w=1600&h=1100&q=100 1600w, ",e.post.coverImage,"?w=3200&h=2200&q=100 3200w",c.ic),c.cc("src","",e.post.coverImage,"?w=3200&h=2200&q=100",c.ic))},styles:[".post-hero[_ngcontent-%COMP%]{position:absolute;height:100%;left:0;right:0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow:hidden}h1[_ngcontent-%COMP%]{font-size:48px;font-family:var(--serif);color:#000}@media(max-width:768px){.post-hero[_ngcontent-%COMP%]{min-height:100vh;border-top-left-radius:15px;border-top-right-radius:15px;background:#fafafa}}.post-hero-section[_ngcontent-%COMP%]{position:static;width:100%;max-width:1220px;margin:0 auto;padding:0 2.5rem;display:block}@media(max-width:1024px){.post-hero-section[_ngcontent-%COMP%]{max-width:100%;display:block}}@media(max-width:768px){.post-hero-section[_ngcontent-%COMP%]{display:block;padding:0 2.5rem}}@media(max-width:540px){.post-hero-section[_ngcontent-%COMP%]{max-width:100%}}.post-header[_ngcontent-%COMP%]{max-width:680px}@media(max-width:768px){.post-header[_ngcontent-%COMP%]{max-width:480px}}.post-author[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--grey)}.post-time[_ngcontent-%COMP%]{max-width:1220px;padding:0 2.5rem;display:block;width:100%;position:absolute;bottom:0;margin:0 auto;left:0;right:0}@media(max-width:1024px){.post-time[_ngcontent-%COMP%]{max-width:100%;display:block}}@media(max-width:768px){.post-time[_ngcontent-%COMP%]{display:block;padding:0 2.5rem}}@media(max-width:540px){.post-time[_ngcontent-%COMP%]{max-width:100%}}.post-progress-icon[_ngcontent-%COMP%]{position:relative;width:1px;height:90px;overflow:hidden;z-index:10}.post-progress-position[_ngcontent-%COMP%]{position:relative;width:1px;height:90px;-webkit-transform-origin:center bottom;transform-origin:center bottom;background:rgba(0,0,0,.3)}.post-progress-position2[_ngcontent-%COMP%]{position:absolute;width:1px;height:30px;top:0;-webkit-transform:translateY(0);transform:translateY(0);-webkit-transform-origin:center bottom;transform-origin:center bottom;background:#000}.post-time-to-read[_ngcontent-%COMP%]{top:6px;left:51px;position:absolute;color:rgba(0,0,0,.3)}img[_ngcontent-%COMP%]{vertical-align:middle}.article-hero-image[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;z-index:-1;right:-40%;overflow:visible}.article-hero-image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);overflow:visible;height:100%}.article-hero-image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-position:left center!important;object-position:left center!important}@media(max-width:768px){.article-hero-image[_ngcontent-%COMP%]{display:none}}"],changeDetection:0}),t})();function m(t,e){if(1&t&&(c.Jb(0),c.nc(1,"\n        "),c.Hb(2,"dev-post-hero",4),c.nc(3,"\n      "),c.Ib()),2&t){const t=e.ngIf;c.wb(2),c.bc("post",t)}}const h=[{path:":slug",component:(()=>{class t{constructor(t,e){this._router=t,this._posts=e}ngOnInit(){this.currentPost$=this._posts.posts$.pipe(Object(s.a)(t=>t.filter(t=>t.route===this._router.routerState.snapshot.url).pop()))}}return t.\u0275fac=function(e){return new(e||t)(c.Gb(i.c),c.Gb(a.a))},t.\u0275cmp=c.Ab({type:t,selectors:[["dev-posts"]],decls:19,vars:3,consts:[[1,"wrapper"],[4,"ngIf"],[1,"section"],[1,"post-content"],[3,"post"]],template:function(t,e){1&t&&(c.nc(0,"\n    "),c.Lb(1,"div",0),c.nc(2,"\n      "),c.mc(3,m,4,1,"ng-container",1),c.Wb(4,"async"),c.nc(5,"\n    "),c.Kb(),c.nc(6,"\n\n    "),c.Hb(7,"dev-progress"),c.nc(8,"\n    "),c.Lb(9,"section",2),c.nc(10,"\n      "),c.Lb(11,"article",3),c.nc(12,"\n        "),c.Hb(13,"scully-content"),c.nc(14,"\n      "),c.Kb(),c.nc(15,"\n    "),c.Kb(),c.nc(16,"\n\n    "),c.Hb(17,"dev-post-next"),c.nc(18,"\n  ")),2&t&&(c.wb(3),c.bc("ngIf",c.Xb(4,1,e.currentPost$)))},directives:[n.k,b,r.a,l,g],pipes:[n.b],styles:["header[_ngcontent-%COMP%] {\n        border-bottom: 1px solid var(--divider);\n        position: relative;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        position: relative;\n        z-index: 5;\n        min-height: 600px;\n        height: calc(100vh - 100px);\n        display: flex;\n        overflow: hidden;\n        background: rgb(250, 250, 250);\n      }\n\n      @media (max-width: 768px) {\n        .wrapper[_ngcontent-%COMP%] {\n          background: linear-gradient(rgb(25, 28, 34), rgb(8, 8, 11) 3%);\n        }\n      }"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=c.Eb({type:t}),t.\u0275inj=c.Db({factory:function(e){return new(e||t)},imports:[[i.e.forChild(h)],i.e]}),t})();o.d(e,"PostModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=c.Eb({type:t}),t.\u0275inj=c.Db({factory:function(e){return new(e||t)},imports:[[n.c,i.e,w,r.b]]}),t})()}}]);