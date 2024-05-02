import React, { useState, useEffect } from 'react';
import { IoPieChart, IoPeople } from 'react-icons/io5';
import axios from 'axios';

export default function DashboardStatsGrid() {
  const [redditStats, setRedditStats] = useState({ subscribers: 0, activeUsers: 0 });

  useEffect(() => {
    fetchRedditStats();
  }, []);

  const fetchRedditStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reddit/stats');
      if (response.status === 200) {
        const { subscribers, activeUsers } = response.data;
		console.log(response.data);
        setRedditStats({ subscribers, activeUsers });
      } else {
        console.error('Failed to fetch Reddit stats:', response.status);
      }
    } catch (error) {
      console.error('Error fetching Reddit stats:', error.message);
    }
  };

  return (
    <div className="flex gap-4">
      <BoxWrapper icon={<IoPeople className="text-2xl text-white" />} title="Reddit Subscribers">
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Reddit Subscribers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{redditStats.subscribers}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper icon={<IoPieChart className="text-2xl text-white" />} title="Active Users">
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Active Users</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{redditStats.activeUsers}</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ icon, title, children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">{icon}</div>
      {children}
    </div>
  );
}
