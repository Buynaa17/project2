import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Body } from "@/components/Body";
import { Actions } from "@/components/Actions";
import { Container } from "@/components/Container";
import { Chip } from "@/components/work/Chip";
import { Skills } from "@/components/sun icon/Skillss";
import { SkillIcon } from "@/components/sun icon/SkillIcon";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container px-2 mx-auto sm:flex ">
        <div className="flex justify-center order-2 mt-10">
          <img
            className="  w-72 h-80 "
            src="/images/profile.png"
            alt="profile"
          />
        </div>
        <div className="order-1 mt-20 sm:block">
          <h2 className="text-4xl">Hi,I am Sahar 👋</h2>
          <p className="mt-2 text-base text-slate-500">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <Body />
          <div className=" mt-5">
            <Actions />
          </div>
          <div className="flex flex-col gap-2  items-center justify-center">
            <Chip label={"About me"} />
          </div>
        </div>
      </div>
      <Container />

      <div className="flex flex-col gap-2  items-center justify-center">
        <Chip label={"Skills"} />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <SkillIcon />
        <Footer />
      </div>
    </div>
  );
}
