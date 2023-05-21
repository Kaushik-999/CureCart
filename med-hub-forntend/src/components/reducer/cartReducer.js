const initialState = {
    list  : [],
    subtotal  : 0
}

const cartReducer = (state = initialState,action) => {
    switch(action.type) {
        case "ADDTOCART" :
          const data = action.payload;

          const ind  = state.list.findIndex(obj => obj.title === data.title);
          console.log(data.title);
          console.log(state.list);
          console.log(ind);
          
          if(ind>-1)
          {
            state.list[ind].quantity += data.quantity; 
            return(
              {...state,
                list : [...state.list]


              }
            )
          }
          
      
          else return(
            
            {...state,

              list : [
                ...state.list,
                
                data
                
              ]

            }
          )
          
          


        case "DELETEITEM" :
            
            state.list = state.list.filter((item)=>item.title !== action.payload.title);
            console.log(state.list.length);
            return (
              {...state,

                list : [
                  ...state.list
                  
                ]
  
              }
            )



        default:
          return state;
        }


        
    }

export default cartReducer;


