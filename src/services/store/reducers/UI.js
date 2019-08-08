const initialState = {
    loading: false,
    error: false,
    message: {
        heading: '',
        body: '',
        code: null
    }
}

const UIReducer = (state = initialState, action ) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default UIReducer;