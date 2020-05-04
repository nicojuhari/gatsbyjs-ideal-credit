import React from 'react';

import infoIcon from '../static/info-icon.svg';

export function TarifeNotice({tarif}) {

    const message = [
        'noi',
        'cu istorie pozitivă a 3 contracte de credit',
        'cu istorie pozitivă a 5 contracte de credit'
    ]


    return (
        <div  className="tarife-notice">
            <span className="info-icon">
                <img src={infoIcon} alt='info'/>
            </span>
            <span className="text-notice">
                Tariful {tarif} este prevăzut pentru clienții {message[tarif - 1]} 
            </span>
        </div>
    )
}
