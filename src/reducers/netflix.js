import { createSlice } from '@reduxjs/toolkit';

const netflix = createSlice({
  name: 'netflix',
  initialState: {
    items: [
      { title: null, id: null, image: null, genre: null, country: null }
    ]
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
    },
    setCountry: (store, action) => {
      const newArr = store.items.map((item) => {
        return { ...item, country: action.payload };
      });
      store.items = newArr;
    }
  }
});

export const generateList = (type) => {
  return (dispatch, getState) => {
    let url = '';
    if (type === 'movies') {
      url = 'https://netflix-data.herokuapp.com/movies';
    } else {
      url = 'https://netflix-data.herokuapp.com/tvshows';
    }
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => dispatch(netflix.actions.setItemList(data)))
      .catch((error) => alert(`Ops, error: ${error}`));
  };
};

export const generateCategories = (type, name) => {
  let url = '';
  return (dispatch, getState) => {
    if (name === 'genre') {
      url = `https://netflix-data.herokuapp.com/${type}?genre=${
        getState().netflix.items[0].genre
      }`;
    } else {
      url = `https://netflix-data.herokuapp.com/${type}?country=${
        getState().netflix.items[0].country
      }`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => dispatch(netflix.actions.setItemList(data)))
      .catch((error) => alert(`Ops, error: ${error}`));
  };
};

export default netflix;
