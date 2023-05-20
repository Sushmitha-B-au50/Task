import * as types from "./actionType";
import  axios from 'axios'

API = axios.create({baseURL:'http://localhost:5000/'});




const Adddata = (data) =>(
    {
        type:types.ADD_DATA

    });


export const addData=(data) => async dispatch =>
{
    debugger;
   //alert(prd.ProductID);
     try{
        const response = await API.post('users/',data)
        dispatch(Adddata(response));
        return response;
     }
    catch(err){
                return err;
             }
}