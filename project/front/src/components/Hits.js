import React from 'react';
import '../App.css';

const divStyle = {
    padding: '15vh 0',
    backgroundColor: '#EEE'
}

class Hits extends React.Component {

    render() {
        return (
            <div
                className="row whiteTriangle"
                style={divStyle}>
                <div className="container center-align">
                    <div className="row">
                        <h2 className="red-chaordic">
                            Hits
                        </h2>
                        <h3 className="red-chaordic white"
                            style={{
                                display: 'inline-block',
                                padding: '5px 15px',
                                marginBottom: 0,
                                borderRadius: '5px',
                                border: '1px solid #C9C9C9'
                                }}>
                            35.713.571
                        </h3>
                        <p style={{color:'#777', fontSize: '15px'}}>Cliques em links</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hits;