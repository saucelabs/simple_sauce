(self.webpackChunk=self.webpackChunk||[]).push([[499],{3905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8215:(e,t,a)=>{"use strict";var n=a(5318).default;t.Z=void 0;var r=n(a(7294));var i=function(e){var t=e.children,a=e.hidden,n=e.className;return r.default.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};t.Z=i},279:(e,t,a)=>{"use strict";var n=a(5318).default,r=a(862).default;t.Z=void 0;var i=r(a(7294)),o=n(a(944)),l=n(a(6010)),s=n(a(3693));var u=37,d=39;var c=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,r=e.values,c=e.groupId,m=e.className,p=(0,o.default)(),f=p.tabGroupChoices,v=p.setTabGroupChoices,g=(0,i.useState)(n),b=g[0],y=g[1],x=i.Children.toArray(e.children),h=[];if(null!=c){var N=f[c];null!=N&&N!==b&&r.some((function(e){return e.value===N}))&&y(N)}var w=function(e){var t=e.currentTarget,a=h.indexOf(t),n=r[a].value;y(n),null!=c&&(v(c,n),setTimeout((function(){var e,a,n,r,i,o,l,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,a>=0&&i<=u&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.default.tabItemActive),setTimeout((function(){return t.classList.remove(s.default.tabItemActive)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case d:var n=h.indexOf(e.target)+1;a=h[n]||h[0];break;case u:var r=h.indexOf(e.target)-1;a=h[r]||h[h.length-1]}null==(t=a)||t.focus()};return i.default.createElement("div",{className:"tabs-container"},i.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":a},m)},r.map((function(e){var t=e.value,a=e.label;return i.default.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.default)("tabs__item",s.default.tabItem,{"tabs__item--active":b===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:O,onFocus:w,onClick:w},a)}))),t?(0,i.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.default.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};t.Z=c},9443:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,a(7294).createContext)(void 0);t.default=n},944:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(7294),i=n(a(9443));var o=function(){var e=(0,r.useContext)(i.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=o},920:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>u,metadata:()=>d,toc:()=>c,default:()=>p});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(279),l=a(8215),s=["components"],u={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},d={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Universal Prerequisites",source:"@site/docs/GETTING_STARTED.md",sourceDirName:".",slug:"/getting-started",permalink:"/sauce_bindings/docs/getting-started",editUrl:"https://github.com/saucelabs/sauce_bindings/edit/main/website/docs/GETTING_STARTED.md",version:"current",lastUpdatedBy:"titusfortner",lastUpdatedAt:1622495841,formattedLastUpdatedAt:"5/31/2021",sidebar_label:"Getting Started",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"docs",previous:{title:"Overview",permalink:"/sauce_bindings/docs/overview"},next:{title:"Creating a Session",permalink:"/sauce_bindings/docs/create-session"}},c=[{value:"Universal Prerequisites",id:"universal-prerequisites",children:[]},{value:"Language Specific  Prerequisites",id:"language-specific--prerequisites",children:[]}],m={toc:c};function p(e){var t=e.components,a=(0,r.default)(e,s);return(0,i.mdx)("wrapper",(0,n.default)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"universal-prerequisites"},"Universal Prerequisites"),(0,i.mdx)("p",null,"To start with make sure you have a valid ",(0,i.mdx)("a",{parentName:"p",href:"https://app.saucelabs.com/"},"Sauce Labs")," account "),(0,i.mdx)("p",null,"Since credentials should never be stored in code that might get added to a version control system,\nwe have decided to require users of Sauce Bindings to store these values in environment variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"SAUCE_USERNAME='valid.username'\nSAUCE_ACCESS_KEY='valid.key'\n")),(0,i.mdx)("p",null,"Here are instructions for setting environment variables on each Operating System: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/"},"Windows 10")," "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x"},"MacOS")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://askubuntu.com/questions/58814/how-do-i-add-environment-variables"},"Linux"))),(0,i.mdx)("h2",{id:"language-specific--prerequisites"},"Language Specific  Prerequisites"),(0,i.mdx)(o.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],mdxType:"Tabs"},(0,i.mdx)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("em",{parentName:"strong"},"Java version 8"))," or greater"),(0,i.mdx)("li",{parentName:"ol"},"Install your favorite Java IDE (we really like IntelliJ and the Community Edition is free)."),(0,i.mdx)("li",{parentName:"ol"},"The project is designed as a standard Maven project and follows Maven conventions.\nAdd the following to your .pom file:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/com.saucelabs/sauce_bindings --\x3e\n<dependency>\n    <groupId>com.saucelabs</groupId>\n    <artifactId>sauce_bindings</artifactId>\n    <version>1.0.1</version>\n</dependency>\n")),(0,i.mdx)("p",null,"Examples in the docs are written to use JUnit 4, so to execute the examples you must also add this to your .pom file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.13</version>\n</dependency>\n"))),(0,i.mdx)(l.Z,{value:"python",mdxType:"TabItem"},(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install the package:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"pip install saucebindings\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Import it into your project")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"from saucebindings.options import SauceOptions\nfrom saucebindings.session import SauceSession\n"))),(0,i.mdx)(l.Z,{value:"ruby",mdxType:"TabItem"},(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Add it to your Gemfile:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"gem 'sauce_bindings'\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Require it in your project:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"require 'sauce_bindings'\n")),(0,i.mdx)("p",null,"If you are using Capybara, you must also require this file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"require 'sauce_bindings/capybara_session'\n")),(0,i.mdx)("p",null,"Examples on this site are written to use RSpec, so to execute them you must also add this to your Gemfile:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"gem 'rspec'\n"))),(0,i.mdx)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"C# bindings are coming soon...")))))}p.isMDXComponent=!0},6010:(e,t,a)=>{"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.r(t),a.d(t,{default:()=>r})},3693:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={tabItem:"tabItem_1uMI",tabItemActive:"tabItemActive_2DSg",blink:"blink_XB8L"}}}]);