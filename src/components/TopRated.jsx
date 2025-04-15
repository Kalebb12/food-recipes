import Card from "./Card"

const TopRated = () => {

  const fetchRecipes = async () => {
    const res = await fetch('https://dummyjson.com/recipes')
    const data = await res.json()

    console.log(data)
  }

  fetchRecipes()
  return (
    <section className="flex flex-col items-center gap-14 my-10 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-3xl">Top Rated Recipes</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-4">
        <Card img="/waffles.png" title="waffles"/>
        <Card title="Pancakes"/>
        <Card title="Coffee"/>
      </div>
    </section>
  )
}

export default TopRated