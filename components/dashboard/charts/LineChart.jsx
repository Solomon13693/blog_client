'use client'

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = (props) => {

  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="line"
      height="100%"
      series={series}
    />
  );
};

export default LineChart;
