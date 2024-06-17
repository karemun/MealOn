import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({ categoria }) {

    const { handleClickCategoria, categoriaActual } = useQuiosco()
    const { nombre, icono, id } = categoria

    const resaltarCategoriaActual = () => categoriaActual?.id === id ? 'bg-amber-400' : 'bg-white'

    return (
        <div className={`${ resaltarCategoriaActual() } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            <img 
                src={`/img/icono_${icono}.svg`}
                className="w-12"
                alt="Icono"
            />

            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                onClick={() => handleClickCategoria(id)}
            >
                { nombre }
            </button>
        </div>
    )
}
