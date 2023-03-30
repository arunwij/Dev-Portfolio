import Badge from "~/components/Badge";
import IconRole from "~/components/IconRole";
import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";
import Expand from "../Expand";
import Link from "../Link";

const badgeClassName = "text-slate-900 bg-gray-200 border-gray-200";

// Projects Section
export default function Projects() {
  return (
    <Section>
      <SectionTitle label="Projects" />
      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <h2 className="font-bold text-xl">Family Connect</h2>
          <label className="font-bold text-sm text-green-700 inline-flex items-center leading-9">
            <IconRole className="w-3 mr-1" />
            Technical Lead, Backend Engineer
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge
              label="Serverless Framework"
              size="sm"
              className={badgeClassName}
            />
            <Badge label="Node.js" size="sm" className={badgeClassName} />
            <Badge label="DynamoDB" size="sm" className={badgeClassName} />
            <Badge label="Typescript" size="sm" className={badgeClassName} />
            <Badge label="AppSync" size="sm" className={badgeClassName} />
            <Badge label="API Gateway" size="sm" className={badgeClassName} />
            <Badge label="Cognito" size="sm" className={badgeClassName} />
            <Badge label="S3" size="sm" className={badgeClassName} />
            <Badge label="SNS" size="sm" className={badgeClassName} />
            <Badge label="SES" size="sm" className={badgeClassName} />
            <Badge
              label="Firebase Cloud Messaging"
              size="sm"
              className={badgeClassName}
            />
            <Badge label="Code Pipeline" size="sm" className={badgeClassName} />
            <Badge label="Amplify" size="sm" className={badgeClassName} />
          </div>
          <p className="mt-4">
            Family Connect is health, wellness and family communication tablet
            for senior adults. As the senior population continually increases,
            this comprehensive software provides families with insight into the
            lives of their senior family member and their health journey at
            their fingertips
          </p>

          <h5 className="font-semibold mt-2">Key Responsibilities</h5>
          <ul className="list-disc pl-4">
            <li>
              Communicate with customer to identify technical requirements.
            </li>
            <li>Application architecture design.</li>
            <li>Database design.</li>
            <li>
              Create Estimates with the Technical team and the project manager
              and make sure the team hits all technical milestones.
            </li>
            <li>Code reviews and ensure code quality.</li>
            <li>Setting up and managing deployment pipelines.</li>
            <li>API development.</li>
            <li>Produce technical documentations.</li>
          </ul>

          <Expand>
            <div className="flex flex-col items-center">
              <img
                src="img/fc_home.png"
                alt="family-connect-member-app-home"
                className="w-96"
              />

              <img
                src="img/fc_vitals.png"
                alt="family-connect-member-app-home"
                className="w-96"
              />
            </div>
          </Expand>
        </div>
      </div>

      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <Link
            href="https://spot.lk/"
            className="hover:underline hover:text-green-700"
          >
            <h2 className="font-bold text-xl">Spot.lk</h2>
          </Link>

          <label className="font-bold text-sm text-green-700 inline-flex items-center leading-9">
            <IconRole className="w-3 mr-1" />
            Team Lead
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge label="React" size="sm" className={badgeClassName} />
            <Badge label="Python" size="sm" className={badgeClassName} />
            <Badge label="Flask" size="sm" className={badgeClassName} />
            <Badge label="NGINX" size="sm" className={badgeClassName} />
            <Badge label="MongoDB" size="sm" className={badgeClassName} />
          </div>
          <p className="mt-4">
            Spot is Human Capital Platform operating with the primary goal of
            utilizing AI to bridge the gap between the talent and the
            organizations. Our platform provides talented individuals a place to
            manage and showcase their portfolios while applying and
            automatically getting recommended for the best suited talent
            vacancies. To the organizations, we provide a full suite of features
            covering everything from Job advertising, AI recommendations for
            best matching talent, IQ / Personality and Technical tests for the
            applicants and Applicant Tracking System.
          </p>

          <h5 className="font-semibold mt-2">Key Responsibilities</h5>
          <ul className="list-disc pl-4">
            <li>
              Identify requirements and key goals of the applications with Key
              Stakeholders.
            </li>
            <li>
              Done R&D to identify tools and technologies to assist the
              development team.
            </li>
            <li>Oversight technical development.</li>
            <li>Code reviews & ensure code quality.</li>
            <li>Setting up and managing deployment pipelines.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <h2 className="font-bold text-xl">Fit Insights</h2>
          <label className="font-bold text-sm text-green-700 inline-flex items-center leading-9">
            <IconRole className="w-3 mr-1" />
            Fullstack Engineer
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge label="React" size="sm" className={badgeClassName} />
            <Badge label="Redux" size="sm" className={badgeClassName} />
            <Badge label="Puppeteer" size="sm" className={badgeClassName} />
            <Badge label="Node.Js" size="sm" className={badgeClassName} />
            <Badge label="UI / UX" size="sm" className={badgeClassName} />
          </div>
          <p className="mt-4">
            FitInsights is portal to player reports with behavioral and social
            insight reports. You can quickly and easily find information you
            need to evaluate the fit of each player to navigate risk, maximize
            strengths and develop untapped potential for the team.
          </p>

          <h5 className="font-semibold mt-2">Key Responsibilities</h5>
          <ul className="list-disc pl-4">
            <li>
              Design UI / UX for efficient access of the portal and display data
              user friendly manner.
            </li>
            <li>Develop the UI with React and Redux.</li>
            <li>Develop Report Generation Engine with Puppeteer and NodeJS.</li>
          </ul>

          <Expand>
            <div className="flex flex-col items-center">
              <img
                src="img/fitinsights2.png"
                alt="fit-insights-candidates"
                className="mt-6"
              />

              <img
                src="img/fitinsights1.png"
                alt="fit-insights-dashboard"
                className="mt-6"
              />
            </div>
          </Expand>
        </div>
      </div>

      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <h2 className="font-bold text-xl">Mirada Media</h2>
          <label className="font-bold text-sm text-green-700 inline-flex items-center leading-9">
            <IconRole className="w-3 mr-1" />
            Backend Engineer
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge label="Node.js" size="sm" className={badgeClassName} />
            <Badge label="C" size="sm" className={badgeClassName} />
            <Badge label="MongoDB" size="sm" className={badgeClassName} />
            <Badge label="Sertainty" size="sm" className={badgeClassName} />
            <Badge label="JMeter" size="sm" className={badgeClassName} />
            <Badge label="AWS" size="sm" className={badgeClassName} />
          </div>
          <p className="mt-4">
            A Media management tool that Creators, Labels, and Studios use to
            streamline their marketing efforts, to promote their creative
            projects, grow their audience, and track media stream royalties.
          </p>

          <h5 className="font-semibold mt-2">Key Responsibilities</h5>
          <ul className="list-disc pl-4">
            <li>
              Design and implement Asset Encryption / Decryption service with
              Sertainty Technology.
            </li>
            <li>
              Write NodeJs wrapper for Sertainty's C language based data
              protection library with Node Foreign Function Interface.
            </li>
            <li>Load testing the service with JMeter.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <Link
            href="https://www.deepdatainsight.com/products/#plexus"
            className="hover:underline hover:text-green-700"
          >
            <h2 className="font-bold text-xl">Plexus | Fresh Chain</h2>
          </Link>

          <label className="font-bold text-sm text-green-700 inline-flex items-center leading-9">
            <IconRole className="w-3 mr-1" />
            Blockchain R&D Engineer
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge label="React" size="sm" className={badgeClassName} />
            <Badge label="Redux" size="sm" className={badgeClassName} />
            <Badge
              label="Hyperledger Indy"
              size="sm"
              className={badgeClassName}
            />
            <Badge
              label="Hyperledger Composer"
              size="sm"
              className={badgeClassName}
            />
            <Badge label="Node.js" size="sm" className={badgeClassName} />
            <Badge label="MongoDB" size="sm" className={badgeClassName} />
            <Badge label="Docker" size="sm" className={badgeClassName} />
          </div>
          <p className="mt-4">
            Plexus is a cutting edge blockchain-backed Digital Identity
            solution. Where an individual can own and control their own Identity
            without depending on third parties. This platform creates a network
            of Digital Identity Providers, Digital Identity Consumers, and
            Validators.
          </p>
        </div>
      </div>
    </Section>
  );
}
