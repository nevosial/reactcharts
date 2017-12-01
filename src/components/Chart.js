import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
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
