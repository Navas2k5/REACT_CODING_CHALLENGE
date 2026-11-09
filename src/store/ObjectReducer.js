const iniialState = {
    list: []
}

const ObjectReducer = (state = iniialState, action) => {
    switch (action.type) {
        case "GET_ALL_OBJECTS":
            return {
                ...state,
                list: [
                    ...action.payload,
                    ...state.list.filter(
                        obj => !action.payload.find(
                            fetched => fetched.id === obj.id
                        )
                    )
                ]
            }

        case "ADD_OBJECT":
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case "DELETE_OBJECT":
            return {
                ...state,
                list: state.list.filter(o => o.id !== action.payload)
            }

        default:
            return state
    }
}

export default ObjectReducer