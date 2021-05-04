import { createSlice } from '@reduxjs/toolkit';

const netflix = createSlice({
  name: 'netflix',
  initialState: {
    items: [{ title: null, id: null, image: null, genre: null }, {}]
  },
  reducers: {
    setItemList: (store, action) => {
      const newArr = action.payload.map((item) => {
        return { ...item, title: item.title, id: item.id };
      });
      store.items = newArr;
    },
    setGenre: (store, action) => {
      const newArr = store.items.map((item) => {
        return { ...item, genre: action.payload };
      });
      store.items = newArr;
    }
  }
});

export const generateGenre = () => {
  return (dispatch, getState) => {
    fetch(`https://netflix-data.herokuapp.com/types/movie?genre=${getState().netflix.items[1].genre}`)
      .then((res) => res.json())
      .then((data) => dispatch(netflix.actions.setItemList(data)));
  };
};

export default netflix;
