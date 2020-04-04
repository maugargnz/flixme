import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonList, IonItem, IonButton } from '@ionic/react';
import React from 'react';
import axios from 'axios';
import './Home.css';

const API_KEY = '2f11a380e1e347fda2aa2861bdd39f20';
const  endpoint  = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

const sendGetRequest = () => {

  return axios({
    url: endpoint,
    method: 'get'
  }).then(response => {

    console.log(response);
    return response.data;
  })
};

const Home: React.FC = () => {

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {

    sendGetRequest().then(data => setItems(data.articles));

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Flixme</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle color="primary" size="large">Flixme</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="6" size-sm="4" size-md="3" size-lg="3" size-xl="2">
              <IonCard routerLink="/movie">
                <img src="http://www.coverwhiz.com/content/The-Fast-And-The-Furious.jpg" alt="cover-img"/>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList color="primary">

{
  items.map(item => {

    return (
      <IonItem>
        {item['title']}
        <IonButton href={item['url']} color="primary" slot="end">See article</IonButton>
      </IonItem>
    );
  })
}

</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
