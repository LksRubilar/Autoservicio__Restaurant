import type { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-0',
    value: 0,
    label: '.0 %'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-30',
    value: .30,
    label: '30%'
  },
]

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
  tip: number
  
}

export default function TipPercentageForm({dispatch, tip }: TipPercentageFormProps ) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form action="">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor="">{tipOption.label}</label>
            <div>
            <input 
            id={tipOption.id} 
            type="radio"
            name="tip"
            value={tipOption.value}
            onChange={ e => dispatch({type: 'add-tip', payload: {value: +e.target.value}})} 
            checked={tipOption.value === tip}
            />
            </div>

          </div>
        ))}
      </form>
    </div>
  )
}
