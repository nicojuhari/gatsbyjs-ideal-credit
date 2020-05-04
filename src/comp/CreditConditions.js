import React from 'react'

export default function CreditConditions() {
    return (
        <div className="credit-conditions">
            <div className="block">
                <div className="block-title">Condițiile de creditare</div>
                <ul>
                    <li>Vîrsta minimă 23 de ani</li>
                    <li>Sursă de venit stabilă</li>
                    <li>Capacitate deplină pentru deservirea creditului</li>
                    <li>Pentru Clienții noi, prezența FIDEJUSORLUI este OBLIGATORIE</li>
                </ul>
            </div>
            <div className="block">
                <div className="block-title">Documente</div>
                <ul>
                    <li>Buletinul de identitate</li>
                    <li>Cererea de credit și declarație(se depune în oficiu)</li>
                </ul>
                <p className="text-notice">* Aceleași condiții se aplică și la FIDEJUSOR</p>
            </div>
        </div>
    )
}
