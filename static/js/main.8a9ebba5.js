/*! For license information please see main.8a9ebba5.js.LICENSE.txt */
(()=>{var e={6339:(e,t,n)=>{"use strict";n.d(t,{A:()=>ie});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=Math.abs,a=String.fromCharCode,o=Object.assign;function s(e){return e.trim()}function l(e,t,n){return e.replace(t,n)}function c(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function d(e,t,n){return e.slice(t,n)}function p(e){return e.length}function f(e){return e.length}function h(e,t){return t.push(e),e}var m=1,g=1,x=0,y=0,v=0,b="";function w(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:m,column:g,length:o,return:""}}function S(e,t){return o(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function E(){return v=y>0?u(b,--y):0,g--,10===v&&(g=1,m--),v}function k(){return v=y<x?u(b,y++):0,g++,10===v&&(g=1,m++),v}function C(){return u(b,y)}function T(){return y}function j(e,t){return d(b,e,t)}function O(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _(e){return m=g=1,x=p(b=e),y=0,[]}function P(e){return b="",e}function A(e){return s(j(y-1,z(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(v=C())&&v<33;)k();return O(e)>2||O(v)>3?"":" "}function R(e,t){for(;--t&&k()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return j(e,T()+(t<6&&32==C()&&32==k()))}function z(e){for(;k();)switch(v){case e:return y;case 34:case 39:34!==e&&39!==e&&z(v);break;case 40:41===e&&z(e);break;case 92:k()}return y}function I(e,t){for(;k()&&e+v!==57&&(e+v!==84||47!==C()););return"/*"+j(t,y-1)+"*"+a(47===e?e:k())}function N(e){for(;!O(C());)k();return j(e,y)}var L="-ms-",D="-moz-",$="-webkit-",F="comm",V="rule",B="decl",G="@keyframes";function H(e,t){for(var n="",r=f(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function U(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case B:return e.return=e.return||e.value;case F:return"";case G:return e.return=e.value+"{"+H(e.children,r)+"}";case V:e.value=e.props.join(",")}return p(n=H(e.children,r))?e.return=e.value+"{"+n+"}":""}function W(e){return P(K("",null,null,null,[""],e=_(e),0,[0],e))}function K(e,t,n,r,i,o,s,d,f){for(var m=0,g=0,x=s,y=0,v=0,b=0,w=1,S=1,j=1,O=0,_="",P=i,z=o,L=r,D=_;S;)switch(b=O,O=k()){case 40:if(108!=b&&58==u(D,x-1)){-1!=c(D+=l(A(O),"&","&\f"),"&\f")&&(j=-1);break}case 34:case 39:case 91:D+=A(O);break;case 9:case 10:case 13:case 32:D+=M(b);break;case 92:D+=R(T()-1,7);continue;case 47:switch(C()){case 42:case 47:h(Y(I(k(),T()),t,n),f);break;default:D+="/"}break;case 123*w:d[m++]=p(D)*j;case 125*w:case 59:case 0:switch(O){case 0:case 125:S=0;case 59+g:-1==j&&(D=l(D,/\f/g,"")),v>0&&p(D)-x&&h(v>32?X(D+";",r,n,x-1):X(l(D," ","")+";",r,n,x-2),f);break;case 59:D+=";";default:if(h(L=q(D,t,n,m,g,i,d,_,P=[],z=[],x),o),123===O)if(0===g)K(D,t,L,L,P,o,x,d,z);else switch(99===y&&110===u(D,3)?100:y){case 100:case 108:case 109:case 115:K(e,L,L,r&&h(q(e,L,L,0,0,i,d,_,i,P=[],x),z),i,z,x,d,r?P:z);break;default:K(D,L,L,L,[""],z,0,d,z)}}m=g=v=0,w=j=1,_=D="",x=s;break;case 58:x=1+p(D),v=b;default:if(w<1)if(123==O)--w;else if(125==O&&0==w++&&125==E())continue;switch(D+=a(O),O*w){case 38:j=g>0?1:(D+="\f",-1);break;case 44:d[m++]=(p(D)-1)*j,j=1;break;case 64:45===C()&&(D+=A(k())),y=C(),g=x=p(_=D+=N(T())),O++;break;case 45:45===b&&2==p(D)&&(w=0)}}return o}function q(e,t,n,r,a,o,c,u,p,h,m){for(var g=a-1,x=0===a?o:[""],y=f(x),v=0,b=0,S=0;v<r;++v)for(var E=0,k=d(e,g+1,g=i(b=c[v])),C=e;E<y;++E)(C=s(b>0?x[E]+" "+k:l(k,/&\f/g,x[E])))&&(p[S++]=C);return w(e,t,n,0===a?V:u,p,h,m)}function Y(e,t,n){return w(e,t,n,F,a(v),d(e,2,-2),0)}function X(e,t,n,r){return w(e,t,n,B,d(e,0,r),d(e,r+1,-1),r)}var Q=function(e,t,n){for(var r=0,i=0;r=i,i=C(),38===r&&12===i&&(t[n]=1),!O(i);)k();return j(e,y)},J=function(e,t){return P(function(e,t){var n=-1,r=44;do{switch(O(r)){case 0:38===r&&12===C()&&(t[n]=1),e[n]+=Q(y-1,t,n);break;case 2:e[n]+=A(r);break;case 4:if(44===r){e[++n]=58===C()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=a(r)}}while(r=k());return e}(_(e),t))},Z=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Z.get(n))&&!r){Z.set(e,!0);for(var i=[],a=J(t,i),o=n.props,s=0,l=0;s<a.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=i[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ne(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+D+e+L+e+e;case 6828:case 4268:return $+e+L+e+e;case 6165:return $+e+L+"flex-"+e+e;case 5187:return $+e+l(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return $+e+L+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return $+e+L+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+L+l(e,"shrink","negative")+e;case 5292:return $+e+L+l(e,"basis","preferred-size")+e;case 6060:return $+"box-"+l(e,"-grow","")+$+e+L+l(e,"grow","positive")+e;case 4554:return $+l(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+D+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~c(e,"stretch")?ne(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,p(e)-3-(~c(e,"!important")&&10))){case 107:return l(e,":",":"+$)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(45===u(e,14)?"inline-":"")+"box$3$1"+$+"$2$3$1"+L+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return $+e+L+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+L+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+L+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+L+e+e}return e}var re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=ne(e.value,e.length);break;case G:return H([S(e,{value:l(e.value,"@","@"+$)})],r);case V:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return H([S(e,{props:[l(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return H([S(e,{props:[l(t,/:(plac\w+)/,":"+$+"input-$1")]}),S(e,{props:[l(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[l(t,/:(plac\w+)/,L+"input-$1")]})],r)}return""}))}}],ie=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i,a,o=e.stylisPlugins||re,s={},l=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;l.push(e)}));var c,u,d=[U,(u=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],p=function(e){var t=f(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}([ee,te].concat(o,d));a=function(e,t,n,r){c=n,H(W(e?e+"{"+t.styles+"}":t.styles),p),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new r({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:a};return h.sheet.hydrate(l),h}},4575:(e,t,n)=>{"use strict";n.d(t,{C:()=>o,T:()=>l,w:()=>s});var r=n(5043),i=n(6339),a=(n(3504),n(9436),r.createContext("undefined"!==typeof HTMLElement?(0,i.A)({key:"css"}):null)),o=a.Provider,s=function(e){return(0,r.forwardRef)((function(t,n){var i=(0,r.useContext)(a);return e(t,i,n)}))},l=r.createContext({})},3290:(e,t,n)=>{"use strict";n.d(t,{AH:()=>c,i7:()=>u,mL:()=>l});var r=n(4575),i=n(5043),a=n(1722),o=n(9436),s=n(3504),l=(n(6339),n(219),(0,r.w)((function(e,t){var n=e.styles,l=(0,s.J)([n],void 0,i.useContext(r.T)),c=i.useRef();return(0,o.i)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),c.current=[n,r],function(){n.flush()}}),[t]),(0,o.i)((function(){var e=c.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==l.next&&(0,a.sk)(t,l.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",l,n,!1)}}),[t,l.name]),null})));function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.J)(t)}var u=function(){var e=c.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},3504:(e,t,n)=>{"use strict";n.d(t,{J:()=>g});var r={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function i(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var a=!1,o=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!==typeof e},u=i((function(e){return l(e)?e:e.replace(o,"-$&").toLowerCase()})),d=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(s,(function(e,t,n){return h={name:t,styles:n,next:h},t}))}return 1===r[e]||l(e)||"number"!==typeof t||0===t?t:t+"px"},p="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function f(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var i=n;if(1===i.anim)return h={name:i.name,styles:i.styles,next:h},i.name;var o=n;if(void 0!==o.styles){var s=o.next;if(void 0!==s)for(;void 0!==s;)h={name:s.name,styles:s.styles,next:h},s=s.next;return o.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=f(e,t,n[i])+";";else for(var o in n){var s=n[o];if("object"!==typeof s){var l=s;null!=t&&void 0!==t[l]?r+=o+"{"+t[l]+"}":c(l)&&(r+=u(o)+":"+d(o,l)+";")}else{if("NO_COMPONENT_SELECTOR"===o&&a)throw new Error(p);if(!Array.isArray(s)||"string"!==typeof s[0]||null!=t&&void 0!==t[s[0]]){var h=f(e,t,s);switch(o){case"animation":case"animationName":r+=u(o)+":"+h+";";break;default:r+=o+"{"+h+"}"}}else for(var m=0;m<s.length;m++)c(s[m])&&(r+=u(o)+":"+d(o,s[m])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var l=h,m=n(e);return h=l,f(e,t,m)}}var g=n;if(null==t)return g;var x=t[g];return void 0!==x?x:g}var h,m=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function g(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";h=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,i+=f(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++){if(i+=f(n,t,e[o]),r)i+=a[o]}m.lastIndex=0;for(var s,l="";null!==(s=m.exec(i));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+l;return{name:c,styles:i,next:h}}},8750:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var r=n(8168),i=n(5043);function a(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=a((function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=n(4575),c=n(1722),u=n(3504),d=n(9436),p=s,f=function(e){return"theme"!==e},h=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?p:f},m=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},g=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return(0,c.SF)(t,n,r),(0,d.s)((function(){return(0,c.sk)(t,n,r)})),null},x=function e(t,n){var a,o,s=t.__emotion_real===t,d=s&&t.__emotion_base||t;void 0!==n&&(a=n.label,o=n.target);var p=m(t,n,s),f=p||h(d),x=!f("as");return function(){var y=arguments,v=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&v.push("label:"+a+";"),null==y[0]||void 0===y[0].raw)v.push.apply(v,y);else{v.push(y[0][0]);for(var b=y.length,w=1;w<b;w++)v.push(y[w],y[0][w])}var S=(0,l.w)((function(e,t,n){var r=x&&e.as||d,a="",s=[],m=e;if(null==e.theme){for(var y in m={},e)m[y]=e[y];m.theme=i.useContext(l.T)}"string"===typeof e.className?a=(0,c.Rk)(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var b=(0,u.J)(v.concat(s),t.registered,m);a+=t.key+"-"+b.name,void 0!==o&&(a+=" "+o);var w=x&&void 0===p?h(r):f,S={};for(var E in e)x&&"as"===E||w(E)&&(S[E]=e[E]);return S.className=a,n&&(S.ref=n),i.createElement(i.Fragment,null,i.createElement(g,{cache:t,serialized:b,isStringTag:"string"===typeof r}),i.createElement(r,S))}));return S.displayName=void 0!==a?a:"Styled("+("string"===typeof d?d:d.displayName||d.name||"Component")+")",S.defaultProps=t.defaultProps,S.__emotion_real=S,S.__emotion_base=d,S.__emotion_styles=v,S.__emotion_forwardProp=p,Object.defineProperty(S,"toString",{value:function(){return"."+o}}),S.withComponent=function(t,i){return e(t,(0,r.A)({},n,i,{shouldForwardProp:m(S,i,!0)})).apply(void 0,v)},S}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){x[e]=x(e)}))},9436:(e,t,n)=>{"use strict";var r;n.d(t,{i:()=>s,s:()=>o});var i=n(5043),a=!!(r||(r=n.t(i,2))).useInsertionEffect&&(r||(r=n.t(i,2))).useInsertionEffect,o=a||function(e){return e()},s=a||i.useLayoutEffect},1722:(e,t,n)=>{"use strict";n.d(t,{Rk:()=>r,SF:()=>i,sk:()=>a});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var i=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},a=function(e,t,n){i(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}},5881:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case s:case o:case p:case f:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case m:case h:case l:return e;default:return t}}case i:return t}}}n=Symbol.for("react.module.reference")},805:(e,t,n)=>{"use strict";n(5881)},3778:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalStyles:()=>u,StyledEngineProvider:()=>c,ThemeContext:()=>a.T,css:()=>i.AH,default:()=>d,internal_processStyles:()=>p,keyframes:()=>i.i7});var r=n(8750),i=n(3290),a=n(4575),o=(n(5043),n(6339)),s=n(579);let l;function c(e){const{injectFirst:t,children:n}=e;return t&&l?(0,s.jsx)(a.C,{value:l,children:n}):n}function u(e){const{styles:t,defaultTheme:n={}}=e,r="function"===typeof t?e=>{return t(void 0===(r=e)||null===r||0===Object.keys(r).length?n:e);var r}:t;return(0,s.jsx)(i.mL,{styles:r})}function d(e,t){return(0,r.A)(e,t)}"object"===typeof document&&(l=(0,o.A)({key:"css",prepend:!0}));const p=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}},7266:(e,t,n)=>{"use strict";var r=n(4994);t.X4=f,t.e$=h,t.eM=function(e,t){const n=p(e),r=p(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},t.a=m;var i=r(n(457)),a=r(n(9214));function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,a.default)(e,t,n)}function s(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?`rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}function l(e){if(e.type)return e;if("#"===e.charAt(0))return l(s(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,i.default)(9,e));let r,a=e.substring(t+1,e.length-1);if("color"===n){if(a=a.split(" "),r=a.shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r))throw new Error((0,i.default)(10,r))}else a=a.split(",");return a=a.map((e=>parseFloat(e))),{type:n,values:a,colorSpace:r}}const c=e=>{const t=l(e);return t.values.slice(0,3).map(((e,n)=>-1!==t.type.indexOf("hsl")&&0!==n?`${e}%`:e)).join(" ")};function u(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function d(e){e=l(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,a=r*Math.min(i,1-i),o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return i-a*Math.max(Math.min(t-3,9-t,1),-1)};let s="rgb";const c=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(s+="a",c.push(t[3])),u({type:s,values:c})}function p(e){let t="hsl"===(e=l(e)).type||"hsla"===e.type?l(d(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function f(e,t){return e=l(e),t=o(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,u(e)}function h(e,t){if(e=l(e),t=o(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return u(e)}function m(e,t){if(e=l(e),t=o(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return u(e)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return p(e)>.5?h(e,t):m(e,t)}},8052:(e,t,n)=>{"use strict";var r=n(4994);t.Ay=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=m,rootShouldForwardProp:r=h,slotShouldForwardProp:l=h}=e,u=e=>(0,c.default)((0,i.default)({},e,{theme:x((0,i.default)({},e,{defaultTheme:n,themeId:t}))}));return u.__mui_systemSx=!0,function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:d,slot:f,skipVariantsResolver:m,skipSx:b,overridesResolver:w=y(g(f))}=c,S=(0,a.default)(c,p),E=void 0!==m?m:f&&"Root"!==f&&"root"!==f||!1,k=b||!1;let C=h;"Root"===f||"root"===f?C=r:f?C=l:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(C=void 0);const T=(0,o.default)(e,(0,i.default)({shouldForwardProp:C,label:undefined},S)),j=e=>"function"===typeof e&&e.__emotion_real!==e||(0,s.isPlainObject)(e)?r=>v(e,(0,i.default)({},r,{theme:x({theme:r.theme,defaultTheme:n,themeId:t})})):e,O=function(r){let a=j(r);for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];const c=s?s.map(j):[];d&&w&&c.push((e=>{const r=x((0,i.default)({},e,{defaultTheme:n,themeId:t}));if(!r.components||!r.components[d]||!r.components[d].styleOverrides)return null;const a=r.components[d].styleOverrides,o={};return Object.entries(a).forEach((t=>{let[n,a]=t;o[n]=v(a,(0,i.default)({},e,{theme:r}))})),w(e,o)})),d&&!E&&c.push((e=>{var r;const a=x((0,i.default)({},e,{defaultTheme:n,themeId:t}));return v({variants:null==a||null==(r=a.components)||null==(r=r[d])?void 0:r.variants},(0,i.default)({},e,{theme:a}))})),k||c.push(u);const p=c.length-s.length;if(Array.isArray(r)&&p>0){const e=new Array(p).fill("");a=[...r,...e],a.raw=[...r.raw,...e]}const f=T(a,...c);return e.muiName&&(f.muiName=e.muiName),f};return T.withConfig&&(O.withConfig=T.withConfig),O}};var i=r(n(4634)),a=r(n(4893)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(3778)),s=n(9482),l=(r(n(7918)),r(n(3382)),r(n(4989))),c=r(n(3234));const u=["ownerState"],d=["variants"],p=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const m=(0,l.default)(),g=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function x(e){let{defaultTheme:t,theme:n,themeId:r}=e;return i=n,0===Object.keys(i).length?t:n[r]||n;var i}function y(e){return e?(t,n)=>n[e]:null}function v(e,t){let{ownerState:n}=t,r=(0,a.default)(t,u);const o="function"===typeof e?e((0,i.default)({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap((e=>v(e,(0,i.default)({ownerState:n},r))));if(o&&"object"===typeof o&&Array.isArray(o.variants)){const{variants:e=[]}=o;let t=(0,a.default)(o,d);return e.forEach((e=>{let a=!0;"function"===typeof e.props?a=e.props((0,i.default)({ownerState:n},r,n)):Object.keys(e.props).forEach((t=>{(null==n?void 0:n[t])!==e.props[t]&&r[t]!==e.props[t]&&(a=!1)})),a&&(Array.isArray(t)||(t=[t]),t.push("function"===typeof e.style?e.style((0,i.default)({ownerState:n},r,n)):e.style))})),t}return o}},9751:(e,t,n)=>{"use strict";n.d(t,{EU:()=>o,NI:()=>a,vf:()=>s,zu:()=>r});const r={xs:0,sm:600,md:900,lg:1200,xl:1536},i={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function a(e,t,n){const a=e.theme||{};if(Array.isArray(t)){const e=a.breakpoints||i;return t.reduce(((r,i,a)=>(r[e.up(e.keys[a])]=n(t[a]),r)),{})}if("object"===typeof t){const e=a.breakpoints||i;return Object.keys(t).reduce(((i,a)=>{if(-1!==Object.keys(e.values||r).indexOf(a)){i[e.up(a)]=n(t[a],a)}else{const e=a;i[e]=t[e]}return i}),{})}return n(t)}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;return(null==(t=e.keys)?void 0:t.reduce(((t,n)=>(t[e.up(n)]={},t)),{}))||{}}function s(e,t){return e.reduce(((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e}),t)}},9703:(e,t,n)=>{"use strict";function r(e,t){const n=this;if(n.vars&&"function"===typeof n.getColorSchemeSelector){const r=n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)");return{[r]:t}}return n.palette.mode===e?t:{}}n.d(t,{A:()=>r})},4853:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(8587),i=n(8168);const a=["values","unit","step"],o=e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>(0,i.A)({},e,{[t.key]:t.val})),{})};function s(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:s=5}=e,l=(0,r.A)(e,a),c=o(t),u=Object.keys(c);function d(e){return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n})`}function p(e){return`@media (max-width:${("number"===typeof t[e]?t[e]:e)-s/100}${n})`}function f(e,r){const i=u.indexOf(r);return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==i&&"number"===typeof t[u[i]]?t[u[i]]:r)-s/100}${n})`}return(0,i.A)({keys:u,values:c,up:d,down:p,between:f,only:function(e){return u.indexOf(e)+1<u.length?f(e,u[u.indexOf(e)+1]):d(e)},not:function(e){const t=u.indexOf(e);return 0===t?d(u[1]):t===u.length-1?p(u[t]):f(e,u[u.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},l)}},8280:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(8168),i=n(8587),a=n(9172),o=n(4853);const s={borderRadius:4};var l=n(8604);var c=n(8812),u=n(7758),d=n(9703);const p=["breakpoints","palette","spacing","shape"];const f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t={},palette:n={},spacing:f,shape:h={}}=e,m=(0,i.A)(e,p),g=(0,o.A)(t),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;const t=(0,l.LX)({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0===n.length?[1]:n).map((e=>{const n=t(e);return"number"===typeof n?`${n}px`:n})).join(" ")};return n.mui=!0,n}(f);let y=(0,a.A)({breakpoints:g,direction:"ltr",components:{},palette:(0,r.A)({mode:"light"},n),spacing:x,shape:(0,r.A)({},s,h)},m);y.applyStyles=d.A;for(var v=arguments.length,b=new Array(v>1?v-1:0),w=1;w<v;w++)b[w-1]=arguments[w];return y=b.reduce(((e,t)=>(0,a.A)(e,t)),y),y.unstable_sxConfig=(0,r.A)({},u.A,null==m?void 0:m.unstable_sxConfig),y.unstable_sx=function(e){return(0,c.A)({sx:e,theme:this})},y}},4989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,private_createBreakpoints:()=>i.A,unstable_applyStyles:()=>a.A});var r=n(8280),i=n(4853),a=n(9703)},3815:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(9172);const i=function(e,t){return t?(0,r.A)(e,t,{clone:!1}):e}},8604:(e,t,n)=>{"use strict";n.d(t,{LX:()=>h,MA:()=>f,_W:()=>m,Lc:()=>y,Ms:()=>v});var r=n(9751),i=n(7162),a=n(3815);const o={m:"margin",p:"padding"},s={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},l={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},c=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!l[e])return[e];e=l[e]}const[t,n]=e.split(""),r=o[t],i=s[n]||"";return Array.isArray(i)?i.map((e=>r+e)):[r+i]})),u=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],d=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],p=[...u,...d];function f(e,t,n,r){var a;const o=null!=(a=(0,i.Yn)(e,t,!1))?a:n;return"number"===typeof o?e=>"string"===typeof e?e:o*e:Array.isArray(o)?e=>"string"===typeof e?e:o[e]:"function"===typeof o?o:()=>{}}function h(e){return f(e,"spacing",8)}function m(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:`-${n}`}function g(e,t,n,i){if(-1===t.indexOf(n))return null;const a=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=m(t,n),e)),{})}(c(n),i),o=e[n];return(0,r.NI)(e,o,a)}function x(e,t){const n=h(e.theme);return Object.keys(e).map((r=>g(e,t,r,n))).reduce(a.A,{})}function y(e){return x(e,u)}function v(e){return x(e,d)}function b(e){return x(e,p)}y.propTypes={},y.filterProps=u,v.propTypes={},v.filterProps=d,b.propTypes={},b.filterProps=p},7162:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>s,BO:()=>o,Yn:()=>a});var r=n(7598),i=n(9751);function a(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=n)return n}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function o(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r="function"===typeof e?e(n):Array.isArray(e)?e[n]||i:a(e,n)||i,t&&(r=t(r,i,e)),r}const s=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:s,transform:l}=e,c=e=>{if(null==e[t])return null;const c=e[t],u=a(e.theme,s)||{};return(0,i.NI)(e,c,(e=>{let i=o(u,l,e);return e===i&&"string"===typeof e&&(i=o(u,l,`${t}${"default"===e?"":(0,r.A)(e)}`,e)),!1===n?i:{[n]:i}}))};return c.propTypes={},c.filterProps=[t],c}},7758:(e,t,n)=>{"use strict";n.d(t,{A:()=>z});var r=n(8604),i=n(7162),a=n(3815);const o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(((e,t)=>(t.filterProps.forEach((n=>{e[n]=t})),e)),{}),i=e=>Object.keys(e).reduce(((t,n)=>r[n]?(0,a.A)(t,r[n](e)):t),{});return i.propTypes={},i.filterProps=t.reduce(((e,t)=>e.concat(t.filterProps)),[]),i};var s=n(9751);function l(e){return"number"!==typeof e?e:`${e}px solid`}function c(e,t){return(0,i.Ay)({prop:e,themeKey:"borders",transform:t})}const u=c("border",l),d=c("borderTop",l),p=c("borderRight",l),f=c("borderBottom",l),h=c("borderLeft",l),m=c("borderColor"),g=c("borderTopColor"),x=c("borderRightColor"),y=c("borderBottomColor"),v=c("borderLeftColor"),b=c("outline",l),w=c("outlineColor"),S=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=(0,r.MA)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:(0,r._W)(t,e)});return(0,s.NI)(e,e.borderRadius,n)}return null};S.propTypes={},S.filterProps=["borderRadius"];o(u,d,p,f,h,m,g,x,y,v,S,b,w);const E=e=>{if(void 0!==e.gap&&null!==e.gap){const t=(0,r.MA)(e.theme,"spacing",8,"gap"),n=e=>({gap:(0,r._W)(t,e)});return(0,s.NI)(e,e.gap,n)}return null};E.propTypes={},E.filterProps=["gap"];const k=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=(0,r.MA)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:(0,r._W)(t,e)});return(0,s.NI)(e,e.columnGap,n)}return null};k.propTypes={},k.filterProps=["columnGap"];const C=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=(0,r.MA)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:(0,r._W)(t,e)});return(0,s.NI)(e,e.rowGap,n)}return null};C.propTypes={},C.filterProps=["rowGap"];o(E,k,C,(0,i.Ay)({prop:"gridColumn"}),(0,i.Ay)({prop:"gridRow"}),(0,i.Ay)({prop:"gridAutoFlow"}),(0,i.Ay)({prop:"gridAutoColumns"}),(0,i.Ay)({prop:"gridAutoRows"}),(0,i.Ay)({prop:"gridTemplateColumns"}),(0,i.Ay)({prop:"gridTemplateRows"}),(0,i.Ay)({prop:"gridTemplateAreas"}),(0,i.Ay)({prop:"gridArea"}));function T(e,t){return"grey"===t?t:e}o((0,i.Ay)({prop:"color",themeKey:"palette",transform:T}),(0,i.Ay)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:T}),(0,i.Ay)({prop:"backgroundColor",themeKey:"palette",transform:T}));function j(e){return e<=1&&0!==e?100*e+"%":e}const O=(0,i.Ay)({prop:"width",transform:j}),_=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r;const i=(null==(n=e.theme)||null==(n=n.breakpoints)||null==(n=n.values)?void 0:n[t])||s.zu[t];return i?"px"!==(null==(r=e.theme)||null==(r=r.breakpoints)?void 0:r.unit)?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:j(t)}};return(0,s.NI)(e,e.maxWidth,t)}return null};_.filterProps=["maxWidth"];const P=(0,i.Ay)({prop:"minWidth",transform:j}),A=(0,i.Ay)({prop:"height",transform:j}),M=(0,i.Ay)({prop:"maxHeight",transform:j}),R=(0,i.Ay)({prop:"minHeight",transform:j}),z=((0,i.Ay)({prop:"size",cssProperty:"width",transform:j}),(0,i.Ay)({prop:"size",cssProperty:"height",transform:j}),o(O,_,P,A,M,R,(0,i.Ay)({prop:"boxSizing"})),{border:{themeKey:"borders",transform:l},borderTop:{themeKey:"borders",transform:l},borderRight:{themeKey:"borders",transform:l},borderBottom:{themeKey:"borders",transform:l},borderLeft:{themeKey:"borders",transform:l},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:l},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:S},color:{themeKey:"palette",transform:T},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:T},backgroundColor:{themeKey:"palette",transform:T},p:{style:r.Ms},pt:{style:r.Ms},pr:{style:r.Ms},pb:{style:r.Ms},pl:{style:r.Ms},px:{style:r.Ms},py:{style:r.Ms},padding:{style:r.Ms},paddingTop:{style:r.Ms},paddingRight:{style:r.Ms},paddingBottom:{style:r.Ms},paddingLeft:{style:r.Ms},paddingX:{style:r.Ms},paddingY:{style:r.Ms},paddingInline:{style:r.Ms},paddingInlineStart:{style:r.Ms},paddingInlineEnd:{style:r.Ms},paddingBlock:{style:r.Ms},paddingBlockStart:{style:r.Ms},paddingBlockEnd:{style:r.Ms},m:{style:r.Lc},mt:{style:r.Lc},mr:{style:r.Lc},mb:{style:r.Lc},ml:{style:r.Lc},mx:{style:r.Lc},my:{style:r.Lc},margin:{style:r.Lc},marginTop:{style:r.Lc},marginRight:{style:r.Lc},marginBottom:{style:r.Lc},marginLeft:{style:r.Lc},marginX:{style:r.Lc},marginY:{style:r.Lc},marginInline:{style:r.Lc},marginInlineStart:{style:r.Lc},marginInlineEnd:{style:r.Lc},marginBlock:{style:r.Lc},marginBlockStart:{style:r.Lc},marginBlockEnd:{style:r.Lc},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:E},rowGap:{style:C},columnGap:{style:k},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:j},maxWidth:{style:_},minWidth:{transform:j},height:{transform:j},maxHeight:{transform:j},minHeight:{transform:j},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}})},8698:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(8168),i=n(8587),a=n(9172),o=n(7758);const s=["sx"],l=e=>{var t,n;const r={systemProps:{},otherProps:{}},i=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:o.A;return Object.keys(e).forEach((t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function c(e){const{sx:t}=e,n=(0,i.A)(e,s),{systemProps:o,otherProps:c}=l(n);let u;return u=Array.isArray(t)?[o,...t]:"function"===typeof t?function(){const e=t(...arguments);return(0,a.Q)(e)?(0,r.A)({},o,e):o}:(0,r.A)({},o,t),(0,r.A)({},c,{sx:u})}},3234:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,extendSxProp:()=>i.A,unstable_createStyleFunctionSx:()=>r.k,unstable_defaultSxConfig:()=>a.A});var r=n(8812),i=n(8698),a=n(7758)},8812:(e,t,n)=>{"use strict";n.d(t,{A:()=>u,k:()=>l});var r=n(7598),i=n(3815),a=n(7162),o=n(9751),s=n(7758);function l(){function e(e,t,n,i){const s={[e]:t,theme:n},l=i[e];if(!l)return{[e]:t};const{cssProperty:c=e,themeKey:u,transform:d,style:p}=l;if(null==t)return null;if("typography"===u&&"inherit"===t)return{[e]:t};const f=(0,a.Yn)(n,u)||{};if(p)return p(s);return(0,o.NI)(s,t,(t=>{let n=(0,a.BO)(f,d,t);return t===n&&"string"===typeof t&&(n=(0,a.BO)(f,d,`${e}${"default"===t?"":(0,r.A)(t)}`,t)),!1===c?n:{[c]:n}}))}return function t(n){var r;const{sx:a,theme:l={}}=n||{};if(!a)return null;const c=null!=(r=l.unstable_sxConfig)?r:s.A;function u(n){let r=n;if("function"===typeof n)r=n(l);else if("object"!==typeof n)return n;if(!r)return null;const a=(0,o.EU)(l.breakpoints),s=Object.keys(a);let u=a;return Object.keys(r).forEach((n=>{const a=(s=r[n],d=l,"function"===typeof s?s(d):s);var s,d;if(null!==a&&void 0!==a)if("object"===typeof a)if(c[n])u=(0,i.A)(u,e(n,a,l,c));else{const e=(0,o.NI)({theme:l},a,(e=>({[n]:e})));!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(((e,t)=>e.concat(Object.keys(t))),[]),i=new Set(r);return t.every((e=>i.size===Object.keys(e).length))}(e,a)?u=(0,i.A)(u,e):u[n]=t({sx:a,theme:l})}else u=(0,i.A)(u,e(n,a,l,c))})),(0,o.vf)(s,u)}return Array.isArray(a)?a.map(u):u(a)}}const c=l();c.filterProps=["sx"];const u=c},7598:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(7868);function i(e){if("string"!==typeof e)throw new Error((0,r.A)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},7918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7598)},9214:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MIN_SAFE_INTEGER,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number.MAX_SAFE_INTEGER;return Math.max(t,Math.min(e,n))}},9172:(e,t,n)=>{"use strict";n.d(t,{A:()=>o,Q:()=>i});var r=n(8168);function i(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function a(e){if(!i(e))return e;const t={};return Object.keys(e).forEach((n=>{t[n]=a(e[n])})),t}function o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0};const s=n.clone?(0,r.A)({},e):e;return i(e)&&i(t)&&Object.keys(t).forEach((r=>{i(t[r])&&Object.prototype.hasOwnProperty.call(e,r)&&i(e[r])?s[r]=o(e[r],t[r],n):n.clone?s[r]=i(t[r])?a(t[r]):t[r]:s[r]=t[r]})),s}},9482:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A,isPlainObject:()=>r.Q});var r=n(9172)},7868:(e,t,n)=>{"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{A:()=>r})},457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.A});var r=n(7868)},3382:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l,getFunctionName:()=>a});var r=n(9565);const i=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function a(e){const t=`${e}`.match(i);return t&&t[1]||""}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.displayName||e.name||a(e)||t}function s(e,t,n){const r=o(t);return e.displayName||(""!==r?`${n}(${r})`:n)}function l(e){if(null!=e){if("string"===typeof e)return e;if("function"===typeof e)return o(e,"Component");if("object"===typeof e)switch(e.$$typeof){case r.ForwardRef:return s(e,e.render,"ForwardRef");case r.Memo:return s(e,e.type,"memo");default:return}}}},8609:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case s:case o:case p:case f:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case m:case h:case l:return e;default:return t}}case i:return t}}}n=Symbol.for("react.module.reference"),t.ForwardRef=d,t.Memo=h},9565:(e,t,n)=>{"use strict";e.exports=n(8609)},7904:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CountUp:()=>i});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,r,a,o=e<0?"-":"";t=Math.abs(e).toFixed(i.options.decimalPlaces);var s=(t+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){a="";for(var l=3,c=0,u=0,d=n.length;u<d;++u)i.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(a=i.options.separator+a),c++,a=n[d-u-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return i.options.numerals[+e]}))),o+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},219:(e,t,n)=>{"use strict";var r=n(3763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?o:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=o;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var i=f(n);i&&i!==h&&e(t,i,r)}var o=u(n);d&&(o=o.concat(d(n)));for(var s=l(t),m=l(n),g=0;g<o.length;++g){var x=o[g];if(!a[x]&&(!r||!r[x])&&(!m||!m[x])&&(!s||!s[x])){var y=p(n,x);try{c(t,x,y)}catch(v){}}}}return t}},4983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case a:case s:case o:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case m:case l:return e;default:return t}}case i:return t}}}function S(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=a,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return S(e)||w(e)===u},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===d||e===s||e===o||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x)},t.typeOf=w},3763:(e,t,n)=>{"use strict";e.exports=n(4983)},381:(e,t,n)=>{var r="Expected a function",i=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=d||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,x=function(){return f.Date.now()};function y(e,t,n){var i,a,o,s,l,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=o}function w(){var e=x();if(y(e))return S(e);l=setTimeout(w,function(e){var n=t-(e-c);return p?g(n,o-(e-u)):n}(e))}function S(e){return l=void 0,f&&i?h(e):(i=a=void 0,s)}function E(){var e=x(),n=y(e);if(i=arguments,a=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),d?h(e):s}(c);if(p)return l=setTimeout(w,t),h(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=b(t)||0,v(n)&&(d=!!n.leading,o=(p="maxWait"in n)?m(b(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),E.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=a=l=void 0},E.flush=function(){return void 0===l?s:S(x())},E}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==a}(e))return i;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return v(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),y(e,t,{leading:i,maxWait:t,trailing:a})}},2123:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var a,o,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))n.call(a,c)&&(s[c]=a[c]);if(t){o=t(a);for(var u=0;u<o.length;u++)r.call(a,o[u])&&(s[o[u]]=a[o[u]])}}return s}},1497:(e,t,n)=>{"use strict";var r=n(3218);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5751:(e,t,n)=>{"use strict";var r=n(5043),i=n(7904);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(e){var t=r.useRef(e);return f((function(){t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},x=function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return void 0!==d(e,2)[1]}))),n=r.useMemo((function(){return o(o({},g),t)}),[e]),a=n.ref,s=n.startOnMount,l=n.enableReinitialize,c=n.delay,p=n.onEnd,f=n.onStart,x=n.onPauseResume,y=n.onReset,v=n.onUpdate,b=u(n,m),w=r.useRef(),S=r.useRef(),E=r.useRef(!1),k=h((function(){return function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,s=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,p=t.start,f=t.suffix,h=t.useEasing,m=t.useGrouping,g=t.useIndianSeparators,x=t.enableScrollSpy,y=t.scrollSpyDelay,v=t.scrollSpyOnce,b=t.plugin;return new i.CountUp(e,s,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:o,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:f,plugin:b,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:x,scrollSpyDelay:y,scrollSpyOnce:v})}("string"===typeof a?a:a.current,b)})),C=h((function(e){var t=w.current;if(t&&!e)return t;var n=k();return w.current=n,n})),T=h((function(){var e=function(){return C(!0).start((function(){null===p||void 0===p||p({pauseResume:j,reset:O,start:P,update:_})}))};c&&c>0?S.current=setTimeout(e,1e3*c):e(),null===f||void 0===f||f({pauseResume:j,reset:O,update:_})})),j=h((function(){C().pauseResume(),null===x||void 0===x||x({reset:O,start:P,update:_})})),O=h((function(){C().el&&(S.current&&clearTimeout(S.current),C().reset(),null===y||void 0===y||y({pauseResume:j,start:P,update:_}))})),_=h((function(e){C().update(e),null===v||void 0===v||v({pauseResume:j,reset:O,start:P})})),P=h((function(){O(),T()})),A=h((function(e){s&&(e&&O(),T())}));return r.useEffect((function(){E.current?l&&A(!0):(E.current=!0,A())}),[l,E,A,c,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect((function(){return function(){O()}}),[O]),{start:P,pauseResume:j,reset:O,update:_,getCountUp:C}},y=["className","redraw","containerProps","children","style"];t.Ay=function(e){var t=e.className,n=e.redraw,i=e.containerProps,a=e.children,s=e.style,l=u(e,y),d=r.useRef(null),p=r.useRef(!1),f=x(o(o({},l),{},{ref:d,startOnMount:"function"!==typeof a||0===e.delay,enableReinitialize:!1})),m=f.start,g=f.reset,v=f.update,b=f.pauseResume,w=f.getCountUp,S=h((function(){m()})),E=h((function(t){e.preserveValue||g(),v(t)})),k=h((function(){"function"!==typeof e.children||d.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){k()}),[k]),r.useEffect((function(){p.current&&E(e.end)}),[e.end,E]);var C=n&&e;return r.useEffect((function(){n&&p.current&&S()}),[S,n,C]),r.useEffect((function(){!n&&p.current&&S()}),[S,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect((function(){p.current=!0}),[]),"function"===typeof a?a({countUpRef:d,start:m,reset:g,update:v,pauseResume:b,getCountUp:w}):r.createElement("span",c({className:t,ref:d,style:s},i),"undefined"!==typeof e.start?w().formattingFn(e.start):"")}},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function v(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),j=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),M=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var N,L=Object.assign;function D(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var $=!1;function F(e,t){if(!e||$)return"";$=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{$=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function V(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case E:return"Fragment";case S:return"Portal";case C:return"Profiler";case k:return"StrictMode";case _:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case T:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function G(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function U(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function W(e){e._valueTracker||(e._valueTracker=function(e){var t=U(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=U(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var xe=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,Ee=null,ke=null;function Ce(e){if(e=vi(e)){if("function"!==typeof Se)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function Te(e){Ee?ke?ke.push(e):ke=[e]:Ee=e}function je(){if(Ee){var e=Ee,t=ke;if(ke=Ee=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Oe(e,t){return e(t)}function _e(){}var Pe=!1;function Ae(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return Oe(e,t,n)}finally{Pe=!1,(null!==Ee||null!==ke)&&(_e(),je())}}function Me(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Re=!1;if(u)try{var ze={};Object.defineProperty(ze,"passive",{get:function(){Re=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch(ue){Re=!1}function Ie(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ne=!1,Le=null,De=!1,$e=null,Fe={onError:function(e){Ne=!0,Le=e}};function Ve(e,t,n,r,i,a,o,s,l){Ne=!1,Le=null,Ie.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ge(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(a(188))}function Ue(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return He(i),e;if(o===r)return He(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?We(e):null}function We(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=We(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,qe=i.unstable_cancelCallback,Ye=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=dt(s):0!==(a&=o)&&(r=dt(a))}else 0!==(o=n&~i)?r=dt(o):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,Et,kt,Ct,Tt=!1,jt=[],Ot=null,_t=null,Pt=null,At=new Map,Mt=new Map,Rt=[],zt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":At.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(t.pointerId)}}function Nt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Lt(e){var t=yi(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ge(n)))return e.blockedOn=t,void Ct(e.priority,(function(){Et(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function $t(e,t,n){Dt(e)&&n.delete(t)}function Ft(){Tt=!1,null!==Ot&&Dt(Ot)&&(Ot=null),null!==_t&&Dt(_t)&&(_t=null),null!==Pt&&Dt(Pt)&&(Pt=null),At.forEach($t),Mt.forEach($t)}function Vt(e,t){e.blockedOn===t&&(e.blockedOn=null,Tt||(Tt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Vt(t,e)}if(0<jt.length){Vt(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Vt(Ot,e),null!==_t&&Vt(_t,e),null!==Pt&&Vt(Pt,e),At.forEach(t),Mt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Lt(n),null===n.blockedOn&&Rt.shift()}var Gt=b.ReactCurrentBatchConfig,Ht=!0;function Ut(e,t,n,r){var i=vt,a=Gt.transition;Gt.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=i,Gt.transition=a}}function Wt(e,t,n,r){var i=vt,a=Gt.transition;Gt.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=i,Gt.transition=a}}function Kt(e,t,n,r){if(Ht){var i=Yt(e,t,n,r);if(null===i)Hr(e,t,r,qt,n),It(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ot=Nt(Ot,e,t,n,r,i),!0;case"dragenter":return _t=Nt(_t,e,t,n,r,i),!0;case"mouseover":return Pt=Nt(Pt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return At.set(a,Nt(At.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Mt.set(a,Nt(Mt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<zt.indexOf(e)){for(;null!==i;){var a=vi(i);if(null!==a&&wt(a),null===(a=Yt(e,t,n,r))&&Hr(e,t,r,qt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var qt=null;function Yt(e,t,n,r){if(qt=null,null!==(e=yi(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ge(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Qt?Qt.value:Qt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=L({},cn,{view:0,detail:0}),pn=an(dn),fn=L({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=an(fn),mn=an(L({},fn,{dataTransfer:0})),gn=an(L({},dn,{relatedTarget:0})),xn=an(L({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=L({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=an(yn),bn=an(L({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},En={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=En[e])&&!!t[e]}function Cn(){return kn}var Tn=L({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=an(Tn),On=an(L({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_n=an(L({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Pn=an(L({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),An=L({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mn=an(An),Rn=[9,13,27,32],zn=u&&"CompositionEvent"in window,In=null;u&&"documentMode"in document&&(In=document.documentMode);var Nn=u&&"TextEvent"in window&&!In,Ln=u&&(!zn||In&&8<In&&11>=In),Dn=String.fromCharCode(32),$n=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Gn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Gn[e.type]:"textarea"===t}function Un(e,t,n,r){Te(r),0<(t=Wr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,Kn=null;function qn(e){Dr(e,0)}function Yn(e){if(K(bi(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Wn&&(Wn.detachEvent("onpropertychange",nr),Kn=Wn=null)}function nr(e){if("value"===e.propertyName&&Yn(Kn)){var t=[];Un(t,Kn,e,we(e)),Ae(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Wn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Kn)}function ar(e,t){if("click"===e)return Yn(t)}function or(e,t){if("input"===e||"change"===e)return Yn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ur(n,a);var o=ur(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,yr=null,vr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Wr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Er={},kr={};function Cr(e){if(Er[e])return Er[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Er[e]=n[t];return e}u&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Tr=Cr("animationend"),jr=Cr("animationiteration"),Or=Cr("animationstart"),_r=Cr("transitionend"),Pr=new Map,Ar="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){Pr.set(e,t),l(t,[e])}for(var Rr=0;Rr<Ar.length;Rr++){var zr=Ar[Rr];Mr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Mr(Tr,"onAnimationEnd"),Mr(jr,"onAnimationIteration"),Mr(Or,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(_r,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if(Ve.apply(this,arguments),Ne){if(!Ne)throw Error(a(198));var u=Le;Ne=!1,Le=null,De||(De=!0,$e=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Lr(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Lr(i,s,c),a=l}}}if(De)throw e=$e,De=!1,$e=null,e}function $r(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Gr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Gr(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Vr]){e[Vr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Nr.has(t)||Fr(t,!1,e),Fr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vr]||(t[Vr]=!0,Fr("selectionchange",!1,t))}}function Gr(e,t,n,r){switch(Xt(t)){case 1:var i=Ut;break;case 4:i=Wt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=yi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Ae((function(){var r=a,i=we(n),o=[];e:{var s=Pr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=_n;break;case Tr:case jr:case Or:l=xn;break;case _r:l=Pn;break;case"scroll":l=pn;break;case"wheel":l=Mn;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=On}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Me(h,p))&&u.push(Ur(h,m,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=On,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:bi(l),f=null==c?s:bi(c),(s=new u(m,h+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,yi(i)===r&&((u=new u(p,h+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,h=0,f=u=l;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==l&&qr(o,s,l,u,!1),null!==c&&null!==d&&qr(o,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xn;else if(Hn(s))if(Qn)g=or;else{g=ir;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ar);switch(g&&(g=g(e,r))?Un(o,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?bi(r):window,e){case"focusin":(Hn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,yr=null);break;case"focusout":yr=xr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,br(o,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(o,n,i)}var y;if(zn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Bn?Fn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Ln&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Bn&&(y=en()):(Jt="value"in(Qt=i)?Qt.value:Qt.textContent,Bn=!0)),0<(x=Wr(r,v)).length&&(v=new bn(v,e,null,n,i),o.push({event:v,listeners:x}),y?v.data=y:null!==(y=Vn(n))&&(v.data=y))),(y=Nn?function(e,t){switch(e){case"compositionend":return Vn(t);case"keypress":return 32!==t.which?null:($n=!0,Dn);case"textInput":return(e=t.data)===Dn&&$n?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!zn&&Fn(e,t)?(e=en(),Zt=Jt=Qt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Wr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}Dr(o,t)}))}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Me(e,n))&&r.unshift(Ur(e,a,i)),null!=(a=Me(e,t))&&r.push(Ur(e,a,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Me(n,a))&&o.unshift(Ur(n,l,s)):i||null!=(l=Me(n,a))&&o.push(Ur(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(a(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Bt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,xi="__reactHandles$"+di;function yi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[fi]||null}var Si=[],Ei=-1;function ki(e){return{current:e}}function Ci(e){0>Ei||(e.current=Si[Ei],Si[Ei]=null,Ei--)}function Ti(e,t){Ei++,Si[Ei]=e.current,e.current=t}var ji={},Oi=ki(ji),_i=ki(!1),Pi=ji;function Ai(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Mi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ri(){Ci(_i),Ci(Oi)}function zi(e,t,n){if(Oi.current!==ji)throw Error(a(168));Ti(Oi,t),Ti(_i,n)}function Ii(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,G(e)||"Unknown",i));return L({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,Pi=Oi.current,Ti(Oi,e),Ti(_i,_i.current),!0}function Li(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ii(e,t,Pi),r.__reactInternalMemoizedMergedChildContext=e,Ci(_i),Ci(Oi),Ti(Oi,e)):Ci(_i),Ti(_i,n)}var Di=null,$i=!1,Fi=!1;function Vi(e){null===Di?Di=[e]:Di.push(e)}function Bi(){if(!Fi&&null!==Di){Fi=!0;var e=0,t=vt;try{var n=Di;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Di=null,$i=!1}catch(i){throw null!==Di&&(Di=Di.slice(e+1)),Ke(Ze,Bi),i}finally{vt=t,Fi=!1}}return null}var Gi=[],Hi=0,Ui=null,Wi=0,Ki=[],qi=0,Yi=null,Xi=1,Qi="";function Ji(e,t){Gi[Hi++]=Wi,Gi[Hi++]=Ui,Ui=e,Wi=t}function Zi(e,t,n){Ki[qi++]=Xi,Ki[qi++]=Qi,Ki[qi++]=Yi,Yi=e;var r=Xi;e=Qi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-ot(t)+i|n<<i|r,Qi=a+e}else Xi=1<<a|n<<i|r,Qi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===Ui;)Ui=Gi[--Hi],Gi[Hi]=null,Wi=Gi[--Hi],Gi[Hi]=null;for(;e===Yi;)Yi=Ki[--qi],Ki[qi]=null,Qi=Ki[--qi],Ki[qi]=null,Xi=Ki[--qi],Ki[qi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Ac(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yi?{id:Xi,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ac(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ua(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function da(e){if(e!==na)return!1;if(!ia)return ua(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw pa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(ua(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=ra;e;)e=ci(e.nextSibling)}function fa(){ra=na=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var ma=b.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function va(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Lc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===E?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===M&&ya(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=zc(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Ic(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=zc(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case S:return(t=Dc(t,e.mode,n)).return=e,t;case M:return p(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Ic(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case S:return n.key===i?u(e,t,n,r):null;case M:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||I(n))return null!==i?null:d(e,t,n,r,null);xa(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case M:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,i,null);xa(t,r)}return null}function m(i,a,s,l){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=f(i,d,s[m],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(i,d),a=o(x,a,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===s.length)return n(i,d),ia&&Ji(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(a=o(d,a,m),null===u?c=d:u.sibling=d,u=d);return ia&&Ji(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=h(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),ia&&Ji(i,m),c}function g(i,s,l,c){var u=I(l);if("function"!==typeof u)throw Error(a(150));if(null==(l=u.call(l)))throw Error(a(151));for(var d=u=null,m=s,g=s=0,x=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var v=f(i,m,y.value,c);if(null===v){null===m&&(m=x);break}e&&m&&null===v.alternate&&t(i,m),s=o(v,s,g),null===d?u=v:d.sibling=v,d=v,m=x}if(y.done)return n(i,m),ia&&Ji(i,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,c))&&(s=o(y,s,g),null===d?u=y:d.sibling=y,d=y);return ia&&Ji(i,g),u}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=h(m,i,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=o(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),ia&&Ji(i,g),u}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===E&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=a;null!==u;){if(u.key===c){if((c=o.type)===E){if(7===u.tag){n(r,u.sibling),(a=i(u,o.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===M&&ya(c)===u.type){n(r,u.sibling),(a=i(u,o.props)).ref=ga(r,u,o),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===E?((a=Ic(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=zc(o.type,o.key,o.props,null,r.mode,l)).ref=ga(r,a,o),l.return=r,r=l)}return s(r);case S:e:{for(u=o.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Dc(o,r.mode,l)).return=r,r=a}return s(r);case M:return e(r,a,(u=o._init)(o._payload),l)}if(te(o))return m(r,a,o,l);if(I(o))return g(r,a,o,l);xa(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Lc(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var ba=va(!0),wa=va(!1),Sa=ki(null),Ea=null,ka=null,Ca=null;function Ta(){Ca=ka=Ea=null}function ja(e){var t=Sa.current;Ci(Sa),e._currentValue=t}function Oa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _a(e,t){Ea=e,Ca=ka=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function Pa(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===ka){if(null===Ea)throw Error(a(308));ka=e,Ea.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var Aa=null;function Ma(e){null===Aa?Aa=[e]:Aa.push(e)}function Ra(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ma(t)):(n.next=i.next,i.next=n),t.interleaved=n,za(e,r)}function za(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ia=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $a(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ol)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,za(e,n)}return null===(i=r.interleaved)?(t.next=t,Ma(r)):(t.next=i.next,i.next=t),r.interleaved=t,za(e,n)}function Fa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ba(e,t,n,r){var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=L({},d,p);break e;case 2:Ia=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Nl|=o,e.lanes=o,e.memoizedState=d}}function Ga(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Ha={},Ua=ki(Ha),Wa=ki(Ha),Ka=ki(Ha);function qa(e){if(e===Ha)throw Error(a(174));return e}function Ya(e,t){switch(Ti(Ka,t),Ti(Wa,e),Ti(Ua,Ha),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Ua),Ti(Ua,t)}function Xa(){Ci(Ua),Ci(Wa),Ci(Ka)}function Qa(e){qa(Ka.current);var t=qa(Ua.current),n=le(t,e.type);t!==n&&(Ti(Wa,e),Ti(Ua,n))}function Ja(e){Wa.current===e&&(Ci(Ua),Ci(Wa))}var Za=ki(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=b.ReactCurrentDispatcher,io=b.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,fo=0;function ho(){throw Error(a(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,i),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function xo(){var e=0!==po;return po=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function vo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function bo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((ao&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,oo.lanes|=d,Nl|=d}u=u.next}while(null!==u&&u!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Nl|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(vs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Eo(){}function ko(e,t){var n=oo,r=vo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,vs=!0),r=r.queue,No(jo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Ao(9,To.bind(null,n,r,i,t),void 0,null),null===_l)throw Error(a(349));0!==(30&ao)||Co(n,t,i)}return i}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function To(e,t,n,r){t.value=n,t.getSnapshot=r,Oo(t)&&_o(e)}function jo(e,t,n){return n((function(){Oo(t)&&_o(e)}))}function Oo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function _o(e){var t=za(e,1);null!==t&&nc(t,e,1,-1)}function Po(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=qo.bind(null,oo,e),[t.memoizedState,e]}function Ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Mo(){return vo().memoizedState}function Ro(e,t,n,r){var i=yo();oo.flags|=e,i.memoizedState=Ao(1|t,n,void 0,void 0===r?null:r)}function zo(e,t,n,r){var i=vo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&mo(r,o.deps))return void(i.memoizedState=Ao(t,n,a,r))}oo.flags|=e,i.memoizedState=Ao(1|t,n,a,r)}function Io(e,t){return Ro(8390656,8,e,t)}function No(e,t){return zo(2048,8,e,t)}function Lo(e,t){return zo(4,2,e,t)}function Do(e,t){return zo(4,4,e,t)}function $o(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zo(4,4,$o.bind(null,t,e),n)}function Vo(){}function Bo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Go(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),oo.lanes|=n,Nl|=n,e.baseState=!0),t)}function Uo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{vt=n,io.transition=r}}function Wo(){return vo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e))Xo(t,n);else if(null!==(n=Ra(e,t,n,r))){nc(n,e,r,ec()),Qo(n,t,r)}}function qo(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))Xo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Ma(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Ra(e,t,i,r))&&(nc(n,e,r,i=ec()),Qo(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Jo={readContext:Pa,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Pa,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:Pa,useEffect:Io,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4194308,4,$o.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:Po,useDebugValue:Vo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=Po(!1),t=e[0];return e=Uo.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=yo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===_l)throw Error(a(349));0!==(30&ao)||Co(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Io(jo.bind(null,r,o,e),[e]),r.flags|=2048,Ao(9,To.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=_l.identifierPrefix;if(ia){var n=Qi;t=":"+t+"R"+(n=(Xi&~(1<<32-ot(Xi)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Pa,useCallback:Bo,useContext:Pa,useEffect:No,useImperativeHandle:Fo,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Go,useReducer:wo,useRef:Mo,useState:function(){return wo(bo)},useDebugValue:Vo,useDeferredValue:function(e){return Ho(vo(),so.memoizedState,e)},useTransition:function(){return[wo(bo)[0],vo().memoizedState]},useMutableSource:Eo,useSyncExternalStore:ko,useId:Wo,unstable_isNewReconciler:!1},ts={readContext:Pa,useCallback:Bo,useContext:Pa,useEffect:No,useImperativeHandle:Fo,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Go,useReducer:So,useRef:Mo,useState:function(){return So(bo)},useDebugValue:Vo,useDeferredValue:function(e){var t=vo();return null===so?t.memoizedState=e:Ho(t,so.memoizedState,e)},useTransition:function(){return[So(bo)[0],vo().memoizedState]},useMutableSource:Eo,useSyncExternalStore:ko,useId:Wo,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Da(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=$a(e,a,i))&&(nc(t,e,i,r),Fa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Da(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=$a(e,a,i))&&(nc(t,e,i,r),Fa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Da(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=$a(e,i,r))&&(nc(t,e,r,n),Fa(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=ji,a=t.contextType;return"object"===typeof a&&null!==a?a=Pa(a):(i=Mi(t)?Pi:Oi.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ai(e,i):ji),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Na(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Pa(a):(a=Mi(t)?Pi:Oi.current,i.context=Ai(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Ba(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=V(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Da(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Ul=r),ds(0,t)},n}function hs(e,t,n){(n=Da(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Wl?Wl=new Set([this]):Wl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Da(-1,1)).tag=2,$a(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,vs=!1;function bs(e,t,n,r){t.child=null===e?wa(t,null,n,r):ba(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var a=t.ref;return _a(t,i),r=go(e,t,n,r,a,i),n=xo(),null===e||vs?(ia&&n&&ea(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function Ss(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Mc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=zc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Es(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Hs(e,t,i)}return t.flags|=1,(e=Rc(a,r)).ref=t.ref,e.return=t,t.child=e}function Es(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Hs(e,t,i);0!==(131072&e.flags)&&(vs=!0)}}return Ts(e,t,n,r,i)}function ks(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ti(Rl,Ml),Ml|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ti(Rl,Ml),Ml|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ti(Rl,Ml),Ml|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ti(Rl,Ml),Ml|=r;return bs(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ts(e,t,n,r,i){var a=Mi(n)?Pi:Oi.current;return a=Ai(t,a),_a(t,i),n=go(e,t,n,r,a,i),r=xo(),null===e||vs?(ia&&r&&ea(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function js(e,t,n,r,i){if(Mi(n)){var a=!0;Ni(t)}else a=!1;if(_a(t,i),null===t.stateNode)Gs(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Pa(c):c=Ai(t,c=Mi(n)?Pi:Oi.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Ia=!1;var p=t.memoizedState;o.state=p,Ba(t,r,o,i),l=t.memoizedState,s!==r||p!==l||_i.current||Ia?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Ia||as(t,n,s,r,p,l,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,La(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Pa(l):l=Ai(t,l=Mi(n)?Pi:Oi.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,o,r,l),Ia=!1,p=t.memoizedState,o.state=p,Ba(t,r,o,i);var h=t.memoizedState;s!==d||p!==h||_i.current||Ia?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=Ia||as(t,n,c,r,p,h,l)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Os(e,t,n,r,a,i)}function Os(e,t,n,r,i,a){Cs(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Li(t,n,!1),Hs(e,t,a);r=t.stateNode,ys.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=ba(t,e.child,null,a),t.child=ba(t,null,s,a)):bs(e,t,s,a),t.memoizedState=r.state,i&&Li(t,n,!0),t.child}function _s(e){var t=e.stateNode;t.pendingContext?zi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&zi(0,t.context,!1),Ya(e,t.containerInfo)}function Ps(e,t,n,r,i){return fa(),ha(i),t.flags|=256,bs(e,t,n,r),t.child}var As,Ms,Rs,zs,Is={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ls(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ti(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Nc(l,i,0,null),e=Ic(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ns(n),t.memoizedState=Is,e):Ds(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,$s(e,t,s,r=us(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Nc({mode:"visible",children:r.children},i,0,null),(o=Ic(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&ba(t,e.child,null,s),t.child.memoizedState=Ns(s),t.memoizedState=Is,o);if(0===(1&t.mode))return $s(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,$s(e,t,s,r=us(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(r=_l)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,za(e,i),nc(r,e,i,-1))}return mc(),$s(e,t,s,r=us(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=jc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Ki[qi++]=Xi,Ki[qi++]=Qi,Ki[qi++]=Yi,Xi=e.id,Qi=e.overflow,Yi=t),t=Ds(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Rc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Rc(r,s):(s=Ic(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ns(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Is,i}return e=(s=e.child).sibling,i=Rc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ds(e,t){return(t=Nc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function $s(e,t,n,r){return null!==r&&ha(r),ba(t,e.child,null,n),(e=Ds(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oa(e.return,t,n)}function Vs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,n,t);else if(19===e.tag)Fs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ti(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vs(t,!0,n,null,a);break;case"together":Vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Nl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Us(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ws(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ws(t),null;case 1:case 17:return Mi(t.type)&&Ri(),Ws(t),null;case 3:return r=t.stateNode,Xa(),Ci(_i),Ci(Oi),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Ms(e,t),Ws(t),null;case 5:Ja(t);var i=qa(Ka.current);if(n=t.type,null!==e&&null!=t.stateNode)Rs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Ws(t),null}if(e=qa(Ua.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pi]=t,r[fi]=o,e=0!==(1&t.mode),n){case"dialog":$r("cancel",r),$r("close",r);break;case"iframe":case"object":case"embed":$r("load",r);break;case"video":case"audio":for(i=0;i<Ir.length;i++)$r(Ir[i],r);break;case"source":$r("error",r);break;case"img":case"image":case"link":$r("error",r),$r("load",r);break;case"details":$r("toggle",r);break;case"input":X(r,o),$r("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$r("invalid",r);break;case"textarea":ie(r,o),$r("invalid",r)}for(var l in ye(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&$r("scroll",r)}switch(n){case"input":W(r),Z(r,o,!0);break;case"textarea":W(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[fi]=r,As(e,t,!1,!1),t.stateNode=e;e:{switch(l=ve(n,r),n){case"dialog":$r("cancel",e),$r("close",e),i=r;break;case"iframe":case"object":case"embed":$r("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ir.length;i++)$r(Ir[i],e);i=r;break;case"source":$r("error",e),i=r;break;case"img":case"image":case"link":$r("error",e),$r("load",e),i=r;break;case"details":$r("toggle",e),i=r;break;case"input":X(e,r),i=Y(e,r),$r("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=L({},r,{value:void 0}),$r("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),$r("invalid",e)}for(o in ye(n,i),c=i)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=u&&"onScroll"===o&&$r("scroll",e):null!=u&&v(e,o,u,l))}switch(n){case"input":W(e),Z(e,r,!1);break;case"textarea":W(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ws(t),null;case 6:if(e&&null!=t.stateNode)zs(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=qa(Ka.current),qa(Ua.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Ws(t),null;case 13:if(Ci(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))pa(),fa(),t.flags|=98560,o=!1;else if(o=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[pi]=t}else fa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ws(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===zl&&(zl=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ws(t),null);case 4:return Xa(),Ms(e,t),null===e&&Br(t.stateNode.containerInfo),Ws(t),null;case 10:return ja(t.type._context),Ws(t),null;case 19:if(Ci(Za),null===(o=t.memoizedState))return Ws(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Us(o,!1);else{if(0!==zl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Us(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ti(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Qe()>Bl&&(t.flags|=128,r=!0,Us(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Us(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Ws(t),null}else 2*Qe()-o.renderingStartTime>Bl&&1073741824!==n&&(t.flags|=128,r=!0,Us(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,n=Za.current,Ti(Za,r?1&n|2:1&n),t):(Ws(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ml)&&(Ws(t),6&t.subtreeFlags&&(t.flags|=8192)):Ws(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function qs(e,t){switch(ta(t),t.tag){case 1:return Mi(t.type)&&Ri(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),Ci(_i),Ci(Oi),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ci(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Za),null;case 4:return Xa(),null;case 10:return ja(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}As=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ms=function(){},Rs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qa(Ua.current);var a,o=null;switch(n){case"input":i=Y(e,i),r=Y(e,r),o=[];break;case"select":i=L({},i,{value:void 0}),r=L({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&$r("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},zs=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ys=!1,Xs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){kc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[mi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=ul,i=dl;ul=null,pl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Bt(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){kc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,pl(e,t,n),Xs=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach((function(t){var r=Oc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(a(160));fl(o,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){kc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){kc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){kc(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){kc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Q(i,o),ve(l,s);var u=ve(l,o);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):v(i,d,p,u)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(i,!!o.multiple,h,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[fi]=o}catch(g){kc(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){kc(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){kc(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Vl=Qe())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(u=Xs)||d,ml(t,e),Xs=u):ml(t,e),xl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(h=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){kc(r,n,g)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Js=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){kc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){kc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),xl(e),4&r&&hl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){kc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,vl(e,t,n)}function vl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ys;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Ys;var c=Xs;if(Ys=o,(Xs=l)&&!c)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?Sl(i):null!==l?(l.return=o,Js=l):Sl(i);for(;null!==a;)Js=a,vl(a,t,n),a=a.sibling;Js=i,Ys=s,Xs=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ga(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ga(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(a(163))}Xs||512&t.flags&&il(t)}catch(f){kc(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function Sl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){kc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){kc(t,i,l)}}var a=t.return;try{il(t)}catch(l){kc(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){kc(t,o,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var El,kl=Math.ceil,Cl=b.ReactCurrentDispatcher,Tl=b.ReactCurrentOwner,jl=b.ReactCurrentBatchConfig,Ol=0,_l=null,Pl=null,Al=0,Ml=0,Rl=ki(0),zl=0,Il=null,Nl=0,Ll=0,Dl=0,$l=null,Fl=null,Vl=0,Bl=1/0,Gl=null,Hl=!1,Ul=null,Wl=null,Kl=!1,ql=null,Yl=0,Xl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Ol)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==Al?Al&-Al:null!==ma.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xl)throw Xl=0,Ql=null,Error(a(185));xt(e,n,r),0!==(2&Ol)&&e===_l||(e===_l&&(0===(2&Ol)&&(Ll|=n),4===zl&&sc(e,Al)),rc(e,r),1===n&&0===Ol&&0===(1&t.mode)&&(Bl=Qe()+500,$i&&Bi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=pt(e,e===_l?Al:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){$i=!0,Vi(e)}(lc.bind(null,e)):Vi(lc.bind(null,e)),oi((function(){0===(6&Ol)&&Bi()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=_c(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&Ol))throw Error(a(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=pt(e,e===_l?Al:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Ol;Ol|=2;var o=hc();for(_l===e&&Al===t||(Gl=null,Bl=Qe()+500,pc(e,t));;)try{yc();break}catch(l){fc(e,l)}Ta(),Cl.current=o,Ol=i,null!==Pl?t=0:(_l=null,Al=0,t=zl)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t)throw n=Il,pc(e,0),sc(e,r),rc(e,Qe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t))throw n=Il,pc(e,0),sc(e,r),rc(e,Qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Fl,Gl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Vl+500-Qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Fl,Gl),t);break}wc(e,Fl,Gl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Fl,Gl),r);break}wc(e,Fl,Gl);break;default:throw Error(a(329))}}}return rc(e,Qe()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=$l;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fl,Fl=n,null!==t&&oc(t)),e}function oc(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function sc(e,t){for(t&=~Dl,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Ol))throw Error(a(327));Sc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Il,pc(e,0),sc(e,t),rc(e,Qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fl,Gl),rc(e,Qe()),null}function cc(e,t){var n=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=n)&&(Bl=Qe()+500,$i&&Bi())}}function uc(e){null!==ql&&0===ql.tag&&0===(6&Ol)&&Sc();var t=Ol;Ol|=1;var n=jl.transition,r=vt;try{if(jl.transition=null,vt=1,e)return e()}finally{vt=r,jl.transition=n,0===(6&(Ol=t))&&Bi()}}function dc(){Ml=Rl.current,Ci(Rl)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Pl)for(n=Pl.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ri();break;case 3:Xa(),Ci(_i),Ci(Oi),no();break;case 5:Ja(r);break;case 4:Xa();break;case 13:case 19:Ci(Za);break;case 10:ja(r.type._context);break;case 22:case 23:dc()}n=n.return}if(_l=e,Pl=e=Rc(e.current,null),Al=Ml=t,zl=0,Il=null,Dl=Ll=Nl=0,Fl=$l=null,null!==Aa){for(t=0;t<Aa.length;t++)if(null!==(r=(n=Aa[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Aa=null}return e}function fc(e,t){for(;;){var n=Pl;try{if(Ta(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,po=0,Tl.current=null,null===n||null===n.return){zl=1,Il=t,Pl=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Al,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,xs(h,s,l,0,t),1&h.mode&&ms(o,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(o,u,t),mc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),ha(cs(c,l));break e}}o=c=cs(c,l),4!==zl&&(zl=2),null===$l?$l=[o]:$l.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Va(o,fs(0,c,t));break e;case 1:l=c;var y=o.type,v=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Wl||!Wl.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,Va(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}bc(n)}catch(b){t=b,Pl===n&&null!==n&&(Pl=n=n.return);continue}break}}function hc(){var e=Cl.current;return Cl.current=Jo,null===e?Jo:e}function mc(){0!==zl&&3!==zl&&2!==zl||(zl=4),null===_l||0===(268435455&Nl)&&0===(268435455&Ll)||sc(_l,Al)}function gc(e,t){var n=Ol;Ol|=2;var r=hc();for(_l===e&&Al===t||(Gl=null,pc(e,t));;)try{xc();break}catch(i){fc(e,i)}if(Ta(),Ol=n,Cl.current=r,null!==Pl)throw Error(a(261));return _l=null,Al=0,zl}function xc(){for(;null!==Pl;)vc(Pl)}function yc(){for(;null!==Pl&&!Ye();)vc(Pl)}function vc(e){var t=El(e.alternate,e,Ml);e.memoizedProps=e.pendingProps,null===t?bc(e):Pl=t,Tl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Ml)))return void(Pl=n)}else{if(null!==(n=qs(n,t)))return n.flags&=32767,void(Pl=n);if(null===e)return zl=6,void(Pl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Pl=t);Pl=t=e}while(null!==t);0===zl&&(zl=5)}function wc(e,t,n){var r=vt,i=jl.transition;try{jl.transition=null,vt=1,function(e,t,n,r){do{Sc()}while(null!==ql);if(0!==(6&Ol))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===_l&&(Pl=_l=null,Al=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,_c(tt,(function(){return Sc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=jl.transition,jl.transition=null;var s=vt;vt=1;var l=Ol;Ol|=4,Tl.current=null,function(e,t){if(ei=Ht,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(a(163))}}catch(w){kc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Xe(),Ol=l,vt=s,jl.transition=o}else e.current=n;if(Kl&&(Kl=!1,ql=e,Yl=i),o=e.pendingLanes,0===o&&(Wl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Ul,Ul=null,e;0!==(1&Yl)&&0!==e.tag&&Sc(),o=e.pendingLanes,0!==(1&o)?e===Ql?Xl++:(Xl=0,Ql=e):Xl=0,Bi()}(e,t,n,r)}finally{jl.transition=i,vt=r}return null}function Sc(){if(null!==ql){var e=bt(Yl),t=jl.transition,n=vt;try{if(jl.transition=null,vt=16>e?16:e,null===ql)var r=!1;else{if(e=ql,ql=null,Yl=0,0!==(6&Ol))throw Error(a(331));var i=Ol;for(Ol|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,o)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var f=(d=Js).sibling,h=d.return;if(al(d),d===u){Js=null;break}if(null!==f){f.return=h,Js=f;break}Js=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Js=y;break e}Js=o.return}}var v=e.current;for(Js=v;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=v;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(S){kc(l,l.return,S)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Ol=i,Bi(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{vt=n,jl.transition=t}}return!1}function Ec(e,t,n){e=$a(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function kc(e,t,n){if(3===e.tag)Ec(e,e,n);else for(;null!==t;){if(3===t.tag){Ec(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Wl||!Wl.has(r))){t=$a(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,_l===e&&(Al&n)===n&&(4===zl||3===zl&&(130023424&Al)===Al&&500>Qe()-Vl?pc(e,0):Dl|=n),rc(e,t)}function Tc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=za(e,t))&&(xt(e,t,n),rc(e,n))}function jc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tc(e,n)}function Oc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Tc(e,n)}function _c(e,t){return Ke(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ac(e,t,n,r){return new Pc(e,t,n,r)}function Mc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Ac(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zc(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)Mc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case E:return Ic(n.children,i,o,t);case k:s=8,i|=8;break;case C:return(e=Ac(12,n,t,2|i)).elementType=C,e.lanes=o,e;case _:return(e=Ac(13,n,t,i)).elementType=_,e.lanes=o,e;case P:return(e=Ac(19,n,t,i)).elementType=P,e.lanes=o,e;case R:return Nc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case T:s=10;break e;case j:s=9;break e;case O:s=11;break e;case A:s=14;break e;case M:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Ac(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Ic(e,t,n,r){return(e=Ac(7,e,r,t)).lanes=n,e}function Nc(e,t,n,r){return(e=Ac(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return(e=Ac(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Ac(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $c(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,i,a,o,s,l){return e=new $c(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Ac(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(a),e}function Vc(e){if(!e)return ji;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Mi(n))return Ii(e,n,t)}return t}function Bc(e,t,n,r,i,a,o,s,l){return(e=Fc(n,r,!0,e,0,a,0,s,l)).context=Vc(null),n=e.current,(a=Da(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,$a(n,a,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Gc(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=Vc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Da(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$a(i,t,o))&&(nc(e,i,o,a),Fa(e,i,o)),o}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Uc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Wc(e,t){Uc(e,t),(e=e.alternate)&&Uc(e,t)}El=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_i.current)vs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:_s(t),fa();break;case 5:Qa(t);break;case 1:Mi(t.type)&&Ni(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ti(Sa,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ti(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ls(e,t,n):(Ti(Za,1&Za.current),null!==(e=Hs(e,t,n))?e.sibling:null);Ti(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ti(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,ks(e,t,n)}return Hs(e,t,n)}(e,t,n);vs=0!==(131072&e.flags)}else vs=!1,ia&&0!==(1048576&t.flags)&&Zi(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gs(e,t),e=t.pendingProps;var i=Ai(t,Oi.current);_a(t,n),i=go(null,t,r,e,i,n);var o=xo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mi(r)?(o=!0,Ni(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Na(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Os(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Mc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===A)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Ts(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=Ss(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ts(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(_s(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,La(e,t),Ba(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ps(e,t,r,n,i=cs(Error(a(423)),t));break e}if(r!==i){t=Ps(e,t,r,n,i=cs(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fa(),r===i){t=Hs(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),Cs(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Ls(e,t,n);case 4:return Ya(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ba(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ti(Sa,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!_i.current){t=Hs(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Da(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),Oa(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Oa(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_a(t,n),r=r(i=Pa(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),Ss(e,t,r,i=ns(r.type,i),n);case 15:return Es(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Gs(e,t),t.tag=1,Mi(r)?(e=!0,Ni(t)):e=!1,_a(t,n),os(t,r,i),ls(t,r,i,n),Os(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return ks(e,t,n)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}function Yc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Hc(o);s.call(e)}}Gc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Hc(o);a.call(e)}}var o=Bc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[hi]=o.current,Br(8===e.nodeType?e.parentNode:e),uc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Hc(l);s.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[hi]=l.current,Br(8===e.nodeType?e.parentNode:e),uc((function(){Gc(t,l,n,r)})),l}(n,t,e,i,r);return Hc(o)}Yc.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Gc(e,t,null,null)},Yc.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Gc(null,e,null,null)})),t[hi]=null}},Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Lt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Qe()),0===(6&Ol)&&(Bl=Qe()+500,Bi()))}break;case 13:uc((function(){var t=za(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Wc(e,1)}},St=function(e){if(13===e.tag){var t=za(e,134217728);if(null!==t)nc(t,e,134217728,ec());Wc(e,134217728)}},Et=function(e){if(13===e.tag){var t=tc(e),n=za(e,t);if(null!==n)nc(n,e,t,ec());Wc(e,t)}},kt=function(){return vt},Ct=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));K(r),J(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Oe=cc,_e=uc;var eu={usingClientEntryPoint:!1,Events:[vi,bi,wi,Te,je,cc]},tu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ue(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(a(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Br(8===e.nodeType?e.parentNode:e),new qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ue(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Bc(t,null,e,1,null!=n?n:null,i,0,o,s),e[hi]=t.current,Br(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},6366:e=>{var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!==l--;)if(!a(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!==l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof o.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(o,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!a(e[c[l]],o[c[l]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},7864:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=o(n(5043)),a=o(n(1380));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return i.default.createElement("button",this.props,this.props.children)}}]),t}(i.default.Component);t.default=(0,a.default)(s)},3318:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(5043)),o=l(n(4182)),s=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return delete t.name,t.parentBindings&&delete t.parentBindings,a.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);c.propTypes={name:s.default.string,id:s.default.string},t.default=(0,o.default)(c)},1556:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(5043)),i=a(n(1380));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.render=function(){return r.default.createElement("a",i.props,i.props.children)},o(i,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,i.default)(s)},9473:(e,t,n)=>{"use strict";t.N_=void 0;var r=f(n(1556)),i=f(n(7864)),a=f(n(3318)),o=f(n(9080)),s=f(n(9529)),l=f(n(2040)),c=f(n(3177)),u=f(n(1380)),d=f(n(4182)),p=f(n(6789));function f(e){return e&&e.__esModule?e:{default:e}}t.N_=r.default,i.default,a.default,o.default,s.default,l.default,c.default,u.default,d.default,p.default,r.default,i.default,a.default,o.default,s.default,l.default,c.default,u.default,d.default,p.default},6789:(e,t,n)=>{"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(5043),c=(n(7950),n(2401),n(2040)),u=n(9080),d=n(5173),p=n(2296),f={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},h={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,d=function(t){function u(e){a(this,u);var t=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return h.call(t),t.state={active:!1},t}return s(u,t),i(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(n),p.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var i in f)n.hasOwnProperty(i)&&delete n[i];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),u}(l.Component),h=function(){var e=this;this.scrollTo=function(t,i){n.scrollTo(t,r({},e.state,i))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!p.isMounted()||p.isInitialized()){var i=e.props.to,a=null,o=0,s=0,l=0;if(r.getBoundingClientRect)l=r.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(i)))return;var u=a.getBoundingClientRect();s=(o=u.top-l+t)+u.height}var d=t-e.props.offset,f=d>=Math.floor(o)&&d<Math.floor(s),h=d<Math.floor(o)||d>=Math.floor(s),m=n.getActiveLink();return h?(i===m&&n.setActiveLink(void 0),e.props.hashSpy&&p.getHash()===i&&p.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):f&&m!==i?(n.setActiveLink(i),e.props.hashSpy&&p.changeHash(i),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i)),c.updateStates()):void 0}}};return d.propTypes=f,d.defaultProps={offset:0},d},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),i(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:d.string,id:d.string},t}};e.exports=h},3177:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(s(n(2401)),s(n(6580))),a=s(n(3996)),o=s(n(9529));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return i.default[e.smooth]||i.default.defaultEasing},c=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},d=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},p=function e(t,n,r){var i=n.data;if(n.ignoreCancelEvents||!i.cancel)if(i.delta=Math.round(i.targetPosition-i.startPosition),null===i.start&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var a=e.bind(null,t,n);c.call(window,a)}else o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPosition);else o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPositionY)},f=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},h=function(e,t,n,r){t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout);if(a.default.subscribe((function(){t.data.cancel=!0})),f(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?u(t):d(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var i;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"===typeof(i=t.duration)?i:function(){return i})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var s=l(t),h=p.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){o.default.registered.begin&&o.default.registered.begin(t.data.to,t.data.target),c.call(window,h)}),t.delay):(o.default.registered.begin&&o.default.registered.begin(t.data.to,t.data.target),c.call(window,h))}else o.default.registered.end&&o.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},m=function(e){return(e=r({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:h,getAnimationType:l,scrollToTop:function(e){h(0,m(e))},scrollToBottom:function(e){e=m(e),f(e),h(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,r=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)}(e),e)},scrollTo:function(e,t){h(e,m(t))},scrollMore:function(e,t){t=m(t),f(t);var n=t.horizontal?u(t):d(t);h(e+n,t)}}},3996:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1836),i=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!==typeof document&&i.forEach((function(t){return(0,r.addPassiveEventListener)(document,t,e)}))}}},1836:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,r){var i=r.name;i||(i=t,console.warn("Listener must be a named function.")),n.has(t)||n.set(t,new Set);var a=n.get(t);if(!a.has(i)){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,r,!!o&&{passive:!0}),a.add(i)}},t.removePassiveEventListener=function(e,t,r){e.removeEventListener(t,r),n.get(t).delete(r.name||t)};var n=new Map},4182:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(5043)),o=(l(n(7950)),l(n(9080))),s=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),i(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;o.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){o.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},9529:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},2296:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1836);var r,i=n(2401),a=(r=i)&&r.__esModule?r:{default:r};var o={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=o},1380:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n(5043)),o=u(n(2040)),s=u(n(9080)),l=u(n(5173)),c=u(n(2296));function u(e){return e&&e.__esModule?e:{default:e}}var d={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};t.default=function(e,t){var n=t||s.default,l=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return u.call(t),t.state={active:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),i(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();o.default.isMounted(e)||o.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),o.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){o.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?r({},this.props.style,this.props.activeStyle):r({},this.props.style);var i=r({},this.props);for(var o in d)i.hasOwnProperty(o)&&delete i[o];return i.className=t,i.style=n,i.onClick=this.handleClick,a.default.createElement(e,i)}}]),s}(a.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,i){n.scrollTo(t,r({},e.state,i))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,r){var i=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var a=e.props.horizontal,o=e.props.to,s=null,l=void 0,u=void 0;if(a){var d=0,p=0,f=0;if(i.getBoundingClientRect)f=i.getBoundingClientRect().left;if(!s||e.props.isDynamic){if(!(s=n.get(o)))return;var h=s.getBoundingClientRect();p=(d=h.left-f+t)+h.width}var m=t-e.props.offset;l=m>=Math.floor(d)&&m<Math.floor(p),u=m<Math.floor(d)||m>=Math.floor(p)}else{var g=0,x=0,y=0;if(i.getBoundingClientRect)y=i.getBoundingClientRect().top;if(!s||e.props.isDynamic){if(!(s=n.get(o)))return;var v=s.getBoundingClientRect();x=(g=v.top-y+r)+v.height}var b=r-e.props.offset;l=b>=Math.floor(g)&&b<Math.floor(x),u=b<Math.floor(g)||b>=Math.floor(x)}var w=n.getActiveLink();if(u){if(o===w&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===o){var S=e.props.saveHashHistory,E=void 0!==S&&S;c.default.changeHash("",E)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(o,s))}if(l&&(w!==o||!1===e.state.active)){n.setActiveLink(o);var k=e.props.saveHashHistory,C=void 0!==k&&k;e.props.hashSpy&&c.default.changeHash(o,C),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o,s))}}}};return l.propTypes=d,l.defaultProps={offset:0},l}},2040:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(381),a=(r=i)&&r.__esModule?r:{default:r},o=n(1836);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,a.default)(e,t)}((function(t){s.scrollHandler(e)}),t);s.scrollSpyContainers.push(e),(0,o.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionX(e),s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionX(t),s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(e)>-1&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},9080:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n(2401)),a=s(n(3177)),o=s(n(9529));function s(e){return e&&e.__esModule?e:{default:e}}var l={},c=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=r({},t,{absolute:!1})).containerId,l=t.container,c=void 0;c=s?document.getElementById(s):l&&l.nodeType?l:document,t.absolute=!0;var u=t.horizontal,d=i.default.scrollOffset(c,n,u)+(t.offset||0);if(!t.smooth)return o.default.registered.begin&&o.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(d,0):window.scrollTo(0,d):c.scrollTop=d,void(o.default.registered.end&&o.default.registered.end(e,n));a.default.animateTopScroll(d,t,e,n)}else console.warn("target Element not found")}}},6580:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},2401:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,r=e.offsetParent;r&&!t(r);)n+=r.offsetTop,r=r.offsetParent;return{offsetTop:n,offsetParent:r}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,r=n?"#"+n:"",i=window&&window.location,a=r?i.pathname+i.search+r:i.pathname+i.search;t?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,r){if(r)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var i=n(t,(function(t){return t===e||t===document})),a=i.offsetTop;if(i.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var o=function(e){return e===document};return n(t,o).offsetTop-n(e,o).offsetTop}}},8161:(e,t,n)=>{"use strict";var r,i=n(5043),a=(r=i)&&"object"===typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",s),d}}},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var b=v.prototype=new y;b.constructor=v,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,i)&&!k.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:E.current}}function T(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+O(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(j,"$&/")+"/"),_(o,t,i,"",(function(e){return e}))):null!=o&&(T(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+O(s=e[c],c);l+=_(s,t,i,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=_(s=s.value,t,i,u=a+O(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],i=0;return _(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},R={transition:null},z={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:R,ReactCurrentOwner:E};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)S.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return M.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,R(S);else{var t=r(u);null!==t&&z(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(T),T=-1),h=!0;var a=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!_());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&z(w,d.startTime-n),l=!1}return l}finally{p=null,f=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,C=null,T=-1,j=5,O=-1;function _(){return!(t.unstable_now()-O<j)}function P(){if(null!==C){var e=t.unstable_now();O=e;var n=!0;try{n=C(!0,e)}finally{n?E():(k=!1,C=null)}}else k=!1}if("function"===typeof v)E=function(){v(P)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,M=A.port2;A.port1.onmessage=P,E=function(){M.postMessage(null)}}else E=function(){x(P,0)};function R(e){C=e,k||(k=!0,E())}function z(e,n){T=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(y(T),T=-1):g=!0,z(w,a-o))):(e.sortIndex=s,n(c,e),m||h||(m=!0,R(S))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},3895:(e,t,n)=>{"use strict";var r=n(5043);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useSyncExternalStore,o=r.useRef,s=r.useEffect,l=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;d=l((function(){function e(e){if(!s){if(s=!0,a=e,e=r(e),void 0!==u&&p.hasValue){var t=p.value;if(u(t,e))return o=t}return o=e}if(t=o,i(a,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(a=e,o=n)}var a,o,s=!1,l=void 0===n?null:n;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]}),[t,n,r,u]);var f=a(e,d[0],d[1]);return s((function(){p.hasValue=!0,p.value=f}),[f]),c(f),f}},7237:(e,t,n)=>{"use strict";e.exports=n(3895)},1844:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},4634:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},4893:e=>{e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports},8168:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(null,arguments)}n.d(t,{A:()=>r})},8587:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n.d(t,{A:()=>r})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/idev-clonee/",n.nc=void 0,(()=>{"use strict";var e=n(5043),t=n.t(e,2),r=n(4391);var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(7324),s=n.n(o),l="-ms-",c="-moz-",u="-webkit-",d="comm",p="rule",f="decl",h="@import",m="@keyframes",g="@layer",x=Math.abs,y=String.fromCharCode,v=Object.assign;function b(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,n){return e.replace(t,n)}function E(e,t,n){return e.indexOf(t,n)}function k(e,t){return 0|e.charCodeAt(t)}function C(e,t,n){return e.slice(t,n)}function T(e){return e.length}function j(e){return e.length}function O(e,t){return t.push(e),e}function _(e,t){return e.filter((function(e){return!w(e,t)}))}var P=1,A=1,M=0,R=0,z=0,I="";function N(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:P,column:A,length:o,return:"",siblings:s}}function L(e,t){return v(N("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function D(e){for(;e.root;)e=L(e.root,{children:[e]});O(e,e.siblings)}function $(){return z=R>0?k(I,--R):0,A--,10===z&&(A=1,P--),z}function F(){return z=R<M?k(I,R++):0,A++,10===z&&(A=1,P++),z}function V(){return k(I,R)}function B(){return R}function G(e,t){return C(I,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return P=A=1,M=T(I=e),R=0,[]}function W(e){return I="",e}function K(e){return b(G(R-1,X(91===e?e+2:40===e?e+1:e)))}function q(e){for(;(z=V())&&z<33;)F();return H(e)>2||H(z)>3?"":" "}function Y(e,t){for(;--t&&F()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return G(e,B()+(t<6&&32==V()&&32==F()))}function X(e){for(;F();)switch(z){case e:return R;case 34:case 39:34!==e&&39!==e&&X(z);break;case 40:41===e&&X(e);break;case 92:F()}return R}function Q(e,t){for(;F()&&e+z!==57&&(e+z!==84||47!==V()););return"/*"+G(t,R-1)+"*"+y(47===e?e:F())}function J(e){for(;!H(V());)F();return G(e,R)}function Z(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ee(e,t,n,r){switch(e.type){case g:if(e.children.length)break;case h:case f:return e.return=e.return||e.value;case d:return"";case m:return e.return=e.value+"{"+Z(e.children,r)+"}";case p:if(!T(e.value=e.props.join(",")))return""}return T(n=Z(e.children,r))?e.return=e.value+"{"+n+"}":""}function te(e,t,n){switch(function(e,t){return 45^k(e,0)?(((t<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 4789:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+c+e+l+e+e;case 5936:switch(k(e,t+11)){case 114:return u+e+l+S(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+l+S(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+l+S(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return u+e+l+e+e;case 6165:return u+e+l+"flex-"+e+e;case 5187:return u+e+S(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return u+e+l+"flex-item-"+S(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":l+"grid-row-"+S(e,/flex-|-self/g,""))+e;case 4675:return u+e+l+"flex-line-pack"+S(e,/align-content|flex-|-self/g,"")+e;case 5548:return u+e+l+S(e,"shrink","negative")+e;case 5292:return u+e+l+S(e,"basis","preferred-size")+e;case 6060:return u+"box-"+S(e,"-grow","")+u+e+l+S(e,"grow","positive")+e;case 4554:return u+S(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return S(S(S(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4200:if(!w(e,/flex-|baseline/))return l+"grid-column-align"+C(e,t)+e;break;case 2592:case 3360:return l+S(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,w(e.props,/grid-\w+-end/)}))?~E(e+(n=n[t].value),"span",0)?e:l+S(e,"-start","")+e+l+"grid-row-span:"+(~E(n,"span",0)?w(n,/\d+/):+w(n,/\d+/)-+w(e,/\d+/))+";":l+S(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:l+S(S(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(e)-1-t>6)switch(k(e,t+1)){case 109:if(45!==k(e,t+4))break;case 102:return S(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==k(e,t+3)?"$3":"$2-$3"))+e;case 115:return~E(e,"stretch",0)?te(S(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return S(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return l+n+":"+r+s+(i?l+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===k(e,t+6))return S(e,":",":"+u)+e;break;case 6444:switch(k(e,45===k(e,14)?18:11)){case 120:return S(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===k(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+e;case 100:return S(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=te(e.value,e.length,n));case m:return Z([L(e,{value:S(e.value,"@","@"+u)})],r);case p:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(w(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":D(L(e,{props:[S(t,/:(read-\w+)/,":"+c+"$1")]})),D(L(e,{props:[t]})),v(e,{props:_(n,r)});break;case"::placeholder":D(L(e,{props:[S(t,/:(plac\w+)/,":"+u+"input-$1")]})),D(L(e,{props:[S(t,/:(plac\w+)/,":"+c+"$1")]})),D(L(e,{props:[S(t,/:(plac\w+)/,l+"input-$1")]})),D(L(e,{props:[t]})),v(e,{props:_(n,r)})}return""}))}}function re(e){return W(ie("",null,null,null,[""],e=U(e),0,[0],e))}function ie(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,f=0,h=0,m=1,g=1,v=1,b=0,w="",C=i,j=a,_=r,P=w;g;)switch(h=b,b=F()){case 40:if(108!=h&&58==k(P,d-1)){-1!=E(P+=S(K(b),"&","&\f"),"&\f",x(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:P+=K(b);break;case 9:case 10:case 13:case 32:P+=q(h);break;case 92:P+=Y(B()-1,7);continue;case 47:switch(V()){case 42:case 47:O(oe(Q(F(),B()),t,n,l),l);break;default:P+="/"}break;case 123*m:s[c++]=T(P)*v;case 125*m:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==v&&(P=S(P,/\f/g,"")),f>0&&T(P)-d&&O(f>32?se(P+";",r,n,d-1,l):se(S(P," ","")+";",r,n,d-2,l),l);break;case 59:P+=";";default:if(O(_=ae(P,t,n,c,u,i,s,w,C=[],j=[],d,a),a),123===b)if(0===u)ie(P,t,_,_,C,a,d,s,j);else switch(99===p&&110===k(P,3)?100:p){case 100:case 108:case 109:case 115:ie(e,_,_,r&&O(ae(e,_,_,0,0,i,s,w,i,C=[],d,j),j),i,j,d,s,r?C:j);break;default:ie(P,_,_,_,[""],j,0,s,j)}}c=u=f=0,m=v=1,w=P="",d=o;break;case 58:d=1+T(P),f=h;default:if(m<1)if(123==b)--m;else if(125==b&&0==m++&&125==$())continue;switch(P+=y(b),b*m){case 38:v=u>0?1:(P+="\f",-1);break;case 44:s[c++]=(T(P)-1)*v,v=1;break;case 64:45===V()&&(P+=K(F())),p=V(),u=d=T(w=P+=J(B())),b++;break;case 45:45===h&&2==T(P)&&(m=0)}}return a}function ae(e,t,n,r,i,a,o,s,l,c,u,d){for(var f=i-1,h=0===i?a:[""],m=j(h),g=0,y=0,v=0;g<r;++g)for(var w=0,E=C(e,f+1,f=x(y=o[g])),k=e;w<m;++w)(k=b(y>0?h[w]+" "+E:S(E,/&\f/g,h[w])))&&(l[v++]=k);return N(e,t,n,0===i?p:s,l,c,u,d)}function oe(e,t,n,r){return N(e,t,n,d,y(z),C(e,2,-2),0,r)}function se(e,t,n,r,i){return N(e,t,n,f,C(e,0,r),C(e,r+1,-1),r,i)}var le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ce="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",ue="active",de="data-styled-version",pe="6.1.12",fe="/*!sc*/\n",he="undefined"!=typeof window&&"HTMLElement"in window,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/idev-clonee",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ge=(new Set,Object.freeze([])),xe=Object.freeze({});function ye(e,t,n){return void 0===n&&(n=xe),e.theme!==n.theme&&e.theme||t||n.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function Se(e){return e.replace(be,"-").replace(we,"")}var Ee=/(a)(d)/gi,ke=52,Ce=function(e){return String.fromCharCode(e+(e>25?39:97))};function Te(e){var t,n="";for(t=Math.abs(e);t>ke;t=t/ke|0)n=Ce(t%ke)+n;return(Ce(t%ke)+n).replace(Ee,"$1-$2")}var je,Oe=5381,_e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Pe=function(e){return _e(Oe,e)};function Ae(e){return Te(Pe(e)>>>0)}function Me(e){return e.displayName||e.name||"Component"}function Re(e){return"string"==typeof e&&!0}var ze="function"==typeof Symbol&&Symbol.for,Ie=ze?Symbol.for("react.memo"):60115,Ne=ze?Symbol.for("react.forward_ref"):60112,Le={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},De={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fe=((je={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},je[Ie]=$e,je);function Ve(e){return("type"in(t=e)&&t.type.$$typeof)===Ie?$e:"$$typeof"in e?Fe[e.$$typeof]:Le;var t}var Be=Object.defineProperty,Ge=Object.getOwnPropertyNames,He=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,We=Object.getPrototypeOf,Ke=Object.prototype;function qe(e,t,n){if("string"!=typeof t){if(Ke){var r=We(t);r&&r!==Ke&&qe(e,r,n)}var i=Ge(t);He&&(i=i.concat(He(t)));for(var a=Ve(e),o=Ve(t),s=0;s<i.length;++s){var l=i[s];if(!(l in De||n&&n[l]||o&&l in o||a&&l in a)){var c=Ue(t,l);try{Be(e,l,c)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function Xe(e){return"object"==typeof e&&"styledComponentId"in e}function Qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ze(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,n){if(void 0===n&&(n=!1),!n&&!Ze(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=et(e[r],t[r]);else if(Ze(t))for(var r in t)e[r]=et(e[r],t[r]);return e}function tt(e,t){Object.defineProperty(e,"toString",{value:t})}function nt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw nt(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(fe);return t},e}(),it=new Map,at=new Map,ot=1,st=function(e){if(it.has(e))return it.get(e);for(;at.has(ot);)ot++;var t=ot++;return it.set(e,t),at.set(t,e),t},lt=function(e,t){ot=t+1,it.set(e,t),at.set(t,e)},ct="style[".concat(ce,"][").concat(de,'="').concat(pe,'"]'),ut=new RegExp("^".concat(ce,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dt=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},pt=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(ut);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(lt(u,c),dt(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},ft=function(e){for(var t=document.querySelectorAll(ct),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ce)!==ue&&(pt(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ht(){return n.nc}var mt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ce,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(ce,ue),r.setAttribute(de,pe);var o=ht();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},gt=function(){function e(e){this.element=mt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw nt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),xt=function(){function e(e){this.element=mt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vt=he,bt={isServer:!he,useCSSOMInjection:!me},wt=function(){function e(e,t,n){void 0===e&&(e=xe),void 0===t&&(t={});var r=this;this.options=i(i({},bt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&he&&vt&&(vt=!1,ft(this)),tt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return at.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(ce,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(fe)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return st(e)},e.prototype.rehydrate=function(){!this.server&&he&&ft(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(i(i({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new yt(n):t?new gt(n):new xt(n)}(this.options),new rt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(st(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(st(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(st(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),St=/&/g,Et=/^\s*\/\/.*$/gm;function kt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=kt(e.children,t)),e}))}function Ct(e){var t,n,r,i=void 0===e?xe:e,a=i.options,o=void 0===a?xe:a,s=i.plugins,l=void 0===s?ge:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(St,n).replace(r,c))})),o.prefix&&u.push(ne),u.push(ee);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Et,""),c=re(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=kt(c,o.namespace));var d,p=[];return Z(c,function(e){var t=j(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||nt(15),_e(e,t.name)}),Oe).toString():"",d}var Tt=new wt,jt=Ct(),Ot=e.createContext({shouldForwardProp:void 0,styleSheet:Tt,stylis:jt}),_t=(Ot.Consumer,e.createContext(void 0));function Pt(){return(0,e.useContext)(Ot)}function At(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=Pt().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),l=(0,e.useMemo)((function(){return Ct({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){s()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:l}}),[t.shouldForwardProp,o,l]);return e.createElement(Ot.Provider,{value:c},e.createElement(_t.Provider,{value:l},t.children))}var Mt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=jt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,tt(this,(function(){throw nt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=jt),this.name+e.hash},e}(),Rt=function(e){return e>="A"&&e<="Z"};function zt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Rt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var It=function(e){return null==e||!1===e||""===e},Nt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!It(o)&&(Array.isArray(o)&&o.isCss||Ye(o)?r.push("".concat(zt(i),":"),o,";"):Ze(o)?r.push.apply(r,a(a(["".concat(i," {")],Nt(o),!1),["}"],!1)):r.push("".concat(zt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lt(e,t,n,r){return It(e)?[]:Xe(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Lt(e(t),t,n,r):e instanceof Mt?n?(e.inject(n,r),[e.getName(r)]):[e]:Ze(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map((function(e){return Lt(e,t,n,r)}))):[e.toString()];var i}function Dt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ye(n)&&!Xe(n))return!1}return!0}var $t=Pe(pe),Ft=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Dt(e),this.componentId=t,this.baseHash=_e($t,t),this.baseStyle=n,wt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Qe(r,this.staticRulesId);else{var i=Je(Lt(this.rules,e,t,n)),a=Te(_e(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Qe(r,a),this.staticRulesId=a}else{for(var s=_e(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Je(Lt(u,e,t,n));s=_e(s,d+c),l+=d}}if(l){var p=Te(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Qe(r,p)}}return r},e}(),Vt=e.createContext(void 0);Vt.Consumer;var Bt={};new Set;function Gt(t,n,r){var a=Xe(t),o=t,s=!Re(t),l=n.attrs,c=void 0===l?ge:l,u=n.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Se(e);Bt[n]=(Bt[n]||0)+1;var r="".concat(n,"-").concat(Ae(pe+n+Bt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,p=n.displayName,f=void 0===p?function(e){return Re(e)?"styled.".concat(e):"Styled(".concat(Me(e),")")}(t):p,h=n.displayName&&n.componentId?"".concat(Se(n.displayName),"-").concat(n.componentId):n.componentId||d,m=a&&o.attrs?o.attrs.concat(c).filter(Boolean):c,g=n.shouldForwardProp;if(a&&o.shouldForwardProp){var x=o.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return x(e,t)&&y(e,t)}}else g=x}var v=new Ft(r,h,a?o.componentStyle:void 0);function b(t,n){return function(t,n,r){var a=t.attrs,o=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Vt),p=Pt(),f=t.shouldForwardProp||p.shouldForwardProp,h=ye(n,d,s)||xe,m=function(e,t,n){for(var r,a=i(i({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var s=Ye(r=e[o])?r(a):r;for(var l in s)a[l]="className"===l?Qe(a[l],s[l]):"style"===l?i(i({},a[l]),s[l]):s[l]}return t.className&&(a.className=Qe(a.className,t.className)),a}(a,n,h),g=m.as||u,x={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?x.as=m.forwardedAs:f&&!f(y,g)||(x[y]=m[y]));var v=function(e,t){var n=Pt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),b=Qe(l,c);return v&&(b+=" "+v),m.className&&(b+=" "+m.className),x[Re(g)&&!ve.has(g)?"class":"className"]=b,x.ref=r,(0,e.createElement)(g,x)}(w,t,n)}b.displayName=f;var w=e.forwardRef(b);return w.attrs=m,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=a?Qe(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=h,w.target=a?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)et(e,i[r],!0);return e}({},o.defaultProps,e):e}}),tt(w,(function(){return".".concat(w.styledComponentId)})),s&&qe(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ht(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ut=function(e){return Object.assign(e,{isCss:!0})};function Wt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ye(e)||Ze(e))return Ut(Lt(Ht(ge,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Lt(r):Ut(Lt(Ht(r,t)))}function Kt(e,t,n){if(void 0===n&&(n=xe),!t)throw nt(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Wt.apply(void 0,a([r],i,!1)))};return r.attrs=function(r){return Kt(e,t,i(i({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Kt(e,t,i(i({},n),r))},r}var qt=function(e){return Kt(Gt,e)},Yt=qt;ve.forEach((function(e){Yt[e]=qt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Dt(e),wt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(Je(Lt(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&wt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Xt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Je(Wt.apply(void 0,a([e],t,!1))),i=Ae(r);return new Mt(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ht(),r=Je([n&&'nonce="'.concat(n,'"'),"".concat(ce,'="true"'),"".concat(de,'="').concat(pe,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw nt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw nt(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[ce]="",n[de]=pe,n.dangerouslySetInnerHTML={__html:r},n),o=ht();return o&&(a.nonce=o),[e.createElement("style",i({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new wt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw nt(2);return e.createElement(At,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw nt(3)}})(),"__sc-".concat(ce,"__");const Qt=n.p+"static/media/Vector (11).2ca1afd7bf72eb81906aa5b67413f4a9.svg";const Jt=n.p+"static/media/frontend.c115b53d77dca9a6d3a56b5562eb0e64.svg";var Zt=n(8750),en=n(8168),tn=n(8587);n(805);function nn(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=nn(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const rn=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=nn(e))&&(r&&(r+=" "),r+=t);return r};function an(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach((i=>{r[i]=e[i].reduce(((e,r)=>{if(r){const i=t(r);""!==i&&e.push(i),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}var on=n(8052),sn=n(7868),ln=n(9172),cn=n(7758),un=n(8812),dn=n(8280);function pn(e,t){return(0,en.A)({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var fn=n(7266);const hn={black:"#000",white:"#fff"},mn={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},gn={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},xn={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},yn={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},vn={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},bn={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},wn={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Sn=["mode","contrastThreshold","tonalOffset"],En={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:hn.white,default:hn.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},kn={text:{primary:hn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:hn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Cn(e,t,n,r){const i=r.light||r,a=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,fn.a)(e.main,i):"dark"===t&&(e.dark=(0,fn.e$)(e.main,a)))}function Tn(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=(0,tn.A)(e,Sn),a=e.primary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:vn[200],light:vn[50],dark:vn[400]}:{main:vn[700],light:vn[400],dark:vn[800]}}(t),o=e.secondary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:gn[200],light:gn[50],dark:gn[400]}:{main:gn[500],light:gn[300],dark:gn[700]}}(t),s=e.error||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:xn[500],light:xn[300],dark:xn[700]}:{main:xn[700],light:xn[400],dark:xn[800]}}(t),l=e.info||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:bn[400],light:bn[300],dark:bn[700]}:{main:bn[700],light:bn[500],dark:bn[900]}}(t),c=e.success||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:wn[400],light:wn[300],dark:wn[700]}:{main:wn[800],light:wn[500],dark:wn[900]}}(t),u=e.warning||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:yn[400],light:yn[300],dark:yn[700]}:{main:"#ed6c02",light:yn[500],dark:yn[900]}}(t);function d(e){return(0,fn.eM)(e,kn.text.primary)>=n?kn.text.primary:En.text.primary}const p=e=>{let{color:t,name:n,mainShade:i=500,lightShade:a=300,darkShade:o=700}=e;if(t=(0,en.A)({},t),!t.main&&t[i]&&(t.main=t[i]),!t.hasOwnProperty("main"))throw new Error((0,sn.A)(11,n?` (${n})`:"",i));if("string"!==typeof t.main)throw new Error((0,sn.A)(12,n?` (${n})`:"",JSON.stringify(t.main)));return Cn(t,"light",a,r),Cn(t,"dark",o,r),t.contrastText||(t.contrastText=d(t.main)),t},f={dark:kn,light:En};return(0,ln.A)((0,en.A)({common:(0,en.A)({},hn),mode:t,primary:p({color:a,name:"primary"}),secondary:p({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:s,name:"error"}),warning:p({color:u,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:c,name:"success"}),grey:mn,contrastThreshold:n,getContrastText:d,augmentColor:p,tonalOffset:r},f[t]),i)}const jn=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const On={textTransform:"uppercase"},_n='"Roboto", "Helvetica", "Arial", sans-serif';function Pn(e,t){const n="function"===typeof t?t(e):t,{fontFamily:r=_n,fontSize:i=14,fontWeightLight:a=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:l=700,htmlFontSize:c=16,allVariants:u,pxToRem:d}=n,p=(0,tn.A)(n,jn);const f=i/14,h=d||(e=>e/c*f+"rem"),m=(e,t,n,i,a)=>{return(0,en.A)({fontFamily:r,fontWeight:e,fontSize:h(t),lineHeight:n},r===_n?{letterSpacing:(o=i/t,Math.round(1e5*o)/1e5)+"em"}:{},a,u);var o},g={h1:m(a,96,1.167,-1.5),h2:m(a,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(s,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(s,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(s,14,1.75,.4,On),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,On),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,ln.A)((0,en.A)({htmlFontSize:c,pxToRem:h,fontFamily:r,fontSize:i,fontWeightLight:a,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:l},g),p,{clone:!1})}function An(){return[`${arguments.length<=0?void 0:arguments[0]}px ${arguments.length<=1?void 0:arguments[1]}px ${arguments.length<=2?void 0:arguments[2]}px ${arguments.length<=3?void 0:arguments[3]}px rgba(0,0,0,0.2)`,`${arguments.length<=4?void 0:arguments[4]}px ${arguments.length<=5?void 0:arguments[5]}px ${arguments.length<=6?void 0:arguments[6]}px ${arguments.length<=7?void 0:arguments[7]}px rgba(0,0,0,0.14)`,`${arguments.length<=8?void 0:arguments[8]}px ${arguments.length<=9?void 0:arguments[9]}px ${arguments.length<=10?void 0:arguments[10]}px ${arguments.length<=11?void 0:arguments[11]}px rgba(0,0,0,0.12)`].join(",")}const Mn=["none",An(0,2,1,-1,0,1,1,0,0,1,3,0),An(0,3,1,-2,0,2,2,0,0,1,5,0),An(0,3,3,-2,0,3,4,0,0,1,8,0),An(0,2,4,-1,0,4,5,0,0,1,10,0),An(0,3,5,-1,0,5,8,0,0,1,14,0),An(0,3,5,-1,0,6,10,0,0,1,18,0),An(0,4,5,-2,0,7,10,1,0,2,16,1),An(0,5,5,-3,0,8,10,1,0,3,14,2),An(0,5,6,-3,0,9,12,1,0,3,16,2),An(0,6,6,-3,0,10,14,1,0,4,18,3),An(0,6,7,-4,0,11,15,1,0,4,20,3),An(0,7,8,-4,0,12,17,2,0,5,22,4),An(0,7,8,-4,0,13,19,2,0,5,24,4),An(0,7,9,-4,0,14,21,2,0,5,26,4),An(0,8,9,-5,0,15,22,2,0,6,28,5),An(0,8,10,-5,0,16,24,2,0,6,30,5),An(0,8,11,-5,0,17,26,2,0,6,32,5),An(0,9,11,-5,0,18,28,2,0,7,34,6),An(0,9,12,-6,0,19,29,2,0,7,36,6),An(0,10,13,-6,0,20,31,3,0,8,38,7),An(0,10,13,-6,0,21,33,3,0,8,40,7),An(0,10,14,-6,0,22,35,3,0,8,42,7),An(0,11,14,-7,0,23,36,3,0,9,44,8),An(0,11,15,-7,0,24,38,3,0,9,46,8)],Rn=["duration","easing","delay"],zn={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},In={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Nn(e){return`${Math.round(e)}ms`}function Ln(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Dn(e){const t=(0,en.A)({},zn,e.easing),n=(0,en.A)({},In,e.duration);return(0,en.A)({getAutoHeightDuration:Ln,create:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{duration:i=n.standard,easing:a=t.easeInOut,delay:o=0}=r;(0,tn.A)(r,Rn);return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"===typeof i?i:Nn(i)} ${a} ${"string"===typeof o?o:Nn(o)}`)).join(",")}},e,{easing:t,duration:n})}const $n={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Fn=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Vn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{mixins:t={},palette:n={},transitions:r={},typography:i={}}=e,a=(0,tn.A)(e,Fn);if(e.vars)throw new Error((0,sn.A)(18));const o=Tn(n),s=(0,dn.A)(e);let l=(0,ln.A)(s,{mixins:pn(s.breakpoints,t),palette:o,shadows:Mn.slice(),typography:Pn(o,i),transitions:Dn(r),zIndex:(0,en.A)({},$n)});l=(0,ln.A)(l,a);for(var c=arguments.length,u=new Array(c>1?c-1:0),d=1;d<c;d++)u[d-1]=arguments[d];return l=u.reduce(((e,t)=>(0,ln.A)(e,t)),l),l.unstable_sxConfig=(0,en.A)({},cn.A,null==a?void 0:a.unstable_sxConfig),l.unstable_sx=function(e){return(0,un.A)({sx:e,theme:this})},l}const Bn=Vn(),Gn="$$material";const Hn=function(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e},Un=e=>Hn(e)&&"classes"!==e,Wn=(0,on.Ay)({themeId:Gn,defaultTheme:Bn,rootShouldForwardProp:Un});function Kn(e,t){const n=(0,en.A)({},t);return Object.keys(e).forEach((r=>{if(r.toString().match(/^(components|slots)$/))n[r]=(0,en.A)({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},a=t[r];n[r]={},a&&Object.keys(a)?i&&Object.keys(i)?(n[r]=(0,en.A)({},a),Object.keys(i).forEach((e=>{n[r][e]=Kn(i[e],a[e])}))):n[r]=a:n[r]=i}else void 0===n[r]&&(n[r]=e[r])})),n}var qn=n(579);const Yn=e.createContext(void 0);function Xn(t){let{props:n,name:r}=t;return function(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const i=t.components[n];return i.defaultProps?Kn(i.defaultProps,r):i.styleOverrides||i.variants?r:Kn(i,r)}({props:n,name:r,theme:{components:e.useContext(Yn)}})}function Qn(e){return Xn(e)}function Jn(e,t){return Jn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Jn(e,t)}function Zn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jn(e,t)}var er=n(7950),tr=n.t(er,2);const nr=!1,rr=e.createContext(null);var ir="unmounted",ar="exited",or="entering",sr="entered",lr="exiting",cr=function(t){function n(e,n){var r;r=t.call(this,e,n)||this;var i,a=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?a?(i=ar,r.appearStatus=or):i=sr:i=e.unmountOnExit||e.mountOnEnter?ir:ar,r.state={status:i},r.nextCallback=null,r}Zn(n,t),n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ir?{status:ar}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==or&&n!==sr&&(t=or):n!==or&&n!==sr||(t=lr)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===or){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:er.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ar&&this.setState({status:ir})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[er.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||nr?this.safeSetState({status:sr},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:or},(function(){t.props.onEntering(a,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:sr},(function(){t.props.onEntered(a,o)}))}))})))},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:er.findDOMNode(this);t&&!nr?(this.props.onExit(r),this.safeSetState({status:lr},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:ar},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:ar},(function(){e.props.onExited(r)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:er.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var t=this.state.status;if(t===ir)return null;var n=this.props,r=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,tn.A)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return e.createElement(rr.Provider,{value:null},"function"===typeof r?r(t,i):e.cloneElement(e.Children.only(r),i))},n}(e.Component);function ur(){}cr.contextType=rr,cr.propTypes={},cr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ur,onEntering:ur,onEntered:ur,onExit:ur,onExiting:ur,onExited:ur},cr.UNMOUNTED=ir,cr.EXITED=ar,cr.ENTERING=or,cr.ENTERED=sr,cr.EXITING=lr;const dr=cr,pr={};const fr=[];class hr{constructor(){this.currentId=null,this.clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new hr}start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}}function mr(){const t=function(t,n){const r=e.useRef(pr);return r.current===pr&&(r.current=t(n)),r}(hr.create).current;var n;return n=t.disposeEffect,e.useEffect(n,fr),t}function gr(e,t){var n,r;const{timeout:i,easing:a,style:o={}}=e;return{duration:null!=(n=o.transitionDuration)?n:"number"===typeof i?i:i[t.mode]||0,easing:null!=(r=o.transitionTimingFunction)?r:"object"===typeof a?a[t.mode]:a,delay:o.transitionDelay}}var xr=n(4575);const yr=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const n=e.useContext(xr.T);return n&&(r=n,0!==Object.keys(r).length)?n:t;var r},vr=(0,dn.A)();const br=function(){return yr(arguments.length>0&&void 0!==arguments[0]?arguments[0]:vr)};function wr(){const e=br(Bn);return e[Gn]||e}function Sr(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.useMemo((()=>n.every((e=>null==e))?null:e=>{n.forEach((t=>{!function(e,t){"function"===typeof e?e(t):e&&(e.current=t)}(t,e)}))}),n)}const Er=Sr,kr=e=>e,Cr=(()=>{let e=kr;return{configure(t){e=t},generate:t=>e(t),reset(){e=kr}}})(),Tr={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function jr(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r=Tr[t];return r?`${n}-${r}`:`${Cr.generate(e)}-${t}`}function Or(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r={};return t.forEach((t=>{r[t]=jr(e,t,n)})),r}function _r(e){return jr("MuiCollapse",e)}Or("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Pr=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Ar=Wn("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((e=>{let{theme:t,ownerState:n}=e;return(0,en.A)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,en.A)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),Mr=Wn("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((e=>{let{ownerState:t}=e;return(0,en.A)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),Rr=Wn("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((e=>{let{ownerState:t}=e;return(0,en.A)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),zr=e.forwardRef((function(t,n){const r=Qn({props:t,name:"MuiCollapse"}),{addEndListener:i,children:a,className:o,collapsedSize:s="0px",component:l,easing:c,in:u,onEnter:d,onEntered:p,onEntering:f,onExit:h,onExited:m,onExiting:g,orientation:x="vertical",style:y,timeout:v=In.standard,TransitionComponent:b=dr}=r,w=(0,tn.A)(r,Pr),S=(0,en.A)({},r,{orientation:x,collapsedSize:s}),E=(e=>{const{orientation:t,classes:n}=e;return an({root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]},_r,n)})(S),k=wr(),C=mr(),T=e.useRef(null),j=e.useRef(),O="number"===typeof s?`${s}px`:s,_="horizontal"===x,P=_?"width":"height",A=e.useRef(null),M=Er(n,A),R=e=>t=>{if(e){const n=A.current;void 0===t?e(n):e(n,t)}},z=()=>T.current?T.current[_?"clientWidth":"clientHeight"]:0,I=R(((e,t)=>{T.current&&_&&(T.current.style.position="absolute"),e.style[P]=O,d&&d(e,t)})),N=R(((e,t)=>{const n=z();T.current&&_&&(T.current.style.position="");const{duration:r,easing:i}=gr({style:y,timeout:v,easing:c},{mode:"enter"});if("auto"===v){const t=k.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,j.current=t}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[P]=`${n}px`,e.style.transitionTimingFunction=i,f&&f(e,t)})),L=R(((e,t)=>{e.style[P]="auto",p&&p(e,t)})),D=R((e=>{e.style[P]=`${z()}px`,h&&h(e)})),$=R(m),F=R((e=>{const t=z(),{duration:n,easing:r}=gr({style:y,timeout:v,easing:c},{mode:"exit"});if("auto"===v){const n=k.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,j.current=n}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[P]=O,e.style.transitionTimingFunction=r,g&&g(e)}));return(0,qn.jsx)(b,(0,en.A)({in:u,onEnter:I,onEntered:L,onEntering:N,onExit:D,onExited:$,onExiting:F,addEndListener:e=>{"auto"===v&&C.start(j.current||0,e),i&&i(A.current,e)},nodeRef:A,timeout:"auto"===v?null:v},w,{children:(e,t)=>(0,qn.jsx)(Ar,(0,en.A)({as:l,className:rn(E.root,o,{entered:E.entered,exited:!u&&"0px"===O&&E.hidden}[e]),style:(0,en.A)({[_?"minWidth":"minHeight"]:O},y),ref:M},t,{ownerState:(0,en.A)({},S,{state:e}),children:(0,qn.jsx)(Mr,{ownerState:(0,en.A)({},S,{state:e}),className:E.wrapper,ref:T,children:(0,qn.jsx)(Rr,{ownerState:(0,en.A)({},S,{state:e}),className:E.wrapperInner,children:a})})}))}))}));zr.muiSupportAuto=!0;const Ir=zr,Nr=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Lr(e){return jr("MuiPaper",e)}Or("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Dr=["className","component","elevation","square","variant"],$r=Wn("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((e=>{let{theme:t,ownerState:n}=e;var r;return(0,en.A)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:`1px solid ${(t.vars||t).palette.divider}`},"elevation"===n.variant&&(0,en.A)({boxShadow:(t.vars||t).shadows[n.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:`linear-gradient(${(0,fn.X4)("#fff",Nr(n.elevation))}, ${(0,fn.X4)("#fff",Nr(n.elevation))})`},t.vars&&{backgroundImage:null==(r=t.vars.overlays)?void 0:r[n.elevation]}))})),Fr=e.forwardRef((function(e,t){const n=Qn({props:e,name:"MuiPaper"}),{className:r,component:i="div",elevation:a=1,square:o=!1,variant:s="elevation"}=n,l=(0,tn.A)(n,Dr),c=(0,en.A)({},n,{component:i,elevation:a,square:o,variant:s}),u=(e=>{const{square:t,elevation:n,variant:r,classes:i}=e;return an({root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]},Lr,i)})(c);return(0,qn.jsx)($r,(0,en.A)({as:i,ownerState:c,className:rn(u.root,r),ref:t},l))})),Vr=Fr;const Br=e.createContext({});const Gr=function(t){let{controlled:n,default:r,name:i,state:a="value"}=t;const{current:o}=e.useRef(void 0!==n),[s,l]=e.useState(r);return[o?n:s,e.useCallback((e=>{o||l(e)}),[])]};const Hr=function(e){return"string"===typeof e};const Ur=function(e,t,n){return void 0===e||Hr(e)?t:(0,en.A)({},t,{ownerState:(0,en.A)({},t.ownerState,n)})};const Wr=function(e,t,n){return"function"===typeof e?e(t,n):e};const Kr=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"===typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n};const qr=function(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"===typeof e[t]))).forEach((n=>{t[n]=e[n]})),t};const Yr=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:a}=e;if(!t){const e=rn(null==n?void 0:n.className,a,null==i?void 0:i.className,null==r?void 0:r.className),t=(0,en.A)({},null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),o=(0,en.A)({},n,i,r);return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}const o=Kr((0,en.A)({},i,r)),s=qr(r),l=qr(i),c=t(o),u=rn(null==c?void 0:c.className,null==n?void 0:n.className,a,null==i?void 0:i.className,null==r?void 0:r.className),d=(0,en.A)({},null==c?void 0:c.style,null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),p=(0,en.A)({},c,n,l,s);return u.length>0&&(p.className=u),Object.keys(d).length>0&&(p.style=d),{props:p,internalRef:c.ref}},Xr=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Qr=["component","slots","slotProps"],Jr=["component"];function Zr(e){return jr("MuiAccordion",e)}const ei=Or("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),ti=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],ni=Wn(Vr,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${ei.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((e=>{let{theme:t}=e;const n={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],n),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${ei.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${ei.disabled}`]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}}),(e=>{let{theme:t}=e;return{variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{[`&.${ei.expanded}`]:{margin:"16px 0"}}}]}})),ri=e.forwardRef((function(t,n){const r=Qn({props:t,name:"MuiAccordion"}),{children:i,className:a,defaultExpanded:o=!1,disabled:s=!1,disableGutters:l=!1,expanded:c,onChange:u,square:d=!1,slots:p={},slotProps:f={},TransitionComponent:h,TransitionProps:m}=r,g=(0,tn.A)(r,ti),[x,y]=Gr({controlled:c,default:o,name:"Accordion",state:"expanded"}),v=e.useCallback((e=>{y(!x),u&&u(e,!x)}),[x,u,y]),[b,...w]=e.Children.toArray(i),S=e.useMemo((()=>({expanded:x,disabled:s,disableGutters:l,toggle:v})),[x,s,l,v]),E=(0,en.A)({},r,{square:d,disabled:s,disableGutters:l,expanded:x}),k=(e=>{const{classes:t,square:n,expanded:r,disabled:i,disableGutters:a}=e;return an({root:["root",!n&&"rounded",r&&"expanded",i&&"disabled",!a&&"gutters"],region:["region"]},Zr,t)})(E),C=(0,en.A)({transition:h},p),T=(0,en.A)({transition:m},f),[j,O]=function(e,t){const{className:n,elementType:r,ownerState:i,externalForwardedProps:a,getSlotOwnerState:o,internalForwardedProps:s}=t,l=(0,tn.A)(t,Xr),{component:c,slots:u={[e]:void 0},slotProps:d={[e]:void 0}}=a,p=(0,tn.A)(a,Qr),f=u[e]||r,h=Wr(d[e],i),m=Yr((0,en.A)({className:n},l,{externalForwardedProps:"root"===e?p:void 0,externalSlotProps:h})),{props:{component:g},internalRef:x}=m,y=(0,tn.A)(m.props,Jr),v=Sr(x,null==h?void 0:h.ref,t.ref),b=o?o(y):{},w=(0,en.A)({},i,b),S="root"===e?g||c:g,E=Ur(f,(0,en.A)({},"root"===e&&!c&&!u[e]&&s,"root"!==e&&!u[e]&&s,y,S&&{as:S},{ref:v}),w);return Object.keys(b).forEach((e=>{delete E[e]})),[f,E]}("transition",{elementType:Ir,externalForwardedProps:{slots:C,slotProps:T},ownerState:E});return(0,qn.jsxs)(ni,(0,en.A)({className:rn(k.root,a),ref:n,ownerState:E,square:d},g,{children:[(0,qn.jsx)(Br.Provider,{value:S,children:b}),(0,qn.jsx)(j,(0,en.A)({in:x,timeout:"auto"},O,{children:(0,qn.jsx)("div",{"aria-labelledby":b.props.id,id:b.props["aria-controls"],role:"region",className:k.region,children:w})}))]}))})),ii=ri,ai="undefined"!==typeof window?e.useLayoutEffect:e.useEffect;const oi=function(t){const n=e.useRef(t);return ai((()=>{n.current=t})),e.useRef((function(){return(0,n.current)(...arguments)})).current},si=oi;let li=!0,ci=!1;const ui=new hr,di={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function pi(e){e.metaKey||e.altKey||e.ctrlKey||(li=!0)}function fi(){li=!1}function hi(){"hidden"===this.visibilityState&&ci&&(li=!0)}function mi(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return li||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!di[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const gi=function(){const t=e.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",pi,!0),t.addEventListener("mousedown",fi,!0),t.addEventListener("pointerdown",fi,!0),t.addEventListener("touchstart",fi,!0),t.addEventListener("visibilitychange",hi,!0))}),[]),n=e.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!mi(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(ci=!0,ui.start(100,(()=>{ci=!1})),n.current=!1,!0)},ref:t}};function xi(t,n){var r=Object.create(null);return t&&e.Children.map(t,(function(e){return e})).forEach((function(t){r[t.key]=function(t){return n&&(0,e.isValidElement)(t)?n(t):t}(t)})),r}function yi(e,t,n){return null!=n[t]?n[t]:e.props[t]}function vi(t,n,r){var i=xi(t.children),a=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),a=[];for(var o in e)o in t?a.length&&(i[o]=a,a=[]):a.push(o);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];s[i[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<a.length;r++)s[a[r]]=n(a[r]);return s}(n,i);return Object.keys(a).forEach((function(o){var s=a[o];if((0,e.isValidElement)(s)){var l=o in n,c=o in i,u=n[o],d=(0,e.isValidElement)(u)&&!u.props.in;!c||l&&!d?c||!l||d?c&&l&&(0,e.isValidElement)(u)&&(a[o]=(0,e.cloneElement)(s,{onExited:r.bind(null,s),in:u.props.in,exit:yi(s,"exit",t),enter:yi(s,"enter",t)})):a[o]=(0,e.cloneElement)(s,{in:!1}):a[o]=(0,e.cloneElement)(s,{onExited:r.bind(null,s),in:!0,exit:yi(s,"exit",t),enter:yi(s,"enter",t)})}})),a}var bi=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},wi=function(t){function n(e,n){var r,i=(r=t.call(this,e,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}Zn(n,t);var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,n){var r,i,a=n.children,o=n.handleExited;return{children:n.firstRender?(r=t,i=o,xi(r.children,(function(t){return(0,e.cloneElement)(t,{onExited:i.bind(null,t),in:!0,appear:yi(t,"appear",r),enter:yi(t,"enter",r),exit:yi(t,"exit",r)})}))):vi(t,a,o),firstRender:!1}},r.handleExited=function(e,t){var n=xi(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,en.A)({},t.children);return delete n[e.key],{children:n}})))},r.render=function(){var t=this.props,n=t.component,r=t.childFactory,i=(0,tn.A)(t,["component","childFactory"]),a=this.state.contextValue,o=bi(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,null===n?e.createElement(rr.Provider,{value:a},o):e.createElement(rr.Provider,{value:a},e.createElement(n,i,o))},n}(e.Component);wi.propTypes={},wi.defaultProps={component:"div",childFactory:function(e){return e}};const Si=wi;var Ei=n(3290);const ki=function(t){const{className:n,classes:r,pulsate:i=!1,rippleX:a,rippleY:o,rippleSize:s,in:l,onExited:c,timeout:u}=t,[d,p]=e.useState(!1),f=rn(n,r.ripple,r.rippleVisible,i&&r.ripplePulsate),h={width:s,height:s,top:-s/2+o,left:-s/2+a},m=rn(r.child,d&&r.childLeaving,i&&r.childPulsate);return l||d||p(!0),e.useEffect((()=>{if(!l&&null!=c){const e=setTimeout(c,u);return()=>{clearTimeout(e)}}}),[c,l,u]),(0,qn.jsx)("span",{className:f,style:h,children:(0,qn.jsx)("span",{className:m})})};const Ci=Or("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ti=["center","classes","className"];let ji,Oi,_i,Pi,Ai=e=>e;const Mi=(0,Ei.i7)(ji||(ji=Ai`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ri=(0,Ei.i7)(Oi||(Oi=Ai`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),zi=(0,Ei.i7)(_i||(_i=Ai`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Ii=Wn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ni=Wn(ki,{name:"MuiTouchRipple",slot:"Ripple"})(Pi||(Pi=Ai`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Ci.rippleVisible,Mi,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),Ci.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),Ci.child,Ci.childLeaving,Ri,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),Ci.childPulsate,zi,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),Li=e.forwardRef((function(t,n){const r=Qn({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:a={},className:o}=r,s=(0,tn.A)(r,Ti),[l,c]=e.useState([]),u=e.useRef(0),d=e.useRef(null);e.useEffect((()=>{d.current&&(d.current(),d.current=null)}),[l]);const p=e.useRef(!1),f=mr(),h=e.useRef(null),m=e.useRef(null),g=e.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:o}=e;c((e=>[...e,(0,qn.jsx)(Ni,{classes:{ripple:rn(a.ripple,Ci.ripple),rippleVisible:rn(a.rippleVisible,Ci.rippleVisible),ripplePulsate:rn(a.ripplePulsate,Ci.ripplePulsate),child:rn(a.child,Ci.child),childLeaving:rn(a.childLeaving,Ci.childLeaving),childPulsate:rn(a.childPulsate,Ci.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},u.current)])),u.current+=1,d.current=o}),[a]),x=e.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:a=i||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&p.current)return void(p.current=!1);"touchstart"===(null==e?void 0:e.type)&&(p.current=!0);const s=o?null:m.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,u,d;if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(l.width/2),u=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;c=Math.round(t-l.left),u=Math.round(n-l.top)}if(a)d=Math.sqrt((2*l.width**2+l.height**2)/3),d%2===0&&(d+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-u),u)+2;d=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===h.current&&(h.current=()=>{g({pulsate:r,rippleX:c,rippleY:u,rippleSize:d,cb:n})},f.start(80,(()=>{h.current&&(h.current(),h.current=null)}))):g({pulsate:r,rippleX:c,rippleY:u,rippleSize:d,cb:n})}),[i,g,f]),y=e.useCallback((()=>{x({},{pulsate:!0})}),[x]),v=e.useCallback(((e,t)=>{if(f.clear(),"touchend"===(null==e?void 0:e.type)&&h.current)return h.current(),h.current=null,void f.start(0,(()=>{v(e,t)}));h.current=null,c((e=>e.length>0?e.slice(1):e)),d.current=t}),[f]);return e.useImperativeHandle(n,(()=>({pulsate:y,start:x,stop:v})),[y,x,v]),(0,qn.jsx)(Ii,(0,en.A)({className:rn(Ci.root,a.root,o),ref:m},s,{children:(0,qn.jsx)(Si,{component:null,exit:!0,children:l})}))})),Di=Li;function $i(e){return jr("MuiButtonBase",e)}const Fi=Or("MuiButtonBase",["root","disabled","focusVisible"]),Vi=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Bi=Wn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Fi.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Gi=e.forwardRef((function(t,n){const r=Qn({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:a=!1,children:o,className:s,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:p=!1,LinkComponent:f="a",onBlur:h,onClick:m,onContextMenu:g,onDragLeave:x,onFocus:y,onFocusVisible:v,onKeyDown:b,onKeyUp:w,onMouseDown:S,onMouseLeave:E,onMouseUp:k,onTouchEnd:C,onTouchMove:T,onTouchStart:j,tabIndex:O=0,TouchRippleProps:_,touchRippleRef:P,type:A}=r,M=(0,tn.A)(r,Vi),R=e.useRef(null),z=e.useRef(null),I=Er(z,P),{isFocusVisibleRef:N,onFocus:L,onBlur:D,ref:$}=gi(),[F,V]=e.useState(!1);c&&F&&V(!1),e.useImperativeHandle(i,(()=>({focusVisible:()=>{V(!0),R.current.focus()}})),[]);const[B,G]=e.useState(!1);e.useEffect((()=>{G(!0)}),[]);const H=B&&!u&&!c;function U(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;return si((r=>{t&&t(r);return!n&&z.current&&z.current[e](r),!0}))}e.useEffect((()=>{F&&p&&!u&&B&&z.current.pulsate()}),[u,p,F,B]);const W=U("start",S),K=U("stop",g),q=U("stop",x),Y=U("stop",k),X=U("stop",(e=>{F&&e.preventDefault(),E&&E(e)})),Q=U("start",j),J=U("stop",C),Z=U("stop",T),ee=U("stop",(e=>{D(e),!1===N.current&&V(!1),h&&h(e)}),!1),te=si((e=>{R.current||(R.current=e.currentTarget),L(e),!0===N.current&&(V(!0),v&&v(e)),y&&y(e)})),ne=()=>{const e=R.current;return l&&"button"!==l&&!("A"===e.tagName&&e.href)},re=e.useRef(!1),ie=si((e=>{p&&!re.current&&F&&z.current&&" "===e.key&&(re.current=!0,z.current.stop(e,(()=>{z.current.start(e)}))),e.target===e.currentTarget&&ne()&&" "===e.key&&e.preventDefault(),b&&b(e),e.target===e.currentTarget&&ne()&&"Enter"===e.key&&!c&&(e.preventDefault(),m&&m(e))})),ae=si((e=>{p&&" "===e.key&&z.current&&F&&!e.defaultPrevented&&(re.current=!1,z.current.stop(e,(()=>{z.current.pulsate(e)}))),w&&w(e),m&&e.target===e.currentTarget&&ne()&&" "===e.key&&!e.defaultPrevented&&m(e)}));let oe=l;"button"===oe&&(M.href||M.to)&&(oe=f);const se={};"button"===oe?(se.type=void 0===A?"button":A,se.disabled=c):(M.href||M.to||(se.role="button"),c&&(se["aria-disabled"]=c));const le=Er(n,$,R);const ce=(0,en.A)({},r,{centerRipple:a,component:l,disabled:c,disableRipple:u,disableTouchRipple:d,focusRipple:p,tabIndex:O,focusVisible:F}),ue=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,a=an({root:["root",t&&"disabled",n&&"focusVisible"]},$i,i);return n&&r&&(a.root+=` ${r}`),a})(ce);return(0,qn.jsxs)(Bi,(0,en.A)({as:oe,className:rn(ue.root,s),ownerState:ce,onBlur:ee,onClick:m,onContextMenu:K,onFocus:te,onKeyDown:ie,onKeyUp:ae,onMouseDown:W,onMouseLeave:X,onMouseUp:Y,onDragLeave:q,onTouchEnd:J,onTouchMove:Z,onTouchStart:Q,ref:le,tabIndex:c?-1:O,type:A},se,M,{children:[o,H?(0,qn.jsx)(Di,(0,en.A)({ref:I,center:a},_)):null]}))})),Hi=Gi;function Ui(e){return jr("MuiAccordionSummary",e)}const Wi=Or("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Ki=["children","className","expandIcon","focusVisibleClassName","onClick"],qi=Wn(Hi,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;const n={duration:t.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],n),[`&.${Wi.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Wi.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`&:hover:not(.${Wi.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${Wi.expanded}`]:{minHeight:64}}}]}})),Yi=Wn("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((e=>{let{theme:t}=e;return{display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),[`&.${Wi.expanded}`]:{margin:"20px 0"}}}]}})),Xi=Wn("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((e=>{let{theme:t}=e;return{display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),[`&.${Wi.expanded}`]:{transform:"rotate(180deg)"}}})),Qi=e.forwardRef((function(t,n){const r=Qn({props:t,name:"MuiAccordionSummary"}),{children:i,className:a,expandIcon:o,focusVisibleClassName:s,onClick:l}=r,c=(0,tn.A)(r,Ki),{disabled:u=!1,disableGutters:d,expanded:p,toggle:f}=e.useContext(Br),h=(0,en.A)({},r,{expanded:p,disabled:u,disableGutters:d}),m=(e=>{const{classes:t,expanded:n,disabled:r,disableGutters:i}=e;return an({root:["root",n&&"expanded",r&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},Ui,t)})(h);return(0,qn.jsxs)(qi,(0,en.A)({focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":p,className:rn(m.root,a),focusVisibleClassName:rn(m.focusVisible,s),onClick:e=>{f&&f(e),l&&l(e)},ref:n,ownerState:h},c,{children:[(0,qn.jsx)(Yi,{className:m.content,ownerState:h,children:i}),o&&(0,qn.jsx)(Xi,{className:m.expandIconWrapper,ownerState:h,children:o})]}))})),Ji=Qi;function Zi(e){return jr("MuiAccordionDetails",e)}Or("MuiAccordionDetails",["root"]);const ea=["className"],ta=Wn("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{padding:t.spacing(1,2,2)}})),na=e.forwardRef((function(e,t){const n=Qn({props:e,name:"MuiAccordionDetails"}),{className:r}=n,i=(0,tn.A)(n,ea),a=n,o=(e=>{const{classes:t}=e;return an({root:["root"]},Zi,t)})(a);return(0,qn.jsx)(ta,(0,en.A)({className:rn(o.root,r),ref:t,ownerState:a},i))})),ra=na;var ia=n(8698);const aa=n(7598).A;function oa(e){return jr("MuiTypography",e)}Or("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const sa=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],la=Wn("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${aa(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:n}=e;return(0,en.A)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),ca={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ua={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},da=e.forwardRef((function(e,t){const n=Qn({props:e,name:"MuiTypography"}),r=(e=>ua[e]||e)(n.color),i=(0,ia.A)((0,en.A)({},n,{color:r})),{align:a="inherit",className:o,component:s,gutterBottom:l=!1,noWrap:c=!1,paragraph:u=!1,variant:d="body1",variantMapping:p=ca}=i,f=(0,tn.A)(i,sa),h=(0,en.A)({},i,{align:a,color:r,className:o,component:s,gutterBottom:l,noWrap:c,paragraph:u,variant:d,variantMapping:p}),m=s||(u?"p":p[d]||ca[d])||"span",g=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:i,variant:a,classes:o}=e;return an({root:["root",a,"inherit"!==e.align&&`align${aa(t)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]},oa,o)})(h);return(0,qn.jsx)(la,(0,en.A)({as:m,ref:t,ownerState:h,className:rn(g.root,o)},f))})),pa=da;const fa=n.p+"static/media/Group 97 (1).dd03507d390726c08996acefb6ef4183.svg";const ha=n.p+"static/media/Group 96.64f8ed64e619635b22dd083fd8d383e5.svg",ma=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ga={entering:{opacity:1},entered:{opacity:1}},xa=e.forwardRef((function(t,n){const r=wr(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:a,appear:o=!0,children:s,easing:l,in:c,onEnter:u,onEntered:d,onEntering:p,onExit:f,onExited:h,onExiting:m,style:g,timeout:x=i,TransitionComponent:y=dr}=t,v=(0,tn.A)(t,ma),b=e.useRef(null),w=Er(b,s.ref,n),S=e=>t=>{if(e){const n=b.current;void 0===t?e(n):e(n,t)}},E=S(p),k=S(((e,t)=>{(e=>{e.scrollTop})(e);const n=gr({style:g,timeout:x,easing:l},{mode:"enter"});e.style.webkitTransition=r.transitions.create("opacity",n),e.style.transition=r.transitions.create("opacity",n),u&&u(e,t)})),C=S(d),T=S(m),j=S((e=>{const t=gr({style:g,timeout:x,easing:l},{mode:"exit"});e.style.webkitTransition=r.transitions.create("opacity",t),e.style.transition=r.transitions.create("opacity",t),f&&f(e)})),O=S(h);return(0,qn.jsx)(y,(0,en.A)({appear:o,in:c,nodeRef:b,onEnter:k,onEntered:C,onEntering:E,onExit:j,onExited:O,onExiting:T,addEndListener:e=>{a&&a(b.current,e)},timeout:x},v,{children:(t,n)=>e.cloneElement(s,(0,en.A)({style:(0,en.A)({opacity:0,visibility:"exited"!==t||c?void 0:"hidden"},ga[t],g,s.props.style),ref:w},n))}))})),ya=xa,va=(0,Zt.A)("div")`
  width: 812px;
  display: flex;
  flex-direction: column;
  padding: 26px 0 33px 77px;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;function ba(t){let{arrow:n}=t;const[r,i]=(0,e.useState)(!1);return(0,qn.jsx)(va,{children:n.map((e=>{return(0,qn.jsxs)(ii,{expanded:r===e.id,onChange:(t=e.id,(e,n)=>{i(!!n&&t)}),TransitionComponent:ya,TransitionProps:{timeout:400},children:[(0,qn.jsx)(Ji,{expandIcon:r===e.id?(0,qn.jsx)("img",{src:ha,alt:"Collapse icon"}):(0,qn.jsx)("img",{src:fa,alt:"Expand icon"}),"aria-controls":`panel${e.id}-content`,id:`panel${e.id}-header`,children:(0,qn.jsxs)(pa,{children:[(null===e||void 0===e?void 0:e.img)&&(0,qn.jsx)("img",{src:null===e||void 0===e?void 0:e.img,alt:`${e.title} icon`,style:{width:24,height:24,marginRight:8}}),e.title]})}),(0,qn.jsx)(ra,{children:(0,qn.jsx)(pa,{children:e.description})})]},e.id);var t}))})}const wa=n.p+"static/media/mentors.e2e47f4b2ea307deec46ba8a64928dfe.svg";const Sa=n.p+"static/media/HTML ICON.403faabeaafbc6e2cd833a8448df00ca.svg";const Ea=n.p+"static/media/JS ICON.f2a9c3db5efb11ba90a20c19a985d047.svg";const ka=n.p+"static/media/Vector (12).a5c3ee22afc1b88fe4a6e279549471cf.svg";const Ca=n.p+"static/media/redux-logo-svgrepo-com 1.6d83109aa5388ebb028b96c09c26eef2.svg";const Ta=n.p+"static/media/redux-logo-svgrepo-com 2.858b3d30c41362c1ccd262e3d4afa92e.svg";const ja=n.p+"static/media/material-ui-svgrepo-com 1.cca5ab42c9edc5d1c3bcca15f75f4f12.svg";const Oa=n.p+"static/media/feMedal0 (1).5a18dfeb9e13f9f27b83db462246480a.svg";const _a=n.p+"static/media/Vector (13).a4425e72ff5b5bbcb171608ea76fc5ee.svg";const Pa=n.p+"static/media/Vector (14).7999e293fd94dff3b9afb4bd7f957c4e.svg";const Aa=n.p+"static/media/Vector (15).62328202926294de4580548861464daf.svg";const Ma=n.p+"static/media/Group 80 (1).e24035d1cdd9f9d1e129264ce4a4be4b.svg";const Ra=n.p+"static/media/Group 46.70fb5e2ca518dc8d7d60592bcec42228.svg";const za=n.p+"static/media/Group 47.37d330d9a2a1430105954066a00f95a8.svg";const Ia=n.p+"static/media/Group 48.2287a6ec8509e5be1bd0f0131d6dc6f5.svg";const Na=n.p+"static/media/idev.b29fcc29597a77b15352276d5506c500.svg";function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},La.apply(this,arguments)}var Da;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Da||(Da={}));const $a="popstate";function Fa(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Va(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Ba(e,t){return{usr:e.state,key:e.key,idx:t}}function Ga(e,t,n,r){return void 0===n&&(n=null),La({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Ua(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Ha(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Ua(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wa(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Da.Pop,l=null,c=u();function u(){return(o.state||{idx:null}).idx}function d(){s=Da.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:Ha(e);return n=n.replace(/ $/,"%20"),Fa(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,o.replaceState(La({},o.state,{idx:c}),""));let f={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($a,d),l=e,()=>{i.removeEventListener($a,d),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=Da.Push;let r=Ga(f.location,e,t);n&&n(r,e),c=u()+1;let d=Ba(r,c),p=f.createHref(r);try{o.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(p)}a&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=Da.Replace;let r=Ga(f.location,e,t);n&&n(r,e),c=u();let i=Ba(r,c),d=f.createHref(r);o.replaceState(i,"",d),a&&l&&l({action:s,location:f.location,delta:0})},go:e=>o.go(e)};return f}var Ka;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Ka||(Ka={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function qa(e,t,n){return void 0===n&&(n="/"),Ya(e,t,n,!1)}function Ya(e,t,n,r){let i=co(("string"===typeof t?Ua(t):t).pathname||"/",n);if(null==i)return null;let a=Xa(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=lo(i);o=oo(a[s],e,r)}return o}function Xa(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(Fa(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=mo([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(Fa(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),Xa(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:ao(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of Qa(e.path))i(e,t,r);else i(e,t)})),t}function Qa(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=Qa(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const Ja=/^:[\w-]+$/,Za=3,eo=2,to=1,no=10,ro=-2,io=e=>"*"===e;function ao(e,t){let n=e.split("/"),r=n.length;return n.some(io)&&(r+=ro),t&&(r+=eo),n.filter((e=>!io(e))).reduce(((e,t)=>e+(Ja.test(t)?Za:""===t?to:no)),r)}function oo(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=so({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=so({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:mo([a,u.pathname]),pathnameBase:go(mo([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=mo([a,u.pathnameBase]))}return o}function so(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Va("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function lo(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return Va(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function co(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function uo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function po(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function fo(e,t){let n=po(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function ho(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=Ua(e):(i=La({},e),Fa(!i.pathname||!i.pathname.includes("?"),uo("?","pathname","search",i)),Fa(!i.pathname||!i.pathname.includes("#"),uo("#","pathname","hash",i)),Fa(!i.search||!i.search.includes("#"),uo("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?Ua(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:xo(r),hash:yo(i)}}(i,a),c=s&&"/"!==s&&s.endsWith("/"),u=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const mo=e=>e.join("/").replace(/\/\/+/g,"/"),go=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xo=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",yo=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function vo(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const bo=["post","put","patch","delete"],wo=(new Set(bo),["get",...bo]);new Set(wo),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}const Eo=e.createContext(null);const ko=e.createContext(null);const Co=e.createContext(null);const To=e.createContext(null);const jo=e.createContext({outlet:null,matches:[],isDataRoute:!1});const Oo=e.createContext(null);function _o(){return null!=e.useContext(To)}function Po(){return _o()||Fa(!1),e.useContext(To).location}function Ao(t){e.useContext(Co).static||e.useLayoutEffect(t)}function Mo(){let{isDataRoute:t}=e.useContext(jo);return t?function(){let{router:t}=Vo($o.UseNavigateStable),n=Go(Fo.UseNavigateStable),r=e.useRef(!1);return Ao((()=>{r.current=!0})),e.useCallback((function(e,i){void 0===i&&(i={}),r.current&&("number"===typeof e?t.navigate(e):t.navigate(e,So({fromRouteId:n},i)))}),[t,n])}():function(){_o()||Fa(!1);let t=e.useContext(Eo),{basename:n,future:r,navigator:i}=e.useContext(Co),{matches:a}=e.useContext(jo),{pathname:o}=Po(),s=JSON.stringify(fo(a,r.v7_relativeSplatPath)),l=e.useRef(!1);return Ao((()=>{l.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof e)return void i.go(e);let a=ho(e,JSON.parse(s),o,"path"===r.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:mo([n,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)}),[n,i,s,o,t])}()}function Ro(t,n,r,i){_o()||Fa(!1);let{navigator:a}=e.useContext(Co),{matches:o}=e.useContext(jo),s=o[o.length-1],l=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let u,d=Po();if(n){var p;let e="string"===typeof n?Ua(n):n;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||Fa(!1),u=e}else u=d;let f=u.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=qa(t,{pathname:h});let g=Do(m&&m.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:mo([c,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:mo([c,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,r,i);return n&&g?e.createElement(To.Provider,{value:{location:So({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Da.Pop}},g):g}function zo(){let t=function(){var t;let n=e.useContext(Oo),r=Bo(Fo.UseRouteError),i=Go(Fo.UseRouteError);if(void 0!==n)return n;return null==(t=r.errors)?void 0:t[i]}(),n=vo(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,null)}const Io=e.createElement(zo,null);class No extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(jo.Provider,{value:this.props.routeContext},e.createElement(Oo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lo(t){let{routeContext:n,match:r,children:i}=t,a=e.useContext(Eo);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(jo.Provider,{value:n},i)}function Do(t,n,r,i){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==t){var o;if(!r)return null;if(r.errors)t=r.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;t=r.matches}}let s=t,l=null==(a=r)?void 0:a.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||Fa(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&void 0===e[t.route.id]&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){c=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((t,i,a)=>{let o,d=!1,p=null,f=null;var h;r&&(o=l&&i.route.id?l[i.route.id]:void 0,p=i.route.errorElement||Io,c&&(u<0&&0===a?(h="route-fallback",!1||Ho[h]||(Ho[h]=!0),d=!0,f=null):u===a&&(d=!0,f=i.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,a+1)),g=()=>{let n;return n=o?p:d?f:i.route.Component?e.createElement(i.route.Component,null):i.route.element?i.route.element:t,e.createElement(Lo,{match:i,routeContext:{outlet:t,matches:m,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?e.createElement(No,{location:r.location,revalidation:r.revalidation,component:p,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var $o=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($o||{}),Fo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fo||{});function Vo(t){let n=e.useContext(Eo);return n||Fa(!1),n}function Bo(t){let n=e.useContext(ko);return n||Fa(!1),n}function Go(t){let n=function(){let t=e.useContext(jo);return t||Fa(!1),t}(),r=n.matches[n.matches.length-1];return r.route.id||Fa(!1),r.route.id}const Ho={};t.startTransition;function Uo(e){Fa(!1)}function Wo(t){let{basename:n="/",children:r=null,location:i,navigationType:a=Da.Pop,navigator:o,static:s=!1,future:l}=t;_o()&&Fa(!1);let c=n.replace(/^\/*/,"/"),u=e.useMemo((()=>({basename:c,navigator:o,static:s,future:So({v7_relativeSplatPath:!1},l)})),[c,l,o,s]);"string"===typeof i&&(i=Ua(i));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=i,g=e.useMemo((()=>{let e=co(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m},navigationType:a}}),[c,d,p,f,h,m,a]);return null==g?null:e.createElement(Co.Provider,{value:u},e.createElement(To.Provider,{children:r,value:g}))}function Ko(e){let{children:t,location:n}=e;return Ro(qo(t),n)}new Promise((()=>{}));e.Component;function qo(t,n){void 0===n&&(n=[]);let r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let a=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,qo(t.props.children,a));t.type!==Uo&&Fa(!1),t.props.index&&t.props.children&&Fa(!1);let o={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(o.children=qo(t.props.children,a)),r.push(o)})),r}var Yo=n(7237),Xo=e,Qo=Symbol.for("react-redux-context"),Jo="undefined"!==typeof globalThis?globalThis:{};function Zo(){if(!Xo.createContext)return{};const e=Jo[Qo]??(Jo[Qo]=new Map);let t=e.get(Xo.createContext);return t||(t=Xo.createContext(null),e.set(Xo.createContext,t)),t}var es=Zo(),ts=()=>{throw new Error("uSES not initialized!")};function ns(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:es;return function(){return Xo.useContext(e)}}var rs=ns(),is=ts,as=(e,t)=>e===t;function os(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:es;const t=e===es?rs:ns(e),n=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{equalityFn:r=as,devModeChecks:i={}}="function"===typeof n?{equalityFn:n}:n;const{store:a,subscription:o,getServerState:s,stabilityCheck:l,identityFunctionCheck:c}=t(),u=(Xo.useRef(!0),Xo.useCallback({[e.name]:t=>e(t)}[e.name],[e,l,i.stabilityCheck])),d=is(o.addNestedSub,a.getState,s||a.getState,u,r);return Xo.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}var ss=os();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");function ls(e){e()}var cs={notify(){},get:()=>[]};function us(e,t){let n,r=cs,i=0,a=!1;function o(){c.onStateChange&&c.onStateChange()}function s(){i++,n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ls((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){r&&null!==e&&(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}())}function l(){i--,n&&0===i&&(n(),n=void 0,r.clear(),r=cs)}const c={addNestedSub:function(e){s();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),l())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return a},trySubscribe:function(){a||(a=!0,s())},tryUnsubscribe:function(){a&&(a=!1,l())},getListeners:()=>r};return c}var ds=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ps="undefined"!==typeof navigator&&"ReactNative"===navigator.product,fs=ds||ps?Xo.useLayoutEffect:Xo.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var hs=function(e){let{store:t,context:n,children:r,serverState:i,stabilityCheck:a="once",identityFunctionCheck:o="once"}=e;const s=Xo.useMemo((()=>{const e=us(t);return{store:t,subscription:e,getServerState:i?()=>i:void 0,stabilityCheck:a,identityFunctionCheck:o}}),[t,i,a,o]),l=Xo.useMemo((()=>t.getState()),[t]);fs((()=>{const{subscription:e}=s;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),l!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[s,l]);const c=n||es;return Xo.createElement(c.Provider,{value:s},r)};function ms(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:es;const t=e===es?rs:ns(e),n=()=>{const{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var gs=ms();function xs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:es;const t=e===es?gs:ms(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ys,vs=xs();ys=Yo.useSyncExternalStoreWithSelector,is=ys,(e=>{e})(e.useSyncExternalStore);const bs=[{id:1,img:Sa,title:"1.HTML-CSS",description:"Description for HTML-CSS."},{id:2,img:Ea,title:"2.JAVASCRIPT",description:"Description for JavaScript."},{id:3,img:ka,title:"3.REACT JS",description:"Description for React JS."},{id:4,img:Ca,title:"4.REDUX",description:"Description for Redux."},{id:5,img:Ta,title:"5.REDUX-TOOLKIT",description:"Description for Redux Toolkit."},{id:6,img:ja,title:"6.MATERIAL-UI",description:"Description for Material-UI."}],ws=()=>{const e=ss((e=>e.language.language)),t=Mo();return(0,qn.jsxs)(Ss,{children:[(0,qn.jsxs)(Es,{backgrounfrontend:Jt,children:[(0,qn.jsx)("button",{onClick:()=>t("/"),children:(0,qn.jsx)(ks,{src:Qt,alt:""})}),(0,qn.jsx)(Cs,{children:"FRONT-END DEVELOPER"}),(0,qn.jsx)(Ts,{children:"KG"===e?"\u0421\u0438\u0437 \u043c\u0430\u043a\u0435\u0442\u0442\u0438\u043d \u0436\u0430\u043d\u0430 JAVASCRIPT\u0442\u0438\u043d \u043d\u0435\u0433\u0438\u0437\u0434\u0435\u0440\u0438 \u043c\u0435\u043d\u0435\u043d \u0431\u0430\u0448\u0442\u0430\u0439\u0441\u044b\u0437 \u0436\u0430\u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0434\u0438\u043d \u0430\u044f\u0433\u044b\u043d\u0434\u0430 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u0434\u0438\u043a \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0436\u0430\u0441\u043e\u043e. \u041a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430 \u0438\u0448\u0442\u04e9\u04e9 \u0442\u0430\u0436\u0440\u044b\u0439\u0431\u0430\u0441\u044b\u043d\u0430 \u044d\u044d \u0431\u043e\u043b\u0443\u043f, \u0431\u0430\u0448\u0442\u0430\u04a3\u044b\u0437 IT \u0442\u0430\u0440\u043c\u0430\u0433\u044b\u043d\u0434\u0430 \u0432\u0435\u0431-\u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0443\u0443\u0447\u0443 \u043a\u0430\u0442\u0430\u0440\u044b \u043a\u0430\u0440\u044c\u0435\u0440\u0430":" \u0412\u044b \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u0441 \u043e\u0441\u043d\u043e\u0432 \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0438 JAVASCRIPT, \u0430 \u043a \u043a\u043e\u043d\u0446\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c  \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438 \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0432 \u0441\u0444\u0435\u0440\u0435 IT \u043a\u0430\u043a \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"}),(0,qn.jsx)(js,{children:(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0443 \u0430\u044f\u043a\u0442\u0430\u0433\u0430\u043d\u0434\u0430\u043d \u043a\u0438\u0439\u0438\u043d \u0441\u0438\u0437\u0433\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u0448\u0443\u043c\u0447\u0430 \u0436\u0443\u043c\u0443\u0448 \u0431\u0435\u0440\u0438\u043b\u0435\u0442 IT \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043b\u0430\u0440\u044b":" \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0438 \u043f\u043b\u044e\u0441 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445"})})]}),(0,qn.jsxs)(Ps,{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Os,{children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"}),(0,qn.jsx)(_s,{children:"KG"===e?"\u041d\u0435\u0433\u0438\u0437\u0433\u0438 \u043a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsx)(ba,{arrow:bs})]}),(0,qn.jsxs)(As,{children:[(0,qn.jsx)(Ms,{children:"\u041a\u0443\u0440\u0441"}),(0,qn.jsx)(Rs,{children:"JAVA DEVELOPER"}),(0,qn.jsx)(zs,{children:"KG"===e?"\u041a\u0443\u0440\u0441 8 \u0430\u0439\u0433\u0430 \u0441\u043e\u0437\u0443\u043b\u0430\u0442 - 6 \u0430\u0439 \u043e\u043a\u0443\u0443, 2 \u0430\u0439 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430":"\u041a\u0443\u0440\u0441 \u0434\u043b\u0438\u0442\u0441\u044f 8 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 - 6 \u043c\u0435\u0441\u044f\u0446 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 2 \u043c\u0435\u0441\u044f\u0446 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430"}),(0,qn.jsx)(Is,{children:"KG"===e?"\u0410\u0439\u044b\u043d\u0430 10 000 \u0441\u043e\u043c":"10 000 c\u043e\u043c \u0432 \u043c\u0435\u0441\u044f\u0446"}),(0,qn.jsx)(Ns,{href:"https://api.whatsapp.com/send?phone=996509914101",children:"KG"===e?"\u041a\u0438\u0440\u04af\u04af":"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ls,{children:"KG"===e?"\u0414\u0438\u043f\u043b\u043e\u043c\u0434\u0443\u043a \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440":"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),(0,qn.jsxs)(Ds,{children:[(0,qn.jsx)("li",{children:"1.Landing Page "}),(0,qn.jsxs)("li",{children:["2.","KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442":"\u0421\u0430\u0439\u0442"]}),(0,qn.jsxs)("li",{children:["3.","KG"===e?"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0434\u04af\u043a\u04e9\u043d\u04af":"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"]}),(0,qn.jsxs)("li",{children:["4.","KG"===e?"\u042d\u043c\u043d\u0435 \u043a\u044b\u043b\u0430\u0431\u044b\u0437 \u0436\u0430\u043d\u0430 \u043a\u0430\u043d\u0442\u0438\u043f \u0438\u0448\u0442\u0435\u0439\u0431\u0438\u0437?":"\u0421 \u0447\u0435\u043c \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438 \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)($s,{children:"KG"===e?"\u041d\u0430\u0441\u0430\u0430\u0442\u0447\u044b\u043b\u0430\u0440 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d":"\u041c\u0435\u043d\u0442\u043e\u0440\u044b \u043f\u043e Front-End "}),(0,qn.jsxs)(Fs,{children:[(0,qn.jsxs)(Vs,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(Bs,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(Gs,{children:"UX/UI Designer"})]}),(0,qn.jsxs)(Vs,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(Bs,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(Gs,{children:"UX/UI Designer"})]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Hs,{children:"KG"===e?"\u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437?":"\u0427\u0435\u043c\u0443 \u0432\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c?"}),(0,qn.jsxs)(Us,{children:[(0,qn.jsx)(Ws,{children:(0,qn.jsx)("img",{src:Oa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ks,{children:"KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442\u0442\u044b \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044b\u0440\u044b\u04a3\u044b\u0437":"\u0412\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0441\u0430\u0439\u0442 "}),(0,qn.jsx)(qs,{children:"KG"===e?"\u0417\u0430\u043c\u0430\u043d\u0431\u0430\u043f CSS\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u04e9\u0437\u0433\u04e9\u0447\u04e9\u043b\u04af\u043a\u0442\u04e9\u0440\u04af\u043d \u043c\u0430\u0439\u0434\u0430-\u0447\u04af\u0439\u0434\u04e9\u0441\u04af\u043d\u04e9 \u0447\u0435\u0439\u0438\u043d \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437, \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437 \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443\u0433\u0430 \u043e\u04a3\u043e\u0439 \u0436\u043e\u043e\u043f \u0431\u0435\u0440\u04af\u04af\u0447\u04af \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0442\u0430\u0440\u0434\u044b \u0442\u04af\u0437\u04af\u04a3\u04af\u0437. \u0421\u0435\u043d \u0436\u0430\u0441\u0430\u0439\u0441\u044b\u04a3\u0431\u044b? \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u043b\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u043d\u0430 \u04e9\u0442\u04af\u04af\u043b\u04e9\u0440\u0434\u04af\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u044d\u0441\u0442\u0435\u0442\u0438\u043a\u0430\u043b\u044b\u043a \u0436\u0430\u043a\u0442\u0430\u043d \u0436\u0430\u0433\u044b\u043c\u0434\u0443\u0443\u0440\u0430\u0430\u043a.":"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e CSS, \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435\u0441\u0430\u0439\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0421\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u0435\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432."})]})]}),(0,qn.jsx)(Ys,{}),(0,qn.jsxs)(Us,{children:[(0,qn.jsx)(Ws,{children:(0,qn.jsx)("img",{src:_a,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ks,{children:"Java Script"}),(0,qn.jsx)(qs,{children:"KG"===e?"\u0421\u0438\u0437 \u0441\u0430\u0439\u0442\u0442\u044b\u043d \u043b\u043e\u0433\u0438\u043a\u0430\u0441\u044b\u043d \u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0430\u0441\u044b\u0437. \u0416\u04e9\u043d\u04e9\u043a\u04e9\u0439 \u043c\u043e\u0434\u0430\u043b\u0434\u044b\u043a \u0442\u0435\u0440\u0435\u0437\u0435\u0434\u0435\u043d \u0441\u0435\u0440\u0432\u0435\u0440\u0434\u0435\u043d \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0434\u0443\u043a \u0436\u04af\u043a\u0442\u04e9\u04e9 \u0436\u0430\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u04af\u0447\u04af\u043d \u044d\u04a3 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u0434\u0443\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u0442\u0438\u043b\u0434\u0435\u0440\u0438\u043d\u0438\u043d \u0431\u0438\u0440\u0438\u043d \u0441\u0442\u0440\u0435\u0441\u0441\u0441\u0438\u0437 \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u0439\u0442\u0430. \u041e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430\u0434\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f enterprise- \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.\u0411\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430 \u0432\u044b\u0443\u0447\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."})]})]}),(0,qn.jsx)(Ys,{}),(0,qn.jsxs)(Us,{children:[(0,qn.jsx)(Ws,{children:(0,qn.jsx)("img",{src:Pa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ks,{children:"Framework"}),(0,qn.jsx)(qs,{children:"KG"===e?"\u0410\u043b\u043a\u0430\u043a\u0442\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442\u0438 \u0442\u0435\u0437 \u04e9\u043d\u04af\u043a\u0442\u04af\u0440\u04e9 \u0430\u043b\u0430\u0441\u044b\u0437 \u0436\u0435\u043b\u0435 \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u044b, \u043e\u0448\u043e\u043d\u0434\u043e\u0439 \u044d\u043b\u0435 \u0430\u043b\u0430\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0434\u0438\u043d \u0440\u0435\u0441\u0443\u0440\u0441\u0442\u0430\u0440\u044b\u043d \u043d\u0430\u0442\u044b\u0439\u0436\u0430\u043b\u0443\u0443\u0440\u0430\u0430\u043a \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0448\u0430\u0442. \u0441\u0435\u043d \u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04af\u04af\u043d\u04af \u0442\u0430\u043d\u0434\u0430\u0439\u0441\u044b\u0437 - React \u0436\u0435 Vue..":"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u0430 \u0435\u0449\u0451 \u043e\u043d\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u0443\u044e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0412\u044b  \u0441\u0430\u043c\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0443\u0447\u0438\u0442\u044c \u2014 React \u0438\u043b\u0438 Vue.."})]})]}),(0,qn.jsx)(Ys,{}),(0,qn.jsxs)(Us,{children:[(0,qn.jsx)(Ws,{children:(0,qn.jsx)("img",{src:Aa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ks,{children:"KG"===e?"GIT \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9":"\u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 GIT"}),(0,qn.jsx)(qs,{children:"KG"===e?"\u0421\u0438\u0437 \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440\u0434\u043e\u0433\u0443 \u0438\u0448\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u044d\u0442\u0430\u043f\u0442\u0430\u0440\u044b\u043d \u0441\u0430\u043a\u0442\u0430\u043f \u043a\u0430\u043b\u0430\u0441\u044b\u0437, \u043e\u0448\u043e\u043d\u0434\u043e \u043a\u0435\u0441\u0438\u043f\u0442\u0435\u0448\u0442\u0435\u0440\u0438\u04a3\u0438\u0437 \u0430\u0440 \u0434\u0430\u0439\u044b\u043c \u043a\u043e\u0434\u0433\u043e \u043a\u0438\u0440\u0435 \u0430\u043b\u044b\u0448\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u043a\u0443\u0441\u0443\u043d\u0430\u043d \u043a\u0435\u0442\u043a\u0435\u043d \u043a\u0430\u0442\u0430\u043b\u0430\u0440\u0434\u044b \u044d\u043a\u0438 \u0447\u044b\u043a\u044b\u043b\u0434\u0430\u0442\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u043e\u04a3\u0434\u043e\u043e\u0433\u043e \u0431\u043e\u043b\u043e\u0442.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0430\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443 \u043a\u043e\u043b\u043b\u0435\u0433 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0434\u0443, \u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0432\u0430 \u043a\u043b\u0438\u043a\u0430"})]})]}),(0,qn.jsx)(Ys,{}),(0,qn.jsxs)(Us,{children:[(0,qn.jsx)(Ws,{children:(0,qn.jsx)("img",{src:Ma,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ks,{children:"KG"===e?"\u0421\u0443\u043b\u0443\u0443\u043b\u0443\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430":"\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 "}),(0,qn.jsx)(qs,{children:"KG"===e?"\u0421\u043f\u0440\u0438\u043d\u0442\u0442\u0435\u0440\u0434\u0438 \u0436\u0430\u043d\u0430 Scrum \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u0441\u044b\u043d \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9\u043d\u04af \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437. Under \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043d\u044b\u043d \u0436\u0435\u0442\u0435\u043a\u0447\u0438\u043b\u0438\u0433\u0438 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d, \u0431\u0430\u0448\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440 \u043c\u0435\u043d\u0435\u043d \u0431\u0438\u0440\u0433\u0435, \u0441\u0438\u0437 \u0436\u0430\u0437\u0430\u0441\u044b\u0437 \u0432\u0435\u0431 \u043a\u043e\u043b\u0434\u043e\u043d\u043c\u043e.":"\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e \u0441\u043f\u0440\u0438\u043d\u0442\u0430\u043c \u0438 Scrum-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438. \u041f\u043e\u0434 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u0442\u0438\u043c\u043b\u0438\u0434\u0430\u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."})]})]})]}),(0,qn.jsxs)(Xs,{children:[(0,qn.jsxs)(Qs,{children:[(0,qn.jsx)("div",{children:(0,qn.jsx)(nl,{src:Na,alt:"idev"})}),(0,qn.jsxs)(Js,{children:[(0,qn.jsx)("li",{children:"KG"===e?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,qn.jsx)("li",{children:"KG"===e?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"}),(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsxs)(Zs,{children:[(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:Ra,alt:"instagram"})}),(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:za,alt:"whatsapp"})}),(0,qn.jsx)("a",{href:"https://web.telegram.org/a/#846785266",children:(0,qn.jsx)("img",{src:Ia,alt:"telegram"})})]})]}),(0,qn.jsx)(el,{children:(0,qn.jsx)(tl,{children:"@All rights reserved"})})]})]})},Ss=Yt.div`
  background: #f8f4f1;
  height: auto;
`,Es=Yt.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0 0 80px;
  background-image: url(${e=>e.backgrounfrontend});
  background-size: cover;
  background-position: center;
  color: #ffff;
  @media (max-width: 470px) {
    width: 100%;
    padding: 65px 0 0 8px;
  }
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`,ks=Yt.img`
  display: flex;
  margin-bottom: 112px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.7);
  }
  @media (max-width: 470px) {
    padding: 0 0 0 29px;
  }
`,Cs=Yt.h1`
  font-family: Montserrat;
  font-size: 65px;
  font-weight: 800;
  line-height: 76.05px;
  text-align: left;
  padding: 0 0 15px 150px;
  color: #ffffff;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    line-height: 32.76px;
    text-align: left;
    padding: 0 0 10px 29px;
  }
`,Ts=Yt.p`
  width: 968px;
  /* height: 69px; */
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 15px 150px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.06px;
    text-align: left;
    padding: 0 0 10px 29px;
    width: 369px;
    /* height: 126px; */
  }
`,js=Yt.ul`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  width: 1010px;
  height: 46px;
  padding: 28px 0 0 248px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    line-height: 19.89px;
    text-align: left;
    padding: 0 0 0 29px;
    width: 335px;
    /* height: 60px; */
  }
`,Os=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 76px 0 33px 77px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 20px 0 10px 15px;
  }
`,_s=Yt.p`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.1px;
  text-align: left;
  padding: 0 0 0 77px;
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 23.4px;
    padding: 0 0 0 15px;
  }
`,Ps=Yt.div`
  display: flex;
  gap: 141px;
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`,As=Yt.div`
  width: 332.34px;
  height: 310px;
  border-radius: 0 0 100px 0;
  box-shadow: 0px 1px 6px 0px #4b4b4b40;
  background: linear-gradient(339.84deg, #5e59ee 25.67%, #eb89f5 108.05%);
  margin: 76px 0 0 0;
  @media (max-width: 470px) {
    margin: 20px auto;
  }
`,Ms=Yt.h2`
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.06px;
  text-align: left;
  padding: 39px 0 17px 40px;
  color: #ffffff;
`,Rs=Yt.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 17px 40px;
  color: #ffffff;
`,zs=Yt.p`
  font-family: Jost;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  width: 180px;
  /* height: 60px; */
  color: #ffffff;
  padding: 0 0 17px 40px;
`,Is=Yt.h4`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  color: #ffffff;
  padding: 0 0 30px 40px;
`,Ns=Yt.a`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  text-decoration: none;
  border-bottom: 3px solid #ffffff;
  color: #ffffff;
  margin: 0px 0 0px 40px;

  cursor: pointer;
`,Ls=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    padding: 0 0 0 20px;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`,Ds=Yt.ul`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  list-style-type: none;
  text-align: left;
  padding: 0 0 35px 80px;
  & li {
    padding: 0 0 20px 0px;
  }
  @media (max-width: 470px) {
    padding: 20px 0 35px 15px;

    & li {
      padding: 10px 0 0 9px;
    }
  }
`,$s=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
    padding: 0 0 20px 20px;
  }
`,Fs=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  padding: 0 0 0 80px;
  @media (max-width: 470px) {
    padding: 0 0px 0 20px;
    gap: 10px;
  }
`,Vs=Yt.div`
  position: relative;
  @media (max-width: 470px) {
    & img {
      width: 325.95px;
      height: 349px;
    }
  }
`,Bs=Yt.h1`
  position: absolute;
  top: 347px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 240px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`,Gs=Yt.p`
  position: absolute;
  top: 380px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 270px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`,Hs=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 100px 0 0 78px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 50px 0 0 20px;
  }
`,Us=Yt.div`
  display: flex;
  padding: 36px 0 0 80px;
  gap: 31px;
  @media (max-width: 470px) {
    padding: 36px 0 20px 20px;
    gap: 19px;
  }
`,Ws=Yt.div`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`,Ks=Yt.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  @media (max-width: 470px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.4px;
  }
`,qs=Yt.p`
  width: 673px;
  height: 60px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  @media (max-width: 470px) {
    width: 280px;
    height: 76px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`,Ys=Yt.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 117px;
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0px 0 12px 51px;
    height: 47px;
  }
`,Xs=Yt("div")`
  background: #262626;
  margin: 50px 0 0 0;
`,Qs=Yt("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 89px 0 100px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 0 0 40px;
    height: 189px;
  }
`,Js=Yt("ul")`
  display: flex;
  align-items: center;
  gap: 55px;
  list-style: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: center;
  color: #f8f4f1;
  @media (max-width: 470px) {
    padding: 20px 0 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Zs=Yt("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,el=Yt("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`,tl=Yt("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -90px;
  padding: 10px 0 10px 0;
  color: #ffffff8a;
  font-family: Montserrat;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: center;
  border-top: 1px solid #515151;
  width: 212px;
  @media (max-width: 470px) {
    margin: 0;
  }
`,nl=Yt.img`
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 130px;
  }
`;const rl=n.p+"static/media/java-svgrepo-com 2 (1).7a67c44ce45edc8b2b36b61db3bee2f2.svg";const il=n.p+"static/media/hibernate-svgrepo-com 1.9d3c5d7f7bfb29f22c479df3686a0cb3.svg";const al=n.p+"static/media/Group (1).de05cdabadd92ca3fccbd3b623b0f771.svg",ol=[{id:1,img:rl,title:"1.JAVA",description:"Description for HTML-CSS."},{id:2,img:rl,title:"2.JDBC",description:"Description for JavaScript."},{id:3,img:il,title:"3.Hibernate",description:"Description for React JS."},{id:4,img:al,title:"4.Spring MVC",description:"Description for Redux."},{id:5,img:al,title:"5.Spring Security",description:"Description for Redux Toolkit."},{id:6,img:al,title:"6.Spring Boot",description:"Description for Material-UI."}],sl=()=>{const e=ss((e=>e.language.language)),t=Mo();return(0,qn.jsxs)(ll,{children:[(0,qn.jsxs)(cl,{backgrounfrontend:Jt,children:[(0,qn.jsx)("button",{onClick:()=>t("/"),children:(0,qn.jsx)(ul,{src:Qt,alt:""})}),(0,qn.jsx)(dl,{children:"JAVA-DEVELOPER"}),(0,qn.jsx)(pl,{children:"KG"===e?"\u0421\u0438\u0437 \u043c\u0430\u043a\u0435\u0442\u0442\u0438\u043d \u0436\u0430\u043d\u0430 JAVASCRIPT\u0442\u0438\u043d \u043d\u0435\u0433\u0438\u0437\u0434\u0435\u0440\u0438 \u043c\u0435\u043d\u0435\u043d \u0431\u0430\u0448\u0442\u0430\u0439\u0441\u044b\u0437 \u0436\u0430\u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0434\u0438\u043d \u0430\u044f\u0433\u044b\u043d\u0434\u0430 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u0434\u0438\u043a \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0436\u0430\u0441\u043e\u043e. \u041a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430 \u0438\u0448\u0442\u04e9\u04e9 \u0442\u0430\u0436\u0440\u044b\u0439\u0431\u0430\u0441\u044b\u043d\u0430 \u044d\u044d \u0431\u043e\u043b\u0443\u043f, \u0431\u0430\u0448\u0442\u0430\u04a3\u044b\u0437 IT \u0442\u0430\u0440\u043c\u0430\u0433\u044b\u043d\u0434\u0430 \u0432\u0435\u0431-\u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0443\u0443\u0447\u0443 \u043a\u0430\u0442\u0430\u0440\u044b \u043a\u0430\u0440\u044c\u0435\u0440\u0430":" \u0412\u044b \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u0441 \u043e\u0441\u043d\u043e\u0432 \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0438 JAVASCRIPT, \u0430 \u043a \u043a\u043e\u043d\u0446\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c  \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438 \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0432 \u0441\u0444\u0435\u0440\u0435 IT \u043a\u0430\u043a \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"}),(0,qn.jsx)(fl,{children:(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0443 \u0430\u044f\u043a\u0442\u0430\u0433\u0430\u043d\u0434\u0430\u043d \u043a\u0438\u0439\u0438\u043d \u0441\u0438\u0437\u0433\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u0448\u0443\u043c\u0447\u0430 \u0436\u0443\u043c\u0443\u0448 \u0431\u0435\u0440\u0438\u043b\u0435\u0442 IT \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043b\u0430\u0440\u044b":" \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0438 \u043f\u043b\u044e\u0441 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445"})})]}),(0,qn.jsxs)(gl,{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsx)(hl,{children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"}),(0,qn.jsx)(ml,{children:"KG"===e?"\u041d\u0435\u0433\u0438\u0437\u0433\u0438 \u043a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsx)(ba,{arrow:ol})]}),(0,qn.jsxs)(xl,{children:[(0,qn.jsx)(yl,{children:"\u041a\u0443\u0440\u0441"}),(0,qn.jsx)(vl,{children:"JAVA DEVELOPER"}),(0,qn.jsx)(bl,{children:"KG"===e?"\u041a\u0443\u0440\u0441 8 \u0430\u0439\u0433\u0430 \u0441\u043e\u0437\u0443\u043b\u0430\u0442 - 6 \u0430\u0439 \u043e\u043a\u0443\u0443, 2 \u0430\u0439 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430":"\u041a\u0443\u0440\u0441 \u0434\u043b\u0438\u0442\u0441\u044f 8 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 - 6 \u043c\u0435\u0441\u044f\u0446 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 2 \u043c\u0435\u0441\u044f\u0446 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430"}),(0,qn.jsx)(wl,{children:"KG"===e?"\u0410\u0439\u044b\u043d\u0430 10 000 \u0441\u043e\u043c":"10 000 c\u043e\u043c \u0432 \u043c\u0435\u0441\u044f\u0446"}),(0,qn.jsx)(Sl,{href:"https://api.whatsapp.com/send?phone=996509914101",children:"KG"===e?"\u041a\u0438\u0440\u04af\u04af":"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(El,{children:"KG"===e?"\u0414\u0438\u043f\u043b\u043e\u043c\u0434\u0443\u043a \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440":"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),(0,qn.jsxs)(kl,{children:[(0,qn.jsx)("li",{children:"1.Landing Page "}),(0,qn.jsxs)("li",{children:["2.","KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442":"\u0421\u0430\u0439\u0442"]}),(0,qn.jsxs)("li",{children:["3.","KG"===e?"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0434\u04af\u043a\u04e9\u043d\u04af":"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"]}),(0,qn.jsxs)("li",{children:["4.","KG"===e?"\u042d\u043c\u043d\u0435 \u043a\u044b\u043b\u0430\u0431\u044b\u0437 \u0436\u0430\u043d\u0430 \u043a\u0430\u043d\u0442\u0438\u043f \u0438\u0448\u0442\u0435\u0439\u0431\u0438\u0437?":"\u0421 \u0447\u0435\u043c \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438 \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Cl,{children:"KG"===e?"\u041d\u0430\u0441\u0430\u0430\u0442\u0447\u044b\u043b\u0430\u0440 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d":"\u041c\u0435\u043d\u0442\u043e\u0440\u044b \u043f\u043e Front-End "}),(0,qn.jsxs)(Tl,{children:[(0,qn.jsxs)(jl,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(Ol,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(_l,{children:"UX/UI Designer"})]}),(0,qn.jsxs)(jl,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(Ol,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(_l,{children:"UX/UI Designer"})]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Pl,{children:"KG"===e?"\u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437?":"\u0427\u0435\u043c\u0443 \u0432\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c?"}),(0,qn.jsxs)(Al,{children:[(0,qn.jsx)(Ml,{children:(0,qn.jsx)("img",{src:Oa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Rl,{children:"KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442\u0442\u044b \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044b\u0440\u044b\u04a3\u044b\u0437":"\u0412\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0441\u0430\u0439\u0442 "}),(0,qn.jsx)(zl,{children:"KG"===e?"\u0417\u0430\u043c\u0430\u043d\u0431\u0430\u043f CSS\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u04e9\u0437\u0433\u04e9\u0447\u04e9\u043b\u04af\u043a\u0442\u04e9\u0440\u04af\u043d \u043c\u0430\u0439\u0434\u0430-\u0447\u04af\u0439\u0434\u04e9\u0441\u04af\u043d\u04e9 \u0447\u0435\u0439\u0438\u043d \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437, \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437 \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443\u0433\u0430 \u043e\u04a3\u043e\u0439 \u0436\u043e\u043e\u043f \u0431\u0435\u0440\u04af\u04af\u0447\u04af \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0442\u0430\u0440\u0434\u044b \u0442\u04af\u0437\u04af\u04a3\u04af\u0437. \u0421\u0435\u043d \u0436\u0430\u0441\u0430\u0439\u0441\u044b\u04a3\u0431\u044b? \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u043b\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u043d\u0430 \u04e9\u0442\u04af\u04af\u043b\u04e9\u0440\u0434\u04af\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u044d\u0441\u0442\u0435\u0442\u0438\u043a\u0430\u043b\u044b\u043a \u0436\u0430\u043a\u0442\u0430\u043d \u0436\u0430\u0433\u044b\u043c\u0434\u0443\u0443\u0440\u0430\u0430\u043a.":"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e CSS, \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435\u0441\u0430\u0439\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0421\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u0435\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432."})]})]}),(0,qn.jsx)(Il,{}),(0,qn.jsxs)(Al,{children:[(0,qn.jsx)(Ml,{children:(0,qn.jsx)("img",{src:_a,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Rl,{children:"Java Script"}),(0,qn.jsx)(zl,{children:"KG"===e?"\u0421\u0438\u0437 \u0441\u0430\u0439\u0442\u0442\u044b\u043d \u043b\u043e\u0433\u0438\u043a\u0430\u0441\u044b\u043d \u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0430\u0441\u044b\u0437. \u0416\u04e9\u043d\u04e9\u043a\u04e9\u0439 \u043c\u043e\u0434\u0430\u043b\u0434\u044b\u043a \u0442\u0435\u0440\u0435\u0437\u0435\u0434\u0435\u043d \u0441\u0435\u0440\u0432\u0435\u0440\u0434\u0435\u043d \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0434\u0443\u043a \u0436\u04af\u043a\u0442\u04e9\u04e9 \u0436\u0430\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u04af\u0447\u04af\u043d \u044d\u04a3 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u0434\u0443\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u0442\u0438\u043b\u0434\u0435\u0440\u0438\u043d\u0438\u043d \u0431\u0438\u0440\u0438\u043d \u0441\u0442\u0440\u0435\u0441\u0441\u0441\u0438\u0437 \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u0439\u0442\u0430. \u041e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430\u0434\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f enterprise- \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.\u0411\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430 \u0432\u044b\u0443\u0447\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."})]})]}),(0,qn.jsx)(Il,{}),(0,qn.jsxs)(Al,{children:[(0,qn.jsx)(Ml,{children:(0,qn.jsx)("img",{src:Pa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Rl,{children:"Framework"}),(0,qn.jsx)(zl,{children:"KG"===e?"\u0410\u043b\u043a\u0430\u043a\u0442\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442\u0438 \u0442\u0435\u0437 \u04e9\u043d\u04af\u043a\u0442\u04af\u0440\u04e9 \u0430\u043b\u0430\u0441\u044b\u0437 \u0436\u0435\u043b\u0435 \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u044b, \u043e\u0448\u043e\u043d\u0434\u043e\u0439 \u044d\u043b\u0435 \u0430\u043b\u0430\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0434\u0438\u043d \u0440\u0435\u0441\u0443\u0440\u0441\u0442\u0430\u0440\u044b\u043d \u043d\u0430\u0442\u044b\u0439\u0436\u0430\u043b\u0443\u0443\u0440\u0430\u0430\u043a \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0448\u0430\u0442. \u0441\u0435\u043d \u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04af\u04af\u043d\u04af \u0442\u0430\u043d\u0434\u0430\u0439\u0441\u044b\u0437 - React \u0436\u0435 Vue..":"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u0430 \u0435\u0449\u0451 \u043e\u043d\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u0443\u044e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0412\u044b  \u0441\u0430\u043c\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0443\u0447\u0438\u0442\u044c \u2014 React \u0438\u043b\u0438 Vue.."})]})]}),(0,qn.jsx)(Il,{}),(0,qn.jsxs)(Al,{children:[(0,qn.jsx)(Ml,{children:(0,qn.jsx)("img",{src:Aa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Rl,{children:"KG"===e?"GIT \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9":"\u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 GIT"}),(0,qn.jsx)(zl,{children:"KG"===e?"\u0421\u0438\u0437 \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440\u0434\u043e\u0433\u0443 \u0438\u0448\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u044d\u0442\u0430\u043f\u0442\u0430\u0440\u044b\u043d \u0441\u0430\u043a\u0442\u0430\u043f \u043a\u0430\u043b\u0430\u0441\u044b\u0437, \u043e\u0448\u043e\u043d\u0434\u043e \u043a\u0435\u0441\u0438\u043f\u0442\u0435\u0448\u0442\u0435\u0440\u0438\u04a3\u0438\u0437 \u0430\u0440 \u0434\u0430\u0439\u044b\u043c \u043a\u043e\u0434\u0433\u043e \u043a\u0438\u0440\u0435 \u0430\u043b\u044b\u0448\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u043a\u0443\u0441\u0443\u043d\u0430\u043d \u043a\u0435\u0442\u043a\u0435\u043d \u043a\u0430\u0442\u0430\u043b\u0430\u0440\u0434\u044b \u044d\u043a\u0438 \u0447\u044b\u043a\u044b\u043b\u0434\u0430\u0442\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u043e\u04a3\u0434\u043e\u043e\u0433\u043e \u0431\u043e\u043b\u043e\u0442.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0430\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443 \u043a\u043e\u043b\u043b\u0435\u0433 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0434\u0443, \u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0432\u0430 \u043a\u043b\u0438\u043a\u0430"})]})]}),(0,qn.jsx)(Il,{}),(0,qn.jsxs)(Al,{children:[(0,qn.jsx)(Ml,{children:(0,qn.jsx)("img",{src:Ma,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Rl,{children:"KG"===e?"\u0421\u0443\u043b\u0443\u0443\u043b\u0443\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430":"\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 "}),(0,qn.jsx)(zl,{children:"KG"===e?"\u0421\u043f\u0440\u0438\u043d\u0442\u0442\u0435\u0440\u0434\u0438 \u0436\u0430\u043d\u0430 Scrum \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u0441\u044b\u043d \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9\u043d\u04af \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437. Under \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043d\u044b\u043d \u0436\u0435\u0442\u0435\u043a\u0447\u0438\u043b\u0438\u0433\u0438 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d, \u0431\u0430\u0448\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440 \u043c\u0435\u043d\u0435\u043d \u0431\u0438\u0440\u0433\u0435, \u0441\u0438\u0437 \u0436\u0430\u0437\u0430\u0441\u044b\u0437 \u0432\u0435\u0431 \u043a\u043e\u043b\u0434\u043e\u043d\u043c\u043e.":"\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e \u0441\u043f\u0440\u0438\u043d\u0442\u0430\u043c \u0438 Scrum-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438. \u041f\u043e\u0434 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u0442\u0438\u043c\u043b\u0438\u0434\u0430\u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."})]})]})]}),(0,qn.jsxs)(Nl,{children:[(0,qn.jsxs)(Ll,{children:[(0,qn.jsx)("div",{children:(0,qn.jsx)(Bl,{src:Na,alt:"idev"})}),(0,qn.jsxs)(Dl,{children:[(0,qn.jsx)("li",{children:"KG"===e?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,qn.jsx)("li",{children:"KG"===e?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"}),(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsxs)($l,{children:[(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:Ra,alt:"instagram"})}),(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:za,alt:"whatsapp"})}),(0,qn.jsx)("a",{href:"https://web.telegram.org/a/#846785266",children:(0,qn.jsx)("img",{src:Ia,alt:"telegram"})})]})]}),(0,qn.jsx)(Fl,{children:(0,qn.jsx)(Vl,{children:"@All rights reserved"})})]})]})},ll=Yt.div`
  background: #f8f4f1;
  height: auto;
`,cl=Yt.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0 0 80px;
  background-image: url(${e=>e.backgrounfrontend});
  background-size: cover;
  background-position: center;
  color: #ffff;
  @media (max-width: 470px) {
    width: 100%;
    padding: 65px 0 0 8px;
  }
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`,ul=Yt.img`
  display: flex;
  margin-bottom: 112px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.7);
  }
  @media (max-width: 470px) {
    padding: 0 0 0 29px;
  }
`,dl=Yt.h1`
  font-family: Montserrat;
  font-size: 65px;
  font-weight: 800;
  line-height: 76.05px;
  text-align: left;
  padding: 0 0 15px 150px;
  color: #ffffff;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    line-height: 32.76px;
    text-align: left;
    padding: 0 0 10px 29px;
  }
`,pl=Yt.p`
  width: 968px;
  /* height: 69px; */
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 15px 150px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.06px;
    text-align: left;
    padding: 0 0 10px 29px;
    width: 369px;
    /* height: 126px; */
  }
`,fl=Yt.ul`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  width: 1010px;
  height: 46px;
  padding: 28px 0 0 248px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    line-height: 19.89px;
    text-align: left;
    padding: 0 0 0 29px;
    width: 335px;
    /* height: 60px; */
  }
`,hl=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 76px 0 33px 77px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 20px 0 10px 15px;
  }
`,ml=Yt.p`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.1px;
  text-align: left;
  padding: 0 0 0 77px;
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 23.4px;
    padding: 0 0 0 15px;
  }
`,gl=Yt.div`
  display: flex;
  gap: 141px;
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`,xl=Yt.div`
  width: 332.34px;
  height: 310px;
  border-radius: 0 0 100px 0;
  box-shadow: 0px 1px 6px 0px #4b4b4b40;
  background: linear-gradient(339.84deg, #5e59ee 25.67%, #eb89f5 108.05%);
  margin: 76px 0 0 0;
  @media (max-width: 470px) {
    margin: 20px auto;
  }
`,yl=Yt.h2`
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.06px;
  text-align: left;
  padding: 39px 0 17px 40px;
  color: #ffffff;
`,vl=Yt.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 17px 40px;
  color: #ffffff;
`,bl=Yt.p`
  font-family: Jost;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  width: 180px;
  /* height: 60px; */
  color: #ffffff;
  padding: 0 0 17px 40px;
`,wl=Yt.h4`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  color: #ffffff;
  padding: 0 0 30px 40px;
`,Sl=Yt.a`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  text-decoration: none;
  border-bottom: 3px solid #ffffff;
  color: #ffffff;
  margin: 0px 0 0px 40px;

  cursor: pointer;
`,El=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    padding: 0 0 0 20px;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`,kl=Yt.ul`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  list-style-type: none;
  text-align: left;
  padding: 0 0 35px 80px;
  & li {
    padding: 0 0 20px 0px;
  }
  @media (max-width: 470px) {
    padding: 20px 0 35px 15px;

    & li {
      padding: 10px 0 0 9px;
    }
  }
`,Cl=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
    padding: 0 0 20px 20px;
  }
`,Tl=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  padding: 0 0 0 80px;
  @media (max-width: 470px) {
    padding: 0 0px 0 20px;
    gap: 10px;
  }
`,jl=Yt.div`
  position: relative;
  @media (max-width: 470px) {
    & img {
      width: 325.95px;
      height: 349px;
    }
  }
`,Ol=Yt.h1`
  position: absolute;
  top: 347px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 240px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`,_l=Yt.p`
  position: absolute;
  top: 380px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 270px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`,Pl=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 100px 0 0 78px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 50px 0 0 20px;
  }
`,Al=Yt.div`
  display: flex;
  padding: 36px 0 0 80px;
  gap: 31px;
  @media (max-width: 470px) {
    padding: 36px 0 20px 20px;
    gap: 19px;
  }
`,Ml=Yt.div`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`,Rl=Yt.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  @media (max-width: 470px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.4px;
  }
`,zl=Yt.p`
  width: 673px;
  height: 60px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  @media (max-width: 470px) {
    width: 280px;
    height: 76px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`,Il=Yt.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 117px;
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0px 0 12px 51px;
    height: 47px;
  }
`,Nl=Yt("div")`
  background: #262626;
  margin: 50px 0 0 0;
`,Ll=Yt("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 89px 0 100px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 0 0 40px;
    height: 189px;
  }
`,Dl=Yt("ul")`
  display: flex;
  align-items: center;
  gap: 55px;
  list-style: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: center;
  color: #f8f4f1;
  @media (max-width: 470px) {
    padding: 20px 0 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,$l=Yt("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,Fl=Yt("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`,Vl=Yt("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -90px;
  padding: 10px 0 10px 0;
  color: #ffffff8a;
  font-family: Montserrat;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: center;
  border-top: 1px solid #515151;
  width: 212px;
  @media (max-width: 470px) {
    margin: 0;
  }
`,Bl=Yt.img`
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 130px;
  }
`;n.p;const Gl=[{id:1,title:"1.\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 UX-\u0434\u0438\u0437\u0430\u0439\u043d",description:"Description for HTML-CSS."},{id:2,title:"2.\u0417\u0430\u0434\u0430\u0447\u0438 \u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u0446\u0435\u043b\u0438",description:"Description for JavaScript."},{id:3,title:"3.\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",description:"Description for React JS."},{id:4,title:"4.\u041a\u0430\u0440\u0442\u044b \u043f\u0443\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",description:"Description for Redux."},{id:5,title:"5.\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",description:"Description for Redux Toolkit."},{id:6,title:"6.\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",description:"Description for Material-UId."},{id:7,title:"7.\u041f\u0440\u043e\u0442\u043e\u0442\u0438\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"Description for Material-UI.d"},{id:8,title:"8.\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u044e\u0437\u0430\u0431\u0438\u043b\u0438\u0442\u0438",description:"Description for Material-UI.s"},{id:9,title:"9.\u0410\u043d\u0430\u043b\u0438\u0437 \u0441\u0430\u0439\u0442\u0430",description:"Description for Material-UI."}],Hl=()=>{const e=ss((e=>e.language.language)),t=Mo();return(0,qn.jsxs)(Ul,{children:[(0,qn.jsxs)(Wl,{backgrounfrontend:Jt,children:[(0,qn.jsx)("button",{onClick:()=>t("/"),children:(0,qn.jsx)(Kl,{src:Qt,alt:""})}),(0,qn.jsx)(ql,{children:"UX/UI-DESIGNER"}),(0,qn.jsx)(Yl,{children:"KG"===e?"\u0421\u0438\u0437 \u043c\u0430\u043a\u0435\u0442\u0442\u0438\u043d \u0436\u0430\u043d\u0430 JAVASCRIPT\u0442\u0438\u043d \u043d\u0435\u0433\u0438\u0437\u0434\u0435\u0440\u0438 \u043c\u0435\u043d\u0435\u043d \u0431\u0430\u0448\u0442\u0430\u0439\u0441\u044b\u0437 \u0436\u0430\u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0434\u0438\u043d \u0430\u044f\u0433\u044b\u043d\u0434\u0430 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u0434\u0438\u043a \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0436\u0430\u0441\u043e\u043e. \u041a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430 \u0438\u0448\u0442\u04e9\u04e9 \u0442\u0430\u0436\u0440\u044b\u0439\u0431\u0430\u0441\u044b\u043d\u0430 \u044d\u044d \u0431\u043e\u043b\u0443\u043f, \u0431\u0430\u0448\u0442\u0430\u04a3\u044b\u0437 IT \u0442\u0430\u0440\u043c\u0430\u0433\u044b\u043d\u0434\u0430 \u0432\u0435\u0431-\u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0443\u0443\u0447\u0443 \u043a\u0430\u0442\u0430\u0440\u044b \u043a\u0430\u0440\u044c\u0435\u0440\u0430":" \u0412\u044b \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u0441 \u043e\u0441\u043d\u043e\u0432 \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0438 JAVASCRIPT, \u0430 \u043a \u043a\u043e\u043d\u0446\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c  \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438 \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0432 \u0441\u0444\u0435\u0440\u0435 IT \u043a\u0430\u043a \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"}),(0,qn.jsx)(Xl,{children:(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0443 \u0430\u044f\u043a\u0442\u0430\u0433\u0430\u043d\u0434\u0430\u043d \u043a\u0438\u0439\u0438\u043d \u0441\u0438\u0437\u0433\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u0448\u0443\u043c\u0447\u0430 \u0436\u0443\u043c\u0443\u0448 \u0431\u0435\u0440\u0438\u043b\u0435\u0442 IT \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043b\u0430\u0440\u044b":" \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0438 \u043f\u043b\u044e\u0441 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445"})})]}),(0,qn.jsxs)(Zl,{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Ql,{children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"}),(0,qn.jsx)(Jl,{children:"KG"===e?"\u041d\u0435\u0433\u0438\u0437\u0433\u0438 \u043a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsx)(ba,{arrow:Gl})]}),(0,qn.jsxs)(ec,{children:[(0,qn.jsx)(tc,{children:"\u041a\u0443\u0440\u0441"}),(0,qn.jsx)(nc,{children:"JAVA DEVELOPER"}),(0,qn.jsx)(rc,{children:"KG"===e?"\u041a\u0443\u0440\u0441 8 \u0430\u0439\u0433\u0430 \u0441\u043e\u0437\u0443\u043b\u0430\u0442 - 6 \u0430\u0439 \u043e\u043a\u0443\u0443, 2 \u0430\u0439 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430":"\u041a\u0443\u0440\u0441 \u0434\u043b\u0438\u0442\u0441\u044f 8 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 - 6 \u043c\u0435\u0441\u044f\u0446 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 2 \u043c\u0435\u0441\u044f\u0446 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430"}),(0,qn.jsx)(ic,{children:"KG"===e?"\u0410\u0439\u044b\u043d\u0430 10 000 \u0441\u043e\u043c":"10 000 c\u043e\u043c \u0432 \u043c\u0435\u0441\u044f\u0446"}),(0,qn.jsx)(ac,{href:"https://api.whatsapp.com/send?phone=996509914101",children:"KG"===e?"\u041a\u0438\u0440\u04af\u04af":"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(oc,{children:"KG"===e?"\u0414\u0438\u043f\u043b\u043e\u043c\u0434\u0443\u043a \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440":"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),(0,qn.jsxs)(sc,{children:[(0,qn.jsx)("li",{children:"1.Landing Page "}),(0,qn.jsxs)("li",{children:["2.","KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442":"\u0421\u0430\u0439\u0442"]}),(0,qn.jsxs)("li",{children:["3.","KG"===e?"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0434\u04af\u043a\u04e9\u043d\u04af":"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"]}),(0,qn.jsxs)("li",{children:["4.","KG"===e?"\u042d\u043c\u043d\u0435 \u043a\u044b\u043b\u0430\u0431\u044b\u0437 \u0436\u0430\u043d\u0430 \u043a\u0430\u043d\u0442\u0438\u043f \u0438\u0448\u0442\u0435\u0439\u0431\u0438\u0437?":"\u0421 \u0447\u0435\u043c \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438 \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(lc,{children:"KG"===e?"\u041d\u0430\u0441\u0430\u0430\u0442\u0447\u044b\u043b\u0430\u0440 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d":"\u041c\u0435\u043d\u0442\u043e\u0440\u044b \u043f\u043e Front-End "}),(0,qn.jsxs)(cc,{children:[(0,qn.jsxs)(uc,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(dc,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(pc,{children:"UX/UI Designer"})]}),(0,qn.jsxs)(uc,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(dc,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(pc,{children:"UX/UI Designer"})]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(fc,{children:"KG"===e?"\u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437?":"\u0427\u0435\u043c\u0443 \u0432\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c?"}),(0,qn.jsxs)(hc,{children:[(0,qn.jsx)(mc,{children:(0,qn.jsx)("img",{src:Oa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(gc,{children:"KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442\u0442\u044b \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044b\u0440\u044b\u04a3\u044b\u0437":"\u0412\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0441\u0430\u0439\u0442 "}),(0,qn.jsx)(xc,{children:"KG"===e?"\u0417\u0430\u043c\u0430\u043d\u0431\u0430\u043f CSS\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u04e9\u0437\u0433\u04e9\u0447\u04e9\u043b\u04af\u043a\u0442\u04e9\u0440\u04af\u043d \u043c\u0430\u0439\u0434\u0430-\u0447\u04af\u0439\u0434\u04e9\u0441\u04af\u043d\u04e9 \u0447\u0435\u0439\u0438\u043d \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437, \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437 \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443\u0433\u0430 \u043e\u04a3\u043e\u0439 \u0436\u043e\u043e\u043f \u0431\u0435\u0440\u04af\u04af\u0447\u04af \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0442\u0430\u0440\u0434\u044b \u0442\u04af\u0437\u04af\u04a3\u04af\u0437. \u0421\u0435\u043d \u0436\u0430\u0441\u0430\u0439\u0441\u044b\u04a3\u0431\u044b? \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u043b\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u043d\u0430 \u04e9\u0442\u04af\u04af\u043b\u04e9\u0440\u0434\u04af\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u044d\u0441\u0442\u0435\u0442\u0438\u043a\u0430\u043b\u044b\u043a \u0436\u0430\u043a\u0442\u0430\u043d \u0436\u0430\u0433\u044b\u043c\u0434\u0443\u0443\u0440\u0430\u0430\u043a.":"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e CSS, \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435\u0441\u0430\u0439\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0421\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u0435\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432."})]})]}),(0,qn.jsx)(yc,{}),(0,qn.jsxs)(hc,{children:[(0,qn.jsx)(mc,{children:(0,qn.jsx)("img",{src:_a,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(gc,{children:"Java Script"}),(0,qn.jsx)(xc,{children:"KG"===e?"\u0421\u0438\u0437 \u0441\u0430\u0439\u0442\u0442\u044b\u043d \u043b\u043e\u0433\u0438\u043a\u0430\u0441\u044b\u043d \u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0430\u0441\u044b\u0437. \u0416\u04e9\u043d\u04e9\u043a\u04e9\u0439 \u043c\u043e\u0434\u0430\u043b\u0434\u044b\u043a \u0442\u0435\u0440\u0435\u0437\u0435\u0434\u0435\u043d \u0441\u0435\u0440\u0432\u0435\u0440\u0434\u0435\u043d \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0434\u0443\u043a \u0436\u04af\u043a\u0442\u04e9\u04e9 \u0436\u0430\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u04af\u0447\u04af\u043d \u044d\u04a3 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u0434\u0443\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u0442\u0438\u043b\u0434\u0435\u0440\u0438\u043d\u0438\u043d \u0431\u0438\u0440\u0438\u043d \u0441\u0442\u0440\u0435\u0441\u0441\u0441\u0438\u0437 \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u0439\u0442\u0430. \u041e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430\u0434\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f enterprise- \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.\u0411\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430 \u0432\u044b\u0443\u0447\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."})]})]}),(0,qn.jsx)(yc,{}),(0,qn.jsxs)(hc,{children:[(0,qn.jsx)(mc,{children:(0,qn.jsx)("img",{src:Pa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(gc,{children:"Framework"}),(0,qn.jsx)(xc,{children:"KG"===e?"\u0410\u043b\u043a\u0430\u043a\u0442\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442\u0438 \u0442\u0435\u0437 \u04e9\u043d\u04af\u043a\u0442\u04af\u0440\u04e9 \u0430\u043b\u0430\u0441\u044b\u0437 \u0436\u0435\u043b\u0435 \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u044b, \u043e\u0448\u043e\u043d\u0434\u043e\u0439 \u044d\u043b\u0435 \u0430\u043b\u0430\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0434\u0438\u043d \u0440\u0435\u0441\u0443\u0440\u0441\u0442\u0430\u0440\u044b\u043d \u043d\u0430\u0442\u044b\u0439\u0436\u0430\u043b\u0443\u0443\u0440\u0430\u0430\u043a \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0448\u0430\u0442. \u0441\u0435\u043d \u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04af\u04af\u043d\u04af \u0442\u0430\u043d\u0434\u0430\u0439\u0441\u044b\u0437 - React \u0436\u0435 Vue..":"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u0430 \u0435\u0449\u0451 \u043e\u043d\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u0443\u044e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0412\u044b  \u0441\u0430\u043c\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0443\u0447\u0438\u0442\u044c \u2014 React \u0438\u043b\u0438 Vue.."})]})]}),(0,qn.jsx)(yc,{}),(0,qn.jsxs)(hc,{children:[(0,qn.jsx)(mc,{children:(0,qn.jsx)("img",{src:Aa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(gc,{children:"KG"===e?"GIT \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9":"\u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 GIT"}),(0,qn.jsx)(xc,{children:"KG"===e?"\u0421\u0438\u0437 \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440\u0434\u043e\u0433\u0443 \u0438\u0448\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u044d\u0442\u0430\u043f\u0442\u0430\u0440\u044b\u043d \u0441\u0430\u043a\u0442\u0430\u043f \u043a\u0430\u043b\u0430\u0441\u044b\u0437, \u043e\u0448\u043e\u043d\u0434\u043e \u043a\u0435\u0441\u0438\u043f\u0442\u0435\u0448\u0442\u0435\u0440\u0438\u04a3\u0438\u0437 \u0430\u0440 \u0434\u0430\u0439\u044b\u043c \u043a\u043e\u0434\u0433\u043e \u043a\u0438\u0440\u0435 \u0430\u043b\u044b\u0448\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u043a\u0443\u0441\u0443\u043d\u0430\u043d \u043a\u0435\u0442\u043a\u0435\u043d \u043a\u0430\u0442\u0430\u043b\u0430\u0440\u0434\u044b \u044d\u043a\u0438 \u0447\u044b\u043a\u044b\u043b\u0434\u0430\u0442\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u043e\u04a3\u0434\u043e\u043e\u0433\u043e \u0431\u043e\u043b\u043e\u0442.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0430\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443 \u043a\u043e\u043b\u043b\u0435\u0433 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0434\u0443, \u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0432\u0430 \u043a\u043b\u0438\u043a\u0430"})]})]}),(0,qn.jsx)(yc,{}),(0,qn.jsxs)(hc,{children:[(0,qn.jsx)(mc,{children:(0,qn.jsx)("img",{src:Ma,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(gc,{children:"KG"===e?"\u0421\u0443\u043b\u0443\u0443\u043b\u0443\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430":"\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 "}),(0,qn.jsx)(xc,{children:"KG"===e?"\u0421\u043f\u0440\u0438\u043d\u0442\u0442\u0435\u0440\u0434\u0438 \u0436\u0430\u043d\u0430 Scrum \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u0441\u044b\u043d \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9\u043d\u04af \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437. Under \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043d\u044b\u043d \u0436\u0435\u0442\u0435\u043a\u0447\u0438\u043b\u0438\u0433\u0438 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d, \u0431\u0430\u0448\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440 \u043c\u0435\u043d\u0435\u043d \u0431\u0438\u0440\u0433\u0435, \u0441\u0438\u0437 \u0436\u0430\u0437\u0430\u0441\u044b\u0437 \u0432\u0435\u0431 \u043a\u043e\u043b\u0434\u043e\u043d\u043c\u043e.":"\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e \u0441\u043f\u0440\u0438\u043d\u0442\u0430\u043c \u0438 Scrum-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438. \u041f\u043e\u0434 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u0442\u0438\u043c\u043b\u0438\u0434\u0430\u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."})]})]})]}),(0,qn.jsxs)(vc,{children:[(0,qn.jsxs)(bc,{children:[(0,qn.jsx)("div",{children:(0,qn.jsx)(Cc,{src:Na,alt:"idev"})}),(0,qn.jsxs)(wc,{children:[(0,qn.jsx)("li",{children:"KG"===e?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,qn.jsx)("li",{children:"KG"===e?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"}),(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsxs)(Sc,{children:[(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:Ra,alt:"instagram"})}),(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:za,alt:"whatsapp"})}),(0,qn.jsx)("a",{href:"https://web.telegram.org/a/#846785266",children:(0,qn.jsx)("img",{src:Ia,alt:"telegram"})})]})]}),(0,qn.jsx)(Ec,{children:(0,qn.jsx)(kc,{children:"@All rights reserved"})})]})]})},Ul=Yt.div`
  background: #f8f4f1;
  height: auto;
`,Wl=Yt.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0 0 80px;
  background-image: url(${e=>e.backgrounfrontend});
  background-size: cover;
  background-position: center;
  color: #ffff;
  @media (max-width: 470px) {
    width: 100%;
    padding: 65px 0 0 8px;
  }
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`,Kl=Yt.img`
  display: flex;
  margin-bottom: 112px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.7);
  }
  @media (max-width: 470px) {
    padding: 0 0 0 29px;
  }
`,ql=Yt.h1`
  font-family: Montserrat;
  font-size: 65px;
  font-weight: 800;
  line-height: 76.05px;
  text-align: left;
  padding: 0 0 15px 150px;
  color: #ffffff;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    line-height: 32.76px;
    text-align: left;
    padding: 0 0 10px 29px;
  }
`,Yl=Yt.p`
  width: 968px;
  /* height: 69px; */
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 15px 150px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.06px;
    text-align: left;
    padding: 0 0 10px 29px;
    width: 369px;
    /* height: 126px; */
  }
`,Xl=Yt.ul`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  width: 1010px;
  height: 46px;
  padding: 28px 0 0 248px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    line-height: 19.89px;
    text-align: left;
    padding: 0 0 0 29px;
    width: 335px;
    /* height: 60px; */
  }
`,Ql=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 76px 0 33px 77px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 20px 0 10px 15px;
  }
`,Jl=Yt.p`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.1px;
  text-align: left;
  padding: 0 0 0 77px;
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 23.4px;
    padding: 0 0 0 15px;
  }
`,Zl=Yt.div`
  display: flex;
  gap: 141px;
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`,ec=Yt.div`
  width: 332.34px;
  height: 310px;
  border-radius: 0 0 100px 0;
  box-shadow: 0px 1px 6px 0px #4b4b4b40;
  background: linear-gradient(339.84deg, #5e59ee 25.67%, #eb89f5 108.05%);
  margin: 76px 0 0 0;
  @media (max-width: 470px) {
    margin: 20px auto;
  }
`,tc=Yt.h2`
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.06px;
  text-align: left;
  padding: 39px 0 17px 40px;
  color: #ffffff;
`,nc=Yt.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 17px 40px;
  color: #ffffff;
`,rc=Yt.p`
  font-family: Jost;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  width: 180px;
  /* height: 60px; */
  color: #ffffff;
  padding: 0 0 17px 40px;
`,ic=Yt.h4`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  color: #ffffff;
  padding: 0 0 30px 40px;
`,ac=Yt.a`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  text-decoration: none;
  border-bottom: 3px solid #ffffff;
  color: #ffffff;
  margin: 0px 0 0px 40px;

  cursor: pointer;
`,oc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    padding: 0 0 0 20px;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`,sc=Yt.ul`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  list-style-type: none;
  text-align: left;
  padding: 0 0 35px 80px;
  & li {
    padding: 0 0 20px 0px;
  }
  @media (max-width: 470px) {
    padding: 20px 0 35px 15px;

    & li {
      padding: 10px 0 0 9px;
    }
  }
`,lc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
    padding: 0 0 20px 20px;
  }
`,cc=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  padding: 0 0 0 80px;
  @media (max-width: 470px) {
    padding: 0 0px 0 20px;
    gap: 10px;
  }
`,uc=Yt.div`
  position: relative;
  @media (max-width: 470px) {
    & img {
      width: 325.95px;
      height: 349px;
    }
  }
`,dc=Yt.h1`
  position: absolute;
  top: 347px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 240px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`,pc=Yt.p`
  position: absolute;
  top: 380px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 270px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`,fc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 100px 0 0 78px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 50px 0 0 20px;
  }
`,hc=Yt.div`
  display: flex;
  padding: 36px 0 0 80px;
  gap: 31px;
  @media (max-width: 470px) {
    padding: 36px 0 20px 20px;
    gap: 19px;
  }
`,mc=Yt.div`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`,gc=Yt.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  @media (max-width: 470px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.4px;
  }
`,xc=Yt.p`
  width: 673px;
  height: 60px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  @media (max-width: 470px) {
    width: 280px;
    height: 76px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`,yc=Yt.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 117px;
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0px 0 12px 51px;
    height: 47px;
  }
`,vc=Yt("div")`
  background: #262626;
  margin: 50px 0 0 0;
`,bc=Yt("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 89px 0 100px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 0 0 40px;
    height: 189px;
  }
`,wc=Yt("ul")`
  display: flex;
  align-items: center;
  gap: 55px;
  list-style: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: center;
  color: #f8f4f1;
  @media (max-width: 470px) {
    padding: 20px 0 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Sc=Yt("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,Ec=Yt("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`,kc=Yt("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -90px;
  padding: 10px 0 10px 0;
  color: #ffffff8a;
  font-family: Montserrat;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: center;
  border-top: 1px solid #515151;
  width: 212px;
  @media (max-width: 470px) {
    margin: 0;
  }
`,Cc=Yt.img`
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 130px;
  }
`;const Tc=[{id:1,img:n.p+"static/media/python-logo 1.67060b90d8962105c99db1c4e9735c54.svg",title:"1.Python",description:"Description for HTML-CSS."},{id:2,img:Ea,title:"2.OOP",description:"Description for JavaScript."},{id:3,img:n.p+"static/media/github-142-svgrepo-com 1.42b83bf07b46aad3060cb02a1ef3d12d.svg",title:"3.GIT/ GITHUB",description:"Description for React JS."},{id:4,img:n.p+"static/media/postgresql-svgrepo-com 1.75ae6627b65a734728431d085d3c21da.svg",title:"4.PostgreSQL",description:"Description for Redux."},{id:5,img:n.p+"static/media/django-svgrepo-com 1.0ebaf558ce980e32913b6bc5a780dbbe.svg",title:"5.DJANGO FRAMEWORK",description:"Description for Redux Toolkit."}],jc=()=>{const e=ss((e=>e.language.language)),t=Mo();return(0,qn.jsxs)(Oc,{children:[(0,qn.jsxs)(_c,{backgrounfrontend:Jt,children:[(0,qn.jsx)("button",{onClick:()=>t("/"),children:(0,qn.jsx)(Pc,{src:Qt,alt:""})}),(0,qn.jsx)(Ac,{children:"PYTHON-DEVELOPER"}),(0,qn.jsx)(Mc,{children:"KG"===e?"\u0421\u0438\u0437 \u043c\u0430\u043a\u0435\u0442\u0442\u0438\u043d \u0436\u0430\u043d\u0430 JAVASCRIPT\u0442\u0438\u043d \u043d\u0435\u0433\u0438\u0437\u0434\u0435\u0440\u0438 \u043c\u0435\u043d\u0435\u043d \u0431\u0430\u0448\u0442\u0430\u0439\u0441\u044b\u0437 \u0436\u0430\u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0434\u0438\u043d \u0430\u044f\u0433\u044b\u043d\u0434\u0430 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u0434\u0438\u043a \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0436\u0430\u0441\u043e\u043e. \u041a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430 \u0438\u0448\u0442\u04e9\u04e9 \u0442\u0430\u0436\u0440\u044b\u0439\u0431\u0430\u0441\u044b\u043d\u0430 \u044d\u044d \u0431\u043e\u043b\u0443\u043f, \u0431\u0430\u0448\u0442\u0430\u04a3\u044b\u0437 IT \u0442\u0430\u0440\u043c\u0430\u0433\u044b\u043d\u0434\u0430 \u0432\u0435\u0431-\u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0443\u0443\u0447\u0443 \u043a\u0430\u0442\u0430\u0440\u044b \u043a\u0430\u0440\u044c\u0435\u0440\u0430":" \u0412\u044b \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u0441 \u043e\u0441\u043d\u043e\u0432 \u0432\u0435\u0440\u0441\u0442\u043a\u0438 \u0438 JAVASCRIPT, \u0430 \u043a \u043a\u043e\u043d\u0446\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c  \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438 \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0432 \u0441\u0444\u0435\u0440\u0435 IT \u043a\u0430\u043a \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430"}),(0,qn.jsx)(Rc,{children:(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0443 \u0430\u044f\u043a\u0442\u0430\u0433\u0430\u043d\u0434\u0430\u043d \u043a\u0438\u0439\u0438\u043d \u0441\u0438\u0437\u0433\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u0448\u0443\u043c\u0447\u0430 \u0436\u0443\u043c\u0443\u0448 \u0431\u0435\u0440\u0438\u043b\u0435\u0442 IT \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043b\u0430\u0440\u044b":" \u041f\u043e\u0441\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0438 \u043f\u043b\u044e\u0441 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445"})})]}),(0,qn.jsxs)(Nc,{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsx)(zc,{children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"}),(0,qn.jsx)(Ic,{children:"KG"===e?"\u041d\u0435\u0433\u0438\u0437\u0433\u0438 \u043a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsx)(ba,{arrow:Tc})]}),(0,qn.jsxs)(Lc,{children:[(0,qn.jsx)(Dc,{children:"\u041a\u0443\u0440\u0441"}),(0,qn.jsx)($c,{children:"JAVA DEVELOPER"}),(0,qn.jsx)(Fc,{children:"KG"===e?"\u041a\u0443\u0440\u0441 8 \u0430\u0439\u0433\u0430 \u0441\u043e\u0437\u0443\u043b\u0430\u0442 - 6 \u0430\u0439 \u043e\u043a\u0443\u0443, 2 \u0430\u0439 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430":"\u041a\u0443\u0440\u0441 \u0434\u043b\u0438\u0442\u0441\u044f 8 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 - 6 \u043c\u0435\u0441\u044f\u0446 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 2 \u043c\u0435\u0441\u044f\u0446 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430"}),(0,qn.jsx)(Vc,{children:"KG"===e?"\u0410\u0439\u044b\u043d\u0430 10 000 \u0441\u043e\u043c":"10 000 c\u043e\u043c \u0432 \u043c\u0435\u0441\u044f\u0446"}),(0,qn.jsx)(Bc,{href:"https://api.whatsapp.com/send?phone=996509914101",children:"KG"===e?"\u041a\u0438\u0440\u04af\u04af":"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Gc,{children:"KG"===e?"\u0414\u0438\u043f\u043b\u043e\u043c\u0434\u0443\u043a \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440":"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),(0,qn.jsxs)(Hc,{children:[(0,qn.jsx)("li",{children:"1.Landing Page "}),(0,qn.jsxs)("li",{children:["2.","KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442":"\u0421\u0430\u0439\u0442"]}),(0,qn.jsxs)("li",{children:["3.","KG"===e?"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0434\u04af\u043a\u04e9\u043d\u04af":"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"]}),(0,qn.jsxs)("li",{children:["4.","KG"===e?"\u042d\u043c\u043d\u0435 \u043a\u044b\u043b\u0430\u0431\u044b\u0437 \u0436\u0430\u043d\u0430 \u043a\u0430\u043d\u0442\u0438\u043f \u0438\u0448\u0442\u0435\u0439\u0431\u0438\u0437?":"\u0421 \u0447\u0435\u043c \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438 \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Uc,{children:"KG"===e?"\u041d\u0430\u0441\u0430\u0430\u0442\u0447\u044b\u043b\u0430\u0440 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d":"\u041c\u0435\u043d\u0442\u043e\u0440\u044b \u043f\u043e Front-End "}),(0,qn.jsxs)(Wc,{children:[(0,qn.jsxs)(Kc,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(qc,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(Yc,{children:"UX/UI Designer"})]}),(0,qn.jsxs)(Kc,{children:[(0,qn.jsx)("img",{src:wa,alt:"mentors"}),(0,qn.jsx)(qc,{children:"\u0411\u0430\u043b\u0430\u043d\u0447\u0430\u0435\u0432 \u0422\u0443\u043a\u0443\u043d\u0447\u043e"}),(0,qn.jsx)(Yc,{children:"UX/UI Designer"})]})]})]}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Xc,{children:"KG"===e?"\u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04e9\u0441\u04af\u0437?":"\u0427\u0435\u043c\u0443 \u0432\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c?"}),(0,qn.jsxs)(Qc,{children:[(0,qn.jsx)(Jc,{children:(0,qn.jsx)("img",{src:Oa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Zc,{children:"KG"===e?"\u0412\u0435\u0431\u0441\u0430\u0439\u0442\u0442\u044b \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044b\u0440\u044b\u04a3\u044b\u0437":"\u0412\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0441\u0430\u0439\u0442 "}),(0,qn.jsx)(eu,{children:"KG"===e?"\u0417\u0430\u043c\u0430\u043d\u0431\u0430\u043f CSS\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u04e9\u0437\u0433\u04e9\u0447\u04e9\u043b\u04af\u043a\u0442\u04e9\u0440\u04af\u043d \u043c\u0430\u0439\u0434\u0430-\u0447\u04af\u0439\u0434\u04e9\u0441\u04af\u043d\u04e9 \u0447\u0435\u0439\u0438\u043d \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437, \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437 \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443\u0433\u0430 \u043e\u04a3\u043e\u0439 \u0436\u043e\u043e\u043f \u0431\u0435\u0440\u04af\u04af\u0447\u04af \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0442\u0430\u0440\u0434\u044b \u0442\u04af\u0437\u04af\u04a3\u04af\u0437. \u0421\u0435\u043d \u0436\u0430\u0441\u0430\u0439\u0441\u044b\u04a3\u0431\u044b? \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u043b\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u043d\u0430 \u04e9\u0442\u04af\u04af\u043b\u04e9\u0440\u0434\u04af\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u044d\u0441\u0442\u0435\u0442\u0438\u043a\u0430\u043b\u044b\u043a \u0436\u0430\u043a\u0442\u0430\u043d \u0436\u0430\u0433\u044b\u043c\u0434\u0443\u0443\u0440\u0430\u0430\u043a.":"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e CSS, \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435\u0441\u0430\u0439\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0421\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u0435\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432."})]})]}),(0,qn.jsx)(tu,{}),(0,qn.jsxs)(Qc,{children:[(0,qn.jsx)(Jc,{children:(0,qn.jsx)("img",{src:_a,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Zc,{children:"Java Script"}),(0,qn.jsx)(eu,{children:"KG"===e?"\u0421\u0438\u0437 \u0441\u0430\u0439\u0442\u0442\u044b\u043d \u043b\u043e\u0433\u0438\u043a\u0430\u0441\u044b\u043d \u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0430\u0441\u044b\u0437. \u0416\u04e9\u043d\u04e9\u043a\u04e9\u0439 \u043c\u043e\u0434\u0430\u043b\u0434\u044b\u043a \u0442\u0435\u0440\u0435\u0437\u0435\u0434\u0435\u043d \u0441\u0435\u0440\u0432\u0435\u0440\u0434\u0435\u043d \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u0434\u044b \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0434\u0443\u043a \u0436\u04af\u043a\u0442\u04e9\u04e9 \u0436\u0430\u043d\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u04af\u0447\u04af\u043d \u044d\u04a3 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u0434\u0443\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u0442\u0438\u043b\u0434\u0435\u0440\u0438\u043d\u0438\u043d \u0431\u0438\u0440\u0438\u043d \u0441\u0442\u0440\u0435\u0441\u0441\u0441\u0438\u0437 \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u0439\u0442\u0430. \u041e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430\u0434\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f enterprise- \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.\u0411\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430 \u0432\u044b\u0443\u0447\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."})]})]}),(0,qn.jsx)(tu,{}),(0,qn.jsxs)(Qc,{children:[(0,qn.jsx)(Jc,{children:(0,qn.jsx)("img",{src:Pa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Zc,{children:"Framework"}),(0,qn.jsx)(eu,{children:"KG"===e?"\u0410\u043b\u043a\u0430\u043a\u0442\u0430\u0440\u0434\u044b\u043d \u0436\u0430\u0440\u0434\u0430\u043c\u044b \u043c\u0435\u043d\u0435\u043d \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0442\u0438 \u0442\u0435\u0437 \u04e9\u043d\u04af\u043a\u0442\u04af\u0440\u04e9 \u0430\u043b\u0430\u0441\u044b\u0437 \u0436\u0435\u043b\u0435 \u043a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440\u044b, \u043e\u0448\u043e\u043d\u0434\u043e\u0439 \u044d\u043b\u0435 \u0430\u043b\u0430\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0434\u0438\u043d \u0440\u0435\u0441\u0443\u0440\u0441\u0442\u0430\u0440\u044b\u043d \u043d\u0430\u0442\u044b\u0439\u0436\u0430\u043b\u0443\u0443\u0440\u0430\u0430\u043a \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0448\u0430\u0442. \u0441\u0435\u043d \u0421\u0438\u0437 \u044d\u043c\u043d\u0435\u043d\u0438 \u04af\u0439\u0440\u04e9\u043d\u04af\u04af\u043d\u04af \u0442\u0430\u043d\u0434\u0430\u0439\u0441\u044b\u0437 - React \u0436\u0435 Vue..":"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u043e\u0432 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u0430 \u0435\u0449\u0451 \u043e\u043d\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u0443\u044e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0412\u044b  \u0441\u0430\u043c\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0443\u0447\u0438\u0442\u044c \u2014 React \u0438\u043b\u0438 Vue.."})]})]}),(0,qn.jsx)(tu,{}),(0,qn.jsxs)(Qc,{children:[(0,qn.jsx)(Jc,{children:(0,qn.jsx)("img",{src:Aa,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Zc,{children:"KG"===e?"GIT \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9":"\u0420\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 GIT"}),(0,qn.jsx)(eu,{children:"KG"===e?"\u0421\u0438\u0437 \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440\u0434\u043e\u0433\u0443 \u0438\u0448\u0442\u0438\u043d \u0431\u0430\u0440\u0434\u044b\u043a \u044d\u0442\u0430\u043f\u0442\u0430\u0440\u044b\u043d \u0441\u0430\u043a\u0442\u0430\u043f \u043a\u0430\u043b\u0430\u0441\u044b\u0437, \u043e\u0448\u043e\u043d\u0434\u043e \u043a\u0435\u0441\u0438\u043f\u0442\u0435\u0448\u0442\u0435\u0440\u0438\u04a3\u0438\u0437 \u0430\u0440 \u0434\u0430\u0439\u044b\u043c \u043a\u043e\u0434\u0433\u043e \u043a\u0438\u0440\u0435 \u0430\u043b\u044b\u0448\u0430\u0442 \u0436\u0430\u043d\u0430 \u043a\u043e\u043a\u0443\u0441\u0443\u043d\u0430\u043d \u043a\u0435\u0442\u043a\u0435\u043d \u043a\u0430\u0442\u0430\u043b\u0430\u0440\u0434\u044b \u044d\u043a\u0438 \u0447\u044b\u043a\u044b\u043b\u0434\u0430\u0442\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u043e\u04a3\u0434\u043e\u043e\u0433\u043e \u0431\u043e\u043b\u043e\u0442.":"\u0411\u0443\u0434\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432\u0441\u0435 \u044d\u0442\u0430\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u0443 \u043a\u043e\u043b\u043b\u0435\u0433 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0434\u0443, \u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0432\u0430 \u043a\u043b\u0438\u043a\u0430"})]})]}),(0,qn.jsx)(tu,{}),(0,qn.jsxs)(Qc,{children:[(0,qn.jsx)(Jc,{children:(0,qn.jsx)("img",{src:Ma,alt:"femedal"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Zc,{children:"KG"===e?"\u0421\u0443\u043b\u0443\u0443\u043b\u0443\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0434\u0430":"\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 "}),(0,qn.jsx)(eu,{children:"KG"===e?"\u0421\u043f\u0440\u0438\u043d\u0442\u0442\u0435\u0440\u0434\u0438 \u0436\u0430\u043d\u0430 Scrum \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u0441\u044b\u043d \u043a\u043e\u043b\u0434\u043e\u043d\u0443\u0443 \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u04e9\u04e9\u043d\u04af \u04af\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437. Under \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043d\u044b\u043d \u0436\u0435\u0442\u0435\u043a\u0447\u0438\u043b\u0438\u0433\u0438 \u0442\u0430\u0440\u0430\u0431\u044b\u043d\u0430\u043d, \u0431\u0430\u0448\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440 \u043c\u0435\u043d\u0435\u043d \u0431\u0438\u0440\u0433\u0435, \u0441\u0438\u0437 \u0436\u0430\u0437\u0430\u0441\u044b\u0437 \u0432\u0435\u0431 \u043a\u043e\u043b\u0434\u043e\u043d\u043c\u043e.":"\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e \u0441\u043f\u0440\u0438\u043d\u0442\u0430\u043c \u0438 Scrum-\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438. \u041f\u043e\u0434 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u0442\u0438\u043c\u043b\u0438\u0434\u0430\u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."})]})]})]}),(0,qn.jsxs)(nu,{children:[(0,qn.jsxs)(ru,{children:[(0,qn.jsx)("div",{children:(0,qn.jsx)(lu,{src:Na,alt:"idev"})}),(0,qn.jsxs)(iu,{children:[(0,qn.jsx)("li",{children:"KG"===e?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,qn.jsx)("li",{children:"KG"===e?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"}),(0,qn.jsx)("li",{children:"KG"===e?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsxs)(au,{children:[(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:Ra,alt:"instagram"})}),(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:za,alt:"whatsapp"})}),(0,qn.jsx)("a",{href:"https://web.telegram.org/a/#846785266",children:(0,qn.jsx)("img",{src:Ia,alt:"telegram"})})]})]}),(0,qn.jsx)(ou,{children:(0,qn.jsx)(su,{children:"@All rights reserved"})})]})]})},Oc=Yt.div`
  background: #f8f4f1;
  height: auto;
`,_c=Yt.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0 0 80px;
  background-image: url(${e=>e.backgrounfrontend});
  background-size: cover;
  background-position: center;
  color: #ffff;
  @media (max-width: 470px) {
    width: 100%;
    padding: 65px 0 0 8px;
  }
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`,Pc=Yt.img`
  display: flex;
  margin-bottom: 112px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.7);
  }
  @media (max-width: 470px) {
    padding: 0 0 0 29px;
  }
`,Ac=Yt.h1`
  font-family: Montserrat;
  font-size: 65px;
  font-weight: 800;
  line-height: 76.05px;
  text-align: left;
  padding: 0 0 15px 150px;
  color: #ffffff;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    line-height: 32.76px;
    text-align: left;
    padding: 0 0 10px 29px;
  }
`,Mc=Yt.p`
  width: 968px;
  /* height: 69px; */
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 15px 150px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.06px;
    text-align: left;
    padding: 0 0 10px 29px;
    width: 369px;
    /* height: 126px; */
  }
`,Rc=Yt.ul`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  width: 1010px;
  height: 46px;
  padding: 28px 0 0 248px;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    line-height: 19.89px;
    text-align: left;
    padding: 0 0 0 29px;
    width: 335px;
    /* height: 60px; */
  }
`,zc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 76px 0 33px 77px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 20px 0 10px 15px;
  }
`,Ic=Yt.p`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.1px;
  text-align: left;
  padding: 0 0 0 77px;
  @media (max-width: 470px) {
    font-size: 20px;
    line-height: 23.4px;
    padding: 0 0 0 15px;
  }
`,Nc=Yt.div`
  display: flex;
  gap: 141px;
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`,Lc=Yt.div`
  width: 332.34px;
  height: 310px;
  border-radius: 0 0 100px 0;
  box-shadow: 0px 1px 6px 0px #4b4b4b40;
  background: linear-gradient(339.84deg, #5e59ee 25.67%, #eb89f5 108.05%);
  margin: 76px 0 0 0;
  @media (max-width: 470px) {
    margin: 20px auto;
  }
`,Dc=Yt.h2`
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.06px;
  text-align: left;
  padding: 39px 0 17px 40px;
  color: #ffffff;
`,$c=Yt.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  padding: 0 0 17px 40px;
  color: #ffffff;
`,Fc=Yt.p`
  font-family: Jost;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  width: 180px;
  /* height: 60px; */
  color: #ffffff;
  padding: 0 0 17px 40px;
`,Vc=Yt.h4`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  color: #ffffff;
  padding: 0 0 30px 40px;
`,Bc=Yt.a`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.4px;
  text-align: left;
  text-decoration: none;
  border-bottom: 3px solid #ffffff;
  color: #ffffff;
  margin: 0px 0 0px 40px;

  cursor: pointer;
`,Gc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    padding: 0 0 0 20px;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`,Hc=Yt.ul`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  list-style-type: none;
  text-align: left;
  padding: 0 0 35px 80px;
  & li {
    padding: 0 0 20px 0px;
  }
  @media (max-width: 470px) {
    padding: 20px 0 35px 15px;

    & li {
      padding: 10px 0 0 9px;
    }
  }
`,Uc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 0 0 35px 80px;
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
    padding: 0 0 20px 20px;
  }
`,Wc=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  padding: 0 0 0 80px;
  @media (max-width: 470px) {
    padding: 0 0px 0 20px;
    gap: 10px;
  }
`,Kc=Yt.div`
  position: relative;
  @media (max-width: 470px) {
    & img {
      width: 325.95px;
      height: 349px;
    }
  }
`,qc=Yt.h1`
  position: absolute;
  top: 347px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 240px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`,Yc=Yt.p`
  position: absolute;
  top: 380px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 270px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`,Xc=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  padding: 100px 0 0 78px;
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    padding: 50px 0 0 20px;
  }
`,Qc=Yt.div`
  display: flex;
  padding: 36px 0 0 80px;
  gap: 31px;
  @media (max-width: 470px) {
    padding: 36px 0 20px 20px;
    gap: 19px;
  }
`,Jc=Yt.div`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`,Zc=Yt.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  @media (max-width: 470px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.4px;
  }
`,eu=Yt.p`
  width: 673px;
  height: 60px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  @media (max-width: 470px) {
    width: 280px;
    height: 76px;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`,tu=Yt.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 117px;
  align-items: center;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0px 0 12px 51px;
    height: 47px;
  }
`,nu=Yt("div")`
  background: #262626;
  margin: 50px 0 0 0;
`,ru=Yt("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 89px 0 100px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 0 0 40px;
    height: 189px;
  }
`,iu=Yt("ul")`
  display: flex;
  align-items: center;
  gap: 55px;
  list-style: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: center;
  color: #f8f4f1;
  @media (max-width: 470px) {
    padding: 20px 0 10px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,au=Yt("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,ou=Yt("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`,su=Yt("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -90px;
  padding: 10px 0 10px 0;
  color: #ffffff8a;
  font-family: Montserrat;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: center;
  border-top: 1px solid #515151;
  width: 212px;
  @media (max-width: 470px) {
    margin: 0;
  }
`,lu=Yt.img`
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 130px;
  }
`;const cu=n.p+"static/media/Arrow 2.03c30e1f0764ed4a373cc33b4660d680.svg";var uu=Object.defineProperty,du=(e,t,n)=>((e,t,n)=>t in e?uu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),pu=new Map,fu=new WeakMap,hu=0,mu=void 0;function gu(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(fu.has(e)||(hu+=1,fu.set(e,hu.toString())),fu.get(e)):"0"}(e.root):e[t]}`)).toString()}function xu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:mu;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=gu(e);let n=pu.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},pu.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),pu.delete(i))}}e.Component;function yu(){let{threshold:t,delay:n,trackVisibility:r,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[p,f]=e.useState(null),h=e.useRef(),[m,g]=e.useState({inView:!!l,entry:void 0});h.current=u,e.useEffect((()=>{if(s||!p)return;let e;return e=xu(p,((t,n)=>{g({inView:t,entry:n}),h.current&&h.current(t,n),n.isIntersecting&&o&&e&&(e(),e=void 0)}),{root:a,rootMargin:i,threshold:t,trackVisibility:r,delay:n},c),()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,p,a,i,o,s,r,c,n]);const x=null==(d=m.entry)?void 0:d.target,y=e.useRef();p||!x||o||s||y.current===x||(y.current=x,g({inView:!!l,entry:void 0}));const v=[f,m.inView,m.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}function vu(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var bu=(()=>"function"===typeof Symbol&&Symbol.observable||"@@observable")(),wu=()=>Math.random().toString(36).substring(7).split("").join("."),Su={INIT:`@@redux/INIT${wu()}`,REPLACE:`@@redux/REPLACE${wu()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${wu()}`};function Eu(e){if("object"!==typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function ku(e,t,n){if("function"!==typeof e)throw new Error(vu(2));if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(vu(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(vu(1));return n(ku)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,l=!1;function c(){o===a&&(o=new Map,a.forEach(((e,t)=>{o.set(t,e)})))}function u(){if(l)throw new Error(vu(3));return i}function d(e){if("function"!==typeof e)throw new Error(vu(4));if(l)throw new Error(vu(5));let t=!0;c();const n=s++;return o.set(n,e),function(){if(t){if(l)throw new Error(vu(6));t=!1,c(),o.delete(n),a=null}}}function p(e){if(!Eu(e))throw new Error(vu(7));if("undefined"===typeof e.type)throw new Error(vu(8));if("string"!==typeof e.type)throw new Error(vu(17));if(l)throw new Error(vu(9));try{l=!0,i=r(i,e)}finally{l=!1}return(a=o).forEach((e=>{e()})),e}p({type:Su.INIT});return{dispatch:p,subscribe:d,getState:u,replaceReducer:function(e){if("function"!==typeof e)throw new Error(vu(10));r=e,p({type:Su.REPLACE})},[bu]:function(){const e=d;return{subscribe(t){if("object"!==typeof t||null===t)throw new Error(vu(11));function n(){const e=t;e.next&&e.next(u())}n();return{unsubscribe:e(n)}},[bu](){return this}}}}}function Cu(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const r=t[o];0,"function"===typeof e[r]&&(n[r]=e[r])}const r=Object.keys(n);let i;try{!function(e){Object.keys(e).forEach((t=>{const n=e[t];if("undefined"===typeof n(void 0,{type:Su.INIT}))throw new Error(vu(12));if("undefined"===typeof n(void 0,{type:Su.PROBE_UNKNOWN_ACTION()}))throw new Error(vu(13))}))}(n)}catch(a){i=a}return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(i)throw i;let a=!1;const o={};for(let i=0;i<r.length;i++){const s=r[i],l=n[s],c=e[s],u=l(c,t);if("undefined"===typeof u){t&&t.type;throw new Error(vu(14))}o[s]=u,a=a||u!==c}return a=a||r.length!==Object.keys(e).length,a?o:e}}function Tu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?e=>e:1===t.length?t[0]:t.reduce(((e,t)=>function(){return e(t(...arguments))}))}function ju(e){return t=>{let{dispatch:n,getState:r}=t;return t=>i=>"function"===typeof i?i(n,r,e):t(i)}}var Ou=ju(),_u=ju,Pu=Symbol.for("immer-nothing"),Au=Symbol.for("immer-draftable"),Mu=Symbol.for("immer-state");function Ru(e){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var zu=Object.getPrototypeOf;function Iu(e){return!!e&&!!e[Mu]}function Nu(e){return!!e&&(Du(e)||Array.isArray(e)||!!e[Au]||!!e.constructor?.[Au]||Gu(e)||Hu(e))}var Lu=Object.prototype.constructor.toString();function Du(e){if(!e||"object"!==typeof e)return!1;const t=zu(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Lu}function $u(e,t){0===Fu(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Fu(e){const t=e[Mu];return t?t.type_:Array.isArray(e)?1:Gu(e)?2:Hu(e)?3:0}function Vu(e,t){return 2===Fu(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Bu(e,t,n){const r=Fu(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Gu(e){return e instanceof Map}function Hu(e){return e instanceof Set}function Uu(e){return e.copy_||e.base_}function Wu(e,t){if(Gu(e))return new Map(e);if(Hu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Du(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[Mu];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(zu(e),t)}{const t=zu(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Ku(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Yu(e)||Iu(e)||!Nu(e)||(Fu(e)>1&&(e.set=e.add=e.clear=e.delete=qu),Object.freeze(e),t&&Object.entries(e).forEach((e=>{let[t,n]=e;return Ku(n,!0)}))),e}function qu(){Ru(2)}function Yu(e){return Object.isFrozen(e)}var Xu,Qu={};function Ju(e){const t=Qu[e];return t||Ru(0),t}function Zu(){return Xu}function ed(e,t){t&&(Ju("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function td(e){nd(e),e.drafts_.forEach(id),e.drafts_=null}function nd(e){e===Xu&&(Xu=e.parent_)}function rd(e){return Xu={drafts_:[],parent_:Xu,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function id(e){const t=e[Mu];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ad(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[Mu].modified_&&(td(t),Ru(4)),Nu(e)&&(e=od(t,e),t.parent_||ld(t,e)),t.patches_&&Ju("Patches").generateReplacementPatches_(n[Mu].base_,e,t.patches_,t.inversePatches_)):e=od(t,n,[]),td(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Pu?e:void 0}function od(e,t,n){if(Yu(t))return t;const r=t[Mu];if(!r)return $u(t,((i,a)=>sd(e,r,t,i,a,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return ld(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,a=!1;3===r.type_&&(i=new Set(t),t.clear(),a=!0),$u(i,((i,o)=>sd(e,r,t,i,o,n,a))),ld(e,t,!1),n&&e.patches_&&Ju("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function sd(e,t,n,r,i,a,o){if(Iu(i)){const o=od(e,i,a&&t&&3!==t.type_&&!Vu(t.assigned_,r)?a.concat(r):void 0);if(Bu(n,r,o),!Iu(o))return;e.canAutoFreeze_=!1}else o&&n.add(i);if(Nu(i)&&!Yu(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;od(e,i),t&&t.scope_.parent_||"symbol"===typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||ld(e,i)}}function ld(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ku(t,n)}var cd={get(e,t){if(t===Mu)return e;const n=Uu(e);if(!Vu(n,t))return function(e,t,n){const r=pd(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!Nu(r)?r:r===dd(e.base_,t)?(hd(e),e.copy_[t]=md(r,e)):r},has:(e,t)=>t in Uu(e),ownKeys:e=>Reflect.ownKeys(Uu(e)),set(e,t,n){const r=pd(Uu(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=dd(Uu(e),t),i=r?.[Mu];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}(n,r)&&(void 0!==n||Vu(e.base_,t)))return!0;hd(e),fd(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==dd(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,hd(e),fd(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Uu(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Ru(11)},getPrototypeOf:e=>zu(e.base_),setPrototypeOf(){Ru(12)}},ud={};function dd(e,t){const n=e[Mu];return(n?Uu(n):e)[t]}function pd(e,t){if(!(t in e))return;let n=zu(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=zu(n)}}function fd(e){e.modified_||(e.modified_=!0,e.parent_&&fd(e.parent_))}function hd(e){e.copy_||(e.copy_=Wu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}$u(cd,((e,t)=>{ud[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ud.deleteProperty=function(e,t){return ud.set.call(this,e,t,void 0)},ud.set=function(e,t,n){return cd.set.call(this,e[0],t,n,e[0])};function md(e,t){const n=Gu(e)?Ju("MapSet").proxyMap_(e,t):Hu(e)?Ju("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Zu(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=cd;n&&(i=[r],a=ud);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}(e,t);return(t?t.scope_:Zu()).drafts_.push(n),n}function gd(e){if(!Nu(e)||Yu(e))return e;const t=e[Mu];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Wu(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Wu(e,!0);return $u(n,((e,t)=>{Bu(n,e,gd(t))})),t&&(t.finalized_=!1),n}var xd=new class{constructor(e){var t=this;this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"===typeof e&&"function"!==typeof t){const n=t;t=e;const r=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return r.produce(e,(e=>t.call(this,e,...a)))}}let r;if("function"!==typeof t&&Ru(6),void 0!==n&&"function"!==typeof n&&Ru(7),Nu(e)){const i=rd(this),a=md(e,void 0);let o=!0;try{r=t(a),o=!1}finally{o?td(i):nd(i)}return ed(i,n),ad(r,i)}if(!e||"object"!==typeof e){if(r=t(e),void 0===r&&(r=e),r===Pu&&(r=void 0),this.autoFreeze_&&Ku(r,!0),n){const t=[],i=[];Ju("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}Ru(1)},this.produceWithPatches=(e,n)=>{if("function"===typeof e)return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return t.produceWithPatches(n,(t=>e(t,...i)))};let r,i;return[this.produce(e,n,((e,t)=>{r=e,i=t})),r,i]},"boolean"===typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"===typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Nu(e)||Ru(8),Iu(e)&&(e=function(e){Iu(e)||Ru(10);return gd(e)}(e));const t=rd(this),n=md(e,void 0);return n[Mu].isManual_=!0,nd(t),n}finishDraft(e,t){const n=e&&e[Mu];n&&n.isManual_||Ru(9);const{scope_:r}=n;return ed(r,t),ad(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Ju("Patches").applyPatches_;return Iu(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},yd=xd.produce;xd.produceWithPatches.bind(xd),xd.setAutoFreeze.bind(xd),xd.setUseStrictShallowCopy.bind(xd),xd.applyPatches.bind(xd),xd.createDraft.bind(xd),xd.finishDraft.bind(xd);var vd="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?Tu:Tu.apply(null,arguments)},bd=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,e=>e&&"function"===typeof e.match);function wd(e,t){function n(){if(t){let n=t(...arguments);if(!n)throw new Error(Wd(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return Eu(e)&&"type"in e&&"string"===typeof e.type}(t)&&t.type===e,n}var Sd=class e extends Array{constructor(){super(...arguments),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return super.concat.apply(this,t)}prepend(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 1===n.length&&Array.isArray(n[0])?new e(...n[0].concat(this)):new e(...n.concat(this))}};function Ed(e){return Nu(e)?yd(e,(()=>{})):e}function kd(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(Wd(10));const r=n.insert(t,e);return e.set(t,r),r}var Cd="RTK_autoBatch",Td=e=>t=>{setTimeout(t,e)},jd="undefined"!==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Td(10),Od=e=>function(t){const{autoBatch:n=!0}=t??{};let r=new Sd(e);return n&&r.push(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"raf"};return t=>function(){const n=t(...arguments);let r=!0,i=!1,a=!1;const o=new Set,s="tick"===e.type?queueMicrotask:"raf"===e.type?jd:"callback"===e.type?e.queueNotification:Td(e.timeout),l=()=>{a=!1,i&&(i=!1,o.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>r&&e()));return o.add(e),()=>{t(),o.delete(e)}},dispatch(e){try{return r=!e?.meta?.[Cd],i=!r,i&&(a||(a=!0,s(l))),n.dispatch(e)}finally{r=!0}}})}}("object"===typeof n?n:void 0)),r};function _d(e){const t={},n=[];let r;const i={addCase(e,n){const r="string"===typeof e?e:e.type;if(!r)throw new Error(Wd(28));if(r in t)throw new Error(Wd(29));return t[r]=n,i},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),i),addDefaultCase:e=>(r=e,i)};return e(i),[t,n,r]}var Pd=(e,t)=>bd(e)?e.match(t):e(t);function Ad(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.some((t=>Pd(t,e)))}var Md=function(){let e="",t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;for(;t--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e},Rd=["name","message","stack","code"],zd=class{constructor(e,t){this.payload=e,this.meta=t}_type},Id=class{constructor(e,t){this.payload=e,this.meta=t}_type},Nd=e=>{if("object"===typeof e&&null!==e){const t={};for(const n of Rd)"string"===typeof e[n]&&(t[n]=e[n]);return t}return{message:String(e)}},Ld=(()=>{function e(e,t,n){const r=wd(e+"/fulfilled",((e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:"fulfilled"}}))),i=wd(e+"/pending",((e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:"pending"}}))),a=wd(e+"/rejected",((e,t,r,i,a)=>({payload:i,error:(n&&n.serializeError||Nd)(e||"Rejected"),meta:{...a||{},arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===e?.name,condition:"ConditionError"===e?.name}})));return Object.assign((function(e){return(o,s,l)=>{const c=n?.idGenerator?n.idGenerator(e):Md(),u=new AbortController;let d,p;function f(e){p=e,u.abort()}const h=async function(){let h;try{let a=n?.condition?.(e,{getState:s,extra:l});if(null!==(m=a)&&"object"===typeof m&&"function"===typeof m.then&&(a=await a),!1===a||u.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const g=new Promise(((e,t)=>{d=()=>{t({name:"AbortError",message:p||"Aborted"})},u.signal.addEventListener("abort",d)}));o(i(c,e,n?.getPendingMeta?.({requestId:c,arg:e},{getState:s,extra:l}))),h=await Promise.race([g,Promise.resolve(t(e,{dispatch:o,getState:s,extra:l,requestId:c,signal:u.signal,abort:f,rejectWithValue:(e,t)=>new zd(e,t),fulfillWithValue:(e,t)=>new Id(e,t)})).then((t=>{if(t instanceof zd)throw t;return t instanceof Id?r(t.payload,c,e,t.meta):r(t,c,e)}))])}catch(g){h=g instanceof zd?a(null,c,e,g.payload,g.meta):a(g,c,e)}finally{d&&u.signal.removeEventListener("abort",d)}var m;return n&&!n.dispatchConditionRejection&&a.match(h)&&h.meta.condition||o(h),h}();return Object.assign(h,{abort:f,requestId:c,arg:e,unwrap:()=>h.then(Dd)})}}),{pending:i,rejected:a,fulfilled:r,settled:Ad(a,r),typePrefix:e})}return e.withTypes=()=>e,e})();function Dd(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var $d=Symbol.for("rtk-slice-createasyncthunk");function Fd(e,t){return`${e}/${t}`}function Vd(){let{creators:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e?.asyncThunk?.[$d];return function(e){const{name:n,reducerPath:r=n}=e;if(!n)throw new Error(Wd(11));const i=("function"===typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name](){return e(...arguments)}}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){const n="string"===typeof e?e:e.type;if(!n)throw new Error(Wd(12));if(n in o.sliceCaseReducersByType)throw new Error(Wd(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher:(e,t)=>(o.sliceMatchers.push({matcher:e,reducer:t}),s),exposeAction:(e,t)=>(o.actionCreators[e]=t,s),exposeCaseReducer:(e,t)=>(o.sliceCaseReducersByName[e]=t,s)};function l(){const[t={},n=[],r]="function"===typeof e.extraReducers?_d(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return function(e,t){let n,[r,i,a]=_d(t);if(function(e){return"function"===typeof e}(e))n=()=>Ed(e());else{const t=Ed(e);n=()=>t}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n(),t=arguments.length>1?arguments[1]:void 0,o=[r[t.type],...i.filter((e=>{let{matcher:n}=e;return n(t)})).map((e=>{let{reducer:t}=e;return t}))];return 0===o.filter((e=>!!e)).length&&(o=[a]),o.reduce(((e,n)=>{if(n){if(Iu(e)){const r=n(e,t);return void 0===r?e:r}if(Nu(e))return yd(e,(e=>n(e,t)));{const r=n(e,t);if(void 0===r){if(null===e)return e;throw new Error(Wd(9))}return r}}return e}),e)}return o.getInitialState=n,o}(e.initialState,(e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)}))}a.forEach((r=>{const a=i[r],o={reducerName:r,type:Fd(n,r),createNotation:"function"===typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(a)?function(e,t,n){let r,i,{type:a,reducerName:o,createNotation:s}=e;if("reducer"in t){if(s&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(t))throw new Error(Wd(17));r=t.reducer,i=t.prepare}else r=t;n.addCase(a,r).exposeCaseReducer(o,r).exposeAction(o,i?wd(a,i):wd(a))}(o,a,s):function(e,t,n,r){let{type:i,reducerName:a}=e;if(!r)throw new Error(Wd(18));const{payloadCreator:o,fulfilled:s,pending:l,rejected:c,settled:u,options:d}=t,p=r(i,o,d);n.exposeAction(a,p),s&&n.addCase(p.fulfilled,s);l&&n.addCase(p.pending,l);c&&n.addCase(p.rejected,c);u&&n.addMatcher(p.settled,u);n.exposeCaseReducer(a,{fulfilled:s||Hd,pending:l||Hd,rejected:c||Hd,settled:u||Hd})}(o,a,s,t)}));const c=e=>e,u=new Map;let d;function p(e,t){return d||(d=l()),d(e,t)}function f(){return d||(d=l()),d.getInitialState()}function h(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function r(e){let r=e[t];return"undefined"===typeof r&&n&&(r=f()),r}function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;const r=kd(u,n,{insert:()=>new WeakMap});return kd(r,t,{insert:()=>{const r={};for(const[i,a]of Object.entries(e.selectors??{}))r[i]=Bd(a,t,f,n);return r}})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}const m={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:f,...h(r),injectInto(e){let{reducerPath:t,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...m,...h(i,!0)}}};return m}}function Bd(e,t,n,r){function i(i){let a=t(i);"undefined"===typeof a&&r&&(a=n());for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return e(a,...s)}return i.unwrapped=e,i}var Gd=Vd();function Hd(){}var{assign:Ud}=Object;Symbol.for("rtk-state-proxy-original");function Wd(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Kd=function(e){const t={method:e.method||"GET",headers:{"Content-Type":"application/json"}};return"GET"!==e.method&&e.body&&(t.body=JSON.stringify(e.body)),new Promise(((n,r)=>{fetch("http://ec2-3-66-164-212.eu-central-1.compute.amazonaws.com/api/"+e.url,t).then((e=>{if(e.ok)return e.json();throw new Error(e.message)})).then((e=>{n(e)})).catch((e=>{r(e)}))}))};const qd=Ld("courses/fetchAll",(async(e,t)=>{let{language:n}=e,{rejectWithValue:r}=t;try{return{action:await Kd({url:`course/find/all?language=${n}`}),language:n}}catch(i){return r(i.message)}})),Yd=Gd({name:"courses",initialState:{gettingAllCourses:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(qd.pending,(e=>{e.loading=!0,e.error=null})).addCase(qd.fulfilled,((e,t)=>{e.loading=!1,e.gettingAllCourses=t.payload.action,e.language=t.payload.language})).addCase(qd.rejected,((e,t)=>{e.loading=!1,e.error=t.payload}))}}).reducer;const Xd=n.p+"static/media/image 45.57d488e7b046b0874e44abcf7f42c632.svg";const Qd=n.p+"static/media/image 33.0dc0cbc0671b541dace80bee82eceeef.svg";const Jd=n.p+"static/media/image 44.a0257ba77c1abe1f800fa9322fe356b1.svg";const Zd=n.p+"static/media/java-svgrepo-com 2.607856d5b07517389d3e839ea5b2d8be.svg",ep={"Front-End":Qd,"UX/UI Designer":Xd,Python:Jd,Java:Zd},tp=()=>{const{gettingAllCourses:t}=ss((e=>e.courses)),n=ss((e=>e.language.language)),r=vs(),i=Mo();(0,e.useEffect)((()=>{n&&r(qd({language:"KG"===n?"KYRGYZSTAN":"RUSSIAN"}))}),[r,n]);const{ref:a,inView:o}=yu({triggerOnce:!0});return(0,qn.jsxs)(rp,{id:"Courses",children:[(0,qn.jsx)(ip,{children:"KG"===n?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"}),(0,qn.jsxs)(sp,{children:[(0,qn.jsxs)(ap,{children:[(0,qn.jsx)(op,{children:"KG"===n?"\u0411\u0430\u0440\u0434\u044b\u043a \u0431\u0430\u0433\u044b\u0442\u0430\u0440":"\u0412\u0441\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"}),(0,qn.jsx)(op,{children:"Front-End developer"}),(0,qn.jsx)(op,{children:"Python developer"}),(0,qn.jsx)(op,{children:"Java developer"}),(0,qn.jsx)(op,{children:"UX/UI Design"})]}),(0,qn.jsx)("div",{children:(0,qn.jsx)(lp,{children:(null===t||void 0===t?void 0:t.length)>0?t.map((e=>(0,qn.jsxs)(cp,{ref:a,inView:o,children:[(0,qn.jsxs)(up,{children:[(0,qn.jsx)(dp,{children:"\u041a\u0443\u0440\u0441"}),(0,qn.jsx)("img",{src:ep[e.title]||Xd,alt:e.title})]}),(0,qn.jsx)("div",{children:(0,qn.jsxs)("div",{children:[(0,qn.jsx)(pp,{children:e.title}),(0,qn.jsx)(fp,{children:e.description})]})}),(0,qn.jsx)(hp,{children:(0,qn.jsxs)(mp,{onClick:()=>(e=>{switch(e.title){case"Front-End":i("/frontend");break;case"UX/UI Designer":i("/ux-ui");break;case"Python":i("/python");break;case"Java":i("/java");break;default:i("/")}})(e),children:["KYRGYZSTAN"===e.language?"\u041a\u0435\u043d\u0435\u043d\u0438\u0440\u044d\u044d\u043a":"\u041f\u041e\u0414\u0420\u041e\u0411\u041d\u0415\u0415",(0,qn.jsx)("img",{src:cu,alt:""})]})})]},e.title))):(0,qn.jsx)(np,{children:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043a\u0443\u0440\u0441\u043e\u0432"})})})]})]})},np=Yt.p`
  font-size: 18px;
  color: #ff2f00;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 250px;
  margin: 0 auto;
  @media (max-width: 470px) {
    display: none;
  }
`,rp=Yt.section`
  background: #f8f4f1;
  padding: 0px 0 50px 0;
  @media (max-width: 1024px) {
    padding: 0px 0 20px 0;
  }
  @media (max-width: 470px) {
    padding: 0px 0 20px 0;
  }
`,ip=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: center;
  color: #1e1e2f;
  padding: 0 0 67px 0;
  @media (max-width: 1024px) {
    padding: 0 0 20px 0;
  }
`,ap=Yt.ul`
  @media (max-width: 470px) {
    margin: 0 0 0 -167px;
  }
`,op=Yt.li`
  list-style: none;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.06px;
  text-align: left;
  padding: 0 0 22px 0;
  color: #1e1e2f;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 300px;
    border-radius: 15px;
    padding: 10px 5px;
    margin: 10px 0 19px 0;
    background: #ffffff;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 470px) {
    width: 199px;
    border-radius: 15px;
    padding: 10px 5px;
    margin: 10px 0 19px 0;
    background: #ffffff;
    text-align: center;
    cursor: pointer;
  }
`,sp=Yt.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  gap: 76px;
  @media (max-width: 1024px) {
    gap: 10px;
    flex-wrap: wrap;
  }
  @media (max-width: 470px) {
    flex-wrap: wrap;
    gap: 0;
  }
`,lp=Yt.section`
  display: flex;
  /* justify-content: center; */
  width: 1000px;
  flex-wrap: wrap;
  gap: 99px;
  padding: 0 0 51px 0;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding: 0 0 42px 0;
    gap: 42px;
  }
  @media (max-width: 470px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 0 42px 0;
    gap: 42px;
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 0 42px 0;
    gap: 42px;
  }
`,cp=Yt.div`
  width: 444px;
  height: 279px;
  background: #ffffff;
  border-radius: 10px;
  opacity: ${e=>e.inView?1:0};
  transform: ${e=>e.inView?"translateY(0)":"translateY(20px)"};
  transition:
    opacity 1s ease,
    transform 1s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    width: 600px;
    height: 300.5px;
    &:hover {
      transform: scale(1);
    }
  }
  @media (max-width: 470px) {
    width: 370px;
    height: 232.5px;
    &:hover {
      transform: scale(1);
    }
  }
`,up=Yt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 15px 0 23px;
`,dp=Yt.h3`
  width: 74px;
  height: 33px;
  padding: 7px 17px 7px 17px;
  border-radius: 5px;
  background: #f3f3f6;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.72px;
  text-align: left;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 61.67px;
    height: 27.5px;
    padding: 5.83px 14.17px 5.83px 14.17px;
    border-radius: 4.17px;
    font-size: 13.33px;
    font-weight: 400;
    line-height: 15.6px;
  }
  @media (max-width: 470px) {
    width: 61.67px;
    height: 27.5px;
    padding: 5.83px 14.17px 5.83px 14.17px;
    border-radius: 4.17px;
    font-size: 13.33px;
    font-weight: 400;
    line-height: 15.6px;
  }
`,pp=Yt.h1`
  font-family: Montserrat;
  font-size: 35px;
  font-weight: 600;
  line-height: 40.95px;
  text-align: left;
  color: #1e1e2f;
  padding: 0px 0 15px 23px;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: #ff6347;
    transform: translateY(-5px);
  }
  @media (max-width: 1024px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 29.25px;
  }
  @media (max-width: 470px) {
    font-size: 25px;
    font-weight: 600;
    line-height: 29.25px;
  }
`,fp=Yt.p`
  font-family: Jost;
  font-size: 19px;
  font-weight: 400;
  line-height: 22.23px;
  text-align: left;
  color: #1e1e2f;
  width: 323px;
  height: 66px;
  padding: 0px 0 15px 23px;
  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
  @media (max-width: 470px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18.72px;
  }
`,hp=Yt.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 25px 0 0;
`,mp=Yt.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  font-family: Montserrat;
  font-size: 12.17px;
  font-weight: 600;
  line-height: 14.24px;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ff6347;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10.14px;
    line-height: 11.87px;
  }
`;const gp=n.p+"static/media/Group 80.719e1e3a10d4ad77a9d81282c2740f4c.svg";const xp=n.p+"static/media/feMedal0.51be4bc245c135fb9a7a9591f15cb6fc.svg";const yp=n.p+"static/media/Vector (4).f1c8c3450b77788d504596ad725c79be.svg",vp=Yt.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  margin: auto;
  overflow: hidden;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,bp=Yt.iframe`
  width: 881px;
  height: 419px;
  @media (max-width: 1024px) {
    width: 80%;
    /* height: 256px; */
  }
  @media (max-width: 470px) {
    width: 370px;
    height: 256px;
  }
`,wp=()=>(0,qn.jsx)(vp,{children:(0,qn.jsx)(bp,{src:"https://www.youtube.com/embed/QqEFkv5mBiQ?autoplay=1&rel=0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"YouTube Video"})});var Sp=n(5751);const Ep=()=>{const t=ss((e=>e.language.language)),[n,r]=(0,e.useState)(!1),i=(0,e.useRef)(null);(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&r(!0)}),{threshold:.1});return i.current&&e.observe(i.current),()=>{i.current&&e.unobserve(i.current)}}),[]);const a=e=>{let{value:t,suffix:n}=e;const{ref:r,inView:i}=yu({triggerOnce:!0,threshold:.1});return(0,qn.jsxs)(Lp,{ref:r,children:[(0,qn.jsx)($p,{start:0,end:i?t:0,duration:2}),(0,qn.jsx)(Dp,{children:n})]})};return(0,qn.jsxs)(kp,{children:[(0,qn.jsxs)(Cp,{children:[(0,qn.jsx)(Tp,{children:"KG"===t?'"\u0411\u0438\u0437 \u04e9\u0442\u043a\u04e9\u043d\u0434\u04af \u04e9\u0437\u0433\u04e9\u0440\u0442\u04e9 \u0430\u043b\u0431\u0430\u0439\u0431\u044b\u0437, \u0431\u0438\u0440\u043e\u043a \u043a\u0435\u043b\u0435\u0447\u0435\u043a\u0442\u0438 \u0442\u04af\u0437\u04e9 \u0430\u043b\u0430\u0431\u044b\u0437"':" \u201c\u041c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0448\u043b\u043e\u0435, \u043d\u043e \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0443\u0434\u0443\u0449\u0435\u0435\u201d"}),(0,qn.jsx)(jp,{children:"KG"===t?"\u0411\u0438\u0437\u0434\u0438\u043d \u043c\u0430\u043a\u0441\u0430\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440\u0433\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e\u043d\u0443 \u04af\u0439\u0440\u04e9\u043d\u04af\u04af\u0433\u04e9 \u0436\u0430\u0440\u0434\u0430\u043c \u0431\u0435\u0440\u04af\u04af. \u0411\u0438\u0437\u0434\u0438\u043d \u043a\u0443\u0440\u0441\u0442\u0430\u0440 \u0431\u0430\u0440\u0434\u044b\u0433\u044b \u04af\u0447\u04af\u043d \u044b\u043b\u0430\u0439\u044b\u043a\u0442\u0443\u0443 - \u0431\u0430\u0448\u0442\u0430\u043b\u0433\u044b\u0447\u0442\u0430\u0440\u0434\u0430\u043d \u0431\u0430\u0448\u0442\u0430\u043f \u0430\u043b\u0434\u044b\u04a3\u043a\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0442\u0435\u0440\u0433\u0435 \u0447\u0435\u0439\u0438\u043d":"\u041d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u043f\u043e\u043c\u043e\u0447\u044c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e. \u041d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 - \u043e\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u0434\u043e \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0445 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u0432"})]}),(0,qn.jsxs)(Op,{children:[(0,qn.jsxs)("article",{children:[(0,qn.jsxs)(_p,{ref:i,inview:n,children:[(0,qn.jsx)(Pp,{children:(0,qn.jsx)("img",{src:gp,alt:"C \u043d\u0443\u043b\u044f \u0434\u043e Junior"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Mp,{children:"KG"===t?"\u041d\u04e9\u043b\u0434\u04e9\u043d Junior \u0447\u0435\u0439\u0438\u043d":"C \u043d\u0443\u043b\u044f \u0434\u043e Junior"}),(0,qn.jsx)(Rp,{children:"KG"===t?"\u04ae\u0439\u0440\u04e9\u043d\u04af\u04a3\u04af\u0437 \u0436\u0430\u043d\u0430 Junior \u0438\u0448\u0442\u0435\u043f \u0447\u044b\u0433\u0443\u0443\u0447\u0443 \u0431\u043e\u043b\u0443\u04a3\u0443\u0437!":" \u041e\u0431\u0443\u0447\u0438\u0441\u044c \u0438 \u0441\u0442\u0430\u043d\u044c Junior \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c!"})]})]}),(0,qn.jsx)(Ap,{ref:i,inview:n}),(0,qn.jsxs)(_p,{ref:i,inview:n,children:[(0,qn.jsx)(Pp,{children:(0,qn.jsx)("img",{src:xp,alt:"\u0422\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Mp,{children:"KG"===t?"\u0418\u0448 \u043c\u0435\u043d\u0435\u043d \u043a\u0430\u043c\u0441\u044b\u0437 \u043a\u044b\u043b\u0443\u0443":"\u0422\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"}),(0,qn.jsx)(Rp,{children:"KG"===t?"\u041a\u0435\u043f\u0438\u043b\u0434\u0435\u043d\u0433\u0435\u043d \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430!":"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430!"})]})]}),(0,qn.jsx)(Ap,{ref:i,inview:n}),(0,qn.jsxs)(_p,{ref:i,inview:n,children:[(0,qn.jsx)(Pp,{children:(0,qn.jsx)("img",{src:yp,alt:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"})}),(0,qn.jsxs)("div",{children:[(0,qn.jsx)(Mp,{children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),(0,qn.jsx)(Rp,{children:"KG"===t?"\u0421\u0438\u0437\u0434\u0438\u043d \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u04af\u0447\u04af\u043d 5 \u0441\u0430\u043f\u0430\u0442\u0442\u0443\u0443 \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440":" 5 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043a \u0432\u0430\u043c \u043d\u0430 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"})]})]})]}),(0,qn.jsxs)(zp,{children:[(0,qn.jsxs)(Ip,{children:[(0,qn.jsx)(a,{value:100,suffix:""+("KG"===t?"+ \u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440":"+ \u0421\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432")}),(0,qn.jsx)(Np,{}),(0,qn.jsx)(a,{value:70,suffix:""+("KG"===t?"+ \u0411\u04af\u0442\u04af\u0440\u04af\u04af\u0447\u04af\u043b\u04e9\u0440":"+ \u0412\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u043e\u0432")})]}),(0,qn.jsx)("figure",{children:(0,qn.jsx)(wp,{})})]})]})]})},kp=Yt.section`
  background: #f8f4f1;
  padding: 0 0 100px 0;
`,Cp=Yt.header`
  display: flex;
  gap: 153px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 139px 0 52px 0;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0 0 0;
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 86px 0 0 0;
  }
`,Tp=Yt.h1`
  font-family: Montserrat Alternates;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: left;
  width: 544px;
  height: 132px;
  @media (max-width: 1024px) {
    width: 358px;
    height: 0px;
    font-family: Montserrat Alternates;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
  }
  @media (max-width: 470px) {
    width: 358px;
    height: 0px;
    font-family: Montserrat Alternates;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: left;
  }
`,jp=Yt.p`
  width: 546px;
  height: 66px;
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 500;
  line-height: 22.23px;
  text-align: left;
  @media (max-width: 1024px) {
    width: 383px;
    height: 0px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.72px;
    text-align: left;
  }
  @media (max-width: 470px) {
    width: 383px;
    height: 0px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.72px;
    text-align: left;
  }
  @media (max-width: 376px) {
    width: 343px;
    height: 0px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.72px;
    text-align: left;
  }
`,Op=Yt.section`
  display: flex;
  justify-content: center;
  gap: 70px;
  padding: 143px 0 0 0;
  position: relative;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 80px 0 0 0;
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 143px 0 0 0;
  }
`,_p=Yt.div`
  display: flex;
  align-items: center;
  gap: 29px;
  opacity: ${e=>e.inview?1:0};
  transform: ${e=>e.inView?"translateY(0)":"translateY(20px)"};
  transition:
    opacity 2s ease-in-out,
    transform 2s ease-in-out;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 0 0 0 100px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 0 0 0 14px;
  }
`,Pp=Yt.figure`
  width: 72px;
  height: 72px;
  border-radius: 26.77px;
  background: linear-gradient(145deg, #e2e2e2, #ffffff);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin: 0 0 20px 0;
  &:hover {
    transform: scale(1.1);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 470px) {
    width: 67.32px;
    height: 67.32px;
  }
`,Ap=Yt.span`
  border: 1px dotted #52515d;
  width: 1px;
  height: 51px;
  display: flex;
  margin: 12px 0 0px 37px;
  align-items: center;
  opacity: ${e=>e.inview?1:0};
  transform: ${e=>e.inView?"translateY(0)":"translateY(10px)"};
  transition:
    opacity 3s ease,
    transform 3s ease;
  ${_p}:hover & {
    border-color: #1e1e2f;
  }
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 135px;
    height: 47px;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    margin: 12px 0 12px 48px;
    height: 47px;
  }
`,Mp=Yt.h2`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  color: #1e1e2f;
  text-align: left;
  padding: 0 0 10px 0;
  transition: color 0.3s ease;

  ${_p}:hover & {
    color: #ff5733;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 18.7px;
    font-weight: 600;
    line-height: 21.88px;
    text-align: left;
    padding: 0 0 5px 0;
  }
`,Rp=Yt.p`
  width: 200px;
  height: 40px;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: left;
  color: #52515d;
  transition: color 0.3s ease;

  ${_p}:hover & {
    color: #333;
  }
  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 15.89px;
    font-weight: 400;
    line-height: 18.6px;
    text-align: left;
  }
`,zp=Yt.aside`
  position: relative;
`,Ip=Yt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5e59ee;
  width: 647px;
  height: 137px;
  position: absolute;
  top: -75px;
  left: 120px;
  z-index: 900;
  overflow: hidden;
  @media (max-width: 1024px) {
    left: calc(50% - 250px); /* Centered with a slight offset */
    top: -20px;
    width: 500.18px;
    height: 70.44px;
  }

  @media (max-width: 470px) {
    left: calc(50% - 165px); /* Centered with a slight offset */
    top: -20px;
    width: 330.18px;
    height: 70.44px;
  }

  @media (max-width: 376px) {
    left: calc(50% - 165px); /* Centered with a slight offset */
    top: -20px;
    width: 330.18px;
    height: 70.44px;
  }
`,Np=Yt.span`
  display: flex;
  width: 1px;
  background: #f8f4f1;
  margin: 7px 20px 0 20px;
  height: 62px;
  @media (max-width: 470px) {
    height: 40px;
  }
`,Lp=Yt.span`
  font-family: "Abril Fatface", serif;
  font-size: 41px;
  font-weight: 400;
  line-height: 76.05px;
  text-align: left;
  color: #f8f4f1;
  display: flex;
  align-items: center;
`,Dp=Yt.span`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 500;
  line-height: 23.4px;
  margin-left: 5px;
  @media (max-width: 470px) {
    font-size: 14px;
  }
`,$p=Yt(Sp.Ay)`
  font-family: "Abril Fatface", serif;
  font-size: 65px;
  font-weight: 400;
  line-height: 76.05px;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 20.05px;
  }
  @media (max-width: 470px) {
    font-size: 18px;
    line-height: 20.05px;
  }
`;var Fp={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Vp(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return Fp[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var Bp=function(){return Bp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Bp.apply(this,arguments)},Gp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},Hp=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return a&&a.insertRule(o,0),r}("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");const Up=function(t){var n=t.loading,r=void 0===n||n,i=t.color,a=void 0===i?"#000000":i,o=t.speedMultiplier,s=void 0===o?1:o,l=t.cssOverride,c=void 0===l?{}:l,u=t.size,d=void 0===u?15:u,p=t.margin,f=void 0===p?2:p,h=Gp(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),m=Bp({display:"inherit"},c),g=function(e){return{display:"inline-block",backgroundColor:a,width:Vp(d),height:Vp(d),margin:Vp(f),borderRadius:"100%",animation:"".concat(Hp," ").concat(.7/s,"s ").concat(e%2?"0s":"".concat(.35/s,"s")," infinite linear"),animationFillMode:"both"}};return r?e.createElement("span",Bp({style:m},h),e.createElement("span",{style:g(1)}),e.createElement("span",{style:g(2)}),e.createElement("span",{style:g(3)})):null};var Wp=n(9473);const Kp=n.p+"static/media/imageHeader.22c1e462a8c9f328aab8520c5618173b.svg";const qp=n.p+"static/media/languageIcons.14ed56a1ff3641cbd9b25e975334a6b4.svg";const Yp=n.p+"static/media/burgermen.31d80cba98b67f1cadb13aee619daaf6.svg";const Xp=n.p+"static/media/whatsapp.985b46d64a8f3761a5fb30862fe8860f.svg";const Qp=n.p+"static/media/instagram.4b415d8c632e8545fbad4e035acb373f.svg";const Jp=n.p+"static/media/phone.5acf320963bb648d6a814704596ec569.svg";const Zp=n.p+"static/media/Group 78 (2).5e5e58fd6e6de31bbe3cefdf8020db89.svg",ef=Ld("project/fetchAllProject",(async(e,t)=>{let{language:n}=e,{rejectWithValue:r}=t;try{console.log(n,"projects");return await Kd({url:`project/find/all?language=${n}`})}catch(i){return r(i.message)}})),tf=Gd({name:"project",initialState:{gettingAllProject:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(ef.pending,(e=>{e.loading=!0,e.error=null})).addCase(ef.fulfilled,((e,t)=>{e.loading=!1,e.gettingAllProject=t.payload})).addCase(ef.rejected,((e,t)=>{e.loading=!1,e.error=t.payload}))}}).reducer,nf=Gd({name:"language",initialState:{language:localStorage.getItem("language")||"KG"},reducers:{toggleLanguage:e=>{e.language="KG"===e.language?"RU":"KG",localStorage.setItem("language",e.language)},setLanguage:(e,t)=>{e.language=t.payload,localStorage.setItem("language",e.language)}}}),{toggleLanguage:rf,setLanguage:af}=nf.actions,of=nf.reducer,sf=()=>{const[t,n]=(0,e.useState)(!1),[r,i]=(0,e.useState)(!1),a=vs(),o=ss((e=>e.language.language)),s=()=>{n(!t)},l=()=>{a(rf())};return(0,e.useEffect)((()=>{(async()=>{i(!0);try{await a(qd({language:"KG"===o?"KYRGYZSTAN":"RUSSIAN"})),await a(ef({language:"KG"===o?"KYRGYZSTAN":"RUSSIAN"}))}catch(e){console.error("Failed to load data:",e)}finally{i(!1)}})()}),[o,a]),(0,qn.jsxs)(qn.Fragment,{children:[r?(0,qn.jsx)(lf,{children:(0,qn.jsx)(Up,{color:"#5e59ee"})}):null,(0,qn.jsxs)(cf,{backgroundheader:Kp,id:"Home",children:[(0,qn.jsxs)(df,{children:[(0,qn.jsx)("div",{children:(0,qn.jsx)(uf,{src:Na,alt:"idev-icons"})}),(0,qn.jsxs)(pf,{children:[(0,qn.jsxs)(ff,{to:"Home",children:[" ","KG"===o?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"]}),(0,qn.jsx)(ff,{to:"About Us",children:"KG"===o?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"}),(0,qn.jsx)(ff,{to:"Courses",children:"KG"===o?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"})]}),(0,qn.jsxs)(hf,{onClick:l,children:[(0,qn.jsx)("img",{src:qp,alt:"language"}),(0,qn.jsx)(mf,{children:"KG"===o?"KG":"RU"})]}),(0,qn.jsx)(bf,{onClick:s,children:(0,qn.jsx)("img",{src:Yp,alt:"burger-menu"})})]}),(0,qn.jsxs)(gf,{children:[(0,qn.jsx)(xf,{children:"KG"===o?"\u0421\u0438\u0437\u0434\u0438\u043d \u043a\u0435\u043b\u0435\u0447\u0435\u0433\u0438\u04a3\u0438\u0437 \u0431\u04af\u0433\u04af\u043d \u0431\u0430\u0448\u0442\u0430\u043b\u0430\u0442":"\u0412\u0430\u0448\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u0433\u043e\u0434\u043d\u044f"}),(0,qn.jsx)(yf,{children:"KG"===o?"\u0411\u0438\u0448\u043a\u0435\u043a\u0442\u0435\u0433\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043b\u043e\u043e \u043a\u0443\u0440\u0441\u0442\u0430\u0440\u044b \u0411\u0438\u0437 8 \u0430\u0439\u0434\u0430 \u043d\u04e9\u043b\u0434\u04e9\u043d \u0431\u0430\u0448\u0442\u0430\u043f \u043a\u0435\u043f\u0438\u043b\u0434\u0435\u043d\u0433\u0435\u043d \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0430\u0433\u0430 \u0447\u0435\u0439\u0438\u043d \u043e\u043a\u0443\u0442\u0430\u0431\u044b\u0437!":"\u041a\u0443\u0440\u0441\u044b \u043f\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0432 \u0411\u0438\u0448\u043a\u0435\u043a\u0435 \u041e\u0431\u0443\u0447\u0430\u0435\u043c \u0441 \u043d\u0443\u043b\u044f \u0434\u043e \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0438 \u0437\u0430 8 \u043c\u0435\u0441\u044f\u0446\u0435\u0432!"}),(0,qn.jsx)(vf,{href:"https://api.whatsapp.com/send?phone=996509914101",children:"KG"===o?"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448":"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f"})]}),(0,qn.jsxs)(Ef,{className:t?"active":"inactive",children:[(0,qn.jsxs)(kf,{children:[(0,qn.jsx)("img",{src:qp,alt:"language"}),(0,qn.jsx)(Cf,{onClick:l,children:"KG"===o?"KG":"RU"}),(0,qn.jsx)(jf,{onClick:s,children:(0,qn.jsx)("img",{src:Zp,alt:"close"})})]}),(0,qn.jsxs)(Tf,{children:[(0,qn.jsx)(Pf,{to:"Home",children:"KG"===o?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,qn.jsx)(Pf,{to:"About Us",children:"KG"===o?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"}),(0,qn.jsx)(Pf,{to:"Courses",children:"KG"===o?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"}),(0,qn.jsx)(Of,{to:"contacts",children:"KG"===o?"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448\u0442\u0430\u0440":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,qn.jsxs)(_f,{children:[(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=99650991410",children:(0,qn.jsx)("img",{src:Xp,alt:"whatsapp-icons"})}),(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:Qp,alt:"instagram-icons"})}),(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=99650991410",children:(0,qn.jsx)("img",{src:Jp,alt:"phone-icons"})})]})]})]})]})]})},lf=Yt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 2000;
  font-size: 24px;
`,cf=Yt.header`
  background-image: url(${e=>e.backgroundheader});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`,uf=Yt.img`
  cursor: pointer;
`,df=Yt.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 70px 0 70px;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 50px 29px 0 53px;
    position: relative;
  }
  @media (max-width: 470px) {
    display: flex;
    justify-content: space-between;
    padding: 50px 29px 0 53px;
    position: relative;
  }
`,pf=Yt.ul`
  display: flex;
  list-style: none;
  gap: 53px;
  font-family: Montserrat Alternates;
  font-size: 28px;
  font-weight: 400;
  line-height: 32.76px;
  color: #ffffff;
  text-align: left;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 470px) {
    display: none;
  }
`,ff=Yt(Wp.N_)`
  padding: 4px;
  position: relative;
  padding: 70px 0 0 0;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transition: width 0.7s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
  cursor: pointer;
`,hf=Yt.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 470px) {
    display: none;
  }
`,mf=Yt.span`
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: center;
  color: #ffffff;
`,gf=Yt.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 202px 0 0 0;
`,xf=Yt.h1`
  font-family: Montserrat;
  font-size: 61px;
  font-weight: 700;
  line-height: 71.37px;
  text-align: left;
  color: #ededed;
  padding: 0 0 28px 0;
  @media (max-width: 1024px) {
    width: 700px;
    font-family: Montserrat;
    font-size: 54px;
    font-weight: 700;
    line-height: 79.78px;
    text-align: center;
    padding: 0 0 10px 0;
  }
  @media (max-width: 470px) {
    width: 373px;
    font-family: Montserrat;
    font-size: 34px;
    font-weight: 700;
    line-height: 39.78px;
    text-align: center;
    padding: 0 0 10px 0;
  }
`,yf=Yt.p`
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 400;
  line-height: 24.57px;
  text-align: center;
  color: #f8f4f1;
  width: 696px;
  padding: 0 0 47px 0;
  @media (max-width: 1024px) {
    width: 700px;
    height: 54px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 40.55px;
    text-align: center;
    padding: 0 0 123px 0;
  }
  @media (max-width: 470px) {
    width: 326px;
    height: 54px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.55px;
    text-align: center;
    padding: 0 0 123px 0;
  }
`,vf=Yt.a`
  width: 217px;
  height: 56px;
  padding: 15px 61px;
  border-radius: 60px;
  background: none;
  border: 1.5px solid #f8f4f1;
  color: #f8f4f1;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition:
    border-color 0.4s ease,
    background-color 0.4s ease;

  &:hover {
    border-color: #ffffff;
    background: #5e59ee;
    color: #f8f4f1;
  }
`,bf=Yt.button`
  display: none;
  @media (max-width: 1024px) {
    background-color: none;
    display: block;
    width: 65px;
    height: 65px;
    background: #1c1d20;
    box-shadow: 0.76px 0.76px 3.82px 0px #00000030;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #455ce9;
    }
  }
  @media (max-width: 470px) {
    background-color: none;
    display: block;
    width: 65px;
    height: 65px;
    background: #1c1d20;
    box-shadow: 0.76px 0.76px 3.82px 0px #00000030;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #455ce9;
    }
  }
`,wf=Xt`
  0% {
    right: -261px;
  }
  100% {
    right: 0;
  }
`,Sf=Xt`
  0% {
    right: 0;
  }
  100% {
    right: -261px;
  }
`,Ef=Yt.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1000;
    right: -261px;
    top: 0;
    width: 261px;
    height: 662px;
    background: #1c1d20;
    transition: right 0.3s ease-in-out;
    &.active {
      right: 0;
      animation: ${wf} 0.3s ease-in-out forwards;
    }
    &.inactive {
      animation: ${Sf} 0.3s ease-in-out forwards;
    }
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: -261px;
    top: 0;
    width: 261px;
    height: 662px;
    background: #1c1d20;
    transition: right 0.3s ease-in-out;
    &.active {
      right: 0;
      animation: ${wf} 0.3s ease-in-out forwards;
    }
    &.inactive {
      animation: ${Sf} 0.3s ease-in-out forwards;
    }
  }
`,kf=Yt.div`
  @media (max-width: 1024px) {
    padding: 100px 130px 35px 0px;
    width: 199px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-bottom: 1px solid #4b4b4b;
    margin: 0 0 50px 41px;
  }
  @media (max-width: 470px) {
    padding: 100px 130px 35px 0px;
    width: 199px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-bottom: 1px solid #4b4b4b;
    margin: 0 0 50px 41px;
  }
`,Cf=Yt.span`
  @media (max-width: 1024px) {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: center;
    color: #ffffff;
  }
  @media (max-width: 470px) {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: center;
    color: #ffffff;
  }
`,Tf=Yt.ul`
  @media (max-width: 1024px) {
    list-style: none;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 470px) {
    list-style: none;
    color: #ffffff;
  }
`,jf=Yt.button`
  @media (max-width: 1024px) {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #1c1d20;
    border: none;
    border: 1.5px solid #f8f4f1;
    margin-left: 60px;
    &:hover {
      background: #455ce9;
    }
    img {
      padding: 10px;
      border-radius: 40px;
    }
  }
  @media (max-width: 470px) {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #1c1d20;
    border: none;
    border: 1.5px solid #f8f4f1;
    margin-left: 60px;
    &:hover {
      background: #455ce9;
    }
    img {
      padding: 10px;
      border-radius: 40px;
    }
  }
`,Of=Yt(Wp.N_)`
  @media (max-width: 1024px) {
    font-family: Montserrat Alternates;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.55px;
    padding: 0px 0 40px 40px;
    color: #a6a6a6;
  }
  @media (max-width: 470px) {
    font-family: Montserrat Alternates;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.55px;
    padding: 0px 0 40px 40px;
    color: #a6a6a6;
  }
`,_f=Yt.li`
  @media (max-width: 1024px) {
    display: flex;
    gap: 37px;
    padding: 0 0 0 40px;
  }
  @media (max-width: 470px) {
    display: flex;
    gap: 37px;
    padding: 0 0 0 40px;
  }
`,Pf=Yt(Wp.N_)`
  @media (max-width: 1024px) {
    margin: 0 100px 50px 40px;
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: left;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      transition: width 0.7s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
    cursor: pointer;
  }
  @media (max-width: 470px) {
    margin: 0 100px 50px 40px;
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: left;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      transition: width 0.7s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
    cursor: pointer;
  }
`;function Af(e){return null!==e&&"object"===typeof e&&"constructor"in e&&e.constructor===Object}function Mf(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((n=>{"undefined"===typeof e[n]?e[n]=t[n]:Af(t[n])&&Af(e[n])&&Object.keys(t[n]).length>0&&Mf(e[n],t[n])}))}const Rf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function zf(){const e="undefined"!==typeof document?document:{};return Mf(e,Rf),e}const If={document:Rf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"===typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!==typeof setTimeout&&clearTimeout(e)}};function Nf(){const e="undefined"!==typeof window?window:{};return Mf(e,If),e}function Lf(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function Df(){return Date.now()}function $f(e,t){void 0===t&&(t="x");const n=Nf();let r,i,a;const o=function(e){const t=Nf();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),a=new n.WebKitCSSMatrix("none"===i?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),"x"===t&&(i=n.WebKitCSSMatrix?a.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(i=n.WebKitCSSMatrix?a.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),i||0}function Ff(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function Vf(e){return"undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function Bf(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(void 0!==r&&null!==r&&!Vf(r)){const n=Object.keys(Object(r)).filter((e=>t.indexOf(e)<0));for(let t=0,i=n.length;t<i;t+=1){const i=n[t],a=Object.getOwnPropertyDescriptor(r,i);void 0!==a&&a.enumerable&&(Ff(e[i])&&Ff(r[i])?r[i].__swiper__?e[i]=r[i]:Bf(e[i],r[i]):!Ff(e[i])&&Ff(r[i])?(e[i]={},r[i].__swiper__?e[i]=r[i]:Bf(e[i],r[i])):e[i]=r[i])}}}return e}function Gf(e,t,n){e.style.setProperty(t,n)}function Hf(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Nf(),a=-t.translate;let o,s=null;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>a?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,d=()=>{o=(new Date).getTime(),null===s&&(s=o);const e=Math.max(Math.min((o-s)/l,1),0),c=.5-Math.cos(e*Math.PI)/2;let p=a+c*(n-a);if(u(p,n)&&(p=n),t.wrapperEl.scrollTo({[r]:p}),u(p,n))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:p})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(d)};d()}function Uf(e,t){void 0===t&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter((e=>e.matches(t))):n}function Wf(e){try{return void console.warn(e)}catch(t){}}function Kf(e,t){void 0===t&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:function(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}(t)),n}function qf(e,t){return Nf().getComputedStyle(e,null).getPropertyValue(t)}function Yf(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function Xf(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Qf(e,t,n){const r=Nf();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function Jf(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}let Zf,eh,th;function nh(){return Zf||(Zf=function(){const e=Nf(),t=zf();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Zf}function rh(e){return void 0===e&&(e={}),eh||(eh=function(e){let{userAgent:t}=void 0===e?{}:e;const n=nh(),r=Nf(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/);let u=a.match(/(iPad).*OS\s([\d_]+)/);const d=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===i;let h="MacIntel"===i;return!u&&h&&n.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${s}x${l}`)>=0&&(u=a.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),h=!1),c&&!f&&(o.os="android",o.android=!0),(u||p||d)&&(o.os="ios",o.ios=!0),o}(e)),eh}function ih(){return th||(th=function(){const e=Nf(),t=rh();let n=!1;function r(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(r()){const t=String(e.navigator.userAgent);if(t.includes("Version/")){const[e,r]=t.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));n=e<16||16===e&&r<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r();return{isSafari:n||a,needPerspectiveFix:n,need3dFix:a||i&&t.ios,isWebView:i}}()),th}var ah={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!==typeof t)return r;const i=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!==typeof t)return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!==typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{"undefined"===typeof t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];"string"===typeof a[0]||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(r,[t,...n])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(r,n)}))})),e}};const oh=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};const sh=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};const lh=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())}))),t&&t.remove()}},ch=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},uh=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const n=i,a=[n-t];return a.push(...Array.from({length:t}).map(((e,t)=>n+r+t))),void e.slides.forEach(((t,n)=>{a.includes(t.column)&&ch(e,n)}))}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const t=(o%n+n)%n;(t<i||t>a)&&ch(e,t)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&ch(e,o)};var dh={updateSize:function(){const e=this;let t,n;const r=e.el;t="undefined"!==typeof e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n="undefined"!==typeof e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(qf(r,"padding-left")||0,10)-parseInt(qf(r,"padding-right")||0,10),n=n-parseInt(qf(r,"padding-top")||0,10)-parseInt(qf(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=Uf(i,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:u.length;let p=[];const f=[],h=[];let m=n.slidesOffsetBefore;"function"===typeof m&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;"function"===typeof g&&(g=n.slidesOffsetAfter.call(e));const x=e.snapGrid.length,y=e.slidesGrid.length;let v=n.spaceBetween,b=-m,w=0,S=0;if("undefined"===typeof a)return;"string"===typeof v&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*a:"string"===typeof v&&(v=parseFloat(v)),e.virtualSize=-v,u.forEach((e=>{o?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),n.centeredSlides&&n.cssMode&&(Gf(r,"--swiper-centered-offset-before",""),Gf(r,"--swiper-centered-offset-after",""));const E=n.grid&&n.grid.rows>1&&e.grid;let k;E?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();const C="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter((e=>"undefined"!==typeof n.breakpoints[e].slidesPerView)).length>0;for(let T=0;T<d;T+=1){let r;if(k=0,u[T]&&(r=u[T]),E&&e.grid.updateSlide(T,r,u),!u[T]||"none"!==qf(r,"display")){if("auto"===n.slidesPerView){C&&(u[T].style[e.getDirectionLabel("width")]="");const i=getComputedStyle(r),a=r.style.transform,o=r.style.webkitTransform;if(a&&(r.style.transform="none"),o&&(r.style.webkitTransform="none"),n.roundLengths)k=e.isHorizontal()?Qf(r,"width",!0):Qf(r,"height",!0);else{const e=t(i,"width"),n=t(i,"padding-left"),a=t(i,"padding-right"),o=t(i,"margin-left"),s=t(i,"margin-right"),l=i.getPropertyValue("box-sizing");if(l&&"border-box"===l)k=e+o+s;else{const{clientWidth:t,offsetWidth:i}=r;k=e+n+a+o+s+(i-t)}}a&&(r.style.transform=a),o&&(r.style.webkitTransform=o),n.roundLengths&&(k=Math.floor(k))}else k=(a-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(k=Math.floor(k)),u[T]&&(u[T].style[e.getDirectionLabel("width")]=`${k}px`);u[T]&&(u[T].swiperSlideSize=k),h.push(k),n.centeredSlides?(b=b+k/2+w/2+v,0===w&&0!==T&&(b=b-a/2-v),0===T&&(b=b-a/2-v),Math.abs(b)<.001&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&p.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&p.push(b),f.push(b),b=b+k+v),e.virtualSize+=k+v,w=k,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+g,o&&s&&("slide"===n.effect||"coverflow"===n.effect)&&(r.style.width=`${e.virtualSize+v}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),E&&e.grid.updateWrapperSize(k,p),!n.centeredSlides){const t=[];for(let r=0;r<p.length;r+=1){let i=p[r];n.roundLengths&&(i=Math.floor(i)),p[r]<=e.virtualSize-a&&t.push(i)}p=t,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(l&&n.loop){const t=h[0]+v;if(n.slidesPerGroup>1){const r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)p.push(p[p.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)1===n.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==v){const t=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter(((e,t)=>!(n.cssMode&&!n.loop)||t!==u.length-1)).forEach((e=>{e.style[t]=`${v}px`}))}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;h.forEach((t=>{e+=t+(v||0)})),e-=v;const t=e-a;p=p.map((e=>e<=0?-m:e>t?t+g:e))}if(n.centerInsufficientSlides){let e=0;h.forEach((t=>{e+=t+(v||0)})),e-=v;const t=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(e+t<a){const n=(a-e-t)/2;p.forEach(((e,t)=>{p[t]=e-n})),f.forEach(((e,t)=>{f[t]=e+n}))}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:f,slidesSizesGrid:h}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Gf(r,"--swiper-centered-offset-before",-p[0]+"px"),Gf(r,"--swiper-centered-offset-after",e.size/2-h[h.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==c&&e.emit("slidesLengthChange"),p.length!==x&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==y&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&("slide"===n.effect||"fade"===n.effect)){const t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);d<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i,a=0;"number"===typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(i=0;i<n.length;i+=1)if("undefined"!==typeof n[i]){const e=n[i].offsetHeight;a=e>a?e:a}(a||0===a)&&(t.wrapperEl.style.height=`${a}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(0===r.length)return;"undefined"===typeof r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;"string"===typeof s&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:"string"===typeof s&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const e=r[l];let c=e.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-c)/(e.swiperSlideSize+s),p=-(o-c),f=p+t.slidesSizesGrid[l],h=p>=0&&p<=t.size-t.slidesSizesGrid[l],m=p>=0&&p<t.size-1||f>1&&f<=t.size||p<=0&&f>=t.size;m&&(t.visibleSlides.push(e),t.visibleSlidesIndexes.push(l)),oh(e,m,n.slideVisibleClass),oh(e,h,n.slideFullyVisibleClass),e.progress=i?-u:u,e.originalProgress=i?-d:d}},updateProgress:function(e){const t=this;if("undefined"===typeof e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,c=o;if(0===r)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);s=l>=i?(l-i)/o:(l+o-a)/o,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!a||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>Uf(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let l,c,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${t}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter((e=>e.column===i))[0],u=t.filter((e=>e.column===i+1))[0],c=t.filter((e=>e.column===i-1))[0]):l=t[i];l&&(o||(u=function(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),c=function(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&0===!c&&(c=t[t.length-1]))),t.forEach((e=>{sh(e,e===l,n.slideActiveClass),sh(e,e===u,n.slideNextClass),sh(e,e===c,n.slidePrevClass)})),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if("undefined"===typeof c&&(c=function(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)"undefined"!==typeof t[a+1]?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||"undefined"===typeof i)&&(i=0),i}(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{const e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop)return void(l!==s&&(t.snapIndex=l,t.emit("snapIndexChange")));if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=u(c));const d=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&i.virtual.enabled&&i.loop)p=u(c);else if(d){const e=t.slides.filter((e=>e.column===c))[0];let n=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),p=Math.floor(n/i.grid.rows)}else if(t.slides[c]){const e=t.slides[c].getAttribute("data-swiper-slide-index");p=e?parseInt(e,10):c}else p=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:p,previousIndex:a,activeIndex:c}),t.initialized&&uh(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach((e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)}));let a,o=!1;if(i)for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,a=s;break}if(!i||!o)return n.clickedSlide=void 0,void(n.clickedIndex=void 0);n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a,r.slideToClickedSlide&&void 0!==n.clickedIndex&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}};var ph={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:n,translate:r,wrapperEl:i}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let a=$f(i,e);return a+=this.cssOverflowAdjustment(),n&&(a=-a),a||0},setTranslate:function(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let s,l=0,c=0;n.isHorizontal()?l=r?-e:e:c=e,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();s=0===u?0:(e-n.minTranslate())/u,s!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,n,r,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===r&&(r=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),c=a.maxTranslate();let u;if(u=r&&e>l?l:r&&e<c?c:e,a.updateProgress(u),o.cssMode){const e=a.isHorizontal();if(0===t)s[e?"scrollLeft":"scrollTop"]=-u;else{if(!a.support.smoothScroll)return Hf({swiper:a,targetPosition:-u,side:e?"left":"top"}),!0;s.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(a.setTransition(0),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}};function fh(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let s=r;if(s||(s=a>o?"next":a<o?"prev":"reset"),t.emit(`transition${i}`),n&&a!==o){if("reset"===s)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===s?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var hh={setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=0===e?"0ms":""),n.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),fh({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),fh({swiper:n,runCallbacks:e,direction:t,step:"End"}))}};var mh={slideTo:function(e,t,n,r,i){void 0===e&&(e=0),void 0===n&&(n=!0),"string"===typeof e&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:f,enabled:h}=a;if(!h&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;"undefined"===typeof t&&(t=a.params.speed);const m=Math.min(a.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/a.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const x=-l[g];if(s.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){const e=-Math.floor(100*x),t=Math.floor(100*c[v]),n=Math.floor(100*c[v+1]);"undefined"!==typeof c[v+1]?e>=t&&e<n-(n-t)/2?o=v:e>=t&&e<n&&(o=v+1):e>=t&&(o=v)}if(a.initialized&&o!==d){if(!a.allowSlideNext&&(p?x>a.translate&&x>a.minTranslate():x<a.translate&&x<a.minTranslate()))return!1;if(!a.allowSlidePrev&&x>a.translate&&x>a.maxTranslate()&&(d||0)!==o)return!1}let y;if(o!==(u||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(x),y=o>d?"next":o<d?"prev":"reset",p&&-x===a.translate||!p&&x===a.translate)return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==s.effect&&a.setTranslate(x),"reset"!==y&&(a.transitionStart(n,y),a.transitionEnd(n,y)),!1;if(s.cssMode){const e=a.isHorizontal(),n=p?x:-x;if(0===t){const t=a.virtual&&a.params.virtual.enabled;t&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),t&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=n}))):f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1}))}else{if(!a.support.smoothScroll)return Hf({swiper:a,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(x),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,y),0===t?a.transitionEnd(n,y):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,y))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,n,r){if(void 0===e&&(e=0),void 0===n&&(n=!0),"string"===typeof e){e=parseInt(e,10)}const i=this;if(i.destroyed)return;"undefined"===typeof t&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){const t=o*i.params.grid.rows;e=i.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===t))[0].column}else e=i.getSlideIndexByData(o);const t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n}=i.params;let s=i.params.slidesPerView;"auto"===s?s=i.slidesPerViewDynamic():(s=Math.ceil(parseFloat(i.params.slidesPerView,10)),n&&s%2===0&&(s+=1));let l=t-e<s;if(n&&(l=l||e<Math.ceil(s/2)),r&&n&&"auto"!==i.params.slidesPerView&&!a&&(l=!1),l){const r=n?e<i.activeIndex?"prev":"next":e-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:r,slideTo:!0,activeSlideIndex:"next"===r?e+1:e-t+1,slideRealIndex:"next"===r?i.realIndex:void 0})}if(a){const e=o*i.params.grid.rows;o=i.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame((()=>{i.slideTo(o,t,n,r)})),i},slideNext:function(e,t,n){void 0===t&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;"undefined"===typeof e&&(e=r.params.speed);let s=a.slidesPerGroup;"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<a.slidesPerGroupSkip?1:s,c=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!c&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame((()=>{r.slideTo(r.activeIndex+l,e,t,n)})),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)},slidePrev:function(e,t,n){void 0===t&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;"undefined"===typeof e&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=d(s?r.translate:-r.translate),f=a.map((e=>d(e)));let h=a[f.indexOf(p)-1];if("undefined"===typeof h&&i.cssMode){let e;a.forEach(((t,n)=>{p>=t&&(e=n)})),"undefined"!==typeof e&&(h=a[e>0?e-1:e])}let m=0;if("undefined"!==typeof h&&(m=o.indexOf(h),m<0&&(m=r.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&r.isBeginning){const i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return i.loop&&0===r.activeIndex&&i.cssMode?(requestAnimationFrame((()=>{r.slideTo(m,e,t,n)})),!0):r.slideTo(m,e,t,n)},slideReset:function(e,t,n){void 0===t&&(t=!0);const r=this;if(!r.destroyed)return"undefined"===typeof e&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)},slideToClosest:function(e,t,n,r){void 0===t&&(t=!0),void 0===r&&(r=.5);const i=this;if(i.destroyed)return;"undefined"===typeof e&&(e=i.params.speed);let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const e=i.snapGrid[s];l-e>(i.snapGrid[s+1]-e)*r&&(a+=i.params.slidesPerGroup)}else{const e=i.snapGrid[s-1];l-e<=(i.snapGrid[s]-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)},slideToClickedSlide:function(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,a=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?a<e.loopedSlides-r/2||a>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),a=e.getSlideIndex(Uf(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Lf((()=>{e.slideTo(a)}))):e.slideTo(a):a>e.slides.length-r?(e.loopFix(),a=e.getSlideIndex(Uf(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Lf((()=>{e.slideTo(a)}))):e.slideTo(a)}else e.slideTo(a)}};var gh={loopCreate:function(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{Uf(r,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)}))},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,c=e=>{for(let r=0;r<e;r+=1){const e=t.isElement?Kf("swiper-slide",[n.slideBlankClass]):Kf("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(e)}};if(s){if(n.loopAddBlankSlides){c(o-t.slides.length%o),t.recalcSlides(),t.updateSlides()}else Wf("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){c(n.grid.rows-t.slides.length%n.grid.rows),t.recalcSlides(),t.updateSlides()}else Wf("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:s}=void 0===e?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:f}=l,{centeredSlides:h}=f;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled)return n&&(f.centeredSlides||0!==l.snapIndex?f.centeredSlides&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0):l.slideTo(l.virtual.slides.length,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,void l.emit("loopFix");let m=f.slidesPerView;"auto"===m?m=l.slidesPerViewDynamic():(m=Math.ceil(parseFloat(f.slidesPerView,10)),h&&m%2===0&&(m+=1));const g=f.slidesPerGroupAuto?m:f.slidesPerGroup;let x=g;x%g!==0&&(x+=g-x%g),x+=f.loopAdditionalSlides,l.loopedSlides=x;const y=l.grid&&f.grid&&f.grid.rows>1;c.length<m+x?Wf("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&"row"===f.grid.fill&&Wf("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],b=[];let w=l.activeIndex;"undefined"===typeof a?a=l.getSlideIndex(c.filter((e=>e.classList.contains(f.slideActiveClass)))[0]):w=a;const S="next"===r||!r,E="prev"===r||!r;let k=0,C=0;const T=y?Math.ceil(c.length/f.grid.rows):c.length,j=(y?c[a].column:a)+(h&&"undefined"===typeof i?-m/2+.5:0);if(j<x){k=Math.max(x-j,g);for(let e=0;e<x-j;e+=1){const t=e-Math.floor(e/T)*T;if(y){const e=T-t-1;for(let t=c.length-1;t>=0;t-=1)c[t].column===e&&v.push(t)}else v.push(T-t-1)}}else if(j+m>T-x){C=Math.max(j-(T-2*x),g);for(let e=0;e<C;e+=1){const t=e-Math.floor(e/T)*T;y?c.forEach(((e,n)=>{e.column===t&&b.push(n)})):b.push(t)}}if(l.__preventObserver__=!0,requestAnimationFrame((()=>{l.__preventObserver__=!1})),E&&v.forEach((e=>{c[e].swiperLoopMoveDOM=!0,p.prepend(c[e]),c[e].swiperLoopMoveDOM=!1})),S&&b.forEach((e=>{c[e].swiperLoopMoveDOM=!0,p.append(c[e]),c[e].swiperLoopMoveDOM=!1})),l.recalcSlides(),"auto"===f.slidesPerView?l.updateSlides():y&&(v.length>0&&E||b.length>0&&S)&&l.slides.forEach(((e,t)=>{l.grid.updateSlide(t,e,l.slides)})),f.watchSlidesProgress&&l.updateSlidesOffset(),n)if(v.length>0&&E){if("undefined"===typeof t){const e=l.slidesGrid[w],t=l.slidesGrid[w+k]-e;s?l.setTranslate(l.translate-t):(l.slideTo(w+Math.ceil(k),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else if(i){const e=y?v.length/f.grid.rows:v.length;l.slideTo(l.activeIndex+e,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(b.length>0&&S)if("undefined"===typeof t){const e=l.slidesGrid[w],t=l.slidesGrid[w-C]-e;s?l.setTranslate(l.translate-t):(l.slideTo(w-C,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else{const e=y?b.length/f.grid.rows:b.length;l.slideTo(l.activeIndex-e,0,!1,!0)}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const e={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===f.slidesPerView&&n})})):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...e,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView&&n})}l.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t="undefined"===typeof e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};var xh={setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}};function yh(e,t,n){const r=Nf(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return!a||!(n<=o||n>=r.innerWidth-o)||"prevent"===a&&(t.preventDefault(),!0)}function vh(e){const t=this,n=zf();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if("pointerdown"===r.type){if(null!==i.pointerId&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else"touchstart"===r.type&&1===r.targetTouches.length&&(i.touchId=r.targetTouches[0].identifier);if("touchstart"===r.type)return void yh(t,r,r.targetTouches[0].pageX);const{params:a,touches:o,enabled:s}=t;if(!s)return;if(!a.simulateTouch&&"mouse"===r.pointerType)return;if(t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=r.target;if("wrapper"===a.touchEventsTarget&&!function(e,t){const n=t.contains(e);if(!n&&t instanceof HTMLSlotElement)return[...t.assignedElements()].includes(e);return n}(l,t.wrapperEl))return;if("which"in r&&3===r.which)return;if("button"in r&&r.button>0)return;if(i.isTouched&&i.isMoved)return;const c=!!a.noSwipingClass&&""!==a.noSwipingClass,u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,p=!(!r.target||!r.target.shadowRoot);if(a.noSwiping&&(p?function(e,t){return void 0===t&&(t=this),function t(n){if(!n||n===zf()||n===Nf())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(e);return r||n.getRootNode?r||t(n.getRootNode().host):null}(t)}(d,l):l.closest(d)))return void(t.allowClick=!0);if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const f=o.currentX,h=o.currentY;if(!yh(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=h,i.touchStartTime=Df(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let m=!0;l.matches(i.focusableElements)&&(m=!1,"SELECT"===l.nodeName&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const g=m&&t.allowTouchMove&&a.touchStartPreventDefault;!a.touchStartForcePreventDefault&&!g||l.isContentEditable||r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function bh(e){const t=zf(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let l,c=e;if(c.originalEvent&&(c=c.originalEvent),"pointermove"===c.type){if(null!==r.touchId)return;if(c.pointerId!==r.pointerId)return}if("touchmove"===c.type){if(l=[...c.changedTouches].filter((e=>e.identifier===r.touchId))[0],!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched)return void(r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",c));const u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper)return a.startX=u,void(a.startY=d);if(!n.allowTouchMove)return c.target.matches(r.focusableElements)||(n.allowClick=!1),void(r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=Df()));if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements))return r.isMoved=!0,void(n.allowClick=!1);r.allowTouchCallbacks&&n.emit("touchMove",c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;const p=a.currentX-a.startX,f=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if("undefined"===typeof r.isScrolling){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",c),"undefined"===typeof r.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(r.startMoving=!0)),r.isScrolling||"touchmove"===c.type&&r.preventTouchMoveFromPointerMove)return void(r.isTouched=!1);if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let h=n.isHorizontal()?p:f,m=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(h=Math.abs(h)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),a.diff=h,h*=i.touchRatio,o&&(h=-h,m=-m);const g=n.touchesDirection;n.swipeDirection=h>0?"prev":"next",n.touchesDirection=m>0?"prev":"next";const x=n.params.loop&&!i.cssMode,y="next"===n.touchesDirection&&n.allowSlideNext||"prev"===n.touchesDirection&&n.allowSlidePrev;if(!r.isMoved){if(x&&y&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,!i.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",c)}if((new Date).getTime(),r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&x&&y&&Math.abs(h)>=1)return Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,void(r.startTranslate=r.currentTranslate);n.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=h+r.startTranslate;let v=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),h>0?(x&&y&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-("auto"!==i.slidesPerView&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(v=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+h)**b))):h<0&&(x&&y&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+("auto"!==i.slidesPerView&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===i.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(v=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-h)**b))),v&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),i.threshold>0){if(!(Math.abs(h)>i.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,void(a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function wh(e){const t=this,n=t.touchEventsData;let r,i=e;i.originalEvent&&(i=i.originalEvent);if("touchend"===i.type||"touchcancel"===i.type){if(r=[...i.changedTouches].filter((e=>e.identifier===n.touchId))[0],!r||r.identifier!==n.touchId)return}else{if(null!==n.touchId)return;if(i.pointerId!==n.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)){if(!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return}n.pointerId=null,n.touchId=null;const{params:a,touches:o,rtlTranslate:s,slidesGrid:l,enabled:c}=t;if(!c)return;if(!a.simulateTouch&&"mouse"===i.pointerType)return;if(n.allowTouchCallbacks&&t.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);a.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=Df(),d=u-n.touchStartTime;if(t.allowClick){const e=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(e&&e[0]||i.target,e),t.emit("tap click",i),d<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(n.lastClickTime=Df(),Lf((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===o.diff&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let p;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,p=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p});const f=p>=-t.maxTranslate()&&!t.params.loop;let h=0,m=t.slidesSizesGrid[0];for(let b=0;b<l.length;b+=b<a.slidesPerGroupSkip?1:a.slidesPerGroup){const e=b<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;"undefined"!==typeof l[b+e]?(f||p>=l[b]&&p<l[b+e])&&(h=b,m=l[b+e]-l[b]):(f||p>=l[b])&&(h=b,m=l[l.length-1]-l[l.length-2])}let g=null,x=null;a.rewind&&(t.isBeginning?x=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const y=(p-l[h])/m,v=h<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:h+v):t.slideTo(h)),"prev"===t.swipeDirection&&(y>1-a.longSwipesRatio?t.slideTo(h+v):null!==x&&y<0&&Math.abs(y)>a.longSwipesRatio?t.slideTo(x):t.slideTo(h))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(h+v):t.slideTo(h):("next"===t.swipeDirection&&t.slideTo(null!==g?g:h+v),"prev"===t.swipeDirection&&t.slideTo(null!==x?x:h))}}function Sh(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||s?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function Eh(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function kh(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const a=e.maxTranslate()-e.minTranslate();i=0===a?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Ch(e){const t=this;lh(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function Th(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const jh=(e,t)=>{const n=zf(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;i&&"string"!==typeof i&&(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&a[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Sh,!0):e[c]("observerUpdate",Sh,!0),i[l]("load",e.onLoad,{capture:!0}))};var Oh={attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=vh.bind(e),e.onTouchMove=bh.bind(e),e.onTouchEnd=wh.bind(e),e.onDocumentTouchStart=Th.bind(e),t.cssMode&&(e.onScroll=kh.bind(e)),e.onClick=Eh.bind(e),e.onLoad=Ch.bind(e),jh(e,"on")},detachEvents:function(){jh(this,"off")}};const _h=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Ph={setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&0===Object.keys(a).length)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const s=(o in a?a[o]:void 0)||e.originalParams,l=_h(e,r),c=_h(e,s),u=e.params.grabCursor,d=s.grabCursor,p=r.enabled;l&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(s.grid.fill&&"column"===s.grid.fill||!s.grid.fill&&"column"===r.grid.fill)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),u&&!d?e.unsetGrabCursor():!u&&d&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach((t=>{if("undefined"===typeof s[t])return;const n=r[t]&&r[t].enabled,i=s[t]&&s[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const f=s.direction&&s.direction!==r.direction,h=r.loop&&(s.slidesPerView!==r.slidesPerView||f),m=r.loop;f&&n&&e.changeDirection(),Bf(e.params,s);const g=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!g?e.disable():!p&&g&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",s),n&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!m&&x?(e.loopCreate(t),e.updateSlides()):m&&!x&&e.loopDestroy()),e.emit("breakpoint",s)},getBreakpoint:function(e,t,n){if(void 0===t&&(t="window"),!e||"container"===t&&!n)return;let r=!1;const i=Nf(),a="window"===t?i.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"===typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:a*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let s=0;s<o.length;s+=1){const{point:e,value:a}=o[s];"window"===t?i.matchMedia(`(min-width: ${a}px)`).matches&&(r=e):a<=n.clientWidth&&(r=e)}return r||"max"}};var Ah={addClasses:function(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"===typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"===typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e&&"string"!==typeof e&&(e.classList.remove(...t),this.emitContainerClasses())}};var Mh={checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},Rh={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function zh(e,t){return function(n){void 0===n&&(n={});const r=Object.keys(n)[0],i=n[r];"object"===typeof i&&null!==i?(!0===e[r]&&(e[r]={enabled:!0}),"navigation"===r&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),r in e&&"enabled"in i?("object"!==typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),Bf(t,n)):Bf(t,n)):Bf(t,n)}}const Ih={eventsEmitter:ah,update:dh,translate:ph,transition:hh,slide:mh,loop:gh,grabCursor:xh,events:Oh,breakpoints:Ph,checkOverflow:Mh,classes:Ah},Nh={};class Lh{constructor(){let e,t;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];1===r.length&&r[0].constructor&&"Object"===Object.prototype.toString.call(r[0]).slice(8,-1)?t=r[0]:[e,t]=r,t||(t={}),t=Bf({},t),e&&!t.el&&(t.el=e);const a=zf();if(t.el&&"string"===typeof t.el&&a.querySelectorAll(t.el).length>1){const e=[];return a.querySelectorAll(t.el).forEach((n=>{const r=Bf({},t,{el:n});e.push(new Lh(r))})),e}const o=this;o.__swiper__=!0,o.support=nh(),o.device=rh({userAgent:t.userAgent}),o.browser=ih(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const s={};o.modules.forEach((e=>{e({params:t,swiper:o,extendParams:zh(t,s),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})}));const l=Bf({},Rh,s);return o.params=Bf({},l,Nh,t),o.originalParams=Bf({},o.params),o.passedParams=Bf({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach((e=>{o.on(e,o.params.on[e])})),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===o.params.direction,isVertical:()=>"vertical"===o.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=Yf(Uf(t,`.${n.slideClass}, swiper-slide`)[0]);return Yf(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=Uf(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,"undefined"===typeof t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this;let l=1;if("number"===typeof n.slidesPerView)return n.slidesPerView;if(n.centeredSlides){let e,t=r[s]?Math.ceil(r[s].swiperSlideSize):0;for(let n=s+1;n<r.length;n+=1)r[n]&&!e&&(t+=Math.ceil(r[n].swiperSlideSize),l+=1,t>o&&(e=!0));for(let n=s-1;n>=0;n-=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let c=s+1;c<r.length;c+=1){(t?i[c]+a[c]-i[s]<o:i[c]-i[s]<o)&&(l+=1)}else for(let c=s-1;c>=0;c-=1){i[s]-i[c]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&lh(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if(("auto"===n.slidesPerView||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"===typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(r())}return Uf(n,r())[0]})();return!i&&t.params.createElements&&(i=Kf("div",t.params.wrapperClass),n.append(i),Uf(n,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===qf(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===qf(n,"direction")),wrongRTL:"-webkit-box"===qf(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach((e=>{e.complete?lh(t,e):e.addEventListener("load",(e=>{lh(t,e.target)}))})),uh(t),t.initialized=!0,uh(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return"undefined"===typeof n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&"string"!==typeof i&&i.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el&&"string"!==typeof n.el&&(n.el.swiper=null),function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(n){}try{delete t[e]}catch(n){}}))}(n)),n.destroyed=!0),null}static extendDefaults(e){Bf(Nh,e)}static get extendedDefaults(){return Nh}static get defaults(){return Rh}static installModule(e){Lh.prototype.__modules__||(Lh.prototype.__modules__=[]);const t=Lh.prototype.__modules__;"function"===typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Lh.installModule(e))),Lh):(Lh.installModule(e),Lh)}}Object.keys(Ih).forEach((e=>{Object.keys(Ih[e]).forEach((t=>{Lh.prototype[t]=Ih[e][t]}))})),Lh.use([function(e){let{swiper:t,on:n,emit:r}=e;const i=Nf();let a=null,o=null;const s=()=>{t&&!t.destroyed&&t.initialized&&(r("beforeResize"),r("resize"))},l=()=>{t&&!t.destroyed&&t.initialized&&r("orientationchange")};n("init",(()=>{t.params.resizeObserver&&"undefined"!==typeof i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(a=new ResizeObserver((e=>{o=i.requestAnimationFrame((()=>{const{width:n,height:r}=t;let i=n,a=r;e.forEach((e=>{let{contentBoxSize:n,contentRect:r,target:o}=e;o&&o!==t.el||(i=r?r.width:(n[0]||n).inlineSize,a=r?r.height:(n[0]||n).blockSize)})),i===n&&a===r||s()}))})),a.observe(t.el)):(i.addEventListener("resize",s),i.addEventListener("orientationchange",l))})),n("destroy",(()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",l)}))},function(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=Nf(),s=function(e,n){void 0===n&&(n={});const r=new(o.MutationObserver||o.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const n=function(){i("observerUpdate",e[0])};o.requestAnimationFrame?o.requestAnimationFrame(n):o.setTimeout(n,0)}));r.observe(e,{attributes:"undefined"===typeof n.attributes||n.attributes,childList:t.isElement||("undefined"===typeof n.childList||n).childList,characterData:"undefined"===typeof n.characterData||n.characterData}),a.push(r)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=Xf(t.hostEl);for(let t=0;t<e.length;t+=1)s(e[t])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}})),r("destroy",(()=>{a.forEach((e=>{e.disconnect()})),a.splice(0,a.length)}))}]);const Dh=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function $h(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)&&!e.__swiper__}function Fh(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter((e=>n.indexOf(e)<0)).forEach((n=>{"undefined"===typeof e[n]?e[n]=t[n]:$h(t[n])&&$h(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:Fh(e[n],t[n]):e[n]=t[n]}))}function Vh(e){return void 0===e&&(e={}),e.navigation&&"undefined"===typeof e.navigation.nextEl&&"undefined"===typeof e.navigation.prevEl}function Bh(e){return void 0===e&&(e={}),e.pagination&&"undefined"===typeof e.pagination.el}function Gh(e){return void 0===e&&(e={}),e.scrollbar&&"undefined"===typeof e.scrollbar.el}function Hh(e){void 0===e&&(e="");const t=e.split(" ").map((e=>e.trim())).filter((e=>!!e)),n=[];return t.forEach((e=>{n.indexOf(e)<0&&n.push(e)})),n.join(" ")}function Uh(e){return void 0===e&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function Wh(){return Wh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wh.apply(this,arguments)}function Kh(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function qh(t){const n=[];return e.Children.toArray(t).forEach((e=>{Kh(e)?n.push(e):e.props&&e.props.children&&qh(e.props.children).forEach((e=>n.push(e)))})),n}function Yh(t){const n=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return e.Children.toArray(t).forEach((e=>{if(Kh(e))n.push(e);else if(e.props&&e.props.slot&&r[e.props.slot])r[e.props.slot].push(e);else if(e.props&&e.props.children){const t=qh(e.props.children);t.length>0?t.forEach((e=>n.push(e))):r["container-end"].push(e)}else r["container-end"].push(e)})),{slides:n,slots:r}}function Xh(t,n){return"undefined"===typeof window?(0,e.useEffect)(t,n):(0,e.useLayoutEffect)(t,n)}const Qh=(0,e.createContext)(null),Jh=(0,e.createContext)(null),Zh=(0,e.forwardRef)((function(t,n){let{className:r,tag:i="div",wrapperTag:a="div",children:o,onSwiper:s,...l}=void 0===t?{}:t,c=!1;const[u,d]=(0,e.useState)("swiper"),[p,f]=(0,e.useState)(null),[h,m]=(0,e.useState)(!1),g=(0,e.useRef)(!1),x=(0,e.useRef)(null),y=(0,e.useRef)(null),v=(0,e.useRef)(null),b=(0,e.useRef)(null),w=(0,e.useRef)(null),S=(0,e.useRef)(null),E=(0,e.useRef)(null),k=(0,e.useRef)(null),{params:C,passedParams:T,rest:j,events:O}=function(e,t){void 0===e&&(e={}),void 0===t&&(t=!0);const n={on:{}},r={},i={};Fh(n,Rh),n._emitClasses=!0,n.init=!1;const a={},o=Dh.map((e=>e.replace(/_/,""))),s=Object.assign({},e);return Object.keys(s).forEach((s=>{"undefined"!==typeof e[s]&&(o.indexOf(s)>=0?$h(e[s])?(n[s]={},i[s]={},Fh(n[s],e[s]),Fh(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):0===s.search(/on[A-Z]/)&&"function"===typeof e[s]?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===n[e]&&(n[e]={}),!1===n[e]&&delete n[e]})),{params:n,passedParams:i,rest:a,events:r}}(l),{slides:_,slots:P}=Yh(o),A=()=>{m(!h)};Object.assign(C.on,{_containerClasses(e,t){d(t)}});const M=()=>{Object.assign(C.on,O),c=!0;const e={...C};if(delete e.wrapperClass,y.current=new Lh(e),y.current.virtual&&y.current.params.virtual.enabled){y.current.virtual.slides=_;const e={cache:!1,slides:_,renderExternal:f,renderExternalUpdate:!1};Fh(y.current.params.virtual,e),Fh(y.current.originalParams.virtual,e)}};x.current||M(),y.current&&y.current.on("_beforeBreakpoint",A);return(0,e.useEffect)((()=>()=>{y.current&&y.current.off("_beforeBreakpoint",A)})),(0,e.useEffect)((()=>{!g.current&&y.current&&(y.current.emitSlidesClasses(),g.current=!0)})),Xh((()=>{if(n&&(n.current=x.current),x.current)return y.current.destroyed&&M(),function(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;Vh(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),Bh(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),Gh(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}({el:x.current,nextEl:w.current,prevEl:S.current,paginationEl:E.current,scrollbarEl:k.current,swiper:y.current},C),s&&!y.current.destroyed&&s(y.current),()=>{y.current&&!y.current.destroyed&&y.current.destroy(!0,!1)}}),[]),Xh((()=>{!c&&O&&y.current&&Object.keys(O).forEach((e=>{y.current.on(e,O[e])}));const e=function(e,t,n,r,i){const a=[];if(!t)return a;const o=e=>{a.indexOf(e)<0&&a.push(e)};if(n&&r){const e=r.map(i),t=n.map(i);e.join("")!==t.join("")&&o("children"),r.length!==n.length&&o("children")}return Dh.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,""))).forEach((n=>{if(n in e&&n in t)if($h(e[n])&&$h(t[n])){const r=Object.keys(e[n]),i=Object.keys(t[n]);r.length!==i.length?o(n):(r.forEach((r=>{e[n][r]!==t[n][r]&&o(n)})),i.forEach((r=>{e[n][r]!==t[n][r]&&o(n)})))}else e[n]!==t[n]&&o(n)})),a}(T,v.current,_,b.current,(e=>e.key));return v.current=T,b.current=_,e.length&&y.current&&!y.current.destroyed&&function(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const c=i.filter((e=>"children"!==e&&"direction"!==e&&"wrapperClass"!==e)),{params:u,pagination:d,navigation:p,scrollbar:f,virtual:h,thumbs:m}=t;let g,x,y,v,b,w,S,E;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(g=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(x=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||!1===u.pagination)&&d&&!d.el&&(y=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(u.scrollbar||!1===u.scrollbar)&&f&&!f.el&&(v=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(u.navigation||!1===u.navigation)&&p&&!p.prevEl&&!p.nextEl&&(b=!0);const k=e=>{t[e]&&(t[e].destroy(),"navigation"===e?(t.isElement&&(t[e].prevEl.remove(),t[e].nextEl.remove()),u[e].prevEl=void 0,u[e].nextEl=void 0,t[e].prevEl=void 0,t[e].nextEl=void 0):(t.isElement&&t[e].el.remove(),u[e].el=void 0,t[e].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!r.loop?w=!0:!u.loop&&r.loop?S=!0:E=!0),c.forEach((e=>{if($h(u[e])&&$h(r[e]))Object.assign(u[e],r[e]),"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e||!("enabled"in r[e])||r[e].enabled||k(e);else{const t=r[e];!0!==t&&!1!==t||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?u[e]=r[e]:!1===t&&k(e)}})),c.includes("controller")&&!x&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&n&&h&&u.virtual.enabled?(h.slides=n,h.update(!0)):i.includes("virtual")&&h&&u.virtual.enabled&&(n&&(h.slides=n),h.update(!0)),i.includes("children")&&n&&u.loop&&(E=!0),g&&m.init()&&m.update(!0);x&&(t.controller.control=u.controller.control),y&&(!t.isElement||l&&"string"!==typeof l||(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),v&&(!t.isElement||s&&"string"!==typeof s||(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),f.init(),f.updateSize(),f.setTranslate()),b&&(t.isElement&&(a&&"string"!==typeof a||(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),o&&"string"!==typeof o||(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(u.navigation.nextEl=a),o&&(u.navigation.prevEl=o),p.init(),p.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(w||E)&&t.loopDestroy(),(S||E)&&t.loopCreate(),t.update()}({swiper:y.current,slides:_,passedParams:T,changedParams:e,nextEl:w.current,prevEl:S.current,scrollbarEl:k.current,paginationEl:E.current}),()=>{O&&y.current&&Object.keys(O).forEach((e=>{y.current.off(e,O[e])}))}})),Xh((()=>{(e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())})(y.current)}),[p]),e.createElement(i,Wh({ref:x,className:Hh(`${u}${r?` ${r}`:""}`)},j),e.createElement(Jh.Provider,{value:y.current},P["container-start"],e.createElement(a,{className:Uh(C.wrapperClass)},P["wrapper-start"],C.virtual?function(t,n,r){if(!r)return null;const i=e=>{let t=e;return e<0?t=n.length+e:t>=n.length&&(t-=n.length),t},a=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${r.offset}px`}:{top:`${r.offset}px`},{from:o,to:s}=r,l=t.params.loop?-n.length:0,c=t.params.loop?2*n.length:n.length,u=[];for(let e=l;e<c;e+=1)e>=o&&e<=s&&u.push(n[i(e)]);return u.map(((n,r)=>e.cloneElement(n,{swiper:t,style:a,key:n.props.virtualIndex||n.key||`slide-${r}`})))}(y.current,_,p):_.map(((t,n)=>e.cloneElement(t,{swiper:y.current,swiperSlideIndex:n}))),P["wrapper-end"]),Vh(C)&&e.createElement(e.Fragment,null,e.createElement("div",{ref:S,className:"swiper-button-prev"}),e.createElement("div",{ref:w,className:"swiper-button-next"})),Gh(C)&&e.createElement("div",{ref:k,className:"swiper-scrollbar"}),Bh(C)&&e.createElement("div",{ref:E,className:"swiper-pagination"}),P["container-end"]))}));Zh.displayName="Swiper";const em=(0,e.forwardRef)((function(t,n){let{tag:r="div",children:i,className:a="",swiper:o,zoom:s,lazy:l,virtualIndex:c,swiperSlideIndex:u,...d}=void 0===t?{}:t;const p=(0,e.useRef)(null),[f,h]=(0,e.useState)("swiper-slide"),[m,g]=(0,e.useState)(!1);function x(e,t,n){t===p.current&&h(n)}Xh((()=>{if("undefined"!==typeof u&&(p.current.swiperSlideIndex=u),n&&(n.current=p.current),p.current&&o){if(!o.destroyed)return o.on("_slideClass",x),()=>{o&&o.off("_slideClass",x)};"swiper-slide"!==f&&h("swiper-slide")}})),Xh((()=>{o&&p.current&&!o.destroyed&&h(o.getSlideClasses(p.current))}),[o]);const y={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},v=()=>"function"===typeof i?i(y):i;return e.createElement(r,Wh({ref:p,className:Hh(`${f}${a?` ${a}`:""}`),"data-swiper-slide-index":c,onLoad:()=>{g(!0)}},d),s&&e.createElement(Qh.Provider,{value:y},e.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"===typeof s?s:void 0},v(),l&&!m&&e.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&e.createElement(Qh.Provider,{value:y},v(),l&&!m&&e.createElement("div",{className:"swiper-lazy-preloader"})))}));function tm(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function nm(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";let o;n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function c(e,n){const{bulletActiveClass:r}=t.params.pagination;e&&(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${r}-${n}`),(e=e[("prev"===n?"previous":"next")+"ElementSibling"])&&e.classList.add(`${r}-${n}-${n}`))}function u(e){const n=e.target.closest(tm(t.params.pagination.bulletClass));if(!n)return;e.preventDefault();const r=Yf(n)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===r)return;const e=(i=t.realIndex,a=r,o=t.slides.length,(a%=o)===1+(i%=o)?"next":a===i-1?"previous":void 0);"next"===e?t.slideNext():"previous"===e?t.slidePrev():t.slideToLoop(r)}else t.slideTo(r);var i,a,o}function d(){const e=t.rtl,n=t.params.pagination;if(l())return;let r,a,u=t.pagination.el;u=Jf(u);const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,p=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(a=t.previousRealIndex||0,r=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):"undefined"!==typeof t.snapIndex?(r=t.snapIndex,a=t.previousSnapIndex):(a=t.previousIndex||0,r=t.activeIndex||0),"bullets"===n.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let l,d,p;if(n.dynamicBullets&&(o=Qf(i[0],t.isHorizontal()?"width":"height",!0),u.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=o*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==a&&(s+=r-(a||0),s>n.dynamicMainBullets-1?s=n.dynamicMainBullets-1:s<0&&(s=0)),l=Math.max(r-s,0),d=l+(Math.min(i.length,n.dynamicMainBullets)-1),p=(d+l)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"===typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),u.length>1)i.forEach((e=>{const i=Yf(e);i===r?e.classList.add(...n.bulletActiveClass.split(" ")):t.isElement&&e.setAttribute("part","bullet"),n.dynamicBullets&&(i>=l&&i<=d&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),i===l&&c(e,"prev"),i===d&&c(e,"next"))}));else{const e=i[r];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),t.isElement&&i.forEach(((e,t)=>{e.setAttribute("part",t===r?"bullet-active":"bullet")})),n.dynamicBullets){const e=i[l],t=i[d];for(let r=l;r<=d;r+=1)i[r]&&i[r].classList.add(...`${n.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(t,"next")}}if(n.dynamicBullets){const r=Math.min(i.length,n.dynamicMainBullets+4),a=(o*r-o)/2-p*o,s=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?s:"top"]=`${a}px`}))}}u.forEach(((e,a)=>{if("fraction"===n.type&&(e.querySelectorAll(tm(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(r+1)})),e.querySelectorAll(tm(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(p)}))),"progressbar"===n.type){let i;i=n.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(r+1)/p;let o=1,s=1;"horizontal"===i?o=a:s=a,e.querySelectorAll(tm(n.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${s})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(e.innerHTML=n.renderCustom(t,r+1,p),0===a&&i("paginationRender",e)):(0===a&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](n.lockClass)}))}function p(){const e=t.params.pagination;if(l())return;const n=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let r=t.pagination.el;r=Jf(r);let a="";if("bullets"===e.type){let r=t.params.loop?Math.ceil(n/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)e.renderBullet?a+=e.renderBullet.call(t,n,e.bulletClass):a+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(a=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(a=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],r.forEach((n=>{"custom"!==e.type&&(n.innerHTML=a||""),"bullets"===e.type&&t.pagination.bullets.push(...n.querySelectorAll(tm(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",r[0])}function f(){t.params.pagination=function(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach((i=>{if(!n[i]&&!0===n.auto){let a=Uf(e.el,`.${r[i]}`)[0];a||(a=Kf("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}})),n}(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let n;"string"===typeof e.el&&t.isElement&&(n=t.el.querySelector(e.el)),n||"string"!==typeof e.el||(n=[...document.querySelectorAll(e.el)]),n||(n=e.el),n&&0!==n.length&&(t.params.uniqueNavElements&&"string"===typeof e.el&&Array.isArray(n)&&n.length>1&&(n=[...t.el.querySelectorAll(e.el)],n.length>1&&(n=n.filter((e=>Xf(e,".swiper")[0]===t.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(t.pagination,{el:n}),n=Jf(n),n.forEach((n=>{"bullets"===e.type&&e.clickable&&n.classList.add(...(e.clickableClass||"").split(" ")),n.classList.add(e.modifierClass+e.type),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(n.classList.add(`${e.modifierClass}${e.type}-dynamic`),s=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&n.classList.add(e.progressbarOppositeClass),e.clickable&&n.addEventListener("click",u),t.enabled||n.classList.add(e.lockClass)})))}function h(){const e=t.params.pagination;if(l())return;let n=t.pagination.el;n&&(n=Jf(n),n.forEach((n=>{n.classList.remove(e.hiddenClass),n.classList.remove(e.modifierClass+e.type),n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(n.classList.remove(...(e.clickableClass||"").split(" ")),n.removeEventListener("click",u))}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}r("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:n}=t.pagination;n=Jf(n),n.forEach((n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),r("init",(()=>{!1===t.params.pagination.enabled?m():(f(),p(),d())})),r("activeIndexChange",(()=>{"undefined"===typeof t.snapIndex&&d()})),r("snapIndexChange",(()=>{d()})),r("snapGridLengthChange",(()=>{p(),d()})),r("destroy",(()=>{h()})),r("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=Jf(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),r("lock unlock",(()=>{d()})),r("click",((e,n)=>{const r=n.target,a=Jf(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&a&&a.length>0&&!r.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&r===t.navigation.nextEl||t.navigation.prevEl&&r===t.navigation.prevEl))return;const e=a[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),a.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const m=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=Jf(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),h()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=Jf(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),f(),p(),d()},disable:m,render:p,update:d,init:f,destroy:h})}function rm(e){let t,n,{swiper:r,extendParams:i,on:a,emit:o,params:s}=e;r.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,c,u,d,p,f,h,m,g=s&&s.autoplay?s.autoplay.delay:3e3,x=s&&s.autoplay?s.autoplay.delay:3e3,y=(new Date).getTime();function v(e){r&&!r.destroyed&&r.wrapperEl&&e.target===r.wrapperEl&&(r.wrapperEl.removeEventListener("transitionend",v),m||e.detail&&e.detail.bySwiperTouchMove||C())}const b=()=>{if(r.destroyed||!r.autoplay.running)return;r.autoplay.paused?c=!0:c&&(x=l,c=!1);const e=r.autoplay.paused?l:y+x-(new Date).getTime();r.autoplay.timeLeft=e,o("autoplayTimeLeft",e,e/g),n=requestAnimationFrame((()=>{b()}))},w=e=>{if(r.destroyed||!r.autoplay.running)return;cancelAnimationFrame(n),b();let i="undefined"===typeof e?r.params.autoplay.delay:e;g=r.params.autoplay.delay,x=r.params.autoplay.delay;const a=(()=>{let e;if(e=r.virtual&&r.params.virtual.enabled?r.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:r.slides[r.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(a)&&a>0&&"undefined"===typeof e&&(i=a,g=a,x=a),l=i;const s=r.params.speed,c=()=>{r&&!r.destroyed&&(r.params.autoplay.reverseDirection?!r.isBeginning||r.params.loop||r.params.rewind?(r.slidePrev(s,!0,!0),o("autoplay")):r.params.autoplay.stopOnLastSlide||(r.slideTo(r.slides.length-1,s,!0,!0),o("autoplay")):!r.isEnd||r.params.loop||r.params.rewind?(r.slideNext(s,!0,!0),o("autoplay")):r.params.autoplay.stopOnLastSlide||(r.slideTo(0,s,!0,!0),o("autoplay")),r.params.cssMode&&(y=(new Date).getTime(),requestAnimationFrame((()=>{w()}))))};return i>0?(clearTimeout(t),t=setTimeout((()=>{c()}),i)):requestAnimationFrame((()=>{c()})),i},S=()=>{y=(new Date).getTime(),r.autoplay.running=!0,w(),o("autoplayStart")},E=()=>{r.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(n),o("autoplayStop")},k=(e,n)=>{if(r.destroyed||!r.autoplay.running)return;clearTimeout(t),e||(h=!0);const i=()=>{o("autoplayPause"),r.params.autoplay.waitForTransition?r.wrapperEl.addEventListener("transitionend",v):C()};if(r.autoplay.paused=!0,n)return f&&(l=r.params.autoplay.delay),f=!1,void i();const a=l||r.params.autoplay.delay;l=a-((new Date).getTime()-y),r.isEnd&&l<0&&!r.params.loop||(l<0&&(l=0),i())},C=()=>{r.isEnd&&l<0&&!r.params.loop||r.destroyed||!r.autoplay.running||(y=(new Date).getTime(),h?(h=!1,w(l)):w(),r.autoplay.paused=!1,o("autoplayResume"))},T=()=>{if(r.destroyed||!r.autoplay.running)return;const e=zf();"hidden"===e.visibilityState&&(h=!0,k(!0)),"visible"===e.visibilityState&&C()},j=e=>{"mouse"===e.pointerType&&(h=!0,m=!0,r.animating||r.autoplay.paused||k(!0))},O=e=>{"mouse"===e.pointerType&&(m=!1,r.autoplay.paused&&C())};a("init",(()=>{r.params.autoplay.enabled&&(r.params.autoplay.pauseOnMouseEnter&&(r.el.addEventListener("pointerenter",j),r.el.addEventListener("pointerleave",O)),zf().addEventListener("visibilitychange",T),S())})),a("destroy",(()=>{r.el&&"string"!==typeof r.el&&(r.el.removeEventListener("pointerenter",j),r.el.removeEventListener("pointerleave",O)),zf().removeEventListener("visibilitychange",T),r.autoplay.running&&E()})),a("_freeModeStaticRelease",(()=>{(d||h)&&C()})),a("_freeModeNoMomentumRelease",(()=>{r.params.autoplay.disableOnInteraction?E():k(!0,!0)})),a("beforeTransitionStart",((e,t,n)=>{!r.destroyed&&r.autoplay.running&&(n||!r.params.autoplay.disableOnInteraction?k(!0,!0):E())})),a("sliderFirstMove",(()=>{!r.destroyed&&r.autoplay.running&&(r.params.autoplay.disableOnInteraction?E():(u=!0,d=!1,h=!1,p=setTimeout((()=>{h=!0,d=!0,k(!0)}),200)))})),a("touchEnd",(()=>{if(!r.destroyed&&r.autoplay.running&&u){if(clearTimeout(p),clearTimeout(t),r.params.autoplay.disableOnInteraction)return d=!1,void(u=!1);d&&r.params.cssMode&&C(),d=!1,u=!1}})),a("slideChange",(()=>{!r.destroyed&&r.autoplay.running&&(f=!0)})),Object.assign(r.autoplay,{start:S,stop:E,pause:k,resume:C})}em.displayName="SwiperSlide";const im=Ld("employes/fetchAll",(async(e,t)=>{let{rejectWithValue:n}=t;try{return await Kd({url:"employee/find/all"})}catch(r){return n(r.message)}})),am=Gd({name:"employes",initialState:{gettingAllEmployees:[],loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(im.pending,(e=>{e.loading=!0,e.error=null})).addCase(im.fulfilled,((e,t)=>{e.loading=!1,e.gettingAllEmployees=t.payload})).addCase(im.rejected,((e,t)=>{e.loading=!1,e.error=t.payload}))}}).reducer,om=Yt.div`
  padding: 0px 80px;
  background: #f8f4f1;

  @media (max-width: 1024px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0px 0 50px 0;
  }

  @media (max-width: 376px) {
    padding: 0 0 50px 0;
  }
`,sm=Yt(Zh)`
  width: 100%;
  height: 409px;
  padding: 40px;

  .swiper-pagination-bullet {
    background-color: #007aff;
  }

  @media (max-width: 768px) {
    padding: 30px;
    height: 350px;
  }

  @media (max-width: 480px) {
    padding: 0px;
    height: 300px;
  }
`,lm=Yt(em)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: relative;
`,cm=Yt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: auto;
`,um=Yt.h1`
  text-align: center;
  padding: 100px 0 58px 0;
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  @media (max-width: 480px) {
    padding: 0px 0 36px 0;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`,dm=Yt.h1`
  position: absolute;
  top: 247px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 230px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`,pm=Yt.p`
  position: absolute;
  top: 280px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 260px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`;function fm(){const t=ss((e=>e.employes.gettingAllEmployees)),n=ss((e=>e.language.language)),r=vs();return(0,e.useEffect)((()=>{r(im())}),[r]),(0,qn.jsxs)(om,{id:"About Us",children:[(0,qn.jsx)(um,{children:"KG"===n?"\u0411\u0438\u0437\u0434\u0438\u043d \u043d\u0430\u0441\u0430\u0430\u0442\u0447\u044b\u043b\u0430\u0440\u044b\u0431\u044b\u0437":"\u041d\u0430\u0448\u0438 \u043c\u0435\u043d\u0442\u043e\u0440\u044b"}),(0,qn.jsx)(sm,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},centeredSlides:!0,initialSlide:2,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[nm,rm],className:"mySwiper",breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:1,spaceBetween:10}},children:null===t||void 0===t?void 0:t.map((e=>(0,qn.jsxs)(lm,{children:[(0,qn.jsx)(cm,{src:wa,alt:"mentors"}),(0,qn.jsx)(dm,{children:null===e||void 0===e?void 0:e.fullName}),(0,qn.jsx)(pm,{children:null===e||void 0===e?void 0:e.direction})]},null===e||void 0===e?void 0:e.id)))})]})}const hm=()=>{const t=ss((e=>e.projects.gettingAllProject)),n=ss((e=>e.language.language)),r=vs();(0,e.useEffect)((()=>{n&&r(ef({language:"KG"===n?"KYRGYZSTAN":"RUSSIAN"}))}),[r,n]);return(0,qn.jsxs)(gm,{children:[(0,qn.jsx)(xm,{children:"KG"===n?"\u0411\u0438\u0437\u0434\u0438\u043d \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0442\u0435\u0440\u0434\u0438\u043d \u0434\u043e\u043b\u0431\u043e\u043e\u0440\u043b\u043e\u0440\u0443":"\u041f\u0440\u043e\u0435\u043a\u0442\u044b \u043d\u0430\u0448\u0438\u0445 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432"}),(0,qn.jsx)(ym,{children:t.length>0?null===t||void 0===t?void 0:t.map((e=>{return(0,qn.jsxs)(vm,{img:null===e||void 0===e?void 0:e.image,variant:(t=e.id,console.log(t),1===t?1:2===t?3:6===t?1:7===t?3:2),children:[(0,qn.jsxs)(bm,{children:[(0,qn.jsx)(wm,{children:null===e||void 0===e?void 0:e.title}),(0,qn.jsx)(Sm,{children:null===e||void 0===e?void 0:e.description})]}),(0,qn.jsxs)(Em,{children:["KG"===n?"\u043a\u04e9\u0440\u04af\u04af":"\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c","\u2192"]})]},null===e||void 0===e?void 0:e.id);var t})):(0,qn.jsx)(mm,{children:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043a\u0443\u0440\u0441\u043e\u0432"})})]})},mm=Yt.p`
  font-size: 18px;
  color: #ff2f00;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,gm=Yt.section`
  background: #f8f4f1;
  padding: 0 0 0 0;
  @media (max-width: 1024px) {
    padding: 0 0 0px 0;
  }
  @media (max-width: 470px) {
    padding: 0 0 50px 0;
  }
`,xm=Yt.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: center;
  padding: 0px 0 58px 0;
  color: #1e1e2f;
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 29.25px;
    text-align: center;
    padding: 0px 0 50px 0;
  }
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    text-align: center;
    padding: 0px 0 42px 0;
  }
`,ym=Yt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  height: auto;
  background: #f8f4f1;
`,vm=Yt.div`
  width: ${e=>1===e.variant?"707px":2===e.variant?"396px":3===e.variant?"549px":void 0};
  height: 313px;
  border-radius: 15px;
  background-image: url(${e=>e.img});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: white;
  overflow: hidden;
  position: relative;
  background: #f8f4f1;
  transition:
    background-size 0.8s ease-in-out,
    transform 0.8s ease-in-out;

  &:hover {
    background-size: 115%;
    transform: scale(1.01);
  }
  @media (max-width: 1024px) {
    width: 600px;
    height: 252px;
    &:hover {
      background-size: normal;
      transform: scale(1);
    }
  }
  @media (max-width: 470px) {
    width: 370.44px;
    height: 252px;
    &:hover {
      background-size: normal;
      transform: scale(1);
    }
  }
`,bm=Yt.div``,wm=Yt.h1`
  font-size: 1.5rem;
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 35.1px;
  text-align: left;
`,Sm=Yt.p`
  font-size: 1rem;
  margin: 10px 0;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.29px;
  text-align: left;
`,Em=Yt.button`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  background: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  &:hover {
    background: #5e59ee;
  }
`;var km=n(5173),Cm=n.n(km),Tm=n(8161),jm=n.n(Tm),Om=n(6366),_m=n.n(Om),Pm=n(2123),Am=n.n(Pm),Mm="bodyAttributes",Rm="htmlAttributes",zm="titleAttributes",Im={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Nm=(Object.keys(Im).map((function(e){return Im[e]})),"charset"),Lm="cssText",Dm="href",$m="http-equiv",Fm="innerHTML",Vm="itemprop",Bm="name",Gm="property",Hm="rel",Um="src",Wm="target",Km={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},qm="defaultTitle",Ym="defer",Xm="encodeSpecialCharacters",Qm="onChangeClientState",Jm="titleTemplate",Zm=Object.keys(Km).reduce((function(e,t){return e[Km[t]]=t,e}),{}),eg=[Im.NOSCRIPT,Im.SCRIPT,Im.STYLE],tg="data-react-helmet",ng="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rg=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ig=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ag=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},og=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},sg=function(e){var t=pg(e,Im.TITLE),n=pg(e,Jm);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=pg(e,qm);return t||r||void 0},lg=function(e){return pg(e,Qm)||function(){}},cg=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ig({},e,t)}),{})},ug=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[Im.BASE]})).map((function(e){return e[Im.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},dg=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&xg("Helmet: "+e+' should be of type "Array". Instead found type "'+ng(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();-1===t.indexOf(l)||n===Hm&&"canonical"===e[n].toLowerCase()||l===Hm&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==Fm&&s!==Lm&&s!==Vm||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][c]&&(i[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=Am()({},r[s],i[s]);r[s]=l}return e}),[]).reverse()},pg=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},fg=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){fg(t)}),0)}}(),hg=function(e){return clearTimeout(e)},mg="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||fg:n.g.requestAnimationFrame||fg,gg="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||hg:n.g.cancelAnimationFrame||hg,xg=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},yg=null,vg=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;Sg(Im.BODY,r),Sg(Im.HTML,i),wg(d,p);var f={baseTag:Eg(Im.BASE,n),linkTags:Eg(Im.LINK,a),metaTags:Eg(Im.META,o),noscriptTags:Eg(Im.NOSCRIPT,s),scriptTags:Eg(Im.SCRIPT,c),styleTags:Eg(Im.STYLE,u)},h={},m={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=f[e].oldTags)})),t&&t(),l(e,h,m)},bg=function(e){return Array.isArray(e)?e.join(""):e},wg=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=bg(e)),Sg(Im.TITLE,t)},Sg=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(tg),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===i.indexOf(l)&&i.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);i.length===a.length?n.removeAttribute(tg):n.getAttribute(tg)!==o.join(",")&&n.setAttribute(tg,o.join(","))}},Eg=function(e,t){var n=document.head||document.querySelector(Im.HEAD),r=n.querySelectorAll(e+"["+tg+"]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===Fm)n.innerHTML=t.innerHTML;else if(r===Lm)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(tg,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},kg=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Cg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Km[n]||n]=e[n],t}),t)},Tg=function(t,n,r){switch(t){case Im.TITLE:return{toComponent:function(){return function(t,n,r){var i,a=((i={key:n})[tg]=!0,i),o=Cg(r,a);return[e.createElement(Im.TITLE,o,n)]}(0,n.title,n.titleAttributes)},toString:function(){return function(e,t,n,r){var i=kg(n),a=bg(t);return i?"<"+e+" "+tg+'="true" '+i+">"+og(a,r)+"</"+e+">":"<"+e+" "+tg+'="true">'+og(a,r)+"</"+e+">"}(t,n.title,n.titleAttributes,r)}};case Mm:case Rm:return{toComponent:function(){return Cg(n)},toString:function(){return kg(n)}};default:return{toComponent:function(){return function(t,n){return n.map((function(n,r){var i,a=((i={key:r})[tg]=!0,i);return Object.keys(n).forEach((function(e){var t=Km[e]||e;if(t===Fm||t===Lm){var r=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[t]=n[e]})),e.createElement(t,a)}))}(t,n)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===Fm||e===Lm)})).reduce((function(e,t){var i="undefined"===typeof r[t]?t:t+'="'+og(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===eg.indexOf(e);return t+"<"+e+" "+tg+'="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(t,n,r)}}}},jg=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:Tg(Im.BASE,t,r),bodyAttributes:Tg(Mm,n,r),htmlAttributes:Tg(Rm,i,r),link:Tg(Im.LINK,a,r),meta:Tg(Im.META,o,r),noscript:Tg(Im.NOSCRIPT,s,r),script:Tg(Im.SCRIPT,l,r),style:Tg(Im.STYLE,c,r),title:Tg(Im.TITLE,{title:d,titleAttributes:p},r)}},Og=function(t){var n,r;return r=n=function(n){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,n.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n),r.prototype.shouldComponentUpdate=function(e){return!_m()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Im.SCRIPT:case Im.NOSCRIPT:return{innerHTML:t};case Im.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return ig({},r,((t={})[n.type]=[].concat(r[n.type]||[],[ig({},i,this.mapNestedChildrenToProps(n,a))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case Im.TITLE:return ig({},i,((t={})[r.type]=o,t.titleAttributes=ig({},a),t));case Im.BODY:return ig({},i,{bodyAttributes:ig({},a)});case Im.HTML:return ig({},i,{htmlAttributes:ig({},a)})}return ig({},i,((n={})[r.type]=ig({},a),n))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=ig({},t);return Object.keys(e).forEach((function(t){var r;n=ig({},n,((r={})[t]=e[t],r))})),n},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(t,n){var r=this,i={};return e.Children.forEach(t,(function(e){if(e&&e.props){var t=e.props,a=t.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Zm[n]||n]=e[n],t}),t)}(ag(t,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case Im.LINK:case Im.META:case Im.NOSCRIPT:case Im.SCRIPT:case Im.STYLE:i=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:o,nestedChildren:a});break;default:n=r.mapObjectTypeChildren({child:e,newProps:n,newChildProps:o,nestedChildren:a})}}})),n=this.mapArrayTypeChildrenToProps(i,n)},r.prototype.render=function(){var n=this.props,r=n.children,i=ag(n,["children"]),a=ig({},i);return r&&(a=this.mapChildrenToProps(r,a)),e.createElement(t,a)},rg(r,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),r}(e.Component),n.propTypes={base:Cm().object,bodyAttributes:Cm().object,children:Cm().oneOfType([Cm().arrayOf(Cm().node),Cm().node]),defaultTitle:Cm().string,defer:Cm().bool,encodeSpecialCharacters:Cm().bool,htmlAttributes:Cm().object,link:Cm().arrayOf(Cm().object),meta:Cm().arrayOf(Cm().object),noscript:Cm().arrayOf(Cm().object),onChangeClientState:Cm().func,script:Cm().arrayOf(Cm().object),style:Cm().arrayOf(Cm().object),title:Cm().string,titleAttributes:Cm().object,titleTemplate:Cm().string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var e=t.rewind();return e||(e=jg({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},r}(jm()((function(e){return{baseTag:ug([Dm,Wm],e),bodyAttributes:cg(Mm,e),defer:pg(e,Ym),encode:pg(e,Xm),htmlAttributes:cg(Rm,e),linkTags:dg(Im.LINK,[Hm,Dm],e),metaTags:dg(Im.META,[Bm,Nm,$m,Gm,Vm],e),noscriptTags:dg(Im.NOSCRIPT,[Fm],e),onChangeClientState:lg(e),scriptTags:dg(Im.SCRIPT,[Um,Fm],e),styleTags:dg(Im.STYLE,[Lm],e),title:sg(e),titleAttributes:cg(zm,e)}}),(function(e){yg&&gg(yg),e.defer?yg=mg((function(){vg(e,(function(){yg=null}))})):(vg(e),yg=null)}),jg)((function(){return null})));Og.renderStatic=Og.rewind;n(1844);Object.create(null);const _g={},Pg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];zg(t[0])&&_g[t[0]]||(zg(t[0])&&(_g[t[0]]=new Date),function(){if(console?.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];zg(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}(...t))},Ag=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout((()=>{e.off("initialized",n)}),0),t()};e.on("initialized",n)}},Mg=(e,t,n)=>{e.loadNamespaces(t,Ag(e,n))},Rg=(e,t,n,r)=>{zg(n)&&(n=[n]),n.forEach((t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)})),e.loadLanguages(t,Ag(e,r))},zg=e=>"string"===typeof e,Ig=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Ng={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},Lg=e=>Ng[e];let Dg={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(Ig,Lg)};let $g;const Fg=(0,e.createContext)();class Vg{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]??=!0}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Bg=(e,t,n,r)=>e.getFixedT(t,n,r),Gg=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:r}=n,{i18n:i,defaultNS:a}=(0,e.useContext)(Fg)||{},o=r||i||$g;if(o&&!o.reportNamespaces&&(o.reportNamespaces=new Vg),!o){Pg("You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>{return zg(t)?t:"object"===typeof(n=t)&&null!==n&&zg(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e;var n},t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}o.options.react?.wait&&Pg("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...Dg,...o.options.react,...n},{useSuspense:l,keyPrefix:c}=s;let u=t||a||o.options?.defaultNS;u=zg(u)?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces?.(u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every((e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(Pg("i18n.languages were undefined or empty",t.languages),!0)}(e,o,s))),p=((t,n,r,i)=>(0,e.useCallback)(Bg(t,n,r,i),[t,n,r,i]))(o,n.lng||null,"fallback"===s.nsMode?u:u[0],c),f=()=>p,h=()=>Bg(o,n.lng||null,"fallback"===s.nsMode?u:u[0],c),[m,g]=(0,e.useState)(f);let x=u.join();n.lng&&(x=`${n.lng}${x}`);const y=((t,n)=>{const r=(0,e.useRef)();return(0,e.useEffect)((()=>{r.current=n?r.current:t}),[t,n]),r.current})(x),v=(0,e.useRef)(!0);(0,e.useEffect)((()=>{const{bindI18n:e,bindI18nStore:t}=s;v.current=!0,d||l||(n.lng?Rg(o,n.lng,u,(()=>{v.current&&g(h)})):Mg(o,u,(()=>{v.current&&g(h)}))),d&&y&&y!==x&&v.current&&g(h);const r=()=>{v.current&&g(h)};return e&&o?.on(e,r),t&&o?.store.on(t,r),()=>{v.current=!1,o&&e?.split(" ").forEach((e=>o.off(e,r))),t&&o&&t.split(" ").forEach((e=>o.store.off(e,r)))}}),[o,x]),(0,e.useEffect)((()=>{v.current&&d&&g(f)}),[o,c,d]);const b=[m,o,d];if(b.t=m,b.i18n=o,b.ready=d,d)return b;if(!d&&!l)return b;throw new Promise((e=>{n.lng?Rg(o,n.lng,u,(()=>e())):Mg(o,u,(()=>e()))}))};const Hg=n.p+"static/media/Vector (5).bc16a95974c93310324677df9c73bb59.svg";const Ug=n.p+"static/media/Vector (6).e5706c7ef20b7b588bfff2e0bdfb553b.svg";const Wg=n.p+"static/media/Vector (7).b4a6ba5480ef3d0d03ba375a7172292e.svg";const Kg=n.p+"static/media/Vector (8).9e1caf5d256ea221cb99914c4f2f7dbd.svg";const qg=n.p+"static/media/Group 91.44f1fca205938b789f705a33d97b034d.svg";const Yg=n.p+"static/media/Vector (9).295a6d86e2d6ef150131304245a90185.svg";const Xg=n.p+"static/media/Vector (10).90fadedfd89694e7cddad2dfb9309c9f.svg";const Qg=n.p+"static/media/bacfooter.98d96abb99fe4a41c5190bd6e376f607.svg",Jg=()=>{const t=ss((e=>e.language.language)),{t:n}=Gg(),[r,i]=(0,e.useState)(!1);return(0,qn.jsxs)(Zg,{id:"contacts",children:[(0,qn.jsx)(ex,{children:"KG"===t?"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448\u0442\u0430\u0440":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,qn.jsx)(tx,{backgroundfooter:Qg,children:(0,qn.jsxs)(nx,{children:[(0,qn.jsxs)("div",{children:[(0,qn.jsxs)("ul",{children:[(0,qn.jsxs)(rx,{children:[(0,qn.jsx)("img",{src:Hg,alt:"phone"}),"+996 509 91 41 01"," "]}),(0,qn.jsxs)(rx,{children:[(0,qn.jsx)("img",{src:Ug,alt:"message"})," idevitmentoring@gmail.com"]}),(0,qn.jsxs)(rx,{children:[(0,qn.jsx)("img",{src:Wg,alt:"location"})," \u0410\u0445\u0443\u043d\u0431\u0430\u0435\u0432\u0430 67/1 (\u041d\u0438\u0436\u043d\u0438\u0439 \u0434\u0436\u0430\u043b)"]})]}),(0,qn.jsxs)(ix,{children:[(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:Kg,alt:""})}),(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:qg,alt:""})}),(0,qn.jsx)("a",{href:"https://web.telegram.org/a/#846785266",children:(0,qn.jsx)("img",{src:Yg,alt:""})})]})]}),(0,qn.jsx)("div",{children:(0,qn.jsxs)(ox,{onClick:()=>i(!0),children:[(0,qn.jsx)("img",{src:Xg,alt:""}),"KG"===t?"\u041a\u0430\u0440\u0442\u0430\u043d\u044b \u0430\u0447\u0443\u0443":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0443"]})})]})}),(0,qn.jsxs)(cx,{children:[(0,qn.jsxs)(px,{children:[(0,qn.jsx)("div",{children:(0,qn.jsx)("img",{src:Na,alt:"idev"})}),(0,qn.jsxs)(fx,{children:[(0,qn.jsxs)("li",{children:[" ","KG"===t?"\u04ae\u0439":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"]}),(0,qn.jsxs)("li",{children:[" ","KG"===t?"\u0411\u0438\u0437 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9":"\u041e \u043d\u0430\u0441"]}),(0,qn.jsxs)("li",{children:[" ","KG"===t?"\u041a\u0443\u0440\u0441\u0442\u0430\u0440":"\u041a\u0443\u0440\u0441\u044b"]})]}),(0,qn.jsxs)(hx,{children:[(0,qn.jsx)("a",{href:"https://www.instagram.com/idev.kg/",children:(0,qn.jsx)("img",{src:Ra,alt:"instagram"})}),(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:za,alt:"whatsapp"})}),(0,qn.jsx)("a",{href:"https://web.telegram.org/a/#846785266",children:(0,qn.jsx)("img",{src:Ia,alt:"telegram"})})]})]}),(0,qn.jsx)(ux,{children:(0,qn.jsx)(dx,{children:"@All rights reserved"})})]}),r&&(0,qn.jsxs)("div",{children:[(0,qn.jsxs)(Og,{children:[(0,qn.jsxs)("title",{children:["IDEV ",n("")]}),(0,qn.jsx)("meta",{name:"description",content:"stars"})]}),(0,qn.jsx)(ax,{children:(0,qn.jsxs)(sx,{"data-aos":"fade-up",children:[(0,qn.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.17936193445416!2d74.56378722500612!3d42.843143862330734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec90e63a31f0b%3A0x2c39ccd5876634d3!2z0KPQu9GR0YLQvdGL0LUg0KbQtdC90Ys!5e1!3m2!1sru!2skg!4v1724748642864!5m2!1sru!2skg&zoomControl=false",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,qn.jsx)(lx,{onClick:()=>i(!1),children:"X"})]})})]})]})},Zg=Zt.A.footer`
  background: #f8f4f1;
`,ex=(0,Zt.A)("h1")`
  text-align: center;
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: center;
  padding: 70px 0 70px 0;

  @media (max-width: 470px) {
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
    text-align: center;
    color: #1e1e2f;
  }
`,tx=(0,Zt.A)("footer")`
  background-image: url(${e=>e.backgroundfooter});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
`,nx=(0,Zt.A)("div")`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 80px 0 30px 100px;
  gap: 38%;
  @media (max-width: 470px) {
    padding: 50px 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 53px;
  }
`,rx=(0,Zt.A)("li")`
  font-family: Jost;
  font-size: 21.68px;
  font-weight: 400;
  line-height: 25.37px;
  text-align: left;
  color: #f8f4f1;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 0 31px 0;
  list-style: none;
`,ix=(0,Zt.A)("div")`
  display: flex;
  gap: 45px;
  margin: 71px 0 0 0;
  @media (max-width: 470px) {
    display: none;
  }
`,ax=(0,Zt.A)("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 910;
`,ox=(0,Zt.A)("button")`
  width: 254px;
  height: 55px;
  padding: 14px 45px 14px 45px;
  margin-top: -30px;
  border-radius: 55px;
  font-family: Jost;
  font-size: 21px;
  font-weight: 400;
  line-height: 24.57px;
  text-align: center;
  display: flex;
  gap: 10px;
  border: none;
  cursor: pointer;
`,sx=(0,Zt.A)("div")`
  position: relative;
  width: 80%;
  height: 500px;
  margin: 100px auto;
  background: white;
  border: 1px solid orange;
  z-index: 20;

  & > iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  & .place-card .place-card-large {
    background-color: red !important;
    padding: 10px;
  }
`,lx=(0,Zt.A)("button")`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 30;
`,cx=(0,Zt.A)("div")`
  background: #262626;
`,ux=(0,Zt.A)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`,dx=(0,Zt.A)("p")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -90px;
  padding: 10px 0 10px 0;
  color: #ffffff8a;
  font-family: Montserrat;
  font-size: 15.07px;
  font-weight: 400;
  line-height: 17.64px;
  text-align: center;
  border-top: 1px solid #515151;
  width: 212px;
  @media (max-width: 470px) {
    margin: 0;
  }
`,px=(0,Zt.A)("div")`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 89px 0 100px;
  @media (max-width: 470px) {
    flex-direction: column;
    align-items: start;
    padding: 20px 0 0 40px;
    height: 189px;
  }
`,fx=(0,Zt.A)("ul")`
  display: flex;
  align-items: center;
  gap: 55px;
  list-style: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 19.89px;
  text-align: center;
  color: #f8f4f1;
  @media (max-width: 470px) {
    padding: 20px 0 10px 0;
  }
`,hx=(0,Zt.A)("div")`
  display: flex;
  gap: 49px;
  @media (max-width: 470px) {
    padding: 20px 0 40px 0;
  }
`;const mx=n.p+"static/media/whatsappIcon.4a33b058.b72ccd9e3980edf75d4c78f323c89143.svg",gx=()=>(0,qn.jsx)(yx,{children:(0,qn.jsx)("a",{href:"https://api.whatsapp.com/send?phone=996509914101",children:(0,qn.jsx)("img",{src:mx,alt:"WhatsApp Icon"})})}),xx=Xt`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.6);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 230, 118, 0.9);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.6);
  }
`,yx=Yt.div`
  position: fixed;
  right: 20px;
  bottom: 0px;
  width: 79px;
  height: 79px;
  background: #00e676;
  margin-bottom: 16px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${xx} 3s linear infinite;
  box-shadow: 0 0 10px rgba(0, 230, 118, 0.6);
  z-index: 900;
`,vx=()=>(0,qn.jsxs)("div",{children:[(0,qn.jsx)(sf,{}),(0,qn.jsx)(Ep,{}),(0,qn.jsx)(tp,{}),(0,qn.jsx)(hm,{}),(0,qn.jsx)(fm,{}),(0,qn.jsx)(Jg,{}),(0,qn.jsx)(gx,{})]}),bx=Xt`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`,wx=Yt.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000B2;
`,Sx=Yt.h1`
  font-size: 4rem;
  color: #f00f0f;
  animation: ${bx} 2s infinite;
`,Ex=()=>{const e=ss((e=>e.language.language));return(0,qn.jsx)(wx,{children:(0,qn.jsxs)(Sx,{children:["404 - ","KG"===e?"\u0411\u0430\u0440\u0430\u043a \u0442\u0430\u0431\u044b\u043b\u0433\u0430\u043d \u0436\u043e\u043a":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]})})};const kx=function(){return(0,qn.jsx)("div",{children:(0,qn.jsxs)(Ko,{children:[(0,qn.jsx)(Uo,{path:"/",element:(0,qn.jsx)(vx,{})}),(0,qn.jsx)(Uo,{path:"/frontend",element:(0,qn.jsx)(ws,{})}),(0,qn.jsx)(Uo,{path:"/java",element:(0,qn.jsx)(sl,{})}),(0,qn.jsx)(Uo,{path:"/ux-ui",element:(0,qn.jsx)(Hl,{})}),(0,qn.jsx)(Uo,{path:"/python",element:(0,qn.jsx)(jc,{})}),(0,qn.jsx)(Uo,{path:"*",element:(0,qn.jsx)(Ex,{})})]})})};new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Px){}new Map;const Cx=t.startTransition;tr.flushSync,t.useId;function Tx(t){let{basename:n,children:r,future:i,window:a}=t,o=e.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),Wa((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Ga("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:Ha(t)}),null,s)));let l=o.current,[c,u]=e.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},p=e.useCallback((e=>{d&&Cx?Cx((()=>u(e))):u(e)}),[u,d]);return e.useLayoutEffect((()=>l.listen(p)),[l,p]),e.createElement(Wo,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var jx,Ox;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jx||(jx={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ox||(Ox={}));const _x=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{};let a=new Sd;return t&&(function(e){return"boolean"===typeof e}(t)?a.push(Ou):a.push(_u(t.extraArgument))),a},{reducer:n,middleware:r,devTools:i=!0,preloadedState:a,enhancers:o}=e||{};let s,l;if("function"===typeof n)s=n;else{if(!Eu(n))throw new Error(Wd(1));s=Cu(n)}l="function"===typeof r?r(t):t();let c=Tu;i&&(c=vd({trace:!1,..."object"===typeof i&&i}));const u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(n,r)=>{const i=e(n,r);let a=()=>{throw new Error(vu(15))};const o={getState:i.getState,dispatch:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return a(e,...n)}},s=t.map((e=>e(o)));return a=Tu(...s)(i.dispatch),{...i,dispatch:a}}}(...l),d=Od(u);return ku(s,a,c(..."function"===typeof o?o(d):d()))}({reducer:{language:of,employes:am,courses:Yd,projects:tf}});r.createRoot(document.getElementById("root")).render((0,qn.jsx)(e.StrictMode,{children:(0,qn.jsx)(Tx,{children:(0,qn.jsx)(hs,{store:_x,children:(0,qn.jsx)(kx,{})})})}))})()})();
//# sourceMappingURL=main.8a9ebba5.js.map