const InfoComp = ({ img, title, para }) => {
  return (
    <div className="info">
      <img src={img} alt={`${title} logo`} />
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default InfoComp;
