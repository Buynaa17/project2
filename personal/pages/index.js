import { Header } from "../compoments/Header";
import { Footer } from "../compoments/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container px-2 mx-auto lg:flex ">
        <div className="flex justify-center order-2 mt-10">
          <img src="/images/profile.png" alt="profile" />
          <div className="order-1 mt-20">
            <h2 className="text-4xl">Hi,I am Sahar 👋</h2>
            <p className="mt-2 text-base text-slate-500">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
