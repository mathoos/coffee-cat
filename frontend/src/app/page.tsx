"use client";

import { useEffect, useState } from "react";
import { API_URL } from "./config/api";

export default function Home() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Erreur de connexion"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">{message}</h1>
    </main>
  );
}

