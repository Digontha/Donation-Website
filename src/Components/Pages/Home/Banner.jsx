import { useEffect, useState } from "react";
import { useLoaderData, useSubmit } from "react-router-dom";
import SearchItem from "../../SearchItem/SearchItem";



const Banner = () => {

    const backgroundImage = {
        backgroundImage: "url('/src/assets/Clothing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        width: "80%",
        margin: "auto",
        opacity: ".7",
        marginTop: "30px",
        marginBottom: "30px",
        borderRadius: "20px"

    }

    const data = useLoaderData()

    const [search, setSearch] = useState([])
    console.log(search);
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;


        //    const filterData = data?.filter(item=> item?.category_name === name)
        const filteredData = data?.filter(item => item?.category_name?.toLowerCase()?.includes(name?.toLowerCase()));

        setSearch(filteredData);



    }




    return (

        <>
            <div className="flex flex-col justify-center items-center h-[50vh]" style={backgroundImage}>
                <div>
                    <h1 className='lg:text-5xl text-black font-extrabold'>I Grow By Helping People In Need</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit} className="mt-10">

                        <input className="p-1 " type="text" name="name" />

                        <input className="mt-5 btn" type="submit" value="Submit" />

                    </form>
                </div>


            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-16 ">
                {
                    search?.map(item => <SearchItem key={item.id} item={item}></SearchItem>)
                }
            </div>

        </>
    );
};

export default Banner;