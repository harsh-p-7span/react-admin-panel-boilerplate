import { Fragment } from 'react';
import PageHeader from '../../../components/PageHeader';
import Header from './Listing/Header';
import List from './Listing/List';
import PageHeaderButtons from './PageHeaderButtons';

const Users = () => {
    return (
        <Fragment>
            <PageHeader
                title="Users"
                headerClass="justify-between"
                extraElements={<PageHeaderButtons />}
            />

            <div className="app__body">
                <Header />

                <List />
            </div>
        </Fragment>
    );
};

export default Users;
