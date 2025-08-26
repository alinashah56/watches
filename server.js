const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const sql = require("mssql");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
// Show login page on root "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// DB config
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: process.env.NODE_ENV === 'production',
        trustServerCertificate: process.env.NODE_ENV !== 'production',
    },
};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));


// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Contact form POST
app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log("Form Data Received:", req.body);

        let pool = await sql.connect(dbConfig);

        await pool.request()
            .input("Name", sql.NVarChar(100), name)
            .input("Email", sql.NVarChar(100), email)
            .input("Message", sql.NVarChar(sql.MAX), message)
            .query(`
                INSERT INTO ContactMessages (Name, Email, Message)
                VALUES (@Name, @Email, @Message)
            `);

        res.json({ success: true, message: "Form submitted successfully!" });
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ success: false, message: "Error saving data" });
    }
});
// Register route
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let pool = await sql.connect(dbConfig);
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("email", sql.VarChar, email)
            .input("password", sql.VarChar, password)
            .query("INSERT INTO Users2 (Name, Email, Password) VALUES (@name, @email, @password)");

        res.json({ message: "Registration successful" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request()
            .input("email", sql.VarChar, email)
            .input("password", sql.VarChar, password)
            .query("SELECT * FROM Users2 WHERE Email = @email AND Password = @password");

        if (result.recordset.length > 0) {
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Logout route
app.post("/logout", (req, res) => {
    // If you use sessions, destroy them here
    // For token-based auth, instruct client to remove token
    res.json({ message: "Logged out successfully" });
});

// Connect to DB
sql.connect(dbConfig)
   .then(() => console.log("✅ Connected to SQL Server"))
   .catch(err => console.error("❌ Connection failed:", err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
