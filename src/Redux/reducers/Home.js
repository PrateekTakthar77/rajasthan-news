import types from "../types";

const initialState = {
    Articles: null,
};

export const HomeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_ARTICLES:
            const data = action.payload;
            return { ...state, Articles: data };
        default:
            return state;
    }

};