import {Button} from "@carbon/react";
import { Add } from "@carbon/react/icons";
import { useState } from "react";
 const CustomButton = () => {
    const [icon,setIcon] = useState(false)
    return (
        <Button hasIconOnly={!icon} kind="tertiary" onMouseEnter={() => {setIcon(true)}} onMouseLeave={() => {setIcon(false)}} renderIcon={Add}>
            View Product
        </Button>
    );
};
 export default CustomButton
