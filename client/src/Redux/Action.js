



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
