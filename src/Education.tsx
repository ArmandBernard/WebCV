import { Tag } from "./Tag";

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
    <ul className="flex justify-between">
      {["Maths: A", "Further Maths: B", "Physics: B", "Chemistry: B"].map(
        (grade) => (
          <li>{grade}</li>
        )
      )}
    </ul>
    <h3 className="text-lg my-2">GCSEs</h3>
    <p>10 passes including:</p>
    <ul className="flex justify-between">
      {[
        "Maths: A",
        "Physics: A",
        "Chemistry: A",
        "Biology: A",
        "English language: B",
      ].map((grade) => (
        <li>{grade}</li>
      ))}
    </ul>
  </div>
);
