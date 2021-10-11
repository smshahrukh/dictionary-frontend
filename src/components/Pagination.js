import Pagination from 'react-bootstrap/Pagination'
import React, { useState, useEffect } from 'react'
import { useStore } from '../store/Store';
import { CHANGE_PAGE, SET_LAST_PAGE, SET_NAMES, SET_PAGE_VIEWED } from "../reducers"


const PaginationComponent = ({}) => {
    const [state, dispatch] = useStore();
    const { lastPage, page } = state;

    const setPage = (pageNo) => {
        dispatch({ 
            type: CHANGE_PAGE, 
            page: pageNo
        })
        dispatch({ 
            type: CHANGE_PAGE, 
            page: pageNo
        })
    }

    let items = [
        <Pagination.First onClick={() => setPage(1)} />,
        <Pagination.Prev disabled={page-1 < 1} onClick={() => setPage(page-1)} />
    ];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        items.push(<Pagination.Next disabled={page+1 > lastPage} onClick={() => setPage(page+1)} />, <Pagination.Last onClick={() => setPage(lastPage)}/>)

    return (
        <>
        <Pagination>
            {items}
        </Pagination>
        </>
    )
}

export default PaginationComponent;