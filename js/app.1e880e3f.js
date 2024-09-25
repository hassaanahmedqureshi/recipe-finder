(function(){"use strict";var e={394:function(e,t,r){var n=r(5130),i=r(6768);const o={id:"app"};function a(e,t,r,n,a,s){const l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(l)])}var s={name:"App"},l=r(1241);const c=(0,l.A)(s,[["render",a]]);var d=c,u=r(1387),p=r(4232);const f={class:"max-w-4xl mx-auto p-4"},m={class:"flex flex-col items-center mt-10"},g={key:0,class:"mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},h={class:"text-lg font-bold mb-2"},b=["src"],v={class:"text-gray-700 mb-2"},y={key:1,class:"text-center my-4"},k={key:2,class:"text-red-500 mt-4"};function x(e,t,r,o,a,s){const l=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",f,[t[3]||(t[3]=(0,i.Lk)("h1",{class:"text-center text-7xl font-bold mb-2 animated-gradient leading-normal",style:{"font-family":"'Style Script', cursive"}}," Recipe Finder ",-1)),t[4]||(t[4]=(0,i.Lk)("h2",{class:"text-center text-sm text-gray-500",style:{"font-family":"'Cinzel Decorative', serif"}}," by Hassaan Qureshi ",-1)),(0,i.Lk)("div",m,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.ingredients=e),placeholder:"Enter ingredients (comma-separated)",class:"w-full max-w-md p-2 border border-gray-300 rounded mb-4"},null,512),[[n.Jo,a.ingredients]]),(0,i.Lk)("button",{onClick:t[1]||(t[1]=e=>s.getRecipes(!0)),class:"w-full max-w-md p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"}," Find Recipes ")]),a.recipes.length?((0,i.uX)(),(0,i.CE)("div",g,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.recipes,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.label,class:"cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"},[(0,i.bF)(l,{to:{name:"RecipeDetailsPage",params:{id:e.label}},class:"block"},{default:(0,i.k6)((()=>[(0,i.Lk)("h3",h,(0,p.v_)(e.label),1),(0,i.Lk)("img",{src:e.image,alt:"Recipe Image",class:"w-full h-40 object-cover rounded-md mb-2"},null,8,b),(0,i.Lk)("p",v,"Ingredients: "+(0,p.v_)(e.ingredientLines.join(", ")),1),t[2]||(t[2]=(0,i.Lk)("button",{class:"mt-2 w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"}," View Recipe ",-1))])),_:2},1032,["to"])])))),128))])):(0,i.Q3)("",!0),a.loading?((0,i.uX)(),(0,i.CE)("div",y,"Loading more recipes...")):(0,i.Q3)("",!0),a.error?((0,i.uX)(),(0,i.CE)("div",k,(0,p.v_)(a.error),1)):(0,i.Q3)("",!0)])}r(4114);var w=r(4373),E={name:"HomePage",data(){return{ingredients:"",recipes:[],error:null,loading:!1,currentPage:1,totalHits:0}},methods:{async getRecipes(e=!1){this.error=null,this.loading=!0,e&&(this.recipes=[],this.currentPage=1);try{const e="https://api.edamam.com/search",t=await w.A.get(e,{params:{q:this.ingredients.split(",").map((e=>e.trim())).join(","),app_id:"9d8fe84a",app_key:"f1e139627cab542767afddc5c57c10e6",from:10*(this.currentPage-1),to:10*this.currentPage}});this.totalHits=t.data.count,this.recipes.push(...t.data.hits.map((e=>e.recipe))),this.currentPage++}catch(t){this.error="Error fetching recipes. Please try again.",console.error("Error fetching recipes:",t)}finally{this.loading=!1}},handleScroll(){const e=document.documentElement.scrollHeight,t=window.innerHeight+window.scrollY;t>=e-100&&!this.loading&&this.recipes.length<this.totalHits&&this.getRecipes()}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const L=(0,l.A)(E,[["render",x],["__scopeId","data-v-7d593994"]]);var _=L;const C={class:"max-w-4xl mx-auto p-4"},P={key:0,class:"bg-white border border-gray-200 rounded-lg shadow-md p-4"},O={class:"text-3xl font-bold mb-4"},X=["src"],j={class:"list-disc ml-6"},R=["href"],S={key:1,class:"text-center"},I={key:2,class:"text-red-500 text-center"};function F(e,t,r,n,o,a){return(0,i.uX)(),(0,i.CE)("div",C,[o.recipe?((0,i.uX)(),(0,i.CE)("div",P,[(0,i.Lk)("h1",O,(0,p.v_)(o.recipe.label),1),(0,i.Lk)("img",{src:o.recipe.image,alt:"Recipe Image",class:"w-full h-64 object-cover rounded-md mb-4"},null,8,X),t[0]||(t[0]=(0,i.Lk)("h2",{class:"text-2xl font-semibold mb-2"},"Ingredients:",-1)),(0,i.Lk)("ul",j,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.recipe.ingredientLines,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t,class:"mb-2"},(0,p.v_)(e),1)))),128))]),t[1]||(t[1]=(0,i.Lk)("h2",{class:"text-2xl font-semibold mt-4 mb-2"},"Instructions:",-1)),(0,i.Lk)("p",null,[(0,i.Lk)("a",{href:o.recipe.url,target:"_blank",class:"text-blue-500 hover:underline"}," Click here for detailed instructions ",8,R)])])):o.loading?((0,i.uX)(),(0,i.CE)("div",S,"Loading recipe details...")):((0,i.uX)(),(0,i.CE)("div",I,"Failed to load recipe details."))])}var H={name:"RecipeDetailsPage",data(){return{recipe:null,loading:!1,error:null}},async created(){this.loading=!0;const e=this.$route.params.id;try{const t="https://api.edamam.com/search",r=await w.A.get(t,{params:{q:e,app_id:"9d8fe84a",app_key:"f1e139627cab542767afddc5c57c10e6"}});r.data.hits.length?this.recipe=r.data.hits[0].recipe:this.error="Recipe not found"}catch(t){this.error="Error fetching recipe details",console.error("Error:",t)}finally{this.loading=!1}}};const A=(0,l.A)(H,[["render",F],["__scopeId","data-v-46727489"]]);var D=A;const Q=[{path:"/",name:"Home",component:_},{path:"/recipe/:id",name:"RecipeDetailsPage",component:D}],T=(0,u.aE)({history:(0,u.LA)("/recipe-finder/"),routes:Q});var M=T;(0,n.Ef)(d).use(M).mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var d=l(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self["webpackChunkrecipe_finder"]=self["webpackChunkrecipe_finder"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(394)}));n=r.O(n)})();
//# sourceMappingURL=app.1e880e3f.js.map