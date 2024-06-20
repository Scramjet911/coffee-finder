import mongoose, { Document, Schema } from "mongoose";

export interface ICoffeeShop extends Document {
  name: string;
  location: string;
  rating: number;
  image: string;
}

const coffeeShopSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model<ICoffeeShop>("CoffeeShop", coffeeShopSchema);
