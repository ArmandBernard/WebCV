import { FunctionComponent } from "react";

export const Education = () => (
  <div>
    <h2>Education</h2>
    <h3 id="university" className="text-lg my-2">
      University (2013 - 2018)
    </h3>
    <p>
      <b>1st class MEng</b> (Master of Engineering) in Mechanical Engineering
      from Warwick University.
    </p>
    <h3 className="text-lg my-2">A-levels</h3>
    <GradeList
      grades={[
        ["Maths", "A"],
        ["Further Maths", "B"],
        ["Physics", "B"],
        ["Chemistry", "B"],
      ]}
    />
    <h3 className="text-lg my-2">GCSEs</h3>
    <p>10 passes including:</p>
    <GradeList
      grades={[
        ["Maths", "A"],
        ["Physics", "A"],
        ["Chemistry", "A"],
        ["Biology", "A"],
        ["English language", "B"],
      ]}
    />
  </div>
);

interface GradeListProps {
  grades: [subject: string, grade: string][];
}

const GradeList: FunctionComponent<GradeListProps> = (props) => (
  <ul className="flex justify-between">
    {props.grades.map(([subject, grade]) => (
      <li className="flex gap-2">
        {subject}
        <span className="flex justify-center bg-grade h-6 w-6 rounded-full">
          {grade}
        </span>
      </li>
    ))}
  </ul>
);
