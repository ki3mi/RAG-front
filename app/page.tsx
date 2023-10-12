import Link from "next/link"
import { HeaderImg } from "./navbar"
import ProductComponent, { OfertaComponent, Product2Component } from "./product"
import Image from "next/image"

export default function Home() {
  let num = [1, 2, 3]
  let num2 = [1, 2, 3, 4]
  return (
    <>
      <HeaderImg imagen='/img/bg1.jpg' />
      <div className="text-black dark:text-white">
        <div className="flex flex-col justify-center items-center min-h-screen dark:text-white">

          {/* Titulo y logo */}
          <div className="flex justify-center items-center flex-wrap min-w-full z-10 font-bold mt-40 mb-10">
            <div className="flex flex-col mr-24">
              <p className="mb-4 text-white">Hola, Bienvenido a RAG!</p>
              <div className="text-4xl">
                <div className="text-white">
                  <p>Red Apparatus</p>
                  <p>Gaming</p>
                </div>

                {/* botones */}
                <div className="flex mt-6 text-sm font-sans">
                  <button className="rounded bg-white text-black px-4 py-1 hover:bg-[#2B161B] hover:text-white">
                    <Link href={"/Store"}>NUESTRA TIENDA</Link>
                  </button>
                  <button className="rounded bg-[#EF4D48] ml-4 px-4 py-1 text-white hover:bg-white hover:text-black">
                    <Link href={"/About"}>VISÍTANOS</Link>
                  </button>
                </div>
              </div>
            </div>
            {/* Logo */}
            <div className="ml-24">
              <Image
                alt="Logo-rag"
                src={'/img/logo-no-bg-w.png'}
                quality={100}
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Ofertas */}
          <div className="flex justify-center flex-wrap mb-4">
            {
              num.map((juan) => (
                <ProductComponent></ProductComponent>
              ))
            }
          </div>

          {/* Productos mas vendidos */}
          <div className="flex justify-center bg-gray-100 dark:bg-neutral-950 z-20 mt-4 pt-4 min-w-full pb-40">
            <div className="font-bold">
              <p className="text-center">Productos más vendidos</p>

              {/* Linea */}
              <div className="flex justify-center mb-6">
                <div className="bg-orange-200 dark:bg-white w-20 h-1 mt-1 rounded-sm"></div>
              </div>
              <div className="flex justify-center flex-wrap mb-4">
                {
                  num2.map((juan2) => (
                    <Product2Component></Product2Component>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
