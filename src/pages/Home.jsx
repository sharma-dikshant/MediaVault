import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to MediaVault</h1>
        <p className="text-gray-700 mb-4">
          Your secure media storage solution.
        </p>
        <Link to="/vault">
          <Button styleType="primary">Browse Vault</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
