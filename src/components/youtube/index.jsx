import React, { useState, useEffect } from 'react';
import axios from 'axios';


import DashboardStatsGrid from '../copied/DashboardStatsGrid'
import TransactionChart from '../copied/TransactionChart'
import RecentOrders from '../copied/RecentOrders'
import BuyerProfilePieChart from '../copied/BuyerProfilePieChart'
import PopularProducts from '../copied/PopularProducts'


const YoutubeComponent = () => {
   

    return (
        <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mt-16 text-gray-800  text-center">YOUTUBE ANALYTICS</h2>

        {/* <DashboardStatsGrid /> */}
        <div className="flex flex-row gap-4 w-full">
            <TransactionChart />
            <BuyerProfilePieChart />
        </div>
        <div className="flex flex-row gap-4 w-full">
            <RecentOrders />
            <PopularProducts />
        </div>
    </div>
    );
};

export default YoutubeComponent;

{/* <div className='text-2xl font-bold pt-14'>
{videos.map((video, index) => (
    <div key={index}>
        <h2>{video.title}</h2>
        <img src={video.thumbnail} alt={video.title} />
        <p>Video ID: {video.videoId}</p>
    </div>
))}
</div> */}