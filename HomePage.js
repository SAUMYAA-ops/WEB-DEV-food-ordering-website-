import React, { useState } from 'react';
import FoodItem from './FoodItem';
import './HomePage.css';

const HomePage = ({ addToCart }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const foodItems = [
    // North Indian Cuisine
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 299,
      cuisine: "north-indian",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      description: "Creamy tomato-based curry with soft paneer"
    },
    {
      id: 2,
      name: "Dal Makhani",
      price: 199,
      cuisine: "north-indian",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      description: "Creamy black lentils cooked overnight"
    },
    {
      id: 3,
      name: "Aloo Gobi",
      price: 179,
      cuisine: "north-indian",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      description: "Spiced potatoes and cauliflower curry"
    },
    {
      id: 4,
      name: "Kadai Paneer",
      price: 329,
      cuisine: "north-indian",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      description: "Paneer cooked with bell peppers and spices"
    },
    // South Indian Cuisine
    {
      id: 5,
      name: "Masala Dosa",
      price: 149,
      cuisine: "south-indian",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      description: "Crispy rice crepe with spiced potato filling"
    },
    {
      id: 6,
      name: "Idli Sambar",
      price: 129,
      cuisine: "south-indian",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      description: "Steamed rice cakes with lentil soup"
    },
    {
      id: 7,
      name: "Vada Pav",
      price: 89,
      cuisine: "south-indian",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      description: "Spicy potato fritter in bread bun"
    },
    {
      id: 8,
      name: "Upma",
      price: 99,
      cuisine: "south-indian",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      description: "Savory semolina breakfast dish"
    },
    // Gujarati Cuisine
    {
      id: 9,
      name: "Dhokla",
      price: 119,
      cuisine: "gujarati",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      description: "Steamed gram flour cake with tempering"
    },
    {
      id: 10,
      name: "Khandvi",
      price: 139,
      cuisine: "gujarati",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      description: "Rolled gram flour with coconut garnish"
    },
    {
      id: 11,
      name: "Gujarati Kadhi",
      price: 159,
      cuisine: "gujarati",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      description: "Sweet and sour yogurt curry"
    },
    {
      id: 12,
      name: "Thepla",
      price: 109,
      cuisine: "gujarati",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      description: "Spiced flatbread with fenugreek"
    },
    // Indian Chinese Cuisine
    {
      id: 13,
      name: "Gobi Manchurian",
      price: 199,
      cuisine: "indian-chinese",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
      description: "Crispy cauliflower in spicy sauce"
    },
    {
      id: 14,
      name: "Veg Fried Rice",
      price: 179,
      cuisine: "indian-chinese",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
      description: "Stir-fried rice with mixed vegetables"
    },
    {
      id: 15,
      name: "Veg Noodles",
      price: 189,
      cuisine: "indian-chinese",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
      description: "Stir-fried noodles with vegetables"
    },
    {
      id: 16,
      name: "Veg Spring Roll",
      price: 149,
      cuisine: "indian-chinese",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
      description: "Crispy rolls with vegetable filling"
    },
    // Italian Cuisine (Vegetarian)
    {
      id: 17,
      name: "Margherita Pizza",
      price: 299,
      cuisine: "italian",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop",
      description: "Classic tomato sauce with mozzarella cheese"
    },
    {
      id: 18,
      name: "Veg Supreme Pizza",
      price: 349,
      cuisine: "italian",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      description: "Loaded with fresh vegetables and cheese"
    },
    {
      id: 19,
      name: "Pasta Arrabbiata",
      price: 279,
      cuisine: "italian",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      description: "Spicy tomato sauce with garlic and chili"
    },
    // Continental Cuisine (Vegetarian)
    {
      id: 20,
      name: "Caesar Salad",
      price: 179,
      cuisine: "continental",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      description: "Fresh romaine lettuce with caesar dressing"
    },
    {
      id: 21,
      name: "Greek Salad",
      price: 199,
      cuisine: "continental",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      description: "Fresh vegetables with feta cheese and olives"
    },
    {
      id: 22,
      name: "Hummus",
      price: 149,
      cuisine: "continental",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      description: "Creamy chickpea dip with tahini and olive oil"
    },
    {
      id: 23,
      name: "Bruschetta",
      price: 169,
      cuisine: "continental",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      description: "Toasted bread with tomato and basil"
    },
    // Mexican Cuisine (Vegetarian)
    {
      id: 24,
      name: "Veg Tacos",
      price: 249,
      cuisine: "mexican",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Soft corn tortillas with vegetable filling"
    },
    {
      id: 25,
      name: "Veg Burrito",
      price: 299,
      cuisine: "mexican",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Large flour tortilla filled with rice, beans, and vegetables"
    },
    {
      id: 26,
      name: "Veg Quesadilla",
      price: 229,
      cuisine: "mexican",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Grilled tortilla with melted cheese and vegetables"
    }
  ];

  const cuisines = [
    { id: 'all', name: 'All Cuisines', emoji: '🍽️' },
    { id: 'north-indian', name: 'North Indian', emoji: '🍛' },
    { id: 'south-indian', name: 'South Indian', emoji: '🥘' },
    { id: 'gujarati', name: 'Gujarati', emoji: '🥗' },
    { id: 'indian-chinese', name: 'Indian Chinese', emoji: '🥢' },
    { id: 'italian', name: 'Italian', emoji: '🍕' },
    { id: 'continental', name: 'Continental', emoji: '🥗' },
    { id: 'mexican', name: 'Mexican', emoji: '🌮' }
  ];

  const filteredItems = selectedCuisine === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.cuisine === selectedCuisine);

  return (
    <div className="homepage">
      <div className="container">
        <h1 className="page-title">🍽️ SAUMYA'S MULTICUISINE</h1>
        <p className="page-subtitle">Pure Vegetarian • Authentic Indian & International Cuisine</p>
        
        {/* Cuisine Filter */}
        <div className="cuisine-filter">
          {cuisines.map(cuisine => (
            <button
              key={cuisine.id}
              className={`cuisine-btn ${selectedCuisine === cuisine.id ? 'active' : ''}`}
              onClick={() => setSelectedCuisine(cuisine.id)}
            >
              <span className="cuisine-emoji">{cuisine.emoji}</span>
              <span className="cuisine-name">{cuisine.name}</span>
            </button>
          ))}
        </div>

        <div className="food-grid">
          {filteredItems.map(item => (
            <FoodItem 
              key={item.id} 
              item={item} 
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 