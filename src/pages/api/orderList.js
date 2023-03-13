import dbConnect from "@/lib/dbConnect";
import Order from "@/models/Order";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const order = await Order.find({})
                res.status(200).json({ order })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
               
                const {
                    orderItems,
                    user,
                    shippingAddress,
                    shippingPrice,
                    totalPrice,
                    paymentMethod,
                    isPaid,
                    paidAt
                } = req.body;

                const order = await Order.create({
                    orderItems,
                    user,
                    shippingAddress,
                    shippingPrice,
                    totalPrice,
                    paymentMethod,
                    isPaid,
                    paidAt
                });
                if ( !orderItems || !user || !shippingAddress || !shippingPrice || !totalPrice || !paymentMethod || !isPaid || !paidAt) {
                    res.status(201).json({ message: 'Sipariş Alındı' });
                    return;
                  }
                res.status(201).json({ order })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }

}