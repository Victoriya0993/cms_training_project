import React from "react";
import { Provider } from "react-redux";
import store from "./redux-tk/store/store";
import './reset.css';
import { ContentApplication } from "components/ContentApplication/ContentApplication";
import TabsApplication from "components/TabsApplication/TabsApplication";
import ContainerApplication from "components/ContainerApplication/ContainerApplication";

const App = () => {
  return (
    <Provider store={store}>
      <ContainerApplication>
        <TabsApplication />
        <ContentApplication />
      </ContainerApplication>
    </Provider>
  );
};

export default App;
