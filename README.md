# Login & Product Dashboard Project

A React application featuring user authentication and a product display dashboard with a responsive carousel.

## Features

- **User Authentication**
  - Login form with username/password validation
  - API integration for authentication
  - Success/error feedback

- **Product Dashboard**
  - Responsive product carousel using Swiper.js
  - Product cards with:
    - Images
    - Titles
    - Descriptions
    - Prices
    - Stock information
  - Mobile-friendly design

## Technologies Used

- React (Functional Components & Hooks)
- Axios for API communication
- Swiper.js for carousel functionality
- CSS Modules for styling
- React Router (if implemented)

## Project Structure

CLASE-8/Login/
├── src/
│ ├── api/ # API configuration and services
│ ├── components/ # React components
│ │ ├── Login.jsx # Authentication form
│ │ ├── Dashboard.jsx # Product display
│ │ └── Navbar.jsx # Navigation
│ ├── styles/ # CSS files
│ └── App.js # Main application
├── public/ # Static assets
└── package.json # Dependencies


## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Requirements

The project expects a backend API with these endpoints:
- `POST /auth/login` for authentication
- `GET /products` for product data

## Screenshots

(Add screenshots of the login and dashboard here if available)

## Future Improvements

- Add user registration
- Implement product search/filter
- Add shopping cart functionality
- Improve mobile responsiveness
