import Card from "./Card"

const TopRated = () => {
  return (
    <section className="flex flex-col items-center gap-14 my-10 max-w-[1440px] mx-auto">
      <h2 className="font-bold text-3xl">Top Rated Recipes</h2>

      <div className="grid grid-cols-3 px-10 gap-4">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default TopRated