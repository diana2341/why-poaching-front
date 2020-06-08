import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,ResponsiveContainer} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';





  export default class graph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

    state={

      tiger:[],
      elephants:[],
      rhinos:[],
      gorillas:[],
      filter:[]
    }
 
    componentDidMount(){
      fetch(`http://localhost:4000/statistics`)
      .then(resp=>resp.json())
      .then(data=>{
       data.filter(stat=>  stat.animal_id===1).map(stat=>{ {this.setState({tiger:stat})}})
       data.filter(stat=>  stat.animal_id===2).map(stat=>{ {this.setState({elephants:stat})}})
       data.filter(stat=>  stat.animal_id===3).map(stat=>{ {this.setState({gorillas:stat})}})
       data.filter(stat=>  stat.animal_id===5).map(stat=>{ {this.setState({rhinos:stat})}})

      })
      
    }
   
    
    render() {
       const statFilter=()=>{
       console.log("works",this.state.filter)
       if(this.props.routerProps.match.params.id==1){
        this.setState({filter:this.state.tiger})
        console.log("tigers")

    }
   
      if(this.props.routerProps.match.params.id==2){
         this.setState({filter:this.state.elephants})
         console.log("elephants")

     }
     if(this.props.routerProps.match.params.id==3){
       this.setState({filter:this.state.gorillas})
       console.log("gorillas")

   }
   if(this.props.routerProps.match.params.id==5){
     this.setState({filter:this.state.rhinos})
     console.log("rhinos")

 }
     } 
     const colors = scaleOrdinal(schemeCategory10).range();

     
      {console.log("filter",this.state.filter)
        // {console.log("animal",this.state.tiger)}
      }
      const data = [
        {
          name: this.state.filter.year1, uv: this.state.filter.amount1, pv: 2400, amt: 2400,
        },
        {
          name: this.state.filter.year2, uv: this.state.filter.amount2, pv: 1398, amt: 2210,
        },
        {
          name: this.state.filter.year3, uv:this.state.filter.amount3, pv: 9800, amt: 2290,
        },
        {
          name: this.state.filter.year4, uv: this.state.filter.amount4, pv: 3908, amt: 2000,
        },
        {
          name: this.state.filter.year5, uv: this.state.filter.amount5, pv: 4800, amt: 2181,
        },
        {
          name: this.state.filter.year6, uv: this.state.filter.amount6, pv: 3800, amt: 2500,
        },
        {
          name: this.state.filter.year7, uv: this.state.filter.amount7, pv: 4300, amt: 2100,
        },
      ];
      
  
    const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
    
  
      return (
        <>
        <div className="chart"style={{ width: '80%', height: 400 }}>
          <ResponsiveContainer>
          {/* <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart> */}
            <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
          </ResponsiveContainer>
        </div>
        <button onClick={statFilter}>press</button>
        </>
      );

}
}
