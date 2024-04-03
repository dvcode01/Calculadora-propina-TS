import { MenuItem } from "../types/types"

type MenuItemProp = {
    item: MenuItem
}

function MenuItem({item} : MenuItemProp) {
  return (
    <>
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>

        </button>
    </>
  )
}

export default MenuItem