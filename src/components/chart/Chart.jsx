import "./chart.scss";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
  const sampleData = [
    { name: 'Jan', redditUpvoteRatio: 0.75, youtubeLikeDislikeRatio: 0.85 },
    { name: 'Feb', redditUpvoteRatio: 0.78, youtubeLikeDislikeRatio: 0.82 },
    { name: 'Mar', redditUpvoteRatio: 0.80, youtubeLikeDislikeRatio: 0.80 },
    { name: 'Apr', redditUpvoteRatio: 0.82, youtubeLikeDislikeRatio: 0.78 },
    { name: 'May', redditUpvoteRatio: 0.79, youtubeLikeDislikeRatio: 0.81 },
    { name: 'Jun', redditUpvoteRatio: 0.75, youtubeLikeDislikeRatio: 0.83 },
    { name: 'Jul', redditUpvoteRatio: 0.77, youtubeLikeDislikeRatio: 0.79 },
    { name: 'Aug', redditUpvoteRatio: 0.81, youtubeLikeDislikeRatio: 0.77 },
    { name: 'Sep', redditUpvoteRatio: 0.79, youtubeLikeDislikeRatio: 0.75 },
    { name: 'Oct', redditUpvoteRatio: 0.76, youtubeLikeDislikeRatio: 0.73 },
    { name: 'Nov', redditUpvoteRatio: 0.74, youtubeLikeDislikeRatio: 0.72 },
    { name: 'Dec', redditUpvoteRatio: 0.72, youtubeLikeDislikeRatio: 0.70 },
  ];

  return (
    <div className="chart"> 

    <LineChart
      width={1000}
      height={450}
      data={sampleData}
      margin={{ top: 30, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="redditUpvoteRatio" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="youtubeLikeDislikeRatio" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default Chart;


// const Chart = ({ aspect, title }) => {
//   return (
//     <div className="chart">
//       <div className="title">{title}</div>
//       <ResponsiveContainer width="100%" aspect={aspect}>
//         <AreaChart
//           width={730}
//           height={250}
//           data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//           <defs>
//             <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" stroke="gray" />
//           <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="Total"
//             stroke="#8884d8"
//             fillOpacity={1}
//             fill="url(#total)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;
