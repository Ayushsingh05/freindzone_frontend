


const details={
    userDetails:{},
    alluser:[]
}

export const reducer= (state=details,{type,payload})=>{
    switch (type) {
        case "USER":       
        return {
            ...state,
            userDetails:{...payload},
        }  
        case "ALLUSER":
            return{
                ...state,
                alluser:[...payload]
            }     
    
        default:
          return{ ...state}
    }
}