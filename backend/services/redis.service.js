// Redis disabled for local development

const redisClient = {
  get: async () => null,
  set: async () => null,
  del: async () => null,
  flushall: async () => null,
  on: () => null,
};

export default redisClient;
