# pixi-agency
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Configuration](#configuration)
- [Routes](#routes)
- [productService](#productservice)
- [Contributing](#contributing)
- [License](#license)

## Package Information

### Package Name
pixi-agency

### Version
1.0.0

### Description
[Insert description of the package]

### Dependencies

The following dependencies are required to run the application:

* `axios`: ^1.7.2
* `colors`: ^1.4.0
* `dotenv`: ^16.4.5
* `ejs`: ^3.1.10
* `express`: ^4.19.2
* `method-override`: ^3.0.0

### Scripts

The following script is available:

* `test`: Runs the test suite (currently not implemented)

### Author
Ahmed Rabie Mahmoud Mohamed

### License
ISC

## Installation

1. Clone the repository: `git clone https://github.com/your-username/pixi-agency.git`
2. Navigate to the project directory: `cd pixi-agency`
3. Install the dependencies: `npm install`

## Usage

1. Start the application: `node index.js`
2. Open your web browser and navigate to `http://localhost:3001`

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

* `PORT`: The port number to run the application on (default: 3001)
* `API_URL`: The URL of the API (default: https://fakestoreapi.com/products)

Example `.env` file: PORT=3001 API_URL=https://fakestoreapi.com/products

## Configuration

You can configure the application by creating a `config.js` file in the root of the project. This file should export an object with the following properties:

* `port`: The port number to run the application on (default: 3001)
* `apiUrl`: The URL of the API (default: https://fakestoreapi.com/products)

## Routes

The following routes are available in the application:

### Products Routes

| Route | Method | Controller Method | Service Used |
| --- | --- | --- | --- |
| `/products` | GET | `getAllProducts` | `productService.fetchAllProducts` |
| `/products/create` | GET | `createProductForm` | - |
| `/products/create` | POST | `createProduct` | `productService.createProduct` |
| `/products/edit/:id` | GET | `editProductForm` | `productService.fetchProductById` |
| `/products/edit/:id` | POST | `updateProduct` | `productService.updateProduct` |
| `/products/:id/delete` | POST | `deleteProduct` | `productService.deleteProduct` |
| `/products/statistics` | GET | `renderStatisticsPage` | (TBD: productService method for fetching statistics data) |

## productService

The `productService` module provides the following methods for interacting with the API:

### Methods

* `fetchAllProducts()`: Fetches all products from the API
* `fetchProductById(id)`: Fetches a product by ID from the API
* `createProduct(productData)`: Creates a new product in the API
* `updateProduct(id, productData)`: Updates a product in the API
* `deleteProduct(id)`: Deletes a product from the API

These methods are used by the `productController` to perform CRUD operations on products.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the ISC License.
