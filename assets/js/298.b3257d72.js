(self.webpackChunk=self.webpackChunk||[]).push([[298],{8173:(e,t,a)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}a.r(t),a.d(t,{default:()=>r})},1875:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return null}},5066:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7294)),l=n(a(6010)),u=a(6700),o=n(a(944)),d=a(9052),i=n(a(5806));var c=function(){var e,t=(0,o.default)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,c=(0,u.useThemeConfig)().announcementBar;if(!c)return null;var s=c.content,f=c.backgroundColor,m=c.textColor,v=c.isCloseable;return!s||v&&a?null:r.default.createElement("div",{className:i.default.announcementBar,style:{backgroundColor:f,color:m},role:"banner"},r.default.createElement("div",{className:(0,l.default)(i.default.announcementBarContent,(e={},e[i.default.announcementBarCloseable]=v,e)),dangerouslySetInnerHTML:{__html:s}}),v?r.default.createElement("button",{type:"button",className:i.default.announcementBarClose,onClick:n,"aria-label":(0,d.translate)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.default.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};t.default=c},3264:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=["width","height"],d=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,d=void 0===n?20:n,i=(0,l.default)(e,o);return u.default.createElement("svg",(0,r.default)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:d},i),u.default.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};t.default=d},4478:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=["width","height","className"],d=function(e){var t=e.width,a=void 0===t?30:t,n=e.height,d=void 0===n?30:n,i=e.className,c=(0,l.default)(e,o);return u.default.createElement("svg",(0,r.default)({"aria-label":"Menu",className:i,width:a,height:d,viewBox:"0 0 30 30",role:"img",focusable:"false"},c),u.default.createElement("title",null,"Menu"),u.default.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};t.default=d},8532:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7294)),l=n(a(6010)),u=n(a(2604)),o=n(a(5066)),d=n(a(3008)),i=n(a(6463)),c=n(a(2274)),s=n(a(411)),f=n(a(8245)),m=a(6700);a(9873);var v=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName,v=e.pageClassName;return(0,f.default)(),r.default.createElement(c.default,null,r.default.createElement(s.default,e),r.default.createElement(u.default,null),r.default.createElement(o.default,null),r.default.createElement(d.default,null),r.default.createElement("div",{className:(0,l.default)(m.ThemeClassNames.wrapper.main,n,v)},t),!a&&r.default.createElement(i.default,null))};t.default=v},411:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,o.default)(),a=t.siteConfig,n=a.favicon,f=a.themeConfig.metadatas,b=t.i18n,h=b.currentLocale,p=b.localeConfigs,g=e.title,_=e.description,E=e.image,y=e.keywords,k=e.searchMetadatas,C=(0,d.default)(n),w=(0,s.useTitleFormatter)(g),N=h,P=p[h].direction;return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.default,null,l.default.createElement("html",{lang:N,dir:P}),n&&l.default.createElement("link",{rel:"shortcut icon",href:C}),l.default.createElement("title",null,w),l.default.createElement("meta",{property:"og:title",content:w})),l.default.createElement(c.default,{description:_,keywords:y,image:E}),l.default.createElement(v,null),l.default.createElement(m,null),l.default.createElement(i.default,(0,r.default)({tag:s.DEFAULT_SEARCH_TAG,locale:h},k)),l.default.createElement(u.default,null,f.map((function(e,t){return l.default.createElement("meta",(0,r.default)({key:"metadata_"+t},e))}))))};var r=n(a(2122)),l=n(a(7294)),u=n(a(5742)),o=n(a(2263)),d=n(a(4996)),i=n(a(4246)),c=n(a(1217)),s=a(6700),f=a(8143);function m(){var e=(0,o.default)().i18n,t=e.defaultLocale,a=e.locales,n=(0,s.useAlternatePageUtils)();return l.default.createElement(u.default,null,a.map((function(e){return l.default.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),l.default.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function v(e){var t=e.permalink,a=(0,o.default)().siteConfig.url,n=function(){var e=(0,o.default)().siteConfig.url,t=(0,f.useLocation)().pathname;return e+(0,d.default)(t)}(),r=t?""+a+t:n;return l.default.createElement(u.default,null,l.default.createElement("meta",{property:"og:url",content:r}),l.default.createElement("link",{rel:"canonical",href:r}))}},2274:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children;return r.default.createElement(l.default,null,r.default.createElement(u.default,null,r.default.createElement(o.DocsPreferredVersionContextProvider,null,t)))};var r=n(a(7294)),l=n(a(6417)),u=n(a(1073)),o=a(6700)},5537:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=n(a(3692)),d=n(a(2388)),i=n(a(4996)),c=n(a(2263)),s=a(6700),f=["imageClassName","titleClassName"],m=function(e){var t=(0,c.default)().isClient,a=(0,s.useThemeConfig)().navbar,n=a.title,m=a.logo,v=void 0===m?{src:""}:m,b=e.imageClassName,h=e.titleClassName,p=(0,l.default)(e,f),g=(0,i.default)(v.href||"/"),_={light:(0,i.default)(v.src),dark:(0,i.default)(v.srcDark||v.src)};return u.default.createElement(o.default,(0,r.default)({to:g},p,v.target&&{target:v.target}),v.src&&u.default.createElement(d.default,{key:t,className:b,sources:_,alt:v.alt||n||"Logo"}),null!=n&&u.default.createElement("strong",{className:h},n))};t.default=m},3008:(e,t,a)=>{"use strict";var n=a(862).default,r=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(2122)),u=n(a(7294)),o=r(a(6010)),d=r(a(1081)),i=r(a(8037)),c=r(a(5350)),s=a(6700),f=r(a(5662)),m=r(a(1839)),v=n(a(3783)),b=r(a(1442)),h=r(a(5537)),p=r(a(4478)),g=r(a(1805)),_="right";var E=function(){var e,t=(0,s.useThemeConfig)(),a=t.navbar,n=a.items,r=a.hideOnScroll,E=a.style,y=t.colorMode.disableSwitch,k=(0,u.useState)(!1),C=k[0],w=k[1],N=(0,c.default)(),P=N.isDarkTheme,M=N.setLightTheme,S=N.setDarkTheme,I=(0,f.default)(r),L=I.navbarRef,O=I.isNavbarVisible;(0,m.default)(C);var A=(0,u.useCallback)((function(){w(!0)}),[w]),T=(0,u.useCallback)((function(){w(!1)}),[w]),B=(0,u.useCallback)((function(e){return e.target.checked?S():M()}),[M,S]),j=(0,v.default)();(0,u.useEffect)((function(){j===v.windowSizes.desktop&&w(!1)}),[j]);var D=n.some((function(e){return"search"===e.type})),x=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:_)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:_)}))}}(n),V=x.leftItems,U=x.rightItems;return u.default.createElement("nav",{ref:L,className:(0,o.default)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===E,"navbar--primary":"primary"===E,"navbar-sidebar--show":C},e[g.default.navbarHideable]=r,e[g.default.navbarHidden]=r&&!O,e))},u.default.createElement("div",{className:"navbar__inner"},u.default.createElement("div",{className:"navbar__items"},null!=n&&0!==n.length&&u.default.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:A,onKeyDown:A},u.default.createElement(p.default,null)),u.default.createElement(h.default,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,o.default)("navbar__title")}),V.map((function(e,t){return u.default.createElement(b.default,(0,l.default)({},e,{key:t}))}))),u.default.createElement("div",{className:"navbar__items navbar__items--right"},U.map((function(e,t){return u.default.createElement(b.default,(0,l.default)({},e,{key:t}))})),!y&&u.default.createElement(i.default,{className:g.default.displayOnlyInLargeViewport,checked:P,onChange:B}),!D&&u.default.createElement(d.default,null))),u.default.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),u.default.createElement("div",{className:"navbar-sidebar"},u.default.createElement("div",{className:"navbar-sidebar__brand"},u.default.createElement(h.default,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:T}),!y&&C&&u.default.createElement(i.default,{checked:P,onChange:B})),u.default.createElement("div",{className:"navbar-sidebar__items"},u.default.createElement("div",{className:"menu"},u.default.createElement("ul",{className:"menu__list"},n.map((function(e,t){return u.default.createElement(b.default,(0,l.default)({mobile:!0},e,{onClick:T,key:t}))})))))))};t.default=E},5525:(e,t,a)=>{"use strict";var n=a(5318).default,r=a(862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(2122)),u=n(a(9756)),o=r(a(7294)),d=n(a(6010)),i=n(a(3692)),c=n(a(4996)),s=a(8143),f=a(6700),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],b=["className"],h=["items","className","position"],p=["className"],g=["mobile"];function _(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,r=e.href,d=e.label,s=e.activeClassName,f=void 0===s?"navbar__link--active":s,v=e.prependBaseUrlToHref,b=(0,u.default)(e,m),h=(0,c.default)(n),p=(0,c.default)(t),g=(0,c.default)(r,{forcePrependBaseUrl:!0});return o.default.createElement(i.default,(0,l.default)({},r?{href:v?g:r}:Object.assign({isNavLink:!0,activeClassName:f,to:h},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),b),d)}function E(e){var t,a=e.items,n=e.position,r=e.className,i=(0,u.default)(e,v),c=(0,o.useRef)(null),s=(0,o.useRef)(null),f=(0,o.useState)(!1),m=f[0],h=f[1];(0,o.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var p=function(e,t){return void 0===t&&(t=!1),(0,d.default)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.default.createElement("div",{ref:c,className:(0,d.default)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":m})},o.default.createElement(_,(0,l.default)({className:p(r)},i,{onClick:i.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!m))}}),null!=(t=i.children)?t:i.label),o.default.createElement("ul",{ref:s,className:"dropdown__menu"},a.map((function(e,t){var n=e.className,r=(0,u.default)(e,b);return o.default.createElement("li",{key:t},o.default.createElement(_,(0,l.default)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var n=c.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(n,!0)},r)))})))):o.default.createElement(_,(0,l.default)({className:p(r)},i))}function y(e){var t,a,n,r=e.items,i=e.className,c=(e.position,(0,u.default)(e,h)),m=(0,o.useRef)(null),v=(0,s.useLocation)().pathname,b=(0,o.useState)((function(){var e;return null==(e=!(null!=r&&r.some((function(e){return(0,f.isSamePath)(e.to,v)}))))||e})),g=b[0],E=b[1],y=function(e,t){return void 0===t&&(t=!1),(0,d.default)("menu__link",{"menu__link--sublist":t},e)};if(!r)return o.default.createElement("li",{className:"menu__list-item"},o.default.createElement(_,(0,l.default)({className:y(i)},c)));var k=null!=(t=m.current)&&t.scrollHeight?(null==(a=m.current)?void 0:a.scrollHeight)+"px":void 0;return o.default.createElement("li",{className:(0,d.default)("menu__list-item",{"menu__list-item--collapsed":g})},o.default.createElement(_,(0,l.default)({role:"button",className:y(i,!0)},c,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(n=c.children)?n:c.label),o.default.createElement("ul",{className:"menu__list",ref:m,style:{height:g?void 0:k}},r.map((function(e,t){var a=e.className,n=(0,u.default)(e,p);return o.default.createElement("li",{className:"menu__list-item",key:t},o.default.createElement(_,(0,l.default)({activeClassName:"menu__link--active",className:y(a)},n,{onClick:c.onClick})))}))))}var k=function(e){var t=e.mobile,a=void 0!==t&&t,n=(0,u.default)(e,g),r=a?y:E;return o.default.createElement(r,n)};t.default=k},6400:(e,t,a)=>{"use strict";var n=a(5318).default;t.Z=function(e){var t,a,n=e.docId,f=e.activeSidebarClassName,m=e.label,v=e.docsPluginId,b=(0,l.default)(e,s),h=(0,d.useActiveDocContext)(v),p=h.activeVersion,g=h.activeDoc,_=(0,c.useDocsPreferredVersion)(v).preferredVersion,E=(0,d.useLatestVersion)(v),y=null!=(t=null!=p?p:_)?t:E,k=y.docs.find((function(e){return e.id===n}));if(!k){var C=y.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+n+" in version "+y.name+".\nAvailable docIds=\n- "+C)}return u.default.createElement(o.default,(0,r.default)({exact:!0},b,{className:(0,i.default)(b.className,(a={},a[f]=g&&g.sidebar===k.sidebar,a)),label:null!=m?m:k.id,to:k.path}))};var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=n(a(5525)),d=a(907),i=n(a(6010)),c=a(6700),s=["docId","activeSidebarClassName","label","docsPluginId"]},9308:(e,t,a)=>{"use strict";var n=a(5318).default;t.Z=function(e){var t,a,n=e.mobile,f=e.docsPluginId,m=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,b=e.dropdownItemsAfter,h=(0,l.default)(e,c),p=(0,d.useActiveDocContext)(f),g=(0,d.useVersions)(f),_=(0,d.useLatestVersion)(f),E=(0,i.useDocsPreferredVersion)(f),y=E.preferredVersion,k=E.savePreferredVersionName;var C=null!=(t=null!=(a=p.activeVersion)?a:y)?t:_,w=n?"Versions":C.label,N=n?void 0:s(C).path;return u.default.createElement(o.default,(0,r.default)({},h,{mobile:n,label:w,to:N,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){k(e.name)}}})),t=[].concat(v,e,b);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))};var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=n(a(5525)),d=a(907),i=a(6700),c=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}},7250:(e,t,a)=>{"use strict";var n=a(5318).default;t.Z=function(e){var t,a=e.label,n=e.to,s=e.docsPluginId,f=(0,l.default)(e,c),m=(0,d.useActiveVersion)(s),v=(0,i.useDocsPreferredVersion)(s).preferredVersion,b=(0,d.useLatestVersion)(s),h=null!=(t=null!=m?m:v)?t:b,p=null!=a?a:h.label,g=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return u.default.createElement(o.default,(0,r.default)({},f,{label:p,to:g}))};var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=n(a(5525)),d=a(907),i=a(6700),c=["label","to","docsPluginId"]},5958:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,f=(0,l.default)(e,s),m=(0,i.default)().i18n,v=m.currentLocale,b=m.locales,h=m.localeConfigs,p=(0,c.useAlternatePageUtils)();function g(e){return h[e].label}var _=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),E=[].concat(a,_,n),y=t?"Languages":g(v);return u.default.createElement(o.default,(0,r.default)({},f,{href:"#",mobile:t,label:u.default.createElement("span",null,u.default.createElement(d.default,{style:{verticalAlign:"text-bottom",marginRight:5}}),u.default.createElement("span",null,y)),items:E}))};var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=n(a(5525)),d=n(a(3264)),i=n(a(2263)),c=a(6700),s=["mobile","dropdownItemsBefore","dropdownItemsAfter"]},1093:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e.mobile)return null;return r.default.createElement("div",{className:u.default.searchWrapper},r.default.createElement(l.default,null))};var r=n(a(7294)),l=n(a(1081)),u=n(a(1594))},1442:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.type,a=(0,r.default)(e,i),n=function(e){void 0===e&&(e="default");var t=c[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return l.default.createElement(n,a)};var r=n(a(9756)),l=n(a(7294)),u=n(a(5525)),o=n(a(5958)),d=n(a(1093)),i=["type"],c={default:function(){return u.default},localeDropdown:function(){return o.default},search:function(){return d.default},docsVersion:function(){return a(7250).Z},docsVersionDropdown:function(){return a(9308).Z},doc:function(){return a(6400).Z}}},1081:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(1875))},4246:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.locale,a=e.version,n=e.tag;return r.default.createElement(l.default,null,t&&r.default.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.default.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.default.createElement("meta",{name:"docusaurus_tag",content:n}))};var r=n(a(7294)),l=n(a(5742))},2604:(e,t,a)=>{"use strict";var n=a(5318).default,r=a(862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(7294)),u=n(a(9052)),o=a(8143),d=n(a(126));function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var c=function(){var e=(0,l.useRef)(null),t=(0,o.useLocation)();return(0,l.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),l.default.createElement("div",{ref:e},l.default.createElement("a",{href:"#main",className:d.default.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},l.default.createElement(u.default,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};t.default=c},2924:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7294)).default.createContext(void 0);t.default=r},6417:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7294)),l=n(a(2026)),u=n(a(2924));var o=function(e){var t=(0,l.default)(),a=t.isDarkTheme,n=t.setLightTheme,o=t.setDarkTheme;return r.default.createElement(u.default.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:o}},e.children)};t.default=o},2388:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2122)),l=n(a(9756)),u=n(a(7294)),o=n(a(6010)),d=n(a(2263)),i=n(a(5350)),c=n(a(2068)),s=["sources","className","alt"],f=function(e){var t=(0,d.default)().isClient,a=(0,i.default)().isDarkTheme,n=e.sources,f=e.className,m=e.alt,v=void 0===m?"":m,b=(0,l.default)(e,s),h=t?a?["dark"]:["light"]:["light","dark"];return u.default.createElement(u.default.Fragment,null,h.map((function(e){return u.default.createElement("img",(0,r.default)({key:e,src:n[e],alt:v,className:(0,o.default)(c.default.themedImage,c.default["themedImage--"+e],f)},b))})))};t.default=f},8037:(e,t,a)=>{"use strict";var n=a(862).default,r=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,o.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,r=t.lightIcon,i=t.lightIconStyle,c=(0,d.default)().isClient;return u.default.createElement(m,(0,l.default)({disabled:!c,icons:{checked:u.default.createElement(s,{icon:a,style:n}),unchecked:u.default.createElement(f,{icon:r,style:i})}},e))};var l=r(a(2122)),u=n(a(7294)),o=a(6700),d=r(a(2263)),i=r(a(6010)),c=r(a(4475)),s=function(e){var t=e.icon,a=e.style;return u.default.createElement("span",{className:(0,i.default)(c.default.toggle,c.default.dark),style:a},t)},f=function(e){var t=e.icon,a=e.style;return u.default.createElement("span",{className:(0,i.default)(c.default.toggle,c.default.light),style:a},t)},m=(0,u.memo)((function(e){var t=e.className,a=e.icons,n=e.checked,r=e.disabled,l=e.onChange,o=(0,u.useState)(n),d=o[0],c=o[1],s=(0,u.useState)(!1),f=s[0],m=s[1],v=(0,u.useRef)(null);return u.default.createElement("div",{className:(0,i.default)("react-toggle",t,{"react-toggle--checked":d,"react-toggle--focus":f,"react-toggle--disabled":r}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void c(null==t?void 0:t.checked)}},u.default.createElement("div",{className:"react-toggle-track"},u.default.createElement("div",{className:"react-toggle-track-check"},a.checked),u.default.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),u.default.createElement("div",{className:"react-toggle-thumb"}),u.default.createElement("input",{ref:v,checked:d,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onFocus:function(){return m(!0)},onBlur:function(){return m(!1)}}))}))},9443:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,a(7294).createContext)(void 0);t.default=n},1073:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7294)),l=n(a(6693)),u=n(a(3912)),o=n(a(9443));var d=function(e){var t=(0,l.default)(),a=t.tabGroupChoices,n=t.setTabGroupChoices,d=(0,u.default)(),i=d.isAnnouncementBarClosed,c=d.closeAnnouncementBar;return r.default.createElement(o.default.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:i,closeAnnouncementBar:c}},e.children)};t.default=d},3912:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(7294),r=a(6700),l=(0,r.createStorageSlot)("docusaurus.announcement.dismiss"),u=(0,r.createStorageSlot)("docusaurus.announcement.id"),o=function(){var e=(0,r.useThemeConfig)().announcementBar,t=(0,n.useState)(!0),a=t[0],o=t[1],d=(0,n.useCallback)((function(){l.set("true"),o(!0)}),[]);return(0,n.useEffect)((function(){if(e){var t=e.id,a=u.get();"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;u.set(t),n&&l.set("false"),(n||"false"===l.get())&&o(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:d}};t.default=o},5662:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(7294),l=a(8143),u=n(a(7898)),o=function(e){var t=(0,l.useLocation)(),a=(0,r.useState)(e),n=a[0],o=a[1],d=(0,r.useRef)(!1),i=(0,r.useState)(0),c=i[0],s=i[1],f=(0,r.useCallback)((function(e){null!==e&&s(e.getBoundingClientRect().height)}),[]);return(0,u.default)((function(t,a){var n=t.scrollY,r=a.scrollY;if(e)if(n<c)o(!0);else{if(d.current)return d.current=!1,void o(!1);r&&0===n&&o(!0);var l=document.documentElement.scrollHeight-c,u=window.innerHeight;r&&n>=r?o(!1):n+u<l&&o(!0)}}),[c,d]),(0,r.useEffect)((function(){e&&o(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(d.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:n}};t.default=o},8245:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(7294);a(2397);var r=function(){(0,n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};t.default=r},1839:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(7294);var r=function(e){void 0===e&&(e=!0),(0,n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])};t.default=r},7898:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(7294),l=n(a(412)),u=function(){return{scrollX:l.default.canUseDOM?window.pageXOffset:0,scrollY:l.default.canUseDOM?window.pageYOffset:0}},o=function(e,t){void 0===t&&(t=[]);var a=(0,r.useRef)(u()),n=function(){var t=u();e&&e(t,a.current),a.current=t};(0,r.useEffect)((function(){var e={passive:!0};return n(),window.addEventListener("scroll",n,e),function(){return window.removeEventListener("scroll",n,e)}}),t)};t.default=o},6693:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(8173)),l=a(7294),u=a(6700),o="docusaurus.tab.",d=function(){var e=(0,l.useState)({}),t=e[0],a=e[1],n=(0,l.useCallback)((function(e,t){(0,u.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return(0,l.useEffect)((function(){try{for(var e,t={},n=(0,r.default)((0,u.listStorageKeys)());!(e=n()).done;){var l=e.value;if(l.startsWith(o))t[l.substring(o.length)]=(0,u.createStorageSlot)(l).get()}a(t)}catch(d){console.error(d)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),n(e,t)}}};t.default=d},2026:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(7294),l=n(a(412)),u=a(6700),o=(0,u.createStorageSlot)("theme"),d="light",i="dark",c=function(e){return e===i?i:d},s=function(e){(0,u.createStorageSlot)("theme").set(c(e))},f=function(){var e=(0,u.useThemeConfig)().colorMode,t=e.defaultMode,a=e.disableSwitch,n=e.respectPrefersColorScheme,f=(0,r.useState)(function(e){return l.default.canUseDOM?c(document.documentElement.getAttribute("data-theme")):c(e)}(t)),m=f[0],v=f[1],b=(0,r.useCallback)((function(){v(d),s(d)}),[]),h=(0,r.useCallback)((function(){v(i),s(i)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",c(m))}),[m]),(0,r.useEffect)((function(){if(!a)try{var e=o.get();null!==e&&v(c(e))}catch(t){console.error(t)}}),[v]),(0,r.useEffect)((function(){a&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;v(t?i:d)}))}),[]),{isDarkTheme:m===i,setLightTheme:b,setDarkTheme:h}};t.default=f},5350:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(7294),l=n(a(2924));var u=function(){var e=(0,r.useContext)(l.default);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e};t.default=u},944:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(7294),l=n(a(9443));var u=function(){var e=(0,r.useContext)(l.default);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e};t.default=u},3783:(e,t,a)=>{"use strict";var n=a(5318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.windowSizes=void 0;var r=a(7294),l=n(a(412)),u={desktop:"desktop",mobile:"mobile"};t.windowSizes=u;var o=function(){var e=l.default.canUseDOM;function t(){if(e)return window.innerWidth>996?u.desktop:u.mobile}var a=(0,r.useState)(t),n=a[0],o=a[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),n};t.default=o},9873:(e,t,a)=>{"use strict";a.r(t)},2397:(e,t,a)=>{"use strict";a.r(t)},5806:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={announcementBar:"announcementBar_3WsW",announcementBarClose:"announcementBarClose_38nx",announcementBarContent:"announcementBarContent_3EUC",announcementBarCloseable:"announcementBarCloseable_3myR"}},1805:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_GrZ2",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey"}},1594:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={searchWrapper:"searchWrapper_3rmH"}},126:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={skipToContent:"skipToContent_1oUP"}},2068:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"}},4475:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});const n={toggle:"toggle_71bT"}}}]);