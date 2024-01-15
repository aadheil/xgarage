import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";


// register API
export const registerAPI = async(user)=>{
   return await commonAPI("POST",`${BASEURL}/register`,user,"")
}

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/login`,user,"")
 }

 export const addBikeAPI = async(bike,header)=>{
   return await commonAPI("POST",`${BASEURL}/addbike`,bike,header)
}

export const getbikeAPI = async()=>{
   return await commonAPI("GET",`${BASEURL}/allbikes`,"","")
}

export const getusers = async()=>{
   return await commonAPI("GET",`${BASEURL}/allusers`,"","")
}



export const deleteuser=async(userid)=>{
   return await commonAPI("DELETE",`${BASEURL}/deleteuser`,{userid},"")
}

export const getbikesforadmin = async()=>{
   return await commonAPI("GET",`${BASEURL}/admin/getbikes`,"","")
}

export const deletebike=async(bikeid)=>{
   return await commonAPI("DELETE",`${BASEURL}/deletebike`,{bikeid},"")
}

export const edituser = async(userid,reqBody)=>{
   return await commonAPI("PUT",`${BASEURL}/edituser${userid}`,reqBody,"")
}