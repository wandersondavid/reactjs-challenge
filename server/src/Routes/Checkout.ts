import { FastifyInstance } from "fastify"
import 'dotenv/config'
import { z } from "zod";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const FRONT_DOMAIN = process.env.FRONT_DOMAIN

const stripe = require('stripe')(STRIPE_SECRET_KEY);

type product = {
  price: string,
  quantity: number
}

export async function checkoutRoutes(fastify: FastifyInstance) {
  fastify.post('/create-checkout-session', async (request, reply) => {

    const body = request.body as product[]

    try {
      if (!body.length) throw new Error('No line items provided');

      const schema = z.array(z.object({
        price: z.string().nonempty('Price must be a non-empty string'),
        quantity: z.number().positive('Quantity must be a positive number').int('Quantity must be an integer'),
      }));

      const data = schema.parse(body);

      const session = await stripe.checkout.sessions.create({
        line_items: data,
        mode: 'payment',
        success_url: `${FRONT_DOMAIN}/success`,
        cancel_url: `${FRONT_DOMAIN}/buying`,
      });

      reply.send({ url: session.url });
    } catch (error: any) {
      throw new Error(error)
    }

  })

}