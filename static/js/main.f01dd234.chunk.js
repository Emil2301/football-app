(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(76)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),c=(a(31),a(33),a(9)),i=a(10),s=a(16),m=a(11),u=a(17),d=a(12),h=(a(35),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.click},"Draw a team"))}),f=(a(37),function(e){return"TypeError: Failed to fetch"===e.error.stack?e.error.stack="This API lets only 10 calls per minute. Try again after a moment.":e.error&&(e.error.stack=""),r.a.createElement("div",null,e.name&&!e.error.stack?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"name"},e.name),r.a.createElement("img",{src:"".concat(e.image),alt:""})):r.a.createElement("div",null,r.a.createElement("h3",null,e.error.stack?e.error.stack:null)))}),E=(a(39),a(2)),v=a(13);function p(){var e=Object(d.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return p=function(){return e},e}var g=Object(E.css)(p()),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={error:"",name:"",image:"",loading:!1},a.handleButtonClick=function(e){fetch("https://api.football-data.org/v2/competitions/2002/teams",{headers:{"X-Auth-Token":"8cf26ca4deb64429900d6be7f0576025"}}).then(function(e){if(a.setState({loading:!0}),e.ok)return e;throw Error("Nie uda\u0142o si\u0119: B\u0142\u0105d nr "+e.status)}).then(function(e){return e.json()}).then(function(e){a.setState({loading:!1});var t=Math.floor(18*Math.random());a.setState({error:"",name:e.teams[t].name,image:e.teams[t].crestUrl})}).catch(function(e){a.setState({error:e})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{click:this.handleButtonClick}),r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(v.ClipLoader,{css:g,sizeUnit:"px",size:100,color:"#123abc",loading:this.state.loading})),r.a.createElement(f,{name:this.state.name,image:this.state.image,error:this.state.error}))}}]),t}(n.Component),b=a(78),w=a(79),y=a(77),T=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Error: Path does not exist"))},j=(a(69),a(80)),C=function(){return r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement(j.a,{exact:!0,to:"/",activeClassName:"selected",className:"link"},"Display Logo")),r.a.createElement("button",null,r.a.createElement(j.a,{to:"/when",activeClassName:"selected",className:"link"},"When Does He Play?")))},O=(a(72),a(74),function(e){var t=new Date(e.date).toLocaleString();return"TypeError: Failed to fetch"===e.error.stack?e.error.stack="This API lets only 10 calls per minute. Try again after a moment.":e.error&&(e.error.stack=""),r.a.createElement("div",null,e.value&&!e.error.stack?r.a.createElement("div",null,r.a.createElement("div",null,"Next game:"),r.a.createElement("div",null,e.homeTeam," vs. ",e.awayTeam),r.a.createElement("div",null,"Date: ",t)):r.a.createElement("div",null,r.a.createElement("h3",null,e.error.stack?e.error.stack:null)))});function N(){var e=Object(d.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return N=function(){return e},e}var z=Object(E.css)(N()),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",homeTeam:"",awayTeam:"",date:"",error:"",loading:!1},a.handleChange=function(e){a.setState({value:e.target.value}),a.handleNextMatch(e.target.value)},a.handleNextMatch=function(e){var t="https://api.football-data.org/v2/teams/".concat(e,"/matches?status=SCHEDULED");fetch(t,{headers:{"X-Auth-Token":"8cf26ca4deb64429900d6be7f0576025"}}).then(function(e){if(a.setState({loading:!0}),e.ok)return e;throw Error("Nie uda\u0142o si\u0119: B\u0142\u0105d nr "+e.status)}).then(function(e){return e.json()}).then(function(e){a.setState({loading:!1});var t=e.matches[0],n=t.homeTeam,r=t.awayTeam,o=t.utcDate;a.setState({homeTeam:n.name,awayTeam:r.name,date:o})}).catch(function(e){console.log(e),a.setState({error:e})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.homeTeam,n=e.awayTeam,o=e.date,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(v.ClipLoader,{css:z,sizeUnit:"px",size:150,color:"#123abc",loading:this.state.loading})),r.a.createElement("form",null,r.a.createElement("select",{onChange:this.handleChange,value:this.state.value},r.a.createElement("option",{value:""},"Choose the player"),r.a.createElement("option",{value:"5"},"Robert Lewandowski"),r.a.createElement("option",{value:"340"},"Jan Bednarek"),r.a.createElement("option",{value:"98"},"Krzysztof Pi\u0105tek"),r.a.createElement("option",{value:"113"},"Arkadiusz Milik"),r.a.createElement("option",{value:"584"},"Karol Linetty"),r.a.createElement("option",{value:"4"},"\u0141ukasz Piszczek"),r.a.createElement("option",{value:"341"},"Mateusz Klich"),r.a.createElement("option",{value:"322"},"Kamil Grosicki")),r.a.createElement(O,{value:t,homeTeam:a,awayTeam:n,date:o,error:l})))}}]),t}(n.Component),x=function(){return r.a.createElement(b.a,{basename:"/football-app"},r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(w.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:k}),r.a.createElement(y.a,{path:"/when",component:S}),r.a.createElement(y.a,{component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.f01dd234.chunk.js.map