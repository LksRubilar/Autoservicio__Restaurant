import { useMemo, Dispatch } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number
  dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {

  const subtotalAmount =  useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])



  return (
    <>
    <div className="space-y-3">
      <h2 className="font-black text-2xl">Total y propina:</h2>
      <p>Subtotal a pagar: {''} 
        <span className="font-bold">{ formatCurrency(subtotalAmount) }</span>
      </p>

      <p>Propina: {''} 
        <span className="font-bold">{ formatCurrency(tipAmount) }</span>
      </p>

      <p>Total a Pagar: {''} 
        <span className="font-bold">{ formatCurrency(totalAmount) }</span>
      </p>



    </div>

    <button
    className="uppercase font-bold w-full bg-black text-white py-5 mt-10 disabled:opacity-10"
    disabled={totalAmount === 0}
    onClick={() => dispatch({type: 'place-order'})}
    >
      Guardar Orden
    </button>
    </>
  )
}
