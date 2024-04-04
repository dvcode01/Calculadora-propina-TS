import { OrderItem } from "../types/types"

type OrderContentProps = {
    order: OrderItem[]
}

function OrderContents({order} : OrderContentProps) {
  return (
    <>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ? (
                <p className="text-center">La orden esta vacía.</p>
            ) : (
                order.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                ))
            )}
        </div>
    </>
  )
}

export default OrderContents