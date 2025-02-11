function CardFeatures({ feature }) {
 const { img, title, text } = feature;
 return (
         <div className="container3">
          
             <img className="photo" src={img} alt="photo" />
             <h3>{title}</h3>
             <span>{text}</span>
             <button className="button-proj">{"MORE DETAILS"}</button>
           </div>
       );
     }
     
     export default CardFeatures;
     