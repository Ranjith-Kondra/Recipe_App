let initialState = {
    data : [
        {
            id : "101" ,
            name : "Iphone"
        }
    ]
}

export const cardReducer = (state = initialState , action) => {
    switch(action.type) {
        case 'setData' :
            return {
                ...state , data : action.payload
            }

        default :
          return state 
    }
}