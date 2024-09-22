import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected({ Component }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const isAuthenticated = Boolean(user?.name);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return <Component />;
}

export default Protected;
