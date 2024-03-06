const instance=require(".././index.js")
const crypto=require("crypto")
const Payment=require("../Models/paymentModel.js")

const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    // amount:50000,
    currency: "INR",
  };
  console.log(instance)
  const order = await instance.orders.create(options);
  console.log(order)
  res.status(200).json({order});
};


//  const paymentVerification = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   const isAuthentic = expectedSignature === razorpay_signature;

//   if (isAuthentic) {
//     // Database comes here

//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     });

//     res.redirect(
//       `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
//     );
//   } else {
//     res.status(400).json({
//       success: false,
//     });
//   }
// };
module.exports={checkout,paymentverification}