const Card = ({ children, bg = "bg-grey-100" }) => {
  return <div className={`${bg} rounded-lg shadow-md p-6`}>{children}</div>;
};

export default Card;
