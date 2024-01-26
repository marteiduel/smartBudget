import { Button, Heading } from "@adobe/react-spectrum";
import Link from "next/link";
import styles from "./styles.module.css";

const buttonsData = [
  { href: "/add-expense", text: "Add Expense", isDisabled: false },
  { href: "/add-income", text: "Add Income", isDisabled: true },
  { href: "/review-budget", text: "Review Budget", isDisabled: false },
  { href: "/categories", text: "Categories", isDisabled: false },
  { href: "/history-log", text: "Log", isDisabled: false },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full">
      <header className="flex justify-center items-center text-4xl m-8">
        <Heading level={1}>Smart Budget</Heading>
      </header>
      {buttonsData.map(({ href, text, isDisabled }) => (
        <Link key={href} href={href} style={{cursor:"pointer"}}>
          <Button  width={180} height={45} marginBottom={15} isDisabled={isDisabled}>
            <p className={styles.innerButtonText}>{text}</p>
          </Button>
        </Link>
      ))}
    </main>
  );
}
