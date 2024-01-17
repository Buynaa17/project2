import { Chip } from "./work/Chip";

export function Footer() {
  return (
    <div className="flex  flex-col  gap-2 items-center  justify-center  mt-20 ">
      <Chip label="About me" />

      <Chip label="Skill" />
      <Chip label="Work" />
    </div>
  );
}
