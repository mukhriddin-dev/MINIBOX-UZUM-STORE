import {create} from "zustand";

const useProductStore = create((set) => ({
    product: [], 
    isLoad: true,
    setProduct: (data) => set((state) => ({ product: data })),
    setLoader: ()=>set(()=>({isLoad:true}))
}));

export default useProductStore;