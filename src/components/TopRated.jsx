import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

const TopRated = () => {
  const fetchRecipes = async () => {
    const res = await fetch("https://dummyjson.com/recipes?sortBy=rating&order=desc&limit=3");
    const data = await res.json();

    return data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  return (
    <section className="flex flex-col items-center gap-14 my-10 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-3xl">Top Rated Recipes</h2>

      {isPending ? <p>loading....</p> : null}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-4">
        {
          data?.recipes && data.recipes.map(recipe => {
            return <Card img={recipe.image} title={recipe.name} />
          })
        }
      </div>
    </section>
  );
};

export default TopRated;
