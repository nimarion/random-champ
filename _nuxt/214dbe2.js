(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{155:function(e,n,t){var o=t(14);e.exports=function(e,n){if(!o(e)||e._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return e}},156:function(e,n,t){"use strict";var o=t(7),l=t(157),r=t(27),m=t(19),d=t(51),c=t(158);o(o.P,"Array",{flatMap:function(e){var n,t,o=r(this);return d(e),n=m(o.length),t=c(o,0),l(t,o,o,n,0,1,e,arguments[1]),t}}),t(85)("flatMap")},157:function(e,n,t){"use strict";var o=t(114),l=t(14),r=t(19),m=t(26),d=t(2)("isConcatSpreadable");e.exports=function e(n,t,source,c,h,f,v,P){for(var element,R,w=h,k=0,j=!!v&&m(v,P,3);k<c;){if(k in source){if(element=j?j(source[k],k,t):source[k],R=!1,l(element)&&(R=void 0!==(R=element[d])?!!R:o(element)),R&&f>0)w=e(n,t,element,r(element.length),w,f-1)-1;else{if(w>=9007199254740991)throw TypeError();n[w]=element}w++}k++}return w}},158:function(e,n,t){var o=t(159);e.exports=function(e,n){return new(o(e))(n)}},159:function(e,n,t){var o=t(14),l=t(114),r=t(2)("species");e.exports=function(e){var n;return l(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!l(n.prototype)||(n=void 0),o(n)&&null===(n=n[r])&&(n=void 0)),void 0===n?Array:n}},160:function(e,n,t){"use strict";var strong=t(161),o=t(155);e.exports=t(162)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(o(this,"Set"),e=0===e?0:e,e)}},strong)},161:function(e,n,t){"use strict";var o=t(13).f,l=t(82),r=t(117),m=t(26),d=t(115),c=t(116),h=t(84),f=t(118),v=t(86),P=t(11),R=t(113).fastKey,w=t(155),k=P?"_s":"size",j=function(e,n){var t,o=R(n);if("F"!==o)return e._i[o];for(t=e._f;t;t=t.n)if(t.k==n)return t};e.exports={getConstructor:function(e,n,t,h){var f=e((function(e,o){d(e,f,n,"_i"),e._t=n,e._i=l(null),e._f=void 0,e._l=void 0,e[k]=0,null!=o&&c(o,t,e[h],e)}));return r(f.prototype,{clear:function(){for(var e=w(this,n),data=e._i,t=e._f;t;t=t.n)t.r=!0,t.p&&(t.p=t.p.n=void 0),delete data[t.i];e._f=e._l=void 0,e[k]=0},delete:function(e){var t=w(this,n),o=j(t,e);if(o){var l=o.n,r=o.p;delete t._i[o.i],o.r=!0,r&&(r.n=l),l&&(l.p=r),t._f==o&&(t._f=l),t._l==o&&(t._l=r),t[k]--}return!!o},forEach:function(e){w(this,n);for(var t,o=m(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(o(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!j(w(this,n),e)}}),P&&o(f.prototype,"size",{get:function(){return w(this,n)[k]}}),f},def:function(e,n,t){var o,l,r=j(e,n);return r?r.v=t:(e._l=r={i:l=R(n,!0),k:n,v:t,p:o=e._l,n:void 0,r:!1},e._f||(e._f=r),o&&(o.n=r),e[k]++,"F"!==l&&(e._i[l]=r)),e},getEntry:j,setStrong:function(e,n,t){h(e,n,(function(e,t){this._t=w(e,n),this._k=t,this._l=void 0}),(function(){for(var e=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),t?"entries":"values",!t,!0),v(n)}}},162:function(e,n,t){"use strict";var o=t(4),l=t(7),r=t(16),m=t(117),meta=t(113),d=t(116),c=t(115),h=t(14),f=t(15),v=t(83),P=t(52),R=t(119);e.exports=function(e,n,t,w,k,j){var F=o[e],_=F,z=k?"set":"add",y=_&&_.prototype,N={},S=function(e){var n=y[e];r(y,e,"delete"==e||"has"==e?function(a){return!(j&&!h(a))&&n.call(this,0===a?0:a)}:"get"==e?function(a){return j&&!h(a)?void 0:n.call(this,0===a?0:a)}:"add"==e?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof _&&(j||y.forEach&&!f((function(){(new _).entries().next()})))){var T=new _,D=T[z](j?{}:-0,1)!=T,C=f((function(){T.has(1)})),L=v((function(e){new _(e)})),A=!j&&f((function(){for(var e=new _,n=5;n--;)e[z](n,n);return!e.has(-0)}));L||((_=n((function(n,t){c(n,_,e);var o=R(new F,n,_);return null!=t&&d(t,k,o[z],o),o}))).prototype=y,y.constructor=_),(C||A)&&(S("delete"),S("has"),k&&S("get")),(A||D)&&S(z),j&&y.clear&&delete y.clear}else _=w.getConstructor(n,e,k,z),m(_.prototype,t),meta.NEED=!0;return P(_,e),N[e]=_,l(l.G+l.W+l.F*(_!=F),N),j||w.setStrong(_,e,k),_}},163:function(e){e.exports=JSON.parse('[{"id":2205,"name":"Androxus","feName":"Androxus","title":"The Godslayer","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/androxus.jpg","latest":"n"},{"id":2404,"name":"Ash","feName":"Ash","title":"The War Machine","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/ash.jpg","latest":"n"},{"id":2512,"name":"Atlas","feName":"Atlas","title":"The Man Out of Time","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/atlas.jpg","latest":"n"},{"id":2073,"name":"Barik","feName":"Barik","title":"The Master Mechanic","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/barik.jpg","latest":"n"},{"id":2281,"name":"Bomb King","feName":"Bomb King","title":"His Majesty","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/bomb-king.jpg","latest":"n"},{"id":2147,"name":"Buck","feName":"Buck","title":"The Unyielding","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/buck.jpg","latest":"n"},{"id":2092,"name":"Cassie","feName":"Cassie","title":"The Hunter\'s Daughter","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/cassie.jpg","latest":"n"},{"id":2533,"name":"Corvus","feName":"Corvus","title":"The Magistrate\'s Blade","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/corvus.jpg","latest":"n"},{"id":2495,"name":"Dredge","feName":"Dredge","title":"Admiral of the Abyss","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/dredge.jpg","latest":"n"},{"id":2277,"name":"Drogoz","feName":"Drogoz","title":"The Greedy","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/drogoz.jpg","latest":"n"},{"id":2094,"name":"Evie","feName":"Evie","title":"The Winter Witch","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/evie.jpg","latest":"n"},{"id":2071,"name":"Fernando","feName":"Fernando","title":"The Self-Appointed Knight","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/fernando.jpg","latest":"n"},{"id":2491,"name":"Furia","feName":"Furia","title":"Angel of Vengeance","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/furia.jpg","latest":"n"},{"id":2093,"name":"Grohk","feName":"Grohk","title":"The Lightning Orc","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/grohk.jpg","latest":"n"},{"id":2254,"name":"Grover","feName":"Grover","title":"The Wild","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/grover.jpg","latest":"n"},{"id":2509,"name":"Imani","feName":"Imani","title":"The Last Warder","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/imani.jpg","latest":"n"},{"id":2348,"name":"Inara","feName":"Inara","title":"The Stone Warden","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/inara.jpg","latest":"n"},{"id":2517,"name":"Io","feName":"Io","title":"the Shattered Goddess","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/io.jpg","latest":"n"},{"id":2431,"name":"Jenos","feName":"Jenos","title":"The Ascended","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/jenos.jpg","latest":"n"},{"id":2479,"name":"Khan","feName":"Khan","title":"Primus of house Aico","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/khan.jpg","latest":"n"},{"id":2249,"name":"Kinessa","feName":"Kinessa","title":"The Bounty Hunter","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/kinessa.jpg","latest":"n"},{"id":2493,"name":"Koga","feName":"Koga","title":"The Lost Hand","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/koga.jpg","latest":"n"},{"id":2362,"name":"Lex","feName":"Lex","title":"The Hand of Justice","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/lex.jpg","latest":"n"},{"id":2417,"name":"Lian","feName":"Lian","title":"Scion of House Aico","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/lian.jpg","latest":"n"},{"id":2338,"name":"Maeve","feName":"Maeve","title":"of Blades","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/maeve.jpg","latest":"n"},{"id":2288,"name":"Makoa","feName":"Makoa","title":"The Ancient","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/makoa.jpg","latest":"n"},{"id":2303,"name":"Mal\'Damba","feName":"Mal\'Damba","title":"Wekono\'s Chosen","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/maldamba.jpg","latest":"n"},{"id":2481,"name":"Moji","feName":"Moji","title":"and Friends","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/moji.jpg","latest":"n"},{"id":2056,"name":"Pip","feName":"Pip","title":"The Rogue Alchemist","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/pip.jpg","latest":"n"},{"id":2528,"name":"Raum","feName":"Raum","title":"Rage of the Abyss","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/raum.jpg","latest":"n"},{"id":2149,"name":"Ruckus","feName":"Ruckus","title":"The Worst of Friends","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/ruckus.jpg","latest":"n"},{"id":2372,"name":"Seris","feName":"Seris","title":"Oracle of the Abyss","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/seris.jpg","latest":"n"},{"id":2307,"name":"Sha Lin","feName":"Sha Lin","title":"The Desert Wind","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/sha-lin.jpg","latest":"n"},{"id":2057,"name":"Skye","feName":"Skye","title":"The Twilight Assassin","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/skye.jpg","latest":"n"},{"id":2438,"name":"Strix","feName":"Strix","title":"Ghost Feather","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/strix.jpg","latest":"n"},{"id":2472,"name":"Talus","feName":"Talus","title":"of the Ska\'drin","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/talus.jpg","latest":"n"},{"id":2477,"name":"Terminus","feName":"Terminus","title":"The Fallen","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/terminus.jpg","latest":"n"},{"id":2529,"name":"Tiberius","feName":"Tiberius","title":"The Weapons Master","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/tiberius.jpg","latest":"n"},{"id":2322,"name":"Torvald","feName":"Torvald","title":"The Runic Sage","role":"Paladins Front Line","feRole":"Paladins Front Line","image":"https://web2.hirez.com/paladins/champion-icons/torvald.jpg","latest":"n"},{"id":2314,"name":"Tyra","feName":"Tyra","title":"The Untamed","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/tyra.jpg","latest":"n"},{"id":2285,"name":"Viktor","feName":"Viktor","title":"The Lone Wolf","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/viktor.jpg","latest":"n"},{"id":2480,"name":"Vivian","feName":"Vivian","title":"The Cunning","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/vivian.jpg","latest":"n"},{"id":2536,"name":"Vora","feName":"Vora","title":"The Harbinger","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/vora.jpg","latest":"y"},{"id":2393,"name":"Willo","feName":"Willo","title":"of the Summer Court","role":"Paladins Damage","feRole":"Paladins Damage","image":"https://web2.hirez.com/paladins/champion-icons/willo.jpg","latest":"n"},{"id":2267,"name":"Ying","feName":"Ying","title":"The Blossom","role":"Paladins Support","feRole":"Paladins Support","image":"https://web2.hirez.com/paladins/champion-icons/ying.jpg","latest":"n"},{"id":2420,"name":"Zhin","feName":"Zhin","title":"The Tyrant","role":"Paladins Flanker","feRole":"Paladins Flanker","image":"https://web2.hirez.com/paladins/champion-icons/zhin.jpg","latest":"n"}]')},164:function(e,n,t){"use strict";t.r(n);t(62),t(63),t(156),t(28),t(17),t(38),t(160);var o=t(79);var l=t(106);function r(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t(5),t(8),t(9),t(10);var m=t(163),d={data:function(){return{json:m,randomChampion:null,selectedRoles:[],roles:[]}},created:function(){this.roles=r(new Set(m.flatMap((function(e){return e.feRole})))),this.selectedRoles=r(new Set(m.flatMap((function(e){return e.feRole})))),this.loadRandomChamption()},methods:{loadRandomChamption:function(){var e=this,n=this.json.filter((function(n){return e.selectedRoles.some((function(e){return n.feRole.includes(e)}))}));this.randomChampion=n[Math.floor(Math.random()*n.length)],null==this.randomChampion&&(this.selectedRoles=r(new Set(this.json.flatMap((function(e){return e.feRole})))),this.loadRandomChamption())}},watch:{selectedRoles:function(e,n){this.loadRandomChamption()}}},c=t(35),component=Object(c.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"hero",staticStyle:{"content-visibility":"auto"}},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"content container box",staticStyle:{"background-color":"#b8c6db","background-image":"linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"}},[t("div",{staticClass:"columns is-vcentered"},[t("div",{staticClass:"column is-6 is-narrow"},[t("div",{staticClass:"container"},[t("b-field",{attrs:{label:"Klasse"}},[t("b-dropdown",{attrs:{multiple:"","aria-role":"list"},model:{value:e.selectedRoles,callback:function(n){e.selectedRoles=n},expression:"selectedRoles"}},[t("b-button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[t("span",[e._v("Ausgewählte ("+e._s(e.selectedRoles.length)+")")])]),e._v(" "),e._l(e.roles,(function(n){return t("b-dropdown-item",{key:n,attrs:{value:n,"aria-role":"listitem"}},[t("span",[e._v(e._s(n))])])}))],2)],1),e._v(" "),t("b-button",{staticClass:"button is-primary",attrs:{type:"button"},on:{click:e.loadRandomChamption}},[e._v("Neuer Champion")]),e._v(" "),e.selectedRoles.length>0?t("b-field",[t("p",{staticClass:"content"},[t("b",[e._v("Ausgewählte Rollen")]),e._v("\n                : "+e._s(e.selectedRoles.join(", "))+"\n              ")])]):e._e()],1),e._v(" "),t("p",{staticClass:"content"},[t("b",[e._v("Dein Random Champion:")]),e._v("\n            : "+e._s(e.randomChampion.feName)+"\n          ")])]),e._v(" "),t("div",{staticClass:"column is-6"},[null!=e.randomChampion?t("b-image",{attrs:{rounded:"",src:e.randomChampion.image}}):e._e()],1)])])])])}),[],!1,null,null,null);n.default=component.exports}}]);