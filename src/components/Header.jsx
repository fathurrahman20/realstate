import {useLocation, useNavigate} from "react-router-dom";

export default function Header(){
    const location = useLocation();
    const navigate = useNavigate()
    function pathName(path){
        if (path === location.pathname){
            return true
        }
    }

    return (
        <div className="border-b sticky top-0">
            <header className="flex justify-between max-w-6xl mx-auto px-5 items-center">
                <div>
                    <img src="/logo.svg" alt="realstate logo" className="h-9 cursor-pointer" />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li className={`cursor-pointer text-sm text-gray-400 font-semibold py-3 ${pathName("/") && "border-b-[3px] text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                        <li className={`cursor-pointer text-sm text-gray-400 font-semibold py-3 ${pathName("/offers") && "border-b-[3px] text-black border-b-red-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer text-sm text-gray-400 font-semibold py-3 ${pathName("/sign-in") && "border-b-[3px] text-black border-b-red-500"}`} onClick={()=>navigate("/sign-in")}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}