import IconGithub from "~/components/IconGithub";
import IconLinkedin from "~/components/IconLinkedin";
import IconTwitter from "~/components/IconTwitter";
import Link from "~/components/Link";
import Section from "~/components/Section";

export default function Contact() {
  return (
    <Section>
      <div className="mt-6">
        <div className="flex flex-col border rounded-lg px-6 py-8 bg-slate-900 text-slate-50">
          <h1 className="self-center text-2xl font-medium">
            Feel free to reach me via email{" "}
            <Link
              href="mailto:arunaswj@gmail.com"
              className="text-green-700 underline"
              target="_blank"
            >
              arunaswj@gmail.com
            </Link>
          </h1>

          <div className="flex space-x-8 mt-8">
            <Link href="https://www.linkedin.com/in/arunwij/">
              <IconLinkedin className="text-slate-50 w-10" />
            </Link>
            <Link href="https://github.com/arunwij">
              <IconGithub className="text-slate-50 w-10" />
            </Link>
            <Link href="https://twitter.com/arunwij">
              <IconTwitter className="text-slate-50 w-10" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
