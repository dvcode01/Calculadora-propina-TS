import { useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}

function OrderTotals({order, tip} : OrderTotalsProps) {
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);


    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);


  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
            </p>

            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total: {''}
                <span className="font-bold">$0</span>
            </p>
        </div>
        <button></button>
    </>
  )
}

export default OrderTotals