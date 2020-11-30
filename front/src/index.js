import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import { Line, Pie } from 'react-chartjs-2';

class App extends Component {
  
  constructor() {
    super();
      this.state = {
        name: 'React',
        type: "central",
        a : [
          { "_id": "5fb6307bbc6f7c4b7841c988", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmUpucwrgRwEcE1ze5xXAHB2pcQwwJpMfemxNejtptkJ8U?filename=QmUpucwrgRwEcE1ze5xXAHB2pcQwwJpMfemxNejtptkJ8U", "uploadTime": 35291, "frequency": 1, "downloadTime": 233, "size": 17372160, "__v": 0 }, 
          { "_id": "5fb630acbc6f7c4b7841c989", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmcT6HQ1SfbGhMarM2hZwNqfdyVEDoZ5sJ68rqsxeTuKmJ?filename=QmcT6HQ1SfbGhMarM2hZwNqfdyVEDoZ5sJ68rqsxeTuKmJ", "uploadTime": 48228, "frequency": 2, "downloadTime": 179, "size": 17372160, "__v": 0 }, 
          { "_id": "5fb6365dbc6f7c4b7841c98f", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmXJu87iBrU2H8kSF9zJmmcNLgARgL1wKbZL3vPqEQcrkS?filename=QmXJu87iBrU2H8kSF9zJmmcNLgARgL1wKbZL3vPqEQcrkS", "uploadTime": 35987, "frequency": 1, "downloadTime": 130, "size": 18958336, "__v": 0 }, 
          { "_id": "5fb63681bc6f7c4b7841c990", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmRfundiNhc8Crr3phAMfMMSDFWXFThf6GgmHCD7VzsoCe?filename=QmRfundiNhc8Crr3phAMfMMSDFWXFThf6GgmHCD7VzsoCe", "uploadTime": 35516, "frequency": 2, "downloadTime": 126, "size": 18958336, "__v": 0 },
          { "_id": "5fb636a4bc6f7c4b7841c991", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/Qmf1Qc2VSXzMZddZnibyCFNRakwdKRqiUyeArRoMUtDwQM?filename=Qmf1Qc2VSXzMZddZnibyCFNRakwdKRqiUyeArRoMUtDwQM", "uploadTime": 35305, "frequency": 3, "downloadTime": 121, "size": 18958336, "__v": 0 }, 
          { "_id": "5fb636c9bc6f7c4b7841c992", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmWawuWskf4m65FSK9qUizWBneXV6vtxC8QqSLew2Uo88V?filename=QmWawuWskf4m65FSK9qUizWBneXV6vtxC8QqSLew2Uo88V", "uploadTime": 35773, "frequency": 4, "downloadTime": 153, "size": 18958336, "__v": 0 }, 
          { "_id": "5fb636eebc6f7c4b7841c993", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmQRexhebPwiebhbMExzNGwF9hW1scSXJ2eHghJYSnMQsB?filename=QmQRexhebPwiebhbMExzNGwF9hW1scSXJ2eHghJYSnMQsB", "uploadTime": 36921, "frequency": 5, "downloadTime": 127, "size": 18958336, "__v": 0 }, 
          { "_id": "5fb64dbdbc6f7c4b7841c999", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmbxkfHAVAqwcffDUxrz4eP3v5r5oQCDHfVUXLszX3jMUA?filename=QmbxkfHAVAqwcffDUxrz4eP3v5r5oQCDHfVUXLszX3jMUA", "uploadTime": 41111, "frequency": 1, "downloadTime": 146, "size": 14806016, "__v": 0 }, 
          { "_id": "5fb64de1bc6f7c4b7841c99a", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/Qmcuyn7G3Sgr9WKFNWNpn3uTqqzBvpoTtmhz6HabiEWUfp?filename=Qmcuyn7G3Sgr9WKFNWNpn3uTqqzBvpoTtmhz6HabiEWUfp", "uploadTime": 35261, "frequency": 2, "downloadTime": 190, "size": 14806016, "__v": 0 }, 
          { "_id": "5fb64e38bc6f7c4b7841c99d", "type": "distributed", "downloadUrl": "https://ipfs.io/ipfs/QmeNjqEsnuaVhgwNzguWpc8qr3P9GHhsfbWewKvg9dRETS?filename=QmeNjqEsnuaVhgwNzguWpc8qr3P9GHhsfbWewKvg9dRETS", "uploadTime": 35285, "frequency": 1, "downloadTime": 189, "size": 8449024, "__v": 0 }
        ],
      lineData1: {
        labels: [],
        datasets: []
      },
      
      lineChartOptions:{
        maintainAspectRatio: true,
        legend: {
          position: 'bottom',
          fillStyle: Color,
          color: 'rgba(0,0,0,0)',
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    var uploadTime = this.state.a.map(e => {
      return e.uploadTime;
    });
    var dataset = [];
    var Datas = {};
    var downTime = this.state.a.map(e => {
      return e.downloadTime;
    });
    dataset.push({
      label: "uploadTime",
      backgroundColor: '#08AEEA',
      borderColor: '#08AEEA',
      data: uploadTime
    })
    dataset.push({
      label: "downloadTime",
      backgroundColor: '#2AF598',
      borderColor: '#2AF598',
      data: downTime,
    })
    Datas['uploadTime'] = {
      label: "uploadTime",
      backgroundColor: '#08AEEA',
      borderColor: '#08AEEA',
      data: uploadTime
    };
    Datas['DownTime'] = {
      label: "downloadTime",
      backgroundColor: '#2AF598',
      borderColor: '#2AF598',
      data: downTime,
    }

    // var dtFreq = this.state.a.map(e => {

    // })

    var size = this.state.a.map(e => e.size);
    var freq = this.state.a.map(e => e.frequency);
    this.state.size = this.state.a.map(e => e.size);
    this.state.freq = this.state.a.map(e => e.frequency);
    this.state.Datas = Datas;
    this.state.CentralDatas = Datas;
  }

  handleChange(event) {
    this.setState({type: event.target.value});
  }

  componentDidMount() {
    fetch("http://localhost:8051/get/" + this.state.type)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.data.length);
          this.setState({
            size: result.data.map(e => e.size),
            Datas: {
              uploadTime: {
                label: "uploadTime",
                backgroundColor: '#08AEEA',
                borderColor: '#08AEEA',
                data: result.data.map(e => {
                  return e.uploadTime;
                })
              },
              DownTime: {
                label: "downloadTime",
                backgroundColor: '#2AF598',
                borderColor: '#2AF598',
                data: result.data.map(e => {
                  return e.downloadTime;
                }),
              },
            },
            a: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    fetch("http://localhost:8051/getFreq/" + this.state.type)
      .then(r => r.json())
      .then((res) => {
        console.log(res);
        this.setState({
          Datas: {
            FreqUploadData: {
              label: "AverageUploadSpeed",
              backgroundColor: "#2AF598",
              borderColor: "#2AF598",
              data: res.map(e => e.avgUploadSpeed)
            },
            FreqDownData: {
              label: "AverageDownloadSpeed",
              backgroundColor: "#2AF598",
              borderColor: "#2AF598",
              data: res.map(e => e.avgDownSpeed)
            },
            ...this.state.Datas,
          },
          freq: res.map(e => e["_id"])
        })
      })
  }

  render() {
    return (
      <div>
        <h2>Line Charts For {this.state.type}</h2>
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="distributed">Distributed</option>
            <option value="central">Central</option>
          </select>
        <p>
        <Line data={{
          labels: this.state.size,
          datasets: [this.state.Datas['DownTime']]
        }} options={this.state.lineChartOptions} redraw/>
        <Line data={{
          labels: this.state.size,
          datasets: [this.state.Datas['uploadTime']]
        }} options={this.state.lineChartOptions} redraw/>
        {(this.state.Datas['FreqUploadData'])? <Line data={{
          labels: this.state.freq,
          datasets: [this.state.Datas['FreqUploadData']]
        }} options={this.state.lineChartOptions} redraw/>: ""}
        {(this.state.Datas['FreqUploadData'])? <Line data={{
          labels: this.state.freq,
          datasets: [this.state.Datas['FreqDownData']]
        }} options={this.state.lineChartOptions} redraw/>: ""}
        
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
