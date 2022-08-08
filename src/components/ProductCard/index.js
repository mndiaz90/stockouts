const ProductCard = ({ code, name, price, wh_coverage, size_stock, count }) => {
  return (
    <li>
      <span>{count}</span>
      <img src={require(`../../assets/images/${code}.jpg`)} alt={name} />
      <span>{code}</span>
      <span>{name}</span>
      <span>{price} &euro;</span>
      <span>{wh_coverage}</span>
      {wh_coverage < 0.5 ? <span>Very low</span> : <span>Good</span>}
    </li>
  );
};

export default ProductCard;
