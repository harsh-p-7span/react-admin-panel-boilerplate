import { Fragment } from 'react';
import PageHeader from '../../../../components/PageHeader';
import routes from '../../../../router/routes';

const AddUser = () => {
    return (
        <Fragment>
            <PageHeader
                title="Add User"
                prevRoutes={[
                    {
                        title: 'Users',
                        url: routes.private['user/list'].url
                    }
                ]}
            />

            <div className="app__body">Add User</div>
        </Fragment>
    );
};

export default AddUser;
