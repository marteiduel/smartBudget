"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Popout({ id, onClose }) {
  const router = useRouter();
  const [transaction] = useState({ id: id });
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, isLoading] = useState(true);

  const logDelete = async (e, id) => {
    e.preventDefault();
    deleteLog(id);
    router.push("/categories");
  };

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popUp} onClick={handleInsideClick}>
        <header className="header">
          <Link className="back" href="/categories">
            Back
          </Link>
        </header>
        <form>
          <h1>HI</h1>
        </form>
      </div>
    </div>
  );
}

export default Popout;
