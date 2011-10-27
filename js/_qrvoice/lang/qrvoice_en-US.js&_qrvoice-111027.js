/* Copyright (c) 2011, Marcel Duran */
YUI.add("lang/qrvoice_en-US",function(a){"use strict",a.Intl.add("qrvoice","en-US",{direction:"ltr",tagline:"when a picture is literally worth a thousand words",placeholder:"say what?",msgTitle:"text to speech",genLabel:"generate",genTitle:"generate qr-voice",whichLang:"in {lang}",spokenLang:"Spoken language",langs:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",hy:"Armenian",ca:"Catalan",zh:"Chinese",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",fi:"Finnish",fr:"French",de:"German",el:"Greek",ht:"Haitian Creole",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",it:"Italian",ja:"Japanese",ko:"Korean",la:"Latin",lv:"Latvian",mk:"Macedonian",no:"Norwegian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",es:"Spanish",sw:"Swahili",sv:"Swedish",ta:"Tamil",tr:"Turkish",vi:"Vietnamese",cy:"Welsh"},langsNote:"languages for playback only, not for translation",resizeTitle:"resize qr-code",linkTitle:"link to this qr-code image",imgTitle:"qr-code to message playback, save/scan this image or use link above",intls:{"en-US":{name:"English (United States)"},"pt-BR":{name:"Portuguese",ownName:"português (Brasil)"}},intlsTitle:"user interface language",disclaimer:"disclaimer: qrvoice is not affiliated with Yahoo!&trade; Inc., Google&trade; Inc. or bitly&trade; Inc. in any way."})},"0.0.1")
YUI.add("qrvoice",function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l,m,n,o="qrvoice",p=o,q="R_039525bc02a0dbe1e6456752fdc17997",r="http://my.qrvoice.net/",s="http://api.bitly.com/v3/shorten?login="+p+"&apiKey="+q+"&longUrl={url}&format=json&callback={callback}",t="http://translate.google.com/translate_tts?ie=UTF-8&q={msg}&tl={lang}",u="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs={size}x{size}&chl={url}",v=33,w=547,x=10,y="hidden",z="lng-sel",A="body",B="#form",C="#intls",D="</div>",E=a.one,F=a.Intl,G=F.get(o),H=a.substitute,I=a.config.win,J=I.location,K=I.navigator,L=a.StorageLite,M=L.getItem,N=L.setItem,O=a.Node,P=a.Object.each,Q=a.Array.some,R=encodeURIComponent,S=Math.round,T=null,U="value",V="lang",W="placeholder",X="title",Y="click",Z="size",$="rtl",_="id",ba=/[\d\w\-_]/g,bb=G.langs,bc=K.userLanguage||K.language,bd=bc.slice(0,2).toLowerCase(),be=E(A),bf=be.one(B),bg=bf.one("#msg"),bh=be.one("#size"),bi=be.one("#qrcode"),bj=be.one("#qrlink"),bk=be.one("#slider-box"),bl=bf.one("#lang-lst"),bm=bf.one("#lang"),bn=bf.one("#lang-name"),bo=be.one(C),bp=(new a.apm.SimpleSlider({node:bk})).render(),bq=function(){var a=I.history;return a&&a.replaceState?function(b){a.replaceState(T,T,b?"?"+b:"/")}:function(a){J.hash=a}}(),br=function(a,b){bg.get(U)||f.setXY(b||bg.getXY()),a&&a.halt()},bs=function(){return k==="zh"?"zh-CN":k},bt=function(a){bb.hasOwnProperty(a)||(a="en"),k=a,bg.set(V,bs()),bn.setContent(H(G.whichLang,{lang:bb[a]})),N(V,a)},bu=function(a,b){var c,d=a&&a.data;if(!d)return;c=d.url,bi.set("src",c),bj.set("href",c).setContent(c),b||bq("id="+c.slice(c.lastIndexOf("/")+1))},bv=function(b){var c,d,e=b&&b.data;if(!e)return;c=H(u,{size:h,url:R(e.url)}),d=H(s,{url:R(c)}),a.jsonp(d,{on:{success:bu}})},bw=function(b){var c,d,e=bg.get(U);b.halt(),e&&l!==e&&(l=e,e=R(e),c=H(t,{msg:e,lang:bs()}),d=H(s,{url:R(c)}),a.jsonp(d,{on:{success:bv}}))};be.delegate("submit",bw,B),be.delegate(Y,function(a){a.halt(),bl.toggleClass(y)},"#lang"),be.delegate(Y,function(a){var b=function(a){return a===bm};a.target.ancestor(b)||bl.addClass(y)},A),be.delegate(Y,function(a){var b=a.target;a.preventDefault(),E("#lng-"+k).removeClass(z),b.addClass(z),bt(b.get(_).slice(4))},".lng"),be.delegate("change",function(){var a=bo.get("options").item(bo.get("selectedIndex")).get(U);N("intl",a),J.reload()},C),bp.on("valueChange",function(a){var c=S(a.newVal[0]*b)+v;c=c<v?v:c>w?w:c,h=c,N(Z,c),bh.setContent(c+"x"+c),bi.setStyles({height:c,width:c})}),n=parseInt(bk.getStyle("width"),10),h=M(Z)||n,b=(w-v+1)/n,bp.update([S((h-v)/b),0]),d=J.search,c=d.lastIndexOf("/"),c=c>-1?c:d.length,e=d.slice(1,c).split("&").concat(J.hash.slice(1).split("&")),Q(e,function(a){var b=a.split("="),c=b[1];if(b[0]===_&&ba.test(c))return bu({data:{url:r+c}},1),1}),G.direction===$&&be.addClass($),E("#tagline").setContent(G.tagline),bg.set(W,G.placeholder).set(X,G.msgTitle),E("#gen").set(U,G.genLabel).set(X,G.genTitle),E("#slider-thumb").set(X,G.resizeTitle),E("#qrlink").set(X,G.linkTitle),bj.set(X,G.linkTitle),bi.set(X,G.imgTitle),E("#disclaimer").setContent(G.disclaimer),bo.set(X,G.intlsTitle),O.getDOMNode(bg).hasOwnProperty(W)||(f=O.create('<label class="'+W+'" for="msg">'+G.placeholder+"</label>"),bf.append(f),br(),bg.on("focus",br,T,[0,-1e4]),bg.on("blur",br)),bt(M(V)||bd),i='<div id="lang-hd">'+G.spokenLang+D,i+='<ul class="lang-col">',j=0,P(bb,function(a,b){i+='<li><a class="lng'+(b===k?" "+z:"")+'" href="#" id="lng-'+b+'">'+a+"</a><li>",j+=1,j%x===0&&(i+='</ul><ul class="lang-col">')}),i+='</ul><div id="lang-ft">'+G.langsNote+D,bl.setContent(i),i="",g=F.getLang(o),P(G.intls,function(a,b){var c=a.ownName;i+='<option value="'+b+'"'+(b===g?" selected":"")+">"+a.name+(c?" - "+c:"")+"</option>"}),bo.setContent(i),E(".twitter-share-button").setAttribute("data-lang",g.slice(0,2)),m=g===bd?bc:g,I.___gcfg={lang:m},I._gaq=[["_setAccount","UA-26587471-1"],["_trackPageview"],["_trackPageLoadTime"]],a.Get.script(["//www.google-analytics.com/ga.js","//connect.facebook.net/"+(m.length>2?m.replace("-","_"):"en_US")+"/all.js#xfbml=1","//platform.twitter.com/widgets.js","https://apis.google.com/js/plusone.js"])},"0.0.1",{lang:["en-US","pt-BR"],requires:["node","json","jsonp","substitute","dd-constrain","gallery-center","gallery-simpleslider","gallery-storage-lite"]})