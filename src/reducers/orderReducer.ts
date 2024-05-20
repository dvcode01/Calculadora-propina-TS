import { MenuItem, OrderItem } from "../types/types";


export type OrderActions = 
    {type: 'add-item', payload: {item: MenuItem}} |
    {type: 'remove-item', payload: {id: MenuItem['id']}} | 
    {type: 'place-items'} |
    {type: 'add-tip', payload: {value: number}};

    
export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (state : OrderState = initialState, action : OrderActions) => {
    if(action.type === 'add-item'){
        // Verifica si existen duplicados de ordenes
        const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id);

        let updateOrder: OrderItem[] = [];

        if(itemExists){
            // Actualiza la cantidad del elemento repetido
            updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem
            );
        }else{
            // Lo agrega a la orden 
            const newItem : OrderItem = {...action.payload.item, quantity: 1};
            updateOrder = [...state.order, newItem];
        }


        return {
            ...state,
            order: updateOrder
        }
    }

    if(action.type === 'remove-item'){
        const orderRemove = state.order.filter(item => item.id !== action.payload.id);

        return {
            ...state,
            order: orderRemove
        }
    }


    if(action.type === 'place-items'){


        return {
            ...state
        }
    }


    if(action.type === 'add-tip'){


        return {
            ...state
        }
    }


    return state;
}
    

























