import api from "../axios";

const useProductApi = {
    getAll: ()=> api.get("/products"),
}


export default useProductApi;