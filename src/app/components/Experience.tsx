import { TagList } from "./TagList";
import { Timeline } from "./Timeline";
import { TimelineSegment } from "./TimelineSegment";

export const Experience = () => (
  <div className="break-before">
    <h2>Experience</h2>
    <Timeline>
      <TimelineSegment
        timelineText={
          <>
            <p>Present</p>(updated Dec 2024)
          </>
        }
      >
        <div className="flex flex-col gap-2">
          <h3>
            Software Engineer at{" "}
            <a href="https://www.red-gate.com/">Redgate Software</a>
          </h3>

          <h4>
            <a href="https://www.red-gate.com/products/test-data-manager/">
              Test Data Manager
            </a>{" "}
            product (2024 - now)
          </h4>
          <TagList aria-label="technologies">
            <TagList.Item>.NET Core</TagList.Item>
            <TagList.Item>CircleCI</TagList.Item>
            <TagList.Item>C#</TagList.Item>
            <TagList.Item>MUI</TagList.Item>
            <TagList.Item>Postgres</TagList.Item>
            <TagList.Item>React</TagList.Item>
            <TagList.Item>SQL</TagList.Item>
            <TagList.Item>TypeScript</TagList.Item>
            <TagList.Item>Unit testing</TagList.Item>
            <TagList.Item>End-to-end testing</TagList.Item>
          </TagList>
          <p>
            Brought onto TDM (Test Data Manager) product to improve front-end
            standards and upskill engineers. TDM had been in development for 1
            year at the time. TDM is a product for making copies production data
            without sensitive data and smaller footprint for developers to test
            against.
          </p>
          <p>
            Organised the Honeycomb Champions, a{" "}
            <b>cross-team initiative and working group</b> to:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Upskill one person per team in front-end so they can be the go-to
              person for front-end.
            </li>
            <li>
              Make improvements to the front-end&apos;s architecture and
              quality.
            </li>
            <li>
              Implement the latest design system guidance and improve said
              design system.
            </li>
          </ul>
          <p>Mainline work around orchestration including:</p>
          <ul className="list-disc pl-8">
            <li>
              Designing an easy to use system for error handling. Includes:
              Standard error types, error handling middleware, error display
              componentry.
            </li>
            <li>
              Helping to build and integrate a <b>cross-database</b> (SQL
              Server, Postgres, MySQL) <b>database provisioning</b> system.
            </li>
            <li>Helping design each piece of UI work with the designers.</li>
            <li>Writing product documentation.</li>
            <li>
              Implementing synchronization of data with other Redgate products
              via API calls and scheduled sync jobs.
            </li>
            <li>
              Running a small team for 2 months to help transform our UI and
              APIs for our new Workflows approach to test data management.
            </li>
            <li>
              Refactoring our tests and CI processes to be faster and easier to
              understand.
            </li>
          </ul>
          <p>Other improvements:</p>
          <ul className="list-disc pl-8">
            <li>Creating a type-safe system for calling API endpoints.</li>
            <li>Fixing all accessibility issues in the product.</li>
            <li>
              Modifying <b>working practices</b> to ensure high accessibility is
              maintained.
            </li>
            <li>Implementing feature flags to help reduce branch life.</li>
            <li>Adding many linters to improve code quality.</li>
            <li>
              Pushing for a product-wide Git policy (rebase + merge-commit).
            </li>
            <li>
              Making an official dark theme possible by enforcing the use of
              semantic colours.
            </li>
            <li>
              Implementing front-end <b>code-splitting</b> to improve first-load
              performance.
            </li>
            <li>
              Performance and responsiveness optimization of large React pages.
            </li>
          </ul>

          <h4>Honeycomb Design System (2021-2024, alongside regular work)</h4>
          <TagList aria-label="technologies">
            <TagList.Item>CircleCI</TagList.Item>
            <TagList.Item>Design system</TagList.Item>
            <TagList.Item>GitHub Actions</TagList.Item>
            <TagList.Item>MUI</TagList.Item>
            <TagList.Item>React</TagList.Item>
            <TagList.Item>TypeScript</TagList.Item>
            <TagList.Item>Tailwind</TagList.Item>
          </TagList>
          <p>
            Heavily involved in the development and maintenance of the
            Redgate&apos;s <b>design system</b>, Honeycomb.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Strategy calls with the stakeholders and backers of the design
              system, including the heads of Engineering and Design.
            </li>
            <li>
              Helping to <b>choose the technologies and libraries</b> to use for
              the newest implementation.
            </li>
            <li>
              Writing <b>CI/CD</b> pipeline using GitHub Actions, bash, npm.
            </li>
            <li>Migrating from GitHub Actions to CircleCI</li>
            <li>Designing new patterns in collaboration with designers.</li>
            <li>
              Co-hosting a <b>workshop</b> at the company conference on how to
              use MUI, including a talk about how to develop accessible
              components with MUI.
            </li>
            <li>
              Several <b>talks</b> on best practices: Which components to use in
              what situation and how.
            </li>
            <li>
              Several <b>deep-dives</b> on MUI functionality.
            </li>
            <li>Writing automated screenshot tests</li>
          </ul>

          <h4>
            <a href="https://www.red-gate.com/products/redgate-monitor/">
              Redgate Monitor
            </a>{" "}
            product (2021-2023)
          </h4>
          <TagList aria-label="technologies">
            <TagList.Item>.NET Core</TagList.Item>
            <TagList.Item>C#</TagList.Item>
            <TagList.Item>React</TagList.Item>
            <TagList.Item>SQL</TagList.Item>
            <TagList.Item>Tailwind</TagList.Item>
            <TagList.Item>TypeScript</TagList.Item>
            <TagList.Item>Unit testing</TagList.Item>
          </TagList>
          <p>
            Worked as a full-stack software engineer on Redgate Monitor
            (formerly SQL Monitor), a mature (13+ years) database monitoring
            tool targeted at database administrators. At the time, SQL Monitor
            had 3-4 dev teams with 5-6 people in each. At this point they are at
            7 such teams.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Worked on many of the core features of the product, including:
              tags, current activity, query search, recommendations, query
              tracking, top queries and procedures, query impact and actual
              plans. Just to name a few.
            </li>
            <li>
              <b>Front-end</b> web-app development using{" "}
              <b>TypeScript, React and Tailwind</b>.
            </li>
            <li>
              Writing <b>front-end unit tests</b> using Jest and React Testing
              Library.
            </li>
            <li>
              <b>MVC</b> and <b>WebAPI</b> back-end development with{" "}
              <b>.NET Core</b> and C#.
            </li>
            <li>
              Writing <b>back-end unit and integration tests</b> using NUnit,
              NSubstitute, Fluent Assertions.
            </li>
            <li>
              Writing a wide range of <b>T-SQL</b> scripts for monitoring client
              dbs and storing data in a local SQL Server repository.
            </li>
            <li>
              Championing <b>accessibility</b> and improving it around the
              product.
            </li>
            <li>
              Migrating code from older frameworks such as jQuery and Knockout
              to React.
            </li>
            <li>
              Planning and participating in front-end improvement task forces.
            </li>
          </ul>
          <p>
            Championing <b>accessibility</b> and improving it in the following
            ways:
          </p>
          <ul className="list-disc pl-8">
            <li>
              More accessibility focused PRs than anyone else in the product.
            </li>
            <li>
              Creating a tool to{" "}
              <b>automatically collect metrics on the accessibility</b> of SQL
              Monitor to track our accessibility journey. The data is hosted in
              Azure and a Grafana dashboard was created to visualise the data.
            </li>
            <li>
              Introducing linters to shift-left the resolution of accessibility
              issues.
            </li>
          </ul>
        </div>
      </TimelineSegment>
      <TimelineSegment timelineText="Oct 2021">
        <div className="flex flex-col gap-2">
          <h3>
            Manufacturing Engineer at{" "}
            <a href="https://www.borgwarner.com/home">BorgWarner</a>
          </h3>
          <TagList aria-label="technologies">
            <TagList.Item>.NET Framework</TagList.Item>
            <TagList.Item>C#</TagList.Item>
            <TagList.Item>Machine Learning</TagList.Item>
            <TagList.Item>Machine Vision</TagList.Item>
            <TagList.Item>SQL</TagList.Item>
            <TagList.Item>WinForms</TagList.Item>
            <TagList.Item>WiX Toolset</TagList.Item>
          </TagList>
          <p className="italic">
            Continuation of the previous role after BorgWarner acquisition of
            Delphi Technologies.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Spear-heading use of <b>Machine Learning</b> for root-cause
              analysis and predictive maintenance on site via{" "}
              <a href="https://rapidminer.com/">RapidMiner</a>.
            </li>
            <li>
              Development of a system for detecting screw thread damage via{" "}
              <b>machine vision</b>.
              <br />
              Wrote edge detection algorithms and <b>image filters</b> for
              detecting damage.
              <br />
              Wrote <b>highly custom UI components</b> for superimposing
              displaying the damage to the user respectively.
            </li>
            <li>
              Creation of <b>admin tools</b> for configuring SQL Servers
              including:
              <br />
              Mapping network drives, managing Windows services (via <b>WMI</b>
              ), writing <b>T-SQL</b>, and monitoring databases.
            </li>
            <li>
              Introduction of the use of <b>Grafana</b> to the site. This
              included providing training for engineers and making Grafana
              dashboards for many use-cases including: Production statistics,
              downtime monitoring, measurement job management.
            </li>
          </ul>
        </div>
      </TimelineSegment>
      <TimelineSegment timelineText="Oct 2020">
        <div className="flex flex-col gap-2">
          <h3>
            Manufacturing Engineer at{" "}
            <a href="https://www.delphiautoparts.com/">Delphi Technologies</a>
          </h3>
          <TagList aria-label="technologies">
            <TagList.Item>.NET Framework</TagList.Item>
            <TagList.Item>C#</TagList.Item>
            <TagList.Item>Machine Vision</TagList.Item>
            <TagList.Item>SQL</TagList.Item>
            <TagList.Item>WinForms</TagList.Item>
            <TagList.Item>WiX Toolset</TagList.Item>
          </TagList>
          <p>
            Worked as the sole developer in the Continuous Improvement team, a
            small cross-disciplinary team of manufacturing engineers and
            technicians. The team&apos;s goal was to create or improve systems
            around the factory.
          </p>
          <p>
            Designed, developed and tested all applications mentioned below.
            Tech stack was mostly <b>.NET Framework, C# and WinForms</b>.
          </p>
          <ul className="list-disc pl-8">
            <li>
              A multi-application system for scheduling and completing machine
              maintenance.
              <br />
              Included: A <b>touch-friendly</b> GUI designed for tablets, a
              fully <b>custom Gantt chart component</b>, email notifications,
              multiple authentication methods, QR Code reading.
            </li>
            <li>
              A <b>microcontroller</b>-based interlock system for quality
              control.
            </li>
            <li>
              An <b>email-server</b> for daily statistics reporting with{" "}
              <b>user-configurable SQL data plotting</b> capabilities.
            </li>
            <li>
              A multi-application system for managing metrology jobs.
              <br />
              Included a touch-friendly GUI for registering jobs, TV
              announcement screens, <b>notifications</b> on remote machines.
              Also integrated 2D code scanning, <b>RFID badge authentication</b>{" "}
              and statistics collection.
            </li>
            <li>
              Writing installers with the{" "}
              <a href="https://wixtoolset.org/">WiX toolset</a> with automatic
              updates via TeamCity.
            </li>
            <li>
              Fail-safe, always running code for communication with{" "}
              <a href="https://www.cognex.com/">COGNEX</a> machine vision
              cameras via <b>TCP/IP and Serial.</b>
            </li>
          </ul>
        </div>
      </TimelineSegment>
      <TimelineSegment timelineText="May 2019">
        <i>Searching for work</i>
      </TimelineSegment>
      <TimelineSegment timelineText="Sep 2018">
        <i>University</i>
      </TimelineSegment>
      <TimelineSegment timelineText="Sep 2016">
        <div className="flex flex-col gap-2">
          <h3>Placement at Atkins engineering consultancy</h3>
          <TagList aria-label="technologies">
            <TagList.Item>.NET Framework</TagList.Item>
            <TagList.Item>VBA</TagList.Item>
            <TagList.Item>WinForms</TagList.Item>
          </TagList>
          <p>
            1 year placement working as a civil/mechanical engineer. Mix of
            engineering work and trying to improve internal systems in
            down-time.
          </p>
          <p>
            Engineering work was around structural verification of davit cranes
            for use on offshore wind farms. It included:
          </p>
          <ul className="list-disc pl-8">
            <li>Producing Mathcad calculations/simulations.</li>
            <li>Writing design and FMEA documents.</li>
          </ul>
          <p>
            A significant amount of downtime between projects allowed for the
            writing of several pieces of software using{" "}
            <b>Visual Basic for Applications</b>. The use-cases included:
          </p>
          <ul className="list-disc pl-8">
            <li>Project planning and pricing.</li>
            <li>Scheduling and summarising simulations.</li>
            <li>
              Generating documents from templates using MS Word and Adobe
              Acrobat APIs.
            </li>
          </ul>
        </div>
      </TimelineSegment>
      <TimelineSegment timelineText="Sep 2015">
        <i>University</i>
      </TimelineSegment>
      <TimelineSegment timelineText="Sep 2013">
        <i>University started</i>
      </TimelineSegment>
    </Timeline>
  </div>
);
