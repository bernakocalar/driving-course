import React, { createContext, useState, useContext } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  userTc: string | null;
  login: (tc: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userTc, setUserTc] = useState<string | null>(null);

  const login = (tc: string) => {
    // In a real app, verify TC with Supabase or external API
    setIsAuthenticated(true);
    setUserTc(tc);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserTc(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userTc, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
