import React from 'react';
import { Pagination } from 'react-bootstrap';
import './pagination.css';

export default ({ onSelectPage, activatePage, pagesSize }) => {

    const items = [];

    for(let page = 1; page <= pagesSize; page++) {
        items.push(
            <Pagination.Item key={page} active={activatePage === page} onClick={() => onSelectPage(page)}>
              {page}
            </Pagination.Item>,
          );
    }

    return (
        <Pagination>
            {items}
        </Pagination>
    )

}