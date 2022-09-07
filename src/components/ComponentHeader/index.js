import React, {useEffect, useState} from "react";
import "./style.scss";

const ComponentHeader = (props) => {
    const [header, setHeader] = useState([]);



    useEffect( () => {
        setHeader(props.header);
    }, [props]);






    return (
        <div>
            <div className={"component-header"}>
                <h3>{header}</h3>
            </div>
        </div>
    )


}

export default ComponentHeader;