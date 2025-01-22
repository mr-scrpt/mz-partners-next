import sTest from "./test.module.scss";
export default function Home() {
  return (
    <div className={sTest.test}>
      <div className={sTest.section__inner}>
        <div className={sTest.section__sidebar}>BAR</div>
        <div className={sTest.section__content}>CONTENT</div>
      </div>
    </div>
  );
}
