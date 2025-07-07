// redux/slices/photoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    photos: [],
};

const photoSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhoto: (state, action) => {
            state.photos.push(action.payload);
        },
        deletePhoto: (state, action) => {
            state.photos = state.photos.filter(photo => photo.id !== action.payload);
        },
        clearPhotos: (state) => {
            state.photos = [];
        },
    },
});

export const { addPhoto, deletePhoto, clearPhotos } = photoSlice.actions;

export default photoSlice.reducer;
