function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,u=setTimeout(j,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function j(){var e=m();if(h(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?v(n,o-(e-l)):n}(e))}function S(e){return u=void 0,p&&r?b(e):(r=i=void 0,a)}function w(){var e=m(),n=h(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:S(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),T=document.querySelector("input[name = email]"),h=document.querySelector("textarea[name = message]"),j=JSON.parse(localStorage.getItem("feedback-form-state"));let S=j||{};function w(e){S[e.target.name]=e.target.value,O()}j&&(h.value=j.message||"",T.value=j.email||""),T.addEventListener("input",w),h.addEventListener("input",w);const O=e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500);b.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;t.value,n.value;if(""===t.value||""===n.value)return alert("Fill in all the fields!");e.currentTarget.reset(),localStorage.clear(),S={}}));
//# sourceMappingURL=03-feedback.4ab24f9e.js.map
