import { Logo } from "./Icons/Logo";
import { MainMenu } from "./MainMenu";
import { Button } from "./button/Button";
import { Menu } from "./menu/Menu";
import { menuitems } from "./data/menuItems";
import { ThemeChanger } from "./Icons/Themechanger";

export function Header() {
  return (
    <div className="flex justify-between bolrder-2  p-4">
      <div className="">
        <Logo />
      </div>
      <div className="flex">
        <div className="flex sm:hidden">
          <Menu />
        </div>{" "}
        <ThemeChanger />
        <div className=" hidden sm:flex">
          <MainMenu items={menuitems} />

          <Button />
        </div>
      </div>
    </div>
  );
}
