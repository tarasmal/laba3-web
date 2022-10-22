import React from 'react';
import styled from "styled-components";

interface DatalistProps {
    value: string,
    setValue: Function,
    placeholder: string,
    list: string,
}

const InputStyled = styled.input`
  background-color: black;
  color: white;
  border: hidden;
  padding-left: 15px;
`

const Datalist = ({value, setValue, placeholder, list}: DatalistProps) => {
    return (
        <>
            <InputStyled
                placeholder={placeholder}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                list={list}
            />
            <datalist id={list}>
                <option value={'Київ'}/>
                <option value={'Полтава'}/>
                <option value={'Львів'}/>
                <option value={'Хмельницький'}/>
            </datalist>
        </>
    );
};

export default Datalist;
