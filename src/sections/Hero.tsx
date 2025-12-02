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
          className="w-full px-4 py-2 border-2 focus:outline-none focus:border-blue-500 focus:ring placeholder:"
        />
        <Options />
        <button className="w-full border-2 py-4 mt-2">
          Descargar
        </button>
      </section>
    </section>
  )
}

export default Hero