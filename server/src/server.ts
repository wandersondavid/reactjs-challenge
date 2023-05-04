import Fastify from "fastify";
import cors from "@fastify/cors";

import { checkoutRoutes } from "./Routes/Checkout"
import { productRoutes } from "./Routes/Product"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  await fastify.register(cors, {
    origin: true,
  })


  await fastify.register(checkoutRoutes)
  await fastify.register(productRoutes)


  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()
