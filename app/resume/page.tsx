import { SiteConfig } from "@/lib/config";
import { redirect } from "next/navigation";

const Resume = () => {
  redirect(SiteConfig.resumeLink);
};

export default Resume;
