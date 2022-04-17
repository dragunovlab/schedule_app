import {setItems} from "./slice"
 


export const loadItemsActions = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const items = await response.json()
    dispatch(setItems(items))
}

 
