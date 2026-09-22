# Paradise Nursery Shopping Application

Paradise Nursery is a React and Redux Toolkit e-commerce application for browsing and purchasing houseplants.

## Features

- Responsive landing page
- About Us section
- Plant catalogue with 3 categories
- 6 unique plants in each category
- Add to Cart functionality
- Disabled Add to Cart button after an item is added
- Dynamic cart item count
- Increase/decrease quantities
- Delete items from the cart
- Per-item totals and overall cart total
- Checkout placeholder
- Continue Shopping navigation
- React Router navigation
- Redux Toolkit state management

## Technologies

- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- Lucide React icons
- CSS

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Project structure

```text
src/
├── components/
│   ├── AboutUs.jsx
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   └── ProductList.jsx
├── data/
│   └── plants.js
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
├── App.css
├── App.jsx
└── main.jsx
```
