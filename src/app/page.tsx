'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 p-4 lg:p-8">
      <div className="flex-1 flex flex-col gap-6 lg:gap-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          <TypeAnimation
            sequence={[
              'desenvolva suas ideias.',
              2000,
              'construa o futuro.',
              2000,
              'transforme o mundo.',
              2000,
            ]}
            wrapper="span"
            style={{ fontSize: '1em', display: 'inline-block', minHeight: 200 }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-base sm:text-lg lg:text-xl">
          Na HCO Labs, transformamos ideias em realidades digitais. Somos uma
          agência especializada no desenvolvimento de sites modernos e
          personalizados para empresas que desejam se destacar no ambiente
          online. Criamos experiências digitais que conectam marcas ao público
          de forma eficaz. Estamos prontos para colaborar com você e levar sua
          empresa ao próximo nível. Juntos, construímos o futuro!
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Saiba mais
          </button>
          <button className="px-6 py-3 rounded-md bg-white text-black hover:bg-gray-100 transition border border-gray-300">
            Contato
          </button>
        </div>
        <div className="w-full h-12 lg:w-[500px] relative grayscale">
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="relative flex-1 h-[300px] lg:h-auto">
        <Image
          src="/hero.gif"
          unoptimized
          alt="hero"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
