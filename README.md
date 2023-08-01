# Christian Clothing Brand - Server Side

This is the server-side repository for the Christian Clothing Brand website. The server is built using Node.js and Express, along with several libraries to handle various tasks.

## Libraries Used

### Express Generator

Express Generator is a command-line tool that helps in quickly scaffolding an Express application. It generates the basic structure of the application, including routes, views, and other boilerplate code. It simplifies the initial setup and allows you to start building the application right away.

Command used for scaffolding:

```bash
npx express-generator --view=ejs .
```

### Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to define data schemas, interact with the database, and perform CRUD operations with ease. Mongoose's schema-based approach ensures data consistency and simplifies complex database operations.

### Cors

CORS (Cross-Origin Resource Sharing) is a middleware that allows controlled access to resources on a different domain. It enables secure communication between the client and server when the client application and server are running on different origins (domains).

### Dotenv

Dotenv is a zero-dependency library used to load environment variables from a `.env` file into `process.env`. This is particularly useful for storing sensitive information like database connection strings, API keys, and other configuration variables.

### UUID

UUID (Universally Unique Identifier) is a library used to generate unique identifiers. In this application, it can be used to generate unique IDs for various entities such as users, products, orders, etc.

### Bcryptjs

Bcryptjs is a library used for hashing and salting passwords. It helps to securely store user passwords in the database, protecting them from potential security breaches.

### Jsonwebtoken

Jsonwebtoken (JWT) is a library used for generating and verifying JSON web tokens. JWTs are often used for user authentication and authorization. They are signed tokens that contain user information and are sent with each request to verify the user's identity and access rights.

### Validator

Validator is a library used for validating and sanitizing user input. It provides various built-in validation methods to ensure that data is valid and safe before processing.

### Nodemon (Dev Dependency)

Nodemon is a development tool that automatically restarts the server whenever changes are made to the code. It is useful during the development phase, as it saves time by avoiding the need to manually restart the server after each code modification.

To install nodemon as a dev dependency, use the following command:

```bash
npm install --save-dev nodemon
```

## Getting Started

To start the server, run the following command:

```bash
npm start
```

The server will be accessible at `http://localhost:4000`.

