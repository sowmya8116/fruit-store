import './FruitCard.css'

export default function FruitCard({ fruit, onAddToCart }) {
  return (
    <div className="fruit-card">
      <img src={fruit.image} alt={fruit.name} />
      <h3>{fruit.name}</h3>
      <p className="price">₹{fruit.price} / kg</p>
      <button onClick={() => onAddToCart(fruit)} className="btn-add">
        Add to Cart
      </button>
    </div>
  )
}
