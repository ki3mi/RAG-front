import ProductComponent, { OfertaComponent, Product2Component } from "./product"
export default function Home() {
  return (
    <div className="text-black dark:text-white">
      <div className="flex flex-col justify-center items-center min-h-screen dark:text-white">
        <div className="flex justify-center flex-wrap mb-4">
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
        </div>

        {/* Productos mas vendidos */}
        <div className="flex justify-center bg-orange-50 dark:bg-neutral-950 z-20 mt-4 pt-4 min-w-full pb-40">
          <div className="font-bold">
            <p className="text-center">Productos más vendidos</p>
            {/* Linea */}
            <div className="flex justify-center mb-6">
              <div className="bg-orange-200 dark:bg-white w-20 h-1 mt-1 rounded-sm"></div>
            </div>            
            <div className="flex justify-center flex-wrap mb-4">
              <Product2Component></Product2Component>
              <Product2Component></Product2Component>
              <Product2Component></Product2Component>
              <Product2Component></Product2Component>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
