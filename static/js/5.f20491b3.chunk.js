(this.webpackJsonpSeedWeb=this.webpackJsonpSeedWeb||[]).push([[5],{289:function(e,r,t){"use strict";t.r(r),t.d(r,"AlchemyProvider",(function(){return U}));var n=t(4),o=t(16),i=t(14),a=t(7),s=t(8),c=t(2),u=t(3),l=t(288),E=t(187),h=t(155),f=t(62),N=(t(135),!1),v=!1,R={debug:1,default:2,info:2,warning:3,error:4,off:5},g=R.default,p=null;var O,y,I=function(){try{var e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((function(r){try{if("test"!=="test".normalize(r))throw new Error("bad normalize")}catch(t){e.push(r)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(r){return r.message}return null}();!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(O||(O={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(y||(y={}));var d="0123456789abcdef",w=function(){function e(r){Object(c.a)(this,e),Object.defineProperty(this,"version",{enumerable:!0,value:r,writable:!1})}return Object(u.a)(e,[{key:"_log",value:function(e,r){var t=e.toLowerCase();null==R[t]&&this.throwArgumentError("invalid log level name","logLevel",e),g>R[t]||console.log.apply(console,r)}},{key:"debug",value:function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];this._log(e.levels.DEBUG,t)}},{key:"info",value:function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];this._log(e.levels.INFO,t)}},{key:"warn",value:function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];this._log(e.levels.WARNING,t)}},{key:"makeError",value:function(r,t,n){if(v)return this.makeError("censored error",t,{});t||(t=e.errors.UNKNOWN_ERROR),n||(n={});var o=[];Object.keys(n).forEach((function(e){var r=n[e];try{if(r instanceof Uint8Array){for(var t="",i=0;i<r.length;i++)t+=d[r[i]>>4],t+=d[15&r[i]];o.push(e+"=Uint8Array(0x"+t+")")}else o.push(e+"="+JSON.stringify(r))}catch(c){o.push(e+"="+JSON.stringify(n[e].toString()))}})),o.push("code=".concat(t)),o.push("version=".concat(this.version));var i=r,a="";switch(t){case y.NUMERIC_FAULT:a="NUMERIC_FAULT";var s=r;switch(s){case"overflow":case"underflow":case"division-by-zero":a+="-"+s;break;case"negative-power":case"negative-width":a+="-unsupported";break;case"unbound-bitwise-result":a+="-unbound-result"}break;case y.CALL_EXCEPTION:case y.INSUFFICIENT_FUNDS:case y.MISSING_NEW:case y.NONCE_EXPIRED:case y.REPLACEMENT_UNDERPRICED:case y.TRANSACTION_REPLACED:case y.UNPREDICTABLE_GAS_LIMIT:a=t}a&&(r+=" [ See: https://links.ethers.org/v5-errors-"+a+" ]"),o.length&&(r+=" ("+o.join(", ")+")");var c=new Error(r);return c.reason=i,c.code=t,Object.keys(n).forEach((function(e){c[e]=n[e]})),c}},{key:"throwError",value:function(e,r,t){throw this.makeError(e,r,t)}},{key:"throwArgumentError",value:function(r,t,n){return this.throwError(r,e.errors.INVALID_ARGUMENT,{argument:t,value:n})}},{key:"assert",value:function(e,r,t,n){e||this.throwError(r,t,n)}},{key:"assertArgument",value:function(e,r,t,n){e||this.throwArgumentError(r,t,n)}},{key:"checkNormalize",value:function(r){I&&this.throwError("platform missing String.prototype.normalize",e.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:I})}},{key:"checkSafeUint53",value:function(r,t){"number"===typeof r&&(null==t&&(t="value not safe"),(r<0||r>=9007199254740991)&&this.throwError(t,e.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:r}),r%1&&this.throwError(t,e.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:r}))}},{key:"checkArgumentCount",value:function(r,t,n){n=n?": "+n:"",r<t&&this.throwError("missing argument"+n,e.errors.MISSING_ARGUMENT,{count:r,expectedCount:t}),r>t&&this.throwError("too many arguments"+n,e.errors.UNEXPECTED_ARGUMENT,{count:r,expectedCount:t})}},{key:"checkNew",value:function(r,t){r!==Object&&null!=r||this.throwError("missing new",e.errors.MISSING_NEW,{name:t.name})}},{key:"checkAbstract",value:function(r,t){r===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",e.errors.UNSUPPORTED_OPERATION,{name:r.name,operation:"new"}):r!==Object&&null!=r||this.throwError("missing new",e.errors.MISSING_NEW,{name:t.name})}}],[{key:"globalLogger",value:function(){return p||(p=new e("logger/5.7.0")),p}},{key:"setCensorship",value:function(r,t){if(!r&&t&&this.globalLogger().throwError("cannot permanently disable censorship",e.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),N){if(!r)return;this.globalLogger().throwError("error censorship permanent",e.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}v=!!r,N=!!t}},{key:"setLogLevel",value:function(r){var t=R[r.toLowerCase()];null!=t?g=t:e.globalLogger().warn("invalid log level - "+r)}},{key:"from",value:function(r){return new e(r)}}]),e}();w.errors=y,w.levels=O;var A=new w("properties/5.7.0");function b(e,r,t){Object.defineProperty(e,r,{enumerable:!0,value:t,writable:!1})}var m={bigint:!0,boolean:!0,function:!0,number:!0,string:!0};function _(e){if(void 0===e||null===e||m[typeof e])return!0;if(Array.isArray(e)||"object"===typeof e){if(!Object.isFrozen(e))return!1;for(var r=Object.keys(e),t=0;t<r.length;t++){var n=null;try{n=e[r[t]]}catch(o){continue}if(!_(n))return!1}return!0}return A.throwArgumentError("Cannot deepCopy ".concat(typeof e),"object",e)}function k(e){if(_(e))return e;if(Array.isArray(e))return Object.freeze(e.map((function(e){return T(e)})));if("object"===typeof e){var r={};for(var t in e){var n=e[t];void 0!==n&&b(r,t,T(n))}return r}return A.throwArgumentError("Cannot deepCopy ".concat(typeof e),"object",e)}function T(e){return k(e)}var U=function(e){Object(a.a)(t,e);var r=Object(s.a)(t);function t(e){var n;Object(c.a)(this,t);var o=t.getApiKey(e.apiKey),i=t.getAlchemyNetwork(e.network),a=t.getAlchemyConnectionInfo(i,o,"http");void 0!==e.url&&(a.url=e.url),a.throttleLimit=e.maxRetries;var s=l.d[i];return(n=r.call(this,a,s)).apiKey=e.apiKey,n.maxRetries=e.maxRetries,n}return Object(u.a)(t,[{key:"detectNetwork",value:function(){var e=this,r=Object.create(null,{detectNetwork:{get:function(){return Object(o.a)(Object(i.a)(t.prototype),"detectNetwork",e)}}});return Object(l.h)(this,void 0,void 0,Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=this.network)){e.next=7;break}return e.next=4,r.detectNetwork.call(this);case 4:if(t=e.sent){e.next=7;break}throw new Error("No network detected");case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"_startPending",value:function(){Object(l.m)("WARNING: Alchemy Provider does not support pending filters")}},{key:"isCommunityResource",value:function(){return this.apiKey===l.c}},{key:"send",value:function(e,r){return this._send(e,r,"send")}},{key:"_send",value:function(e,r,t){var n=this,o={method:e,params:r,id:this._nextId++,jsonrpc:"2.0"};this.emit("debug",{action:"request",request:T(o),provider:this});var i=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(i&&this._cache[e])return this._cache[e];Object.assign({},this.connection).headers["Alchemy-Ethers-Sdk-Method"]=t;var a=Object(f.a)(this.connection,JSON.stringify(o),C).then((function(e){return n.emit("debug",{action:"response",request:o,response:e,provider:n}),e}),(function(e){throw n.emit("debug",{action:"response",error:e,request:o,provider:n}),e}));return i&&(this._cache[e]=a,setTimeout((function(){n._cache[e]=null}),0)),a}}],[{key:"getApiKey",value:function(e){if(null==e)return l.c;if(e&&"string"!==typeof e)throw new Error("Invalid apiKey '".concat(e,"' provided. apiKey must be a string."));return e}},{key:"getNetwork",value:function(e){return"string"===typeof e&&e in l.b?l.b[e]:Object(h.a)(e)}},{key:"getAlchemyNetwork",value:function(e){if(void 0===e)return l.i;if("number"===typeof e)throw new Error("Invalid network '".concat(e,"' provided. Network must be a string."));if(!Object.values(l.f).includes(e))throw new Error("Invalid network '".concat(e,"' provided. Network must be one of: ")+"".concat(Object.values(l.f).join(", "),"."));return e}},{key:"getAlchemyConnectionInfo",value:function(e,r,t){var n="http"===t?Object(l.l)(e,r):Object(l.j)(e,r);return{headers:l.e?{"Alchemy-Ethers-Sdk-Version":l.g}:{"Alchemy-Ethers-Sdk-Version":l.g,"Accept-Encoding":"gzip"},allowGzip:!0,url:n}}}]),t}(E.a);function C(e){if(e.error){var r=new Error(e.error.message);throw r.code=e.error.code,r.data=e.error.data,r}return e.result}}}]);
//# sourceMappingURL=5.f20491b3.chunk.js.map