import axios from "axios"
import {fakedata} from "./nameReducer"


export const fetchData = async (dispatch) =>{
        try{

         const data =  await axios.get('https://fakestoreapi.com/products')
           return dispatch(fakedata(data.data))
            

        }catch(e){
                console.log("error", e)
        }
}