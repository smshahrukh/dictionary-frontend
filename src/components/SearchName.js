import { useState } from "react";
import { useStore } from '../store/Store';
import { SET_KEY } from "../reducers"
import { InputGroup, FormControl, Button } from "react-bootstrap";
const BASR_URL = process.env.REACT_APP_BASE_URL;

const SearchName = () => {
    const [state, dispatch] = useStore();
    const [value, setValue] = useState("")

    const { page } = state;

    const onClickSearchWord = async () => {
        dispatch({
            type: SET_KEY,
            key: value
        })
    }
    return (<div>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search word"
                aria-label="Search word"
                aria-describedby="seachbtn"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button variant="outline-secondary" id="seachbtn" onClick={onClickSearchWord}>
                Search
            </Button>
        </InputGroup>
    </div>)
}

export default SearchName;