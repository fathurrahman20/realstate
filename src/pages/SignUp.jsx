import {useState} from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const {name, email, password} = formData;
    function onChange(e){
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    return (
        <section>
            <h1 className="text-3xl text-center font-bold mt-6">Sign Up</h1>

            <div className="flex flex-wrap justify-center max-w-6xl px-6 py-12 items-center mx-auto">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
                    <img src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600" alt="real estate" className="w-full rounded-2xl"/>
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-10">
                    <form>
                        <input id="name" type="text" className="w-full rounded transition ease-in-out px-3 text-gray-700 border-gray-300 mb-6" placeholder="Full Name" value={name} onChange={onChange}/>
                        <input id="email" type="email" className="w-full rounded transition ease-in-out px-3 text-gray-700 border-gray-300 mb-6" placeholder="Email Address" value={email} onChange={onChange}/>
                        <div className="relative">
                            <input id="password" type={showPassword ? "text" : "password"} className="w-full rounded transition ease-in-out px-3 text-gray-700 border-gray-300 mb-6" placeholder="Password" value={password} onChange={onChange}/>
                            {showPassword ? <AiFillEyeInvisible className="absolute right-3 top-3 text-lg" onClick={()=>{setShowPassword(prevState => !prevState)}} /> : <AiFillEye className="absolute right-3 top-3 text-lg" onClick={()=>{setShowPassword(prevState => !prevState)}} />}
                        </div>
                        <div className="flex justify-between mb-6">
                            <p>Have an account? <Link to="/sign-in" className="capitalize text-red-600 hover:text-red-700 transition duration-100">sign in</Link></p>
                            <p><Link to="/forgot-password" className="capitalize text-blue-600 hover:text-blue-700 transition duration-100">forgot password?</Link></p>
                        </div>
                        <button type="submit" className="uppercase w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 rounded-md shadow-sm hover:shadow-md">sign up</button>
                        <div className="flex before:border-t before:flex-1 before:border-gray-400 items-center after:border-t after:flex-1 after:border-gray-400 my-3">
                            <p className="uppercase font-semibold text-xs px-3">or</p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}