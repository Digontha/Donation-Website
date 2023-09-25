import { useEffect, useState } from "react";
import { PieChart } from "recharts";




const Statistics = () => {
 
     const [total , setTotal] = useState(0)

     console.log(total);

   useEffect(()=>{

    const DonateItems = JSON.parse(localStorage.getItem("Donates"))

    const presentDonation=DonateItems.length;
    console.log(presentDonation);

     const total = 12;

     const donationPercent= presentDonation / total * 100
     console.log(donationPercent);

     const Total = 100 - donationPercent
     setTotal(Total.toFixed(2))
   },[])


   return (
    <>
   
    </>
  );
};

export default Statistics;