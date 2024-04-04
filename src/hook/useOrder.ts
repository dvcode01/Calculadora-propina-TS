import { useState } from "react"
import { MenuItem, OrderItem } from "../types/types";

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([]);
    

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

    return {
        addItem
    }
}