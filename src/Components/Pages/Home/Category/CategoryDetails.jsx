import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryDetails = () => {

    const [items, setItems] = useState({})


    const { id } = useParams()



    const data = useLoaderData()


    useEffect(() => {

        const mainData = data?.find(data => data.id == id)
        setItems(mainData)

    }, [id, data])

    const { title, img, description, price, text_color } = items || {}

    const BgStyle = {
        backgroundColor: text_color,
    };


    const handleAddToDonate = () => {

        const addedDonateItems = []
        const DonateItems = JSON.parse(localStorage.getItem("Donates"))
        if (!DonateItems) {
            addedDonateItems.push(items)
            localStorage.setItem("Donates", JSON.stringify(addedDonateItems))
            toast("You Add Successfully")
        } else {

            const isExit = DonateItems.find(item => item.id == id)

            if (!isExit) {
                addedDonateItems.push(...DonateItems, items)
                localStorage.setItem("Donates", JSON.stringify(addedDonateItems))
                toast("You Add Successfully")
            } else {
                toast("You Already Added")
            }


        }



    }


    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="lg:w-[1000px] mx-auto space-y-6 relative">
                    <img className="lg:w-[1000px]" src={img} alt="" />

                    <div className="absolute bottom-0 left-0 w-full bg-[#0B0B0B80] bg-opacity-50">
                        <div className="p-10 text-white">

                        </div>
                        <button
                            onClick={handleAddToDonate}
                            className="px-3 py-2 rounded-lg text-xl font-bold text-[#fff] absolute bottom-4 left-4"
                            style={BgStyle}
                        >
                            Donate {price}
                        </button>
                    </div>
                </div>
               <div className="lg:w-[1000px] space-y-4">
               <p className="font-bold text-xl mt-2">{title}</p>
                <p className="font-medium text-base">{description}</p>
               </div>
            </div>
            

            <ToastContainer />
        </>

    );
};

export default CategoryDetails;