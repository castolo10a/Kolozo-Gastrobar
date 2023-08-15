export default function ButtonSubmit ({ status }) {
    return (
      <div>
        <button
          className="md:items-center border border-solid font-norse w-full px-6 py-2 mb-2 text-4xl text-gray-200 bg-transparent rounded-md cursor-pointer transition-colors hover:bg-gray-200 hover:text-black md:w-auto"
          disabled={status}
        >
          ENVIAR
        </button>
      </div>
    )
  }