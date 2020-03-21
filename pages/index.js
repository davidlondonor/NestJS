import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      Hola NextJS
      <ul>
        <li>
          <Link href="/blog">
            <a>Blog </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
