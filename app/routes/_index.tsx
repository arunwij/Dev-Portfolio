import Badge from "~/components/Badge";
import IconAws from "~/components/IconAws";
import IconCube from "~/components/IconCube";
import IconCurlyBrace from "~/components/IconCurlyBrace";
import IconDb from "~/components/IconDb";
import IconNodeJs from "~/components/IconNodeJs";
import IconReact from "~/components/IconReact";
import IconRedux from "~/components/IconRedux";
import IconTypescript from "~/components/IconTypescript";
import Contact from "~/components/sections/Contact";
import Projects from "~/components/sections/Projects";
import WorkExperience from "~/components/sections/WorkExperience";

//  Main file
export default function Index() {
  return (
    <main className="container py-5 px-5 mx-auto max-w-screen-sm h-100">
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 justify-center items-start pr-5">
          <h1 className="text-4xl tracking-wide font-medium">
            Aruna Wijerathna
          </h1>
          <h2 className="text-2xl text-slate-400">
            Software Engineer in Sri Lanka
          </h2>
        </div>
        <div className="flex-1">
          <img
            src="img/profile1.png"
            alt="profile_picture_1"
            className="aspect-square border-2 rounded-full"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Badge
          label="Software Engineer"
          renderIconStart={({ className }) => {
            return <IconCurlyBrace className={`${className} text-red-500`} />;
          }}
        />
        <Badge
          label="Serverless Developer"
          renderIconStart={({ className }) => {
            return <IconCurlyBrace className={`${className} text-red-500`} />;
          }}
        />
        <Badge
          label="Node.js"
          renderIconStart={({ className }) => {
            return (
              <IconNodeJs className={`${className} w-5 mr-2 text-green-600`} />
            );
          }}
        />
        <Badge
          label="React"
          renderIconStart={({ className }) => {
            return (
              <IconReact className={`${className} w-5 mr-2 text-blue-400`} />
            );
          }}
        />
        <Badge
          label="Redux"
          renderIconStart={({ className }) => {
            return (
              <IconRedux className={`${className} w-5 mr-2 text-violet-500`} />
            );
          }}
        />
        <Badge
          label="TypeScript"
          renderIconStart={({ className }) => {
            return (
              <IconTypescript
                className={`${className} w-4 mr-2 text-blue-600`}
              />
            );
          }}
        />
        <Badge
          label="MongoDB"
          renderIconStart={({ className }) => {
            return (
              <IconDb className={`${className} w-4 mr-2 text-green-500`} />
            );
          }}
        />
        <Badge
          label="DynamoDB"
          renderIconStart={({ className }) => {
            return <IconDb className={`${className} w-4 mr-2 text-blue-500`} />;
          }}
        />
        <Badge
          label="SQL"
          renderIconStart={({ className }) => {
            return (
              <IconDb className={`${className} w-4 mr-2 text-orange-400`} />
            );
          }}
        />
        <Badge
          label="AWS"
          renderIconStart={({ className }) => {
            return (
              <IconAws className={`${className} w-4 mr-2 text-orange-500`} />
            );
          }}
        />
      </div>
      <p className="mt-8">
        Hey there, it's great to meet you! My name is Aruna, and I'm thrilled to
        be here as an experienced software engineer. I have a passion for
        creating innovative solutions that solve real-world problems, and I'm
        excited to bring that same level of enthusiasm and expertise to your
        project. With a strong track record of designing successful solutions
        for multiple clients, I'm confident that I can deliver high-quality
        results for you too. So if you're ready to take your next big project to
        the next level, let's work together to turn your vision into reality!
      </p>

      <div className="mt-8">
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
