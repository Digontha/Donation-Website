import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categorys from "./Category/Categorys";
import { useState } from "react";



const Home = () => {




    const data = useLoaderData()



    const [search, setSearch] = useState(data)
    const [category, setCategory] = useState(data)



    const handleSubmit = (e) => {

        e.preventDefault()
        const name = e.target.name.value;

        const filteredData = search?.filter(item => item?.category_name?.toLowerCase()?.includes(name?.toLowerCase()));

        setCategory(filteredData);




    }


    return (
        <>
            <div>
                <Banner handleSubmit={handleSubmit} ></Banner>



            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                   category?.map(item => <Categorys key={item?.id} item={item}></Categorys>)
                }
            </div>
        </>
    );
};

export default Home;