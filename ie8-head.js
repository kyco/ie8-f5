/*
**	This script must be loaded after all CSS and should ideally be loaded in the HEAD.
**
**	This file contains the following 5 scripts, in the order provided:
**		1.	cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js
**		2.	s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js
**		3.	html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js
**		4.	cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js
**		5.	github.com/es-shims/es5-shim - shim.js
*/

/*
 HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

/*!
 * NWMatcher 1.2.5 - Fast CSS3 Selector Engine
 * Copyright (C) 2007-2012 Diego Perini
 * See http://nwbox.com/license
 */

(function(t){var ct='nwmatcher-1.2.5',l=typeof exports=='object'?exports:((t.NW||(t.NW={}))&&(t.NW.Dom||(t.NW.Dom={}))),i=t.document,m=i.documentElement,K=[].slice,bJ={}.toString,bk,W,G,X,p,bl,bm,bn,bo,L='[#.:]?',bp='([~*^$|!]?={1})',x='[\\x20\\t\\n\\r\\f]*',bq='[\\x20]|[>+~][^>+~]',br='[-+]?\\d*n?[-+]?\\d*',Y='"[^"]*"'+"|'[^']*'",bK='\\([^()]+\\)|\\(.*\\)',bL='\\{[^{}]+\\}|\\{.*\\}',bM='\\[[^[\\]]*\\]|\\[.*\\]',Z='\\[.*\\]|\\(.*\\)|\\{.*\\}',q='(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)',B='(?:-?[_a-zA-Z]{1}[-\\w]*|[^\\x00-\\xa0]+|\\\\.+)+',bs='('+Y+'|'+B+')',C=x+'('+q+'+:?'+q+'+)'+x+'(?:'+bp+x+bs+')?'+x,bN=C.replace(bs,'([\\x22\\x27]*)((?:\\\\?.)*?)\\3'),M='((?:'+br+'|'+Y+'|'+L+'|'+q+'+|\\['+C+'\\]|\\(.+\\)|'+x+'|,)+)',bO='.+',ba='(?=[\\x20\\t\\n\\r\\f]*[^>+~(){}<>])(\\*|(?:'+L+B+')|'+bq+'|\\['+C+'\\]|\\('+M+'\\)|\\{'+bO+'\\}|,)+',bP=ba.replace(M,'.*'),N=new RegExp(ba,'g'),O=new RegExp('^'+x+'|'+x+'$','g'),bQ=new RegExp('^((?!:not)('+L+'|'+B+'|\\([^()]*\\))+|\\['+C+'\\])$'),bb=new RegExp('([^,\\\\\\[\\]]+|'+bM+'|'+bK+'|'+bL+'|\\\\.)+','g'),bR=new RegExp('(\\['+C+'\\]|\\('+M+'\\)|[^\\x20>+~]|\\\\.)+','g'),bt=/[\x20\t\n\r\f]+/g,bu=new RegExp(B+'|^$'),z=(function(){var g=(i.appendChild+'').replace(/appendChild/g,'');return function(a,b){var d=a&&a[b]||false;return d&&typeof d!='string'&&g==(d+'').replace(new RegExp(b,'g'),'')}})(),bS=z(i,'hasFocus'),P=z(i,'querySelector'),bT=z(i,'getElementById'),bU=z(m,'getElementsByTagName'),Q=z(m,'getElementsByClassName'),bV=z(m,'getAttribute'),bW=z(m,'hasAttribute'),bv=(function(){var a=false,b=m.id;m.id='length';try{a=!!K.call(i.childNodes,0)[0]}catch(e){}m.id=b;return a})(),bw='nextElementSibling'in m&&'previousElementSibling'in m,bX=bT?(function(){var a=true,b='x'+String(+new Date),d=i.createElementNS?'a':'<a name="'+b+'">';(d=i.createElement(d)).name=b;m.insertBefore(d,m.firstChild);a=!!i.getElementById(b);m.removeChild(d);return a})():true,bx=bU?(function(){var a=i.createElement('div');a.appendChild(i.createComment(''));return!!a.getElementsByTagName('*')[0]})():true,by=Q?(function(){var a,b=i.createElement('div'),d='\u53f0\u5317';b.appendChild(i.createElement('span')).setAttribute('class',d+'abc '+d);b.appendChild(i.createElement('span')).setAttribute('class','x');a=!b.getElementsByClassName(d)[0];b.lastChild.className=d;return a||b.getElementsByClassName(d).length!=2})():true,bY=bV?(function(){var a=i.createElement('input');a.setAttribute('value',5);return a.defaultValue!=5})():true,bz=bW?(function(){var a=i.createElement('option');a.setAttribute('selected','selected');return!a.hasAttribute('selected')})():true,bZ=(function(){var a=i.createElement('select');a.appendChild(i.createElement('option'));return!a.firstChild.selected})(),bA,bB,y,n,bC=/opera/i.test(bJ.call(t.opera)),ca=bC&&parseFloat(opera.version())>=11,cb=P?(function(){var h=[],f=i.createElement('div'),c,k=function(a,b,d,g){var j=false;b.appendChild(d);try{j=b.querySelectorAll(a).length==g}catch(e){}while(b.firstChild){b.removeChild(b.firstChild)}return j};c=i.createElement('p');c.setAttribute('class','');k('[class^=""]',f,c,1)&&h.push('[*^$]=[\\x20\\t\\n\\r\\f]*(?:""|'+"'')");c=i.createElement('option');c.setAttribute('selected','selected');k(':checked',f,c,0)&&h.push(':checked');c=i.createElement('input');c.setAttribute('type','hidden');k(':enabled',f,c,1)&&h.push(':enabled',':disabled');c=i.createElement('link');c.setAttribute('href','x');k(':link',f,c,1)||h.push(':link');if(bz){h.push('\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)')}return h.length?new RegExp(h.join('|')):{'test':function(){return false}}})():true,cc=new RegExp('(?:\\[[\\x20\\t\\n\\r\\f]*class\\b|\\.'+B+')'),cd=new RegExp(!(bx&&by)?!bC?'^(?:\\*|[.#]?-?[_a-zA-Z]{1}'+q+'*)$':'^(?:\\*|#-?[_a-zA-Z]{1}'+q+'*)$':'^#?-?[_a-zA-Z]{1}'+q+'*$'),ce={'a':1,'A':1,'area':1,'AREA':1,'link':1,'LINK':1},cf={'checked':1,'disabled':1,'ismap':1,'multiple':1,'readonly':1,'selected':1},R={value:'defaultValue',checked:'defaultChecked',selected:'defaultSelected'},cg={'action':2,'cite':2,'codebase':2,'data':2,'href':2,'longdesc':2,'lowsrc':2,'src':2,'usemap':2},bD={'class':0,'accept':1,'accept-charset':1,'align':1,'alink':1,'axis':1,'bgcolor':1,'charset':1,'checked':1,'clear':1,'codetype':1,'color':1,'compact':1,'declare':1,'defer':1,'dir':1,'direction':1,'disabled':1,'enctype':1,'face':1,'frame':1,'hreflang':1,'http-equiv':1,'lang':1,'language':1,'link':1,'media':1,'method':1,'multiple':1,'nohref':1,'noresize':1,'noshade':1,'nowrap':1,'readonly':1,'rel':1,'rev':1,'rules':1,'scope':1,'scrolling':1,'selected':1,'shape':1,'target':1,'text':1,'type':1,'valign':1,'valuetype':1,'vlink':1},ch={'accept':1,'accept-charset':1,'alink':1,'axis':1,'bgcolor':1,'charset':1,'codetype':1,'color':1,'enctype':1,'face':1,'hreflang':1,'http-equiv':1,'lang':1,'language':1,'link':1,'media':1,'rel':1,'rev':1,'target':1,'text':1,'type':1,'vlink':1},D={},H={'=':"n=='%m'",'^=':"n.indexOf('%m')==0",'*=':"n.indexOf('%m')>-1",'|=':"(n+'-').indexOf('%m-')==0",'~=':"(' '+n+' ').indexOf(' %m ')>-1",'$=':"n.substr(n.length-'%m'.length)=='%m'"},E={ID:new RegExp('^\\*?#('+q+'+)|'+Z),TAG:new RegExp('^('+q+'+)|'+Z),CLASS:new RegExp('^\\*?\\.('+q+'+$)|'+Z)},u={spseudos:/^\:((root|empty|nth-)?(?:(first|last|only)-)?(child)?-?(of-type)?)(?:\(([^\x29]*)\))?(.*)/,dpseudos:/^\:(link|visited|target|lang|not|active|focus|hover|checked|disabled|enabled|selected)(?:\((["']*)(.*?(\(.*\))?[^'"()]*?)\2\))?(.*)/,attribute:new RegExp('^\\['+bN+'\\](.*)'),children:/^[\x20\t\n\r\f]*\>[\x20\t\n\r\f]*(.*)/,adjacent:/^[\x20\t\n\r\f]*\+[\x20\t\n\r\f]*(.*)/,relative:/^[\x20\t\n\r\f]*\~[\x20\t\n\r\f]*(.*)/,ancestor:/^[\x20\t\n\r\f]+(.*)/,universal:/^\*(.*)/,id:new RegExp('^#('+q+'+)(.*)'),tagName:new RegExp('^('+q+'+)(.*)'),className:new RegExp('^\\.('+q+'+)(.*)')},bE=function(a,b){var d=-1,g;if(!a.length&&Array.slice)return Array.slice(b);while((g=b[++d]))a[a.length]=g;return a},bF=function(a,b,d){var g=-1,j;while((j=b[++g])){if(false===d(a[a.length]=j)){break}}return a},F=function(b,d){var g,j=i;X=b;i=b.ownerDocument||b;if(d||j!==i){m=i.documentElement;n=i.createElement('DiV').nodeName=='DiV';y=!n&&typeof i.compatMode=='string'?i.compatMode.indexOf('CSS')<0:(function(){var a=i.createElement('div').style;return a&&(a.width=1)&&a.width=='1px'})();g=i.createElement('div');g.appendChild(i.createElement('p')).setAttribute('class','xXx');g.appendChild(i.createElement('p')).setAttribute('class','xxx');bA=!n&&Q&&y&&(g.getElementsByClassName('xxx').length!=2||g.getElementsByClassName('xXx').length!=2);bB=!n&&P&&y&&(g.querySelectorAll('[class~=xxx]').length!=2||g.querySelectorAll('.xXx').length!=2);o.CACHING&&l.setCache(true,i)}},bc=function(a,b){var d=-1,g=null;while((g=b[++d])){if(g.getAttribute('id')==a){break}}return g},I=!bX?function(a,b){a=a.replace(/\\/g,'');return b.getElementById&&b.getElementById(a)||bc(a,b.getElementsByTagName('*'))}:function(a,b){var d=null;a=a.replace(/\\/g,'');if(n||b.nodeType!=9){return bc(a,b.getElementsByTagName('*'))}if((d=b.getElementById(a))&&d.name==a&&b.getElementsByName){return bc(a,b.getElementsByName(a))}return d},ci=function(a,b){F(b||(b=i));return I(a,b)},cj=function(a,b){var d=a=='*',g=b,j=[],h=g.firstChild;d||(a=a.toUpperCase());while((g=h)){if(g.tagName>'@'&&(d||g.tagName.toUpperCase()==a)){j[j.length]=g}if((h=g.firstChild||g.nextSibling))continue;while(!h&&(g=g.parentNode)&&g!==b){h=g.nextSibling}}return j},A=!bx&&bv?function(a,b){return n||b.nodeType==11?cj(a,b):K.call(b.getElementsByTagName(a),0)}:function(a,b){var d=-1,g=d,j=[],h,f=b.getElementsByTagName(a);if(a=='*'){while((h=f[++d])){if(h.nodeName>'@')j[++g]=h}}else{while((h=f[++d])){j[d]=h}}return j},ck=function(a,b){F(b||(b=i));return A(a,b)},bG=function(a,b){return S('[name="'+a.replace(/\\/g,'')+'"]',b)},cl=function(a,b){var d=-1,g=d,j=[],h,f=A('*',b),c;a=' '+(y?a.toLowerCase():a).replace(/\\/g,'')+' ';while((h=f[++d])){c=n?h.getAttribute('class'):h.className;if(c&&c.length&&(' '+(y?c.toLowerCase():c).replace(bt,' ')+' ').indexOf(a)>-1){j[++g]=h}}return j},J=function(a,b){return(by||bA||n||!b.getElementsByClassName)?cl(a,b):K.call(b.getElementsByClassName(a.replace(/\\/g,'')),0)},cm=function(a,b){F(b||(b=i));return J(a,b)},bd='compareDocumentPosition'in m?function(a,b){return(a.compareDocumentPosition(b)&16)==16}:'contains'in m?function(a,b){return a!==b&&a.contains(b)}:function(a,b){while((b=b.parentNode)){if(b===a)return true}return false},bH=!bY?function(a,b){return a.getAttribute(b)||''}:function(a,b){b=b.toLowerCase();if(R[b]){return a[R[b]]||''}return(cg[b]?a.getAttribute(b,2)||'':cf[b]?a.getAttribute(b)?b:'':((a=a.getAttributeNode(b))&&a.value)||'')},be=!bz?function(a,b){return n?!!a.getAttribute(b):a.hasAttribute(b)}:function(a,b){b=b.toLowerCase();if(R[b]){return!!a[R[b]]}a=a.getAttributeNode(b);return!!(a&&(a.specified||a.nodeValue))},cn=function(a){a=a.firstChild;while(a){if(a.nodeType==3||a.nodeName>'@')return false;a=a.nextSibling}return true},co=function(a){return be(a,'href')&&ce[a.nodeName]},cp=function(a,b){var d=1,g=b?'nextSibling':'previousSibling';while((a=a[g])){if(a.nodeName>'@')++d}return d},cq=function(a,b){var d=1,g=b?'nextSibling':'previousSibling',j=a.nodeName;while((a=a[g])){if(a.nodeName==j)++d}return d},cr=function(a){for(var b in a){o[b]=!!a[b];if(b=='SIMPLENOT'){bf={};T={};bg={};U={};o['USE_QSAPI']=false;N=new RegExp(bP,'g')}else if(b=='USE_QSAPI'){o[b]=!!a[b]&&P;N=new RegExp(ba,'g')}}},r=function(a){a='SYNTAX_ERR: '+a+' ';if(o.VERBOSITY){if(typeof t.DOMException!='undefined'){throw{code:12,message:a}}else{throw new Error(12,a);}}else{if(t.console&&t.console.log){t.console.log(a)}else{t.status+=a}}},o={CACHING:false,SHORTCUTS:false,SIMPLENOT:true,USE_HTML5:false,USE_QSAPI:P,VERBOSITY:true},bh='r[r.length]=c[k];if(f&&false===f(c[k]))break;else continue main;',V=function(a,b,d){var g=typeof a=='string'?a.match(bb):a;typeof b=='string'||(b='');if(g.length==1){b+=bI(g[0],d?bh:'f&&f(k);return true;')}else{var j=-1,h={},f;while((f=g[++j])){f=f.replace(O,'');if(!h[f]&&(h[f]=true)){b+=bI(f,d?bh:'f&&f(k);return true;')}}}if(d){return new Function('c,s,r,d,h,g,f','var N,n,x=0,k=-1,e;main:while((e=c[++k])){'+b+'}return r;')}else{return new Function('e,s,r,d,h,g,f','var N,n,x=0,k=e;'+b+'return false;')}},bI=function(a,b){var d,g,j,h=0,f,c,k,v,s,w;while(a){h++;if((c=a.match(u.universal))){f=''}else if((c=a.match(u.id))){b='if('+(n?'s.getAttribute(e,"id")':'(e.submit?s.getAttribute(e,"id"):e.id)')+'=="'+c[1]+'"){'+b+'}'}else if((c=a.match(u.tagName))){b='if(e.nodeName'+(n?'=="'+c[1]+'"':'.toUpperCase()=="'+c[1].toUpperCase()+'"')+'){'+b+'}'}else if((c=a.match(u.className))){b='if((n='+(n?'s.getAttribute(e,"class")':'e.className')+')&&n.length&&(" "+'+(y?'n.toLowerCase()':'n')+'.replace('+bt+'," ")+" ").indexOf(" '+(y?c[1].toLowerCase():c[1])+' ")>-1){'+b+'}'}else if((c=a.match(u.attribute))){f=c[1].split(':');f=f.length==2?f[1]:f[0]+'';if(c[2]&&!H[c[2]]){r('Unsupported operator in attribute selectors "'+a+'"');return''}s=false;w='false';if(c[2]&&c[4]&&(w=H[c[2]])){bD['class']=y?1:0;c[4]=c[4].replace(/\\([0-9a-f]{2,2})/,'\\x$1');s=(n?ch:bD)[f.toLowerCase()];w=w.replace(/\%m/g,s?c[4].toLowerCase():c[4])}else if(c[2]=='!='||c[2]=='='){w='n'+c[2]+'="'+c[4]+'"'}f='n=s.'+(c[2]?'get':'has')+'Attribute(e,"'+c[1]+'")'+(s?'.toLowerCase();':';');b=f+'if('+(c[2]?w:'n')+'){'+b+'}'}else if((c=a.match(u.adjacent))){b=bw?'var N'+h+'=e;if(e&&(e=e.previousElementSibling)){'+b+'}e=N'+h+';':'var N'+h+'=e;while(e&&(e=e.previousSibling)){if(e.nodeName>"@"){'+b+'break;}}e=N'+h+';'}else if((c=a.match(u.relative))){b=bw?('var N'+h+'=e;e=e.parentNode.firstElementChild;while(e&&e!==N'+h+'){'+b+'e=e.nextElementSibling}e=N'+h+';'):('var N'+h+'=e;e=e.parentNode.firstChild;while(e&&e!==N'+h+'){if(e.nodeName>"@"){'+b+'}e=e.nextSibling}e=N'+h+';');}else if((c=a.match(u.children))){b='var N'+h+'=e;if(e&&e!==h&&e!==g&&(e=e.parentNode)){'+b+'}e=N'+h+';';}else if((c=a.match(u.ancestor))){b='var N'+h+'=e;while(e&&e!==h&&e!==g&&(e=e.parentNode)){'+b+'}e=N'+h+';';}else if((c=a.match(u.spseudos))&&c[1]){switch(c[2]){case'root':if(c[7]){b='if(e===h||s.contains(h,e)){'+b+'}';}else{b='if(e===h){'+b+'}';}break;case'empty':b='if(s.isEmpty(e)){'+b+'}';break;default:if(c[2]&&c[6]){if(c[6]=='n'){b='if(e!==h){'+b+'}';break;}else if(c[6]=='even'){d=2;g=0;}else if(c[6]=='odd'){d=2;g=1;}else{g=((j=c[6].match(/(-?\d+)$/))?parseInt(j[1],10):0);d=((j=c[6].match(/(-?\d*)n/))?parseInt(j[1],10):0);if(j&&j[1]=='-')d=-1;}s=g<1&&d>1?'(n-('+g+'))%'+d+'==0':d>+1?(c[3]=='last')?'(n-('+g+'))%'+d+'==0':'n>='+g+'&&(n-('+g+'))%'+d+'==0':d<-1?(c[3]=='last')?'(n-('+g+'))%'+d+'==0':'n<='+g+'&&(n-('+g+'))%'+d+'==0':d===0?'n=='+g:(c[3]=='last')?d==-1?'n>='+g:'n<='+g:d==-1?'n<='+g:'n>='+g;b='if(e!==h){n=s['+(c[5]?'"nthOfType"':'"nthElement"')+'](e,'+(c[3]=='last'?'true':'false')+');if('+s+'){'+b+'}}';}else{d=c[3]=='first'?'previous':'next';j=c[3]=='only'?'previous':'next';g=c[3]=='first'||c[3]=='last';w=c[5]?'&&n.nodeName!=e.nodeName':'&&n.nodeName<"@"';b='if(e!==h){'+('n=e;while((n=n.'+d+'Sibling)'+w+');if(!n){'+(g?b:'n=e;while((n=n.'+j+'Sibling)'+w+');if(!n){'+b+'}')+'}')+'}';}break;}}else if((c=a.match(u.dpseudos))&&c[1]){switch(c[1]){case'not':f=c[3].replace(O,'');if(o.SIMPLENOT&&!bQ.test(f)){r('Negation pseudo-class only accepts simple selectors "'+a+'"');return'';}else{if('compatMode'in i){b='if(!'+V([f],'',false)+'(e,s,r,d,h,g)){'+b+'}';}else{b='if(!s.match(e, "'+f.replace(/\x22/g,'\\"')+'",g)){'+b+'}';}}break;case'checked':s='if((typeof e.form!="undefined"&&(/^(?:radio|checkbox)$/i).test(e.type)&&e.checked)';b=(o.USE_HTML5?s+'||(/^option$/i.test(e.nodeName)&&e.selected)':s)+'){'+b+'}';break;case'disabled':b='if(((typeof e.form!="undefined"&&!(/^hidden$/i).test(e.type))||s.isLink(e))&&e.disabled){'+b+'}';break;case'enabled':b='if(((typeof e.form!="undefined"&&!(/^hidden$/i).test(e.type))||s.isLink(e))&&!e.disabled){'+b+'}';break;case'lang':s='';if(c[3])s=c[3].substr(0,2)+'-';b='do{(n=e.lang||"").toLowerCase();if((n==""&&h.lang=="'+c[3].toLowerCase()+'")||(n&&(n=="'+c[3].toLowerCase()+'"||n.substr(0,3)=="'+s.toLowerCase()+'"))){'+b+'break;}}while((e=e.parentNode)&&e!==g);';break;case'target':j=i.location?i.location.hash:'';if(j){b='if(e.id=="'+j.slice(1)+'"){'+b+'}';}break;case'link':b='if(s.isLink(e)&&!e.visited){'+b+'}';break;case'visited':b='if(s.isLink(e)&&e.visited){'+b+'}';break;case'active':if(n)break;b='if(e===d.activeElement){'+b+'}';break;case'hover':if(n)break;b='if(e===d.hoverElement){'+b+'}';break;case'focus':if(n)break;b=bS?'if(e===d.activeElement&&d.hasFocus()&&(e.type||e.href)){'+b+'}':'if(e===d.activeElement&&(e.type||e.href)){'+b+'}';break;case'selected':f=bZ?'||(n=e.parentNode)&&n.options[n.selectedIndex]===e':'';b='if(/^option$/i.test(e.nodeName)&&(e.selected'+f+')){'+b+'}';break;default:break;}}else{f=false;v=true;for(f in D){if((c=a.match(D[f].Expression))&&c[1]){k=D[f].Callback(c,b);b=k.source;v=k.status;if(v)break;}}if(!v){r('Unknown pseudo-class selector "'+a+'"');return'';}if(!f){r('Unknown token in selector "'+a+'"');return'';}}if(!c){r('Invalid syntax in selector "'+a+'"');return'';}a=c&&c[c.length-1];}return b;},bi=function(a,b,d,g){var j;if(!(a&&a.nodeName>'@')){r('Invalid element argument');return false;}else if(!b||typeof b!='string'){r('Invalid selector argument');return false;}else if(d&&d.nodeType==1&&!bd(d,a)){return false;}else if(X!==d){F(d||(d=a.ownerDocument));}b=b.replace(O,'');o.SHORTCUTS&&(b=NW.Dom.shortcuts(b,a,d));if(bl!=b){if((j=b.match(N))&&j[0]==b){bk=(j=b.match(bb)).length<2;bl=b;bn=j;}else{r('The string "'+b+'", is not a valid CSS selector');return false;}}else j=bn;if(!T[b]||bf[b]!==d){T[b]=V(bk?[b]:j,'',false);bf[b]=d;}return T[b](a,bj,[],i,m,d,g);},cs=function(a,b){return S(a,b,function(){return false;})[0]||null;},S=function(a,b,d){var g,j,h,f,c,k,v=a;if(arguments.length===0){r('Missing required selector parameters');return[];}else if(a===''){r('Empty selector string');return[];}else if(typeof a!='string'){return[];}else if(b&&!(/1|9|11/).test(b.nodeType)){r('Invalid context element');return[];}else if(X!==b){F(b||(b=i));}if(o.CACHING&&(f=l.loadResults(v,b,i,m))){return d?bF([],f,d):f;}if(!ca&&cd.test(a)){switch(a.charAt(0)){case'#':if((h=I(a.slice(1),b))){f=[h];}else f=[];break;case'.':f=J(a.slice(1),b);break;default:f=A(a,b);break;}}else if(!n&&o.USE_QSAPI&&!(bB&&cc.test(a))&&!cb.test(a)){try{f=b.querySelectorAll(a);}catch(e){}}if(f){f=d?bF([],f,d):bv?K.call(f):bE([],f);o.CACHING&&l.saveResults(v,b,i,f);return f;}a=a.replace(O,'');o.SHORTCUTS&&(a=NW.Dom.shortcuts(a,b));if((j=bm!=a)){if((c=a.match(N))&&c[0]==a){W=(c=a.match(bb)).length<2;bm=a;bo=c;}else{r('The string "'+a+'", is not a valid CSS selector');return[];}}else c=bo;if(b.nodeType==11){f=b.childNodes;}else if(!n&&W){if(j){c=a.match(bR);k=c[c.length-1];G=k.split(':not')[0];p=a.length-k.length;}if((c=G.match(E.ID))&&(k=c[1])){if((h=I(k,b))){if(bi(h,a)){d&&d(h);f=[h];}else f=[];}}else if((c=a.match(E.ID))&&(k=c[1])){if((h=I(k,i))){if('#'+k==a){d&&d(h);f=[h];}if(/[>+~]/.test(a)){b=h.parentNode;}else{a=a.replace('#'+k,'*');p-=k.length+1;b=h;}}else f=[];}if(f){o.CACHING&&l.saveResults(v,b,i,f);return f;}if(!Q&&(c=G.match(E.TAG))&&(k=c[1])){if((f=A(k,b)).length===0){return[];}a=a.slice(0,p)+a.slice(p).replace(k,'*');}else if((c=G.match(E.CLASS))&&(k=c[1])){if((f=J(k,b)).length===0){return[];}if(bu.test(a.charAt(a.indexOf(k)-1))){a=a.slice(0,p)+a.slice(p).replace('.'+k,'');}else{a=a.slice(0,p)+a.slice(p).replace('.'+k,'*');}}else if((c=a.match(E.CLASS))&&(k=c[1])){if((f=J(k,b)).length===0){return[];}for(g=0,els=[];f.length>g;++g){els=bE(els,f[g].getElementsByTagName('*'));}f=els;if(bu.test(a.charAt(a.indexOf(k)-1))){a=a.slice(0,p)+a.slice(p).replace('.'+k,'');}else{a=a.slice(0,p)+a.slice(p).replace('.'+k,'*');}}else if(Q&&(c=G.match(E.TAG))&&(k=c[1])){if((f=A(k,b)).length===0){return[];}a=a.slice(0,p)+a.slice(p).replace(k,'*');}}if(!f){f=/^(?:applet|object)$/i.test(b.nodeName)?b.childNodes:A('*',b);}if(!U[a]||bg[a]!==b){U[a]=V(W?[a]:c,'',true);bg[a]=b}f=U[a](f,bj,[],i,m,b,d);o.CACHING&&l.saveResults(v,b,i,f);return f},bf={},T={},bg={},U={},bj={nthElement:cp,nthOfType:cq,getAttribute:bH,hasAttribute:be,byClass:J,byName:bG,byTag:A,byId:I,contains:bd,isEmpty:cn,isLink:co,select:S,match:bi};Tokens={prefixes:L,encoding:q,operators:bp,whitespace:x,identifier:B,attributes:C,combinators:bq,pseudoclass:M,pseudoparms:br,quotedvalue:Y};l.ACCEPT_NODE=bh;l.emit=r;l.byId=ci;l.byTag=ck;l.byName=bG;l.byClass=cm;l.getAttribute=bH;l.hasAttribute=be;l.match=bi;l.first=cs;l.select=S;l.compile=V;l.contains=bd;l.configure=cr;l.setCache=function(){return};l.loadResults=function(){return};l.saveResults=function(){return};l.shortcuts=function(a){return a};l.Config=o;l.Snapshot=bj;l.Operators=H;l.Selectors=D;l.Tokens=Tokens;l.registerOperator=function(a,b){H[a]||(H[a]=b)};l.registerSelector=function(a,b,d){D[a]||(D[a]={Expression:b,Callback:d})};F(i,true)})(this);

/*
selectivizr v1.0.3b - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
/* 
  
Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/

(function(win) {

	// If browser isn't IE, then stop execution! This handles the script 
	// being loaded by non IE browsers because the developer didn't use 
	// conditional comments.
	if (/*@cc_on!@*/true) return;

	// =========================== Init Objects ============================

	var doc = document;
	var root = doc.documentElement;
	var xhr = getXHRObject();
	var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];
	
	// If were not in standards mode, IE is too old / new or we can't create
	// an XMLHttpRequest object then we should get out now.
	if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
		return;
	}
	
	
	// ========================= Common Objects ============================

	// Compatiable selector engines in order of CSS3 support. Note: '*' is
	// a placholder for the object key name. (basically, crude compression)
	var selectorEngines = {
		"NW"								: "*.Dom.select",
		"MooTools"							: "$$",
		"DOMAssistant"						: "*.$", 
		"Prototype"							: "$$",
		"YAHOO"								: "*.util.Selector.query",
		"Sizzle"							: "*", 
		"jQuery"							: "*",
		"dojo"								: "*.query"
	};

	var selectorMethod;
	var enabledWatchers 					= [];     // array of :enabled/:disabled elements to poll
	var domPatches							= [];
	var ie6PatchID 							= 0;      // used to solve ie6's multiple class bug
	var patchIE6MultipleClasses				= true;   // if true adds class bloat to ie6
	var namespace 							= "slvzr";

	// Stylesheet parsing regexp's
	var RE_COMMENT							= /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g;
	var RE_IMPORT							= /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g;
	var RE_ASSET_URL 						= /(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g;
	var RE_PSEUDO_STRUCTURAL				= /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
	var RE_PSEUDO_ELEMENTS					= /:(:first-(?:line|letter))/g;
	var RE_SELECTOR_GROUP					= /((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g;
	var RE_SELECTOR_PARSE					= /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g; 
	var RE_LIBRARY_INCOMPATIBLE_PSEUDOS		= /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
	var RE_PATCH_CLASS_NAME_REPLACE			= /[^\w-]/g;
	
	// HTML UI element regexp's
	var RE_INPUT_ELEMENTS					= /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
	var RE_INPUT_CHECKABLE_TYPES			= /^(checkbox|radio)$/;

	// Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
	var BROKEN_ATTR_IMPLEMENTATIONS			= ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

	// Whitespace normalization regexp's
	var RE_TIDY_TRAILING_WHITESPACE			= /([(\[+~])\s+/g;
	var RE_TIDY_LEADING_WHITESPACE			= /\s+([)\]+~])/g;
	var RE_TIDY_CONSECUTIVE_WHITESPACE		= /\s+/g;
	var RE_TIDY_TRIM_WHITESPACE				= /^\s*((?:[\S\s]*\S)?)\s*$/;
	
	// String constants
	var EMPTY_STRING						= "";
	var SPACE_STRING						= " ";
	var PLACEHOLDER_STRING					= "$1";

	// =========================== Patching ================================

	// --[ patchStyleSheet() ]----------------------------------------------
	// Scans the passed cssText for selectors that require emulation and
	// creates one or more patches for each matched selector.
	function patchStyleSheet( cssText ) {
		return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
			replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {	
    			var selectorGroups = selectorText.split(",");
    			for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
    				var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
    				var patches = [];
    				selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE, 
    					function(match, combinator, pseudo, attribute, index) {
    						if (combinator) {
    							if (patches.length>0) {
    								domPatches.push( { selector: selector.substring(0, index), patches: patches } )
    								patches = [];
    							}
    							return combinator;
    						}		
    						else {
    							var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
    							if (patch) {
    								patches.push(patch);
    								return "." + patch.className;
    							}
    							return match;
    						}
    					}
    				);
    			}
    			return prefix + selectorGroups.join(",");
    		});
	};

	// --[ patchAttribute() ]-----------------------------------------------
	// returns a patch for an attribute selector.
	function patchAttribute( attr ) {
		return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ? 
			{ className: createClassName(attr), applyClass: true } : null;
	};

	// --[ patchPseudoClass() ]---------------------------------------------
	// returns a patch for a pseudo-class
	function patchPseudoClass( pseudo ) {

		var applyClass = true;
		var className = createClassName(pseudo.slice(1));
		var isNegated = pseudo.substring(0, 5) == ":not(";
		var activateEventName;
		var deactivateEventName;

		// if negated, remove :not() 
		if (isNegated) {
			pseudo = pseudo.slice(5, -1);
		}
		
		// bracket contents are irrelevant - remove them
		var bracketIndex = pseudo.indexOf("(")
		if (bracketIndex > -1) {
			pseudo = pseudo.substring(0, bracketIndex);
		}		
		
		// check we're still dealing with a pseudo-class
		if (pseudo.charAt(0) == ":") {
			switch (pseudo.slice(1)) {

				case "root":
					applyClass = function(e) {
						return isNegated ? e != root : e == root;
					}
					break;

				case "target":
					// :target is only supported in IE8
					if (ieVersion == 8) {
						applyClass = function(e) {
							var handler = function() { 
								var hash = location.hash;
								var hashID = hash.slice(1);
								return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
							};
							addEvent( win, "hashchange", function() {
								toggleElementClass(e, className, handler());
							})
							return handler();
						}
						break;
					}
					return false;
				
				case "checked":
					applyClass = function(e) { 
						if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "checked") {
									toggleElementClass( e, className, e.checked !== isNegated );
								} 							
							})
						}
						return e.checked !== isNegated;
					}
					break;
					
				case "disabled":
					isNegated = !isNegated;

				case "enabled":
					applyClass = function(e) { 
						if (RE_INPUT_ELEMENTS.test(e.tagName)) {
							addEvent( e, "propertychange", function() {
								if (event.propertyName == "$disabled") {
									toggleElementClass( e, className, e.$disabled === isNegated );
								} 
							});
							enabledWatchers.push(e);
							e.$disabled = e.disabled;
							return e.disabled === isNegated;
						}
						return pseudo == ":enabled" ? isNegated : !isNegated;
					}
					break;
					
				case "focus":
					activateEventName = "focus";
					deactivateEventName = "blur";
								
				case "hover":
					if (!activateEventName) {
						activateEventName = "mouseenter";
						deactivateEventName = "mouseleave";
					}
					applyClass = function(e) {
						addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
							toggleElementClass( e, className, true );
						})
						addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
							toggleElementClass( e, className, false );
						})
						return isNegated;
					}
					break;
					
				// everything else
				default:
					// If we don't support this pseudo-class don't create 
					// a patch for it
					if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
						return false;
					}
					break;
			}
		}
		return { className: className, applyClass: applyClass };
	};

	// --[ applyPatches() ]-------------------------------------------------
	function applyPatches() {
		var elms, selectorText, patches, domSelectorText;

		for (var c=0; c<domPatches.length; c++) {
			selectorText = domPatches[c].selector;
			patches = domPatches[c].patches;

			// Although some selector libraries can find :checked :enabled etc.
			// we need to find all elements that could have that state because
			// it can be changed by the user.
			domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);

			// If the dom selector equates to an empty string or ends with
			// whitespace then we need to append a universal selector (*) to it.
			if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
				domSelectorText += "*";
			}

			// Ensure we catch errors from the selector library
			try {
				elms = selectorMethod( domSelectorText );
			} catch (ex) {
				// #DEBUG_START
				log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
				// #DEBUG_END
			}


			if (elms) {
				for (var d = 0, dl = elms.length; d < dl; d++) {
					var elm = elms[d];
					var cssClasses = elm.className;
					for (var f = 0, fl = patches.length; f < fl; f++) {
						var patch = patches[f];
						if (!hasPatch(elm, patch)) {
							if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
								cssClasses = toggleClass(cssClasses, patch.className, true );
							}
						}
					}
					elm.className = cssClasses;
				}
			}
		}
	};

	// --[ hasPatch() ]-----------------------------------------------------
	// checks for the exsistence of a patch on an element
	function hasPatch( elm, patch ) {
		return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
	};
	
	
	// =========================== Utility =================================
	
	function createClassName( className ) {
		return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
			ie6PatchID++
		:
			className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
	};

	// --[ log() ]----------------------------------------------------------
	// #DEBUG_START
	function log( message ) {
		if (win.console) {
			win.console.log(message);
		}
	};
	// #DEBUG_END

	// --[ trim() ]---------------------------------------------------------
	// removes leading, trailing whitespace from a string
	function trim( text ) {
		return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
	};

	// --[ normalizeWhitespace() ]------------------------------------------
	// removes leading, trailing and consecutive whitespace from a string
	function normalizeWhitespace( text ) {
		return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
	};

	// --[ normalizeSelectorWhitespace() ]----------------------------------
	// tidies whitespace around selector brackets and combinators
	function normalizeSelectorWhitespace( selectorText ) {
		return normalizeWhitespace(selectorText.
			replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
			replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
		);
	};

	// --[ toggleElementClass() ]-------------------------------------------
	// toggles a single className on an element
	function toggleElementClass( elm, className, on ) {
		var oldClassName = elm.className;
		var newClassName = toggleClass(oldClassName, className, on);
		if (newClassName != oldClassName) {
			elm.className = newClassName;
			elm.parentNode.className += EMPTY_STRING;
		}
	};

	// --[ toggleClass() ]--------------------------------------------------
	// adds / removes a className from a string of classNames. Used to 
	// manage multiple class changes without forcing a DOM redraw
	function toggleClass( classList, className, on ) {
		var re = RegExp("(^|\\s)" + className + "(\\s|$)");
		var classExists = re.test(classList);
		if (on) {
			return classExists ? classList : classList + SPACE_STRING + className;
		} else {
			return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
		}
	};
	
	// --[ addEvent() ]-----------------------------------------------------
	function addEvent(elm, eventName, eventHandler) {
		elm.attachEvent("on" + eventName, eventHandler);
	};

	// --[ getXHRObject() ]-------------------------------------------------
	function getXHRObject() {
		if (win.XMLHttpRequest) {
			return new XMLHttpRequest;
		}
		try	{ 
			return new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e) { 
			return null;
		}
	};

	// --[ loadStyleSheet() ]-----------------------------------------------
	function loadStyleSheet( url ) {
		xhr.open("GET", url, false);
		xhr.send();
		return (xhr.status==200) ? xhr.responseText : EMPTY_STRING;	
	};
	
	// --[ resolveUrl() ]---------------------------------------------------
	// Converts a URL fragment to a fully qualified URL using the specified
	// context URL. Returns null if same-origin policy is broken
	function resolveUrl( url, contextUrl, ignoreSameOriginPolicy ) {

		function getProtocol( url ) {
			return url.substring(0, url.indexOf("//"));
		};

		function getProtocolAndHost( url ) {
			return url.substring(0, url.indexOf("/", 8));
		};

		if (!contextUrl) {
			contextUrl = baseUrl;
		}

		// protocol-relative path
		if (url.substring(0,2)=="//") {
			url = getProtocol(contextUrl) + url;
		}

		// absolute path
		if (/^https?:\/\//i.test(url)) {
			return !ignoreSameOriginPolicy && getProtocolAndHost(contextUrl) != getProtocolAndHost(url) ? null : url ;
		}

		// root-relative path
		if (url.charAt(0)=="/")	{
			return getProtocolAndHost(contextUrl) + url;
		}

		// relative path
		var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl	
		if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
			contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
		}

		return contextUrlPath + url;
	};
	
	// --[ parseStyleSheet() ]----------------------------------------------
	// Downloads the stylesheet specified by the URL, removes it's comments
	// and recursivly replaces @import rules with their contents, ultimately
	// returning the full cssText.
	function parseStyleSheet( url ) {
		if (url) {
			return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
			replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2, media ) {
				var cssText = parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
				return (media) ? "@media " + media + " {" + cssText + "}" : cssText;
			}).
			replace(RE_ASSET_URL, function( match, isBehavior, quoteChar, assetUrl ) { 
				quoteChar = quoteChar || EMPTY_STRING;
				return isBehavior ? match : " url(" + quoteChar + resolveUrl(assetUrl, url, true) + quoteChar + ") "; 
			});
		}
		return EMPTY_STRING;
	};

	// --[ getStyleSheets() ]-----------------------------------------------
	function getStyleSheets() {
		var url, stylesheet;
		for (var c = 0; c < doc.styleSheets.length; c++) {
			stylesheet = doc.styleSheets[c];
			if (stylesheet.href != EMPTY_STRING) {
				url = resolveUrl(stylesheet.href);
				if (url) {
					stylesheet.cssText = stylesheet["rawCssText"] = patchStyleSheet( parseStyleSheet( url ) );
				}
			}
		}
	};

	// --[ init() ]---------------------------------------------------------
	function init() {
		applyPatches();

		// :enabled & :disabled polling script (since we can't hook 
		// onpropertychange event when an element is disabled) 
		if (enabledWatchers.length > 0) {
			setInterval( function() {
				for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
					var e = enabledWatchers[c];
					if (e.disabled !== e.$disabled) {
						if (e.disabled) {
							e.disabled = false;
							e.$disabled = true;
							e.disabled = true;
						}
						else {
							e.$disabled = e.disabled;
						}
					}
				}
			}, 250)
		}
	};

	// Determine the baseUrl and download the stylesheets
	var baseTags = doc.getElementsByTagName("BASE");
	var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
	getStyleSheets();

	// Bind selectivizr to the ContentLoaded event. 
	ContentLoaded(win, function() {
		// Determine the "best fit" selector engine
		for (var engine in selectorEngines) {
			var members, member, context = win;
			if (win[engine]) {
				members = selectorEngines[engine].replace("*", engine).split(".");
				while ((member = members.shift()) && (context = context[member])) {}
				if (typeof context == "function") {
					selectorMethod = context;
					init();
					return;
				}
			}
		}
	});
	

	
	/*!
	 * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: cross-browser wrapper for DOMContentLoaded
	 * Updated: 20101020
	 * License: MIT
	 * Version: 1.2
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 */

	// @w window reference
	// @f function reference
	function ContentLoaded(win, fn) {

		var done = false, top = true,
		init = function(e) {
			if (e.type == "readystatechange" && doc.readyState != "complete") return;
			(e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
			if (!done && (done = true)) fn.call(win, e.type || e);
		},
		poll = function() {
			try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
			init('poll');
		};

		if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
		else {
			if (doc.createEventObject && root.doScroll) {
				try { top = !win.frameElement; } catch(e) { }
				if (top) poll();
			}
			addEvent(doc,"readystatechange", init);
			addEvent(win,"load", init);
		}
	};
})(this);

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);

/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.0.2/LICENSE
 */
(function(t,e){if(typeof define==="function"&&define.amd){define(e)}else if(typeof exports==="object"){module.exports=e()}else{t.returnExports=e()}})(this,function(){var t=Array.prototype;var e=Object.prototype;var r=Function.prototype;var n=String.prototype;var i=Number.prototype;var a=t.slice;var o=t.splice;var l=t.push;var u=t.unshift;var s=r.call;var f=e.toString;var c=function(t){return e.toString.call(t)==="[object Function]"};var h=function(t){return e.toString.call(t)==="[object RegExp]"};var p=function ve(t){return f.call(t)==="[object Array]"};var v=function ge(t){return f.call(t)==="[object String]"};var g=function ye(t){var e=f.call(t);var r=e==="[object Arguments]";if(!r){r=!p(t)&&t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&c(t.callee)}return r};var y=Object.defineProperty&&function(){try{Object.defineProperty({},"x",{});return true}catch(t){return false}}();var d;if(y){d=function(t,e,r,n){if(!n&&e in t){return}Object.defineProperty(t,e,{configurable:true,enumerable:false,writable:true,value:r})}}else{d=function(t,e,r,n){if(!n&&e in t){return}t[e]=r}}var m=function(t,r,n){for(var i in r){if(e.hasOwnProperty.call(r,i)){d(t,i,r[i],n)}}};function w(t){t=+t;if(t!==t){t=0}else if(t!==0&&t!==1/0&&t!==-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}return t}function b(t){var e=typeof t;return t===null||e==="undefined"||e==="boolean"||e==="number"||e==="string"}function x(t){var e,r,n;if(b(t)){return t}r=t.valueOf;if(c(r)){e=r.call(t);if(b(e)){return e}}n=t.toString;if(c(n)){e=n.call(t);if(b(e)){return e}}throw new TypeError}var S=function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return Object(t)};var O=function de(t){return t>>>0};function T(){}m(r,{bind:function me(t){var e=this;if(!c(e)){throw new TypeError("Function.prototype.bind called on incompatible "+e)}var r=a.call(arguments,1);var n=function(){if(this instanceof u){var n=e.apply(this,r.concat(a.call(arguments)));if(Object(n)===n){return n}return this}else{return e.apply(t,r.concat(a.call(arguments)))}};var i=Math.max(0,e.length-r.length);var o=[];for(var l=0;l<i;l++){o.push("$"+l)}var u=Function("binder","return function ("+o.join(",")+"){return binder.apply(this,arguments)}")(n);if(e.prototype){T.prototype=e.prototype;u.prototype=new T;T.prototype=null}return u}});var j=s.bind(e.hasOwnProperty);var E;var N;var I;var D;var _;if(_=j(e,"__defineGetter__")){E=s.bind(e.__defineGetter__);N=s.bind(e.__defineSetter__);I=s.bind(e.__lookupGetter__);D=s.bind(e.__lookupSetter__)}var M=function(){var t=[1,2];var e=t.splice();return t.length===2&&p(e)&&e.length===0}();m(t,{splice:function we(t,e){if(arguments.length===0){return[]}else{return o.apply(this,arguments)}}},M);var F=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();m(t,{splice:function be(t,e){if(arguments.length===0){return[]}var r=arguments;this.length=Math.max(w(this.length),0);if(arguments.length>0&&typeof e!=="number"){r=a.call(arguments);if(r.length<2){r.push(this.length-t)}else{r[1]=w(e)}}return o.apply(this,r)}},!F);var R=[].unshift(0)!==1;m(t,{unshift:function(){u.apply(this,arguments);return this.length}},R);m(Array,{isArray:p});var k=Object("a");var C=k[0]!=="a"||!(0 in k);var U=function xe(t){var e=true;var r=true;if(t){t.call("foo",function(t,r,n){if(typeof n!=="object"){e=false}});t.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!t&&e&&r};m(t,{forEach:function Se(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=arguments[1],i=-1,a=r.length>>>0;if(!c(t)){throw new TypeError}while(++i<a){if(i in r){t.call(n,r[i],i,e)}}}},!U(t.forEach));m(t,{map:function Oe(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=Array(n),a=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var o=0;o<n;o++){if(o in r){i[o]=t.call(a,r[o],o,e)}}return i}},!U(t.map));m(t,{filter:function Te(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=[],a,o=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var l=0;l<n;l++){if(l in r){a=r[l];if(t.call(o,a,l,e)){i.push(a)}}}return i}},!U(t.filter));m(t,{every:function je(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&!t.call(i,r[a],a,e)){return false}}return true}},!U(t.every));m(t,{some:function Ee(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&t.call(i,r[a],a,e)){return true}}return false}},!U(t.some));var A=false;if(t.reduce){A=typeof t.reduce.call("es5",function(t,e,r,n){return n})==="object"}m(t,{reduce:function Ne(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0;if(!c(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=t.call(void 0,a,r[i],i,e)}}return a}},!A);var P=false;if(t.reduceRight){P=typeof t.reduceRight.call("es5",function(t,e,r,n){return n})==="object"}m(t,{reduceRight:function Ie(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0;if(!c(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i,a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=t.call(void 0,i,r[a],a,e)}}while(a--);return i}},!P);var Z=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;m(t,{indexOf:function De(t){var e=C&&v(this)?this.split(""):S(this),r=e.length>>>0;if(!r){return-1}var n=0;if(arguments.length>1){n=w(arguments[1])}n=n>=0?n:Math.max(0,r+n);for(;n<r;n++){if(n in e&&e[n]===t){return n}}return-1}},Z);var J=Array.prototype.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;m(t,{lastIndexOf:function _e(t){var e=C&&v(this)?this.split(""):S(this),r=e.length>>>0;if(!r){return-1}var n=r-1;if(arguments.length>1){n=Math.min(n,w(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in e&&t===e[n]){return n}}return-1}},J);var z=!{toString:null}.propertyIsEnumerable("toString"),$=function(){}.propertyIsEnumerable("prototype"),G=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],B=G.length;m(Object,{keys:function Me(t){var e=c(t),r=g(t),n=t!==null&&typeof t==="object",i=n&&v(t);if(!n&&!e&&!r){throw new TypeError("Object.keys called on a non-object")}var a=[];var o=$&&e;if(i||r){for(var l=0;l<t.length;++l){a.push(String(l))}}else{for(var u in t){if(!(o&&u==="prototype")&&j(t,u)){a.push(String(u))}}}if(z){var s=t.constructor,f=s&&s.prototype===t;for(var h=0;h<B;h++){var p=G[h];if(!(f&&p==="constructor")&&j(t,p)){a.push(p)}}}return a}});var H=Object.keys&&function(){return Object.keys(arguments).length===2}(1,2);var L=Object.keys;m(Object,{keys:function Fe(e){if(g(e)){return L(t.slice.call(e))}else{return L(e)}}},!H);var X=-621987552e5;var Y="-000001";var q=Date.prototype.toISOString&&new Date(X).toISOString().indexOf(Y)===-1;m(Date.prototype,{toISOString:function Re(){var t,e,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(0<=n&&n<=9999?-4:-6);e=t.length;while(e--){r=t[e];if(r<10){t[e]="0"+r}}return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},q);var K=false;try{K=Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(X).toJSON().indexOf(Y)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(Q){}if(!K){Date.prototype.toJSON=function ke(t){var e=Object(this),r=x(e),n;if(typeof r==="number"&&!isFinite(r)){return null}n=e.toISOString;if(typeof n!=="function"){throw new TypeError("toISOString property is not callable")}return n.call(e)}}var V=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var W=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"));var te=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(!Date.parse||te||W||!V){Date=function(t){function e(r,n,i,a,o,l,u){var s=arguments.length;if(this instanceof t){var f=s===1&&String(r)===r?new t(e.parse(r)):s>=7?new t(r,n,i,a,o,l,u):s>=6?new t(r,n,i,a,o,l):s>=5?new t(r,n,i,a,o):s>=4?new t(r,n,i,a):s>=3?new t(r,n,i):s>=2?new t(r,n):s>=1?new t(r):new t;f.constructor=e;return f}return t.apply(this,arguments)}var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];function i(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function a(e){return Number(new t(1970,0,1,0,0,0,e))}for(var o in t){e[o]=t[o]}e.now=t.now;e.UTC=t.UTC;e.prototype=t.prototype;e.prototype.constructor=e;e.parse=function l(e){var n=r.exec(e);if(n){var o=Number(n[1]),l=Number(n[2]||1)-1,u=Number(n[3]||1)-1,s=Number(n[4]||0),f=Number(n[5]||0),c=Number(n[6]||0),h=Math.floor(Number(n[7]||0)*1e3),p=Boolean(n[4]&&!n[8]),v=n[9]==="-"?1:-1,g=Number(n[10]||0),y=Number(n[11]||0),d;if(s<(f>0||c>0||h>0?24:25)&&f<60&&c<60&&h<1e3&&l>-1&&l<12&&g<24&&y<60&&u>-1&&u<i(o,l+1)-i(o,l)){d=((i(o,l)+u)*24+s+g*v)*60;d=((d+f+y*v)*60+c)*1e3+h;if(p){d=a(d)}if(-864e13<=d&&d<=864e13){return d}}return NaN}return t.parse.apply(this,arguments)};return e}(Date)}if(!Date.now){Date.now=function Ce(){return(new Date).getTime()}}var ee=i.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var re={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function Ue(t,e){var r=-1;while(++r<re.size){e+=t*re.data[r];re.data[r]=e%re.base;e=Math.floor(e/re.base)}},divide:function Ae(t){var e=re.size,r=0;while(--e>=0){r+=re.data[e];re.data[e]=Math.floor(r/t);r=r%t*re.base}},numToString:function Pe(){var t=re.size;var e="";while(--t>=0){if(e!==""||t===0||re.data[t]!==0){var r=String(re.data[t]);if(e===""){e=r}else{e+="0000000".slice(0,7-r.length)+r}}}return e},pow:function Ze(t,e,r){return e===0?r:e%2===1?Ze(t,e-1,r*t):Ze(t*t,e/2,r)},log:function Je(t){var e=0;while(t>=4096){e+=12;t/=4096}while(t>=2){e+=1;t/=2}return e}};m(i,{toFixed:function ze(t){var e,r,n,i,a,o,l,u;e=Number(t);e=e!==e?0:Math.floor(e);if(e<0||e>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=Number(this);if(r!==r){return"NaN"}if(r<=-1e21||r>=1e21){return String(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){a=re.log(r*re.pow(2,69,1))-69;o=a<0?r*re.pow(2,-a,1):r/re.pow(2,a,1);o*=4503599627370496;a=52-a;if(a>0){re.multiply(0,o);l=e;while(l>=7){re.multiply(1e7,0);l-=7}re.multiply(re.pow(10,l,1),0);l=a-1;while(l>=23){re.divide(1<<23);l-=23}re.divide(1<<l);re.multiply(1,1);re.divide(2);i=re.numToString()}else{re.multiply(0,o);re.multiply(1<<-a,0);i=re.numToString()+"0.00000000000000000000".slice(2,2+e)}}if(e>0){u=i.length;if(u<=e){i=n+"0.0000000000000000000".slice(0,e-u+2)+i}else{i=n+i.slice(0,u-e)+"."+i.slice(u-e)}}else{i=n+i}return i}},ee);var ne=n.split;if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var e=/()??/.exec("")[1]===void 0;n.split=function(r,n){var i=this;if(r===void 0&&n===0){return[]}if(f.call(r)!=="[object RegExp]"){return ne.call(this,r,n)}var a=[],o=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),l=0,u,s,c,h;r=new RegExp(r.source,o+"g");i+="";if(!e){u=new RegExp("^"+r.source+"$(?!\\s)",o)}n=n===void 0?-1>>>0:O(n);while(s=r.exec(i)){c=s.index+s[0].length;if(c>l){a.push(i.slice(l,s.index));if(!e&&s.length>1){s[0].replace(u,function(){for(var t=1;t<arguments.length-2;t++){if(arguments[t]===void 0){s[t]=void 0}}})}if(s.length>1&&s.index<i.length){t.push.apply(a,s.slice(1))}h=s[0].length;l=c;if(a.length>=n){break}}if(r.lastIndex===s.index){r.lastIndex++}}if(l===i.length){if(h||!r.test("")){a.push("")}}else{a.push(i.slice(l))}return a.length>n?a.slice(0,n):a}})()}else if("0".split(void 0,0).length){n.split=function $e(t,e){if(t===void 0&&e===0){return[]}return ne.call(this,t,e)}}var ie=n.replace;var ae=function(){var t=[];"x".replace(/x(.)?/g,function(e,r){t.push(r)});return t.length===1&&typeof t[0]==="undefined"}();if(!ae){n.replace=function Ge(t,e){var r=c(e);var n=h(t)&&/\)[*?]/.test(t.source);if(!r||!n){return ie.call(this,t,e)}else{var i=function(r){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(r);t.lastIndex=i;a.push(arguments[n-2],arguments[n-1]);return e.apply(this,a)};return ie.call(this,t,i)}}}var oe=n.substr;var le="".substr&&"0b".substr(-1)!=="b";m(n,{substr:function Be(t,e){return oe.call(this,t<0?(t=this.length+t)<0?0:t:t,e)}},le);var ue="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var se="\u200b";var fe="["+ue+"]";var ce=new RegExp("^"+fe+fe+"*");var he=new RegExp(fe+fe+"*$");var pe=n.trim&&(ue.trim()||!se.trim());m(n,{trim:function He(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(ce,"").replace(he,"")}},pe);if(parseInt(ue+"08")!==8||parseInt(ue+"0x16")!==22){parseInt=function(t){var e=/^0[xX]/;return function r(n,i){n=String(n).trim();if(!Number(i)){i=e.test(n)?16:10}return t(n,i)}}(parseInt)}});
//# sourceMappingURL=es5-shim.map