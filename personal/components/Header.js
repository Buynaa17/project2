import { Logo } from "./Icons/Logo";
import { Menuitems } from "./Menuitems";
import { Button } from "./button/Button";
import { Menu } from "./menu/Menu";
import { Icon } from "./sun icon/Icon";

export function Header() {
  const menuitems = [
    { label: "About", link: "/about" },
    { label: "Work", link: "/work" },
    { label: "Test", link: "/test" },
    { label: "Contact", link: "/contact" },
  ];
  return (
    <div className="hidden sm:flex bolrder-2  p-4">
      <div className="flex justify-between ">
        <Logo />
        <div className="flex  justify-between">
          <Menu />
          <Menuitems items={menuitems} />
          <Icon />
          <Button />
        </div>
      </div>
    </div>
  );
}
