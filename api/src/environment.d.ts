declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FRONT_DOMAIN: string;
      STRIPE_SECRET_KEY: string;
      PORT: number;
    }
  }
}

export {};
