import types from "../types";

const initialState = {
    Articles: null,
    FullArticle: null,
};

export const HomeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_ARTICLES:
            const data = action.payload;
            return { ...state, Articles: data };
        case types.GET_ARTICLE_BY_ID:
                const article = action.payload;
                return { ...state, FullArticle: article };
        default:
            return state;
    }

};