import './Cart.css'

export default function Cart({ items, onRemove, onUpdateQuantity }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₹{item.price}</span>
                </div>
                <div className="item-controls">
                  <input 
                    type="number" 
                    min="1" 
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    className="quantity-input"
                  />
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="btn-remove"
                  >
                    ❌
                  </button>
                </div>
                <div className="item-total">
                  ₹{item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ₹{total}</strong>
            </div>
            <button className="btn-checkout">Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}
