import ProductComponent, { Product2Component } from "../product"
import { HeaderImg } from "../navbar"
export default function StorePage() {
    return (
        <div>
            <HeaderImg imagen='/img/bg1.jpg' />
            <div className="flex justify-center items-center min-h-screen dark:text-white">
                <div className="flex flex-col justify-center z-20 py-12 md:py-4 mt-4 bg-orange-50 dark:bg-neutral-950 min-w-full">
                    <div className="pb-2">
                        <div className="flex justify-center font-bold">
                            <p>Tienda</p>
                        </div>
                        {/* Linea */}
                        <div className="flex justify-center">
                            <div className="bg-orange-200 dark:bg-white w-20 h-1 mt-1 rounded-sm"></div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col lg:flex-row w-full lg:w-[calc(30%)] px-8">
                            <div className="pt-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt ipsam laudantium perferendis quaerat consectetur sapiente, expedita beatae nostrum excepturi a veniam neque corrupti architecto itaque! In minus deserunt sint!</p>
                            </div>                            
                            <div className="flex justify-center my-4 lg:mx-4">
                                <div className="bg-orange-200 dark:bg-white w-[calc(100%)] h-0.5 lg:w-0.5 lg:h-[calc(100%)] mt-1 rounded-sm"></div>
                            </div>

                        </div>
                        <div className="flex flex-wrap justify-center">
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                        </div>
                        {/* <div className="grid grid-cols-[repeat(auto-fit_minmax(60px,_80px))] gap-8">
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                            <Product2Component />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}