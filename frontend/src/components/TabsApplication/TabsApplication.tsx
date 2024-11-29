import React, { useState } from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { RootState } from 'redux-tk/store/store';
import Tab from './ui/Tab';
import { useDispatch } from 'react-redux';
import { setActiveTab } from 'redux-tk/slice/sliceTemplateApp/slice';

const TabsApplication = () => {
    const [value, setValue] = useState('1');
    const tabsList = useSelector((state: RootState) => state.app.tabsList);
    const dispatch = useDispatch();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        let id = event.target.id
        console.log(id)
        setValue(id);
        dispatch(setActiveTab(id))
    };

    return (
        <div style={{ display: 'flex', flexFlow: 'row', gap: '20px', fontSize: '20px', padding: '8px' }}>
            {tabsList.map(tab => {
                return <Tab label={tab.title} id={tab.id} color={value === tab.id ? '#45BA76' : '#000000'} onClick={handleChange} />
            })}
        </div>
    );
};

export default TabsApplication;