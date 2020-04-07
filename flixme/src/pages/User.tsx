import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLoading, IonButtons, IonBackButton } from '@ionic/react';
import React, { useState } from 'react';
import './_Global.css';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router';


import movies from '../data/movies'

const User: React.FC = () => {

    const username = useSelector((state: any) => state.user.username)

    const history = useHistory()

    const [busy, setBusy] = useState(false)

    async function logout() {
        setBusy(true)
        await logoutUser()
        history.replace('/')
        setBusy(false)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle color="primary">User</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle color="primary" size="large">User</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLoading message="Loggin out ..." duration={0} isOpen={busy} />
                <h1>Hello {username}</h1>
                <IonButton expand="full" onClick={logout}>Logout</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default User;