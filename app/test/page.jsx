import styles from "./page.module.css";
import Counter from "@components/divider/Counter";

const page = () => {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  );
};

export default page;
