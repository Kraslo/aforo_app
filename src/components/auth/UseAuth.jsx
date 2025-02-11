import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./UseLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token", null);
//   const [permissions, setPermissions] = useLocalStorage("permissions", null);

  const login = async (data) => {
    const token_response = {response: data.response.token_response};
    // setPermissions(data.response.permission_response);
    setToken(token_response);
    navigate("/paselista", { state: { from: "login" }});
  };

  const logout = () => {
    setToken(null)
    // setPermissions(null)
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
    //   permissions,
      login,
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

