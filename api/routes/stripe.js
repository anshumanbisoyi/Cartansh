const router = require("express").Router();
const dotenv = require("dotenv").config();
const KEY = process.env.STRIPE_KEY;

const stripe = require("stripe")(KEY);

// router.post("/payment", (req, res) => {
//   stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "inr",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });
router.post("/payment", async (req, res) => {
  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      payment_method_types: ['card'],
    });
    res.json({clientSecret: paymentIntent.client_secret});
  } catch(e){
    res.status(400).json({error:{message:e.message}});
  }
});

module.exports = router;
