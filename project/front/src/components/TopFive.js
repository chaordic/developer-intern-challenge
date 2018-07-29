import React from 'react';
import '../App.css';

function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
}

class TopFive extends React.Component {

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
                                    {mapObject(this.state.urls, function (key, value) {
                                        return (
                                            <tr>
                                                <td>
                                                    <a  href="#"
                                                        className="red-chaordic">
                                                        http://chr.dc/xyzxyz
                                                    </a>
                                                </td>
                                                <td className="right-align">
                                                    Eclair
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td>
                                            <a  href="#"
                                                className="red-chaordic">
                                                http://chr.dc/xyzxyz
                                            </a>
                                        </td>
                                        <td className="right-align">
                                            Eclair
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a  href="#"
                                                className="red-chaordic">
                                                http://chr.dc/xyzxyz
                                            </a>
                                        </td>
                                        <td className="right-align">
                                            Jellybean
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a  href="#"
                                                className="red-chaordic">
                                                http://chr.dc/xyzxyz
                                            </a>
                                        </td>
                                        <td     className="right-align">
                                            Lollipop
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a  href="#"
                                                className="red-chaordic">
                                                http://chr.dc/xyzxyz
                                            </a>
                                        </td>
                                        <td className="right-align">
                                            Lollipop
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a  href="#"
                                                className="red-chaordic">
                                                http://chr.dc/xyzxyz
                                            </a>
                                        </td>
                                        <td className="right-align">
                                            Lollipop
                                        </td>
                                    </tr>
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