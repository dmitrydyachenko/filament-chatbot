(window["webpackJsonpfilament-chatbot"]=window["webpackJsonpfilament-chatbot"]||[]).push([[0],{112:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return y});var n=a(55),r=a(56),o=a(59),s=a(57),i=a(60),c=a(0),l=a(48),m=a.n(l),u=a(49),d=a.n(u),g=a(74),_=a.n(g),f=a(58),v=a.n(f),p=a(113),h=a.n(p),b=a(114),E=a(117),y=function(t){function a(t){var r;return Object(n.a)(this,a),(r=Object(o.a)(this,Object(s.a)(a).call(this,t))).onSendClick=function(e){var t=r.state,a=t.dialogData,n=t.botSettings,o=t.userSettings;r.updateDialogFlow(a.dialogFlow.concat([r.getUserData({message:{text:e}},o)]),a,0,{scrollDelay:0},function(){r.updateDialogFlow(r.state.dialogData.dialogFlow.concat([r.getBotData({message:{text:""}},"text",!0,!0)]),a,500,{scrollDelay:0},function(){r.getBotResponse(e,n,function(e){var t=r.getMessages(r.state.dialogData.dialogFlow,e),n=r.getLastUserMessage(t);r.updateDialogFlow(t,a,1e3,{scrollDelay:100,messageId:n&&n.id})})})})},r.getMessages=function(e,t){var a=e;if(t&&t.length){var n=!0,o=!0,s=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var m=c.value||{data:{text:""},type:"text"},u=m.data,d=m.type;if(u){var g=!0,f=!1,v=void 0;try{for(var p,h=u[Symbol.iterator]();!(g=(p=h.next()).done);g=!0){var b=p.value,E=r.getBotData({message:b},d,n);a=_()(a,{$splice:n?[[a.length-1,1,E]]:[[a.length,0,E]]})}}catch(y){f=!0,v=y}finally{try{g||null==h.return||h.return()}finally{if(f)throw v}}n=!1}}}catch(y){s=!0,i=y}finally{try{o||null==l.return||l.return()}finally{if(s)throw i}}}return a},r.getBotData=function(e,t,a,n){return{type:t,value:e,firstInSet:a,isReplying:n,source:"bot",image:v.a,orientation:"left",timeStamp:m()().format("LT"),id:d()()}},r.getUserData=function(e,t){return{value:e,type:"text",source:"user",image:(t||{userImage:""}).userImage,orientation:"right",timeStamp:m()().format("LT"),firstInSet:!1,id:d()()}},r.getBotResponse=function(e,t,a){if(t){var n=t.botUrl,o=t.botId,s=t.botProviderId,i=t.sessionId;Object(b.a)(n,{message:e,botId:o,providerId:s,sessionId:i}).then(function(e){r.setState({botResponse:e},function(){a&&e&&a(e)})})}},r.updateDialogFlow=function(t,a,n,o,s){r.loadingTimeout=e.setTimeout(function(){r.setState({dialogData:_()(a,{dialogFlow:{$set:t}})},function(){if(clearTimeout(r.loadingTimeout),o){var e=o.messageId,a=o.scrollDelay;r.scrollToMessage(e||t[t.length-1].id,a)}s&&s()})},n)},r.initSettings=function(e,t){r.setState({userSettings:{userId:d()(),userImage:h.a}},function(){var a=e.botUrl,n=e.botId,o=e.botProviderId,s=e.welcomeMessage;r.setState({botSettings:{botUrl:a,botId:n,botProviderId:o,welcomeMessage:s,sessionId:d()()}},function(){t&&t()})})},r.scrollToMessage=function(e,t){r.messagesEndRef&&(r.scrollingTimeout=setTimeout(function(){var t=document.getElementById(e);t&&t.firstChild&&r.messagesEndRef.current.scrollTo(0,t.firstChild.offsetTop-140),clearTimeout(r.scrollingTimeout)},t||500))},r.getLastUserMessage=function(e){var t=e.filter(function(e){return"user"===e.source});return t.length?t[t.length-1]:void 0},r.state={botSettings:void 0,userSettings:void 0,dialogData:{dialogFlow:[]},scrollTop:0,isLoading:!0},r.loadingTimeout=null,r.scrollingTimeout=null,r.messagesEndRef=c.createRef(),r}return Object(i.a)(a,t),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.settings;this.initSettings(t,function(){var t=e.state,a=t.botSettings,n=t.dialogData,r=a?a.welcomeMessage:"";e.updateDialogFlow([e.getBotData({message:{text:r}},"text")],n,0,void 0,function(){e.setState({isLoading:!1})})})}},{key:"render",value:function(){return c.createElement(E.a,Object.assign({},this.state,{onSendClick:this.onSendClick,messagesEndRef:this.messagesEndRef}))}}]),a}(c.Component)}).call(this,a(50))},113:function(e,t,a){e.exports=a.p+"static/media/user.2b7412eb.svg"},114:function(e,t,a){"use strict";function n(e,t){return new Promise(function(a,n){fetch(e,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){a(function(e){if(e){var t=e.status;if(t){var a=e.bot_response;if("misunderstood"===t)return[{type:"text",data:[{text:(a&&a.length?a[0]:{speech:""}).speech}]}];if("understood"===t){var n=a&&a.length?a:[];if(n&&n.length)return n.map(function(e){switch(e.type){case 0:return{type:"text",data:e.speech.map(function(e){return{text:e}})};case 5:return{type:"image",data:e.images};case 6:return{type:"card",data:e.cards};default:return{type:"text",data:[{text:"I'm sorry, I didn't understand that. Can you rephrase it?"}]}}})}}}return[{type:"error"}]}(e))}).catch(n)})}a.d(t,"a",function(){return n})},117:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"default",function(){return y});var r={};a.r(r),a.d(r,"default",function(){return N});var o={};a.r(o),a.d(o,"default",function(){return I});var s=a(0),i=a(236),c=a(237),l=a(238),m=a(25),u=a(58),d=a.n(u);function g(e){return{__html:e}}var _=a(48),f=a.n(_),v=a(34),p=a.n(v),h=function(e){var t=e.value,a=e.orientation,n=Object(m.b)().dark;return s.createElement("div",{className:"".concat(p.a.timestamp_container," ").concat("right"===a?p.a.right:p.a.left)},s.createElement("div",{className:"".concat(p.a.timestamp," ").concat(n?p.a.dark:p.a.light)},t||f()().format("LT")))},b=a(7),E=a.n(b),y=function(e){var t=e.message,a=t.value,n=t.timeStamp,r=t.image,o=t.orientation,i=t.isReplying,c=Object(m.b)().dark,l=i?s.createElement("div",{className:E.a.body},s.createElement("div",{className:E.a.replying},s.createElement("div",{className:E.a.bounce1}),s.createElement("div",{className:E.a.bounce2}),s.createElement("div",{className:E.a.bounce3}))):s.createElement("div",{className:E.a.body,dangerouslySetInnerHTML:g(a.message.text)});return s.createElement("div",{className:"".concat(E.a.container," ").concat("right"===o?E.a.right:E.a.left," ").concat(c?E.a.dark:E.a.light)},s.createElement("div",{className:E.a.content_container},s.createElement("div",{className:E.a.icon},s.createElement("div",{className:E.a.image,style:{backgroundImage:"url('".concat(r,"')")}})),"left"===o&&s.createElement("div",{className:E.a.arrow}),s.createElement("div",{className:E.a.message},l),"right"===o&&s.createElement("div",{className:E.a.arrow})),s.createElement(h,{value:n,orientation:o}))},k=a(15),T=a.n(k),N=function(e){var t=e.message,a=t.value,n=t.timeStamp,r=a.message,o=r.text,i=r.title,c=r.postback,l=r.url,m=s.createElement("div",{className:T.a.body},s.createElement("div",{className:T.a.header},s.createElement("div",{className:T.a.title},i)),s.createElement("div",{className:T.a.content},s.createElement("div",{className:T.a.image},s.createElement("div",null,s.createElement("img",{src:l,alt:""}))),s.createElement("div",{className:T.a.info_container},s.createElement("div",{className:T.a.text,dangerouslySetInnerHTML:g(o)}),s.createElement("div",{className:T.a.link},s.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"More...")))));return s.createElement("div",{className:"".concat(T.a.container," ").concat(T.a.left)},s.createElement("div",{className:T.a.content_container},s.createElement("div",{className:T.a.message},m)),s.createElement(h,{value:n}))},x=a(31),M=a.n(x),I=function(e){var t=e.message,a=t.value,n=t.timeStamp,r=a.message.uri,o=s.createElement("div",{className:M.a.body},s.createElement("div",{className:M.a.content},s.createElement("div",{className:M.a.image},s.createElement("div",null,s.createElement("img",{src:r,alt:""})))));return s.createElement("div",{className:"".concat(M.a.container," ").concat(M.a.left)},s.createElement("div",{className:M.a.content_container},s.createElement("div",{className:M.a.message},o)),s.createElement(h,{value:n}))},S={text:n,card:r,image:o},w=function(e){var t=e.message.type,a=t?S[t].default:null;return a?s.createElement(a,e):null},C=(a(221),function(e){var t=e.label,a=e.checked,n=e.onToggle;return s.createElement("div",{className:"custom-control custom-switch"},s.createElement("input",{id:"custom-switch",type:"checkbox",className:"custom-control-input",checked:a,onChange:n}),s.createElement("label",{className:"custom-control-label",htmlFor:"custom-switch"},t))}),O=a(55),j=a(56),D=a(59),B=a(57),U=a(60),F=a(75),P=a(116),R=a.n(P),L=a(30),V=a.n(L),K=function(e){var t=e.userInputValue,a=e.placeholder,n=e.enableMicrophone,r=e.onTextFieldChanged,o=e.onSendClick,i=e.onKeyPress,c=Object(m.b)().dark;return s.createElement("div",{className:"".concat(V.a.container," ").concat(c?V.a.dark:V.a.light),onKeyPress:i},s.createElement("div",{className:V.a.content},s.createElement("div",{className:V.a.pencil},s.createElement(F.b,{icon:F.a})),s.createElement("div",{className:V.a.input},s.createElement(R.a.Control,{size:"lg",type:"text",value:t,placeholder:a,onChange:r})),s.createElement("div",{className:V.a.send,onClick:o},"Send"),n&&s.createElement("div",{className:"".concat(V.a.microphone)},s.createElement("i",{className:"fa fa-microphone","aria-hidden":"true"}))))},H=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(D.a)(this,Object(B.a)(t).call(this,e))).onTextFieldChanged=function(e){a.setState({userInputValue:e.currentTarget.value})},a.onSendClick=function(){a.sendUserInput(a.state.userInputValue)},a.onKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),a.sendUserInput(a.state.userInputValue))},a.sendUserInput=function(e){a.setState({userInputValue:""},function(){var t=a.props.onSendClick;t&&e&&t(e)})},a.state={userInputValue:""},a}return Object(U.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return s.createElement(K,Object.assign({},this.state,{placeholder:this.props.placeholder,onTextFieldChanged:this.onTextFieldChanged,onSendClick:this.onSendClick,onKeyPress:this.onKeyPress}))}}]),t}(s.Component),J=a(6),W=a.n(J);t.a=function(e){var t=e.dialogData,a=e.onSendClick,n=e.messagesEndRef,r=t.dialogFlow,o=Object(m.b)(),u=o.dark;return s.createElement(i.a,{className:W.a.container},s.createElement(c.a,{className:W.a.row},s.createElement(l.a,{className:W.a.column},s.createElement(c.a,{className:W.a.dialog_header},s.createElement(l.a,{className:W.a.bot_info_container,xs:12,md:6},s.createElement("div",{className:W.a.bot_image},s.createElement("img",{className:W.a.image,src:d.a,alt:""})),s.createElement("div",{className:W.a.bot_info},s.createElement("div",{className:W.a.bot_name},"Filament Bot"),s.createElement("div",{className:W.a.bot_status},"online"))),s.createElement(l.a,{className:W.a.bot_settings_container,xs:12,md:6},s.createElement("div",{className:W.a.bot_settings},s.createElement(C,{label:u?"Dark mode":"Light mode",checked:u,onToggle:function(){return o.toggleTheme()}})))),s.createElement("div",{className:W.a.dialog_container},s.createElement("div",{className:"".concat(W.a.dialog_content," ").concat(u?W.a.dark:W.a.light),ref:n},r&&r.map(function(e,t){return s.createElement("div",{id:e.id,key:t},s.createElement(w,{message:e}))})),s.createElement("div",{className:"".concat(W.a.dialog_footer," ").concat(u?W.a.dark:W.a.light)},s.createElement(H,{placeholder:"Ask a question...",onSendClick:a}))))))}},118:function(e,t,a){e.exports=a(234)},15:function(e,t,a){e.exports={container:"CardMessage_container__1D5U1",content_container:"CardMessage_content_container__GfQLm",message:"CardMessage_message__1rH2k",body:"CardMessage_body__1MY4O",header:"CardMessage_header__32CIe",title:"CardMessage_title__StwvT",content:"CardMessage_content__uU3hS",image:"CardMessage_image__psyds",info_container:"CardMessage_info_container__39j_S",text:"CardMessage_text__3vnRT",link:"CardMessage_link__2dFo5",left:"CardMessage_left__23SFo"}},216:function(e,t,a){},221:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);a(119);var n=a(0),r=a.n(n),o=a(111),s=a.n(o),i=(a(215),a(216),a(112)),c=a(25),l="https://golin.ebm.filament.ai/api/chat/query",m="6",u="4",d="Hi, mate. What can I help you with today?";var g=function(){var e={botUrl:l,botId:m,botProviderId:u,welcomeMessage:d};return r.a.createElement(c.a,null,r.a.createElement(i.a,{settings:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return m});var n=a(115),r=a(76),o=a(0),s=a.n(o);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l=s.a.createContext({dark:!1,toggleTheme:function(){}}),m=function(){return s.a.useContext(l)},u=function(e){var t=e.children,a=function(){var e=s.a.useState({dark:!1,hasThemeMounted:!1}),t=Object(r.a)(e,2),a=t[0],n=t[1];return s.a.useEffect(function(){n(c({},a,{dark:"true"===localStorage.getItem("dark"),hasThemeMounted:!0}))},[]),[a,n]}(),n=Object(r.a)(a,2),o=n[0],i=n[1];if(!o.hasThemeMounted)return s.a.createElement("div",null);return s.a.createElement(l.Provider,{value:{dark:o.dark,toggleTheme:function(){var e=!o.dark;localStorage.setItem("dark",JSON.stringify(e)),i(c({},o,{dark:e}))}}},t)}},30:function(e,t,a){e.exports={container:"UserInput_container__NgtXv",content:"UserInput_content__3DZaI",pencil:"UserInput_pencil__3wC9M",input:"UserInput_input__KsO7i",send:"UserInput_send__3Tigg",dark:"UserInput_dark__cHTBV",light:"UserInput_light__2z3Lo"}},31:function(e,t,a){e.exports={container:"ImageMessage_container__2CZ3J",content_container:"ImageMessage_content_container__3Jj46",message:"ImageMessage_message__12xsW",body:"ImageMessage_body__t9Ced",content:"ImageMessage_content__3QnRq",image:"ImageMessage_image__Wn6ND",left:"ImageMessage_left__xD-Qu"}},34:function(e,t,a){e.exports={timestamp_container:"TimeStamp_timestamp_container__-k-Fu",timestamp:"TimeStamp_timestamp__3w_TG",dark:"TimeStamp_dark__1lgfu",light:"TimeStamp_light__2vlma",left:"TimeStamp_left__cV12R",right:"TimeStamp_right__zS025"}},58:function(e,t,a){e.exports=a.p+"static/media/bot.48df58b9.svg"},6:function(e,t,a){e.exports={container:"Bot_container__2VGZV",row:"Bot_row__1WNvO",column:"Bot_column__3FxMv",dialog_header:"Bot_dialog_header__3gQC4",bot_info_container:"Bot_bot_info_container__1QoM7",bot_image:"Bot_bot_image__3HCzV",bot_info:"Bot_bot_info__1M0OP",bot_name:"Bot_bot_name__yplY2",bot_status:"Bot_bot_status__yKAkH",bot_settings_container:"Bot_bot_settings_container__2rKUp",dialog_container:"Bot_dialog_container__1FXsU",dialog_content:"Bot_dialog_content__2yaNw",dark:"Bot_dark__1hUVt",light:"Bot_light__15Kdr",dialog_footer:"Bot_dialog_footer__Vcveq"}},7:function(e,t,a){e.exports={container:"TextMessage_container__25m6A",content_container:"TextMessage_content_container__RbvjM",icon:"TextMessage_icon__3xLtP",image:"TextMessage_image__1jWhP",default:"TextMessage_default__3sjTX",arrow:"TextMessage_arrow__1Jsqn",message:"TextMessage_message__2I9QM",body:"TextMessage_body__1kgkt",replying:"TextMessage_replying__GdoUI",blink:"TextMessage_blink__17LK2","sk-bouncedelay":"TextMessage_sk-bouncedelay__3rV7H",bounce1:"TextMessage_bounce1__1jSzL",bounce2:"TextMessage_bounce2__3AUgZ",left:"TextMessage_left__2EW1v",dark:"TextMessage_dark__3Jaj9",light:"TextMessage_light__oyrNI",right:"TextMessage_right__GpCv0"}}},[[118,1,2]]]);
//# sourceMappingURL=main.ac50d728.chunk.js.map