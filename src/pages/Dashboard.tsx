import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h1>
        <p className="text-gray-600">Your recovery progress will be shown here.</p>
      </div>
    </div>
  );
}
