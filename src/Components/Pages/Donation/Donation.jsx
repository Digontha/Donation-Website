import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
        
    const [donation,setDonation] = useState()
    const [slice,setSlice] = useState(4)

    console.log(donation);
  
    useEffect(()=>{
        const DonateItems = JSON.parse(localStorage.getItem("Donates"))
       
        if(DonateItems){
            setDonation(DonateItems)
        }

    },[])


    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-20 gap-5">
            {
                donation?.slice(0,slice).map(item=> <DonationCard key={item.id} item={item}></DonationCard>)
            }
        </div>

       {
        donation?.length > slice ?  <div onClick={()=>setSlice(donation.length)} className="text-center mt-6">
        <button className="btn btn-success ">See More</button>
        </div> : "" 
       }
        
        </>
    );
};

export default Donation;