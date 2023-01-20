const barChart = document.getElementById("bar-chart").getContext("2d");

let chart = new Chart(barChart,{
    type: 'bar',
    data: {
        labels: ["January","February","March","April","May","June","July"],
        datasets: [{
            label: "Gain",
            backgroundColor: "#FECE76",
            data: [12,59,75,56,58,12,-59]
        },
        {
            label: "Lost",
            backgroundColor: "#D03C55",
            data: [-12,-30,-25,-36,-5,-18,-49]
        }]
    },
    options: {
        layout: {
            padding: {
                left:25,
                right:25               
            }
        },
    //     title: {
    //      display: true,
    //      text: 'Instagram Subscribers',
    //    },
       responsive: true,
    }
})
