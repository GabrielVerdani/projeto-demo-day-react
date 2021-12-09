import { Link } from "react-router-dom";

export default function IntegrantesItem(props) {
  return (
    <a href={props.github} className="product-item-container">
      <img src={props.image} alt={props.title} />
      <p title={props.title}>{props.title}</p>
      <b>{props.funcao}</b>
    </a >
  )
}