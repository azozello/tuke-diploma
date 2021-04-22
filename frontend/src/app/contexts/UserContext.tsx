import React, { createContext } from 'react';

export interface UserContextTypes {
    getToken(): string | null;
    setToken(token: string): void;
    logOut(): void;
    isLoggedIn(): boolean;
}

export const UserContext = createContext<UserContextTypes>(({} as any) as UserContextTypes);

export const userContextProviderFactory = (): UserContextTypes => {
    const getToken = () => localStorage.getItem('token');
    const setToken = (token: string) => localStorage.setItem('token', token);
    const logOut = () => localStorage.removeItem('token');
    const isLoggedIn = () => typeof getToken() === 'string';

    return {
        getToken,
        setToken,
        logOut,
        isLoggedIn,
    };
};

export const UserContextProvider: React.FC<any> = ({ children, provider = userContextProviderFactory() }) => {
    return <UserContext.Provider value={provider}>{children}</UserContext.Provider>;
};
