(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],{25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),i=n.n(s),o=(n(25),n(11)),r=n(3),l=n(19),d=n(18),j=n(1);var u=function(e){var t=e.id,n=e.text,a=e.handleDeleteNote,s=e.updateMovingNote,i=Object(c.useState)(!1),o=Object(r.a)(i,2),l=o[0],u=o[1],b=Object(c.useState)(n),h=Object(r.a)(b,2),O=h[0],x=h[1];return Object(c.useEffect)((function(){x(n)}),[n]),!0!==l?Object(j.jsxs)("div",{className:"note",onClick:function(){return s(t)},children:[Object(j.jsx)("span",{children:O}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsx)("button",{onClick:function(){return u(!0)},children:"Edit"}),Object(j.jsx)(d.a,{onClick:function(){return a(t)},className:"delete-icon",size:"1.3em"})]})]}):Object(j.jsxs)("div",{className:"note-new",children:[Object(j.jsx)("textarea",{rows:"10",cols:"10",placeholder:"Type to Add Your Note",value:O,onChange:function(e){255-e.target.value.length>=0&&x(e.target.value)}}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[255-O.length," Remaining"]}),Object(j.jsx)("button",{className:"save",onClick:function(){O.trim().length>0&&u(!1)},children:"Change"})]})]})},b=function(e){var t=e.handleAddNote,n=Object(c.useState)(""),a=Object(r.a)(n,2),s=a[0],i=a[1];return Object(j.jsxs)("div",{className:"note-new",children:[Object(j.jsx)("textarea",{rows:"10",cols:"10",placeholder:"Type to Add Your Note",value:s,onChange:function(e){255-e.target.value.length>=0&&i(e.target.value)}}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[255-s.length," Remaining"]}),Object(j.jsx)("button",{className:"save",onClick:function(){s.trim().length>0&&(t(s),i(""))},children:"Add"})]})]})},h=n(44),O=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote,s=e.switchNotes,i=Object(c.useState)(null),o=Object(r.a)(i,2),l=o[0],d=o[1];function O(e){null===l?d(e):(e===l||s(l,e),d(null))}return Object(j.jsxs)(h.a,{container:!0,spacing:2,children:[t.map((function(e){return Object(j.jsx)(h.a,{item:!0,xs:2,children:Object(j.jsx)(u,{id:e.id,text:e.text,handleDeleteNote:a,updateMovingNote:O})})})),t.length<36?Object(j.jsx)(b,{handleAddNote:n}):null]})},x=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Notes"})})},f=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{notes:n,switchNotes:function(e,t){var c=n.map((function(e){return e.id})),s=c.findIndex((function(t){return t===e})),i=c.findIndex((function(e){return e===t})),r=Object(o.a)(n),l=r[s];r[s]=r[i],r[i]=l,a(r)},handleAddNote:function(e){var t={id:Object(l.a)(),text:e},c=[].concat(Object(o.a)(n),[t]);a(c)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b50e041d.chunk.js.map