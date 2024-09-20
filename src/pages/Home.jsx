import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to MediaVault</h1>
        <p className="text-gray-700 mb-4">
          Your secure media storage solution.
        </p>
        <Link to="/vault">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Browse Vault
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
