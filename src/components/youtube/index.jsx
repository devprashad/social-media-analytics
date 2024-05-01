import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import axios from 'axios';

const Youtube = () => {
  const [currentUser] = useAuth();
  const [recentVideos, setRecentVideos] = useState([]);
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Use a more secure environment variable name

  useEffect(() => {
    const fetchRecentVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=10&order=date&type=video&key=${YOUTUBE_API_KEY}`
        );
        setRecentVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching recent videos:', error);
      }
    };

    fetchRecentVideos();
  }, [YOUTUBE_API_KEY]); // Re-fetch on API key change (for development)

  return (
    <div className='text-2xl font-bold pt-14'>
      Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.

      {recentVideos.length > 0 && (
        <ul>
            <li>123</li>
        </ul>
      )}
      {recentVideos.length === 0 && <p>No recent videos found.</p>}
    </div>
  );
};

export default Youtube;