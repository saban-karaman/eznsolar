import mongoose from 'mongoose'

const orderList = new mongoose.Schema({
    orderItems: [{
        name: {
            type: String,
            required: true,
        },
        price: {
            type:Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }],
    user: {
        ad: { type: String, required: true },
        soyad: { type: String, required: true },
        email: { type: String, required: true },
        tel: { type: String, required: true },
        tc: { type: Number, required: true },
        vergiDaire: { type: String }
    },
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true }
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 100.00,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "PayTR",
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
})

const Order = mongoose.models.Order || mongoose.model("Order", orderList)


export default Order;