import {useState, useEffect} from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs /Breadcrumb";
import {useParams} from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import ProductCarousel from "../../components/UI/Carousel/ProductCarousel";
import useLikeStore from "../../store/useLikeStore";
import Details from "../../components/UI/Description/Details";
import TabPanels from "../../components/UI/TabPanels/TabPanels";
import CardWrapper from "../../components/Layout/CardWrapper";

const ProductItem = () => {
    let [product, setProduct] = useState([]);
    let [data, setData] = useState([]);
    let {slug} = useParams();
    const {likeProdFunc} = useLikeStore();

    const [isLike, setIsLike] = useState(false);

    const state = () => {
        useProductApi.getOneItem(slug).then((res) => {
            setProduct(res.data[0]);
            console.log(res.data[0]);
        });

        useProductApi.getAll().then((res) => {
            setData(res.data);
        });
    };

    const setLikeFun = () => {
        setIsLike(!isLike);
        likeProdFunc(product, isLike, setIsLike);
    };

    useEffect(() => {
        state();

        console.log(JSON.parse(localStorage.getItem("LIKE_COLLECTION")));
    }, [slug]);

    return (
        <section id="item" className="my-8">
            <div className="container mx-auto">
                <Breadcrumb product={product} />
            </div>

            <div className="container mx-auto mt-4">
                <div className="flex">
                    <div className="w-[508px] h-[554px]">
                        <ProductCarousel image={product.images} />
                    </div>
                        <Details product={product} setLikeFun={setLikeFun} />
                </div>
                <div className="p-4">
                         <TabPanels product={product} />
                </div>

                <div className="p-4">
                          <CardWrapper data={data.splice(0,10)} title="Oʻxshash mahsulotlar"></CardWrapper>
                </div>
            </div>
        </section>
    );
};

export default ProductItem;
