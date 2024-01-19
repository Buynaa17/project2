import { Logo } from "./Icons/Logo";
import { MainMenu } from "./MainMenu";
import { Button } from "./button/Button";
import { Menu } from "./menu/Menu";
import { Icon } from "./sun icon/Icon";
import { menuitems } from "./data/menuItems";

export function Header() {
  return (
    <div className="flex justify-between bolrder-2  p-4">
      <div className="">
        <Logo />
      </div>
      <div className="flex">
        <div className="flex sm:hidden">
          <Menu />
        </div>
        <div className=" hidden sm:flex">
          <MainMenu items={menuitems} />
          <div className=" mt-2 ml-2 mr-2">
            <Icon />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
