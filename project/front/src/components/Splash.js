import React from 'react';
import bg from '../assets/background-home.jpg';
import '../App.css';

const divStyle = {
    'background': 'url('+bg+') center',
    'backgroundSize': 'cover',
    'padding': '30vh 0'
}

class Splash extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            url_link: "", 
            fadeClass: 'row fade-component', 
            shortLink: undefined,
        } 
    }

    componentDidMount() {
        this.setState({
            fadeClass: 'row fade-component show', 
        });
    }

    copyToClipboard(e) {
        e.preventDefault();
        document.getElementById('shortLink').select();
        document.execCommand('copy');
        console.log('copied!')
    };
    
    handleSubmit(event){
        // Avoid default
        event.preventDefault();
        // Fix URL link
        this.setState({
            url_link: this.state.url_link
            .trim()
            .replace(/(^\w+:|^)\/\//, ''),
            fadeClass: 'row fade-component'
        },()=>{
            // Send data to rest service
            fetch('http://localhost:8080/', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "url": this.state.url_link
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.error) {
                    this.setState({ 
                        error: data.error,
                        shortLink: undefined,
                        fadeClass: 'row fade-component show'
                    });
                }
                else {
                    this.setState({ 
                        shortLink: data.shortUrl,
                        url_link: '',
                        error: undefined,
                        fadeClass: 'row fade-component show'
                    });
                }
            })
        });
    };

    shortLink() {
        const hasShortLink = (this.state.shortLink);
        if (hasShortLink) {
            return (
                <div className={this.state.fadeClass}>
                    <div    className="input-field"
                            style={{position: 'relative'}}>
                        <input  id="shortLink"
                                name="shortLink"
                                type="text"
                                value={this.state.shortLink}
                                disabled
                                className="validate col s12 m9" />
                        <label htmlFor="shortLink">
                            URL encurtada! Copie e compartilhe.
                        </label>
                        <span id="closeShortUrl" onClick={()=>this.setState({shortLink: undefined})}>
                            <i className="material-icons">clear</i>
                        </span>
                    </div>
                    <div className="col s12 m3">
                        <a  className="waves-effect waves-orange btn-large orange accent-4" 
                            onClick={this.copyToClipboard}
                            style={{marginLeft: '5px'}}>
                            Copiar
                        </a>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={this.state.fadeClass}>
                    <div className="input-field">
                        <input  id="url_link"
                                name="url_link"
                                type="text"
                                value={this.state.url_link}
                                autoFocus
                                ref={input => input && input.focus()}
                                onChange={(ev)=>this.setState({url_link:ev.target.value})}
                                className="validate col s12 m9" />
                        <label htmlFor="url_link">
                            Cole seu link aqui
                        </label>
                    </div>
                    <div className="col s12 m3">
                        <a  className="waves-effect waves-orange btn-large orange accent-4" 
                            href="http://www.google.com"
                            onClick={this.handleSubmit}
                            style={{marginLeft: '5px'}}>
                            Encurtar
                        </a>
                    </div>
                    <div className="col s12">
                        {this.errorRes()}
                    </div>
                </div>
            )
        }
    }

    errorRes() {
        const hasError = (this.state.error);
        if (hasError) {
            return (
                <div className="errorMessage">
                    {this.state.error}
                </div>
            )
        }
    }

    render() {
        return (
            <div    className="row" 
                    style={divStyle}>
                <div className="container center-align">
                    <div className="row">
                        <div className="col s12 m2 l2"></div>
                        <div className="col s12 m8 l8 white-text">
                            <h2 style={{fontWeight: 'bold'}}>
                                Encurte seus links.
                            </h2>
                            <p style={{marginBottom: '50px'}}>
                                Links são longos. Encurte os links que você deseja compartilhar, 
                                e acompanhe enquanto viajam através da internet.
                            </p>
                            {this.shortLink()}
                        </div>
                        <div className="col s12 m2 l2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;