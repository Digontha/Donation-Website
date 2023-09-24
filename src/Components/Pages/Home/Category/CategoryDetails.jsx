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

    const { title, img, description,price,text_color } = items || {}

    const BgStyle = {
        backgroundColor: text_color,
      };
    

      const handleAddToDonate=()=>{
                 
              const addedDonateItems=[]
              const DonateItems = JSON.parse(localStorage.getItem("Donates"))
              if(!DonateItems){
                addedDonateItems.push(items)
                localStorage.setItem("Donates",JSON.stringify(addedDonateItems))
                toast("You Add Successfully")
              }else{
                 
                const isExit = DonateItems.find(item=>item.id == id)

                if(!isExit){
                    addedDonateItems.push(...DonateItems,items)
                    localStorage.setItem("Donates",JSON.stringify(addedDonateItems))
                    toast("You Add Successfully")
                }else{
                   toast("You Already Added")
                }

                
              }



      }


    return (
       <>
        <div className="flex justify-center items-center h-screen">
            <div className="w-[1000px] mx-auto space-y-6">
                <div>
                    <img className="w-[1000px] " src={img} alt="" />
                    <button onClick={handleAddToDonate} className="px-3 py-2 rounded-lg text-xl font-bold text-[#fff]" style={BgStyle}>Donate {price}</button>
                </div>

                <h1 className="font-bold text-2xl">{title}</h1>
                <p className="font-serif font-medium">{description}</p>
            </div>
        </div>
       <ToastContainer/>
       </>
        
    );
};

export default CategoryDetails;