/* esm.sh - esbuild bundle(marked-mangle@1.1.0) denonext production */
function a(){return{mangle:!1,walkTokens(t){if(t.type!=="link"||!t.href.startsWith("mailto:"))return;let r=t.href.substring(7),e=l(r);t.href=`mailto:${e}`,!(t.tokens.length!==1||t.tokens[0].type!=="text"||t.tokens[0].text!==r)&&(t.text=e,t.tokens[0].text=e)}}}function l(t){let r="",e,n,i=t.length;for(e=0;e<i;e++)n=t.charCodeAt(e),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}export{a as mangle};
//# sourceMappingURL=marked-mangle.mjs.map