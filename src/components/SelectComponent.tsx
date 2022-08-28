import { Select } from '@mantine/core'
import { memo } from 'react'

interface ISelect {
  setTimeFilter: (value: string) => void
  timeFilterValue: string
}

function SelectComponent({ setTimeFilter, timeFilterValue }: ISelect) {
  return (
    <div className='flex items-center justify-center m-4 gap-3'>
      <div className='flex gap-2 items-center justify-center'>
        <h1 className='text-4xl text-center md:text-xl'>Time frame: </h1>
        <Select
          value={timeFilterValue}
          placeholder='Pick one'
          onChange={setTimeFilter}
          data={[
            { value: 'Hourly', label: 'Hourly' },
            { value: 'Daily', label: 'Daily' },
            { value: 'Weekly', label: 'Weekly' },
            { value: 'Monthly', label: 'Monthly' },
          ]}
        />
      </div>
      <div className='flex gap-2 items-center justify-center'>
        <h1 className='text-4xl md:text-xl'>Value: </h1>
        <Select
          placeholder='Pick one'
          value={'GWei'}
          data={[{ value: 'GWei', label: 'GWei' }]}
        />
      </div>
    </div>
  )
}
export default memo(SelectComponent)
