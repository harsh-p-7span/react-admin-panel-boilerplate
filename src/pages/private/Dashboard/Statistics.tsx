const Statistics = () => {
    return (
        <div className="w-full bg-white rounded shadow">
            <h3 className="p-3 border-b font-semibold">Statistics</h3>

            <div className="p-4 flex items-center space-x-3 h-32">
                {stats.map((stat) => {
                    return (
                        <div
                            className={`flex items-center space-x-3 p-5 rounded w-1/4 ${stat.classes.bgColor}`}
                            key={stat.id}
                        >
                            <div>{stat.icon}</div>

                            <div>
                                <h2 className={`text-2xl font-medium ${stat.classes.fontColor}`}>
                                    {stat.count}
                                </h2>

                                <p className="text-gray-500">{stat.title}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Statistics;

const stats = [
    {
        id: 0,
        count: 11,
        title: 'MSI',
        classes: {
            bgColor: 'bg-red-100',
            fontColor: 'text-red-500'
        },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="icon text-5xl text-white bg-red-500 p-2 rounded-full"
            >
                <path
                    fill="currentColor"
                    d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m7 6c-.16 0-.24.08-.24.24l-.26 1.26c-.22.18-.54.34-.78.5l-1.28-.5c-.08 0-.24 0-.32.1l-.96 1.76c-.08.08-.08.24.08.32l1.04.82v1l-1.04.82c-.08.08-.16.24-.08.32l.96 1.76c.08.1.24.1.32.1l1.28-.5c.24.16.56.32.78.5l.26 1.26c0 .16.08.24.24.24h2c.08 0 .24-.08.24-.24l.16-1.26c.32-.18.64-.34.88-.5l1.22.5c.14 0 .3 0 .3-.1l1.04-1.76c.08-.08 0-.24-.08-.32l-1.04-.82v-1l1.04-.82c.08-.08.16-.24.08-.32L21.8 13.6c0-.1-.16-.1-.3-.1l-1.22.5c-.24-.16-.56-.32-.88-.5l-.16-1.26c0-.16-.16-.24-.24-.24h-2m-7 1c-2.67 0-8 1.33-8 4v3h9.67c-.28-.59-.48-1.23-.58-1.9H3.9V17c0-.64 3.13-2.1 6.1-2.1c.43 0 .87.04 1.3.1c.2-.64.47-1.24.82-1.79c-.78-.13-1.52-.21-2.12-.21m8.04 2.5c.8 0 1.46.66 1.46 1.54c0 .8-.66 1.46-1.46 1.46c-.88 0-1.54-.66-1.54-1.46c0-.88.66-1.54 1.54-1.54Z"
                ></path>
            </svg>
        )
    },
    {
        id: 1,
        count: 27,
        title: 'Supervisors',
        classes: {
            bgColor: 'bg-blue-100',
            fontColor: 'text-blue-500'
        },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="icon text-5xl text-white bg-blue-500 p-2 rounded-full"
            >
                <path
                    fill="currentColor"
                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                ></path>
            </svg>
        )
    },
    {
        id: 2,
        count: 27,
        title: 'Supervisors',
        classes: {
            bgColor: 'bg-green-100',
            fontColor: 'text-green-500'
        },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="icon text-5xl text-white bg-green-500 p-2 rounded-full"
            >
                <path
                    fill="currentColor"
                    d="M5 3v18h6v-3.5h2V21h6V3H5m2 2h2v2H7V5m4 0h2v2h-2V5m4 0h2v2h-2V5M7 9h2v2H7V9m4 0h2v2h-2V9m4 0h2v2h-2V9m-8 4h2v2H7v-2m4 0h2v2h-2v-2m4 0h2v2h-2v-2m-8 4h2v2H7v-2m8 0h2v2h-2v-2Z"
                ></path>
            </svg>
        )
    },
    {
        id: 3,
        count: 27,
        title: 'Supervisors',
        classes: {
            bgColor: 'bg-yellow-100',
            fontColor: 'text-yellow-500'
        },
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="icon text-5xl text-white bg-yellow-500 p-2 rounded-full"
            >
                <path
                    fill="currentColor"
                    d="M12 3L2 12h3v8h14v-8h3L12 3m0 5.5c2.34 0 4.46.93 6 2.44l-1.2 1.18a6.787 6.787 0 0 0-4.8-1.95c-1.88 0-3.58.74-4.8 1.95L6 10.94a8.541 8.541 0 0 1 6-2.44m0 3.33c1.4 0 2.67.56 3.6 1.47l-1.2 1.17a3.41 3.41 0 0 0-2.4-.97c-.94 0-1.79.37-2.4.97L8.4 13.3a5.13 5.13 0 0 1 3.6-1.47m0 3.34c.94 0 1.7.74 1.7 1.66c0 .92-.76 1.67-1.7 1.67s-1.7-.75-1.7-1.67c0-.92.76-1.66 1.7-1.66Z"
                ></path>
            </svg>
        )
    }
];
