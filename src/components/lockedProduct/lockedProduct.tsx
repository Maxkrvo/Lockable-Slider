import { IonButton, IonIcon, CreateAnimation } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import { Product } from '../sliderRow/sliderRow';
import './lockedProduct.scss';

interface LockedProductProps {
    lockedProduct: Product;
    unlockProduct: () => void;
    openProduct: () => void;
}

const LockedProduct: React.FC<LockedProductProps> = ({ lockedProduct, unlockProduct, openProduct }) => {
    return (
        <div className="locked-product-wrapper" onClick={() => unlockProduct()}>
            <div className="overlay">
            <CreateAnimation
                    play
                    iterations={1}
                    duration={500}
                    keyframes={[
                    { offset: 0, opacity: '0'},
                    { offset: 0.5, opacity: '0.3'},
                    { offset: 1, opacity: '0.6'},
                    ]}
                >
                <IonButton
                    className="action-button"
                    shape="round"
                    color="dark"
                    onClick={() => openProduct()}
                >
                    <IonIcon icon={add}></IonIcon>
                </IonButton>
                </CreateAnimation>
                <CreateAnimation
                    play
                    iterations={1}
                    duration={4000}
                    keyframes={[
                    { offset: 0, opacity: '0', transform: 'translateY(0px)' },
                    { offset: 0.1, opacity: '1', transform: 'translateY(0px)' },
                    { offset: 0.8, opacity: '1', transform: 'translateY(0px)' },
                    { offset: 1, opacity: '0', transform: 'translateY(5px)' }
                    ]}
                >
                    <div className="productLabel">
                        { lockedProduct.name } &euro;{ lockedProduct.price }
                    </div>
                </CreateAnimation>
            </div>
        </div>
    )
}

export default LockedProduct;
