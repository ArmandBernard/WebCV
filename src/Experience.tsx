import { TagList } from "./TagList";
import { Timeline } from "./Timeline";
import { TimelineSegment } from "./TimelineSegment";

export const Experience = () => (
  <div className="break-before">
    <h2>Experience</h2>
    <Timeline>
      <TimelineSegment timelineText="Present">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">
            Software Engineer at{" "}
            <a href="https://www.red-gate.com/">Redgate Software</a>
          </h3>
          <TagList aria-label="technologies">
            <TagList.Item>.NET Core</TagList.Item>
            <TagList.Item>CI/CD</TagList.Item>
            <TagList.Item>C#</TagList.Item>
            <TagList.Item>Design System</TagList.Item>
            <TagList.Item>React</TagList.Item>
            <TagList.Item>SQL</TagList.Item>
            <TagList.Item>Tailwind</TagList.Item>
            <TagList.Item>TypeScript</TagList.Item>
            <TagList.Item>Unit Testing</TagList.Item>
          </TagList>
          <p>
            Worked as a full-stack software engineer on{" "}
            <a href="https://www.red-gate.com/products/dba/sql-monitor/">
              SQL Monitor
            </a>
            , a database monitoring tool targeted at database administrators.
            SQL Monitor currently has 4 dev teams with 5-6 people in each.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <b>Front-end</b> web-app development using{" "}
              <b>TypeScript, React and Tailwind</b>.
            </li>
            <li>
              Writing <b>front-end unit tests</b> using Jest.
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
              Migrating code from older frameworks such as: jQuery, Knockout.
            </li>
          </ul>
          <p>
          <p>
            Heavily involved in the development of the internal{" "}
            <b>design system, Honeycomb</b>.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Strategy calls with the stakeholders and backers of the Design
              System, including the heads of Engineering and Design.
            </li>
            <li>
              Helping choose the technologies and libraries involved (Yarn,
              React, Tailwind, MUI).
            </li>
            <li>
              Writing <b>CI/CD</b> pipeline using GitHub Actions, bash, npm.
            </li>
            <li>Migrating from GitHub Actions to CircleCI</li>
            <li>
              Co-hosting a workshop at the company conference on how to use MUI,
              including a talk about how to develop accessible components with
              MUI.
            </li>
            <li>Writing component API guidelines and best practice.</li>
            <li>
              Writing guidance on which components to use in what situation.
            </li>
            <li>
              Writing automatic <b>screenshot tests</b>
            </li>
            <li>
              Improving flexibility and <b>accessibility</b>.
            </li>
          </ul>
        </div>
      </TimelineSegment>
      <TimelineSegment timelineText="Oct 2021">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">
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
          <h3 className="font-semibold">
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
          <h3 className="font-semibold">
            Placement at Atkins engineering consultancy
          </h3>
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
