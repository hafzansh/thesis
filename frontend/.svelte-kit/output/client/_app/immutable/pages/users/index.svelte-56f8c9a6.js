import{S as Ge,i as He,s as Re,e as d,k as C,t as A,c,m as S,a as p,h as L,d as i,b as a,F as qe,g as x,ac as $,I as e,ae as ke,O as K,ad as ct,E as Ie,Q as Je,ag as ut,J as Ye,ah as oe,ai as de,w as ce,x as fe,y as _e,aj as me,q as pe,o as he,Z as ft,B as be,G as _t}from"../../chunks/index-68022f09.js";import{G as mt,$ as je,y as Te}from"../../chunks/gridjs-ab55cfbc.js";import{t as ve}from"../../chunks/SvelteToast.svelte_svelte_type_style_lang-076dd77e.js";import{s as pt,d as ht,g as it}from"../../chunks/api-7821972a.js";import{s as dt,p as bt}from"../../chunks/stores-c1dcbafa.js";import{b as ze}from"../../chunks/constants-cd52b4af.js";import{d as vt}from"../../chunks/blob_download-9b8271fe.js";import{k as gt,l as Et}from"../../chunks/index.es-5884aaae.js";import{F as ot}from"../../chunks/fa-c85d6e63.js";import{a as wt,f as Nt}from"../../chunks/index-51965068.js";import"../../chunks/index-df81916d.js";import"../../chunks/papaparse.min-322c06fa.js";function yt(s){let l,o,v,u,r,_,N,y,m,h,D,E,b,w,k,q,F,O,g,R,t,f,U,J,T,W,G,Q,re,ue,B,X,ie,M,n,P,Y,z,Z,ae,j,ee,Ce,te,Se,Ue,ne,Ae,Le,se,De,Pe,le,Oe,Be,Me;return{c(){l=d("input"),o=C(),v=d("div"),u=d("div"),r=d("form"),_=d("h3"),N=A("Edit User Data"),y=C(),m=d("label"),h=d("span"),D=A("id"),E=C(),b=d("input"),w=C(),k=d("label"),q=d("span"),F=A("Username"),O=C(),g=d("input"),R=C(),t=d("label"),f=d("span"),U=A("Full Name"),J=C(),T=d("input"),W=C(),G=d("label"),Q=d("span"),re=A("Superuser"),ue=C(),B=d("select"),X=d("option"),ie=A("Yes"),M=d("option"),n=A("No"),P=C(),Y=d("label"),z=d("span"),Z=A("Is Active"),ae=C(),j=d("select"),ee=d("option"),Ce=A("Yes"),te=d("option"),Se=A("No"),Ue=C(),ne=d("p"),Ae=A("This user data be updated!"),Le=C(),se=d("button"),De=A("Confirm"),Pe=C(),le=d("label"),Oe=A("Cancel"),this.h()},l(I){l=c(I,"INPUT",{type:!0,id:!0,class:!0}),o=S(I),v=c(I,"DIV",{class:!0});var H=p(v);u=c(H,"DIV",{class:!0});var Qe=p(u);r=c(Qe,"FORM",{method:!0});var V=p(r);_=c(V,"H3",{class:!0});var Ze=p(_);N=L(Ze,"Edit User Data"),Ze.forEach(i),y=S(V),m=c(V,"LABEL",{class:!0});var ge=p(m);h=c(ge,"SPAN",{class:!0});var Ke=p(h);D=L(Ke,"id"),Ke.forEach(i),E=S(ge),b=c(ge,"INPUT",{type:!0,class:!0,name:!0,id:!0}),ge.forEach(i),w=S(V),k=c(V,"LABEL",{class:!0});var Ee=p(k);q=c(Ee,"SPAN",{class:!0});var We=p(q);F=L(We,"Username"),We.forEach(i),O=S(Ee),g=c(Ee,"INPUT",{type:!0,class:!0,name:!0,id:!0}),Ee.forEach(i),R=S(V),t=c(V,"LABEL",{class:!0});var we=p(t);f=c(we,"SPAN",{class:!0});var Xe=p(f);U=L(Xe,"Full Name"),Xe.forEach(i),J=S(we),T=c(we,"INPUT",{type:!0,class:!0,name:!0,id:!0}),we.forEach(i),W=S(V),G=c(V,"LABEL",{class:!0});var Ne=p(G);Q=c(Ne,"SPAN",{class:!0});var $e=p(Q);re=L($e,"Superuser"),$e.forEach(i),ue=S(Ne),B=c(Ne,"SELECT",{class:!0,id:!0,name:!0});var Ve=p(B);X=c(Ve,"OPTION",{});var xe=p(X);ie=L(xe,"Yes"),xe.forEach(i),M=c(Ve,"OPTION",{});var et=p(M);n=L(et,"No"),et.forEach(i),Ve.forEach(i),Ne.forEach(i),P=S(V),Y=c(V,"LABEL",{class:!0});var ye=p(Y);z=c(ye,"SPAN",{class:!0});var tt=p(z);Z=L(tt,"Is Active"),tt.forEach(i),ae=S(ye),j=c(ye,"SELECT",{class:!0,id:!0,name:!0});var Fe=p(j);ee=c(Fe,"OPTION",{});var at=p(ee);Ce=L(at,"Yes"),at.forEach(i),te=c(Fe,"OPTION",{});var st=p(te);Se=L(st,"No"),st.forEach(i),Fe.forEach(i),ye.forEach(i),Ue=S(V),ne=c(V,"P",{class:!0});var lt=p(ne);Ae=L(lt,"This user data be updated!"),lt.forEach(i),Le=S(V),se=c(V,"BUTTON",{class:!0,type:!0});var nt=p(se);De=L(nt,"Confirm"),nt.forEach(i),Pe=S(V),le=c(V,"LABEL",{for:!0,class:!0});var rt=p(le);Oe=L(rt,"Cancel"),rt.forEach(i),V.forEach(i),Qe.forEach(i),H.forEach(i),this.h()},h(){a(l,"type","checkbox"),a(l,"id","modal-edit"),a(l,"class","modal-toggle"),a(_,"class","py-3 text-lg font-bold font-inter"),a(h,"class","w-1/2"),a(b,"type","text"),a(b,"class","input input-bordered w-full text-right font-inter font-bold"),a(b,"name","id"),a(b,"id","id"),b.required=!0,a(m,"class","input-group w-full mb-5 hidden"),a(q,"class","w-1/2"),a(g,"type","text"),a(g,"class","input input-bordered w-full text-right font-inter font-bold"),a(g,"name","username"),a(g,"id","username"),g.required=!0,a(k,"class","input-group w-full mb-5"),a(f,"class","w-1/2"),a(T,"type","text"),a(T,"class","input input-bordered w-full text-right font-inter font-bold"),a(T,"name","full_name"),a(T,"id","full_name"),T.required=!0,a(t,"class","input-group w-full mb-5"),a(Q,"class","w-1/2"),X.__value="true",X.value=X.__value,M.__value="false",M.value=M.__value,a(B,"class","input input-bordered w-full text-right font-inter font-bold"),a(B,"id","is_superuser"),a(B,"name","is_superuser"),s[0].is_superuser===void 0&&qe(()=>s[7].call(B)),a(G,"class","input-group w-full mb-5"),a(z,"class","w-1/2"),ee.__value="true",ee.value=ee.__value,te.__value="false",te.value=te.__value,a(j,"class","input input-bordered w-full text-right font-inter font-bold"),a(j,"id","is_active"),a(j,"name","is_active"),s[0].is_active===void 0&&qe(()=>s[8].call(j)),a(Y,"class","input-group w-full mb-5 hidden"),a(ne,"class","py-1 font-inter"),a(se,"class","btn btn-success float-right"),a(se,"type","submit"),a(le,"for","modal-edit"),a(le,"class","btn float-right mr-5"),a(r,"method","post"),a(u,"class","modal-box w-11/12 max-w-2xl"),a(v,"class","modal")},m(I,H){x(I,l,H),$(l,s[1]),l.checked=s[1],x(I,o,H),x(I,v,H),e(v,u),e(u,r),e(r,_),e(_,N),e(r,y),e(r,m),e(m,h),e(h,D),e(m,E),e(m,b),$(b,s[0].id),e(r,w),e(r,k),e(k,q),e(q,F),e(k,O),e(k,g),$(g,s[0].username),e(r,R),e(r,t),e(t,f),e(f,U),e(t,J),e(t,T),$(T,s[0].full_name),e(r,W),e(r,G),e(G,Q),e(Q,re),e(G,ue),e(G,B),e(B,X),e(X,ie),e(B,M),e(M,n),ke(B,s[0].is_superuser),e(r,P),e(r,Y),e(Y,z),e(z,Z),e(Y,ae),e(Y,j),e(j,ee),e(ee,Ce),e(j,te),e(te,Se),ke(j,s[0].is_active),e(r,Ue),e(r,ne),e(ne,Ae),e(r,Le),e(r,se),e(se,De),e(r,Pe),e(r,le),e(le,Oe),Be||(Me=[K(l,"change",s[3]),K(b,"input",s[4]),K(g,"input",s[5]),K(T,"input",s[6]),K(B,"change",s[7]),K(j,"change",s[8]),K(r,"submit",ct(s[2]))],Be=!0)},p(I,[H]){H&2&&$(l,I[1]),H&2&&(l.checked=I[1]),H&1&&b.value!==I[0].id&&$(b,I[0].id),H&1&&g.value!==I[0].username&&$(g,I[0].username),H&1&&T.value!==I[0].full_name&&$(T,I[0].full_name),H&1&&ke(B,I[0].is_superuser),H&1&&ke(j,I[0].is_active)},i:Ie,o:Ie,d(I){I&&i(l),I&&i(o),I&&i(v),Be=!1,Je(Me)}}}function kt(s,l,o){async function v(E){const b=E.target,w=await pt(b);if(w.error=="400")return ve.push("Error, user doesn't have enough privilages");if(w.error)return ve.push("Error, Already have data!");ve.push("Data has been updated"),o(1,r=!r),window.location.href="/users/"}let{selected_data:u}=l,{values:r=!1}=l;function _(){r=this.value,r=this.checked,o(1,r)}function N(){u.id=this.value,o(0,u)}function y(){u.username=this.value,o(0,u)}function m(){u.full_name=this.value,o(0,u)}function h(){u.is_superuser=ut(this),o(0,u)}function D(){u.is_active=ut(this),o(0,u)}return s.$$set=E=>{"selected_data"in E&&o(0,u=E.selected_data),"values"in E&&o(1,r=E.values)},[u,r,v,_,N,y,m,h,D]}class Tt extends Ge{constructor(l){super(),He(this,l,kt,yt,Re,{selected_data:0,values:1})}}function It(s){let l,o,v,u,r,_,N,y,m,h,D,E,b,w,k,q,F,O,g,R;return{c(){l=d("input"),o=C(),v=d("div"),u=d("div"),r=d("h3"),_=A("Delete User"),N=C(),y=d("p"),m=A("This user will be "),h=d("b"),D=A("deleted"),E=A("!"),b=C(),w=d("button"),k=A("Confirm"),q=C(),F=d("label"),O=A("Cancel"),this.h()},l(t){l=c(t,"INPUT",{type:!0,id:!0,class:!0}),o=S(t),v=c(t,"DIV",{class:!0});var f=p(v);u=c(f,"DIV",{class:!0});var U=p(u);r=c(U,"H3",{class:!0});var J=p(r);_=L(J,"Delete User"),J.forEach(i),N=S(U),y=c(U,"P",{class:!0});var T=p(y);m=L(T,"This user will be "),h=c(T,"B",{class:!0});var W=p(h);D=L(W,"deleted"),W.forEach(i),E=L(T,"!"),T.forEach(i),b=S(U),w=c(U,"BUTTON",{class:!0});var G=p(w);k=L(G,"Confirm"),G.forEach(i),q=S(U),F=c(U,"LABEL",{for:!0,class:!0});var Q=p(F);O=L(Q,"Cancel"),Q.forEach(i),U.forEach(i),f.forEach(i),this.h()},h(){a(l,"type","checkbox"),a(l,"id","modal-delete"),a(l,"class","modal-toggle"),a(r,"class","py-3 text-lg font-bold font-inter"),a(h,"class","text-primary"),a(y,"class","py-1 font-inter"),a(w,"class","btn btn-success float-right"),a(F,"for","modal-delete"),a(F,"class","btn float-right mr-5"),a(u,"class","modal-box w-11/12 max-w-5xl"),a(v,"class","modal")},m(t,f){x(t,l,f),$(l,s[0]),l.checked=s[0],x(t,o,f),x(t,v,f),e(v,u),e(u,r),e(r,_),e(u,N),e(u,y),e(y,m),e(y,h),e(h,D),e(y,E),e(u,b),e(u,w),e(w,k),e(u,q),e(u,F),e(F,O),g||(R=[K(l,"change",s[4]),K(w,"click",s[1])],g=!0)},p(t,[f]){f&1&&$(l,t[0]),f&1&&(l.checked=t[0])},i:Ie,o:Ie,d(t){t&&i(l),t&&i(o),t&&i(v),g=!1,Je(R)}}}function Ct(s,l,o){let v;Ye(s,dt,m=>o(5,v=m));let{selected_data:u}=l,{data:r}=l,{values:_=!1}=l;async function N(){const m=await ht(`${ze}/users/${u.id}`,v.user.auth_token).then(h=>h.json());return m.id?(o(2,r=r.filter(function(h){return h.id!=u.id})),o(0,_=!_),ve.push("Data has been deleted!")):ve.push("Error, "+m.detail)}function y(){_=this.value,_=this.checked,o(0,_)}return s.$$set=m=>{"selected_data"in m&&o(3,u=m.selected_data),"data"in m&&o(2,r=m.data),"values"in m&&o(0,_=m.values)},[_,N,r,u,y]}class St extends Ge{constructor(l){super(),He(this,l,Ct,It,Re,{selected_data:3,data:2,values:0})}}function Ut(s){let l,o,v,u,r,_,N,y,m,h,D,E,b,w,k,q,F,O,g,R,t,f,U,J,T,W,G;function Q(n){s[7](n)}function re(n){s[8](n)}function ue(n){s[9](n)}let B={};s[3]!==void 0&&(B.values=s[3]),s[1]!==void 0&&(B.selected_data=s[1]),s[0]!==void 0&&(B.data=s[0]),l=new St({props:B}),oe.push(()=>de(l,"values",Q)),oe.push(()=>de(l,"selected_data",re)),oe.push(()=>de(l,"data",ue));function X(n){s[10](n)}function ie(n){s[11](n)}let M={};return s[2]!==void 0&&(M.values=s[2]),s[1]!==void 0&&(M.selected_data=s[1]),_=new Tt({props:M}),oe.push(()=>de(_,"values",X)),oe.push(()=>de(_,"selected_data",ie)),k=new ot({props:{icon:gt,class:"mr-3"}}),g=new ot({props:{icon:Et,class:"mr-3"}}),f=new mt({props:{pagination:{enabled:!0,limit:10,summary:!0,buttonsCount:5},fixedHeader:!0,sort:!0,search:!0,resizable:!0,columns:s[4],data:s[0]}}),{c(){ce(l.$$.fragment),r=C(),ce(_.$$.fragment),m=C(),h=d("div"),D=d("div"),E=d("div"),b=d("div"),w=d("button"),ce(k.$$.fragment),q=A(`\r
              CSV`),F=C(),O=d("button"),ce(g.$$.fragment),R=A(`\r
              Report`),t=C(),ce(f.$$.fragment),this.h()},l(n){fe(l.$$.fragment,n),r=S(n),fe(_.$$.fragment,n),m=S(n),h=c(n,"DIV",{class:!0});var P=p(h);D=c(P,"DIV",{});var Y=p(D);E=c(Y,"DIV",{class:!0});var z=p(E);b=c(z,"DIV",{class:!0});var Z=p(b);w=c(Z,"BUTTON",{class:!0});var ae=p(w);fe(k.$$.fragment,ae),q=L(ae,`\r
              CSV`),ae.forEach(i),F=S(Z),O=c(Z,"BUTTON",{class:!0});var j=p(O);fe(g.$$.fragment,j),R=L(j,`\r
              Report`),j.forEach(i),Z.forEach(i),t=S(z),fe(f.$$.fragment,z),z.forEach(i),Y.forEach(i),P.forEach(i),this.h()},h(){a(w,"class","btn bg-base-200 text-neutral"),a(O,"class","btn bg-base-200 text-neutral"),a(b,"class","absolute top-0 right-0 z-10 "),a(E,"class","relative capitalize"),a(h,"class","flex flex-col justify-center w-full")},m(n,P){_e(l,n,P),x(n,r,P),_e(_,n,P),x(n,m,P),x(n,h,P),e(h,D),e(D,E),e(E,b),e(b,w),_e(k,w,null),e(w,q),e(b,F),e(b,O),_e(g,O,null),e(O,R),e(E,t),_e(f,E,null),T=!0,W||(G=[K(w,"click",s[12]),K(O,"click",s[13])],W=!0)},p(n,[P]){const Y={};!o&&P&8&&(o=!0,Y.values=n[3],me(()=>o=!1)),!v&&P&2&&(v=!0,Y.selected_data=n[1],me(()=>v=!1)),!u&&P&1&&(u=!0,Y.data=n[0],me(()=>u=!1)),l.$set(Y);const z={};!N&&P&4&&(N=!0,z.values=n[2],me(()=>N=!1)),!y&&P&2&&(y=!0,z.selected_data=n[1],me(()=>y=!1)),_.$set(z);const Z={};P&1&&(Z.data=n[0]),f.$set(Z)},i(n){T||(pe(l.$$.fragment,n),pe(_.$$.fragment,n),pe(k.$$.fragment,n),pe(g.$$.fragment,n),pe(f.$$.fragment,n),qe(()=>{J&&J.end(1),U=_t(D,Nt,{y:500,duration:500}),U.start()}),T=!0)},o(n){he(l.$$.fragment,n),he(_.$$.fragment,n),he(k.$$.fragment,n),he(g.$$.fragment,n),he(f.$$.fragment,n),U&&U.invalidate(),J=ft(D,wt,{}),T=!1},d(n){be(l,n),n&&i(r),be(_,n),n&&i(m),n&&i(h),be(k),be(g),be(f),n&&J&&J.end(),W=!1,Je(G)}}}function At(s,l,o){let v,u;Ye(s,bt,t=>o(14,v=t)),Ye(s,dt,t=>o(15,u=t));const r=({session:t})=>t.user.authenticated?{status:200,props:{user:t.user}}:{status:302,redirect:"/login"};let{data:_}=l,N={username:"admin",is_active:"false",full_name:"admin",is_superuser:"true",id:1};const y=[{name:"id",id:"id",hidden:!0},{name:"Username",id:"username",formatter:t=>je(`<p class="badge badge-secondary font-bold">@${t}</p>`)},{name:"Full Name",id:"full_name"},{name:"Super User",id:"is_superuser",formatter:t=>t==!0?je('<p class="badge badge-info">Yes</p>'):je('<p class="badge badge-primary">No</p>')},{name:"Action",formatter:(t,f)=>Te("div",{className:"p-0 flex flex-row btn-group justify-center font-inter"},Te("button",{className:"btn btn-primary btn-sm w-[80px]",onClick:()=>{D(f.cells[0].data)}},"Edit"),null,Te("div",{className:"divider h-1 p-0 m-0"}),null,Te("button",{className:"btn btn-primary btn-sm",onClick:()=>{E(f.cells[0].data)}},"Delete"))}];let m=!1,h=!1;const D=async t=>{const f=await it(`${ze}/users/${t}`,u.user.auth_token).then(U=>U.json());o(1,N={username:f.username,is_active:String(f.is_active),is_superuser:String(f.is_superuser),full_name:f.full_name,id:f.id}),o(2,m=!m)},E=async t=>{const f=await it(`${ze}/users/${t}`,u.user.auth_token).then(U=>U.json());o(1,N={username:f.username,is_active:String(f.is_active),is_superuser:String(f.is_superuser),full_name:f.full_name,id:f.id}),o(3,h=!h)},b=`${v.url.pathname}/print`;function w(t){h=t,o(3,h)}function k(t){N=t,o(1,N)}function q(t){_=t,o(0,_)}function F(t){m=t,o(2,m)}function O(t){N=t,o(1,N)}const g=()=>vt(_),R=()=>window.open(b);return s.$$set=t=>{"data"in t&&o(0,_=t.data)},[_,N,m,h,y,b,r,w,k,q,F,O,g,R]}class Ht extends Ge{constructor(l){super(),He(this,l,At,Ut,Re,{load:6,data:0})}get load(){return this.$$.ctx[6]}}export{Ht as default};
