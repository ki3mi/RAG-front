import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="flex justify-between p-4 bg-orange-200 dark:bg-black dark:text-white text-black font-medium">
            <div className="px-8 font-bold">
                <h1>RAG</h1>
            </div>
            <div>
                <ul className='flex justify-end'>
                    <li className="mx-4 hover:text-white dark:hover:text-sky-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className='mx-4 hover:text-white dark:hover:text-sky-600'>
                        <Link href="/Juan">Juan</Link>
                    </li>
                    <li className='mx-4 hover:text-white dark:hover:text-sky-600'>
                        <Link href="/About">About</Link>
                    </li>
                    <li className='mx-4 hover:text-white dark:hover:text-sky-600'>
                        <Link href="/Store">Store</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export function ImgNavBar () {
    return (
        <div className="flex justify-center items-center bg-white dark:bg-black dark:text-white">
            <img src="/img/teclado.jpg" className="blur-sm"/>
        </div>
    )
}