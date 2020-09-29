import React from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from 'classnames';
import './TransitItem.scss';

export type TransitDirection = 'left' | 'right';

type TransitItemProps = {
  id: number;
  direction: TransitDirection;
}

const TransitItem: React.FC<TransitItemProps> = ({ id, direction, children }) => {
    return (
      <TransitionGroup>
        <CSSTransition
            key={id}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames={classNames({ 'left': direction === 'left', 'right': direction === 'right' }, 'slider')}
        >
          <div className="container">
            { children }
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
};

export default TransitItem;
