import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonSearchbar, IonButtons, IonBackButton, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import axios from 'axios';
import './_Global.css';
import { Link } from 'react-router-dom';
import { toast } from '../toast';

import { registerUser } from '../firebaseConfig'



const Register: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  async function register(){
    //Validation
    if(password !== cpassword){
      return toast('Password do not match')
    }
    if(username.trim() === '' || password.trim() === ''){
      return toast('Username and password are required')
    }

    const res = await registerUser(username, password)
    if(res){
      toast('You have registered sucessfully!')
    }

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle color="primary" size="large">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonInput type="email" placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonInput type="password" placeholder="Confirm Password" onIonChange={(e: any) => setCPassword(e.target.value)}/>
        <IonButton expand="full" onClick={register}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;