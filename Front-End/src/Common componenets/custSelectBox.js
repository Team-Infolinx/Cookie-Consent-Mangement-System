import BannerCustomization from "../Components/BannerCustomization";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const CustSelectBox = (props) =>{
    return(
        <div className={BannerCustomization}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={props.fun}

                >
                    <MenuItem value={props.val1}>{props.val1}</MenuItem>
                    <MenuItem value={props.val2}>{props.val2}</MenuItem>
                </Select>
            </FormControl>

        </div>
    );

}

export default CustSelectBox;