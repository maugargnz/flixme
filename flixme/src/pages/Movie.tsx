import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import ReactPlayer from 'react-player'
import './Home.css';

const Movie: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton></IonBackButton>
        </IonButtons>
          <IonTitle>Movie</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Movie</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <ReactPlayer url='https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4' playing controls width='100%' height='85%'/>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Movie;