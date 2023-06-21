import { Fragment } from 'react';
import Chart from './Chart';
import Statistics from './Statistics';
import PageHeader from '../../../components/PageHeader';

const Dashboard = () => {
    return (
        <Fragment>
            <PageHeader title="Dashboard" />

            <div className="app__body">
                <div className="bg-gray-100 p-4 space-y-5">
                    <Statistics />
                    <Chart />
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
