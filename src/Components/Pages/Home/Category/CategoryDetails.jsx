import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CategoryDetails = () => {
     
    const [items,setItems]=useState()
    console.log(items);

    const {id} = useParams()
    

    const data = useLoaderData()
   

    useEffect(()=>{
            
          const mainData = data?.find(data=>data)
          setItems(mainData)

    },[id,data])

    const {title,img,description} = items || {}


    return (
        <div className="flex justify-center items-center h-screen">
           <div>
           <img className="w-[1000px] " src={img} alt="" />
           <h1>{title}</h1>
           <p>{description}</p>
           </div>
        </div>
    );
};

export default CategoryDetails;