import React, {useState, useEffect} from 'react';
import { getDobindaByTarif } from './calculator/Tarife';
import { formatDate, addMonths } from './calculator/Date';
import { daeCalculator } from './calculator/Dae';
import { TarifeNotice } from './TarifeNotice';
import { ToateRateleGrafic } from './ToateRateleGrafic';



export default function Calculator() {

    //From DOM, selected by user
    const [creditSuma, setCreditSuma] = useState(5000);
    const [creditTermen, setCreditTermen] = useState(6);
    const [creditTarif, setCreditTarif] = useState(1);
    const [totalSpreAchitare, setTotalSpreAchitare] = useState(0);
    const [allGrafic, setAllGrafic] = useState();
    const [showGrafic, setShowGrafic] =useState(false);
    
    // Our configs
    const [creditMaxSuma] = useState(50000);
    const [creditMaxTermen] = useState(36);

    // Created values based on above variables
    const [rataLunara, setRataLunara] = useState();
    const [comisionAcordare, setComisionAcordare] = useState();
    const [penalitateRata, setPenalitateRata] = useState();
    const [DAE, setDAE] = useState();
    
    //const tarifeRates = Tarife;

    const handleAmount = (e) => {
        setCreditSuma(Number(e.target.value));
    }

    const handleTermen = (e) => {
        setCreditTermen(Number(e.target.value));
    }

    const changeTarif = (num) => {
        setCreditTarif(num);
    }

    const calcComision = (suma) => {
       
        //Comision Acordare
        let comisionRata, comisionMDL;
        
        if(suma <= 100000) {comisionRata = 3}
        if(suma > 100000 && suma <= 200000) {comisionRata = 2.5}
        if(suma > 200000) {comisionRata = 2}
        
        comisionMDL = Math.floor(suma * comisionRata/100);
        
        return comisionMDL;

    }

    const calcPenalitate = (suma) => {
        //Penalitate
        let penalitate;

        if(suma <= 5000) penalitate = 40;
        if(suma > 5000 && suma <= 10000) penalitate = 50;
        if(suma > 10000 && suma <= 20000) penalitate = 60;
        if(suma > 20000 && suma <= 30000) penalitate = 70;
        if(suma > 30000 && suma <= 50000) penalitate = 80;
        if(suma > 50000 && suma <= 80000) penalitate = 90;
        if(suma > 80000 && suma <= 100000) penalitate = 100;
        if(suma > 100000 && suma <= 150000) penalitate = 150;
        if(suma > 150000) penalitate = 200;
        
        setPenalitateRata(penalitate);
    }


    const calculatorCredit = (suma, termen) => {
        
        //setComisionAcordare
        const com = calcComision(suma);
        setComisionAcordare(com);

        // setPenalitateRata
        calcPenalitate(suma);

        // getDobindaTarif
        const dobTarif = getDobindaByTarif(suma, termen, creditTarif);

        //calc suma rate
        const graficeSume = createPlati(suma, termen, dobTarif);
        setRataLunara(graficeSume[0]);

        //calc total spre achitare
        const totalDeAchitat = graficeSume.reduce((a, b) => a + b, 0) + com;
        setTotalSpreAchitare(totalDeAchitat);
        
        //creaza grafic de achitare Data + Suma
        const graficDataSuma = payRates(graficeSume,termen);

        // set the final grafic to be displayed
        setAllGrafic(graficDataSuma);

        //DAE
        let guess = 0.01;
        const calcDAE = daeCalculator(suma, todayDate(), graficDataSuma, guess) * 100;
        setDAE(calcDAE.toFixed(2));
        
    }

    //Today
    const todayDate = () => {
        return formatDate(new Date());
    }
    //create array of dates and suma
    const payRates = (totalLunarMDL, termen) => {

        let datesArray = {}
        for(var i = 0; i < termen; i++){
            var nextMonth = addMonths(i + 1);
            var d = formatDate(nextMonth);
            datesArray[d] = totalLunarMDL[i];
        }
        return datesArray;
    }

    const createPlati = (suma, termen, dobTarif) => {
            
        let soldSuma = suma;
        let creditLunar = Math.floor(suma / termen);
        let dubindaLunarMDL;
        let totalLunarMDL = [];
        let rest =suma % termen;
        
        for(var j = 0; j < termen; j++){
            //Dobinda
            dubindaLunarMDL = Math.floor((soldSuma * dobTarif) / 100);
            
            //Rata credit
            if((j + 1) === termen ){ creditLunar = creditLunar + rest }
            soldSuma = soldSuma - creditLunar;

            //total lunar Array
            totalLunarMDL.push(creditLunar +  dubindaLunarMDL);    
        }
        return totalLunarMDL;
    }

    const toggleGrafic = () => {
        setShowGrafic(prev => !prev);
    }   

    useEffect(() => {
        
        calculatorCredit(creditSuma, creditTermen); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[creditSuma, creditTermen, creditTarif])

    useEffect(() => {
        let el = document.getElementById('grafic');
        if(showGrafic) el.scrollIntoView({ behavior: 'smooth' });
    },[showGrafic])

    return (
        <>
            <div className="calculator">
                <div className="calculator__content">
                    <div className="col-one">
                        <h3 className="calculator__title">Calculator de credit</h3>
                        <div className="credit-tarife">
                            <span className={creditTarif === 1 ? 'active': ''} onClick={() => changeTarif(1)}>Tarif 1</span>
                            <span className={creditTarif === 2 ? 'active': ''} onClick={() => changeTarif(2)}>Tarif 2</span>
                            <span className={creditTarif === 3 ? 'active': ''} onClick={() => changeTarif(3)}>Tarif 3</span>
                        </div>
                        <div className="calculator__ranges">
                            <div className="credit-suma">
                                <div className="range-label">
                                    <div>Alegeți suma:</div>
                                    <span className="display-data">{creditSuma} MDL</span>
                                </div>
                                <input type="range" min="1000" step="500" value={creditSuma} max={creditMaxSuma} onChange={handleAmount}/>
                            </div>
                            <div className="credit-termen">
                                <div className="range-label">
                                    <div>Alegeți termen:</div>
                                    <span className="display-data">{creditTermen} {creditTermen > 1 ? 'Luni' : 'Lună' }</span>
                                </div>
                                <input type="range" min="1" value={creditTermen} max={creditMaxTermen} onChange={handleTermen}/>
                            </div> 
                        </div>
                        <TarifeNotice tarif={creditTarif}/>
                    </div>
                    <div className="col-two">
                        <div className="calculator__results">
                            <div className="prima-rata">
                                <div className="res-title">Prima rată</div>
                                <div className="res-suma">{rataLunara} MDL</div>
                            </div>
                            <div className="flex-center-space-between flex-row alte-sume">
                                <div className="alte-sume__block">
                                    <p className="res-title">Comision</p>
                                    <p className="res-suma">{comisionAcordare} MDL</p>
                                </div>
                                <div className="alte-sume__block">
                                    <p className="res-title">Penalitate</p>
                                    <p className="res-suma">{penalitateRata} MDL/zi</p>
                                </div>
                                <div className="alte-sume__block">
                                    <p className="res-title">DAE</p>
                                    <p className="res-suma">{DAE} %</p>
                                </div>
                            </div>
                            <div className="total-suma">
                                <span className="res-title">Total spre rambursare: </span>
                                <span className="res-suma"> {totalSpreAchitare} MDL</span>
                            </div>
                        </div>
                        <div className="view-all-rates" 
                        onClick={toggleGrafic}>
                            {showGrafic ? 'Ascunde Graficul' : 'Vezi toate ratele'}</div>
                    </div>
                </div>
            </div>
            <div id="grafic">
            {showGrafic && <ToateRateleGrafic grafic={allGrafic} total={totalSpreAchitare} closeGrafic={toggleGrafic}/>}
            </div>
            
        </>    
    )
}
