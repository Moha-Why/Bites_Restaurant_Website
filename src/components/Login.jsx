import { useState } from 'react';
import { supabase } from '../supabase-client';
import { useStore } from '../store';

export default function Login() {
    const isAdmin = useStore(state => state.isAdmin)
    const setIsAdmin = useStore(state => state.setIsAdmin)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function checkAdmin() {
        const {data} = await supabase.from("admins").select("").eq('username', username).eq('password', password).single()
        if (data) {
            localStorage.setItem('admin', 'true')
            setIsAdmin(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        
        setError('');
        checkAdmin()
        // Add your login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-button"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-button"
                            placeholder="Enter your password"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-button hover:saturate-150 text-white font-medium py-2 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}