import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreatePostInput {
    @MinLength(3, { message: 'Title is too short' })
    @MaxLength(30, { message: 'Title is too long' })
    @IsNotEmpty({ message: 'Title is required' })
    @Field()
    title: string;

    @Field({ nullable: true })
    content?: string;

    @IsInt()
    @Field()
    authorId: number;
}
