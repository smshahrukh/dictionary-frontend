import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
const BASR_URL = process.env.REACT_APP_BASE_URL;

const AddNameForm = () => {

    const [value, setValue] = useState("")
    const addWordInDictionary = async () => {
        const res = await fetch(`${BASR_URL}/names`, {
            method: "POST", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ name: value })
        });
        const responseData = await res.json()
        if (responseData) {
            alert(`${value} has been added`);
        }
    }
    return (<div>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Add word"
                aria-label="Add word"
                aria-describedby="addBtn"
                value={value}
                className="addname_input"
                onChange={e => setValue(e.target.value)}
            />
            <Button variant="outline-secondary" id="addBtn" className="addname_button" onClick={addWordInDictionary}>
                Add
            </Button>
        </InputGroup>
    </div>)
}

export default AddNameForm;