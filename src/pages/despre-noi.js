import React from "react"
import MainLayout from '../comp/layouts/main';

import regAdministrare from '../static/docs/Regulament_Administrare_Ideal_Credit.pdf';
import regPrestareServicii from '../static/docs/Regulament_Prestare_Servicii_Ideal_Credit.pdf';
import regSolutionare from '../static/docs/Regulament_Solutionarea_Pretentiilor_Ideal_Credit.pdf';
import ordinAprobare from '../static/docs/Ordin_Regulamente_Ideal_Credit.pdf';

export default function AboutPage() {
    const seo = {
        title: 'Despre Compania de Creditare Ideal Credit',
        description: 'Credite Rapide în Moldova pentru consum și afacere',
        keywords: 'despre noi, credite, bani, moldova, împrumuturi'
    }

    return (
        <MainLayout info={seo}>
            <div className="container">
                <div className="block-page-title">
                    <h1 className="page-title">Despre noi</h1>
                </div>
                <div className="page-content">
                <p>Organizația de Creditare Nebancară Ideal Credit SRL 
                    activează cu success pe piața financiară nebancară din 2010. 
                    În acest timp compania a reușit să înregistreze o dezvoltare continuă, 
                    oferind clienților săi suport financiar și consultanță profesională în 
                    vederea soluționării problemelor acestora.</p>

                <p>Credem în performanța pe care oamenii sînt capabili să o atingă. 
                    Acesta este motorul activității noastre, drept dovadă fiind abordarea 
                    individuală a fiecarui client în parte și oferirea serviciilor simple și accesibile.</p>

                <p>Activitatea O.C.N. Ideal Credit SRL este bazată pe o profundă analiză financiară astfel încît
                    să ne asumăm riscuri calculate dar în acelaș timp să rămînem flexibili pentru clienții noștri.
                    Aceatsa este garanția stabilității companiei și profesionalizmului colegilor noștri.</p>

                <p>Compania Ideal Credit vă ofera credite timp de 1 oră,  doar cu buletinul și fără gaj, 
                    suma împrumuturilor încep de la 1000 lei pînă la 300 000 lei.</p>
                </div>
                <div className="regulamente">
                    <h2>Regulamente Interne al OCN Ideal Credit</h2>
                    <div className="regulamente-links">
                        <a href={regAdministrare}>1. Regulamentul de Administrare</a>
                        <a href={regPrestareServicii}>2. Regulamentul de Prestare a Serviciilor</a>
                        <a href={regSolutionare}>3. Regulamentul de Soluționare a Petițiilor</a>
                    </div>
                    <div className="regulamente-ordin">
                        <a href={ordinAprobare}><em>Ordin de Aprobare a Regulamentelor</em></a>
                    </div>
                </div>
            </div>
        </MainLayout>
        
    )
}
