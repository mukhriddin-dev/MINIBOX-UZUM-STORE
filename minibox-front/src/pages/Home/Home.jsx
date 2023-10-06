import React, {useEffect} from "react";
import SliderWrapper from "../../components/Layout/SliderWrapper";
import CardWrapper from "../../components/Layout/CardWrapper";
import MainSlider from "../../components/UI/Slider/MainSlider";

import useProductApi from "../../service/product/useProductApi";
import useProductStore from "../../store/useProductStore";

const Home = () => {
    const {isLoad, setLoader, setProduct, product} = useProductStore();

    useEffect(() => {
        useProductApi.getAll().then((res) => {
            console.log(res.data);
            setProduct(res.data);
            setLoader();
        });
    }, []);

    if (!isLoad) {
        return <h1>LOADING . . .</h1>;
    }

    return (
        <main id="main">
            <SliderWrapper>
                <MainSlider />
            </SliderWrapper>
            <CardWrapper data={product} title="Barcha mahsulotlar"></CardWrapper>

            <CardWrapper title="Ommabop mahsulotlar"></CardWrapper>
        </main>
    );
};

export default Home;
