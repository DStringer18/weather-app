(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/snow.beb6b32c.jpg"},function(e,t,a){e.exports=a.p+"static/media/storm.6868ff7a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/rain.02e3c5e1.jpg"},function(e,t,a){e.exports=a.p+"static/media/clear.04969f7b.jpg"},function(e,t,a){e.exports=a.p+"static/media/cloudy.c842ece1.jpg"},function(e,t,a){e.exports=a.p+"static/media/background.9836b0bb.jpg"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(6),s=a.n(o),i=(a(8),a(1)),u=a(2),l=a(5),h=a(4),m=a(3),p=(a(20),a(21),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).search=n.search.bind(Object(l.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{placeholder:"Enter A City",onChange:this.handleTermChange}),r.a.createElement("button",{className:"SearchButton",onClick:this.search},"SEARCH"))}}]),a}(r.a.Component)),d=(a(22),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"WeatherList"},this.props.weather)}}]),a}(r.a.Component)),b=(a(23),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"day-container"},r.a.createElement("h1",null,"Weather is:"),r.a.createElement(d,{weather:this.props.searchResults}))}}]),a}(r.a.Component)),g=a(24);var f={searchWeather:function(e){return function(e){n=5===e.length&&Number.parseInt(e)+""===e?"zip":"q"}(e),g("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?".concat(n,"=").concat(e,"&APPID=").concat("ec9d7d715df637631606fb17c5a2b580","&units=").concat("metric")).then((function(e){return e.json()})).then((function(e){return console.log("jsonResponse is:",e),e.list[0].weather[0].main})).catch((function(e){console.log(e)}))}},v=a(9),j=a.n(v),k=a(10),E=a.n(k),y=a(11),O=a.n(y),w=a(12),S=a.n(w),C=a(13),I=a.n(C),B=a(14),N=a.n(B),R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={searchResults:[],bgImage:"url(".concat(N.a,")")},n.search=n.search.bind(Object(l.a)(n)),n.changeBackground=n.changeBackground.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"changeBackground",value:function(e){switch(console.log("change background to:",e),e){case"Clear":this.setState({bgImage:"url(".concat(S.a,")")});break;case"Clouds":this.setState({bgImage:"url(".concat(I.a,")")});break;case"Rain":case"Drizzle":case"Mist":this.setState({bgImage:"url(".concat(O.a,")")});break;case"Thunderstorm":this.setState({bgImage:"url(".concat(E.a,")")});break;case"Snow":this.setState({bgImage:"url(".concat(j.a,")")})}}},{key:"search",value:function(e){var t=this;f.searchWeather(e).then((function(e){t.setState({searchResults:e}),console.log("search:",e),t.changeBackground(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("body",{style:{backgroundImage:this.state.bgImage},className:"Body"},r.a.createElement("h1",null,"Weather App"),r.a.createElement("div",{className:"App"},r.a.createElement(p,{onSearch:this.search}),r.a.createElement("div",{className:"day-container"},r.a.createElement(b,{searchResults:this.state.searchResults})))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"));var x=R;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.20bb1294.chunk.js.map