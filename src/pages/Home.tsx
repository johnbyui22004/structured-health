import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Home() {
  const handleLogout = async () => {
    await signOut(auth);
    alert("You’ve been logged out!");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Log Out
      </button>
    </div>
  );
}
