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
    displayLegend:true,
    legendPosition:'bottom'
  }



  render(){
    return(

      <div className="chart">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <Pie
              data={this.state.chartData}
               width={100}
               height={50}
              options={{
                title:{
                  display:this.props.displayTitle,
                  //text:'Users Registered.',
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

            <div className="col-lg-6">


            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">


            </div>

            <div className="col-lg-6">

            </div>

            </div>
        </div>
      </div>

    )
  }
}

export default Chart;
