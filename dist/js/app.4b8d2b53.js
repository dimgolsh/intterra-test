(function(t){function e(e){for(var r,o,i=e[0],u=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"30d0":function(t,e,n){"use strict";var r=n("cf90"),a=n.n(r);a.a},"33ff":function(t,e,n){},"548e":function(t,e,n){"use strict";var r=n("8008"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("9955"),s=n.n(a),o=n("2ef0"),i=n.n(o),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header"),n("div",{staticClass:"wrap"},[n("router-view")],1)])},l=[],c=n("2877"),d={},f=Object(c["a"])(d,u,l,!1,null,null,null),p=f.exports,h=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page_header"},[n("h1",[t._v("Операции на поле "+t._s(t.$route.params.id))])]),n("FieldTableActions",{attrs:{filters:t.filters}}),t.loading?n("TableLoader"):n("field-table",{attrs:{values:t.operations,sort:"date"},scopedSlots:t._u([{key:"body",fn:function(e){return[n("transition-group",{attrs:{tag:"tbody",name:"list"}},t._l(e.values,(function(e){return n("tr",{key:e.id},[n("th",{staticClass:"opacity-8",attrs:{scope:"row"}},[t._v(t._s(t._f("capitalize")(e.date)))]),n("td",{staticClass:"font-weight-meduim"},[t._v(t._s(e.type))]),n("td",{staticClass:"cultureIcon"},[n("SvgIcon",{attrs:{iconClass:e.cultureIcon}}),n("p",[t._v(t._s(e.culture))])],1),n("td",{class:e.assessmentClassname},[n("div",{staticClass:"field_status"},[n("div",{staticClass:"pils"}),n("p",[t._v(t._s(e.assessment))])])])])})),0)]}}])},[n("thead",{staticClass:"bg-gray"},[n("tr",t._l(t.columns,(function(e){var r=e.title,a=e.key,s=e.width;return n("th",{key:a,style:"width: "+s+";",attrs:{scope:"col"}},[n("sort-link",{attrs:{name:a}},[t._v(t._s(r))])],1)})),0)])])],1)},v=[],y=(n("ac1f"),n("5319"),n("5530")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table_actions"},[n("FieldTableFIlters",{attrs:{filters:t.filters}})],1)},O=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table_filter_links"},t._l(t.filters,(function(e){var r,a=e.key,s=e.value,o=e.name;return n("router-link",{key:s,staticClass:"table_filter_link",attrs:{to:{query:(r={},r[a]=s,r)},exact:"","active-class":"link-active"}},[t._v(t._s(o))])})),1)},I=[],_={props:{filters:{type:Array,required:!0}}},L=_,T=(n("ceef"),Object(c["a"])(L,g,I,!1,null,"61a1eeb9",null)),E=T.exports,w={props:{filters:{type:Array,required:!0}},components:{FieldTableFIlters:E}},k=w,C=(n("30d0"),Object(c["a"])(k,b,O,!1,null,"66afc4f5",null)),S=C.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[t._t("default"),t._t("head"),t._t("body",null,{values:t.sortedValues}),t._t("foot")],2)},j=[],N=(n("d3b7"),n("ddb0"),{name:"FieldTable",props:{values:{required:!0,default:null},dir:{type:String,default:"asc"},sort:{type:String}},data:function(){return{sortKey:this.sort?[this.sort]:["id"],sortOrder:["asc"]}},computed:{sortedValues:function(){return this._.orderBy(this.values,this.sortKey,this.sortOrder)}},methods:{getCurrentSort:function(){return this.sortKey},getSortIcon:function(){return"asc"===this.sortOrder?"▼":"▲"},sortBy:function(t){t==this.sortKey?this.sortOrder="asc"==this.sortOrder?"desc":"asc":(this.sortKey=t,this.sortOrder="asc")}}}),x=N,G=Object(c["a"])(x,A,j,!1,null,null,null),R=G.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("thead",{staticClass:"bg-gray"},[n("tr",t._l(t.columnCount,(function(t){return n("th",{key:t},[n("LoadingContentLoader")],1)})),0)]),n("tbody",t._l(6,(function(e){return n("tr",{key:e},t._l(t.columnCount,(function(t){return n("th",{key:t},[n("LoadingContentLoader")],1)})),0)})),0)])},W=[],F=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-loader",{attrs:{width:100,height:20,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"}},[n("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"2",width:"100",height:"20"}})])}),$=[],H=n("e330"),D={components:{ContentLoader:H["a"]}},B=D,q=Object(c["a"])(B,F,$,!1,null,null,null),Y=q.exports,M={props:{columnCount:{type:Number,default:4}},components:{LoadingContentLoader:Y}},V=M,K=(n("c525"),Object(c["a"])(V,P,W,!1,null,"66fce104",null)),X=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$parent.sortBy(t.name)}}},[t._t("default",[t._v(t._s(t.name))]),t._t("icon",[t.$parent.getCurrentSort()==t.name?n("span",{staticClass:"sortActive",domProps:{innerHTML:t._s(t.$parent.getSortIcon())}}):n("span",{staticClass:"sortInactive"},[t._v("▼")])])],2)},J=[],U={name:"SortLink",props:{name:{type:String,required:!0,default:""}}},z=U,Q=Object(c["a"])(z,Z,J,!1,null,null,null),tt=Q.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"icon",class:t.className,attrs:{src:t.publicPath+"/img/icons/Svg/"+t.iconClass+".svg"}})},nt=[],rt={data:function(){return{publicPath:""}},name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}}},at=rt,st=(n("a4aa"),Object(c["a"])(at,et,nt,!1,null,null,null)),ot=st.exports,it=n("2f62"),ut={data:function(){return{params:{},columns:[{title:"Дата",key:"date",width:"5rem"},{title:"Операция",key:"type",width:"20rem"},{title:"Культура",key:"culture",width:"15rem"},{title:"Качество",key:"assessment",width:"10rem"}],filters:[{name:"Запланированные операции",key:"status",value:"0"},{name:"Выполненные операции",key:"status",value:"1"}]}},watch:{"$route.query":function(){this.setParams(),this.fetchData()}},components:{FieldTableActions:S,FieldTable:R,TableLoader:X,SortLink:tt,SvgIcon:ot},created:function(){this.setParams(),this.fetchData()},filters:{capitalize:function(t){return t.replace(/\s*г\./,"").toUpperCase()}},methods:{setParams:function(){this.params={fieldId:this.$route.params.id,query:this.$route.query}},fetchData:function(){this.$store.dispatch("getOperations",this.params)}},computed:Object(y["a"])({},Object(it["b"])({operations:function(t){return t.operations},loading:function(t){return t.loading}}))},lt=ut,ct=(n("548e"),Object(c["a"])(lt,m,v,!1,null,"0097eae5",null)),dt=ct.exports;r["a"].use(h["a"]);var ft,pt,ht,mt=[{path:"/",name:"Home",redirect:"/field/112"},{path:"/field/:id",name:"field",component:dt}],vt=new h["a"]({mode:"history",base:"",routes:mt}),yt=vt,bt=(n("d81d"),n("96cf"),n("1da1")),Ot=(n("4de4"),n("7db0"),n("c975"),n("a434"),n("b64b"),n("d4ec")),gt=n("bee2"),It=n("ade3"),_t=function t(e){Object(Ot["a"])(this,t);var n=e.year,r=e.month,a=e.day;this.year=n,this.month=r,this.day=a};(function(t){t[t["PLOWING"]=0]="PLOWING",t[t["BOWLING"]=1]="BOWLING",t[t["FERTILIZATION"]=2]="FERTILIZATION",t[t["WATERING"]=3]="WATERING",t[t["RIGGING"]=4]="RIGGING",t[t["HARVESTING"]=5]="HARVESTING"})(ft||(ft={})),function(t){t[t["EXCELLENT"]=0]="EXCELLENT",t[t["SATISFACTORILY"]=1]="SATISFACTORILY",t[t["BADLY"]=2]="BADLY"}(pt||(pt={})),function(t){t[t["WHEAT"]=0]="WHEAT"}(ht||(ht={}));var Lt=function t(e){Object(Ot["a"])(this,t);var n=e.id,r=void 0===n?null:n,a=e.type,s=e.date,o=e.area,i=e.comment,u=void 0===i?null:i,l=e.assessment,c=void 0===l?null:l,d=e.culture,f=void 0===d?null:d,p=e.status,h=void 0===p?0:p;this.id=r,this.type=a,this.date=new _t(s),this.area=o,this.comment=u,this.assessment=c,this.culture=f,this.status=h},Tt=(n("4fad"),function(t){return 0===Object.entries(t).length}),Et=function(t,e){var n=e.column,r=e.value;return n in t?t[n]==r:t},wt=function(){function t(){Object(Ot["a"])(this,t),Object(It["a"])(this,"delay",(function(t){return new Promise((function(e){return setTimeout((function(){return e()}),t)}))})),this.operations=[new Lt({id:"f112-o0",type:ft.PLOWING,date:{year:2018,month:3,day:12},area:48.2,comment:"Отлично вспахали",assessment:pt.EXCELLENT,culture:ht.WHEAT,status:1}),new Lt({id:"f112-o1",type:ft.FERTILIZATION,date:{year:2018,month:3,day:14},area:47.8,comment:"Все прошло нормально",assessment:pt.SATISFACTORILY,culture:ht.WHEAT,status:1}),new Lt({id:"f112-o2",type:ft.RIGGING,date:{year:2018,month:3,day:17},area:47.5,comment:null,assessment:pt.BADLY,culture:ht.WHEAT,status:1}),new Lt({id:"f112-o3",type:ft.BOWLING,date:{year:2018,month:3,day:26},area:48.2,comment:null,assessment:null,culture:ht.WHEAT,status:0}),new Lt({id:"f112-o4",type:ft.WATERING,date:{year:2018,month:4,day:2},area:48.1,comment:"Знатно полили",assessment:pt.EXCELLENT,culture:ht.WHEAT,status:1}),new Lt({id:"f112-o5",type:ft.HARVESTING,date:{year:2018,month:6,day:20},area:48,comment:null,assessment:null,culture:ht.WHEAT,status:0})]}return Object(gt["a"])(t,[{key:"getOperations",value:function(){var t=this;return new Promise((function(e){setTimeout((function(){var n=t.operations.map((function(t){return t}));e(n)}),10)}))}},{key:"getOperationsFilter",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n={column:Object.keys(e)[0],value:e[Object.keys(e)[0]]};return this.delay(1e3).then((function(){return t.operations.map((function(t){return t})).filter((function(t){return Et(t,n)}))}))}},{key:"getOperationSync",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t)return null;var e=this.operations.find((function(e){return e.id===t}));return e||null}},{key:"getOperation",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(n){setTimeout((function(){var r=t.getOperationSync(e),a=r?new Lt(r):null;n(a)}),10)}))}},{key:"saveOperation",value:function(t){var e=this;return new Promise((function(n){setTimeout((function(){var r=e.getOperationIndex(t.id),a=-1!==r,s=new Lt(t);a?e.operations.splice(r,1,s):(s.id=e.getNextId(),e.operations.push(s));var o=new Lt(s);n(o)}),10)}))}},{key:"getOperationIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t)return-1;var e=this.getOperationSync(t);return null===e?-1:this.operations.indexOf(e)}},{key:"getNextId",value:function(){var t=this.operations.length;return"f112-o".concat(t)}}]),t}(),kt=n("dfb4"),Ct=function(){function t(e){Object(Ot["a"])(this,t),this.locale=e,this.locales={"ru-RU":kt},this.currentLocale=this.checkLocale()}return Object(gt["a"])(t,[{key:"checkLocale",value:function(){return this.locale in this.locales?this.locales[this.locale]:null}},{key:"localeData",value:function(t){var e,n=t.type,r=t.assessment,a=t.date,s=t.culture;return this.currentLocale?Object(y["a"])(Object(y["a"])({},t),{},{type:this.localeItem(n),assessment:null!==(e=this.localeItem(r))&&void 0!==e?e:"Нет оценки",culture:this.localeItem(s),date:this.localeDate(a)}):Object(y["a"])(Object(y["a"])({},t),{},{date:this.localeDate(a)})}},{key:"localeItem",value:function(t){return t in this.currentLocale?this.currentLocale[t]:t}},{key:"localeDate",value:function(t){var e=t.year,n=t.month,r=t.day,a=new Date(e,n,r);return a.toLocaleString([this.locale],{month:"short",day:"numeric",year:"numeric"})}}]),t}(),St=function(t,e){return e in t?t[e]:e},At=function(t){var e=t.type,n=t.assessment,r=t.culture;return Object(y["a"])(Object(y["a"])({},t),{},{type:St(ft,e),assessment:St(pt,n),assessmentClassname:St(pt,n)?St(pt,n).toLowerCase():"noneMark",culture:St(ht,r),cultureIcon:St(ht,r)?St(ht,r).toLowerCase():null})};r["a"].use(it["a"]);var jt=new wt,Nt=new it["a"].Store({state:{locale:"ru-RU",loading:!1,error:null,operations:{}},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null},setOperations:function(t,e){t.operations=e}},actions:{setLoading:function(t,e){var n=t.commit;n("setLoading",e)},setError:function(t,e){var n=t.commit;n("setError",e)},clearError:function(t){var e=t.commit;e("clearError")},getOperations:function(t,e){return Object(bt["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o,i,u,l,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.commit,a=t.state,r("setLoading",!0),r("clearError"),s=e.fieldId,o=e.query,!Tt(o)){n.next=10;break}return n.next=7,jt.getOperations(s);case 7:n.t0=n.sent,n.next=13;break;case 10:return n.next=12,jt.getOperationsFilter(o);case 12:n.t0=n.sent;case 13:return i=n.t0,n.next=16,i.map(At);case 16:return u=n.sent,l=new Ct(a.locale),n.next=20,u.map((function(t){return l.localeData(t)}));case 20:c=n.sent,r("setOperations",c),r("setLoading",!1);case 23:case"end":return n.stop()}}),n)})))()}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}},modules:{}});n("b089");r["a"].use(s.a,{lodash:i.a}),r["a"].config.productionTip=!1,new r["a"]({router:yt,store:Nt,render:function(t){return t(p)}}).$mount("#app")},8008:function(t,e,n){},"9ad3":function(t,e,n){},a48d:function(t,e,n){},a4aa:function(t,e,n){"use strict";var r=n("33ff"),a=n.n(r);a.a},b089:function(t,e,n){},c525:function(t,e,n){"use strict";var r=n("a48d"),a=n.n(r);a.a},ceef:function(t,e,n){"use strict";var r=n("9ad3"),a=n.n(r);a.a},cf90:function(t,e,n){},dfb4:function(t){t.exports=JSON.parse('{"PLOWING":"Вспашка","BOWLING":"Боронование","FERTILIZATION":"Внесение удобрений","WATERING":"Полив","RIGGING":"Прикатывание","HARVESTING":"Сбор урожая","EXCELLENT":"Отлично","SATISFACTORILY":"Удовлетворительно","BADLY":"Плохо","WHEAT":"Пшеница озимая"}')}});
//# sourceMappingURL=app.4b8d2b53.js.map