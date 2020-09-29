import { IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import TransitItem, { TransitDirection } from '../transitItem/TransitItem';
import { pullStack, pushStack, unlockItem, isItemLocked } from '../../utils/stack';
import { useSwipeable } from 'react-swipeable'
import './sliderRow.scss';

import LockedProduct from '../lockedProduct/lockedProduct';

interface SliderRow {
    productsData: Product[];
}

export interface Product {
    id: number;
    name: string;
    price: number;
    img_url: string;
}

const SliderRow: React.FC<SliderRow> = ({ productsData }) => {
    const [products, setProducts] = useState<Product[]>(productsData);
    const [direction, setDirection] = useState<TransitDirection>('left');
    const [lockMap, setLockMap] = useState<number[]>([]);

    const handlers = useSwipeable({
        onSwipedLeft: () => [setDirection('left'), setProducts(pullStack(products, lockMap))],
        onSwipedRight: () => [setDirection('right'), setProducts(pushStack(products, lockMap))],
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      });

    return (
        <IonRow className="slider-row ion-no-padding" {...handlers}>
            { [0, 1, 2].map((position) => (
                <IonCol className="slider-col ion-no-padding" key={position}>
                    <TransitItem id={products[position].id} direction={direction}>
                            {isItemLocked(position, lockMap) && 
                                <LockedProduct 
                                    key={products[position].id}
                                    lockedProduct={products[position]}
                                    unlockProduct={() => setLockMap(unlockItem(position, lockMap))}
                                    openProduct={() => 'product link'}
                                />
                            }
                        <div
                            className="slide-image"
                            style={{
                                backgroundImage: `url(${products[position].img_url})`,
                            }}
                            onClick={() => !isItemLocked(position, lockMap) 
                                && setLockMap([...lockMap, position])
                            }
                        />
                    </TransitItem>
                </IonCol>
            )) }
        </IonRow>        
    );
};

export default SliderRow;
