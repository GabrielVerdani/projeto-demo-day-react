export default function RatingBox(props) {
  return (
    <div className="rating-box">
      <div className="user-information">
        <img className="user-image" src={props.img} alt={props.nome} />
        <h3>{props.nome}</h3>
      </div>
      <div className="rating">
        <p>{props.comentario}</p>
        <p>{props.nota}/10</p>
      </div>
      <span>{props.criado_em}</span>
    </div>
  )
}