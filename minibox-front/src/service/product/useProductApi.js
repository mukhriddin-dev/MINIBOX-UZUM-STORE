import api from "../axios";

const useProductApi = {
    getAll: () => api.get("/products"),
    getOneItem: (slug)=> api.get(`/products?slugify=${slug}`)
}


export default useProductApi;