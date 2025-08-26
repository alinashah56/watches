# E-commerce Application

A simple e-commerce application built with Express.js, HTML, CSS, and MSSQL.

## Features

- User authentication (login/register)
- Product catalog
- Shopping cart
- Contact form

## Prerequisites

- Node.js (v14 or higher)
- MSSQL Server

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
# Server Configuration
PORT=5000

# Database Configuration
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_SERVER=your_db_server
DB_NAME=your_db_name

# Set to production when deploying to production
NODE_ENV=development
```

4. Start the application

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:5000`

## Database Setup

Create the following tables in your MSSQL database:

```sql
CREATE TABLE Users2 (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Password NVARCHAR(100) NOT NULL
);

CREATE TABLE ContactMessages (
    ID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Message NVARCHAR(MAX) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);
```

## Deployment

See the [deployment guide](./deployment-guide.md) for instructions on deploying this application to production.

## License

ISC