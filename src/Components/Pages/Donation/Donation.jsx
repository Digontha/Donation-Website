import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
        
    const [donation,setDonation] = useState()
    console.log(donation);
  
    useEffect(()=>{
        const DonateItems = JSON.parse(localStorage.getItem("Donates"))
       
        if(DonateItems){
            setDonation(DonateItems)
        }

    },[])


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  mt-20 gap-5">
            {
                donation?.map(item=> <DonationCard key={item.id} item={item}></DonationCard>)
            }
        </div>
    );
};

export default Donation;