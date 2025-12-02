import Options from "@components/Options"

const Hero = () => {
  return (
    <section className="w-full h-dvh flex flex-col items-center justify-center">
      <div className="flex items-end justify-center gap-1">
        <h1 className="text-8xl font-bold">NO DESCARGUES</h1>
        <p className="text-sm mb-2 font-bold">(audio)</p>
      </div>
      <section className="w-4xl flex flex-col items-center justify-center gap-4 mt-4">
        <input
          type="text"
          placeholder="https://www.youtube.com/playlist?{continua} || https://www.youtube.com/watch?{continua}"
          className="w-full px-4 py-4 border-[1.5px] border-green-black bg-green-one focus:outline-none focus:border-green-black focus:ring-2 placeholder:"
        />
        <Options />
        <button className="w-full font-medium border-[1.5px] border-green-black bg-green-one py-4 mt-4">
          Descargar
        </button>
      </section>
    </section>
  )
}

export default Hero