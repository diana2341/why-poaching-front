import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';





  export default class graph extends PureComponent {

   
    
    render() {
      const{year1,year2,year3,year4,year5,year6,year7,amount1,amount2,amount3,amount4,amount5,amount6,amount7}=this.props.state.filter
      const data = [
        {
          name:year1, pop: amount1, pv: 2400, amt: 2400,
        },
        {
          name: year2, pop: amount2, pv: 1398, amt: 2210,
        },
        {
          name:year3, pop:amount3, pv: 9800, amt: 2290,
        },
        {
          name:year4, pop: amount4, pv: 3908, amt: 2000,
        },
        {
          name:year5, pop: amount5, pv: 4800, amt: 2181,
        },
        {
          name:year6, pop:amount6, pv: 3800, amt: 2500,
        },
        {
          name:year7, pop:amount7, pv: 4300, amt: 2100,
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
        <Area type="monotone" dataKey="pop" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
          </ResponsiveContainer>
        </div>
        </>
      );

}
}
