import {FcGoogle} from "react-icons/fc";

export default function OAuth(){
    return (
        <button type="submit" className="flex items-center uppercase w-full bg-red-600 hover:bg-red-700 text-white text-sm py-3 rounded-md shadow-sm hover:shadow-md justify-center"><FcGoogle className="bg-white rounded-full text-2xl mr-1"/> continue with google</button>
    )
}