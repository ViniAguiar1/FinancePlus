import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      console.log('Iniciando app - sempre forçando novo login');
      // Sempre limpa o usuário salvo para forçar novo login
      await AsyncStorage.removeItem('@FinancePlus:user');
      setUser(null);
    } catch (error) {
      console.error('Erro ao limpar usuário:', error);
      setUser(null);
    } finally {
      console.log('App pronto para login');
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulação de API - em produção, isso seria uma chamada real
      if (email === 'teste@email.com' && password === '123456') {
        const userData: User = {
          id: '1',
          email,
          name: 'Usuário Teste'
        };
        
        await AsyncStorage.setItem('@FinancePlus:user', JSON.stringify(userData));
        setUser(userData);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulação de API - em produção, isso seria uma chamada real
      const userData: User = {
        id: Date.now().toString(),
        email,
        name
      };
      
      await AsyncStorage.setItem('@FinancePlus:user', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('@FinancePlus:user');
      setUser(null);
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
} 