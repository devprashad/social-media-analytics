import { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import BuyerProfilePieChart from '../../components/copied/BuyerProfilePieChart'

const Home = () => {
  const [stats, setStats] = useState({
    videoCount: 0,
    subscriberCount: 0,
    viewCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="views" amount={stats.viewCount} />
          <Widget type="subscribers" amount={stats.subscriberCount} />
          <Widget type="videos" amount={stats.videoCount} />
          <Widget type="watchtime" amount={stats.watchTime} />
        </div>
        
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
      
    </div>
  );
};

export default Home;
