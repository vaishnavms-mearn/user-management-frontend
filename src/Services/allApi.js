import { base_Url } from "./base_url";
import { commonAPI } from "./commonApi.js";
//registerAPI 
export const registerAPI=async(user)=>{
    return await commonAPI("post",`${base_Url}/register`,user,"")
}
//loginAPI -post-body
export const loginAPI=async(user)=>{
    return await commonAPI("post",`${base_Url}/login`,user,"")
}
//getUserAPI -post-body
export const getUserAPI=async(id,reqHeader)=>{
    return await commonAPI("get",`${base_Url}/get-user/${id}`,"",reqHeader)
}
//editUserAPI
export const editUserAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("put",`${base_Url}/edit-user/${id}`,reqBody,reqHeader)
}
//confirmMailAPI
export const confirmMailApi=async(reqBody)=>{
    return await commonAPI("post",`${base_Url}/confirm-mail`,reqBody,"")
}
//restPasswordAPI
export const resetPasswordAPI=async(reqBody)=>{
    return await commonAPI("post",`${base_Url}/reset-password`,reqBody,"")
}