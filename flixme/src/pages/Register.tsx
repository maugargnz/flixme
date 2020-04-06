import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import './_Global.css';
import { Link } from 'react-router-dom';
import { toast } from '../toast';

import { registerUser } from '../firebaseConfig'



const Register: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  async function register() {
    //Validation
    setBusy(true)
    if (password !== cpassword) {
      setBusy(false)
      return toast('Password do not match')
    }
    if (username.trim() === '' || password.trim() === '') {
      setBusy(false)
      return toast('Username and password are required')
    }
    const res = await registerUser(username, password)
    setBusy(false)
    if (res) {
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
      <IonLoading message="Registration in progress!" duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput type="email" placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonInput type="password" placeholder="Confirm Password" onIonChange={(e: any) => setCPassword(e.target.value)} />
        <IonButton expand="full" onClick={register}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;