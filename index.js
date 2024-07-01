// server.js

const mongoose = require('mongoose');

// MongoDB connection URI
const uri = "mongodb+srv://myounas5657:myounas5657@secondecluster.uep31vs.mongodb.net/?retryWrites=true&w=majority&appName=SecondeCluster";

// Connect to MongoDB Atlas
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Event listeners for Mongoose connection   
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log("Connected to MongoDB Atlas");

    // Define a schema
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number
        // Add other fields as needed
    });

    // Compile the schema into a model
    const User = mongoose.model('User', userSchema);

    // Example: Create a new user
    const newUser = new User({
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30
    });

    // Save the new user to the database
    newUser.save()
        .then(() => console.log('User saved successfully'))
        .catch(err => console.error('Error saving user:', err));
});
