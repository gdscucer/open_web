export const Footer = () => {
    const portfolioURL = "https://pantelis.theodosiou.me/";
    const hacktoberfestURL = "https://hacktoberfest.com/"

    return (
        <footer className="bg-white text-black border-t border-slate-100 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto">
                <div className="flex justify-center items-center py-4 lg:px-0">
                    <p className="mb-0">Made with ❤️ by <a href={portfolioURL} className="text-blue-600 hover:text-blue-800" target="_blank">Pantelis Theodosiou</a> for <a href={hacktoberfestURL} className="text-blue-600 hover:text-blue-800" target="_blank">Hacktoberfest 2022</a></p>
                </div>
            </div>
        </footer>
    )
}