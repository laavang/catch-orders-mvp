(this["webpackJsonpcatch-orders-mvp"]=this["webpackJsonpcatch-orders-mvp"]||[]).push([[0],{88:function(e,t,n){},92:function(e,t,n){},96:function(e,t){},98:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),i=n(11),l=n.n(i),r=(n(88),n(127)),o=n(131),a=n(100),d=n.p+"static/media/logo.a6029168.svg",h=function(){return Object(c.jsx)(r.a,{position:"relative",className:"app-bar",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:d})}),Object(c.jsx)(a.a,{variant:"h6",style:{flexGrow:"1"},className:"toolbar-header",children:"Orders"}),Object(c.jsx)("ul",{className:"nav-list",children:Object(c.jsx)("li",{className:"nav-list-item",onClick:function(){console.log("User logged out"),document.cookie="loggedIn=",window.location.replace("/login")},children:"Logout"})})]})})},u=(n(92),n(12)),j=(n(76),n(9)),b=n(18),O=n(134),p=n(40),f=n(41),g=n(48),x=n(46),S=n(136),v=n(138),m=n(132),E=n(133),C=n(135),y=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={open:!1,flaghousePO:"",buyer:"",site:"",license:"",licenseStart:"",licenseEnd:""},e.toggleDialog=function(){return e.setState({open:!e.state.open})},e.handleTextChange=function(t){var n=Object(u.a)({},e.state);n[t.target.id]=t.target.value,e.setState(n)},e.handleSubmit=function(t){t.preventDefault();var n=Object(u.a)({},e.state);delete n.open,e.props.addLicense(n),e.setState({flaghousePO:"",buyer:"",site:"",license:"",licenseStart:"",licenseEnd:""}),e.setState({open:!e.state.open}),window.location.reload()},e.componentDidUpdate=function(t,n){n.open!==e.state.open&&e.setState({flaghousePO:"",buyer:"",site:"",license:"",licenseStart:"",licenseEnd:""})},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(S.a,{variant:"contained",className:"add-license",onClick:this.toggleDialog,children:"Add License"}),Object(c.jsx)("div",{children:Object(c.jsxs)(v.a,{open:this.state.open,onClose:this.toggleDialog,children:[Object(c.jsx)(m.a,{children:"Add License"}),Object(c.jsx)(E.a,{children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"add-license-form",children:[Object(c.jsx)(C.a,{id:"flaghousePO",placeholder:"Flaghouse PO",value:this.state.flaghousePO,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"buyer",placeholder:"Buyer",value:this.state.buyer,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"site",placeholder:"Site",value:this.state.site,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"license",placeholder:"License",value:this.state.license,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"licenseStart",placeholder:"Start Date (MM-DD-YYYY)",value:this.state.licenseStart,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"licenseEnd",placeholder:"Expiration Date (MM-DD-YYYY)",value:this.state.licenseEnd,onChange:this.handleTextChange,required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)(S.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})]})})]})})]})}}]),n}(s.Component),L=function(){return{type:"FETCH_LICENSES_BEGIN"}},N=function(){return function(e){e(L),fetch("http://localhost:4000/licenses").then((function(e){return e.json()})).then((function(t){for(var n=t,c=0;c<n.length;c++){var s=n[c].licenseStart,i=n[c].licenseEnd,l=s.slice(5,7),r=s.slice(8,10),o=s.slice(0,4),a="".concat(l,"-").concat(r,"-").concat(o),d=i.slice(5,7),h=i.slice(8,10),u=i.slice(0,4),j="".concat(d,"-").concat(h,"-").concat(u);n[c].licenseStart=a,n[c].licenseEnd=j}e(function(e){return{type:"FETCH_LICENSES_SUCCESS",value:e}}(n))})).catch((function(t){e({type:"FETCH_LICENSES_FAILURE",value:t}),console.log("error ===> ",t)}))}},D=function(){return{type:"PROCESS_LICENSE_BEGIN"}},I=Object(b.b)(null,(function(e){return{addLicense:function(t){return e(function(e){return console.log("ADD LICENSE: ",e),function(t){var n=e.licenseStart.slice(0,2),c=e.licenseStart.slice(3,5),s=e.licenseStart.slice(6,10),i=e.licenseEnd.slice(0,2),l=e.licenseEnd.slice(3,5),r=e.licenseEnd.slice(6,10),o="".concat(s,"-").concat(n,"-").concat(c," 00:00:00"),a="".concat(r,"-").concat(i,"-").concat(l," 00:00:00"),d={flaghousePO:e.flaghousePO,buyer:e.buyer,site:e.site,license:e.license,licenseStart:o,licenseEnd:a,isClosed:0,isDeleted:0};fetch("http://localhost:4000/licenses/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log("error ===> ",e)}))}}(t))}}}))(y),T=function(e){var t="red !important";return Object(c.jsxs)("div",{className:"sidebar sidebar-md-show",children:[Object(c.jsx)("nav",{className:"sidebar-nav",children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:"nav-title",children:"Orders"}),Object(c.jsx)("li",{className:"nav-item",style:{backgroundColor:{focus:t}},children:Object(c.jsx)("a",{id:"open-orders",className:"nav-link",onClick:function(){return e.filterLicenses("open")},children:"Open Orders"})}),Object(c.jsx)("li",{className:"nav-item nav-dropdown",style:{backgroundColor:{focus:t}},children:Object(c.jsx)("a",{id:"closed-orders",className:"nav-link",onClick:function(){return e.filterLicenses("closed")},children:"Closed Orders"})})]})}),Object(c.jsx)("button",{className:"sidebar-minimizer brand-minimizer",type:"button"})]})},P=Object(b.b)((function(e){return{licenseFilter:e.licenseFilter}}),(function(e){return{filterLicenses:function(t){return e(function(e){return{type:"FILTER_LICENSES",value:e}}(t))}}}))(T),_=n(47),w=n(71),k=n.n(w),F=n(72),U=n.n(F),Y=n(70),q=n.n(Y),A=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={open:!1,license_id:e.props.license.license_id,flaghousePO:e.props.license.flaghousePO,buyer:e.props.license.buyer,site:e.props.license.site,license:e.props.license.license,licenseStart:"2020-01-10 14:45:12",licenseEnd:"2022-01-10 14:45:12",isClosed:e.props.license.isClosed,isDeleted:e.props.license.isDeleted},e.toggleDialog=function(){return e.setState({open:!e.state.open})},e.handleTextChange=function(t){var n=Object(u.a)({},e.state);n[t.target.id]=t.target.value,e.setState(n)},e.handleSubmit=function(t){t.preventDefault();var n=Object(u.a)({},e.state);delete n.open,e.props.updateLicense(n),e.toggleDialog(),e.props.fetchLicenses(),e.props.triggerLicenseUpdate()},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsx)(q.a,{className:"icon",onClick:this.toggleDialog}),Object(c.jsx)("div",{children:Object(c.jsxs)(v.a,{open:this.state.open,onClose:this.toggleDialog,children:[Object(c.jsx)(m.a,{children:"Update License"}),Object(c.jsx)(E.a,{children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"update-license-form",children:[Object(c.jsx)(C.a,{id:"flaghousePO",placeholder:"Flaghouse PO",value:this.state.flaghousePO,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"buyer",placeholder:"Buyer",value:this.state.buyer,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"site",placeholder:"Site",value:this.state.site,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"license",placeholder:"License",value:this.state.license,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"licenseStart",placeholder:"Start Date (MM-DD-YYYY)",value:this.state.licenseStart,onChange:this.handleTextChange,required:!0}),Object(c.jsx)(C.a,{id:"licenseEnd",placeholder:"Expiration Date (MM-DD-YYYY)",value:this.state.licenseStart,onChange:this.handleTextChange,required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)(S.a,{variant:"contained",color:"primary",type:"submit",children:"Update License"})]})})]})})]})}}]),n}(s.Component),B=function(e){var t=Object(s.useState)(0),n=Object(_.a)(t,2),i=n[0],l=n[1],r=function(){l(i+1)};Object(s.useEffect)((function(){e.fetchLicenses()}),[i]);if(1==e.licenses.loading)return console.log("Loading licenses..."),Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Loading..."})});if(null!==e.licenses.error||0===e.licenses.items.length)return console.log("No licenses found."),Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"No licenses found."})});var o=e.licenses.items.filter((function(e){return 0===e.isDeleted})).filter((function(e){return 0===e.isClosed}));return console.log("Fetched licenses: ",o),Object(c.jsxs)("table",{class:"table table-striped table-bordered open-licenses-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Buyer"}),Object(c.jsx)("th",{scope:"col",children:"Site"}),Object(c.jsx)("th",{scope:"col",children:"License"}),Object(c.jsx)("th",{scope:"col",children:"Start Date"}),Object(c.jsx)("th",{scope:"col",children:"End Date"}),Object(c.jsx)("th",{scope:"col",children:"Edit"}),Object(c.jsx)("th",{scope:"col",children:"Delete"}),Object(c.jsx)("th",{scope:"col",children:"Process"})]})}),Object(c.jsx)("tbody",{children:o.map((function(t,n){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:t.buyer}),Object(c.jsx)("th",{scope:"col",children:t.site}),Object(c.jsx)("th",{scope:"col",children:t.license}),Object(c.jsx)("th",{scope:"col",children:t.licenseStart.slice(0,8)}),Object(c.jsx)("th",{scope:"col",children:t.licenseEnd.slice(0,8)}),Object(c.jsx)("th",{scope:"col",style:{textAlign:"center"},children:Object(c.jsx)(A,{license:t,index:n,updateLicense:e.updateLicense,fetchLicenses:e.fetchLicenses,triggerLicenseUpdate:r})}),Object(c.jsx)("th",{scope:"col",style:{textAlign:"center"},children:Object(c.jsx)(k.a,{onClick:function(){return function(t){e.deleteLicense(t),r()}(t)},className:"icon text-red"})}),Object(c.jsx)("th",{scope:"col",style:{textAlign:"center"},children:Object(c.jsx)(U.a,{onClick:function(){return function(t){e.processLicense(t),r()}(t)},className:"icon process-icon"})})]},t.license_id)}))})]})},M=Object(b.b)((function(e){return{user:e.user,licenses:e.licenses}}),(function(e){return{fetchLicenses:function(){return e(N())},deleteLicense:function(t){return e(function(e){return function(t){var n=e.licenseId,c={licenseId:e.licenseId,flaghousePO:e.flaghousePO,buyer:e.buyer,site:e.site,license:e.license,licenseStart:"2020-01-10 14:45:12",licenseEnd:"2022-01-10 14:45:12",isClosed:e.isClosed,isDeleted:1};fetch("http://localhost:4000/licenses/delete/"+n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch((function(e){console.log("error ===> ",e)}))}}(t))},updateLicense:function(t){return e((n=t,function(e){var t=n.licenseStart.slice(0,2),c=n.licenseStart.slice(3,5),s=n.licenseStart.slice(6,10),i=n.licenseEnd.slice(0,2),l=n.licenseEnd.slice(3,5),r=n.licenseEnd.slice(6,10),o=("".concat(s,"-").concat(t,"-").concat(c," 00:00:00"),"".concat(r,"-").concat(i,"-").concat(l," 00:00:00"),{licenseId:n.licenseId,flaghousePO:n.flaghousePO,buyer:n.buyer,site:n.site,license:n.license,licenseStart:n.licenseStart,licenseEnd:n.licenseEnd,isClosed:n.isClosed,isDeleted:0}),a="http://localhost:4000/licenses/"+n.licenseId;fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){console.log("error ===> ",e)})),window.location.reload()}));var n},processLicense:function(t){return e(function(e){return function(t){console.log("License processing initiating..."),t(D);var n={flaghousePO:e.flaghousePO,buyer:e.buyer,site:e.site,license:e.license,licenseStart:e.licenseStart,licenseEnd:e.licenseEnd,isClosed:0,isDeleted:0,licenseId:e.licenseId};console.log(e),console.log("License to process ",n),fetch("".concat("https://localhost:4000","/licenses/process"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(t(function(e){return{type:"PROCESS_LICENSE_SUCCESS",value:e}}(e))).catch((function(e){console.log("License processing error ===> ",e)}))}}(t))}}}))(B),G=function(e){var t=Object(s.useState)([]),n=Object(_.a)(t,2);n[0],n[1];if(Object(s.useEffect)((function(){e.fetchLicenses()}),[]),!0===e.licenses.loading)return console.log("Loading licenses..."),Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Loading..."})});if(null!==e.licenses.error||0===e.licenses.items.length)return console.log("No licenses found."),Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"No licenses found."})});console.log("Licenses found: ",e.licenses);var i=e.licenses.items.filter((function(e){return 0===e.isDeleted})).filter((function(e){return 1===e.isClosed}));return Object(c.jsxs)("table",{class:"table table-striped table-bordered closed-license-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Flaghouse PO"}),Object(c.jsx)("th",{scope:"col",children:"Buyer"}),Object(c.jsx)("th",{scope:"col",children:"Site"}),Object(c.jsx)("th",{scope:"col",children:"License"}),Object(c.jsx)("th",{scope:"col",children:"Start Date"}),Object(c.jsx)("th",{scope:"col",children:"End Date"})]})}),Object(c.jsx)("tbody",{children:i.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:e.flaghousePO}),Object(c.jsx)("th",{scope:"col",children:e.buyer}),Object(c.jsx)("th",{scope:"col",children:e.site}),Object(c.jsx)("th",{scope:"col",children:e.license}),Object(c.jsx)("th",{scope:"col",children:e.licenseStart}),Object(c.jsx)("th",{scope:"col",children:e.licenseEnd})]},e.id)}))})]})},R=Object(b.b)((function(e){return{user:e.user,licenses:e.licenses}}),(function(e){return{fetchLicenses:function(){return e(N())}}}))(G),J=function(e){return Object(c.jsxs)("div",{className:"dashboard",children:[Object(c.jsx)(P,{}),Object(c.jsx)(O.a,{maxWidth:"lg",className:"license-container",children:Object(c.jsxs)("div",{class:"card",children:[Object(c.jsx)("div",{class:"card-header",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"d-flex align-items-center col-6 col-sm-6 col-md-6 col-lg-6",style:{textTransform:"capitalize"},children:Object(c.jsxs)("strong",{children:[Object(c.jsx)("i",{class:"icon-info pr-1"}),e.licenses.filter," Orders"]})}),"open"===e.licenses.filter?Object(c.jsx)("div",{sx:"6",class:"d-flex justify-content-end col-sm-6 col-md-6 col-lg-6",children:Object(c.jsx)(I,{className:"add-license-button"})}):Object(c.jsx)("div",{})]})}),Object(c.jsx)("div",{class:"card-body",children:"open"===e.licenses.filter?Object(c.jsx)(M,{}):Object(c.jsx)(R,{})})]})})]})},H=Object(b.b)((function(e){return{user:e.user,licenses:e.licenses}}),(function(e){return{}}))(J),z=(n(96),n(73),function(){return Object(c.jsx)(j.d,{children:Object(c.jsx)(j.b,{path:"/",component:H})})}),W=n(75),$=n(30),K=n(74),Q=n(56),V=Object($.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:null,password:null,isLoggedIn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":var n=t.value;return console.log("New user: ",n),n;case"LOG_OUT":var c={username:null,password:null,isLoggedIn:!1};return document.cookie="isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",c;default:return e}},licenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[],loading:!1,error:null,filter:"open"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LICENSE":return Object(u.a)(Object(u.a)({},e),{},{items:[].concat(Object(Q.a)(e.licenses.items),[t.value])});case"DELETE_LICENSE":return e;case"FETCH_LICENSES_BEGIN":return Object(u.a)(Object(u.a)({},e),{},{items:Object(Q.a)(e.licenses.items),loading:!0,error:null});case"FETCH_LICENSES_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{items:t.value,loading:!1,error:null});case"PROCESS_LICENSE_BEGIN":return Object(u.a)(Object(u.a)({},e),{},{loading:!0,error:null});case"PROCESS_LICENSE_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:null});case"FILTER_LICENSES":case"FILTER_LICENSES":return Object(u.a)(Object(u.a)({},e),{},{filter:t.value});case"UPDATE_LICENSE":default:return e}}}),X=Object($.d)(V,{user:{username:"test-user-1",email:"test-user@example.com"},licenses:{items:[],loading:!1,error:!1,filter:"open"}},Object($.a)(K.a));var Z=function(){return Object(c.jsx)(b.a,{store:X,children:Object(c.jsxs)(W.a,{children:[Object(c.jsx)(h,{}),Object(c.jsx)(z,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(c.jsx)(Z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[98,1,2]]]);
//# sourceMappingURL=main.4f9c7a96.chunk.js.map