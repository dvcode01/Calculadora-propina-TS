import { useState } from "react"
import { MenuItem, OrderItem } from "../types/types";

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([]);

    const [tip, setTip] = useState(0);
    

    const addItem = (item: MenuItem) => {
        // Verifica si existen duplicados de ordenes
        const itemExists = order.find(orderItem => orderItem.id === item.id);

        if(itemExists){
            // Actualiza la cantidad del elemento repetido
            const updateOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem
            );

            setOrder(updateOrder);
        }else{
            // Lo agrega a la orden 
            const newItem : OrderItem = {...item, quantity: 1};
            setOrder([...order, newItem])
        }
    }

    // Elimina los items
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id));
    }

    // Reinicia  y Guardando la orden

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}