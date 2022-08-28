import { memo } from 'react'
import Chart from 'react-apexcharts'

function ChartComponent({ chartData }: any) {
  return (
    <div className='w-3/4 md:w-screen mx-2'>
      <Chart
        type='area'
        series={[
          {
            name: 'Price',
            data: chartData.map((i: any) => i.gasPrice.toFixed(4)),
          },
        ]}
        options={{
          title: { text: 'title' },
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true,
            },
            toolbar: {
              autoSelected: 'zoom',
            },
          },
          dataLabels: {
            enabled: false,
          },
          markers: {
            size: 0,
          },
          yaxis: {
            title: {
              text: 'Price',
            },
          },
          xaxis: {
            type: 'datetime',
            categories: chartData.map((i: any) => '20' + i.time),
          },
        }}
      />
    </div>
  )
}

export default memo(ChartComponent)
