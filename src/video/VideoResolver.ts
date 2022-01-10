import { Arg, Field, InputType, Mutation, Resolver, Query } from "type-graphql";
import { Video } from "./Video";
import VideoSchema from "./VideoSchema";

@InputType()
class VideoInput {
  @Field()
  description: String;

  @Field()
  title: String;

  @Field()
  category: String;
}

@Resolver()
class VideoResolver {
  @Mutation(() => Video)
  async addVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await VideoSchema.create({
      category: videoInput.category,
      description: videoInput.description,
      title: videoInput.title,
    });

    return video;
  }

  @Query(() => [Video])
  async videos() {
    return await VideoSchema.find();
  }
}

export { VideoResolver };
