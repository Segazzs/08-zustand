"use client";
import css from "./Home.module.css";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export async function generateMetadatas() {
  return {
    title: "Page Not Found | NoteHub",
    description: "Oops! The page you are looking for does not exist.",
    url: "http://localhost:3000/not-found",
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
}

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
