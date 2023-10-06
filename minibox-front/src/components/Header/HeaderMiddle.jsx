import logo from "../../assets/uzum-logo.svg";
import {CatalogueIcon, UserIcon, LoveIcon, CartIcon, SearchIcon} from "../UI/ICONS";

const HeaderMiddle = () => {
    return (
        <>
            <div className="flex items-center justify-between mb-[11px] pt-[18px]">
                <img src={logo} alt="logo" />
                <div className="flex gap-x-[7px]">
                    <button className="flex w-[120px] h-[40px] items-center justify-center gap-x-[2px] rounded-[4px] bg-[#EAEAF9]">
                        <CatalogueIcon />{" "}
                        <span className="font-['InterMedium'] text-[#3333CC] tracking-[0.084px]">Katalog</span>
                    </button>
                    <div className="flex items-center justify-between rounded-[4px] border border-gray-100 overflow-hidden w-[520.38px] h-[40px]">
                        <input
                            className="w-full outline-none border-none py-[11.5px] px-[17px]"
                            type="search"
                            placeholder="Искать товары и категории"
                        />
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
                    <div className="flex gap-x-[8px] items-center">
                        <CartIcon />
                        <span>Savat</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMiddle;
