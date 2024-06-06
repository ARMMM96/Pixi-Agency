Thank you for providing the `productService.js` file. Let's update the `README.md` file to include detailed information about the routes, their corresponding controller methods, and the services they use.

```markdown
# Pixi Agency

Pixi Agency is a web application designed to [brief description of what your project does].

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Routes](#routes)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/pixi-agency.git
    cd pixi-agency
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of your project and add necessary environment variables:

    ```plaintext
    PORT=3001
    API_URL=https://fakestoreapi.com/products
    ```

4. Start the project:

    ```bash
    npm start
    ```

## Usage

To use Pixi Agency, follow these steps:

1. Start the server:

    ```bash
    npm start
    ```

2. Open your web browser and navigate to `http://localhost:3001` (or the port specified in your `.env` file).

### Example

The `server.js` sets up an Express server with EJS as the templating engine. Below is a brief overview of the server setup:

```javascript
const express = require("express");
const path = require("path");
const app = express();
const productRoutes = require("./routes/products");
const methodOverride = require("method-override");
const colors = require("colors");
require("dotenv").config();

app.use(express.json());
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/products", productRoutes);

app.use("/", (req, res) => {
  res.status(404).render('index');
});

app.all("*", (req, res) => {
  res.status(404).send({
    apisStatus: false,
    message: "Invalid URL",
    data: {},
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`http://localhost:${PORT}`.bold.brightBlue.underline)
);
```

## Folder Structure

The project directory is structured as follows:

```
project-directory/
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   ├── navbar.ejs
│   │   ├── sidebar.ejs
│   ├── pages/
│   │   ├── create.ejs
│   │   ├── edit.ejs
│   │   ├── statistics.ejs
│   ├── index.ejs
│
├── routes/
│   ├── products.js
│
├── controllers/
│   ├── productController.js
│
├── services/
│   ├── productService.js
│
├── public/
│   ├── dist/
│   ├── plugins/
│   ├── js/
│   │   ├── charts.js
│
├── server.js
│
├── package.json
```

- **views/**: Contains EJS templates for the view layer.
  - **partials/**: Common partial templates like header, footer, navbar, and sidebar.
  - **pages/**: Specific pages for create, edit, and statistics.
  - **index.ejs**: Main index template.
- **routes/**: Contains route definitions.
  - **products.js**: Routes related to products.
- **controllers/**: Contains controller logic.
  - **productController.js**: Controller for handling product-related logic.
- **services/**: Contains service logic.
  - **productService.js**: Service for product-related operations.
- **public/**: Contains static assets.
  - **dist/**: Compiled assets.
  - **plugins/**: Plugins for the frontend.
  - **js/**: JavaScript files.
    - **charts.js**: JavaScript for charts.
- **server.js**: Main server file.
- **package.json**: Project
