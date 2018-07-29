import React from 'react';
import '../../App.css';
import Loop from './Loop'

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
                for (let url of urls) {
                    console.log(url); // Will display contents of the object inside the array
                }
            });
    }

    render() {
        return (
            <div className="row"
                 style={{padding: '10vh 0'}}>
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
                                        return <Loop shortUrl={url.shortUrl} hits={url.hits} />;
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