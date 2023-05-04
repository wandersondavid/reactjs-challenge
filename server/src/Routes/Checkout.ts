import { FastifyInstance } from "fastify"
const stripe = require('stripe')('');

const YOUR_DOMAIN = "http://localhost:5173"

export async function checkoutRoutes(fastify: FastifyInstance) {
  fastify.post('/create-checkout-session', async (request, reply) => {

    const body = request.body

    try {

      const session = await stripe.checkout.sessions.create({
        line_items: body,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/buying`,
      });

      reply.send({url: session.url});
    } catch (error: any) {
      throw new Error(error)
    }

  })

}