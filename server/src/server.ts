import Fastify from "fastify";
import cors from "@fastify/cors";

import { checkoutRoutes } from "./Routes/Checkout"
import { productRoutes } from "./Routes/Product"
import * as dotenv from 'dotenv'

dotenv.config()
import 'dotenv/config'

const PORT = process.env.PORT

async function api() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(checkoutRoutes)
  await fastify.register(productRoutes)


  await fastify.listen({ port: PORT, host: '0.0.0.0' })
}

api()
