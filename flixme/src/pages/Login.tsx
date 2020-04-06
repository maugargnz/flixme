import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonSearchbar, IonInput, IonButton, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import './_Global.css';
import { Link, useHistory } from 'react-router-dom';

/* Firebase */
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';



const Login: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login(){
    setBusy(true)
    const res: any = await loginUser(username, password)
    if (res){
      dispatch(setUserState(res.user.email))
      history.replace('/home')
      toast('You have logged in!')
    }
    setBusy(false)
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
        <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput type="email" placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonButton expand="full" onClick={login}>Login</IonButton>
        {/* <IonButton expand="full" routerLink="/register">Register</IonButton> */}
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;