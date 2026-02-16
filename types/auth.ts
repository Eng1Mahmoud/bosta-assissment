export interface User {
  id?: number;
  username: string;
  email?: string;
  displayName?: string;
  name?: {
    firstname: string;
    lastname: string;
  };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (token: string, username: string, displayName?: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
}
