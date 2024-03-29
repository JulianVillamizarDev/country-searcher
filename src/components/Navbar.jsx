import ThemeSwitch from "./ThemeSwitch"
export default function Navbar() {
    return (
        <div className="shadow-md bg-primary-50 dark:bg-secondary-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center py-6">
                <h1 className="font-bold text-xl text-secondary-200 dark:text-primary-50"><a href="/">Where in the World?</a></h1>
                <nav>
                    <ThemeSwitch></ThemeSwitch>
                </nav>   
            </div>
        </div>
    )
}