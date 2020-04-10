import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButtons, IonBackButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonProgressBar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import ReactPlayer from 'react-player'
import './_Global.css';
import movies from '../data/movies'

interface MovieProps extends RouteComponentProps<{
    id: string;
}> { }

const Movie: React.FC<MovieProps> = ({ match }) => {
    const movieIdNumber = + match.params.id
    console.log(movieIdNumber - 1)
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
                <IonCard>
                    <ReactPlayer url={movies[movieIdNumber - 1].video} playing controls width='100%' height='100%' />
                    <IonCardHeader>
                        <IonCardSubtitle>{movies[movieIdNumber - 1].subtitle}</IonCardSubtitle>
                        <IonCardTitle>{movies[movieIdNumber - 1].title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {movies[movieIdNumber - 1].description}
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Movie;