import React from "react";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
      <h1 className={styles.title}>Eric Woodley</h1>
      <h2 className={styles.subhead}>
        1805 2nd St | Perry, IA 50220 | 515-537-5659 | noctisumbra@gmail.com
        <p>
          <a href="https://github.com/Ewoodley">Find me on GitHub</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/eric-woodley-63b5bb1a6/">
            Find me on LinkedIn
          </a>
        </p>
      </h2>
      <div className={styles.objhead}>
        <h3>
          OBJECTIVE
          <p>Obtain a Senior level Technician position</p>
        </h3>
      </div>
    </div>
  );
};

export default Title;
