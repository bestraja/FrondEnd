import axios from "axios";
import {  REGISTER ,REGISTERFAILED,LOGINFAILED,GET_CURRENT_SUCCESS, GET_CURRENT_FAIL,} from "../Const/user"

export const register = (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('https://backenddeploy-production-4259.up.railway.app/api/user/register',body)
      console.log(res.data)
      dispatch({
          type:REGISTER,
          payload:res.data
      })
      navigate('/Login')
    } catch (error) {
        dispatch({
            type:REGISTERFAILED,
            payload:error.response.data.errors,
           
})}}
export const login= (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('https://backenddeploy-production-4259.up.railway.app/api/user/login',body,{ 
        withCredentials: true 
     })
  
   
     navigate('/profil')
     
    } catch (error) {
      dispatch({
        type:LOGINFAILED,
        payload:error.response.data
    })
 }} 
 export const getCurrent = () => async (dispatch) => {
  
    const token=document.cookie.split('=')[1]
  
    try {
      const res = await axios.get('https://backenddeploy-production-4259.up.railway.app/api/user/', { headers: { Authorization: `Bearer ${token}` } })
        dispatch({ type: GET_CURRENT_SUCCESS, payload: res.data })
        
    } catch (error) {
        
        dispatch({ type: GET_CURRENT_FAIL, payload: error })
    }}