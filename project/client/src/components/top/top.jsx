import React, { Component } from "react";
import api from "../../services/api";
import "./top.css";

class top extends Component {
  componentDidMount() {
    this.loadUrls();
  }
  selectionSort=(arr)=>{
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(arr[j]<arr[minIdx]){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }
       
    
  loadUrls = async () => {
    const response = await api.get("/urls");
    var top = [];
    
    for(let url of response.data.docs) {
        top.push(url.hits);
    }
    top = this.selectionSort(top);
    var urls = [];
    for(let j = top.length - 1; j > top.length - 6; j--) {
        for(let url of response.data.docs) {
            if (url.hits === top[j] && !urls.includes(url)) {
                urls.push(url);
                break;
            }
        }
    }
    this.setState({
        urls: response.data.docs,
        topFive: urls,
     });
     top = [];
  };
  
  state = {
      urls: [],
      topFive: [],
  };
  render() {
    return (
      <div className="maintop">
        <h1 className="top">TOP 5</h1>
        <div className="container" id="table"> 
        <table>
        {this.state.topFive.map(url => (
            <tr>
                <td id="short"  key={url._id}> <a key={url.id} href={url.shortUrl}>{url.shortUrl}</a> </td>
                <td id="hits"  key={url.id}> {url.hits} </td>
            </tr>
        ))}
        </table>
        </div>
      </div>
    );
  }
}

export default top;
