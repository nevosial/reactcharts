import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {

//adding structure
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }


  getChartData(){
    //Ajax call here and fill the data.
    this.setState({
      chartData:{
        labels:['Register','Login', 'Logout', 'Payments'],
        datasets:[
          {
            label:'View per page',
            data:[
              90,
              45,
              30,
              26,
            ],
            backgroundColor:[
              'rgba(255, 99, 86, 0.6)',
              'rgba(25, 192, 102, 0.6)',
              'rgba(75, 159, 132, 0.6)',
              'rgba(125, 119, 225, 0.6)'
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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
