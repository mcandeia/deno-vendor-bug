/* esm.sh - esbuild bundle(sanitize-html@2.8.1) esnext production */
import * as __0$ from "/v134/htmlparser2@8.0.2/esnext/htmlparser2.mjs";
import * as __1$ from "/v134/escape-string-regexp@4.0.0/esnext/escape-string-regexp.mjs";
import * as __2$ from "/v134/is-plain-object@5.0.0/esnext/is-plain-object.mjs";
import * as __3$ from "/v134/deepmerge@4.3.1/esnext/deepmerge.mjs";
import * as __4$ from "/v134/parse-srcset@1.0.2/esnext/parse-srcset.mjs";
import * as __5$ from "/v134/postcss@8.4.31/esnext/postcss.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"htmlparser2":return c(__0$);case"escape-string-regexp":return e(__1$);case"is-plain-object":return c(__2$);case"deepmerge":return e(__3$);case"parse-srcset":return e(__4$);case"postcss":return e(__5$);default:throw new Error("module \""+n+"\" not found");}};
var fe=Object.create;var L=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var de=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var k=(l=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(l,{get:(e,o)=>(typeof require<"u"?require:e)[o]}):l)(function(l){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+l+'" is not supported')});var he=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports),ge=(l,e)=>{for(var o in e)L(l,o,{get:e[o],enumerable:!0})},v=(l,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of ce(e))!ue.call(l,u)&&u!==o&&L(l,u,{get:()=>e[u],enumerable:!(n=oe(e,u))||n.enumerable});return l},S=(l,e,o)=>(v(l,e,"default"),o&&v(o,e,"default")),J=(l,e,o)=>(o=l!=null?fe(de(l)):{},v(e||!l||!l.__esModule?L(o,"default",{value:l,enumerable:!0}):o,l));var z=he((He,ee)=>{var pe=k("htmlparser2"),K=k("escape-string-regexp"),{isPlainObject:me}=k("is-plain-object"),Q=k("deepmerge"),we=k("parse-srcset"),{parse:xe}=k("postcss"),Te=["img","audio","video","picture","svg","object","map","iframe","embed"],be=["script","style"];function N(l,e){l&&Object.keys(l).forEach(function(o){e(l[o],o)})}function b(l,e){return{}.hasOwnProperty.call(l,e)}function j(l,e){let o=[];return N(l,function(n){e(n)&&o.push(n)}),o}function ye(l){for(let e in l)if(b(l,e))return!1;return!0}function Re(l){return l.map(function(e){if(!e.url)throw new Error("URL missing");return e.url+(e.w?` ${e.w}w`:"")+(e.h?` ${e.h}h`:"")+(e.d?` ${e.d}x`:"")}).join(", ")}ee.exports=$;var Ce=/^[^\0\t\n\f\r /<=>]+$/;function $(l,e,o){if(l==null)return"";typeof l=="number"&&(l=l.toString());let n="",u="";function E(t,r){let i=this;this.tag=t,this.attribs=r||{},this.tagPosition=n.length,this.text="",this.mediaChildren=[],this.updateParentNodeText=function(){if(g.length){let s=g[g.length-1];s.text+=i.text}},this.updateParentNodeMediaChildren=function(){g.length&&Te.includes(this.tag)&&g[g.length-1].mediaChildren.push(this.tag)}}e=Object.assign({},$.defaults,e),e.parser=Object.assign({},Se,e.parser),be.forEach(function(t){e.allowedTags!==!1&&(e.allowedTags||[]).indexOf(t)>-1&&!e.allowVulnerableTags&&console.warn(`

\u26A0\uFE0F Your \`allowedTags\` option includes, \`${t}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`)});let ie=e.nonTextTags||["script","style","textarea","option"],h,M;e.allowedAttributes&&(h={},M={},N(e.allowedAttributes,function(t,r){h[r]=[];let i=[];t.forEach(function(s){typeof s=="string"&&s.indexOf("*")>=0?i.push(K(s).replace(/\\\*/g,".*")):h[r].push(s)}),i.length&&(M[r]=new RegExp("^("+i.join("|")+")$"))}));let I={},F={},_={};N(e.allowedClasses,function(t,r){h&&(b(h,r)||(h[r]=[]),h[r].push("class")),I[r]=[],_[r]=[];let i=[];t.forEach(function(s){typeof s=="string"&&s.indexOf("*")>=0?i.push(K(s).replace(/\\\*/g,".*")):s instanceof RegExp?_[r].push(s):I[r].push(s)}),i.length&&(F[r]=new RegExp("^("+i.join("|")+")$"))});let q={},U;N(e.transformTags,function(t,r){let i;typeof t=="function"?i=t:typeof t=="string"&&(i=$.simpleTransform(t)),r==="*"?U=i:q[r]=i});let m,g,O,A,R,H,D=!1;W();let G=new pe.Parser({onopentag:function(t,r){if(e.enforceHtmlBoundary&&t==="html"&&W(),R){H++;return}let i=new E(t,r);g.push(i);let s=!1,w=!!i.text,p;if(b(q,t)&&(p=q[t](t,r),i.attribs=r=p.attribs,p.text!==void 0&&(i.innerText=p.text),t!==p.tagName&&(i.name=t=p.tagName,A[m]=p.tagName)),U&&(p=U(t,r),i.attribs=r=p.attribs,t!==p.tagName&&(i.name=t=p.tagName,A[m]=p.tagName)),(e.allowedTags!==!1&&(e.allowedTags||[]).indexOf(t)===-1||e.disallowedTagsMode==="recursiveEscape"&&!ye(O)||e.nestingLimit!=null&&m>=e.nestingLimit)&&(s=!0,O[m]=!0,e.disallowedTagsMode==="discard"&&ie.indexOf(t)!==-1&&(R=!0,H=1),O[m]=!0),m++,s){if(e.disallowedTagsMode==="discard")return;u=n,n=""}n+="<"+t,t==="script"&&(e.allowedScriptHostnames||e.allowedScriptDomains)&&(i.innerText=""),(!h||b(h,t)||h["*"])&&N(r,function(d,c){if(!Ce.test(c)){delete i.attribs[c];return}let B=!1;if(!h||b(h,t)&&h[t].indexOf(c)!==-1||h["*"]&&h["*"].indexOf(c)!==-1||b(M,t)&&M[t].test(c)||M["*"]&&M["*"].test(c))B=!0;else if(h&&h[t]){for(let a of h[t])if(me(a)&&a.name&&a.name===c){B=!0;let f="";if(a.multiple===!0){let C=d.split(" ");for(let T of C)a.values.indexOf(T)!==-1&&(f===""?f=T:f+=" "+T)}else a.values.indexOf(d)>=0&&(f=d);d=f}}if(B){if(e.allowedSchemesAppliedToAttributes.indexOf(c)!==-1&&V(t,d)){delete i.attribs[c];return}if(t==="script"&&c==="src"){let a=!0;try{let f=Z(d);if(e.allowedScriptHostnames||e.allowedScriptDomains){let C=(e.allowedScriptHostnames||[]).find(function(x){return x===f.url.hostname}),T=(e.allowedScriptDomains||[]).find(function(x){return f.url.hostname===x||f.url.hostname.endsWith(`.${x}`)});a=C||T}}catch{a=!1}if(!a){delete i.attribs[c];return}}if(t==="iframe"&&c==="src"){let a=!0;try{let f=Z(d);if(f.isRelativeUrl)a=b(e,"allowIframeRelativeUrls")?e.allowIframeRelativeUrls:!e.allowedIframeHostnames&&!e.allowedIframeDomains;else if(e.allowedIframeHostnames||e.allowedIframeDomains){let C=(e.allowedIframeHostnames||[]).find(function(x){return x===f.url.hostname}),T=(e.allowedIframeDomains||[]).find(function(x){return f.url.hostname===x||f.url.hostname.endsWith(`.${x}`)});a=C||T}}catch{a=!1}if(!a){delete i.attribs[c];return}}if(c==="srcset")try{let a=we(d);if(a.forEach(function(f){V("srcset",f.url)&&(f.evil=!0)}),a=j(a,function(f){return!f.evil}),a.length)d=Re(j(a,function(f){return!f.evil})),i.attribs[c]=d;else{delete i.attribs[c];return}}catch{delete i.attribs[c];return}if(c==="class"){let a=I[t],f=I["*"],C=F[t],T=_[t],x=F["*"],Y=[C,x].concat(T).filter(function(ae){return ae});if(a&&f?d=X(d,Q(a,f),Y):d=X(d,a||f,Y),!d.length){delete i.attribs[c];return}}if(c==="style")try{let a=xe(t+" {"+d+"}"),f=le(a,e.allowedStyles);if(d=se(f),d.length===0){delete i.attribs[c];return}}catch{delete i.attribs[c];return}n+=" "+c,d&&d.length&&(n+='="'+P(d,!0)+'"')}else delete i.attribs[c]}),e.selfClosing.indexOf(t)!==-1?n+=" />":(n+=">",i.innerText&&!w&&!e.textFilter&&(n+=P(i.innerText),D=!0)),s&&(n=u+P(n),u="")},ontext:function(t){if(R)return;let r=g[g.length-1],i;if(r&&(i=r.tag,t=r.innerText!==void 0?r.innerText:t),e.disallowedTagsMode==="discard"&&(i==="script"||i==="style"))n+=t;else{let s=P(t,!1);e.textFilter&&!D?n+=e.textFilter(s,i):D||(n+=s)}if(g.length){let s=g[g.length-1];s.text+=t}},onclosetag:function(t){if(R)if(H--,!H)R=!1;else return;let r=g.pop();if(!r)return;if(r.tag!==t){g.push(r);return}R=e.enforceHtmlBoundary?t==="html":!1,m--;let i=O[m];if(i){if(delete O[m],e.disallowedTagsMode==="discard"){r.updateParentNodeText();return}u=n,n=""}if(A[m]&&(t=A[m],delete A[m]),e.exclusiveFilter&&e.exclusiveFilter(r)){n=n.substr(0,r.tagPosition);return}if(r.updateParentNodeMediaChildren(),r.updateParentNodeText(),e.selfClosing.indexOf(t)!==-1){i&&(n=u,u="");return}n+="</"+t+">",i&&(n=u+P(n),u=""),D=!1}},e.parser);return G.write(l),G.end(),n;function W(){n="",m=0,g=[],O={},A={},R=!1,H=0}function P(t,r){return typeof t!="string"&&(t=t+""),e.parser.decodeEntities&&(t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r&&(t=t.replace(/"/g,"&quot;"))),t=t.replace(/&(?![a-zA-Z0-9#]{1,20};)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),r&&(t=t.replace(/"/g,"&quot;")),t}function V(t,r){for(r=r.replace(/[\x00-\x20]+/g,"");;){let w=r.indexOf("<!--");if(w===-1)break;let p=r.indexOf("-->",w+4);if(p===-1)break;r=r.substring(0,w)+r.substring(p+3)}let i=r.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);if(!i)return r.match(/^[/\\]{2}/)?!e.allowProtocolRelative:!1;let s=i[1].toLowerCase();return b(e.allowedSchemesByTag,t)?e.allowedSchemesByTag[t].indexOf(s)===-1:!e.allowedSchemes||e.allowedSchemes.indexOf(s)===-1}function Z(t){if(t=t.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/,"$1//"),t.startsWith("relative:"))throw new Error("relative: exploit attempt");let r="relative://relative-site";for(let w=0;w<100;w++)r+=`/${w}`;let i=new URL(t,r);return{isRelativeUrl:i&&i.hostname==="relative-site"&&i.protocol==="relative:",url:i}}function le(t,r){if(!r)return t;let i=t.nodes[0],s;return r[i.selector]&&r["*"]?s=Q(r[i.selector],r["*"]):s=r[i.selector]||r["*"],s&&(t.nodes[0].nodes=i.nodes.reduce(ne(s),[])),t}function se(t){return t.nodes[0].nodes.reduce(function(r,i){return r.push(`${i.prop}:${i.value}${i.important?" !important":""}`),r},[]).join(";")}function ne(t){return function(r,i){return b(t,i.prop)&&t[i.prop].some(function(w){return w.test(i.value)})&&r.push(i),r}}function X(t,r,i){return r?(t=t.split(/\s+/),t.filter(function(s){return r.indexOf(s)!==-1||i.some(function(w){return w.test(s)})}).join(" ")):t}}var Se={decodeEntities:!0};$.defaults={allowedTags:["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","hgroup","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rb","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],disallowedTagsMode:"discard",allowedAttributes:{a:["href","name","target"],img:["src","srcset","alt","title","width","height","loading"]},selfClosing:["img","br","hr","area","base","basefont","input","link","meta"],allowedSchemes:["http","https","ftp","mailto","tel"],allowedSchemesByTag:{},allowedSchemesAppliedToAttributes:["href","src","cite"],allowProtocolRelative:!0,enforceHtmlBoundary:!1};$.simpleTransform=function(l,e,o){return o=o===void 0?!0:o,e=e||{},function(n,u){let E;if(o)for(E in e)u[E]=e[E];else u=e;return{tagName:l,attribs:u}}}});var y={};ge(y,{default:()=>ke,defaults:()=>Me,simpleTransform:()=>Oe});var re=J(z());S(y,J(z()));var{defaults:Me,simpleTransform:Oe}=re,{default:te,...Ae}=re,ke=te!==void 0?te:Ae;export{ke as default,Me as defaults,Oe as simpleTransform};
//# sourceMappingURL=sanitize-html.mjs.map