# Marketplace Frontend

A modern, responsive web application that displays and manages products, vehicles, and persons data from an external API.

## Features

- **Multi-Entity Display**: Fetches and displays three types of data:
  - Products (name, description, category, price)
  - Vehicles (brand, model, description, price)
  - Persons (name, email, phone, address)

- **Interactive Modals**: Click any item to view detailed information in a modal dialog

- **Dark/Light Theme**: Toggle between themes with persistent preference storage

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

## API Integration

The application connects to an external API running on `http://localhost:8000` and consumes the following endpoints:

- `GET /api/products` - Retrieves product listings
- `GET /api/vehicles` - Retrieves vehicle listings
- `GET /api/persons` - Retrieves person listings

All endpoints return data in the format: `{ data: [...] }`

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables for theming
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Bootstrap 5.3.2** - UI components and grid system

## Setup

1. Ensure the API server is running on `http://localhost:8000`
2. Open `index.html` in a web browser or serve via a local web server
3. The application will automatically fetch and display data from all three endpoints

## Usage

- Navigate between sections using the header menu
- Click any item card to view detailed information in a modal
- Toggle dark/light theme using the switch in the header
- Close modals by clicking outside, pressing ESC, or using the close button
