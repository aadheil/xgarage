import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";


// register API
export const registerAPI = async(user)=>{
   return await commonAPI("POST",`${BASEURL}/register`,user,"")
}

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/login`,user,"")
 }