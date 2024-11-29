import React from "react";
import styles from './ContentApplication.module.css';
import { useSelector } from "react-redux";
import { RootState } from "redux-tk/store/store";
import CreatePage from "./ui/CreatePage/CreatePage";
import MainPage from "./ui/MainPage/MainPage";
import ContactPage from "./ui/ContactPage/ContactPage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";

const Pages = ({ idActiveTab, tabsList }) => {
	const tab = tabsList.find(tab => tab.id === idActiveTab)

	const pages = {
		'1': {
			title: 'Создать страницу',
			element: <CreatePage {...tab} />
		},
		'2': {
			title: 'Главная',
			element: <MainPage {...tab} />
		},
		'3': {
			title: 'Каталог',
			element: <CatalogPage {...tab} />
		},
		'4': {
			title: 'Контакты',
			element: <ContactPage {...tab} />
		}
	}

	return pages[idActiveTab].element
}

export const ContentApplication = () => {
	const tabsList = useSelector((state: RootState) => state.app.tabsList);
	const idActiveTab = useSelector((state: RootState) => state.app.idActiveTab);

	return (
		<div className={styles.container} >
			{Pages({ idActiveTab, tabsList })}
		</div >
	)

}
