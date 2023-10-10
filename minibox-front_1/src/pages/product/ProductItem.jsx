import {useState, useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import ProductCarousel from "../../components/UI/Carousel/ProductCarousel";
import useLikeStore from "../../store/useLikeStore";
import {Toast} from "primereact/toast";


const ProductItem = () => {
    let [product, setProduct] = useState([]);
    let {slug} = useParams();
    const [isLike, setIsLike] = useState(false);
    const [selected, setSelected] = useState(false);

    const {likeProd} = useLikeStore();

    const toast = useRef(null);

    const state = () => {
        useProductApi.getOneItem(slug).then((res) => {
            setProduct(res.data[0]);
        });
    };

    const showSuccess = () => {
        toast.current.show({severity: "success", summary: "Tanlandi", detail: product.name, life: 3000});
    };

    const showWarn = () => {
        toast.current.show({severity: "error", summary: "Diqqat", detail: "Mahsulot o'chirildi ", life: 3000});
    };

    const setLikeFun = () => {
        console.log("ok");

        JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find((item, index) => {
            console.log(item);

            if (item._id == product._id) {
                let local = JSON.parse(localStorage.getItem("LIKE_COLLECTION"));
                local.splice(index, 1);
                localStorage.setItem("LIKE_COLLECTION", JSON.stringify(local));
                showWarn();
                console.log("local:", local);
                console.log("DELETED");
                setIsLike(false);
            } else {
                setIsLike(true);
                console.log("OK 2");
                JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find((item) => {
                    if (item._id != product._id) {
                        setSelected(true);
                        likeProd(product);
                        console.log("ADDED 2");
                        setIsLike(true);
                    } else {
                        setSelected(false);
                        console.log("DLETEED 2");
                        setIsLike(true);
                    }
                });
            }
        });

        if (!isLike) {
            showSuccess();
        }

        if (!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))) {
            likeProd(product);
        }
    };

    useEffect(() => {
        state();

        JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.forEach((item) => {
            if (item._id == product._id) {
                setIsLike(true);
            }
        });

        console.log(JSON.parse(localStorage.getItem("LIKE_COLLECTION")));

        console.log(selected);
    }, [slug, product._id]);

    return (
        <section id="item" className="py-8">
            <Toast ref={toast} />
            <div className="container mx-auto">
                <Breadcrumb product={product} />
            </div>

            <div className="container mx-auto">
                <div className="flex  gap-x-20 pt-6">
                    <div className="w-[508px] h-[554px]">
                        <ProductCarousel image={product.images} />
                    </div>

                    <div className="info border-4 border-red-500 grow p-4">
                        <div className="flex justify-between">
                            <span>123 sotuvda bor</span>
                            <button onClick={() => setLikeFun()} className="flex items-center h-[24px] gap-[10px]">
                                <span>
                                    {!isLike ? (
                                        <i className="pi pi-heart text-md mt-1"></i>
                                    ) : (
                                        <i className="pi pi-heart-fill text-xl mt-1"></i>
                                    )}
                                </span>
                                <div> {!isLike ? <p className="text-md">Tanlash</p> : <p>Tanlangan</p>} </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductItem;
