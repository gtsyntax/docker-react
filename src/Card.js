import './Card.css'

const Card = (props) => {
  const { id, name } = props;
  return (
    <div>
      <div className="card">
        <img src={`https://robohash.org/${id}?100x100`} alt="placeholder" />
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;
