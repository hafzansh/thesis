import{S as T,i as A,s as F,e as c,w as L,k as j,t as H,c as d,a as f,x as B,d as o,m as q,h as W,b as v,g as z,I as l,y as J,j as G,q as N,o as O,B as P}from"../../../../../chunks/index-68022f09.js";import{L as K}from"../../../../../chunks/Logo-526e65af.js";import{c as R}from"../../../../../chunks/constants-cd52b4af.js";import{C as M,p as Q,a as U,b as X,j as Y,d as Z,c as tt}from"../../../../../chunks/chart.esm-12d65532.js";import{p as at}from"../../../../../chunks/chartjs-plugin-datalabels.esm-3fe68b90.js";import{B as et}from"../../../../../chunks/index-0cef307e.js";import"../../../../../chunks/index.es-5884aaae.js";function st(g){let a,n,s,u,m,i,p,h=g[0][0].path+"",$,t,w,b,x,_,E;return s=new K({props:{title:"Prediction Data"}}),_=new et({props:{data:g[1],options:g[2]}}),{c(){a=c("div"),n=c("div"),L(s.$$.fragment),u=j(),m=c("div"),i=c("article"),p=c("h3"),$=H(h),t=j(),w=c("div"),b=c("div"),x=c("div"),L(_.$$.fragment),this.h()},l(e){a=d(e,"DIV",{class:!0});var r=f(a);n=d(r,"DIV",{class:!0});var y=f(n);B(s.$$.fragment,y),y.forEach(o),u=q(r),m=d(r,"DIV",{class:!0});var k=f(m);i=d(k,"ARTICLE",{class:!0});var I=f(i);p=d(I,"H3",{});var C=f(p);$=W(C,h),C.forEach(o),I.forEach(o),k.forEach(o),t=q(r),w=d(r,"DIV",{class:!0});var D=f(w);b=d(D,"DIV",{class:!0});var S=f(b);x=d(S,"DIV",{class:!0});var V=f(x);B(_.$$.fragment,V),V.forEach(o),S.forEach(o),D.forEach(o),r.forEach(o),this.h()},h(){v(n,"class","flex flex-row w-full"),v(i,"class","prose"),v(m,"class","flex flex-row justify-end items-center w-full mt-[-25px]"),v(x,"class","w-full flex flex-col bg-white justify-center items-center rounded-lg p-10"),v(b,"class","flex flex-col w-full h-full bg-white"),v(w,"class","flex flex-col bg-white"),v(a,"class","flex flex-col w-full h-full bg-white")},m(e,r){z(e,a,r),l(a,n),J(s,n,null),l(a,u),l(a,m),l(m,i),l(i,p),l(p,$),l(a,t),l(a,w),l(w,b),l(b,x),J(_,x,null),E=!0},p(e,[r]){(!E||r&1)&&h!==(h=e[0][0].path+"")&&G($,h)},i(e){E||(N(s.$$.fragment,e),N(_.$$.fragment,e),E=!0)},o(e){O(s.$$.fragment,e),O(_.$$.fragment,e),E=!1},d(e){e&&o(a),P(s),P(_)}}}M.register(at,Q,U,X,Y,Z,tt);setTimeout(()=>window.print(),1e3);function rt(g,a,n){let{data:s}=a;const u=JSON.parse(s[0].data);JSON.parse(s[0].data).map(t=>{t.kota=R[t.kota-1]}),u.map(t=>{t.kota=R[t.kota-1]});const i=u.map(t=>t.kota=`${t.kota} (${t.tahun}) - ${parseFloat(t.result).toLocaleString("en")}`),p=u.map(t=>t.result),h={labels:i,datasets:[{label:"Result",data:p,backgroundColor:["rgba(255, 134,159,0.4)"],borderWidth:2,borderColor:["rgba(255, 134, 159, 1)"]}]};let $={responsive:!0};return g.$$set=t=>{"data"in t&&n(0,s=t.data)},[s,h,$]}class ut extends T{constructor(a){super(),A(this,a,rt,st,F,{data:0})}}export{ut as default};