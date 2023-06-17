import { useContext } from "react";
import { AuthContext } from "../context/AuthorProvider";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth