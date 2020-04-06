import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupConfig, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Router pages*/
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Movie from './pages/Movie';

import {getCurrentUser} from './firebaseConfig'
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';

setupConfig({
  rippleEffect: true,
  mode: 'ios'
});

const RoutingSystem: React.FC = () => {
  return(
    <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/login" component={Login} exact={true} />
      <Route path="/register" component={Register} exact={true} />
      <Route path="/home" component={Home} exact={true} />
      <Route path="/movie" component={Movie} exact={true} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    </IonRouterOutlet>
  </IonReactRouter>
  )
}

const App: React.FC = () => {

  const [busy, setBusy] = useState(true);
  const dispatch = useDispatch()

  useEffect(() =>{
    getCurrentUser().then((user:any) => {
      // console.log(user)
      if(user){
        dispatch(setUserState(user.email))
        window.history.replaceState({}, '', '/home')
      } else {
        window.history.replaceState({}, '', '/')
      }
      setBusy(false)
    })
  })

return(
  <IonApp>
    {busy ? <IonSpinner /> : <RoutingSystem />}
  </IonApp>
)

}

export default App;
