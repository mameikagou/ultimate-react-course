import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h3><Link to="/pricing">Pricing</Link></h3>
        <h3><Link to="/product">Product</Link></h3>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
      </section>
    </main>
  );
}
