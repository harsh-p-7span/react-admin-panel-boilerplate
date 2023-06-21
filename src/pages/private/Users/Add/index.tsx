import { Fragment } from 'react';
import PageHeader from '../../../../components/PageHeader';
import routes from '../../../../router/routes';
import InputForm from './InputForm';

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

            <div className="app__body">
                <InputForm />
            </div>
        </Fragment>
    );
};

export default AddUser;
