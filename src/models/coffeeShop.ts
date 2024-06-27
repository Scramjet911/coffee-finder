import mongoose, { Document, Schema } from 'mongoose';

export interface ICoffeeShop extends Document {
    name: string;
    address?: string;
    location: {
        type: 'Point',
        coordinates: number[]
    };
    rating: number;
    image?: string;
    description?: string;
}

const coffeeShopSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
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
coffeeShopSchema.index({ location: '2dsphere', name: 'text' })

export default mongoose.model<ICoffeeShop>('CoffeeShop', coffeeShopSchema);
