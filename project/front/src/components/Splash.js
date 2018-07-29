import React from 'react';
import bg from '../assets/background-home.jpg';
import '../App.css';

const divStyle = {
    'background': 'url('+bg+') center',
    'backgroundSize': 'cover',
    'padding': '30vh 0'
}

class Splash extends React.Component {

    render() {
        return (
            <div className="row" style={divStyle}>
                <div className="container center-align">
                    <div className="row">
                        <div className="col s12 m2 l2"></div>
                        <div className="col s12 m8 l8 white-text">
                            <h2 style={{fontWeight: 'bold'}}>Encurte seus links.</h2>
                            <p style={{marginBottom: '50px'}}>
                                Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto viajam através da internet.
                            </p>
                            <div className="row">
                                <div className="input-field">
                                    <input id="url_link" type="text" className="validate col s12 m9" />
                                    <label for="url_link">Cole seu link aqui</label>
                                </div>
                                <div className="col s12 m3">
                                    <a className="waves-effect waves-orange btn-large orange accent-4" href="http://www.google.com" style={{marginLeft: '5px'}}>Encurtar</a>
                                </div>
                            </div>
                            </div>
                        <div className="col s12 m2 l2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;