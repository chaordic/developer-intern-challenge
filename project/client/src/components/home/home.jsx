import React, { Component } from "react";
import api from "../../services/api";
import "./home.css";
import shortid from "shortid";
import validUrl from "valid-url";
import clipboartCopy from "clipboard-copy";
class home extends Component {
  state = {
    urls: [],
    top5: [],
    link: ""
  };
  componentDidMount() {
    this.loadUrls();
  }

  loadUrls = async () => {
    const response = await api.get("/urls");
    this.setState({
      urls: response.data.docs
    });
  };
  handleClick = e => {
    if (this.refs.botao.value === "COPIAR") {
      clipboartCopy(this.refs.link.value);
      this.refs.botao.value = 'ENCURTAR';
      this.refs.link.value = '';
    } else {
      let link = this.refs.link.value;
      for (let url of this.state.urls) {
        if (url.url === link) {
          this.refs.link.value = url.shortUrl;
          return;
        }
      }

      if (validUrl.isUri(link)) {
        var short = "http://chr.dc/" + shortid.generate();
        api.post("/urls", {
          id: shortid.generate(),
          hits: 0,
          url: link,
          shortUrl: short
        });
        this.refs.link.value = short;
        this.refs.botao.value = 'COPIAR';
      } else {
        alert("not valid");
      }
      
    }
  };

  render() {
    return (
      <div className="home">
        <div className="home-text">
          <h1 className="encurte">Encurte seus links.</h1>
          <p>
            Links são longos. Encurte os links que você deseja compartilhar,{" "}
            <br />e acompanhe enquanto viajam através da internet
          </p>
          <div className="input">
            <input
              type="text"
              name="url"
              ref="link"
              id="url"
              placeholder="Cole seu link aqui"
            />
            <input
              onClick={this.handleClick}
              ref="botao"
              type="button"
              id="encurtar"
              value="ENCURTAR"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default home;
