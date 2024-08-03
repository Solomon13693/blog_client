'use client'
import React, { useEffect, useState } from 'react'
import { RecordsData, RecordsOptions } from '@/utils/charts'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import BarChart from '@/components/dashboard/charts/BarChart'
import { fetchChartData } from '@/redux/features/thunks/admin/analyticsThunks'
import { useDispatch, useSelector } from 'react-redux'
import { getChartData } from '@/redux/features/slices/admin/analyticsSlice'

const Analytics = ({ token }) => {

    const [period, setPeriod] = useState('weekly')
    const [chartData, setChartData] = useState([]);
    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChartData({ token, period }));
    }, [dispatch, period, token]);

    const response = useSelector(getChartData)

    useEffect(() => {
        if (response && response.chart) {
            const labels = response.chart.map(item => item.label);
            setCategories(labels);

            const data = response.chart.map(item => parseInt(item.count));
            setChartData([{ name: "Records", data }]);
        }
    }, [response]);

    return (
        <>

            <div className="flex items-center justify-between my-6">

                <div className="flex items-center gap-x-2">
                    <p className="text-base font-medium">Records</p>
                    <ExclamationCircleIcon className='w-5 h-5' />
                </div>

                <div className="flex items-center gap-x-3">

                    <select value={period} onChange={(e) => setPeriod(e.target.value)} className="form-control bg-transparent pr-6 text-black py-1.5 cursor-pointer rounded-full">
                        <option value="weekly">Week days</option>
                        <option value="monthly">Monthly</option>
                    </select>

                </div>

            </div>

            <div className="w-full relative flex h-full min-w-0 flex-col break-words rounded-lg border-0 border-solid bg-white p-1">

                <div className="h-[400px] w-full pb-0">
                    <BarChart
                        chartData={chartData}
                        chartOptions={{ ...RecordsOptions, xaxis: { ...RecordsOptions.xaxis, categories } }}
                    />
                </div>

            </div>

        </>
    )
}

export default Analytics