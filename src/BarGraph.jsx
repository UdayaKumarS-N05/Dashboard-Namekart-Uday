import Chart from "chart.js/auto";

var ctx1 = document.getElementById("myChart");

function BarGraph({ compare }) {
  console.log("Bar Graph invoked");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: compare.map((data) => data.name),
      datasets: [
        {
          label: "Popularity",
          data: compare.map((data) => data.popularity),
          borderWidth: 1,
        },
      ],
    },

    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

export default BarGraph;
