'use client';
import React from 'react';
import Image from "next/image";

type FooterProps = {
    name?: string;
};

const Footer: React.FC<FooterProps> = ({ name = "Steve Sultan"}) => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://stevesultan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
           Developed by {name}
        </a>
      </footer>
    );
};

export default Footer;