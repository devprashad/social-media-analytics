import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function PopularProducts() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/recent-videos');
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Recent Videos</strong>
            <div className="mt-4 flex flex-col gap-3">
                {videos.map((video, index) => (
                    <Link
                        key={index}
                        to={`/video/${video.videoId}`}
                        className="flex items-start hover:no-underline"
                    >
                        <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
                            <img
                                className="w-full h-full object-cover rounded-sm"
                                src={video.thumbnail}
                                alt={video.title}
                            />
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="text-sm text-gray-800">{video.title}</p>
                            <span
                                className={classNames(
                                    'text-xs font-medium',
                                    'text-green-500'
                                )}
                            >
                                {'In Stock'}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularProducts;
