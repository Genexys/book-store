const initialState = {
    books: [],
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA':

            return {
                ...state,
                books: [...state.books, ...action.payload],
                loading: false
            }

        default: return state
    }
}