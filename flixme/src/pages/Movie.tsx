import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButtons, IonBackButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonProgressBar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import ReactPlayer from 'react-player'
import './_Global.css';

interface MovieProps extends RouteComponentProps<{
    id: string;
  }> {}

const Movie: React.FC<MovieProps> = ({match}) => {
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
                        <IonProgressBar color="primary" type="indeterminate"></IonProgressBar>
                    </IonToolbar>
                </IonHeader>
                <h1>User {match.params.id}</h1>
                <IonCard>
                    <ReactPlayer url='https://www1260.o0-3.com/token=m02Ohp69YzHLytO7SsPq1g/1586059574/189.216.0.0/25/9/9b/7c623453ceda19bb867dd872a9ce59b9-480p.mp4' playing controls width='100%' height='100%' />
                    <IonCardHeader>
                        <IonCardSubtitle>Rápidos y Furiosos 1</IonCardSubtitle>
                        <IonCardTitle>Fast and Furious</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Una misteriosa banda de delincuentes se dedica a robar camiones en marcha desde vehículos deportivos. La policía decide infiltrar un hombre en el mundo de las carreras ilegales para descubrir posibles sospechosos.
                      </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Movie;