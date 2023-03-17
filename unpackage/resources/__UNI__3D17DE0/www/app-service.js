if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){const e=this.constructor;return this.then((n=>e.resolve(t()).then((()=>n))),(n=>e.resolve(t()).then((()=>{throw n}))))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){const t=uni.requireGlobal();ArrayBuffer=t.ArrayBuffer,Int8Array=t.Int8Array,Uint8Array=t.Uint8Array,Uint8ClampedArray=t.Uint8ClampedArray,Int16Array=t.Int16Array,Uint16Array=t.Uint16Array,Int32Array=t.Int32Array,Uint32Array=t.Uint32Array,Float32Array=t.Float32Array,Float64Array=t.Float64Array,BigInt64Array=t.BigInt64Array,BigUint64Array=t.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(Vue,weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),function(t){"use strict";function e(t,e,...n){uni.__log__?uni.__log__(t,e,...n):console[t].apply(console,[...n,e])}const n={TEXT:"text",LOGIN:"login",READ_MSG:"readMsg"};class s{static getLogin(){return{uid:this.login.uid?this.login.uid:uni.getStorageSync("loginUid")}}static login(t){uni.setStorageSync("loginUid",t)}}function o(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}const i="function"==typeof Proxy;class r{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const r in t.settings){const e=t.settings[r];n[r]=e.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let o={...n};try{const t=localStorage.getItem(s),e=JSON.parse(t);Object.assign(o,e)}catch(i){}this.fallbacks={getSettings:()=>o,setSettings(t){try{localStorage.setItem(s,JSON.stringify(t))}catch(i){}o=t}},e.on("plugin:settings:set",((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function a(t,e){const n=o(),s=o().__VUE_DEVTOOLS_GLOBAL_HOOK__,a=i&&t.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const o=a?new r(t,s):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}else s.emit("devtools-plugin:setup",t,e)}
/*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */function c(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function u(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(e,n,s){var o=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,a={},l={},u=t.effectScope(!0);u.run((function(){c(r,(function(n,s){a[s]=function(t,e){return function(){return t(e)}}(n,e),l[s]=t.computed((function(){return a[s]()})),Object.defineProperty(e.getters,s,{get:function(){return l[s].value},enumerable:!0})}))})),e._state=t.reactive({data:n}),e._scope=u,e.strict&&function(e){t.watch((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),o&&s&&e._withCommit((function(){o.data=null})),i&&i.stop()}function p(t,e,n,s,o){var i=!n.length,r=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[r],t._modulesNamespaceMap[r]=s),!i&&!o){var a=g(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=s.state}))}var l=s.context=function(t,e,n){var s=""===e,o={dispatch:s?t.dispatch:function(n,s,o){var i=m(n,s,o),r=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,r)},commit:s?t.commit:function(n,s,o){var i=m(n,s,o),r=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,r,a)}};return Object.defineProperties(o,{getters:{get:s?function(){return t.getters}:function(){return h(t,e)}},state:{get:function(){return g(t.state,n)}}}),o}(t,r,n);s.forEachMutation((function(e,n){!function(t,e,n,s){var o=t._mutations[e]||(t._mutations[e]=[]);o.push((function(e){n.call(t,s.state,e)}))}(t,r+n,e,l)})),s.forEachAction((function(e,n){var s=e.root?n:r+n,o=e.handler||e;!function(t,e,n,s){var o=t._actions[e]||(t._actions[e]=[]);o.push((function(e){var o,i=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},e);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,s,o,l)})),s.forEachGetter((function(e,n){!function(t,e,n,s){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return n(s.state,s.getters,t.state,t.getters)}}(t,r+n,e,l)})),s.forEachChild((function(s,i){p(t,e,n.concat(i),s,o)}))}function h(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,s)===e){var i=o.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function g(t,e){return e.reduce((function(t,e){return t[e]}),t)}function m(t,e,n){var s;return null!==(s=t)&&"object"==typeof s&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var f="vuex:mutations",v="vuex:actions",y="vuex",_=0;function w(t,e){a({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:f,label:"Vuex Mutations",color:b}),n.addTimelineLayer({id:v,label:"Vuex Actions",color:b}),n.addInspector({id:y,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===y)if(n.filter){var s=[];V(s,e._modules.root,n.filter,""),n.rootNodes=s}else n.rootNodes=[x(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===y){var s=n.nodeId;h(e,s),n.state=function(t,e,n){e="root"===n?e:e[n];var s=Object.keys(e),o={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(s.length){var i=function(t){var e={};return Object.keys(t).forEach((function(n){var s=n.split("/");if(s.length>1){var o=e,i=s.pop();s.forEach((function(t){o[t]||(o[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),o=o[t]._custom.value})),o[i]=C((function(){return t[n]}))}else e[n]=C((function(){return t[n]}))})),e}(e);o.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?k(t):t,editable:!1,value:C((function(){return i[t]}))}}))}return o}((o=e._modules,(r=(i=s).split("/").filter((function(t){return t}))).reduce((function(t,e,n){var s=t[e];if(!s)throw new Error('Missing module "'+e+'" for path "'+i+'".');return n===r.length-1?s:s._children}),"root"===i?o:o.root._children)),"root"===s?e.getters:e._makeLocalGettersCache,s)}var o,i,r})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===y){var s=n.nodeId,o=n.path;"root"!==s&&(o=s.split("/").filter(Boolean).concat(o)),e._withCommit((function(){n.set(e._state.data,o,n.state.value)}))}})),e.subscribe((function(t,e){var s={};t.payload&&(s.payload=t.payload),s.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(y),n.sendInspectorState(y),n.addTimelineEvent({layerId:f,event:{time:Date.now(),title:t.type,data:s}})})),e.subscribeAction({before:function(t,e){var s={};t.payload&&(s.payload=t.payload),t._id=_++,t._time=Date.now(),s.state=e,n.addTimelineEvent({layerId:v,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:s}})},after:function(t,e){var s={},o=Date.now()-t._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},t.payload&&(s.payload=t.payload),s.state=e,n.addTimelineEvent({layerId:v,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:s}})}})}))}var b=8702998,E={label:"namespaced",textColor:16777215,backgroundColor:6710886};function k(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function x(t,e){return{id:e||"root",label:k(e),tags:t.namespaced?[E]:[],children:Object.keys(t._children).map((function(n){return x(t._children[n],e+n+"/")}))}}function V(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[E]:[]}),Object.keys(e._children).forEach((function(o){V(t,e._children[o],n,s+o+"/")}))}function C(t){try{return t()}catch(e){return e}}var I=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},T={namespaced:{configurable:!0}};T.namespaced.get=function(){return!!this._rawModule.namespaced},I.prototype.addChild=function(t,e){this._children[t]=e},I.prototype.removeChild=function(t){delete this._children[t]},I.prototype.getChild=function(t){return this._children[t]},I.prototype.hasChild=function(t){return t in this._children},I.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},I.prototype.forEachChild=function(t){c(this._children,t)},I.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},I.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},I.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(I.prototype,T);var N=function(t){this.register([],t,!1)};function A(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;A(t.concat(s),e.getChild(s),n.modules[s])}}N.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},N.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},N.prototype.update=function(t){A([],this.root,t)},N.prototype.register=function(t,e,n){var s=this;void 0===n&&(n=!0);var o=new I(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&c(e.modules,(function(e,o){s.register(t.concat(o),e,n)}))},N.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],s=e.getChild(n);s&&s.runtime&&e.removeChild(n)},N.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var M=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var s=t.strict;void 0===s&&(s=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new N(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var i=this,r=this.dispatch,a=this.commit;this.dispatch=function(t,e){return r.call(i,t,e)},this.commit=function(t,e,n){return a.call(i,t,e,n)},this.strict=s;var c=this._modules.root.state;p(this,c,[],this._modules.root),d(this,c),n.forEach((function(t){return t(e)}))},S={state:{configurable:!0}};M.prototype.install=function(t,e){t.provide(e||"store",this),t.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&w(t,this)},S.state.get=function(){return this._state.data},S.state.set=function(t){},M.prototype.commit=function(t,e,n){var s=this,o=m(t,e,n),i=o.type,r=o.payload,a={type:i,payload:r},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(r)}))})),this._subscribers.slice().forEach((function(t){return t(a,s.state)})))},M.prototype.dispatch=function(t,e){var n=this,s=m(t,e),o=s.type,i=s.payload,r={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(r,n.state)}))}catch(l){}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(r,n.state)}))}catch(l){}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(r,n.state,t)}))}catch(l){}e(t)}))}))}},M.prototype.subscribe=function(t,e){return l(t,this._subscribers,e)},M.prototype.subscribeAction=function(t,e){return l("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},M.prototype.watch=function(e,n,s){var o=this;return t.watch((function(){return e(o.state,o.getters)}),n,Object.assign({},s))},M.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},M.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},M.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete g(e.state,t.slice(0,-1))[t[t.length-1]]})),u(this)},M.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},M.prototype.hotUpdate=function(t){this._modules.update(t),u(this,!0)},M.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(M.prototype,S);const O=new M({state:{msgs:{},readMsgs:[],tipCount:{},connectProcess:"ok"},mutations:{push(t,e){let n=s.getLogin().uid!=e.fr?e.fr:e.to;null==t.msgs[n]&&(t.msgs[n]=[]),t.msgs[n].push(e)},addReadMsgs(t,e){t.readMsgs=t.readMsgs.concat(e)},addTipCount(t,e){let n=e.uid,s=e.count;null==t.tipCount[n]&&(t.tipCount[n]=0),t.tipCount[n]+=s},setConnectProcess(t,e){t.connectProcess=e}}});class j{setFr(t){return this.fr=t,this}setTo(t){return this.to=t,this}setMsgType(t){return this.msgType=t,this}build(){let t=Date.now();return{msgId:t+"_"+Math.random().toString(36).substr(2,9),fr:this.fr,to:this.to,sendTimestamp:t,msgType:this.msgType}}}class P extends j{}class B extends j{setText(t){return this.text=t,this}build(){let t=super.build();return t.data={text:this.text},t}}class L extends j{setReadMsgIds(t){return this.readMsgIds=t,this}build(){let t=super.build();return t.data={readMsgIds:this.readMsgIds},t}}class U{constructor(){this.socketTask=null,this.connecting=!1,this.reconnectTimes=0}static getInstance(){return this.instance||(this.instance=new U),this.instance}getWsIp(){return this.wsIp||(this.wsIp=uni.getStorageSync("wsIp"))||(this.wsIp="127.0.0.1"),this.wsIp}setWsIp(t){this.wsIp=t,uni.setStorageSync("wsIp",t)}connect(){try{this.socketTask=uni.connectSocket({url:"ws://"+this.getWsIp()+":8081/websocket",success(){return e("log","at common/ws.js:44","开始建立连接"),this.socketTask}}),this.socketTask.onMessage((t=>{e("log","at common/ws.js:51","收到数据:"+t.data),this.onMessage(JSON.parse(t.data))})),this.socketTask.onOpen((t=>{e("log","at common/ws.js:56","连接已打开"),O.commit("setConnectProcess","ok"),this.reconnectTimes=0;let o=(new P).setFr(s.getLogin().uid).setMsgType(n.LOGIN).build();this.send(o)})),this.socketTask.onError((t=>{this.reconnect()})),this.socketTask.onClose((t=>{this.reconnect()}))}catch(t){e("log","at common/ws.js:77",t)}}reconnect(){this.connecting||(O.commit("setConnectProcess","连接失败,第"+ ++this.reconnectTimes+"次重连..."+this.wsIp),this.connecting=!0,setTimeout((()=>{this.connect(),this.connecting=!1}),2e3))}pushMsg(t){O.commit("push",t)}onMessage(t){O.commit("addTipCount",{uid:t.fr,count:1}),this.pushMsg(t)}send(t){let n=JSON.stringify(t);try{this.socketTask.send({data:n})}catch(s){e("log","at common/ws.js:117",s)}}}class D{setAvatar(t){return this.avatar=t,this}setName(t){return this.name=t,this}setTipCount(t){return this.tipCount=t,this}setDate(t){return this.date=t,this}setText(t){return this.text=t,this}build(){return{avatar:this.avatar,name:this.name,date:this.date,text:this.text,tipCount:this.tipCount}}}class G{static transform(t){let e=new Date,n=new Date(t);return n.getFullYear()+n.getMonth()+n.getDate()==e.getFullYear()+e.getMonth()+e.getDate()?n.getHours()+":"+n.getMinutes():n.getMonth()+"-"+n.getDate()}}const H=(t,e)=>{const n=t.__vccOpts||t;for(const[s,o]of e)n[s]=o;return n};const R=H({data:()=>({}),computed:{chatViews(){try{if(!s.getLogin().uid)return;if(0==Object.keys(O.state.msgs).length){let t="123"==s.getLogin().uid?"456":"123",e=null==O.state.tipCount[t]?0:O.state.tipCount[t];return[(new D).setAvatar("../static/botAvatar.png").setName(t).setDate("12:00").setText("hi, sb").setTipCount(e).build()]}{let t=[];for(let e in O.state.msgs){let n=O.state.msgs[e],s=n[n.length-1],o=null==O.state.tipCount[e]?0:O.state.tipCount[e],i=s.data.text.length>24?s.data.text.slice(0,24)+"...":s.data.text,r=(new D).setAvatar("../static/botAvatar.png").setName(e).setDate(G.transform(s.sendTimestamp)).setText(i).setTipCount(o).build();t.push(r)}return t}}catch(t){e("log","at pages/index.vue:87",t)}},connectProcess:()=>O.state.connectProcess},created(){s.getLogin().uid?U.getInstance().connect():uni.reLaunch({url:"/pages/login"})},methods:{f(t){uni.navigateTo({url:"/pages/chat/personal?uid="+t})}}},[["render",function(e,n,s,o,i,r){return t.openBlock(),t.createElementBlock("view",{class:"content"},["ok"!=r.connectProcess?(t.openBlock(),t.createElementBlock("view",{key:0,class:"connectProcess"},t.toDisplayString(r.connectProcess),1)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(r.chatViews,(e=>(t.openBlock(),t.createElementBlock("scroll-view",null,[t.createElementVNode("view",{class:"chatCell",onClick:t=>r.f(e.name)},[t.createElementVNode("view",{class:"avatarView"},[t.createElementVNode("image",{class:"avatar",src:e.avatar},null,8,["src"]),e.tipCount>0?(t.openBlock(),t.createElementBlock("view",{key:0,class:"tips"},t.toDisplayString(e.tipCount),1)):t.createCommentVNode("",!0)]),t.createElementVNode("view",{class:"textView"},[t.createElementVNode("view",{class:"username"},t.toDisplayString(e.name),1),t.createElementVNode("view",{class:"text"},t.toDisplayString(e.text),1)]),t.createElementVNode("view",{class:"dateView"},t.toDisplayString(e.date),1)],8,["onClick"])])))),256))])}]]);const F=H({data:()=>({}),methods:{quit(){s.login(""),uni.reLaunch({url:"/pages/login"})}}},[["render",function(e,n,s,o,i,r){return t.openBlock(),t.createElementBlock("view",{class:"content"},[t.createElementVNode("view",{class:"header"},[t.createElementVNode("image",{class:"avatar",src:"/static/avatar.png"}),t.createElementVNode("view",{class:"relation"},[t.createElementVNode("view",{class:"number"},"12"),t.createElementVNode("view",{class:"text"},"好友")]),t.createElementVNode("view",{class:"relation"},[t.createElementVNode("view",{class:"number"},"47"),t.createElementVNode("view",{class:"text"},"群组")]),t.createElementVNode("view",{class:"relation"},[t.createElementVNode("view",{class:"number"},"5"),t.createElementVNode("view",{class:"text"},"聊天室")])]),t.createElementVNode("view",{style:{display:"flex","flex-direction":"row"}},[t.createElementVNode("view",{class:"name"},"卡卡迪曼")]),t.createElementVNode("view",{class:"sign"}," 签名：他写了个寂寞，并且一脸无辜～ "),t.createElementVNode("view",{class:"setting",onClick:n[0]||(n[0]=(...t)=>r.quit&&r.quit(...t))},"退出")])}]]);const Q=H({data:()=>({username:"",password:""}),methods:{login(){s.login(this.username),uni.switchTab({url:"/pages/index"})},u_input(t){this.username=t.detail.value},setting(){uni.showModal({title:"设置ws地址",editable:!0,success:function(t){t.confirm&&U.getInstance().setWsIp(t.content)}})}}},[["render",function(e,n,s,o,i,r){return t.openBlock(),t.createElementBlock("view",{class:"content"},[t.createElementVNode("image",{onClick:n[0]||(n[0]=(...t)=>r.setting&&r.setting(...t)),class:"setting",src:"/static/setting.png"}),t.createElementVNode("view",{style:{"text-align":"center"}},[t.createElementVNode("image",{class:"logo",src:"/static/login.png"})]),t.createElementVNode("view",null,[t.createElementVNode("input",{class:"input",type:"text",placeholder:"账号",value:i.username,onInput:n[1]||(n[1]=(...t)=>r.u_input&&r.u_input(...t))},null,40,["value"]),t.createElementVNode("input",{class:"input",type:"text",placeholder:"密码",value:i.password},null,8,["value"]),t.createElementVNode("view",{class:"confirm",onClick:n[2]||(n[2]=(...t)=>r.login&&r.login(...t))},"登录")])])}]]);const W=H({data:()=>({message:"",toUid:"",val:"",scrollTop:0,inputAreaHeight:"88px",scrollRealHeight:0,loginUid:s.getLogin().uid}),computed:{msgViewsHeight:()=>uni.getWindowInfo().windowHeight-94+"px",msgs(){try{setTimeout((()=>{uni.createSelectorQuery().selectAll(".msgView").boundingClientRect((t=>{let n=0;t.forEach((t=>{n+=t.height})),this.scrollRealHeight=n,e("log","at pages/chat/personal.vue:64",this.scrollRealHeight),this.scrollTop=this.scrollRealHeight-parseInt(this.msgViewsHeight),e("log","at pages/chat/personal.vue:66",this.scrollTop)})).exec()}),10)}catch(o){e("log","at pages/chat/personal.vue:71",o)}let t=null==O.state.msgs[this.toUid]?[]:O.state.msgs[this.toUid];if(0!=t.length){let e=t[t.length-1].msgId,o=O.state.readMsgs.length;if(0==o||O.state.readMsgs[o-1]!=e){let t=(new L).setFr(s.getLogin().uid).setMsgType(n.READ_MSG).setReadMsgIds([e]).build();U.getInstance().send(t)}}return O.state.tipCount[this.toUid]=0,{msgs:t,l:t.length}}},onLoad(t){this.toUid=t.uid,uni.setNavigationBarTitle({title:this.toUid})},methods:{add(t){e("log","at pages/chat/personal.vue:114",t)},theBlur(t){this.val=t.detail.value},confirm(t){try{let t=(new B).setFr(s.getLogin().uid).setTo(this.toUid).setMsgType(n.TEXT).setText(this.val).build();O.commit("addReadMsgs",[t.msgId]),U.getInstance().send(t),U.getInstance().pushMsg(t),this.val=""}catch(o){e("log","at pages/chat/personal.vue:138",o)}},dateTransform:t=>G.transform(t)}},[["render",function(e,n,s,o,i,r){const a=t.resolveComponent("font");return t.openBlock(),t.createElementBlock("view",{class:"content"},[t.createElementVNode("scroll-view",{style:t.normalizeStyle({height:r.msgViewsHeight}),"scroll-y":"true","scroll-top":i.scrollTop},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(r.msgs.msgs,((e,n)=>(t.openBlock(),t.createElementBlock("view",null,[e.fr==i.loginUid?(t.openBlock(),t.createElementBlock("view",{key:0,class:"msgView",style:{"justify-content":"flex-end"}},[t.createVNode(a,{class:"text",style:{"margin-right":"5px","background-color":"#d1f879"}},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(e.data.text),1)])),_:2},1024),t.createElementVNode("image",{class:"avatar",src:"/static/botAvatar.png"})])):(t.openBlock(),t.createElementBlock("view",{key:1,class:"msgView"},[t.createElementVNode("image",{class:"avatar",src:"/static/botAvatar.png"}),t.createElementVNode("view",{class:"text",style:{"margin-left":"5px","background-color":"aliceblue"}},t.toDisplayString(e.data.text),1)]))])))),256))],12,["scroll-top"]),t.createElementVNode("view",{id:"abc",class:"inputAreaView",style:t.normalizeStyle({height:i.inputAreaHeight})},[t.createElementVNode("input",{class:"input",placeholder:"输入新消息",onConfirm:n[0]||(n[0]=(...t)=>r.confirm&&r.confirm(...t)),value:i.val,onInput:n[1]||(n[1]=(...t)=>r.theBlur&&r.theBlur(...t))},null,40,["value"]),t.createElementVNode("image",{src:"/static/photo.png",class:"photo"}),t.createElementVNode("image",{src:"/static/emotion.png",class:"emotion"})],4)])}]]);__definePage("pages/index",R),__definePage("pages/my",F),__definePage("pages/login",Q),__definePage("pages/chat/personal",W);const q={onLaunch:function(){e("log","at App.vue:4","App Launch")},onShow:function(){e("log","at App.vue:7","App Show")},onHide:function(){e("log","at App.vue:10","App Hide")}};const{app:J,Vuex:z,Pinia:X}=function(){const e=t.createVueApp(q);return e.use(O),{app:e}}();uni.Vuex=z,uni.Pinia=X,J.provide("__globalStyles",__uniConfig.styles),J._component.mpType="app",J._component.render=()=>{},J.mount("#app")}(Vue);
