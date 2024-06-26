import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    coffeeShopId: mongoose.Schema.Types.ObjectId;
    name: string;
    price: number;
    category: string;
    description?: string;
}

const productSchema: Schema = new Schema({
    coffeeShopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CoffeeShop',
        required: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
        index: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        index: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true,
});

productSchema.index({ coffeeShopId: 1, name: 1 }, { unique: true });

export default mongoose.model<IProduct>('Product', productSchema);
