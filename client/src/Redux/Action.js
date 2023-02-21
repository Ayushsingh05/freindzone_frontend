



export const getUserDetails= (data)=>{
return {
    type: "USER",
    payload:data
}

}


export const getAllUsers= (data)=>{
    return {
        type: "ALLUSER",
        payload:data
    }
    
    }

    export const manageLoginPage= (data)=>{
        return {
            type: "LOGINPAGE",
            payload:data
        }
        
        }
        export const userLoggedIn= (data)=>{
            return {
                type: "LOGGEDIN",
                payload:data
            }
            
            }

    export const postImages = (data)=>{
        return {
            type:"POSTIMAGE",
            payload:data
        }
    }