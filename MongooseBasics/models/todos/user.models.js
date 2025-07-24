// We write models before .js because it is practised i big companies to get an undderstanding that this is a model file

import mongoose from 'mongoose'; // first we have to import mongoose

const userSchema = new mongoose.Schema(
  {
    // userName: String, // We can do this also
    userName: {
      type: String,
      required: true, // this field will be required always
      unique: true, // for creating some username as in Insta/FB
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required: [true, "password is required"], // required filed can take arrays also
      required: true,
    },
  },
  { timestamps: true } // this is secondary object
); // Then we have to create a Schema and save it in a variable
// always use new keyword to make new schema

export const User = mongoose.model('User', userSchema); // the model here is a method which takes two imput 1st kya model banau and 2nd kiske basis pe model banau

// niche ka line m jo users h wo upar m "User" wala hi same chiz h which is the name of the model but it is rule that whenever it will be written in this line the model name(User) will be converted to plural and sara lower case m ho jayega
// upar ka User database m "users" ke name se save hoga and that also everything in lowercase i.e plural and lowercase
users;
