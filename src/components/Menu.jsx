import IconUser from "./IconUser";

export default function MenuTopBar() {
  return (
    <header className="bg-blue-500 p-1 drop-shadow-md">
      <nav className="container m-auto">
        <section className=" flex flex-row justify-between items-center">
          <ul className="flex flex-row ">
            <li className="li-menu cursor-pointer">
              <a>Task To-Do</a>
            </li>
            <li className="li-menu cursor-pointer">
              <a>Galeria</a>
            </li>
          </ul>
          <IconUser />
        </section>
      </nav>
    </header>
  );
}
