import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/49662806?s=460&u=13df459707e79ba8cbd2cadb22627c06ce9a9108&v=4"
        alt="Jeniffer Azevedo"
      />
      <div>
        <strong>Jeniffer Azevedo</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
