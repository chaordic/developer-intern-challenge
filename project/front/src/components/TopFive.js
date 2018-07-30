import React from 'react';
import '../App.css';

class TopFive extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            urls: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/')
            .then(response => response.json())
            .then(urls => {
                this.setState({ urls: urls });
            });
    }

    render() {
        return (
            <div className="row"
                 style={{padding: '10vh 0 12vh'}}>
                <div className="container center-align">
                    <div className="row">
                        <div className="col s12 m2 l2"></div>
                        <div className="col s12 m8 l8">
                            <h2 className="red-chaordic">
                                Top 5
                            </h2>
                            <table>
                                <tbody>
                                    {this.state.urls.map(function(url){
                                        return (
                                            <tr>
                                                <td>
                                                    <a  href={url.shortUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="red-chaordic">
                                                        {url.shortUrl}
                                                    </a>
                                                </td>
                                                <td className="right-align">
                                                    {url.hits}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col s12 m2 l2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopFive;