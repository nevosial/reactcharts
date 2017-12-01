import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
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
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom'
  }



  render(){
    return(
      <div className="chart">
      <Bar
        data={this.state.chartData}
        // width={100}
        // height={50}
        options={{
          title:{
            display:this.props.displayTitle,
            text:'Page View for the site',
            fontSize:25
          },
          legend:{
            display:this.props.displayLegend,
            position:'this.props.legendPosition',
            labels:{
              fontColor:'#000'
            }
          }
        }}
      />
      </div>
    )
  }
}

export default Chart;
