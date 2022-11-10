import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchdashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      console.log(data);
      setDashboardData(data);
      setLoading(false);
    }
    fetchdashboardData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Posts - {dashboardData.post}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </>
  );
};

export default Dashboard;
