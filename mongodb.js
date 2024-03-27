const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Collection1 = mongoose.model("Collection1", LogInSchema);

module.exports = Collection1;