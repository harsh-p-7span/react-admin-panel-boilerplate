import ApexChart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import Dropdown from '../../../components/form/Dropdown';

const Chart = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>(monthOptions[0].value);
    const [selectedYear, setSelectedYear] = useState(yearOptions[0].value);

    const handleChangeMonth = (value: string) => {
        setSelectedMonth(value);
    };

    const handleChangeYear = (value: string) => {
        setSelectedYear(value);
    };

    const chartDetails: {
        options: ApexCharts.ApexOptions;
        series: ApexAxisChartSeries;
    } = {
        series: [
            {
                name: 'IRS',
                data: []
            },
            {
                name: 'Fogging',
                data: []
            },
            {
                name: 'RWA',
                data: []
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
                selection: {
                    enabled: false
                }
            },
            colors: ['#F20612', '#006A80', '#169042'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '80%'
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: []
            },
            yaxis: {
                title: {
                    text: 'Number Of Task'
                },
                labels: {
                    formatter: function (val) {
                        return val.toFixed(0);
                    }
                }
            },
            fill: {
                opacity: 1
            }
        }
    };

    useEffect(() => {
        const irs = [];
        const fogging = [];
        const rwa = [];
        const dates = [];

        for (let i = 0; i < 10; i++) {
            irs.push(+(Math.random() * (30 - 1 + 1) + 1).toFixed(0));
            fogging.push(+(Math.random() * (30 - 1 + 1) + 1).toFixed(0));
            rwa.push(+(Math.random() * (30 - 1 + 1) + 1).toFixed(0));
            dates.push(new Date(`${i + 1}/12/2023`).toLocaleDateString('en-US'));
        }

        chartDetails.series[0].data = irs;
        chartDetails.series[1].data = fogging;
        chartDetails.series[2].data = rwa;

        if (chartDetails.options.xaxis) chartDetails.options.xaxis.categories = dates;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-white rounded shadow">
            <div className="px-1 py-2 items-center flex justify-between border-b">
                <h3 className="font-semibold px-3">IRS - Fogging - RWA</h3>

                <div className="flex px-3 space-x-1">
                    <div className="w-48">
                        <Dropdown
                            options={monthOptions}
                            selected={selectedMonth}
                            handleChangeSelected={handleChangeMonth}
                        />
                    </div>

                    <div className="w-48">
                        <Dropdown
                            options={yearOptions}
                            selected={selectedYear}
                            handleChangeSelected={handleChangeYear}
                        />
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="w-full" id="chart">
                    <ApexChart
                        options={chartDetails.options}
                        series={chartDetails.series}
                        type="bar"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chart;

const monthOptions = [
    {
        label: 'January',
        value: '1'
    },
    {
        label: 'February',
        value: '2'
    },
    {
        label: 'March',
        value: '3'
    },
    {
        label: 'April',
        value: '4'
    },
    {
        label: 'May',
        value: '5'
    },
    {
        label: 'June',
        value: '6'
    },
    {
        label: 'July',
        value: '7'
    },
    {
        label: 'August',
        value: '8'
    },
    {
        label: 'September',
        value: '9'
    },
    {
        label: 'October',
        value: '10'
    },
    {
        label: 'November',
        value: '11'
    },
    {
        label: 'December',
        value: '12'
    }
];

const yearOptions = [
    {
        label: '2023',
        value: '2023'
    },
    {
        label: '2024',
        value: '2024'
    },
    {
        label: '2025',
        value: '2025'
    },
    {
        label: '2026',
        value: '2026'
    },
    {
        label: '2027',
        value: '2027'
    },
    {
        label: '2028',
        value: '2028'
    },
    {
        label: '2029',
        value: '2029'
    },
    {
        label: '2030',
        value: '2030'
    }
];
