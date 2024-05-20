import { useMemo, Dispatch } from "react"
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/orderReducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

function OrderTotals({order, tip, dispatch} : OrderTotalsProps) {
    // Calcula el subtotal a pagar 
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);

    // Calcula la propina a pagar
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);

    // Calcula el total a pagar
    const totalMount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

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
                <span className="font-bold">{formatCurrency(totalMount)}</span>
            </p>
        </div>


        <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 hover:cursor-pointer hover:bg-teal-800 transition-all duration-300 disabled:opacity-10"
            disabled={totalMount === 0}
            onClick={() => dispatch({type: 'place-items'})}
        >
            Guardar
        </button>
    </>
  )
}

export default OrderTotals