import { Link } from "react-router-dom";

export default function (props) {
  return (
    <Link to={`produto?id=${props.id}`} className="product-item-container">
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p title={props.description}>{props.description}</p>
      </div>
      <span>R${props.price}</span>
    </Link>
  )
}