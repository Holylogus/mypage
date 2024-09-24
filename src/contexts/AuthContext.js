import { Children, createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState({
        name: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        password: "",
        password_confirm: "",
        role: ""
    })

}