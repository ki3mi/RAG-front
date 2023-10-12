import Image from "next/image"
export default function ProductComponent() {
    let title = "20% off en Teclados"
    let description = "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
    return (
        <div className="w-60 h-80 rounded-lg m-2">
            <div className="z-10 absolute">
                <img src="/img/teclado.jpg" className="w-60 h-80 object-cover rounded-lg" />
            </div>
            <div className="flex items-end bg-black h-80 w-60 z-20 absolute opacity-50 text-white rounded-lg">
                <div className="flex flex-col p-4">
                    <div className="text-xl font-bold">
                        <p>{title}</p>
                    </div>
                    <div className="text-xs">
                        <p>{description}</p>
                    </div>
                    <div className="flex justify-center items-center bg-black dark:bg-white rounded-sm w-32 h-5 mt-3 text-xs text-white dark:text-black text-center font-bold">
                        <button>COMPRAR AHORA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Product2Component() {
    return (
        <div className="w-40 h-60 rounded-lg m-2">
            <div>
                <img src="/img/teclado.jpg" className="w-40 h-40 hover:w-44 hover:h-44 object-cover rounded-lg" />
            </div>
            <div className="flex-col h-20 text-xs mt-1">
                <p>Teclado chingon y Mmlon RedDragon Kumara</p>
                {/* categoria */}
                <p className="font-light">Teclado</p>
                <div className="flex items-end ">
                    <p className="font-light pr-1"><del>S/.295.00</del></p>
                    <p>S/.250.00</p>
                </div>
            </div>
        </div>
    )
}
export function OfertaComponent() {
    return (
        <div className="dark:bg-white w-[calc(100%)] h-60 rounded-lg">
            <div className="z-0 absolute w-[calc(100%-1rem)]">
                <img src="/img/gaming.jpg" className="object-cover rounded-lg w-[calc(100%-144px)] h-60" />
            </div>
            <div className="bg-black w-[calc(100%)] h-60 rounded-lg opacity-50 z-10"></div>
        </div>
    )
}