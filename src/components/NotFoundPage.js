import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Pagina non trovata</h2>
      <p>
        <Link to="/">Torna in Home</Link>
      </p>
    </div>
  );
}
