import React, {useMemo, useState} from 'react';
import Button from "../atoms/Button";
import styled from "styled-components";
import Datalist from "../molecules/Datalist";

interface HeaderProps {

}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  color: white;
`

const Header = ({}: HeaderProps) => {
    const titles = useMemo(() => ['Форми навчання', "Заходи", "Про Академію", "Контакти"],[])
    const [datalistValue, setDatalistValue] = useState('Київ')
    return (
        <HeaderStyled
        >
            {
                titles.map((title, index) =>
                    <Button
                        onClick={() => {}}
                        key={index}

                    >
                        {title}
                    </Button>)
            }
            <Datalist
                value={datalistValue}
                setValue={setDatalistValue}
                placeholder={'Оберіть місто'}
                list={'city'}
            />
        </HeaderStyled>
    );
};

export default Header;
