import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecentOrders2() {
    const [popularPosts, setPopularPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reddit/rising');
            setPopularPosts(response.data);
        } catch (error) {
            console.error('Error fetching popular posts:', error);
        }
    };

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Rising Posts</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upvotes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularPosts.map((post, index) => (
                            <tr key={index}>
                                <td>
                                    <a href={`https://www.reddit.com/${post.id}`} target="_blank" rel="noopener noreferrer">{post.title}</a>
                                </td>
                                <td>{post.ups}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
