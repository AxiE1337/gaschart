import chartData from './gas_price.json'

const daily = chartData.ethereum.transactions.filter((i: any) => {
  return i.time.includes('00:00') && i
})

export const chartFilterData = [
  { name: 'Hourly', data: chartData.ethereum.transactions },
  {
    name: 'Daily',
    data: daily,
  },
  {
    name: 'Weekly',
    data: daily.filter((i: any, index: number) => {
      const eachSeventh = index % 7
      return eachSeventh === 0 && i
    }),
  },
  {
    name: 'Monthly',
    data: chartData.ethereum.transactions.filter((i: any) => {
      return i.time.includes('01 00:00') && i
    }),
  },
]
