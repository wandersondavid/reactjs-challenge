import { FastifyInstance } from "fastify"
import { array, boolean, number, string, z } from "zod";
const stripe = require('stripe')('');

type Price = {
  unit_amount: number;
  currency: string;
}

type Product = {
  name: string;
  description: string;
  images: string[];
  unit_label: string;
  active: boolean;
  price: Price;
}

export async function productRoutes(fastify: FastifyInstance) {
  fastify.post('/create-products', async (request, reply) => {

    try {
      const body = request.body as Product
      if (!body) {
        return reply.status(400).send({ error: 'Invalid product' });
      }

      const productSchema = z.object({
        name: string(),
        description: string(),
        images: array(string()),
        unit_label: string(),
        active: boolean(),
        price: z.object({
          unit_amount: number(),
          currency: string(),
        })
      });

      const product = productSchema.parse(body);

      const  resProducts = await stripe.products.create({
        name: product.name,
        description: product.description,
        images: product.images,
        unit_label: product.unit_label,
        active: product.active,
      });

      const resPrice = await stripe.prices.create({
        product: resProducts.id,
        unit_amount: product.price.unit_amount,
        currency: product.price.currency,
      });

      const data = Object.assign(resProducts, { price: resPrice });

      return reply.send(data);

    } catch (error: any) {
      throw new Error(error)
    }

  });

  fastify.get('/products', async (request, reply) => {

    try {
      const product = await stripe.products.list();

      const price = await stripe.prices.list();

      const include = product.data.map((item: any) => {
        return {
          ...item,
          price: price.data.find((price: any) => price.product === item.id)
        }
      })

      return reply.send(include)

    } catch (error: any) {
      throw new Error(error)
    }

  })

}