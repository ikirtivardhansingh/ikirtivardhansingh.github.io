
const widgetStyle = `
h1, div, p {
    margin: 0px;
    padding: 0px;
    font-family: 'system-ui'
}
a{
    text-decoration: none;
    color: inherit;
}
#github-logo{
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.cover{
    height: 120px;
    width: 100%;
    background: #FF5C5C;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card {
    position: relative;
    display: inline-block;
    background: #ffffff;
    border-radius: 5px;
    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    text-align: center;
    padding: 20px 50px;
    margin: 5px;
    padding-top: 5px;
    transition: all 0.5s;
}

/* Dark Theme */
.card.dark{
    background: #1C1D21;
}
.dark .card-title{
    color: #E4E4E4 !important;
    font-weight: 500 !important;
}
.dark .card-desc{
    font-weight: 400 !important;
    color: #c6c6c6 !important;
} 
.dark .count{
    color: #c6c6c6 !important;
    font-weight: 600 !important;
} 
.dark .box-text{
    color: #797979 !important;
    font-weight: 500 !important;
}
.dark .footer-box{
    background: #1D2025 !important;
    box-shadow: 0px 0.2px 5px rgba(255, 255, 255, 0.15), 0px 4px 10px rgba(0, 0, 0, 0.25) !important;
}



.card .fa-github {
    position: absolute;
    color: #646464;
    font-size: 20px;
    top: 10px;
    right: 10px;
}
.card .card-title {
    color: #434343;
    margin-bottom: -8px;
    font-size: 25px;
    font-weight: 600;
}
.card .card-responsename {
    margin-bottom: 20px;
    color: #797979;
}
.card .card-desc {
    font-weight: 500;
    width: 250px;
    margin: auto;
    display: block;
    color: #3c3c3c;
}
.card .card-img-wrapper {
    position: relative;
    height: 160px;
    width: 160px;
    margin: 10px auto;
    margin-bottom: 20px;
}
.card .card-img-wrapper img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.card .card-footer {
    margin-top: 40px;
}
.card .card-footer .footer-box {
    position: relative;
    border-top: 2px solid #ff9b9b;
    box-shadow: 0 3px 6px -1px rgb(0 0 0 / 26%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    border-radius: 5px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.card .card-footer .footer-box .box-wrapper {
    position: relative;
}
.card .card-footer .footer-box .box-wrapper .count {
    font-family: 'consolas'
    color: #434343;
    font-size: 20px;
    font-weight: 600;
}
.card .card-footer .footer-box .box-wrapper .box-text {
    font-size: 12px;
    font-weight: 600;
    color: #00000085;
    letter-spacing: 0.5px;
}
`;function nFormatter(t) {if (!(1e3 <= t)) return t;let o = t;let r = 0;for (; 1e3 <= o;) o /= 1e3, r += 1;return o = o.toPrecision(3), o += ["", "K", "M", "B", "T"][r], o;}const template = document.createElement("template");template.innerHTML = `
    <style>
        ${widgetStyle}
    </style>

    <div class="card"></div>
`;class myCard extends HTMLElement {constructor() {super(), this._shadowRoot = this.attachShadow({ mode: "open" }), this._shadowRoot.append(template.content.cloneNode(!0));}get observedAttribute() {return ["data-theme"];}attributeChangedCallback(t, o, r) {"data-theme" === t && o !== r && "" !== r && (this[t] = r);}connectedCallback() {var t;this.fetchData(this.getAttribute("data-user")).then(t => {t = this.createCard(t);this._shadowRoot.querySelector(".card").innerHTML = t;}), this.getAttribute("data-theme") && (t = this.getAttribute("data-theme"), this.setTheme(t));}setTheme(t) {"dark" === t ? this._shadowRoot.querySelector(".card").classList.add("dark") : this._shadowRoot.querySelector(".card").classList.remove("dark");}async fetchData(t) {const o = await fetch(`https://api.github.com/repos/${t}`, { method: "GET" });return await o.json();}createCard(t) {var _t$bio;return `
        <div class="cover"></div>
        <div class="card-wrapper">
               
        <a href="https://github.com/${t.owner.login}" target="_blank" rel="noopener"><img id="github-logo" src="https://i.ibb.co/frv5pB3/github-logo.png" alt="github-logo" border="0"></a>
       
        <div class="card-header">
      
        <div class="card-img-wrapper"><img src="https://avatars.githubusercontent.com/${t.owner.login}"/></div>
        
        <h1><a class="card-title" href="${t.html_url}" target="_blank" rel="noopener">${t.name}</a></h1>
        <div class="card-responsename"><a href="${t.html_url}" target="_blank" rel="noopener">@${t.owner.login}</a></div>
        <p class="card-desc">${(_t$bio = t.bio) !== null && _t$bio !== void 0 ? _t$bio : ""}</p>
        <div class="box-wrapper">
        <br> <div class="box-text">  
            <a href="https://github.com/${t.full_name}" target="blank" rel="noopener"><div class="count">
                <img style="width:30px;" src="./star.png" alt=""></div>
            </a>Star It</div>
            </div>  
           
        <div class="card-footer">
        <div class="footer-box">
            <div class="box-wrapper">
                <div class="count">${nFormatter(t.stargazers_count)}</div>
                <div class="box-text">Star Count</div>
            </div>   
            <div class="box-wrapper">
                <div class="count">${nFormatter(t.forks_count)}</div>
                <div class="box-text">Fork Count</div>
           
        </div>
        </div>  
        
        </div>
        
        `;}}customElements.define("github-card", myCard);
        let cards = document.getElementsByClassName('gh-card');

    function injectStyle(str) {
        let node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }
    
    function injectStylesheet(url) {
      let node = document.createElement('link');
      node.setAttribute('rel', 'stylesheet');
      node.setAttribute('href', url);
      document.body.appendChild(node);
    }
    
    let style = `
    .gh h4 {
      padding: 0;
      margin: 0;
    }
    
    .gh a, .gh a:visited {
      text-decoration: none;
      color: black;
    }
    
    .gh-small {
      zoom: 0.5;
    }
    
    .gh-medium {
      zoom: 0.75;
    }
    
    .gh-large {
      zoom: 1;
    }
    .gh-card {
        font-family: 'Arial';
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        max-width: 300px;
        display: inline-block;
      margin: 8px;
      border-radius: 5px;
    }
    
    .gh-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    img.gh {
      border-radius: 5px 5px 0 0;
      width: 100%;
    clip-path: polygon(100% 0, 100% 95%, 50% 100%, 0% 95%, 0 0);
    }
    
    .container.gh {
      padding: 16px;
    }
    
    .gh p {
      line-height: 1.6;
    }
    `;
    
    injectStylesheet('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    injectStyle(style);
    
    for(let card of cards) {
      let repo = card.getAttribute('repo');
      let url = 'https://api.github.com/repos/' + repo;
      
      fetch(url, {method: 'GET'}).then(resp => {
        return resp.json();
      }).then(json => {
        
        card.innerHTML = `
          <img class="gh" src="${json.owner.organizations_url}">
          <div class="gh container">
            <h4 class="gh">
              <a class="gh" href="${json.html_url}">
                <i class="fa fa-fw fa-github" aria-hidden="true"></i>
                ${json.full_name}
              </a>
            </h4>
            <p class="gh">${json.description}</p>
            <a class="gh" href="${json.html_url}/network">
              <i class="fa fa-fw fa-code-fork" aria-hidden="true"></i> ${json.forks_count}
            <a class="gh" href="${json.html_url}/stargazers">
              <i class="fa fa-fw fa-star" aria-hidden="true"></i> ${json.stargazers_count}
            </a>
          </div>
        `;
        
      }).catch(err => {
        console.log(err);
      });
    }