import React, { Component } from 'react';
import './hits.css';
import api from "../../services/api";
class hits extends Component {
    componentDidMount() {
        this.loadHits();
      }
    state = {
        hits: 0,
    }
    loadHits = async () => {
        const response = await api.get("/urls");
        var urls = response.data.docs;
        var total = 0;
        for(let url of urls) {
            total += url.hits;
        }
        this.setState({
            hits: total,
        });
      };
    render() { 
        return (
            <div className="main" >
                <h1>HITS</h1>
                <div className="box">
                <h1 className="hits">{this.state.hits}</h1>
                </div>
                <h3>Cliques em links</h3>
            </div>
         );
    }
}
 
export default hits;