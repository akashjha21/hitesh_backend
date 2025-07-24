import mongoose from 'mongoose';

// since we need how many quantity of what order someone has placed so we will make one more schema here which will not be exported anywhere but it will be used for the below orderItems

// this schema can be written in different file also and this can be exported there and used here but as this is not used by any other file except here so exporting makes no sence.

// Other than making a schema and using it in the Array of orderItems we can directly make an array there and inside that we can write product id and quantity by making an object as we did earlier in TODO ka sub_todo [{proId:{}},{q:{}}]
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref = "Product",
  },
  quantity: {
    type: Number,
    required: true,
  }
});
const orderSchema = new mongoose.Schema({
  orderPrice:{
    required: true,
    type: String,
  },
  customer: {
    required: true,
    name: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: {
    type: [orderItemSchema], // it is an array of orderItemSchema as there can be multiple number of Order items and all items will have their particular quantity
  },
  address: {
    type: String, // other than this we can also make a separate Schema for address also if we want. Like it will have different fields like pincode, block, post office, etc etc. and pass it here as an array
    required: true,
  },
  status: {
    type: String,
    enum: ["DELIEVERED", "CANCELLED", "ORDERED"],
    default: "ORDERED",
  }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
