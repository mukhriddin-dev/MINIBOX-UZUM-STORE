import {useState, useEffect} from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs /Breadcrumb";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";

const ProductItem = () => {
    let [data, setData] = useState([]);
    let [product, setProduct] = useState([]);

    let location = useLocation();
    let {slug} = useParams();

    function createBreadcrumb(state) {
        let res = state.split("/").splice(1);
        setData(res);
    }

    const state = () => {
        useProductApi.getOneItem(slug).then((res) => {
            setProduct(res.data[0]);
            console.log(res.data[0]);
        });
    };

    useEffect(() => {
        createBreadcrumb(location.pathname);
        state();
    }, [slug]);

    return (
        <section id="item" className="my-8">
            <div className="container mx-auto">
                <Breadcrumb data={data} />
            </div>

            <div className="container mx-auto mt-4"></div>
        </section>
    );
};

export default ProductItem;
