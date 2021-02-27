import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { ExperienceBar } from "../components/experience-bar/ExperienceBar";
import { Profile } from "../components/profile/Profile";
import { CompletedChallenges } from "../components/completed-challenges/CompletedChallenges";
import { Countdown } from "../components/count-down/Countdown";
import Head from "next/head";
import { ChallengeBox } from "../components/challenge-box/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvide } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvide
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvide>
  );
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const { level, currentExperience, challengesCompleted } = cxt.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
