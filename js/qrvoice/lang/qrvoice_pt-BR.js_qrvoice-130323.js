/* Copyright (c) 2013, Marcel Duran */
YUI.add("lang/qrvoice_pt-BR",function(e){"use strict";e.Intl.add("qrvoice","pt-BR",{direction:"ltr",description:"Gerador de QR-code para mensagem de voz sintetizada",tagline:"quando uma imagem vale cem caracteres",help:"ajuda",faq:"perguntas frequentes",faqFile:"faq_pt-BR.html",placeholder:"dizer o quê?",msgTitle:"texto à ser falado (no máximo 100 caracteres)",genLabel:"gerar",genTitle:"gerar qr-voice",whichLang:"em {lang}",spokenLang:"Língua falada",langs:{af:"africâner",sq:"albanês",ar:"árabe",hy:"armênio",ca:"catalão",zh:"chinês",hr:"croata",cs:"tcheco",da:"dinamarquês",nl:"holandês",en:"inglês",fi:"finlandês",fr:"francês",de:"alemão",el:"grego",ht:"crioulo haitiano",hi:"hindi",hu:"húngaro",is:"islandês",id:"indonésio",it:"italiano",ja:"japonês",ko:"coreano",la:"latim",lv:"letão",mk:"macedônio",no:"norueguês",pl:"polonês",pt:"português",ro:"romeno",ru:"russo",sr:"sérvio",sk:"eslovaco",es:"espanhol",sw:"suaíli",sv:"sueco",ta:"tâmil",tr:"turco",vi:"vietnamita",cy:"galês"},langsNote:"línguas para reprodução de áudio, não para tradução",resizeTitle:"redimensionar qr-code",linkTitle:"link para esta imagem de qr-code",imgTitle:"qr-code para reproduzir a mensagem, salve/capture esta imagem ou copie o link acima",facebookButton:"Curtir",twitterButton:"Tweetar",intls:[{id:"en-US",name:"inglês (Estados Unidos)",ownName:"English (United States)"},{id:"es-419",name:"espanhol (América Latina)",ownName:"español (Latinoamérica)"},{id:"fr",name:"francês",ownName:"français"},{id:"hu",name:"húngaro",ownName:"magyar"},{id:"it",name:"italiano",ownName:"italiano"},{id:"ja",name:"japonês",ownName:"日本語"},{id:"pt-BR",name:"português (Brasil)"},{id:"zh-CN",name:"chinês (han simplificado)",ownName:"简体中文"},{id:"zh-TW",name:"chinês (han tradicional)",ownName:"繁體中文"}],intlsTitle:"idioma da interface do usuário",disclaimer:"nota: qrvoice não é afiliado ao Yahoo!&trade; Inc., Google&trade; Inc. ou bitly&trade; Inc. em qualquer forma."})},"0.0.15");YUI.add("qrvoice",function(e){"use strict";var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m="qrvoice",g=m,y="R_039525bc02a0dbe1e6456752fdc17997",b="http://my.qrvoice.net/",w="http://api.bitly.com/v3/shorten?login="+g+"&apiKey="+y+"&longUrl={url}&format=json&callback={callback}",E="http://translate.google.com/translate_tts?ie=UTF-8&q={msg}&tl={lang}",S="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs={size}x{size}&chl={url}",x="http://www.facebook.com/sharer.php?t=QR%20voice&u=http%253A%252F%252Fqrvoice.net%2F%3Fid%3D{id}",T="http://twitter.com/share?source=tweetbutton&text=QR%20voice&url=http%3A%2F%2Fqrvoice.net%2F%3Fid%3D{id}",N=33,C=547,k=10,L="hidden",A="lng-sel",O="invis",M=".lbl",_="body",D="#qrlink",P="#qrcopy",H="#help",B="#lang",j=e.one,F=e.Intl,I=F.get(m),q=e.Lang,R=q.sub,U=e.config.win,z=U.location,W=U.navigator,X=e.StorageLite,V=X.getItem,$=X.setItem,J=e.Node,K=J.create,Q=e.Object.each,G=e.Array,Y=G.each,Z=J.getDOMNode,et=encodeURIComponent,tt=Math.round,nt=null,rt="value",it="lang",st="placeholder",ot="title",ut="click",at="size",ft="rtl",lt="id",ct="href",ht=/[\d\w\-_]/g,pt=I.langs,dt=W.userLanguage||W.language,vt=dt.slice(0,2).toLowerCase(),mt=0,gt=j(_),yt=j("#form"),bt=j("#msg"),wt=j("#size"),Et=j("#slider-thumb"),St=j("#qrcode-wrp"),xt=j(D),Tt=j(P),Nt=Z(Tt),Ct=j("#slider-box"),kt=j("#lang-lst"),Lt=j("#lang-name"),At=j("#social .facebook"),Ot=j("#social .twitter"),Mt=j("#help-panel"),_t=(new e.apm.SimpleSlider({node:Ct})).render(),Dt=function(){var e=U.history;return e&&e.replaceState?function(t){e.replaceState(nt,nt,t?"?"+t:"/")}:function(e){z.hash=e}}(),Pt=function(e,t){bt.get(rt)||s.setXY(t||bt.getXY()),e&&e.halt()},Ht=function(e){return e.toLowerCase().replace(/[áãâ]/g,"a").replace(/[éê]/g,"e").replace(/[í]/g,"i").replace(/[ô]/g,"o").replace(/[ú]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n")},Bt=function(e,t){var n=Ht(e.name),r=Ht(t.name);return n<r?-1:1},jt=function(){return l==="zh"?"zh-CN":l},Ft=function(e){pt.hasOwnProperty(e)||(e="en"),l=e,bt.set(it,jt()),Lt.setContent(R(I.whichLang,{lang:pt[e]})),$(it,e)},It=function(e,t){var n,r,i=e&&e.data;if(!i)return;n=i.url,r=i.hash,v||(v=K(R('<img id="qrcode" alt="{alt}">',{alt:I.imgTitle})),St.append(v)),v.set("src",n),St.set(ct,n),xt.set(ct,n).setContent(n),At.set(ct,R(x,{id:r})),Ot.set(ct,R(T,{id:r})),t||Dt("id="+r)},qt=function(t){var n,r,i=t&&t.data;if(!i)return;n=R(S,{size:u,url:et(i.url)}),r=R(w,{url:et(n)}),e.jsonp(r,{on:{success:It}})},Rt=function(t){var n,r,i=bt.get(rt),s=jt();t.halt(),i&&(c!==i||h!==s)&&(c=i,h=s,i=et(i),n=R(E,{msg:i,lang:s}),r=R(w,{url:et(n)}),e.jsonp(r,{on:{success:qt}}))};gt.setStyle("visibility","visible"),yt.on("submit",Rt),gt.delegate(ut,function(e){e.halt(),kt.toggleClass(L)},B),gt.delegate(ut,function(e){e.halt(),j("#help-img").setStyle("background","url(/images/help.jpg) no-repeat"),Mt.toggleClass(O)},H),gt.delegate(ut,function(e){e.target.ancestor(B)||kt.addClass(L),e.target.test(H)||Mt.addClass(O)},_),gt.delegate(ut,function(e){var t=e.target;e.preventDefault(),j("#lng-"+l).removeClass(A),t.addClass(A),Ft(t.get(lt).slice(4))},".lng"),gt.delegate("mouseover",function(){xt.addClass(O),Tt.removeClass(O).set(rt,xt.getContent()),Nt.focus(),Nt.select()},D),gt.delegate("mouseout",function(){xt.removeClass(O),Tt.addClass(O)},P),_t.on("valueChange",function(e){var n=d||tt(e.newVal[0]*t)+N;d=0,n=n<N?N:n>C?C:n,u=n,$(at,n),wt.setContent(n+"x"+n),St.setStyles({height:n,width:n})}),r=z.search,n=r.lastIndexOf("/"),n=n>-1?n:r.length,i=r.slice(1,n).split("&").concat(z.hash.slice(1).split("&")),G.some(i,function(e){var t=e.split("="),n=t[1];if(t[0]===lt&&ht.test(n))return It({data:{url:b+n,hash:n}},1),1}),I.direction===ft&&gt.addClass(ft),j(H).setContent(I.help).set(ct,I.faqFile).removeClass(L),j("#faq").setContent(I.faq).set(ct,I.faqFile),j("#tagline").setContent(I.tagline),bt.set(st,I.placeholder).set(ot,I.msgTitle),j("#lbl-msg").setContent(I.msgTitle),j("#gen").set(ot,I.genTitle),j("#lbl-gen").setContent(I.genLabel),Et.set(ot,I.resizeTitle),xt.set(ot,I.linkTitle),St.set(ot,I.imgTitle),j("#lbl-intls").setContent(I.intlsTitle),j("#disclaimer").setContent(I.disclaimer),At.one(M).setContent(I.facebookButton),Ot.one(M).setContent(I.twitterButton),I.description&&j("meta[name=description]").set("content",I.description),q.isUndefined(Z(K("<input>"))[st])&&(s=K(R('<label class="{cls}" for="msg">{lbl}</label>',{cls:st,lbl:I.placeholder})),yt.append(s),Pt(),bt.on("focus",Pt,nt,[0,-1e4]),bt.on("blur",Pt)),f="",o=F.getLang(m),Y(I.intls.sort(Bt),function(e){var t=e.id,n=e.ownName;f+=R('<option value="{id}"{sel}>{opt}</option>',{id:t,sel:t===o?" selected":"",opt:e.name+(n?" - "+n:"")})}),a=K(R('<select id="intls" title="{title}">{opts}</select>',{title:I.intlsTitle,opts:f})),gt.one("#intls-wrp").append(a),a.on("change",function(){var e=a.get("options").item(a.get("selectedIndex")).get(rt);$("intl",e),z.reload()}),X.on("storage-lite:ready",function(){var e=[];p=parseInt(Ct.getStyle("width"),10),t=(C-N+1)/p,u=V(at),u?d=u:u=p,_t.update([tt((u-N)/t),0]),Et.removeClass(L),St.removeClass(L),Ft(V(it)||vt),f=R('<div id="lang-hd">{title}</div><ul class="lang-col">',{title:I.spokenLang}),Q(pt,function(t,n){e.push({id:n,name:t})}),Y(e.sort(Bt),function(e){var t=e.id;f+=R('<li><a class="lng{cls}" href="#" id="lng-{id}">{name}</a></li>',{cls:t===l?" "+A:"",id:t,name:e.name}),mt+=1,mt%k===0&&(f+='</ul><ul class="lang-col">')}),f+=R('</ul><div id="lang-ft">{note}</div>',{note:I.langsNote}),kt.setContent(f)})},"0.0.15",{lang:["en-US","es-419","it","ja","pt-BR"],requires:["node","json","jsonp","dd-constrain","gallery-center","gallery-simpleslider","gallery-storage-lite"]})