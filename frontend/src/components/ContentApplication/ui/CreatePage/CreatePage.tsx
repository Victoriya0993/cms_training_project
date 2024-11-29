import React from 'react';
import Page from '../../../shared/Page/Page';
import styles from './CreatePage.module.css'
import Card from './ui/Card';
import { useDispatch } from 'react-redux';
import { createNewPage } from 'redux-tk/asyncthunk';
import { useSelector } from 'react-redux';
import { RootState } from 'redux-tk/store/store';

const Pages = ["Главная", "Каталог", "Контакты"]

const CreatePage = (props) => {
    const dispatch = useDispatch();
    const tabsList = useSelector((state: RootState) => state.app.tabsList);

    const onClick = (title) => (e) => {
        dispatch(createNewPage({ title: title }));
    }

    return (
        <Page {...props}>
            <div className={styles.second_title}>Выберите страницу, которую хотите добавить</div>
            <div className={styles.cards}>
                {Pages.map(page => {
                    if (!tabsList.find(tab => tab.title === page))
                        return <Card title={page} onClick={onClick(page)} />
                })}
            </div>
        </Page>
    );
};

export default CreatePage;