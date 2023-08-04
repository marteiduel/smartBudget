"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { getSingleLog, deleteLog } from "@/app/lib/singleLog";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Popout(transaction) {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getSingleLog(transaction.params.log).then((data) => {
      setCategory(data[0].category);
      let date = data[0].transaction_date.split(" ");
      setDate(date[0]);
      setAmount(data[0].amount);
      setDescription(data[0].description);
      isLoading(false);
    });
  });

  const logDelete = async (e, id) => {
    e.preventDefault();
    deleteLog(id);
    router.push("/history-log");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <header className="header">
        <Link className="back" href="/history-log">
          Back
        </Link>
        <h1 className="pageTitle">History Log</h1>
      </header>
      <div className={styles.popUp}>
        <div className="text-3xl">{category ? category : "No category "}</div>

        <div className="text-justify">
          {description ? description : "No description"}
        </div>

        <div className="text-1xl">{date ? date : "No date"}</div>

        <div className="text-2xl">${amount ? amount : "No amount"}</div>

        <div className={styles.deleteEdit}>
          <div
            onClick={(e) => {
              logDelete(e, transaction.params.log);
            }}
            className={styles.deleteIcon}
          >
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