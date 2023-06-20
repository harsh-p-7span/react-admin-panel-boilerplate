import Chart from './Chart';
import Statistics from './Statistics';

const Dashboard = () => {
    return (
        <div className="bg-gray-100 p-4 space-y-5">
            <Statistics />
            <Chart />

            <div className="h-screen"></div>
        </div>
    );
};

export default Dashboard;
