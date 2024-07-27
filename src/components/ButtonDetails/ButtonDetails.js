import React from 'react';
import {useNavigate} from "react-router-dom";


const ButtonDetails = (props) => {
    const {children, urlDetails} = props;
    const navigate = useNavigate();


    return (
        <button onClick={() => navigate(`${urlDetails}`)}>
            {children}
        </button>
    );
};

export default ButtonDetails;