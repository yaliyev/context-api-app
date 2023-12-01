import axios from "axios";

const API_URL = "https://northwind.vercel.app/api/categories/";


async function getCategories(){
    return axios.get(API_URL).then(response=>response.data);
}

export {getCategories}