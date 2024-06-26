import mongoose, { Document, Schema } from 'mongoose';

export interface ICoffeeShop extends Document {
    name: string;
    location: string;
    rating: number;
    image?: string;
    description?: string;
}

const coffeeShopSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    location: {
        type: String,
        required: true,
        index: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
});

coffeeShopSchema.set('toJSON', {
    virtuals: true
});

export default mongoose.model<ICoffeeShop>('CoffeeShop', coffeeShopSchema);
