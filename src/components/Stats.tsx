import Counter from "./Counter";

const Stats = () => {
  return (
    <section className="flex justify-center items-center bg-darkGrey py-10 w-full">
      <div className="md:flex items-center md:py-20">
        <div className="mb-5 translate-y-1 md:-translate-y-40 px-5">
          <div className="flex items-center">
            <div className="w-8 h-1 border-solid bg-blue-900"></div>
            <p className="text-blue-50 uppercase text-xs tracking-wide p-1">
              Datos
            </p>
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            BASC en cifras
          </h1>
        </div>

        <div className="grid grid-cols-2 text-left py-5 px-6 md:px-24 gap-8 md:gap-14 text-white md:-translate-y-24">
          <Counter endValue={4102} label="Empresas Certificadas" />
          <Counter endValue={1724} label="Empresas Colombianas" />
          <Counter endValue={53} label="Colaboradores" />
          <Counter endValue={59} label="Auditores Internacionales" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
