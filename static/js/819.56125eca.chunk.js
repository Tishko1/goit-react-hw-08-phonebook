"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[819],{5819:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i,o,u,a,c,s,l,d,p,f=t(5872),x=t(9434),h=t(8268),v=t(168),g=t(7402),b=g.Z.h2(r||(r=(0,v.Z)(["\nwidth: 150px;\n\n  font-size: 20px;\n  padding: 15px;\n  margin: 0 15px 15px;\n  background-color: #d0bfd2;\n  border-radius: 10px ;\n"]))),m=g.Z.div(i||(i=(0,v.Z)(["\nwidth: 600px;\n  padding: 20px;\n  margin: 0 15px;\n  background-color: #f2f2f2;\n  border-radius: 10px;\n  border: 3px solid #cca8e9;\n"]))),y=g.Z.input(o||(o=(0,v.Z)(["\n  border: 1px solid #cca8e9;\n  height: 20px;\n  &:hover,\n  &:focus {\n    outline: 1px solid #cca8e9;\n  }\n"]))),j=g.Z.span(u||(u=(0,v.Z)(["\n  display: inline-block;\n  margin: 5px;\n  text-align: start;\n  min-width: 80px;\n  font-weight: bold;\n"]))),Z=t(184),k=function(){var n=(0,x.I0)();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(b,{children:"Find contact"}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(j,{children:"Find contact:"}),(0,Z.jsx)(y,{type:"text",onChange:function(e){return n((0,h.M6)(e.target.value))}})]})]})},w=t(2791),A=t(9562),C=g.Z.h2(a||(a=(0,v.Z)(["\n  font-size: 20px;\n  padding: 15px;\n  background-color: #c9bdd2;\n  border-radius: 10px ;\n"]))),z=g.Z.form(c||(c=(0,v.Z)(["\nwidth: 600px;\n  padding: 20px;\n  margin: 0 15px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #f2f2f2;\n  border-radius: 10px;\n  border: 3px solid #cca8e9;\n"]))),_=g.Z.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),E=g.Z.span(l||(l=(0,v.Z)(["\n  display: inline-block;\n  margin: 5px;\n  text-align: start;\n  min-width: 80px;\n  font-weight: bold;\n"]))),F=g.Z.input(d||(d=(0,v.Z)(["\n  border: 1px solid #cca8e9;\n  height: 20px;\n  &:hover,\n  &:focus {\n    outline: 1px solid #cca8e9;\n  }\n"]))),O=g.Z.button(p||(p=(0,v.Z)(["\n  display: block;\n  width: 110px;\n  height: 40px;\n  padding: 0px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 3px solid #cca8e9;\n  &:hover {\n    background-color: #c3bef0;\n  }\n"])));var S=function(n){var e=n.onSubmit,t=(0,w.useRef)(),r=(0,w.useRef)(),i=(0,x.v9)(A.mW);return(0,Z.jsx)(z,{onSubmit:function(n){n.preventDefault();var i={name:t.current.value,number:r.current.value};e(i),n.target.reset()},children:(0,Z.jsxs)(_,{children:[(0,Z.jsx)(C,{children:" \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),(0,Z.jsxs)(E,{children:[(0,Z.jsx)("span",{children:"\u0406\u043c'\u044f: "}),(0,Z.jsx)(F,{type:"text",name:"name",placeholder:"Anthony Blinkin",ref:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Z.jsxs)(E,{children:[(0,Z.jsx)("span",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "}),(0,Z.jsx)(F,{type:"text",name:"phone",placeholder:"+380-666-66-66",ref:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Z.jsxs)(O,{disabled:"pending"===i,type:"submit",children:["pending"===i&&(0,Z.jsx)(f.Z,{}),"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"]}),"pending"===i&&(0,Z.jsx)(f.Z,{})]})})},q=t(8683),N=t(7689);var R=function(n,e){return function(t){return(0,x.v9)(A.Qb)?(0,Z.jsx)(n,(0,q.Z)({},t)):(0,Z.jsx)(N.Fg,{to:e})}},I=t(2167),B=function(n){return n.contacts.status},D=function(n){return n.contacts.error},L="NOT_FOUND";var M=function(n,e){return n===e};function Q(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?M:r,o=t.maxSize,u=void 0===o?1:o,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),s=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:L},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return L}return{get:r,put:function(e,i){r(e)===L&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function l(){var e=s.get(arguments);if(e===L){if(e=n.apply(null,arguments),a){var t=s.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function J(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function P(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=a,l=s.memoizeOptions,d=void 0===l?t:l,p=Array.isArray(d)?d:[d],f=J(r),x=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return o=x.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:x,dependencies:f,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return i}var T=P(Q),U=T([function(n){return n.contacts.contacts},function(n){return n.filter.value}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}));var W=R((function(){var n=(0,x.I0)(),e=(0,x.v9)(A.Qb),t=(0,x.v9)(B),r=(0,x.v9)(D),i=(0,x.v9)(U);return(0,w.useEffect)((function(){e&&n((0,I.Y2)())}),[e,n]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(S,{onSubmit:function(e){n((0,I.md)(e))}}),"pending"===t&&(0,Z.jsx)(f.Z,{}),null!==r&&(0,Z.jsxs)("p",{children:["Oops, some error occured... ",r]}),(null===i||void 0===i?void 0:i.length)>0&&(0,Z.jsx)("ul",{children:i.map((function(e){return(0,Z.jsxs)("li",{children:[(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Name: "}),e.name]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Number: "}),e.number]}),(0,Z.jsx)("button",{onClick:function(){return t=e.id,void n((0,I.us)(t));var t},children:"\xd7"})]},e.id)}))}),(0,Z.jsx)(k,{})]})}),"/sign-in")}}]);
//# sourceMappingURL=819.56125eca.chunk.js.map