
const DonationCard = ({ item }) => {
    console.log(item);
    const { category_name, title, img, bg_color, text_color, card_bg_color, price } = item || {}

    const cardStyle = {
        backgroundColor: bg_color,


    };
    const TextBg = {
        backgroundColor: card_bg_color,


    };
    const TextColor = {
        color: text_color,
    }

    return (
        <>
            <div className="card card-compact lg:card-side bg-base-100 shadow-xl" style={cardStyle}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="p-6">
                    <button className="p-1 text-xl font-bold rounded-lg" style={TextBg}>
                        <p style={TextColor}>{category_name}</p>
                    </button>
                    <h4 className="  font-bold text-xl">
                        {title}
                    </h4>
                    <p className="font-bold" style={TextColor}>
                        {price}
                    </p>

                    <button
                        className="p-2 rounded-lg font-bold text-[#fff]"
                        type="button"
                        style={TextBg}
                    >
                        View Details

                    </button>

                </div>
            </div>

        </>
    );
};

export default DonationCard;