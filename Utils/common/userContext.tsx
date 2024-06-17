import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Address {
    name: string;
    mobile: string;
    houseNum: string;
    landmark: string;
    city: string;
    country: string;
    postalCode: string;
    latitude: string;
    longitude: string;
}

interface User {
    name: string;
    email: string;
    // Add other user properties as needed
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};