"use strict";(self["webpackChunktoutiao_m"]=self["webpackChunktoutiao_m"]||[]).push([[868],{2868:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-container"},[s("form",{attrs:{action:"/"}},[s("van-search",{attrs:{"show-action":"",background:"#3296fa",placeholder:"请输入搜索关键词"},on:{search:e.onSearch,cancel:e.onCancel,focus:function(t){e.isResultShow=!1}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),e.isResultShow?s("search-result",{attrs:{searchText:e.searchText}}):e.searchText?s("search-suggestion",{attrs:{searchText:e.searchText},on:{search:e.onSearch}}):s("search-history",{attrs:{searchHistories:e.searchHistories},on:{"clear-search-histories":function(t){e.searchHistories=[]},search:e.onSearch}})],1)},r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-history"},[s("van-cell",{attrs:{title:"搜索历史"}},[e.isDeleteShow?[s("span",{on:{click:function(t){return e.$emit("clear-search-histories")}}},[e._v("全部删除")]),e._v("    "),s("span",{on:{click:function(t){e.isDeleteShow=!1}}},[e._v("完成")])]:s("van-icon",{attrs:{name:"delete"},on:{click:function(t){e.isDeleteShow=!0}}})],2),e._l(e.searchHistories,(function(t,a){return s("van-cell",{key:a,attrs:{title:t},on:{click:function(s){return e.onHistoryClick(t,a)}}},[e.isDeleteShow?s("van-icon",{attrs:{name:"close"}}):e._e()],1)}))],2)},n=[],c={name:"SearchHistory",props:{searchHistories:{type:Array,default:()=>[]}},data(){return{isDeleteShow:!1,searchHistoriesClone:this.searchHistories}},methods:{onHistoryClick(e,t){this.isDeleteShow?this.searchHistoriesClone.splice(t,1):this.$emit("search",e)}}},o=c,h=s(1001),l=(0,h.Z)(o,i,n,!1,null,"9b4a977e",null),u=l.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-suggestion"},e._l(e.suggestions,(function(t,a){return s("van-cell",{key:a,attrs:{icon:"search"},on:{click:function(s){return e.$emit("search",t)}}},[s("span",{attrs:{slot:"title"},domProps:{innerHTML:e._s(e.highlight(t))},slot:"title"})])})),1)},f=[],g=s(5755),p=s(6486),S={name:"SearchSuggestion",props:{searchText:{type:String,default:""}},data(){return{suggestions:[]}},watch:{searchText:{handler:(0,p.debounce)((function(e){this.loadSearchSuggestion(e)}),200),immediate:!0}},methods:{async loadSearchSuggestion(e){try{const{data:t}=await(0,g.hz)(e);this.suggestions=t.data.options}catch{this.$toast("获取失败")}},highlight(e){const t=`<span class="active">${this.searchText}</span>`;return e&&e.split(this.searchText).join(t)}}},m=S,x=(0,h.Z)(m,d,f,!1,null,"3f0e0210",null),_=x.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-result"},[s("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了",error:e.error,"error-text":"加载失败，请点击重试"},on:{"update:error":function(t){e.error=t},load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(e){return s("van-cell",{key:e.art_id,attrs:{title:e.title}})})),1)],1)},T=[],H={name:"SearchResult",props:{searchText:{type:String,default:""}},data(){return{list:[],loading:!1,finished:!1,page:1,perPage:20,error:!1}},methods:{async onLoad(){try{const{data:e}=await(0,g.Sx)({page:this.page,per_page:this.perPage,q:this.searchText});this.list.push(...e.data.results),this.loading=!1,e.data.results.length?this.page++:this.finished=!0}catch(e){this.error=!0,this.loading=!1}}}},k=H,w=(0,h.Z)(k,v,T,!1,null,"2b7fc093",null),y=w.exports,C=s(5922),b={name:"SearchPage",components:{SearchHistory:u,SearchSuggestion:_,SearchResult:y},data(){return{searchText:"",isResultShow:!1,searchHistories:(0,C.rV)("TOUTIAO_SEARCH_HISTORIES")||[]}},watch:{searchHistories(e){(0,C.LS)("TOUTIAO_SEARCH_HISTORIES",e)}},methods:{onSearch(e){this.searchText=e;const t=this.searchHistories.indexOf(e);-1!==t&&this.searchHistories.splice(t,1),this.searchHistories.unshift(e),this.isResultShow=!0},onCancel(){this.$toast("取消"),this.$router.back()}}},$=b,R=(0,h.Z)($,a,r,!1,null,"41ebcab7",null),E=R.exports}}]);
//# sourceMappingURL=868.43037157.js.map