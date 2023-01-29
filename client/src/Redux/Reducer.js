


const details={
    userDetails:{},
    alluser:[],
    loginpage:false,
    loggedin:false
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
       case "LOGINPAGE":
       return {
         ...state,
         loginpage:payload
       }
       case "LOGGEDIN":{
        return {
            ...state,
            loggedin:payload
        }
       }
        default:
          return{ ...state}
    }
}