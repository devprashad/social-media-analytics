import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';

export default function RecentOrders() {
    const [recentVideos, setRecentVideos] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/popular');
            setRecentVideos(response.data);
        } catch (error) {
            console.error('Error fetching recent videos:', error);
        }
    };

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Popular Videos</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>ID</th>
                            <th>Views</th>
                            <th>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentVideos.map((video, index) => (
                            <tr key={index}>
                                <td>
                                    <Link to={`/video/${video.videoId}`}>{video.title}</Link>
                                </td>
                                <td>
                                    <Link to={`https://www.youtube.com/${video.videoId}`}>{video.videoId}</Link>
                                </td>
                                <td>{video.views}</td>
                                <td>{video.likes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
