const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`)

const glossarySchema = new mongoose.Schema({
  name: String,
  definition: String
})

const Glossary = mongoose.model('Glossary', glossarySchema);

module.exports = Glossary;
