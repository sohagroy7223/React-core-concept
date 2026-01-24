import "./App.css";

export default function Mobile({ mobile }) {
  // console.log(mobile);
  return (
    <div className="brand">
      <h2>brand : {mobile.brand}</h2>
      <h5>name: {mobile.name}</h5>
      <p>price {mobile.price}</p>
    </div>
  );
}
