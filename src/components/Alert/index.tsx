import "./alert.css";

export default ({ message, icon, id }) => {
  return (
    <div className="country-not-found-card" id={id}>
      <span>{message}</span>
      <img src={icon} width={40} height={40} />
    </div>
  );
};
