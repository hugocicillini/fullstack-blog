import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 p-4">
      <div className="flex-1 flex flex-col gap-8">
        <h2 className="text-blue-400 font-bold text-2xl">Sobre a HCO Labs</h2>
        <h1 className="text-4xl md:text-6xl">
          Nós criamos ideias que conectam marcas ao mundo digital.
        </h1>
        <p className="text-lg md:text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas
          soluta, dolor culpa eius aliquam voluptatibus dolore ullam ex maiores.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <h1 className="text-blue-400 font-bold text-4xl">10 K+</h1>
              <p className="text-center">Anos de experiência</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/about.png"
          alt="Sobre a HCO Labs"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
