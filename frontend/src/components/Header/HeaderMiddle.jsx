import {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {OverlayPanel} from "primereact/overlaypanel";
import {Avatar} from "primereact/avatar";
import {CatalogueIcon, UserIcon, LoveIcon, CartIcon, SearchIcon} from "../UI/ICONS";
import logo from "../../assets/uzum-logo.svg";
import useProductApi from "../../service/product/useProductApi";

const HeaderMiddle = () => {
    const [result, setResult] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const op = useRef(null);

    useEffect(() => {
        useProductApi.getAll().then((res) => {
            setResult(res.data);
        });
    }, []);

    const searchProduct = (str) => {
        let newRegex = new RegExp(str, "gi");

        if (str.trim().length) {
            let res = result.filter((item) => {
                return item?.name?.match(newRegex);
            });
            setSearchResult(res);
        } else {
            setSearchResult([]);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between mb-[11px] pt-[18px]">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <div className="flex gap-x-[7px]">
                    <button className="flex w-[120px] h-[40px] items-center justify-center gap-x-[2px] rounded-[4px] bg-[#EAEAF9]">
                        <CatalogueIcon />
                        <span className="font-['InterMedium'] text-[#3333CC] tracking-[0.084px]">Katalog</span>
                    </button>
                    <div className="flex items-center justify-between rounded-[4px] border border-gray-100 overflow-hidden w-[520.38px] h-[40px]">
                        <input
                            className="w-full outline-none border-none py-[11.5px] px-[17px]"
                            type="search"
                            placeholder="Искать товары и категории"
                            onKeyUp={(e) => {
                                searchProduct(e.target.value);
                            }}
                            onFocus={(e) => op.current.toggle(e)}
                        />
                        <OverlayPanel ref={op} className="w-[525.38px]">
                            <ul className="flex flex-col gap-y-2">
                                {searchResult.length ? (
                                    searchResult.map((item) => {
                                        return (
                                            <li
                                                onClick={(e) => op.current.toggle(e)}
                                                className="p-2 hover:border-gray-200 rounded-md duration-500 border border-white "
                                            >
                                                <Link to={`/product/${item.slugify}`} className="flex items-center ">
                                                    <img
                                                        src={`https://image.minibox.uz${item.images[0]}`}
                                                        className="mr-2 object-contain w-[50px] border border-gray-200 h-[50px] rounded-full"
                                                    />

                                                    <p>{item.name}</p>
                                                </Link>
                                            </li>
                                        );
                                    })
                                ) : (
                                    <li className="p-2 hover:border-gray-200 rounded-md duration-500 border border-white">
                                        <p>Natija topilmadi!</p>
                                    </li>
                                )}
                            </ul>
                        </OverlayPanel>
                        <span className="w-[78.05px] flex items-center justify-center bg-gray-100 h-full">
                            <SearchIcon />
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-x-[27px] cursor-pointer">
                    <div className="flex gap-x-[8px] items-center">
                        <UserIcon />
                        <span>Kirish</span>
                    </div>
                    <div className="flex gap-x-[8px] items-center">
                        <LoveIcon />
                        <span>Saralangan</span>
                    </div>
                    <Link to="/cart">
                        <div className="flex gap-x-[8px] items-center">
                            <CartIcon />
                            <span>Savat</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HeaderMiddle;
