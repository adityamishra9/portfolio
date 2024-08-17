import About from "@/components/aboutSection/About";
import GithubContributions from "@/components/GithubContributions";
import ScrollingText from "@/components/ScrollingText";
import SkillsStagger from "@/components/skills/SkillsStagger";

import {
  AboutCardDp,
  AboutCardFullPicture,
  AboutCardProjects,
  AboutCardToolbox,
  MeetingScheduling,
  Resume,
} from "@/components/aboutSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-36">
      <GithubContributions />
      <ScrollingText text="I'm an experienced front-end developer with a passion for design and a knack for tinkering. Web development is my playground, where push boundaries and chase new horizons." />
      <About items={items} />
      <SkillsStagger />
    </div>
  );
}

const items: {
  className?: string;
  content?: React.ReactNode;
}[] = [
  {
    className: "col-span-1 md:col-span-1 row-span-2",
    content: <AboutCardFullPicture />,
  },
  {
    className: "hidden md:block md:col-span-3",
    content: <MeetingScheduling />,
  },
  {
    className: "md:hidden col-span-2",
    content: <Resume />,
  },
  {
    className: "col-span-2 md:col-span-1",
    content: <AboutCardDp />,
  },
  {
    className: "col-span-3 md:col-span-2 row-span-1 md:row-span-2",
    content: <AboutCardToolbox />,
  },
  {
    className: "col-span-3 md:col-span-2 row-span-1",
    content: <AboutCardProjects />,
  },
];
