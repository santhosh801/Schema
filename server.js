const dotenv = require('dotenv');
dotenv.config(); 


console.log("Loaded environment variables:", process.env);

const connectDB = require('./config/db');
const app = require('./app');


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
