import React from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2'
import '../AnimalInfo.css';

class graph extends React.Component{
    state={
        chartData:{
          labels:['Boston','worcester','springfield','lowell','cambridge','new bedford'],
          datasets:[
              {
                  label:'Population',
                  data:[
                      617594,
                      181045,
                      153060,
                      106519,
                      105162,
                      95072
                  ],
                  backgroundColor:[
                      'rgba(255,99,132,0.6)',
                      'rgba(54,162,235,0.6)',
                      'rgba(75,192,192,0.6)',
                      'rgba(153,102,255,0.6)',
                      'rgba(255,159,64,0.6)',
                      'rgba(255,99,132,0.6)',

                  ]
              }
          ]
        }
    }
render(){
    return(
        <div className="chart">
          <Bar
                    data={this.state.chartData}
                    width={70}
                    height={30}
                    options={{ maintainAspectRatio: false }}
            />
            </div>
    )
}
}
export default graph