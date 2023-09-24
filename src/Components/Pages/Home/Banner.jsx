

const Banner = () => {

    const backgroundImage = {
        backgroundImage: "url('/src/assets/Clothing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        width: "80%",
        margin: "auto",
        opacity: ".7",
      
        
        marginTop:"30px",
        marginBottom:"30px",
        borderRadius: "20px"

    }
     
    return (

        <div  className="flex flex-col justify-center items-center h-[50vh]" style={backgroundImage}> 
            <div>
                <h1 className='lg:text-5xl text-black font-extrabold'>I Grow By Helping People In Need</h1>
            </div>
            <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] my-10 border rounded-lg">
                <input
                    type="search"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Search here.... "
                  
                />
                <button
                    className="!absolute right-1 top-1 z-10 select-none rounded bg-orange-700  py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    Search
                </button>
               
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;