import{h as d,m as f,i as S,e as k,j as N,k as _,l as b}from"./index.84c539b1.js";const G=d()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...f()},setup(t,e){let{slots:n}=e;return S(()=>k(t.tag,{class:["v-container",{"v-container--fluid":t.fluid}]},n)),{}}}),w=["sm","md","lg","xl","xxl"],o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,e){return w.reduce((n,s)=>(n[t+b(s)]=e(),n),{})}const L=[...o,"baseline","stretch"],y=t=>L.includes(t),v=i("align",()=>({type:String,default:null,validator:y})),h=[...o,...g],C=t=>h.includes(t),j=i("justify",()=>({type:String,default:null,validator:C})),A=[...o,...g,"stretch"],m=t=>A.includes(t),p=i("alignContent",()=>({type:String,default:null,validator:m})),u={align:Object.keys(v),justify:Object.keys(j),alignContent:Object.keys(p)},E={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){let s=E[t];if(n!=null){if(e){const a=e.replace(t,"");s+=`-${a}`}return s+=`-${n}`,s.toLowerCase()}}const O=d()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y},...v,justify:{type:String,default:null,validator:C},...j,alignContent:{type:String,default:null,validator:m},...p,...f()},setup(t,e){let{slots:n}=e;const s=N(()=>{const a=[];let l;for(l in u)u[l].forEach(c=>{const V=t[c],r=P(l,c,V);r&&a.push(r)});return a.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),a});return()=>{var a;return _(t.tag,{class:["v-row",s.value]},(a=n.default)==null?void 0:a.call(n))}}}),T=(t,e)=>{const n=t.__vccOpts||t;for(const[s,a]of e)n[s]=a;return n};export{O as V,T as _,G as a};