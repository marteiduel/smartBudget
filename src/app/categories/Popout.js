import Image from "next/image";
import styles from "./styles.module.css";

function Popout() {
  return (
    <>
      <div className={styles.popUp}>
        <div className="text-3xl">Category</div>

        <div className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est
          lacus, varius sollicitudin eros a, varius sodales leo
        </div>

        <div className="text-2xl">$100.99</div>

        <div className={styles.deleteEdit}>
          <div className={styles.deleteIcon}>
            Delete
            <Image
              alt="edit"
              src="/assets/icons/delete.png"
              width={18}
              height={20}
            />
          </div>

          <div className={styles.editIcon}>
            Edit
            <Image
              alt="edit"
              src="/assets/icons/edit white icon.png"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Popout;
