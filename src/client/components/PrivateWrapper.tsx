import * as React from "react";
import { Navigate } from "react-router-dom";
import { TOKEN_KEY } from "../services/api-service";

const PrivateWrapper = (props: PrivateWrapperProps) => {
    const token = localStorage.getItem(TOKEN_KEY);
    
    if(!token) {
        return <Navigate to="/login" />
    }

  return <>
  
  <>{props.children}</>
  </>;
};

export default PrivateWrapper;

interface PrivateWrapperProps {
  children: React.ReactNode;
}
