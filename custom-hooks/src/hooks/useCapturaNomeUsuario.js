import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";


export const useGetCapturarNome = () => {

    const [nomeUsuarios, setNomeUsuarios] = useState([]);

    useEffect(() => {
        axios
          .get(`${BASE_URL}users`)
          .then((response) => {
            setNomeUsuarios(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    return nomeUsuarios
} 