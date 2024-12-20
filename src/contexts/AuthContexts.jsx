import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser, checkUser, checkUsername } from '../api/userApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    const userSignup = async (newUser) => {
        try {
            const emailTaken = await checkUser(newUser.email);
            if (emailTaken){
                throw new Error("Account already exists with this email");
            }

            const usernameTaken = await checkUsername(newUser.username);
            if (usernameTaken){
                throw new Error("Username already taken");
            }

            const response = await addUser(newUser);
            setUser(response.data);
            setTimeout(() => {
                navigate("/");
            },2000);

        } catch(error){
            throw error;
        }
    }




    return (
        <AuthContext.Provider value={{ user, userSignup }}>
            {children}
        </AuthContext.Provider>
    );
}