import React, { useState, useEffect } from 'react'
import { useStore } from '../store/Store';
import { CHANGE_PAGE, SET_LAST_PAGE, SET_NAMES } from "../reducers"
import { Button } from 'react-bootstrap';
const BASR_URL = process.env.REACT_APP_BASE_URL;

const NamesList = () => {
    const [state, dispatch] = useStore();
    const [namesAtPage, setNamesAtPage] = useState([])

    const { page, names, key, pagesViewed } = state;
    const fetchNames = async () => {
        let results = []
        if (key || !pagesViewed.includes(page)) {
            const res = await fetch(`${BASR_URL}/names?page=${page}&limit=50&key=${key}`);
            const responseData = await res.json()
    
            const lastPage = responseData.result.lastPage;
            results = responseData.result.results;
            if (lastPage) {
                dispatch({
                    type: SET_LAST_PAGE,
                    lastPage
                })
            }
            dispatch({
                type: SET_NAMES,
                names: results,
                page: page
            })
        } else {
            results = names[page]
        }
        setNamesAtPage(results)
    }
    useEffect(() => {
        fetchNames()
    }, [page, key])

    const onClickDelete = async (id) => {
        const res = await fetch(`${BASR_URL}/names/${id}`, {method: "DELETE"});
        const responseData = await res.json()

        fetchNames()
    }

    return (<div>
        <ul>
            {namesAtPage && namesAtPage.map(word => {
                return (<li><span>{word.name}</span> <Button variant="danger" onClick={() => onClickDelete(word.id)}>
                    Delete
                </Button></li>)
            })}
        </ul>
    </div>)

}

export default NamesList;