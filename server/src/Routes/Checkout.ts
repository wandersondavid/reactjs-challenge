import { FastifyInstance } from "fastify"
import 'dotenv/config'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const FRONT_DOMAIN = process.env.FRONT_DOMAIN

const stripe = require('stripe')(STRIPE_SECRET_KEY);

type product = {
  price: string,
  quantity: number
}

type body = {
  line_items: product[],
}

export async function checkoutRoutes(fastify: FastifyInstance) {
  fastify.post('/create-checkout-session', async (request, reply) => {

    const body = request.body as body

    if(!body.line_items.length) throw new Error('No line items provided')

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