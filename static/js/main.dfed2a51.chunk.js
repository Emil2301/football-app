(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(39)},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),c=(a(22),a(24),a(5)),i=a(6),u=a(10),m=a(7),s=a(11),h=(a(26),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e.click},"Draw a team"))}),d=(a(28),function(e){return r.a.createElement("div",{id:"club"},r.a.createElement("div",{id:"name"},e.name),r.a.createElement("img",{src:"".concat(e.image),alt:""}),r.a.createElement("div",null,e.error?String(e.error):null))}),f=(a(30),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={error:"",name:"",image:""},a.handleButtonClick=function(e){fetch("https://api.football-data.org/v2/competitions/2002/teams",{headers:{"X-Auth-Token":"8cf26ca4deb64429900d6be7f0576025"}}).then(function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119: B\u0142\u0105d nr "+e.status)}).then(function(e){return e.json()}).then(function(e){var t=Math.floor(18*Math.random());a.setState({error:"",name:e.teams[t].name,image:e.teams[t].crestUrl})}).catch(function(e){a.setState({error:e})})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{click:this.handleButtonClick}),r.a.createElement(d,{name:this.state.name,image:this.state.image,error:this.state.error}))}}]),t}(n.Component)),E=a(41),v=a(42),p=a(40),w=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Error: Path does not exist"))},g=(a(32),a(43)),b=function(){return r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement(g.a,{exact:!0,to:"/",activeClassName:"selected",className:"link"},"Display Logo")),r.a.createElement("button",null,r.a.createElement(g.a,{to:"/when",activeClassName:"selected",className:"link"},"When Does He Play?")))},k=(a(37),function(e){var t=new Date(e.date).toLocaleString();return r.a.createElement("div",null,e.value?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Next game:"),r.a.createElement("h4",null,e.homeTeam," vs. ",e.awayTeam),r.a.createElement("h4",null,"Date: ",t)):"")}),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",homeTeam:"",awayTeam:"",date:""},a.handleChange=function(e){a.setState({value:e.target.value}),setTimeout(a.handleNextMatch,1)},a.handleNextMatch=function(){var e="https://api.football-data.org/v2/teams/".concat(a.state.value,"/matches?status=SCHEDULED");fetch(e,{headers:{"X-Auth-Token":"8cf26ca4deb64429900d6be7f0576025"}}).then(function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119: B\u0142\u0105d nr "+e.status)}).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.matches[0],n=t.homeTeam,r=t.awayTeam,o=t.utcDate;a.setState({homeTeam:n.name,awayTeam:r.name,date:o})}).catch(function(e){a.setState({error:e}),console.log("Error number: "+e)})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.homeTeam,a=e.awayTeam,n=e.date;return r.a.createElement("form",null,r.a.createElement("select",{onChange:this.handleChange,value:this.state.value},r.a.createElement("option",{value:""},"Choose the player"),r.a.createElement("option",{value:"5"},"Robert Lewandowski"),r.a.createElement("option",{value:"340"},"Jan Bednarek"),r.a.createElement("option",{value:"98"},"Krzysztof Pi\u0105tek"),r.a.createElement("option",{value:"113"},"Arkadiusz Milik"),r.a.createElement("option",{value:"584"},"Karol Linetty"),r.a.createElement("option",{value:"4"},"\u0141ukasz Piszczek"),r.a.createElement("option",{value:"341"},"Mateusz Klich"),r.a.createElement("option",{value:"322"},"Kamil Grosicki")),r.a.createElement(k,{value:this.state.value,homeTeam:t,awayTeam:a,date:n}))}}]),t}(n.Component),T=function(){return r.a.createElement(E.a,{basename:"/football-app"},r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(v.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{path:"/when",component:y}),r.a.createElement(p.a,{component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.dfed2a51.chunk.js.map