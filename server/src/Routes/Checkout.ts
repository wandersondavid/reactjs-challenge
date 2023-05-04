import { FastifyInstance } from "fastify"
const stripe = require('stripe')('');

const YOUR_DOMAIN = "http://localhost:5173"

export async function checkoutRoutes(fastify: FastifyInstance) {
  fastify.get('/create-checkout-session', async (request, reply) => {

    try {
      const product = await stripe.products.create({
        "nome": "product",
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: 2000,
        currency: 'brl',
      });

      console.log("product", price)
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/canceled`,
      });

      reply.redirect(303, session.url);
    } catch (error: any) {
      throw new Error(error)
    }

  })

}