import "./App.css";

function Card( { flowers}) {
  const {title , image , paragraph ,text} = flowers;
  return (
    <>
      <div className="container">
        <div className="card">
        <img src={process.env.PUBLIC_URL + image} alt={text} className="image" />
        <h1>{title}</h1>
        <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
