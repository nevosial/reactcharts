import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {

//adding structure
  constructor(){
    super();
    this.state = {
      chartData:{},
      chartData2:{}
    }
  }

  componentWillMount(){
    this.getChartData();
    this.getChartData2();
  }


  getChartData(){
    //Ajax call here and fill the data.
    this.setState({
      chartData:{
        labels:['Citizens','Police', 'Emergency'],
        datasets:[
          {
            label:'View per page',
            data:[
              90,
              45,
              30,
            ],
            backgroundColor:[
              'rgba(255, 99, 86, 0.6)',
              'rgba(25, 192, 102, 0.6)',
              'rgba(75, 159, 132, 0.6)'
            ],
            borderWidth:0.5,
            borderColor:'#777',
            hoverBorderWidth:1,
            hoverBorderColor:'#000'
          }
        ]
      }
    });
  }

  getChartData2(){
    //Ajax call here and fill the data.
    this.setState({
      chartData2:{
        labels:['Citizens','Police', 'Emergency'],
        datasets:[
          {
            label:'View per page',
            data:[
              80,
              35,
              10,
            ],
            backgroundColor:[
              'rgba(255, 99, 86, 0.6)',
              'rgba(25, 192, 102, 0.6)',
              'rgba(75, 159, 132, 0.6)'
            ],
            borderWidth:0.5,
            borderColor:'#777',
            hoverBorderWidth:1,
            hoverBorderColor:'#000'
          }
        ]
      }
    });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Insta City Statistics</h1>
        </header>
        // <h1>Users Registered</h1>
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
        // <h1>Post</h1>
        <Chart chartData={this.state.chartData2} legendPosition="bottom"/>

      </div>
    );
  }
}

export default App;
