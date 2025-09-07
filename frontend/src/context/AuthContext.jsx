import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${parsed.token}`;
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  };
  
  const logout = () => {
    localStorage.removeItem("auth");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
