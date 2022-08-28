import GasChart from '../components/ChartComponent'
import SelectComponent from '../components/SelectComponent'
import { useCallback, useState } from 'react'
import { chartFilterData } from '../data/gasPriceFiltered'

export default function Chart() {
  const [timeFilter, setTimeFilter] = useState<string>('Daily')

  const filterCheck = useCallback(() => {
    return chartFilterData.findIndex((i: any) => {
      return i.name === timeFilter
    })
  }, [timeFilter])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <SelectComponent
        setTimeFilter={setTimeFilter}
        timeFilterValue={timeFilter}
      />
      <GasChart chartData={chartFilterData[filterCheck()].data} />
    </div>
  )
}
