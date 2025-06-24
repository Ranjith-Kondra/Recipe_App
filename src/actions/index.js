export const increment=()=>{
    return{
        type:"increment"
    }
}

export const decrement=()=>{
    return{
        type:"decrement"
    }
}


export const addCard = (data)=>{
    return {
        type : 'setData' , 
        payload : data
    }
}


export const setdata = (data)=>{
    return {
        type : 'setdata' , 
        payload : data
    }
}