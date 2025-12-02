const Options = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="w-full flex flex-col items-start justify-center gap-1">
        <p className="text-xl font-semibold">Formato</p>
        <div className="w-full flex items-center justify-between">
          <button className="py-4 px-12 text-white font-medium bg-linear-to-b from-green-light to-green-medium border-[1.5px] border-green-black shadow-md">
            MP3
          </button>
{/*        <button>
            ACC
          </button>
          <button>
            FlAC
          </button>
          <button>
            WAV
          </button>
          <button>
            AIFF
          </button> */}
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-1">
        <p className="text-xl font-semibold">Calidad</p>
        <div className="w-full flex items-center justify-between">
          <button className="py-4 px-12 text-white font-medium bg-linear-to-b from-green-light to-green-medium border-[1.5px] border-green-black shadow-md">
            64 kbps
          </button>
{/*       <button>
            128 kbps
          </button>
          <button>
            192 kbps
          </button>
          <button>
            256 kbps
          </button>
          <button>
            320 kbps
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Options