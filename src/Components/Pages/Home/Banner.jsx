

const Banner = ({ handleSubmit }) => {
  const backgroundImage = {
    backgroundImage: "url('/src/assets/Clothing.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    width: '80%',
    margin: 'auto',
    opacity: '0.7',
    marginTop: '30px',
    marginBottom: '30px',
    borderRadius: '20px',
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[50vh]" style={backgroundImage}>
        <div>
          <h1 className="lg:text-5xl text-black font-extrabold">I Grow By Helping People In Need</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="mt-10">
            <input className="p-1" type="text" name="name" />
            <input className="mt-5 btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Banner;
