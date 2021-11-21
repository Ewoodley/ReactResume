import React from "react";
import styles from "./Grid.module.css";
import Layout from "./Layout.module.css";
import Box1 from "./box1.module.css";
import Box2 from "./box2.module.css";
import Box3 from "./box3.module.css";

import cx from "classnames";

export default class App extends React.Component {
  mouseOver = () => this.forceUpdate();
  render() {
    return (
      <div>
        <div className={cx(styles.grid, Layout.gridItem, Box1.gridItem)}>
          <h4>EDUCATION</h4>
          <div
            key={Math.random}
            onMouseEnter={this.mouseOver}
            className={Box1.animate}
          >
            <p>
              <h4>
                Associates of Applied Science, Information Technology Network
                Administration
              </h4>

              <h5>Des Moines Area Community College</h5>

              <ul>
                <li> Microsoft Server Administration</li>
                <li> Cisco Router and Switch Administration</li>
                <li>
                  Related Course Work: Introductory Linux Administration, PC
                  hardware and OS service and repair, Forensic Data recovery,
                  Network Security, Network Topology, IP Addressing
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className={cx(styles.grid, Layout.gridItem, Box2.gridItem)}>
          <h4>SKILLS &ABILITIES </h4>
          <div className={Box2.animatesk}>
            <p>
              <ul>
                <li> Educated in Microsoft Windows Server environment</li>
                <li> Educated in Cisco Routers and Switches administration</li>
                <li> Educated in Microsoft Windows Desktop environment</li>
                <li> PC Hardware and Software maintenance and upgrades</li>
                <li>
                  Highly skilled at troubleshooting/problem solving due to years
                  of Customer Service/Technical Support experience
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className={cx(styles.grid, Layout.gridItem, Box3.gridItem)}>
          <h4>EXPERIENCE</h4>
          <div className={Box3.animateexp}>
            <p>
              <h5>Senior Datacenter Technician</h5>
              Microsoft
              <ul>
                <li>
                  {" "}
                  Utilizing ticketing queue to acquire tasks for the shift
                </li>
                <li>
                  Rapidly determine appropriate resolution through
                  troubleshooting
                </li>
                <li> Deploy and decommission server and networking hardware</li>
                <li> Utilize parts checkout system</li>
                <li>
                  Perform hardware replacements appropriately and proficiently
                </li>
                <li>
                  Work with Administrators via Instant Messaging to coordinate
                  server or network hardware repair
                </li>
                <li>
                  Fulfill minor leadership responsibilities for the team in the
                  absence of the DCTL
                </li>
                <li>
                  Serve as an SME for the Technicians on my team for the various
                  issues encountered during the course of executing tasks 2018
                  to Present
                </li>
              </ul>
            </p>
          </div>
          <div className={Box3.animateexp2}>
            <p>
              <h5>Datacenter Technician</h5>
              Microsoft 2017to 2018
              <ul>
                <li>
                  {" "}
                  Utilizing ticketing queue to acquire tasks for the shift
                </li>
                <li>
                  Rapidly determine appropriate resolution through
                  troubleshooting
                </li>
                <li> Deploy and decommission server and networking hardware</li>
                <li> Utilize parts checkout system</li>
                <li>
                  Perform hardware replacements appropriately and proficiently
                </li>
                <li>
                  Work with Administrators via Instant Messaging to coordinate
                  server or network hardware repair
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
