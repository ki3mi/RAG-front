import ProductComponent from "../product"

export default function StorePage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen dark:text-white">
            <div className="flex justify-center flex-wrap mb-4">
                <ProductComponent></ProductComponent>
                <ProductComponent></ProductComponent>
                <ProductComponent></ProductComponent>
            </div>
            <div className="flex justify-center z-20 mt-4 pt-4 bg-orange-50 min-w-full h-80">
                <div className="font-bold">
                    <p>Productos más vendidos</p>
                    {/* Linea */}
                    <div className="flex justify-center">
                        <div className="bg-orange-200 dark:bg-white w-20 h-1 mt-1 rounded-sm"></div>
                    </div>           
                </div>
            </div>
        </div>
        
    )
}