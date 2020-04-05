import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonSearchbar, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';
import './_Global.css';
import { Link } from 'react-router-dom';



const Login: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function loginUser(){
    console.log(username, password)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle color="primary" size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent className="ion-padding">
        <IonInput placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonButton expand="full" onClick={loginUser}>Login</IonButton>
        {/* <IonButton expand="full" routerLink="/register">Register</IonButton> */}
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;