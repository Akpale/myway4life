import axios from "axios";
import { useDispatch } from "react-redux";
//import { addProducts } from '../redux/actions';
import { BASE_URL } from "../config";

export const getData = () => {
  //const dispatch = useDispatch();
  const datas = async () => {
    try {
      const response = await axios.get(`${BASE_URL}viewressources/`, {
        apiKey: "",
        number: "",
      });
      //console.log("response", response.data);
      //dispatch(addProducts(response.data))
      return response.data;
    } catch (e) {
      console.error("Error in ressources", e);
    }
  };
  return {
    datas,
  };
};
