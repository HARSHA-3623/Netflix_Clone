import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Sample users data
const users = [
    {
        email: "harsha@gmail.com",
        password: "harsha123",
        name: "Harsha"
    },
     {
        email: "user@gmail.com",
        password: "user123",
        name: "User"
    },
    {
        email: "rahul@gmail.com",
        password: "rahul123",
        name: "Rahul"
    },
    {
        email: "sai@gmail.com",
        password: "sai123",
        name: "Sai"
    }
];

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Find user with matching email and password
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Navigate to feed with user data
            navigate('/feed', { state: { user } });
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="relative w-full h-screen">
            <img 
                src="/Assets/Background.jpg" 
                alt="" 
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black/60"></div>
            
            <div className="relative z-10 w-full min-h-screen flex flex-col">
                {/* Header */}
                <div className="px-4 sm:px-8 py-4 sm:py-6 pt-8">
                    <Link to="/">
                        <img 
                            src="/Assets/logo.svg" 
                            alt="" 
                            className="w-28 sm:w-32 md:w-40"
                        />
                    </Link>
                </div>

                {/* Sign In Form Container */}
                <div className="flex-1 flex items-center justify-center px-4 py-4 sm:py-8">
                    <div className="w-full max-w-[450px] bg-black/75 text-white rounded-md px-4 sm:px-8 py-8 sm:py-10">
                        <div className="w-full max-w-[400px] mx-auto">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                                Sign In
                            </h1>

                            {/* Show error message if exists */}
                            {error && (
                                <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-md mb-4">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder="Use 'user@gmail.com' for testing"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 sm:p-4 bg-gray-700 rounded-md outline-none text-sm sm:text-base placeholder:text-gray-400"
                                />
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Use 'user123' for testing"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full p-3 sm:p-4 bg-gray-700 rounded-md outline-none text-sm sm:text-base placeholder:text-gray-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <button className="w-full bg-red-600 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-red-700 transition-colors mt-2">
                                    Sign In
                                </button>
                                <button 
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-200 transition-colors"
                                >
                                    <img 
                                        src="/Assets/google.png" 
                                        alt="Google" 
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    Sign in with Google
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn; 