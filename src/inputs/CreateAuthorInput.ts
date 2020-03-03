import {InputType, Field} from "type-graphql";

@InputType()
export class CreateAuthorInput {
    @Field(type => String)
    name: string;
}
