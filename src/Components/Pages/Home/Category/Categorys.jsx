

const Categorys = ({item}) => {
    console.log(item);
    
    const {category_name,title,img,bg_color,text_color,card_bg_color} = item || {}
 
    const cardStyle = {
        backgroundColor: bg_color,
        color: text_color,
        
      };
    const TextBg = {
        backgroundColor: card_bg_color,
       

      };
    
    return (
        <div className="card card-compact  bg-base-100 shadow-xl"  style={cardStyle}>
        <figure><img className="w-[100%] rounded-lg" src={img} alt="Shoes" /></figure>
        <div className="card-body" >
         <div>
            <button className="p-1 text-xl font-bold rounded-lg" style={TextBg}>{category_name}</button>
         </div>
          <p className="text-lg font-bold">{title}</p>
        </div>
      </div>
    );
};

export default Categorys;