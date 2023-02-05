import { Timeline } from "./Timeline";
import { TimelineSegment } from "./TimelineSegment";

export const Experience = () => {
  return (
    <>
      <h2>Experience</h2>
      <Timeline>
        <TimelineSegment timelineText="Present">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">
              Software Engineer at{" "}
              <a href="https://www.red-gate.com/">Redgate Software</a>
            </h3>
            <p>
              Worked as a full-stack software engineer on{" "}
              <a href="https://www.red-gate.com/products/dba/sql-monitor/">
                SQL Monitor
              </a>
              , a database monitoring tool targeted at database administrators.
            </p>
            <ul className="list-disc pl-8">
              <li>
                <b>Front-end</b> web-app development using{" "}
                <b>TypeScript, React and Tailwind</b>.
              </li>
              <li>
                Writing <b>front-end unit tests</b> using Jest
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
                Writing a wide range of <b>T-SQL</b> scripts for monitoring
                client dbs and storing data in local SQL Server repository.
              </li>
              <li>
                Improving product <b>accessibility</b>
              </li>
              <li>
                Migrating code from older frameworks such as: jQuery, Knockout.
              </li>
            </ul>
            <p>
              Heavily involved in the development of internal{" "}
              <b>design systems</b>.
            </p>
            <ul className="list-disc pl-8">
              <li>
                Choosing the technologies and libraries involved (Yarn, React,
                Tailwind, MUI).
              </li>
              <li>
                Writing <b>CI/CD</b> pipeline using GitHub Actions, bash, npm.
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
            <p className="italic">
              Continuation of the previous role after BorgWarner acquisition of
              Delphi Technologies.
            </p>
            <ul className="list-disc pl-8">
              <li>
                Spear-heading use of <b>Machine Learning</b> for root-cause
                analysis and predictive maintenance on site via{" "}
                <a href="https://rapidminer.com/">RapidMiner</a>
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
                including <br />
                Mapping network drives, managing Windows services (via{" "}
                <b>WMI</b>), writing <b>T-SQL</b>, and monitoring databases.
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
            <p>
              Worked as the sole developer in the Continuous Improvement team, a
              small cross-disciplinary team of manufacturing engineers and
              technicians. The team's goal was to create or improve systems
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
                Also integrated 2D code scanning,{" "}
                <b>RFID badge authentication</b> and statistics collection.
              </li>
              <b>
                Writing installers with the{" "}
                <a href="https://wixtoolset.org/">WiX toolset</a> with automatic
                updates via TeamCity.
              </b>
              <li>
                Fail-safe, always running code for communication with{" "}
                <a href="https://www.cognex.com/">COGNEX</a> machine vision
                cameras via <b>TCP/IP and Serial.</b>
              </li>
            </ul>
          </div>
        </TimelineSegment>
      </Timeline>
    </>
  );
};
