import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categorys from "./Category/Categorys";


const Home = () => {

    const data = useLoaderData()




    return (
        <div>
            <Banner></Banner>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    data?.map(item =><Categorys key={item.id} item={item}></Categorys>)
                }
            </div>

        </div>
    );
};

export default Home;