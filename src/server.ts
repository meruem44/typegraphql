import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { VideoResolver } from "./video/VideoResolver";

import "./connection";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, "server is running");
}

bootstrap();
