import mongoose from 'mongoose';

// {} this is a object and yaha pe order matter nhi karta h ki kon se value ko kaha rakhe h and [] ye array h and yaha pe order matter karta h

// first we will import mongoose --> then we will create a new schema --> then we will export that Schema by creating a model

// Mongo Db is a very Powerful database where we can store our images also. Mongo will store the images as a buffer. But it is a bad practice to store Images in Mongo DB

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
