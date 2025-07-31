<<<<<<< HEAD
# 🍽️ SAUMYA'S MULTICUISINE

A modern, responsive **pure vegetarian** food ordering website built with React. Features authentic Indian and international cuisine with beautiful categorization, shopping cart functionality, and Indian Rupee pricing.

## ✨ Features

- 🥬 **Pure Vegetarian Menu**: 100% vegetarian dishes across all cuisines
- 🍽️ **Multi-Cuisine Menu**: Food items organized by cuisine categories (North Indian, South Indian, Gujarati, Indian Chinese, Italian, Continental, Mexican)
- 🛒 **Shopping Cart**: Add items to cart with quantity management
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 💰 **Indian Pricing**: All prices in Indian Rupees (₹) with 18% GST calculation
- 🎨 **Modern UI**: Clean and attractive design with hover effects and smooth animations
- ⚡ **Fast Performance**: Optimized React components with efficient state management
- 🔍 **Cuisine Filter**: Easy filtering by cuisine type with beautiful filter buttons

## 🛠️ Technologies Used

- **React 18.2.0** - Modern React with functional components and hooks
- **React Router DOM 6.8.0** - Client-side routing
- **CSS3** - Grid, Flexbox, and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/saumya-multicuisine.git
   cd saumya-multicuisine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
saumya-multicuisine/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css     # Navigation component
│   │   ├── HomePage.js & HomePage.css # Homepage with cuisine filters
│   │   ├── FoodItem.js & FoodItem.css # Individual food item card
│   │   ├── CartPage.js & CartPage.css # Shopping cart page
│   │   └── CartItem.js & CartItem.css # Cart item component
│   ├── App.js & App.css              # Main app component
│   ├── index.js & index.css          # React entry point
│   └── package.json                  # Dependencies and scripts
├── .gitignore                        # Git ignore file
└── README.md                         # This file
```

## 🍽️ Menu by Cuisine

### 🍛 North Indian Cuisine
- **Paneer Butter Masala** - ₹299
- **Dal Makhani** - ₹199
- **Aloo Gobi** - ₹179
- **Kadai Paneer** - ₹329

### 🥘 South Indian Cuisine
- **Masala Dosa** - ₹149
- **Idli Sambar** - ₹129
- **Vada Pav** - ₹89
- **Upma** - ₹99

### 🥗 Gujarati Cuisine
- **Dhokla** - ₹119
- **Khandvi** - ₹139
- **Gujarati Kadhi** - ₹159
- **Thepla** - ₹109

### 🥢 Indian Chinese Cuisine
- **Gobi Manchurian** - ₹199
- **Veg Fried Rice** - ₹179
- **Veg Noodles** - ₹189
- **Veg Spring Roll** - ₹149

### 🍕 Italian Cuisine (Vegetarian)
- **Margherita Pizza** - ₹299
- **Veg Supreme Pizza** - ₹349
- **Pasta Arrabbiata** - ₹279

### 🥗 Continental Cuisine (Vegetarian)
- **Caesar Salad** - ₹179
- **Greek Salad** - ₹199
- **Hummus** - ₹149
- **Bruschetta** - ₹169

### 🌮 Mexican Cuisine (Vegetarian)
- **Veg Tacos** - ₹249
- **Veg Burrito** - ₹299
- **Veg Quesadilla** - ₹229

## 💰 Pricing & Tax

- **All prices in Indian Rupees (₹)**
- **18% GST** applied on all orders
- **Real-time calculation** of subtotal, tax, and total

## 🎯 Features in Detail

### Homepage
- **Brand identity** with "SAUMYA'S MULTICUISINE" branding
- **Pure vegetarian** focus with clear messaging
- **Cuisine filter buttons** with emojis and smooth animations
- **Responsive grid layout** of food items
- **Beautiful food images** from Unsplash
- **Item descriptions and pricing**
- **"Add to Cart" functionality**
- **Hover effects and smooth animations**

### Shopping Cart
- **Add/remove items** with quantity controls
- **Real-time price calculation**
- **Order summary** with tax breakdown
- **Empty cart state** with call-to-action
- **Continue shopping functionality**

### Navigation
- **Clean navbar** with SAUMYA'S MULTICUISINE branding
- **Real-time cart item count**
- **Responsive design** for all devices

## 🎨 Customization

### Adding New Food Items
Edit the `foodItems` array in `src/components/HomePage.js`:

```javascript
{
  id: 27,
  name: "New Vegetarian Item",
  price: 199,
  cuisine: "north-indian", // or "south-indian", "gujarati", "indian-chinese", "italian", "continental", "mexican"
  image: "https://your-image-url.com/image.jpg",
  description: "Description of the vegetarian food item"
}
```

### Adding New Cuisine Categories
Add new cuisine to the `cuisines` array:

```javascript
{ id: 'punjabi', name: 'Punjabi', emoji: '🍛' }
```

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop computers (1024px+)

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy to GitHub Pages using the `gh-pages` package

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push

### Vercel
1. Import your GitHub repository to Vercel
2. Automatic deployment and previews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Food images from [Unsplash](https://unsplash.com/)
- Icons and emojis for better UX
- React community for excellent documentation

---

=======
# 🍽️ SAUMYA'S MULTICUISINE

A modern, responsive **pure vegetarian** food ordering website built with React. Features authentic Indian and international cuisine with beautiful categorization, shopping cart functionality, and Indian Rupee pricing.

## ✨ Features

- 🥬 **Pure Vegetarian Menu**: 100% vegetarian dishes across all cuisines
- 🍽️ **Multi-Cuisine Menu**: Food items organized by cuisine categories (North Indian, South Indian, Gujarati, Indian Chinese, Italian, Continental, Mexican)
- 🛒 **Shopping Cart**: Add items to cart with quantity management
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 💰 **Indian Pricing**: All prices in Indian Rupees (₹) with 18% GST calculation
- 🎨 **Modern UI**: Clean and attractive design with hover effects and smooth animations
- ⚡ **Fast Performance**: Optimized React components with efficient state management
- 🔍 **Cuisine Filter**: Easy filtering by cuisine type with beautiful filter buttons

## 🛠️ Technologies Used

- **React 18.2.0** - Modern React with functional components and hooks
- **React Router DOM 6.8.0** - Client-side routing
- **CSS3** - Grid, Flexbox, and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/saumya-multicuisine.git
   cd saumya-multicuisine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
saumya-multicuisine/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css     # Navigation component
│   │   ├── HomePage.js & HomePage.css # Homepage with cuisine filters
│   │   ├── FoodItem.js & FoodItem.css # Individual food item card
│   │   ├── CartPage.js & CartPage.css # Shopping cart page
│   │   └── CartItem.js & CartItem.css # Cart item component
│   ├── App.js & App.css              # Main app component
│   ├── index.js & index.css          # React entry point
│   └── package.json                  # Dependencies and scripts
├── .gitignore                        # Git ignore file
└── README.md                         # This file
```

## 🍽️ Menu by Cuisine

### 🍛 North Indian Cuisine
- **Paneer Butter Masala** - ₹299
- **Dal Makhani** - ₹199
- **Aloo Gobi** - ₹179
- **Kadai Paneer** - ₹329

### 🥘 South Indian Cuisine
- **Masala Dosa** - ₹149
- **Idli Sambar** - ₹129
- **Vada Pav** - ₹89
- **Upma** - ₹99

### 🥗 Gujarati Cuisine
- **Dhokla** - ₹119
- **Khandvi** - ₹139
- **Gujarati Kadhi** - ₹159
- **Thepla** - ₹109

### 🥢 Indian Chinese Cuisine
- **Gobi Manchurian** - ₹199
- **Veg Fried Rice** - ₹179
- **Veg Noodles** - ₹189
- **Veg Spring Roll** - ₹149

### 🍕 Italian Cuisine (Vegetarian)
- **Margherita Pizza** - ₹299
- **Veg Supreme Pizza** - ₹349
- **Pasta Arrabbiata** - ₹279

### 🥗 Continental Cuisine (Vegetarian)
- **Caesar Salad** - ₹179
- **Greek Salad** - ₹199
- **Hummus** - ₹149
- **Bruschetta** - ₹169

### 🌮 Mexican Cuisine (Vegetarian)
- **Veg Tacos** - ₹249
- **Veg Burrito** - ₹299
- **Veg Quesadilla** - ₹229

## 💰 Pricing & Tax

- **All prices in Indian Rupees (₹)**
- **18% GST** applied on all orders
- **Real-time calculation** of subtotal, tax, and total

## 🎯 Features in Detail

### Homepage
- **Brand identity** with "SAUMYA'S MULTICUISINE" branding
- **Pure vegetarian** focus with clear messaging
- **Cuisine filter buttons** with emojis and smooth animations
- **Responsive grid layout** of food items
- **Beautiful food images** from Unsplash
- **Item descriptions and pricing**
- **"Add to Cart" functionality**
- **Hover effects and smooth animations**

### Shopping Cart
- **Add/remove items** with quantity controls
- **Real-time price calculation**
- **Order summary** with tax breakdown
- **Empty cart state** with call-to-action
- **Continue shopping functionality**

### Navigation
- **Clean navbar** with SAUMYA'S MULTICUISINE branding
- **Real-time cart item count**
- **Responsive design** for all devices

## 🎨 Customization

### Adding New Food Items
Edit the `foodItems` array in `src/components/HomePage.js`:

```javascript
{
  id: 27,
  name: "New Vegetarian Item",
  price: 199,
  cuisine: "north-indian", // or "south-indian", "gujarati", "indian-chinese", "italian", "continental", "mexican"
  image: "https://your-image-url.com/image.jpg",
  description: "Description of the vegetarian food item"
}
```

### Adding New Cuisine Categories
Add new cuisine to the `cuisines` array:

```javascript
{ id: 'punjabi', name: 'Punjabi', emoji: '🍛' }
```

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop computers (1024px+)

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy to GitHub Pages using the `gh-pages` package

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push

### Vercel
1. Import your GitHub repository to Vercel
2. Automatic deployment and previews

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Food images from [Unsplash](https://unsplash.com/)
- Icons and emojis for better UX
- React community for excellent documentation

---

>>>>>>> ff0950e1ca9167b659a5c2d26619aa7091188f84
**Made with ❤️ by SAUMYA'S MULTICUISINE** 