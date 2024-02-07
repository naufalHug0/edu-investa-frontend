import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import {getMonthFromTimestamp, getMonthFromNumber as month} from '../../../../utils'
import {getLineChartMaxValue} from '../../utils';

const options = {
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
    },
    colors: ['#5DB075'],
    chart: {
        fontFamily: 'Space Mono, monospace',
        height: 335,
        type: 'area',
        dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },
        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
            chart: {
                height: 300,
            },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: 'straight',
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        xaxis: {
            lines: {
            show: true,
            },
        },
        yaxis: {
            lines: {
            show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: '#fff',
        strokeColors: ['#557C55', '#80CAEE'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: 'category',
        categories: [
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
            fontSize: '0px',
            },
        },
        min: 0,
        max: 100,
    },
}

const LineChart = ({
    title,
    data
}) => {
    const [state, _] = useState({
        series: [
        {
            name: data.name,
            data: data.asset_changes.map(asset => parseFloat(asset.current_price)),
        },
        ],
    })

    const months = data.asset_changes.map(asset => month(getMonthFromTimestamp(asset?.created_at))?.substring(0,3))
    
    const currentPersentage = data.asset_changes[data.asset_changes.length - 1]?.persentage

    return (
        <div>
        <p className="text-2xl font-secondary font-bold text-green-contrast mb-4">{title}</p>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <p className={`text-3xl font-bold py-5 font-secondary ${parseInt(currentPersentage) >= 0 ? 'text-green-contrast':'text-red-default'}`}>
            {parseInt(currentPersentage) >= 0 ? '+':''}{currentPersentage}%
            </p>

            <div>
                <div id="chartOne" className="-ml-5">
                <ReactApexChart
                    options={{
                        ...options,
                        xaxis: {
                            ...options.xaxis,
                            categories: months || [
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec'
                            ],
                        },
                        yaxis: {
                            ...options.yaxis,
                            max: getLineChartMaxValue(data.asset_changes) || 100
                        }
                    }}
                    series={state.series}
                    type="area"
                    height={350}
                />
                </div>
            </div>
        </div>
        </div>
    )
}

export default LineChart
