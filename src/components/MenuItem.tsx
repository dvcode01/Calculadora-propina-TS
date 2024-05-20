import { OrderActions } from "../reducers/orderReducer";
import { MenuItem } from "../types/types"
import { Dispatch } from 'react';

type MenuItemProp = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

function MenuItem({item, dispatch} : MenuItemProp) {
  return (
    <>
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>

        </button>
    </>
  )
}

export default MenuItem