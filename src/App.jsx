import { useState } from 'react'
import './App.css'
import FruitCard from './components/FruitCard'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])

  const fruits = [
    { id: 1, name: 'Apple', price: 120, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300' },
    { id: 2, name: 'Banana', price: 40, image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e12e?w=300' },
    { id: 3, name: 'Orange', price: 80, image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=300' },
    { id: 4, name: 'Mango', price: 150, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=300' },
    { id: 5, name: 'Strawberry', price: 200, image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836d?w=300' },
    { id: 6, name: 'Grapes', price: 100, image: 'https://images.unsplash.com/photo-1585518419759-73a68411b355?w=300' },
  ]

  const addToCart = (fruit) => {
    const existingItem = cartItems.find(item => item.id === fruit.id)
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🍎 Fresh Fruit Store</h1>
        <p>Welcome to our organic fruit store</p>
      </header>

      <div className="main-container">
        <div className="fruits-section">
          <h2>Available Fruits</h2>
          <div className="fruits-grid">
            {fruits.map(fruit => (
              <FruitCard 
                key={fruit.id} 
                fruit={fruit} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        <div className="cart-section">
          <Cart 
            items={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </div>
    </div>
  )
}

export default App
