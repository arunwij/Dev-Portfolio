import Link from "~/components/Link";
import Section from "~/components/Section";
import SectionTitle from "~/components/SectionTitle";

export default function WorkExperience() {
  return (
    <Section>
      <SectionTitle label="Work Experience" />
      <div className="mt-6">
        <div className="border rounded-lg p-5">
          <ul className="list-disc pl-5">
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">Technical Lead</h2>
                <h3>2023 Mar - Present</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-green-700 text-sm font-semibold"
                >
                  <h3>Deep Data Insight</h3>
                </Link>
              </div>
            </li>
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">
                  Technical Lead (Associate)
                </h2>
                <h3>2021 Jul - 2023 Mar</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-green-700 text-sm font-semibold"
                >
                  <h3>Deep Data Insight</h3>
                </Link>
              </div>
            </li>
            <li>
              <div className="mb-4">
                <h2 className="font-bold text-lg">Software Engineer</h2>
                <h3>2019 Jan - 2021 Jul</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-green-700 text-sm font-semibold"
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
                <h3>2018 June - 2019 Jan</h3>
                <Link
                  href="https://www.deepdatainsight.com/"
                  className="text-green-700 text-sm font-semibold"
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
                <h3>2016 May - 2016 Nov</h3>
                <Link
                  href="https://orellabs.com/"
                  className="text-green-700 text-sm font-semibold"
                >
                  <h3>Orange IT Services (Rebranded to Orel Labs)</h3>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
