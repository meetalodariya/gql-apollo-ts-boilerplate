import { Resolver, Query, Arg } from "type-graphql";
import { Recipe } from "../entities/Recipe";

@Resolver(Recipe)
export class RecipeResolver {
  @Query(() => Recipe)
  async recipe(@Arg("id") _: string) {
    return {
      id: "123",
      title: "asdfasdfasdf",
      description: "description",
      creationDate: new Date(),
      ingredients: ["salt", "pepper"],
    };
  }

  // @Query((returns) => [Recipe])
  // recipes(@Args() { skip, take }: RecipesArgs) {
  // }

  // @Mutation((returns) => Recipe)
  // addRecipe(
  //   @Arg("newRecipeData") newRecipeData: NewRecipeInput,
  //   @Ctx("user") user: User
  // ): Promise<Recipe> {
  // }
}
