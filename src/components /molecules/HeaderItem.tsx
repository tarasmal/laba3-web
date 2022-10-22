import React from 'react';
import Button from "../atoms/Button";

interface HeaderItemProps {
    title: string,
}

const HeaderItem = ({title}: HeaderItemProps) => {
    return (
        <Button
        >
            {title}
        </Button>
    );
};

export default HeaderItem;
