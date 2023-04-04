import React, { useState } from 'react';

import './Burger.scss';
import Leftnav from './Leftnav';




const Burger = () => {
    enum ViewMode {
        lineOpned = 'lineOpned',
        lineclosed = 'lineclosed'
    }
    const [Open, setOpen] = useState<boolean>(false);
    const [lineClasse, setlineClasse] = useState<ViewMode>(ViewMode.lineOpned);

    const handleBurgerClick = () => {
        lineClasse === ViewMode.lineclosed ? setlineClasse(ViewMode.lineOpned) :
            setlineClasse(ViewMode.lineclosed);
            setOpen(!Open);

    };
    return (
        <div>
            <div className="StyledBurger" onClick={handleBurgerClick}>
                <div className={lineClasse}></div>
                <div className={lineClasse}></div>
                <div className={lineClasse}></div>
            </div>
            <Leftnav Open={Open} />
        </div>
    )
}

export default Burger;

