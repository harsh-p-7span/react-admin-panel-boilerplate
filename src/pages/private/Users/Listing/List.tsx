const List = () => {
    return (
        <div>
            <table className="v-list-table table text-left w-full h-full table-admin p-2 lg:p-4 font-body bg-white text-gray-900">
                <thead>
                    <tr className="border-b border-b-[#D1D5DB]">
                        {tableTitles.map((title) => {
                            return (
                                <th
                                    key={title.id}
                                    rowSpan={1}
                                    colSpan={1}
                                    className="text-xs lg:text-sm leading-4 lg:leading-5 font-medium text-[#6B7280] py-3 px-4"
                                >
                                    <div>
                                        <span>{title.title}</span>
                                    </div>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tbody>
                    {data.map((data) => {
                        return (
                            <tr key={data.id}>
                                <TableData>
                                    {data.profile_picture && data.profile_picture.url ? (
                                        <div>
                                            <img
                                                src={data.profile_picture.url}
                                                alt={data.first_name}
                                                className="h-14 w-14 bg-cover object-cover rounded"
                                            />
                                        </div>
                                    ) : (
                                        <div className="bg-red-500 text-white h-14 w-14 flex items-center justify-center shrink-0 rounded">
                                            <h3>{data.first_name.slice(0, 1)}</h3>
                                        </div>
                                    )}
                                </TableData>

                                <TableData>{data.first_name || '-'}</TableData>

                                <TableData>{data.middle_name || '-'}</TableData>

                                <TableData>{data.last_name || '-'}</TableData>

                                <TableData>{data.msi_user || '-'}</TableData>

                                <TableData>{data.mobile || '-'}</TableData>

                                <TableData>{data.supervisor_type?.toUpperCase() || '-'}</TableData>

                                <TableData>
                                    <div className="flex space-x-2">
                                        <ActionButton
                                            bgColor="bg-blue-100"
                                            textColor="text-blue-500"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
                                                ></path>
                                            </svg>
                                        </ActionButton>

                                        <ActionButton
                                            bgColor="bg-yellow-100"
                                            textColor="text-yellow-500"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                                                ></path>
                                            </svg>
                                        </ActionButton>

                                        <ActionButton
                                            bgColor="bg-green-100"
                                            textColor="text-green-500"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"
                                                ></path>
                                            </svg>
                                        </ActionButton>
                                    </div>
                                </TableData>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const ActionButton = ({
    children,
    bgColor,
    textColor
}: {
    children: JSX.Element | JSX.Element[] | string;
    bgColor: string;
    textColor: string;
}) => {
    return (
        <button
            className={`flex justify-center items-center w-11 rounded-md h-11 select-none ${bgColor} ${textColor}`}
        >
            <span className="h-5 w-6 flex justify-center items-center">{children}</span>
        </button>
    );
};

const TableData = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
    return (
        <td className="text-xs lg:text-sm leading-4 lg:leading-5 font-normal py-3 px-4 lg:px-3">
            {children}
        </td>
    );
};

export default List;

const tableTitles = [
    {
        id: 0,
        title: 'Profile Picture'
    },
    {
        id: 1,
        title: 'First Name'
    },
    {
        id: 2,
        title: 'Middle Name'
    },
    {
        id: 3,
        title: 'Last Name'
    },
    {
        id: 4,
        title: 'MSI'
    },
    {
        id: 5,
        title: 'Mobile'
    },
    {
        id: 6,
        title: 'User Type'
    },
    {
        id: 7,
        title: 'Action'
    }
];

const data = [
    {
        id: 71,
        first_name: 'TEMP1',
        middle_name: null,
        last_name: 'Supervisor',
        role_id: 2,
        mcc: '+91',
        mobile: '6565656565',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'TEMP',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: 'irs',
        profile_picture: null,
        msi_user: null
    },
    {
        id: 70,
        first_name: 'Test 4 sup',
        middle_name: null,
        last_name: 'Test 4',
        role_id: 2,
        mcc: '+91',
        mobile: '6376437638',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'Test 4',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: 'irs',
        profile_picture: null,
        msi_user: null
    },
    {
        id: 68,
        first_name: 'Test2 Sup',
        middle_name: null,
        last_name: 'Test2',
        role_id: 2,
        mcc: '+91',
        mobile: '1234567654',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'Test2',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: 'irs',
        profile_picture: {
            id: 169,
            disk: 's3',
            filename: '3097ba99-64ff-4452-97af-ee4882a3d393',
            mime_type: 'image/jpeg',
            url: 'https://ntep-amc-dev.s3.ap-south-1.amazonaws.com/profile_picture/3097ba99-64ff-4452-97af-ee4882a3d393.jpg'
        },
        msi_user: null
    },
    {
        id: 67,
        first_name: 'Test Supervisor',
        middle_name: null,
        last_name: 'test',
        role_id: 2,
        mcc: '+91',
        mobile: '1234234122',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'test',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: 'irs',
        profile_picture: {
            id: 168,
            disk: 's3',
            filename: '91d9c82c-5336-4845-9e20-b4c8e29fa9b3',
            mime_type: 'image/jpeg',
            url: 'https://ntep-amc-dev.s3.ap-south-1.amazonaws.com/profile_picture/91d9c82c-5336-4845-9e20-b4c8e29fa9b3.jpg'
        },
        msi_user: null
    },
    {
        id: 65,
        first_name: 'Supervisor 02',
        middle_name: null,
        last_name: 'test',
        role_id: 2,
        mcc: '+91',
        mobile: '6060606060',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'ok',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: null,
        msi_user: null
    },
    {
        id: 63,
        first_name: 'supervisor01',
        middle_name: null,
        last_name: 'TEST',
        role_id: 2,
        mcc: '+91',
        mobile: '3030303030',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'ok',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: {
            id: 167,
            disk: 's3',
            filename: '5adad350-0d27-4e1b-980b-e5ab40322307',
            mime_type: 'image/jpeg',
            url: 'https://ntep-amc-dev.s3.ap-south-1.amazonaws.com/profile_picture/5adad350-0d27-4e1b-980b-e5ab40322307.jpeg'
        },
        msi_user: null
    },
    {
        id: 61,
        first_name: 'AMC',
        middle_name: null,
        last_name: 'Team Leader',
        role_id: 2,
        mcc: '+91',
        mobile: '8200240937',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'AMC',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: null,
        msi_user: null
    },
    {
        id: 58,
        first_name: 'TL',
        middle_name: null,
        last_name: 'User 4',
        role_id: 2,
        mcc: '+91',
        mobile: '9988776600',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'a',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: null,
        msi_user: null
    },
    {
        id: 55,
        first_name: 'TL',
        middle_name: null,
        last_name: 'User 3',
        role_id: 2,
        mcc: '+91',
        mobile: '8000080000',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'a',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: null,
        msi_user: null
    },
    {
        id: 50,
        first_name: 'TL',
        middle_name: null,
        last_name: 'User 2',
        role_id: 2,
        mcc: '+91',
        mobile: '8008008000',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'z',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: null,
        msi_user: null
    },
    {
        id: 49,
        first_name: 'TL',
        middle_name: null,
        last_name: 'User 1',
        role_id: 2,
        mcc: '+91',
        mobile: '8080808080',
        state_id: 1,
        city_id: 1,
        pincode: null,
        address: 'a',
        status: 'active',
        is_task_creation_allowed: false,
        is_force_logout: false,
        supervisor_type: null,
        profile_picture: null,
        msi_user: null
    }
];
