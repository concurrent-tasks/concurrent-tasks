parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"sIF+":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var r={};for(var i in t[a.util.objId(e)]=r,e)e.hasOwnProperty(i)&&(r[i]=a.util.clone(e[i],t));return r;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];r=[];return t[a.util.objId(e)]=r,e.forEach(function(e,n){r[n]=a.util.clone(e,t)}),r}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e];if(2==arguments.length){for(var o in n=arguments[1])n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var l={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var o in n)n.hasOwnProperty(o)&&(l[o]=n[o]);l[s]=i[s]}var c=r[e];return r[e]=l,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=l)}),l},DFS:function(e,t,n,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,o=r.elements||e.querySelectorAll(r.selector),l=0;i=o[l++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){for(var o,l,s=n;s&&!e.test(s.className);)s=s.parentNode;s&&(o=(s.className.match(e)||[,""])[1].toLowerCase(),l=a.languages[o]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,n.parentNode&&(s=n.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+o));var c={element:n,language:o,grammar:l,code:n.textContent};if(a.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(a.hooks.run("before-highlight",c),c.element.textContent=c.code,a.hooks.run("after-highlight",c)),void a.hooks.run("complete",c);if(a.hooks.run("before-highlight",c),r&&t.Worker){var u=new Worker(a.filename);u.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(n)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,r,i,o,l){var s=a.Token;for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var u=n[c];u="Array"===a.util.type(u)?u:[u];for(var p=0;p<u.length;++p){var d=u[p],g=d.inside,m=!!d.lookbehind,f=!!d.greedy,h=0,b=d.alias;if(f&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var y=r,k=i;y<t.length;k+=t[y].length,++y){var A=t[y];if(t.length>e.length)return;if(!(A instanceof s)){if(f&&y!=t.length-1){if(d.lastIndex=k,!(F=d.exec(e)))break;for(var S=F.index+(m?F[1].length:0),w=F.index+F[0].length,x=y,N=k,C=t.length;C>x&&(w>N||!t[x].type&&!t[x-1].greedy);++x)S>=(N+=t[x].length)&&(++y,k=N);if(t[y]instanceof s)continue;j=x-y,A=e.slice(k,N),F.index-=k}else{d.lastIndex=0;var F=d.exec(A),j=1}if(F){m&&(h=F[1]?F[1].length:0);w=(S=F.index+h)+(F=F[0].slice(h)).length;var L=A.slice(0,S),P=A.slice(w),E=[y,j];L&&(++y,k+=L.length,E.push(L));var T=new s(c,g?a.tokenize(F,g):F,b,F,f);if(E.push(T),P&&E.push(P),Array.prototype.splice.apply(t,E),1!=j&&a.matchGrammar(e,t,n,y,k,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},r=a.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(a.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code,o=n.immediateClose;t.postMessage(a.highlight(i,a.languages[r],r)),o&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),t.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=n),void 0!==e&&(e.Prism=n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\(|\.(?:apply|bind|call)\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=/\n(?!$)/g,a=function(e){var n=r(e),a=n["white-space"];if("pre-wrap"===a||"pre-line"===a){var i=e.querySelector("code"),o=e.querySelector(".line-numbers-rows"),l=e.querySelector(".line-numbers-sizer"),s=i.textContent.split(t);l||((l=document.createElement("span")).className="line-numbers-sizer",i.appendChild(l)),l.style.display="block",s.forEach(function(e,t){l.textContent=e||"\n";var n=l.getBoundingClientRect().height;o.children[t].style.height=n+"px"}),l.textContent="",l.style.display="none"}},r=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),a)}),n.hooks.add("complete",function(e){if(e.code){var r=e.element.parentNode,i=/\s*\bline-numbers\b\s*/;if(r&&/pre/i.test(r.nodeName)&&(i.test(r.className)||i.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){i.test(e.element.className)&&(e.element.className=e.element.className.replace(i," ")),i.test(r.className)||(r.className+=" line-numbers");var o,l=e.code.match(t),s=l?l.length+1:1,c=new Array(s+1);c=c.join("<span></span>"),(o=document.createElement("span")).setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),e.element.appendChild(o),a(r),n.hooks.run("line-numbers",e)}}}),n.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),n.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var a=t.querySelector(".line-numbers-rows"),r=parseInt(t.getAttribute("data-start"),10)||1,i=r+(a.children.length-1);r>n&&(n=r),n>i&&(n=i);var o=n-r;return a.children[o]}}}}}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=[],t={},a=function(){};n.plugins.toolbar={};var r=n.plugins.toolbar.registerButton=function(n,a){var r;r="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){a.onClick.call(this,e)})):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),t.textContent=a.text,t},e.push(t[n]=r)},i=n.plugins.toolbar.hook=function(n){var r=n.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){var i=document.createElement("div");i.classList.add("code-toolbar"),r.parentNode.insertBefore(i,r),i.appendChild(r);var o=document.createElement("div");o.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(e=document.body.getAttribute("data-toolbar-order").split(",").map(function(e){return t[e]||a})),e.forEach(function(e){var t=e(n);if(t){var a=document.createElement("div");a.classList.add("toolbar-item"),a.appendChild(t),o.appendChild(a)}}),i.appendChild(o)}};r("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(i){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}}),n.hooks.add("complete",i)}}(),function(){function e(e){this.defaults=r({},e)}function t(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function a(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}var r=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};e.prototype={setDefaults:function(e){this.defaults=r(this.defaults,e)},normalize:function(e,n){for(var a in n=r(this.defaults,n)){var i=t(a);"normalize"!==a&&"setDefaults"!==i&&n[a]&&this[i]&&(e=this[i].call(this,e,n[a]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),r=0;r<n.length;++r)if(!(a(n[r])<=t)){for(var i=n[r].split(/(\s+)/g),o=0,l=0;l<i.length;++l){var s=a(i[l]);(o+=s)>t&&(i[l]="\n"+i[l],o=s)}n[r]=i.join("")}return n.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=e),void 0!==n&&(n.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),n.hooks.add("before-sanity-check",function(e){var t=n.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"]){if((!e.element||!e.element.parentNode)&&e.code)return void(e.code=t.normalize(e.code,e.settings));var a=e.element.parentNode,r=/\bno-whitespace-normalization\b/;if(e.code&&a&&"pre"===a.nodeName.toLowerCase()&&!r.test(a.className)&&!r.test(e.element.className)){for(var i=a.childNodes,o="",l="",s=!1,c=0;c<i.length;++c){var u=i[c];u==e.element?s=!0:"#text"===u.nodeName&&(s?l+=u.nodeValue:o+=u.nodeValue,a.removeChild(u),--c)}if(e.element.children.length&&n.plugins.KeepMarkup){var p=o+e.element.innerHTML+l;e.element.innerHTML=t.normalize(p,e.settings),e.code=e.element.textContent}else e.code=o+e.code+l,e.code=t.normalize(e.code,e.settings)}}}))}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){if(!n.plugins.toolbar)return void console.warn("Show Languages plugin loaded before Toolbar plugin.");var e={html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",arff:"ARFF",asciidoc:"AsciiDoc",asm6502:"6502 Assembly",aspnet:"ASP.NET (C#)",autohotkey:"AutoHotkey",autoit:"AutoIt",shell:"Shell",basic:"BASIC",csharp:"C#",cpp:"C++",cil:"CIL",coffeescript:"CoffeeScript",csp:"Content-Security-Policy","css-extras":"CSS Extras",django:"Django/Jinja2",erb:"ERB",fsharp:"F#",gedcom:"GEDCOM",glsl:"GLSL",gml:"GameMaker Language",graphql:"GraphQL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam",inform7:"Inform 7",json:"JSON",jsonp:"JSONP",latex:"LaTeX",livescript:"LiveScript",lolcode:"LOLCODE","markup-templating":"Markup templating",matlab:"MATLAB",mel:"MEL",n4js:"N4JS",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",parigp:"PARI/GP",objectpascal:"Object Pascal",php:"PHP","php-extras":"PHP Extras",plsql:"PL/SQL",powershell:"PowerShell",properties:".properties",protobuf:"Protocol Buffers",q:"Q (kdb+ database)",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",soy:"Soy (Closure Template)",tap:"TAP",tt2:"Template Toolkit 2",typescript:"TypeScript",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",wasm:"WebAssembly",wiki:"Wiki markup",xeoracube:"XeoraCube",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML"};n.plugins.toolbar.registerButton("show-language",function(t){var n=t.element.parentNode;if(n&&/pre/i.test(n.nodeName)){var a=n.getAttribute("data-language")||e[t.language]||t.language&&t.language.substring(0,1).toUpperCase()+t.language.substring(1);if(a){var r=document.createElement("span");return r.textContent=a,r}}})}}();
},{}],"zrIP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.assignNumber=exports.assignFunction=exports.isEmptyString=exports.isArray=exports.isString=exports.isNumber=exports.isFunction=void 0;var r=function(r){return"function"==typeof r};exports.isFunction=r;var t=function(r){return"number"==typeof r&&!isNaN(r)};exports.isNumber=t;var n=function(r){return"string"==typeof r};exports.isString=n;var s=function(r){return r.constructor===Array};exports.isArray=s;var e=function(r){return n(r)&&!r};exports.isEmptyString=e;var i=function(t){if(r(t))return t};exports.assignFunction=i;var o=function(r,n,s){return t(r)?0===r?s:r:n};exports.assignNumber=o;
},{}],"18wI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.run=s,exports.done=i,exports.startCheck=n,exports.addCheck=o,exports.removeCheck=r,exports.startCheckAndRun=a,exports.runPending=e;var t=require("./util");function s(){if(this.tasks.list.length)this.tasks.running<this.concurrency&&(this.tasks.list.shift()(i.bind(this)),this.tasks.running++);else if(this.tasks.completed===this.tasks.total&&(this.duration.end=Date.now(),this.duration.total=this.duration.end-this.duration.start,this.__working=!1,(0,t.isFunction)(this.onEnd))){var s=this.tasks.completed,n=this.duration;this.onEnd({completed:s,duration:n})}}function i(){this.tasks.completed++,this.tasks.running--,this.duration.total=Date.now()-this.duration.start,(0,t.isFunction)(this.onDone)&&this.onDone(this.tasks),s.call(this)}function n(){if(!this.__working&&(this.duration.start=Date.now(),this.__working=!0,(0,t.isFunction)(this.onStart))){var s=this.duration;this.onStart({duration:s})}}function o(){if((0,t.isFunction)(this.onAdd)){var s=this.tasks;this.onAdd({tasks:s})}}function r(){if((0,t.isFunction)(this.onRemove)){var s=this.tasks;this.onRemove({tasks:s})}}function a(){n.call(this),s.call(this)}function e(){if(this.tasks.running<this.concurrency)for(var t=this.concurrency===1/0?this.tasks.list.length:this.concurrency,i=this.tasks.running;i<t;i++)s.call(this)}
},{"./util":"zrIP"}],"ky2q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e={already_running:"Cannot start TaskRunner instance as it is already running!",auto_start_true:"Cannot programmatically start TaskRunner instance as autoStart is true!",add_requires_function:'The "add" operation requires a function. Check if the first argument is a function!',add_multiple_requires_array_of_functions:'The "addMultiple" operation requires an array of functions. Check if the first argument is an array and whether all the items in the array are functions!',concurrency_not_a_number:"Concurrency should be a positive number. Defaulting to 3.",concurrency_should_be_positive_integer:"Concurrency should be a positive integer. Seems like you have supplied a negative value!"};function n(n){return"[TaskRunner]"+this.config.name+": "+e[n]}
},{}],"3ypE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./PrivateFunctions"),n=e(require("./log")),r=require("./util"),s=require("../es/util");function e(t){return t&&t.__esModule?t:{default:t}}var a,o,i,l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t};function c(t,n){var r={};for(var s in t)n.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s]);return r}function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var d=(o=a=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,t),i.call(this);var s=n.concurrency,e=n.onAdd,a=n.onStart,o=n.onDone,d=n.onEnd,h=c(n,["concurrency","onAdd","onStart","onDone","onEnd"]);this.config=l({autoStart:!0,name:"Runner "+ ++t.runnerCount},h),this.concurrency=this.setConcurrency(s),this.onAdd=(0,r.assignFunction)(e),this.onStart=(0,r.assignFunction)(a),this.onDone=(0,r.assignFunction)(o),this.onEnd=(0,r.assignFunction)(d),Object.seal(this)},a.runnerCount=0,i=function(){var e=this;this.__working=!1,this.tasks={list:[],total:0,completed:0,running:0},this.duration={start:0,end:0,total:0},this.isBusy=function(){return e.__working},this.setConcurrency=function(a){a=parseInt(a,10),(0,s.isNumber)(a)||console.warn(n.default.call(e,"concurrency_not_a_number")),a<0&&(a=Math.abs(a),console.warn(n.default.call(e,"concurrency_should_be_positive_integer"))),e.concurrency=(0,r.assignNumber)(a,3,e.tasks.total),e.__working&&t.runPending.call(e)},this.start=function(){return e.__working?(console.warn(n.default.call(e,"already_running")),!1):e.config.autoStart?(console.warn(n.default.call(e,"auto_start_true")),!1):(t.startCheck.call(e),t.runPending.call(e),!0)},this.add=function(s){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,r.isFunction)(s)){var o=e.config.autoStart;return a?e.tasks.list.push(s):e.tasks.list.unshift(s),e.tasks.total++,o&&t.startCheckAndRun.call(e),t.addCheck.call(e),!0}throw new TypeError((0,n.default)("add_requires_function"))},this.addFirst=function(t){e.add(t,!0)},this.addMultiple=function(s,a){if((0,r.isArray)(s)&&s.every(function(t){return(0,r.isFunction)(t)})){var o=e.config.autoStart;return e.tasks=l({},e.tasks,{list:a?[].concat(s,e.tasks.list):[].concat(e.tasks.list,s),total:e.tasks.total+s.length}),o&&t.startCheckAndRun.call(e),t.addCheck.call(e),!0}throw new TypeError(n.default.call(e,"add_multiple_requires_array_of_functions"))},this.addMultipleFirst=function(t){e.addMultiple(t,first)},this.remove=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?e.tasks.list.shift():e.tasks.list.pop();return e.tasks.total=e.tasks.list.length+e.tasks.completed,t.removeCheck.call(e),n},this.removeFirst=function(){e.remove(!0)},this.removeAt=function(n){var r=e.tasks.list.splice(n,1);return e.tasks.total=e.tasks.list.length+e.tasks.completed,t.removeCheck.call(e),r},this.removeAll=function(){return e.tasks.list=[],e.tasks.total=e.tasks.completed,t.removeCheck.call(e),e.tasks.list}},o);exports.default=d;
},{"./PrivateFunctions":"18wI","./log":"ky2q","./util":"zrIP","../es/util":"zrIP"}],"/gta":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getElements=void 0;var e=function(e){var o=document.getElementById(e),r=o.querySelector(".progress-inner"),t=o.querySelector(".btn"),n=o.querySelector(".concurrency"),c=n.querySelector("input"),l=n.querySelector(".set-concurrency"),s=o.querySelector(".console"),u=s.querySelector(".console__info"),y=s.querySelector(".console__on-start"),q=s.querySelector(".console__on-done"),S=s.querySelector(".console__on-end");return{element:o,progress:r,concurrency:{input:c,set:l},button:t,console:{console:s,info:u,start:y,done:q,end:S}}};exports.getElements=e;
},{}],"+O28":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.task=exports.addMultipleTasks=exports.queueTasks=void 0;var e=function(e,t){for(var r=[],a=0;a<t;a++)e.add(s(a+1,r))};exports.queueTasks=e;var t=function(e,t){for(var r=[],a=[],o=0;o<t;o++)r.push(s(o+1,a));e.addMultiple(r)};exports.addMultipleTasks=t;var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(s){var r=1e3*Math.random();setTimeout(function(){s(),t.push(e)},r)}};exports.task=s;
},{}],"qkhW":[function(require,module,exports) {
"use strict";var t=o(require("concurrent-tasks")),e=require("./util/helper"),n=require("./util/task");function o(t){return t&&t.__esModule?t:{default:t}}document.addEventListener("DOMContentLoaded",function(){var o=(0,e.getElements)("example-1"),r=o.progress,c=o.console,a=c.info,u=c.start,i=c.done,s=c.end,l=o.concurrency,d=o.button,p=new t.default({concurrency:parseInt(l.input.value,10),onStart:function(t){var e=t.duration.start;u.innerText="🏃🏻‍ Started at ".concat(new Date(e))},onDone:function(t){var e=t.completed,n=t.total;r.style.width="".concat(e/n*100,"%"),i.innerText="✅ Completed ".concat(e," of ").concat(n," tasks with ").concat(p.concurrency," concurrency")},onEnd:function(t){var e=t.duration.total;d.removeAttribute("disabled"),s.innerText="✨ Completed all tasks in: ".concat((e/1e3).toFixed(2),"s")}});d.onclick=function(){p.setConcurrency(parseInt(l.input.value,10)),(0,n.queueTasks)(p,1e3),a.innerText="ℹ️ Total tasks: ".concat(p.tasks.total),s.innerHTML=""},l.set.onclick=function(){p.setConcurrency(parseInt(l.input.value,10))}});
},{"concurrent-tasks":"3ypE","./util/helper":"/gta","./util/task":"+O28"}],"bU5w":[function(require,module,exports) {
"use strict";var t=r(require("concurrent-tasks")),e=require("./util/helper"),n=require("./util/task");function r(t){return t&&t.__esModule?t:{default:t}}document.addEventListener("DOMContentLoaded",function(){var r=(0,e.getElements)("example-2"),o=r.element,c=r.progress,a=r.console,i=a.info,u=a.start,s=a.done,l=a.end,d=r.concurrency,f=r.button,p=o.querySelector(".start"),v=new t.default({concurrency:parseInt(d.input.value,10),autoStart:!1,onAdd:function(){v.isBusy()||p.removeAttribute("disabled")},onStart:function(t){var e=t.duration.start;u.innerText="‍‍🏃🏻‍ Started at ".concat(new Date(e))},onDone:function(t){var e=t.completed,n=t.total;c.style.width="".concat(e/n*100,"%"),s.innerText="✅ Completed ".concat(e," of ").concat(n," tasks with ").concat(v.concurrency," concurrency")},onEnd:function(t){var e=t.duration.total;f.removeAttribute("disabled"),l.innerText="✨ Completed all tasks in: ".concat((e/1e3).toFixed(2),"s")}});f.onclick=function(){(0,n.addMultipleTasks)(v,1e3),i.innerText="ℹ️ Total tasks: ".concat(v.tasks.total)},p.onclick=function(){u.innerText="",s.innerText="",l.innerText="",p.setAttribute("disabled",!0),v.setConcurrency(parseInt(d.input.value,10)),v.start()},d.set.onclick=function(){v.setConcurrency(parseInt(d.input.value,10))}});
},{"concurrent-tasks":"3ypE","./util/helper":"/gta","./util/task":"+O28"}],"lgAh":[function(require,module,exports) {
"use strict";require("./prism"),require("./examples/basic-taskrunner"),require("./examples/programmatic-start-taskrunner");
},{"./prism":"sIF+","./examples/basic-taskrunner":"qkhW","./examples/programmatic-start-taskrunner":"bU5w"}]},{},["lgAh"], null)
//# sourceMappingURL=/concurrent-tasks/demo.408da621.map