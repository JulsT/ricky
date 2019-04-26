import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    box-sizing: border-box;
    width: 150px;
    display: block;
    text-align: center;
    line-height: 24px;
    padding: 15px 0;
    margin-bottom: 20px;
    color: #099389;
    text-transform: uppercase;
    background-color:#abfaf3;
    border-radius: 20px;
`;

const InputSearch = ({ handleSearch }) => {
    const onChange = (ev) => {
        const name = ev.target.value.toLowerCase();
        console.log(name)
        handleSearch({ name });
    }
    return (
        <SearchInput placeholder="Search by name" type="search" onChange={onChange} />
    );
}
export default InputSearch
