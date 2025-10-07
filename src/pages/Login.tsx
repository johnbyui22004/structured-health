import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Log In
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-2"
        >
          Sign in with Google
        </button>
        <p className="mt-4 text-sm">
          Don't have an account?{" "} <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>  
      </div>
    </div>
  );
}
