import { FastifyInstance } from "fastify"
import 'dotenv/config'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const FRONT_DOMAIN = process.env.FRONT_DOMAIN

const stripe = require('stripe')(STRIPE_SECRET_KEY);


export async function checkoutRoutes(fastify: FastifyInstance) {
  fastify.post('/create-checkout-session', async (request, reply) => {

    const body = request.body

    try {

      const session = await stripe.checkout.sessions.create({
        line_items: body,
        mode: 'payment',
        success_url: `${FRONT_DOMAIN}/success`,
        cancel_url: `${FRONT_DOMAIN}/buying`,
      });

      reply.send({url: session.url});
    } catch (error: any) {
      throw new Error(error)
    }

  })

}