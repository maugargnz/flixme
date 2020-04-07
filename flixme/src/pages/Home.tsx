import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonImg, IonButton, IonButtons, IonIcon } from '@ionic/react';
import React from 'react';
// import axios from 'axios';
import './_Global.css';
import { personCircleOutline } from 'ionicons/icons';


import movies from '../data/movies'

// const API_KEY = '2f11a380e1e347fda2aa2861bdd39f20';
// const endpoint = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

// const sendGetRequest = () => {

//   return axios({
//     url: endpoint,
//     method: 'get'
//   }).then(response => {

//     console.log(response);
//     return response.data;
//   })
// };

const Home: React.FC = () => {

  // const [items, setItems] = React.useState([]);

  // React.useEffect(() => {

  //   sendGetRequest().then(data => setItems(data.articles));

  // }, []);

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
            <IonButtons slot="end">
              <IonButton routerLink="/user"><IonIcon slot="icon-only" icon={personCircleOutline} /></IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {movies.map((movie) =>
              <IonCol key={movie['title']} size="6" size-sm="4" size-md="3" size-lg="3" size-xl="2">
                <IonCard routerLink={`/movie/${movie.id}`}>
                  <IonImg src={movie.image} alt="img-cover" />
                </IonCard>
              </IonCol>)}
            {/* {items.map((item) =>
              <IonCol key={item['title']} size="6" size-sm="4" size-md="3" size-lg="3" size-xl="2">
                <IonCard>
                  <img src={item['urlToImage']} alt="img-cover" />
                  <IonCardHeader>
                    <IonCardSubtitle>{item['author']}</IonCardSubtitle>
                    <IonCardTitle>{item['title']}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {item['content']}
                  </IonCardContent>
                </IonCard>
              </IonCol>)} */}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;