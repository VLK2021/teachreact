import {useContext} from "react";

import {AuthContext} from "../hightOrderComponent/AuthProvider";

export const useAuth = () => useContext(AuthContext);