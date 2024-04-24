import { HeaderImg } from "../navbar";

export default function AboutPage() {
    return (
        <>
        <HeaderImg imagen={'/img/bg3.jpg'}/>
            <div className="flex justify-center items-center min-h-screen text-black dark:text-white">
                <h1>About</h1>
            </div>
        </>

    )
}