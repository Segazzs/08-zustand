"use client";

import css from "./Home.module.css";
import { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Note Found`,
    description: `This page not found`,
    metadataBase: new URL("https://notehub.com/not-found"),
    openGraph: {
      title: `Note Found`,
      description: `This page not found`,
      url: `https://notehub.com/not-found`,
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg)",
          width: 1200,
          height: 630,
          alt: `Note-found`,
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
