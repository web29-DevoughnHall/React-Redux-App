const initialState = {
    stuff: {},
    isLoading: false,
    error: ''
}

export const shibeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
        case 'FETCH_DOG_START':
            return {
                ...state,
                isLoading: true
            };
            case 'FETCH_DOG_SUCCESS':
                return {
                    ...state,
                    isLoading:false,
                    stuff: action.payload,
                    error:''
                }
            return state;
    }
}