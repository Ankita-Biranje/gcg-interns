# Mongoose: A Comprehensive Guide

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

## 1. Installation

To use Mongoose, you first need to install it in your project.

```bash
npm install mongoose
```

## 2. Connecting to MongoDB

To connect to your MongoDB database, you need to use the `mongoose.connect()` method. You will need to provide the connection string for your database.

```javascript
// connect.js
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/my-database', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
```

## 3. Schemas

A schema defines the structure of your documents in a collection. It specifies the fields, their types, and any validation rules.

```javascript
// UserSchema.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserSchema;
```

## 4. Models

A model is a constructor that is compiled from a schema. It provides an interface for creating, reading, updating, and deleting documents in a collection.

```javascript
// UserModel.js
const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');

const User = mongoose.model('User', UserSchema);

module.exports = User;
```

## 5. CRUD Operations

Once you have a model, you can use it to perform CRUD (Create, Read, Update, Delete) operations on your database.

### Create

To create a new document, you can create a new instance of your model and then call the `save()` method.

```javascript
// createUser.js
const User = require('./UserModel');

async function createUser(userData) {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });
```

### Read

You can use the `find()`, `findById()`, and `findOne()` methods to read documents from your database.

```javascript
// findUsers.js
const User = require('./UserModel');

async function findUsers() {
  try {
    const users = await User.find({ age: { $gte: 18 } });
    console.log('Users found:', users);
  } catch (error) {
    console.error('Error finding users:', error);
  }
}

findUsers();
```

### Update

You can use the `updateOne()`, `updateMany()`, and `findByIdAndUpdate()` methods to update documents in your database.

```javascript
// updateUser.js
const User = require('./UserModel');

async function updateUser(userId, updateData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    console.log('User updated:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

updateUser('some-user-id', { age: 31 });
```

### Delete

You can use the `deleteOne()`, `deleteMany()`, and `findByIdAndDelete()` methods to delete documents from your database.

```javascript
// deleteUser.js
const User = require('./UserModel');

async function deleteUser(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log('User deleted:', deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

deleteUser('some-user-id');
```
