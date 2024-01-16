import { Logo } from "./Icons/Logo";
import { Menu } from "./menu/Menu";

export function Header() {
  return (
    <div className="border-2 flex justify-between p-4">
      <Logo />
      <div className="sm:flex md:hidden">
        <Menu />
      </div>
      <div className="hidden sm:flex"></div>
    </div>
  );
}
