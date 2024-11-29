import { ParameterInput } from 'components/shared/ParameterInput';
import React, { useState } from 'react';

const Page = (props) => {
    const [value, setValue] = useState(props.content.title || "")

    return (
        <div style={{
            backgroundColor: "rgb(73, 211, 133,0.17)", borderRadius: '32px', display: 'flex',
            flexFlow: 'column', alignItems: "center", width: '100%', height: "100%", overflow: 'hidden', gap: '50px', padding: '112px',
            boxSizing: 'border-box'
        }}>
            <ParameterInput value={value} onChange={(e) => { setValue(e) }} color={props.color} editFlag={props.editFlag} width='70%' />
            {props.children}
        </div>
    );
};

export default Page;