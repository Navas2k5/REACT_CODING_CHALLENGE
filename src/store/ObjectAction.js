import axios from "axios"

const API_URL = "https://api.restful-api.dev/objects"

export const getAllObjects = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL)

        dispatch({
            type: "GET_ALL_OBJECTS",
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const addObjects = (object) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, object)

        dispatch({
            type: "ADD_OBJECT",
            payload: response.data
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const deleteObjects = (id) => async (dispatch) => {
    try {
        //await axios.delete(`${API_URL}/${id}`)

        dispatch({
            type: "DELETE_OBJECT",
            payload: id
        })
    }
    catch (err) {
        console.log(err)
    }
}