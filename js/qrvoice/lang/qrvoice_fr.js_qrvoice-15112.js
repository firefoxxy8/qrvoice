/* Copyright (c) 2015, Marcel Duran */
YUI.add("lang/qrvoice_fr",function(e){"use strict";e.Intl.add("qrvoice","fr",{direction:"ltr",tagline:"quand une image vaut mille mots",help:"aide",faq:"foire aux questions",faqFile:"faq_en-US.html",placeholder:"que voulez-vous dire?",msgTitle:"texte à lire (100 caractères maximum)",genLabel:"générer",genTitle:"générer un qr-voice",whichLang:"en {lang}",spokenLang:"Langue parlée",langs:{af:"afrikaans",sq:"albanais",ar:"arabe",hy:"arménien",ca:"catalan",zh:"chinois",hr:"croate",cs:"tchèque",da:"danois",nl:"néerlandais",en:"anglais",eg:"anglais britannique",fi:"finnois",fr:"français",de:"allemand",el:"grec",ht:"créole haïtien",hi:"hindi",hu:"hongrois",is:"islandais",id:"indonésien",it:"italien",ja:"japonais",ko:"coréen",la:"latin",lv:"letton",mk:"macédonien",no:"norvégien",pl:"polonais",pt:"portugais",ro:"roumain",ru:"russe",sr:"serbe",sk:"slovaque",es:"espagnol",sw:"swahili",sv:"suédois",ta:"tamul",tr:"turc",vi:"vietnamien",cy:"gallois"},langsNote:"les langues s'appliquent uniquement à la lecture audio, pas à la traduction",linkTitle:"lien vers l'image du qr-code",imgTitle:"qr-code permettant de lire le message, sauvegardez ou scannez cette image, ou copiez le lien ci-dessus",facebookButton:"J'aime",twitterButton:"Tweeter",intls:[{id:"en-US",name:"anglais (États-Unis)",ownName:"English (United States)"},{id:"es-419",name:"espagnol (Amérique latine)",ownName:"español (Latinoamérica)"},{id:"fr",name:"français"},{id:"hu",name:"hongrois",ownName:"magyar"},{id:"it",name:"italien",ownName:"italiano"},{id:"ja",name:"japonais",ownName:"日本語"},{id:"pt-BR",name:"portugais (Brésil)",ownName:"português (Brasil)"},{id:"zh-CN",name:"chinois (simplifié)",ownName:"简体中文"},{id:"zh-TW",name:"chinois (traditionnel)",ownName:"繁體中文"}],intlsTitle:"langue de l'interface utilisateur",disclaimer:"Avertissement: qrvoice n'est affilié d'aucune manière à Yahoo!&trade; Inc., Google&trade; Inc. ni bitly&trade; Inc."})},"0.0.18");;YUI.add("qrvoice",function(e){"use strict";var t,n,l,a,s,o,i,r,c,g,d,u,p="qrvoice",h=p,f="R_4f67037aede6407a9cac9e9073c86192",m="http://my.qrvoice.net/",v="http://api.bitly.com/v3/shorten?login="+h+"&apiKey="+f+"&longUrl={url}&format=json&callback={callback}",C="http://translate.google.com/translate_tts?ie=UTF-8&q={msg}&tl={lang}",b="http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=547x547&chl={url}",q="http://www.facebook.com/sharer.php?t=QR%20voice&u=http%253A%252F%252Fqrvoice.net%2F%3Fid%3D{id}",w="http://twitter.com/share?source=tweetbutton&text=QR%20voice&url=http%3A%2F%2Fqrvoice.net%2F%3Fid%3D{id}",y=11,k="hidden",F="lng-sel",T="invis",j=".lbl",L="body",I="#qrlink",S="#qrcopy",U="#help",x="#lang",N=e.one,R=e.Intl,A=R.get(p),B=e.Lang,D=B.sub,O=e.config.win,Y=O.location,_=O.navigator,z=e.StorageLite,M=z.getItem,Q=z.setItem,X=e.Node,G=X.create,K=e.Object.each,P=e.Array,$=P.each,E=X.getDOMNode,H=encodeURIComponent,J=(Math.round,""),V=null,W="value",Z="lang",ee="placeholder",te="title",ne="click",le="rtl",ae="id",se="href",oe=/^[\d\w\-_]+$/,ie=A.langs,re=_.userLanguage||_.language,ce=re.slice(0,2).toLowerCase(),ge=0,de=N(L),ue=N("#form"),pe=N("#msg"),he=N("#qrcode-wrp"),fe=N(I),me=N(S),ve=E(me),Ce=N("#lang-lst"),be=N("#lang-name"),qe=N("#social .facebook"),we=N("#social .twitter"),ye=N("#help-panel"),ke=function(){var e=O.history;return e&&e.replaceState?function(t){e.replaceState(V,V,t?"?"+t:"/")}:function(e){Y.hash=e}}(),Fe=function(e,t){pe.get(W)||a.setXY(t||pe.getXY()),e&&e.halt()},Te=function(e){return e.toLowerCase().replace(/[áãâ]/g,"a").replace(/[éê]/g,"e").replace(/[í]/g,"i").replace(/[ô]/g,"o").replace(/[ú]/g,"u").replace(/[ç]/g,"c").replace(/[ñ]/g,"n")},je=function(e,t){var n=Te(e.name),l=Te(t.name);return l>n?-1:1},Le=function(){return"zh"===r?"zh-CN":"eg"===r?"en-GB":r},Ie=function(e){ie.hasOwnProperty(e)||(e="en"),r=e,pe.set(Z,Le()),be.setContent(D(A.whichLang,{lang:ie[e]})),Q(Z,e)},Se=function(e){var t,n,l;for(e=e.split("."),n=e.length,t=0;n>t;t++)l=parseInt(e[t],36)-n,e[t]=String.fromCharCode(l);return{lang:e[0]+e[n-1],text:e.slice(1,n-1).reverse().join(J)}},Ue=function(e,t){var n,l,a,s;for(t=t.split(J),s=[t[0]].concat(e.split(J).reverse(),t[1]),n=0,l=s.length;l>n;n++)a=s[n].charCodeAt(0)+l,s[n]=a.toString(36);return s.join(".")},xe=function(e){me.removeClass(T),me.set(W,e),ve.focus(),ve.select()},Ne=function(e,t,n){d||(d=G(D('<img id="qrcode" alt="{alt}">',{alt:A.imgTitle})),he.append(d)),d.set("src",t),he.set(se,t),qe.set(se,D(q,{id:e})),we.set(se,D(w,{id:e})),n||ke("id="+e)},Re=function(e,t){var n,l;return n=D(C,{msg:e,lang:Le()}),l=D(b,{url:H(n)})},Ae=function(e,t){var n=e&&e.data;n&&(Ne(n.hash,n.url),xe(m+n.hash))},Be=function(e){var t,n=pe.get(W),l=Le();e.halt(),!n||c===n&&g===l||(c=n,g=l,n=H(n),t=Ue(n,l),u=Re(n,l),Ne(t,u),fe.removeClass(T),me.addClass(T),me.set(W,J))};de.setStyle("visibility","visible"),ue.on("submit",Be),de.delegate(ne,function(e){e.halt(),Ce.toggleClass(k)},x),de.delegate(ne,function(e){e.halt(),N("#help-img").setStyle("background","url(/images/help.jpg) no-repeat"),ye.toggleClass(T)},U),de.delegate(ne,function(e){e.target.ancestor(x)||Ce.addClass(k),e.target.test(U)||ye.addClass(T)},L),de.delegate(ne,function(e){var t=e.target;e.preventDefault(),N("#lng-"+r).removeClass(F),t.addClass(F),Ie(t.get(ae).slice(4))},".lng"),de.delegate("click",function(t){t.halt(),fe.addClass(T),e.jsonp(D(v,{url:H(u)}),{on:{success:Ae}})},I),n=Y.search,t=n.lastIndexOf("/"),t=t>-1?t:n.length,l=n.slice(1,t).split("&").concat(Y.hash.slice(1).split("&")),P.some(l,function(e){var t,n,l=e.split("="),a=l[1];return l[0]===ae&&a?(oe.test(a)?(t=m+a,xe(t)):(n=Se(a),Ie(n.lang),u=Re(n.text,n.lang),t=u,fe.removeClass(T)),Ne(a,t,1),1):void 0}),A.direction===le&&de.addClass(le),N(U).setContent(A.help).set(se,A.faqFile).removeClass(k),N("#faq").setContent(A.faq).set(se,A.faqFile),N("#tagline").setContent(A.tagline),pe.set(ee,A.placeholder).set(te,A.msgTitle),N("#lbl-msg").setContent(A.msgTitle),N("#gen").set(te,A.genTitle),N("#lbl-gen").setContent(A.genLabel),fe.setContent(A.linkTitle).set(te,A.linkTitle),he.set(te,A.imgTitle),N("#lbl-intls").setContent(A.intlsTitle),N("#disclaimer").setContent(A.disclaimer),qe.one(j).setContent(A.facebookButton),we.one(j).setContent(A.twitterButton),A.description&&N("meta[name=description]").set("content",A.description),B.isUndefined(E(G("<input>"))[ee])&&(a=G(D('<label class="{cls}" for="msg">{lbl}</label>',{cls:ee,lbl:A.placeholder})),ue.append(a),Fe(),pe.on("focus",Fe,V,[0,-1e4]),pe.on("blur",Fe)),i=J,s=R.getLang(p),$(A.intls.sort(je),function(e){var t=e.id,n=e.ownName;i+=D('<option value="{id}"{sel}>{opt}</option>',{id:t,sel:t===s?" selected":J,opt:e.name+(n?" - "+n:J)})}),o=G(D('<select id="intls" title="{title}">{opts}</select>',{title:A.intlsTitle,opts:i})),de.one("#intls-wrp").append(o),o.on("change",function(){var e=o.get("options").item(o.get("selectedIndex")).get(W);Q("intl",e),Y.reload()}),z.on("storage-lite:ready",function(){var e=[];he.removeClass(k),Ie(M(Z)||ce),i=D('<div id="lang-hd">{title}</div><ul class="lang-col">',{title:A.spokenLang}),K(ie,function(t,n){e.push({id:n,name:t})}),$(e.sort(je),function(e){var t=e.id;i+=D('<li><a class="lng{cls}" href="#" id="lng-{id}">{name}</a></li>',{cls:t===r?" "+F:J,id:t,name:e.name}),ge+=1,ge%y===0&&(i+='</ul><ul class="lang-col">')}),i+=D('</ul><div id="lang-ft">{note}</div>',{note:A.langsNote}),Ce.setContent(i)})},"0.0.18",{lang:["en-US","es-419","it","ja","pt-BR"],requires:["node","json","jsonp","dd-constrain","gallery-center","gallery-storage-lite"]});