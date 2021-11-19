export default function RatingBox(props) {
  return (
    <div>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.avaliacao}</p>
      <span>{props.created_at}</span>
    </div>
  )
}