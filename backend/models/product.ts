import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  coffeeShopId: mongoose.Schema.Types.ObjectId;
  name: string;
  price: number;
  category: string;
}

const productSchema: Schema = new Schema({
  coffeeShopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoffeeShop",
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

export default mongoose.model<IProduct>("Product", productSchema);
