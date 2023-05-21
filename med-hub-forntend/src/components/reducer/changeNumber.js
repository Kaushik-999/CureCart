const initialState = 1;

const changeNumber = (state = initialState,action) => {
    switch(action.type)
    {
        case "INCREMENT": 
            return state+1;
        case "DECREMENT": 
            if(state<=0)
                return 0;
            else return state-1;

        default  : return state;
    }
}

export default changeNumber;