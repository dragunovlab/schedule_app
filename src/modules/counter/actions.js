import { setItems } from "./slice";

export const loadItemsActions = () => async (dispatch) => {
  const response = await fetch("http://localhost:3000/subjects");
  const items = await response.json();
  dispatch(setItems(items));
};
