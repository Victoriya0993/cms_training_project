import React from 'react';

interface IProps {
    label: string;
    id: string; color: string; onClick: (value) => void;
}

const Tab = ({ label, id, color, onClick }) => {
    return (
        <div id={id} style={{ color: color, cursor: 'pointer', fontFamily: 'ROBOTO' }} onClick={onClick}>
            {label}
        </div>
    );
};

export default Tab;