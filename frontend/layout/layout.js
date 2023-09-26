import styles from "../styles/Layout.module.css";

export default function Layout({children}) {
  return (
    <div className="flex md:h-screen">
      <div className="m-auto  bg-gray-100 rounded-md w-3/5 h-3/3 grid lg:grid-cols-2 lg:w-[800px] @screen lowest:w-full h-auto ">
        <div className={styles.imgStyle}>
          <div className={styles.logoImg}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
