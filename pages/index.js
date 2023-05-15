import styles from "./index.module.css";
const FrameComponent = () => {
  return (
    <div className={styles.testMng1Parent}>
      <img className={styles.testMng1} alt="" src="/test-mng--1@2x.png" />
      <img className={styles.testMng2} alt="" src="/test-mng-2@2x.png" />
      <img className={styles.testMng3} alt="" src="/test-mng-3@2x.png" />
    </div>
  );
};

export default FrameComponent;
