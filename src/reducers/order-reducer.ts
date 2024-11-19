
import { MenuItem, OrderItem } from "../types";


//todos los datos son extraidos del HOOK
export type OrderActions = 
{ type: 'add-item', payload: { item: MenuItem}} |
{ type: 'remove-item', payload: { id: MenuItem['id']}} |
{ type: 'place-order' }  |
{ type: 'add-tip', payload: { value: number} }

//son obtenidos de las const definidas en la funcion principal del hook y su igual
export type OrderState = {
  order: OrderItem[],
  tip: number
}

//se asignan valores como estado inicial
export const initialState : OrderState = {
  order: [],
  tip: 0
}

//se crea el reducer con un estado y una accion.
//para ello tomamos los valores descritos arriba en el Reduce.
export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions

) => {
      
  //se estructuran las acciones definidas arriba, en Actions:

      if(action.type === 'add-item') {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id )
        let order : OrderItem[] = []
        if(itemExist) {
          order = state.order.map( orderItem => orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
    
        } else {
          const newItem : OrderItem = {...action.payload.item, quantity: 1}
          order = [...state.order, newItem]
        }
    
        return {
          ...state,
            order

        }
      }

      if(action.type === 'remove-item') {
        const order = state.order.filter( item => item.id !== action.payload.id)
        return {
          ...state,
          order
        }
      }

      if(action.type === 'place-order') {
        return {
          ...state,
          order: [],
          tip: 0
        }
      }

      if(action.type === 'add-tip') {
        const tip = action.payload.value
        return {
          ...state,
          tip
        }
      }

  return state 

}