const Navbar = () => {
  return (
    <header className="lg:px-[77px] px-5 max-w-[1440px] mx-auto py-8 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img src="/logo.svg" alt="logo" />
        <h2 className="font-medium text-xl md:text-2xl">Delights at the Table</h2>
      </div>

      <nav className="hidden xl:flex">
        <ul className="flex gap-8 text-2xl font-bold">
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>

      <form className="flex gap-2 items-center py-3 px-5 bg-(--white-200) rounded-3xl">
        <img src="search.svg" alt="" />
        <input
          type="text"
          placeholder="Search recipes"
          className="outline-none"
        />
      </form>
    </header>
  );
};

export default Navbar;
