// Function to fetch dynamic data (simulated data for demonstration)
function fetchData() {
  return {
    revenueData: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue",
          borderColor: "#2196F3",
          backgroundColor: "rgba(33, 150, 243, 0.2)",
          data: [5000, 7000, 6000, 8000, 9000],
          lineTension: 0.1,
          fill: false,
        },
      ],
    },
    topSellingData: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Top Selling Product",
          borderColor: "#FF5722",
          backgroundColor: "rgba(255, 87, 34, 0.2)",
          data: [20, 15, 30, 25, 35],
          lineTension: 0.2,
          fill: false,
        },
      ],
    },
    activeUsersData: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          data: [50, 60, 55, 65, 70],
          lineTension: 0.3,
          fill: false,
        },
      ],
    },
    ordersData: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Orders",
          borderColor: "#9C27B0",
          backgroundColor: "rgba(156, 39, 176, 0.2)",
          data: [10, 8, 12, 15, 11],
          lineTension: 0.4,
          fill: false,
        },
      ],
    },
  };
}

// Function to update the charts with fetched data
function updateCharts() {
  var data = fetchData();

  // Revenue Chart
  var revenueCtx = document.getElementById("revenueChart").getContext("2d");
  var revenueChart = new Chart(revenueCtx, {
    type: "line",
    data: data.revenueData,
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Monthly Revenue",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Revenue Amount",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // Top Selling Product Chart
  var topSellingCtx = document
    .getElementById("topSellingChart")
    .getContext("2d");
  var topSellingChart = new Chart(topSellingCtx, {
    type: "line",
    data: data.topSellingData,
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Top Selling Product",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Units Sold",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // Active Users Chart
  var activeUsersCtx = document
    .getElementById("activeUsersChart")
    .getContext("2d");
  var activeUsersChart = new Chart(activeUsersCtx, {
    type: "line",
    data: data.activeUsersData,
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Active Users",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Number of Users",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // Orders Chart
  var ordersCtx = document.getElementById("ordersChart").getContext("2d");
  var ordersChart = new Chart(ordersCtx, {
    type: "line",
    data: data.ordersData,
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Orders",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Number of Orders",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

// Initial call to update charts with fetched data
updateCharts();
