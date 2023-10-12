import React from "react";
import {TooltipWithHelperIcon} from "../Tooltip/Tooltip";
import Arrow from "../ICONS/Arrow";
const Details = ({product, setLikeFun}) => {
    let message =
        "Mahsulot buyurtirilgan kunning ertasiga mahsulotni rasmiy topshirish punktlarimizga yetkazamiz. Rasmiylashtirish bosqichida sizga eng qulay manzilni tanlang";
    return (
        <div className="info  grow p-4">
            <div className="flex justify-between">
                <span>{product.count} sotuvda bor</span>
                <button onClick={() => setLikeFun()} className="flex items-center h-[24px] gap-[10px]">
                    <span>
                        {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find((pr) => pr._id === product._id) ? (
                            <i className="pi pi-heart text-md mt-1"></i>
                        ) : (
                            <i className="pi pi-heart-fill text-xl mt-1"></i>
                        )}
                    </span>
                    <div>
                        {!JSON.parse(localStorage.getItem("LIKE_COLLECTION"))?.find((pr) => pr._id === product._id) ? (
                            <p className="text-md">Tanlash</p>
                        ) : (
                            <p>Tanlangan</p>
                        )}
                    </div>
                </button>
            </div>

            <h1 className="text-[20px] my-4">{product.name}</h1>

            <ul> 
                <li className="flex gap-x-3 items-center my-8">
                    <span>Yetkazib berish: </span> <TooltipWithHelperIcon description={message} />
                    <span>1 kun, bepul</span>
                </li>

                <li className="flex items-end gap-x-2 my-8 mb-32">
                    <div>
                        <p>narxi:</p>
                        <h2 className="text-lg font-medium">
                            {String(Math.floor( product.price )).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            so'm
                        </h2>
                    </div>
                    <span className="text-gray-500 text-lg line-through">
                        {String(Math.floor(product.price + product.price * 0.13)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        so'm
                    </span>
                </li>

                <li className="my-8">

                    <button className="p-4 flex items-center justify-between w-full rounded-xl  hover:bg-gray-200 bg-gray-300">

                        <div>
                            <span className="p-1 px-3 bg-[#FF0] me-4 rounded-2xl">
                                {String(Math.floor(product.price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                 so'm 3 x oy
                            </span>
                            <span> muddatli to'lov</span>
                        </div>

                        <Arrow />

                    </button>
                </li>

                <li className="flex gap-x-4">
                    <button className="p-4 font-medium flex text-white items-center justify-between w-[50%] rounded-[12px]  hover:bg-[#8746dc] bg-[#7000FF]">
                        Savatga qo'shish
                    </button>
                    <button className="p-4 font-medium flex items-center justify-between w-[50%] rounded-[12px]  hover:bg-gray-200 border-2 border-[#7000FF]">
                        Tugmani 1 bosishda xarid qilish
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Details;
