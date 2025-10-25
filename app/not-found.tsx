import css from "./Home.module.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | NoteHub",
  description: "Oops! The page you are looking for does not exist.",
  metadataBase: new URL("https://not-found.com"),
  openGraph: {
    title: "404 — Page Not Found",
    description: "The requested page does not exist on NoteHub.",
    url: "http://localhost:3000/not-found",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub 404 preview image",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">Go back home</Link>
    </>
  );
}
