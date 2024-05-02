import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';

const ChannelIdInput = () => {
    const [channelId, setChannelId] = useState('');
    const [subredditId, setSubredditId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChannelIdChange = (e) => {
        setChannelId(e.target.value);
    };

    const handleSubredditIdChange = (e) => {
        setSubredditId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to update the channel ID
            await axios.post('http://localhost:5000/api/update-channel-id', { channelId });
            // If successful, redirect the user to the home page
            window.location.href = '/home';
        } catch (error) {
            // If there's an error, display the error message
            setErrorMessage('Failed to update channel ID. Please try again.');
        }
    };

    const handleSubredditSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to update the subreddit ID
            await axios.post('http://localhost:5000/api/update-subreddit-id', { subredditId });
            // If successful, redirect the user to the home page
            window.location.href = '/home';
        } catch (error) {
            // If there's an error, display the error message
            setErrorMessage('Failed to update subreddit ID. Please try again.');
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-600 font-bold">Enter YouTube Channel ID</label>
                        <input
                            type="text"
                            required
                            value={channelId}
                            onChange={handleChannelIdChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
                    >
                        Update Youtube ID
                    </button>
                </form>

                <form onSubmit={handleSubredditSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-600 font-bold">Enter Subreddit ID</label>
                        <input
                            type="text"
                            required
                            value={subredditId}
                            onChange={handleSubredditIdChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
                    >
                        Update Subreddit
                    </button>
                </form>

                {errorMessage && (
                    <span className="text-red-600 font-bold">{errorMessage}</span>
                )}
            </div>
        </div>
    );
};

export default ChannelIdInput;
