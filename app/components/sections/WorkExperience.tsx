import Link from "../Link";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

export default function WorkExperience() {
  return (
    <Section>
      <SectionTitle label="Work Experience" />
      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <ul className="list-disc pl-5">
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">
                  Technical Lead (Associate)
                </h2>
                <h3>2021 - Present</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-blue-500 underline"
                >
                  <h3>Deep Data Insight</h3>
                </Link>
              </div>
            </li>
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">Software Engineer</h2>
                <h3>2019 - 2021</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-blue-500 underline"
                >
                  <h3>Deep Data Insight</h3>
                </Link>
              </div>
            </li>
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">
                  Software Engineer (Associate)
                </h2>
                <h3>2018 - 2019</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-blue-500 underline"
                >
                  <h3>Deep Data Insight</h3>
                </Link>
              </div>
            </li>
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">
                  Software Engineer (Intern)
                </h2>
                <h3>2016 - 2016</h3>
                <Link
                  href="https://orellabs.com/"
                  className="text-blue-500 underline"
                >
                  <h3>Orange IT Solutions (Rebranded to Orel Labs)</h3>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
