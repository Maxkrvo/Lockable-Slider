import { IonContent, IonGrid, IonHeader, IonPage } from '@ionic/react';
import React from 'react';
import SliderRow from '../components/sliderRow/sliderRow';
import { heads, pants, shoes, tops } from './data';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="slider-grid">
          <SliderRow productsData={heads} />
          <SliderRow productsData={tops} />
          <SliderRow productsData={pants} />
          <SliderRow productsData={shoes} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
