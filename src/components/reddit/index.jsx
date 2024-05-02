import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import RecentOrders from './RecentOrders'
import RecentOrders3 from './RecentOrders3'
import RecentOrders4 from './RecentOrders4'
import RecentOrders2 from './RecentOrders2'
import BuyerProfilePieChart from './BuyerProfilePieChart'
import PopularProducts from './PopularProducts'

const RedditComponent = () => {
    const [subredditTitle, setSubredditTitle] = useState("");

    useEffect(() => {
        fetchSubredditTitle();
    }, []);

    const fetchSubredditTitle = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reddit/subreddit');
            if (response.status === 200) {
                setSubredditTitle(response.data.currentSubredditId);
            } else {
                console.error('Failed to fetch subreddit title:', response.status);
            }
        } catch (error) {
            console.error('Error fetching subreddit title:', error.message);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mt-16 text-gray-800  text-center">ANALYTICS OF SUBREDDIT r/{subredditTitle} </h2>
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerProfilePieChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <RecentOrders2 />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <RecentOrders3 />
                <RecentOrders4 />
            </div>

        </div>
    );
};

export default RedditComponent;
