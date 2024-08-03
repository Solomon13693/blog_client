export const RecordsData = [
  {
    name: "Records",
    data: [50, 180, 70, 120, 90, 50, 200],
  },
];

export const RecordsOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "11px",
      fontFamily:  'Euclid Circular A',
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "11px",
        fontFamily:  'Euclid Circular A',
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#1D2329",
        fontSize: "11px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    tickAmount: 4,
    labels: {
      show: true,
      style: {
        colors: "#1D2329",
        fontSize: "11px",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 0,
    borderColor: '#F2F2F2',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    colors: '#002836'
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      columnWidth: "20px",
    },
  },
};