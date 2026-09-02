# Computer Shop E-Commerce Website

A modern e-commerce platform for selling computer components like RAM, keyboards, SSDs, and more.

## Features

- 📦 Product catalog with categories
- 🛒 Shopping cart functionality
- 💳 Payment processing ready
- 📱 Responsive design
- 🔒 Secure authentication ready
- ⚡ Fast and scalable

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB (ready to integrate)
- **Styling**: CSS3

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or cloud instance

### Installation

1. Clone the repository
```bash
git clone https://github.com/thisakperera638-coder/computer-shop.git
cd computer-shop
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd client
npm install
cd ..
```

4. Create `.env` file in root directory
```bash
cp .env.example .env
```

5. Update `.env` with your configuration

### Running the Application

**Terminal 1 - Start Backend Server:**
```bash
npm run dev
```
Server runs on `http://localhost:5000`

**Terminal 2 - Start Frontend Development Server:**
```bash
npm run client
```
Frontend runs on `http://localhost:3000`

## Project Structure

```
computer-shop/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server.js              # Express server
├── package.json
├── .env.example
└── README.md
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/cart` - Add product to cart
- `GET /api/health` - Health check

## Next Steps

- [ ] Set up MongoDB database
- [ ] Add user authentication
- [ ] Implement payment gateway (Stripe/PayPal)
- [ ] Add product search and filters
- [ ] Create admin dashboard
- [ ] Implement order management
- [ ] Add product reviews
- [ ] Deploy to production

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## License

MIT License - see LICENSE file for details

## Contact

For inquiries, reach out to: info@computershop.com
