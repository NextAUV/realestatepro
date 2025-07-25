"use client";
import { useState } from "react";
import { useAuth } from "../../components/AuthProvider";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const { user, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome, {user.email}</h2>
        <button onClick={logout} className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition font-semibold">Logout</button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white/95 rounded-2xl shadow-lg p-8 mt-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 drop-shadow">{isSignUp ? "Create Account" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
          required
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">
          {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 hover:underline">
          {isSignUp ? "Already have an account? Sign In" : "New user? Create an account"}
        </button>
      </div>
    </div>
  );
} 