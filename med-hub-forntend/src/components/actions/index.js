export const increment = (data) => {
    return(
        {
            type : "INCREMENT",
            
        }
    )
}

export const decrement = (data) => {
    return(
        {
            type : "DECREMENT",
            
        }
    )
}

export const addToCart = (data) =>
{
    return(
        {
            type : 'ADDTOCART',
            payload : data
        }
    )
}

export const deleteItem = (data) =>
{
    return(
        {
            type : 'DELETEITEM',
            payload : data
        }
    )
}



