import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonSearchbar } from '@ionic/react';
import React from 'react';
import axios from 'axios';
import './_Global.css';
import { useSelector } from 'react-redux';

const API_KEY = '2f11a380e1e347fda2aa2861bdd39f20';
const endpoint = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

const movies = [
  {
    title: 'Fast and Furious 1',
    subtitle: 'Rápidos y Furiosos 1',
    description: 'Una misteriosa banda de delincuentes se dedica a robar camiones en marcha desde vehículos deportivos. La policía decide infiltrar un hombre en el mundo de las carreras ilegales para descubrir posibles sospechosos.',
    image: 'http://www.coverwhiz.com/content/The-Fast-And-The-Furious.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 2',
    subtitle: 'Rápidos y Furiosos 2',
    description: 'Brian O’Connor (Paul Walker), un policía caído en desgracia, fue un adicto a la velocidad y ahora está pagando un precio por ello. Tal y como lo ven sus antiguos jefes y los altos mandos del FBI, este agente de incógnito les echó a perder una de las investigaciones más importantes que habían emprendido.',
    image: 'http://www.coverwhiz.com/content/2-Fast-2-Furious.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 3',
    subtitle: 'Rápidos y Furiosos 3',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/The-Fast-And-The-Furious-Tokyo-Drift.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 4',
    subtitle: 'Rápidos y Furiosos 4',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Fast-And-Furious.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 5',
    subtitle: 'Rápidos y Furiosos 5',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Fast-Five.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 6',
    subtitle: 'Rápidos y Furiosos 6',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Fast-And-Furious-6.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 7',
    subtitle: 'Rápidos y Furiosos 7',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Fast-And-Furious-7.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Fast and Furious 8',
    subtitle: 'Rápidos y Furiosos 8',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/The-Fate-Of-The-Furious.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Hobs',
    subtitle: 'Hobs',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Hobbs-And-Shaw.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Vengadores',
    subtitle: 'Vengadores',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Iron-Man.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Vengadores',
    subtitle: 'Vengadores',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/The-Incredible-Hulk.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Vengadores',
    subtitle: 'Vengadores',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Iron-Man-2.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Vengadores',
    subtitle: 'Vengadores',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Thor.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
  {
    title: 'Vengadores',
    subtitle: 'Vengadores',
    description: 'Shaun Boswell es un chico que no acaba de encajar en ningún grupo. En el instituto es un solitario, su única conexión con el mundo de indiferencia que le rodea es a través de las carreras ilegales, lo que no le ha convertido en el chico favorito de la policía.',
    image: 'http://www.coverwhiz.com/content/Captain-America-The-First-Avenger.jpg',
    video: 'https://www43.o0-1.com/token=VLMuUDkIg0Ts3VSYWD2t1w/1586041021/189.216.0.0/28/8/22/5a7328cbb98cfe9298a77ff2d192d228-480p.mp4'
  },
]

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

  const username = useSelector((state: any) => state.user.username)

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
        <IonSearchbar></IonSearchbar>
  <h1>Hello {username}</h1>
        <IonGrid>
          <IonRow>
            {movies.map((movie) =>
              <IonCol key={movie['title']} size="6" size-sm="4" size-md="3" size-lg="3" size-xl="2">
                <IonCard routerLink="/movie">
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