import { Logo } from "./Icons/Logo";
import { Menuitems } from "./Menuitems";
import { About } from "./about/About";
import { Button } from "./button/Button";
import { Contact } from "./contact/Contact";
import { Menu } from "./menu/Menu";
import { Icon } from "./sun icon/Icon";
import { Test } from "./test/Test";
import { Work } from "./work/Work";

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
          {/* <About />
        <Work />
        <Test />s
        <Contact /> */}
          <Icon />
          <Button />
        </div>
      </div>
    </div>
  );
}
