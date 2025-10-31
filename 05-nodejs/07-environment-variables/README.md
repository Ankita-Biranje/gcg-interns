# Environment Variables

Environment variables are a way to store configuration settings that can change between different environments (e.g., development, production). They are often used to store sensitive information, such as API keys or database credentials, so that they are not hardcoded into the application.

## 1. Using `.env` files

The `dotenv` package is a popular way to load environment variables from a `.env` file into `process.env`.

### Installation

```bash
npm install dotenv
```

### Usage

1.  Create a `.env` file in the root of your project:

    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=password
    API_KEY=your_api_key_here
    ```

2.  Load the environment variables in your application:

    ```javascript
    // app.js
    require('dotenv').config();

    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASS;
    const apiKey = process.env.API_KEY;

    console.log('DB Host:', dbHost);
    console.log('DB User:', dbUser);
    console.log('DB Pass:', dbPass);
    console.log('API Key:', apiKey);
    ```

## 2. Accessing Environment Variables

Environment variables are accessed through the `process.env` object in Node.js.

```javascript
// app.js
const port = process.env.PORT || 3000;

console.log('Port:', port);
```

## 3. Best Practices

-   **Do not commit `.env` files to version control**: Add `.env` to your `.gitignore` file to prevent sensitive information from being exposed.
-   **Provide default values**: Always provide default values for environment variables, so that your application can still run if they are not set.
-   **Use descriptive names**: Use clear and descriptive names for your environment variables.
