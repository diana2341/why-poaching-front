import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer
} from 'recharts';




  export default class graph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7j5bbbum/';
    state={
      tiger:[],
      elephants:[],
      rhinos:[],
      gorillas:[]
    }
    componentDidMount(){
      fetch(`http://localhost:4000/statistics`)
      .then(resp=>resp.json())
      .then(data=>{
       data.filter(stat=>  stat.animal_id===1).map(l=>{ {this.setState({tiger:l})}})

      })
    
    }
    
    render() {
      {console.log(this.state.tiger)}
      const data = [
        {
          name: this.state.tiger.year1, uv: this.state.tiger.amount1, pv: 2400, amt: 2400,
        },
        {
          name: this.state.tiger.year2, uv: 90000, pv: 1398, amt: 2210,
        },
        {
          name: this.state.tiger.year3, uv: 40000, pv: 9800, amt: 2290,
        },
        {
          name: this.state.tiger.year4, uv: 32000, pv: 3908, amt: 2000,
        },
        {
          name: this.state.tiger.year5, uv: 5000, pv: 4800, amt: 2181,
        },
        {
          name: this.state.tiger.year6, uv: 4000, pv: 3800, amt: 2500,
        },
        {
          name: this.state.tiger.year7, uv: 3800, pv: 4300, amt: 2100,
        },
      ];
      
    const getIntroOfPage = (label) => {
      if (label === 'Page A') {
        return "Page A is about men's clothing";
      } if (label === 'Page B') {
        return "Page B is about women's dress";
      } if (label === 'Page C') {
        return "Page C is about women's bag";
      } if (label === 'Page D') {
        return 'Page D is about household goods';
      } if (label === 'Page E') {
        return 'Page E is about food';
      } if (label === 'Page F') {
        return 'Page F is about baby food';
      }
    };
    
    const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </div>
        );
      }
    
      return null;
    };
      return (
        <div className="chart"style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />}  />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );

}
}
