/* esm.sh - esbuild bundle(marked-gfm-heading-id@3.0.4) denonext production */
import o from"/v134/github-slugger@2.0.0/denonext/github-slugger.mjs";var t;function s({prefix:g=""}={}){return{headerIds:!1,hooks:{preprocess(e){return t=new o,e}},renderer:{heading(e,n,r){return r=r.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,""),`<h${n} id="${g}${t.slug(r)}">${e}</h${n}>
`}}}}export{s as gfmHeadingId};
//# sourceMappingURL=marked-gfm-heading-id.mjs.map