import clsx from "clsx";
import sTest from "./test.module.scss";
export default function Home() {
  return (
    <div className={clsx(sTest.page)}>
      <div className={sTest.section__inner}>
        <div className={sTest.section__sidebar}>BAR</div>
        <div className={sTest.section__content}>CONTENT</div>
        <ul className="test">
          <li className="test2"></li>
        </ul>
      </div>
    </div>
  );
}
