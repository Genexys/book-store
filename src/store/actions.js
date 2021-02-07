export const fetchBooks = (data) => {
    return {
        action: 'FETCH_BOOKS',
        payload: data
    }
}