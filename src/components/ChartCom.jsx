
import Chart from "react-apexcharts";

const ChartCom = () =>{


  var options = {
    series: [
      {
        name: 'Instagram',
        data: [180, 240, 200, 170, 240,180,220]
      },
      {
        name: 'Facebook',
        data: [200, 190, 270, 360, 220,290,200]
      },
    ],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
   

  };
 

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={options.series}
              type="area"
              height="400"
              
            />
          </div>
        </div>
      </div>
    )
  }

export default ChartCom;