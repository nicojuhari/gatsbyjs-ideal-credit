export const getDobindaByTarif = (suma,termen,tarif) => {
        
    //by suma
    let samount
    if(suma <= 5000) samount = 's_1_5';
    if(suma > 5000 && suma <= 10000) samount = 's_5_10'; 
    if(suma > 10000 && suma <= 15000) samount = 's_10_15';
    if(suma > 15000 && suma <= 20000) samount = 's_15_20';
    if(suma > 20000 && suma <= 25000) samount = 's_20_25';
    if(suma > 25000 && suma <= 35000) samount = 's_25_35';
    if(suma > 35000 && suma <= 50000) samount = 's_35_50';
    if(suma > 50000 && suma <= 100000) samount = 's_50_100';
    if(suma > 100000 && suma <= 150000) samount = 's_100_150';
    if(suma > 150000 && suma <= 200000) samount = 's_150_200';
    if(suma > 200000 && suma <= 300000) samount = 's_200_300';

    //by termen
    let tperiod
    if(termen <= 3) tperiod = 't_1_3'; 
    if(termen > 3 && termen <= 6) tperiod = 't_4_6'; 
    if(termen > 6 && termen <= 9) tperiod = 't_7_9';
    if(termen > 9 && termen <= 12) tperiod = 't_10_12';
    if(termen > 12 && termen <= 18) tperiod = 't_13_18';
    if(termen > 18 && termen <= 24) tperiod = 't_19_24';
    if(termen > 24 && termen <= 30) tperiod = 't_25_30';
    if(termen > 30 && termen <= 36) tperiod = 't_30_36';


    //Dobinda
    return Tarife[tarif - 1][samount][tperiod];
}


const Tarife = [
            {
                //tarif 1
                //amount 1000 - 5000 
                s_1_5: {
                        //period in months from 1 to 36
                        t_1_3 : 10, t_4_6: 9, t_7_9: 9, t_10_12: 8, t_13_18: 8, t_19_24: 8, t_25_30: 8, t_30_36: 8
                },
                //amount 5000 - 10000 
                s_5_10: { 
                        //period in months from 1 to 36
                        t_1_3 : 9, t_4_6: 8, t_7_9: 8, t_10_12: 8, t_13_18: 7, t_19_24: 7, t_25_30: 7, t_30_36: 7
                },
                //amount 10000 - 15000
                s_10_15: { 
                    //period in months from 1 to 36
                    t_1_3 : 9, t_4_6: 8, t_7_9: 7, t_10_12: 7, t_13_18: 7, t_19_24: 6, t_25_30: 6, t_30_36: 6
                },
                //amount 15000 - 20000
                s_15_20: { 
                    //period in months from 1 to 36
                    t_1_3 : 8, t_4_6: 7, t_7_9: 7, t_10_12: 7, t_13_18: 6, t_19_24: 6, t_25_30: 5, t_30_36: 5
                },
                //amount 20000 - 25000
                s_20_25: { 
                    //period in months from 1 to 36
                    t_1_3 : 8, t_4_6: 7, t_7_9: 7, t_10_12: 6.5, t_13_18: 6, t_19_24: 5.5, t_25_30: 5, t_30_36: 5
                },
                //amount 25000 - 35000
                s_25_35: { 
                    //period in months from 1 to 36
                    t_1_3 : 7.5, t_4_6: 7, t_7_9: 6.5, t_10_12: 6, t_13_18: 6, t_19_24: 5, t_25_30: 5, t_30_36: 5
                },
                //amount 35000 - 50000
                s_35_50: { 
                    //period in months from 1 to 36
                    t_1_3 : 7, t_4_6: 6.5, t_7_9: 6, t_10_12: 6, t_13_18: 6, t_19_24: 5, t_25_30: 5, t_30_36: 5
                },
                //amount 50000 - 100000
                s_50_100: { 
                    //period in months from 1 to 36
                    t_1_3 : 6.5, t_4_6: 6, t_7_9: 5.5, t_10_12: 5, t_13_18: 5, t_19_24: 5, t_25_30: 5, t_30_36: 5
                },
                //amount 100000 - 150000
                s_100_150: { 
                    //period in months from 1 to 36
                    t_1_3 : 6, t_4_6: 5.5, t_7_9: 5, t_10_12: 5, t_13_18: 4.5, t_19_24: 4.5, t_25_30: 4.5, t_30_36: 4.5
                },
                //amount 150000 - 200000
                s_150_200: { 
                    //period in months from 1 to 36
                    t_1_3 : 5.5, t_4_6: 5, t_7_9: 4.5, t_10_12: 4.5, t_13_18: 4, t_19_24: 4, t_25_30: 4, t_30_36: 4
                },
                //amount 200000 - 300000
                s_200_300: { 
                    //period in months from 1 to 36
                    t_1_3 : 5, t_4_6: 5, t_7_9: 4.5, t_10_12: 4, t_13_18: 4, t_19_24: 4, t_25_30: 4, t_30_36: 4
                }
    
            },
            {
                //tarif 2
                //amount 1000 - 5000 
                s_1_5: {
                        //period in months from 1 to 36
                        t_1_3 : 7, t_4_6: 7, t_7_9: 7, t_10_12: 7, t_13_18: 6, t_19_24: 6, t_25_30: 6, t_30_36: 6
                },
                //amount 5000 - 10000 
                s_5_10: { 
                        //period in months from 1 to 36
                        t_1_3 : 7, t_4_6: 7, t_7_9: 6.5, t_10_12: 6, t_13_18: 6, t_19_24: 5.5, t_25_30: 5, t_30_36: 5
                },
                //amount 10000 - 15000
                s_10_15: { 
                    //period in months from 1 to 36
                    t_1_3 : 7, t_4_6: 6.5, t_7_9: 6, t_10_12: 6, t_13_18: 5.5, t_19_24: 5, t_25_30: 4.5, t_30_36: 4.5
                },
                //amount 15000 - 20000
                s_15_20: { 
                    //period in months from 1 to 36
                    t_1_3 : 7, t_4_6: 6.5, t_7_9: 6, t_10_12: 5.5, t_13_18: 5, t_19_24: 5, t_25_30: 4.5, t_30_36: 4.5
                },
                //amount 20000 - 25000
                s_20_25: { 
                    //period in months from 1 to 36
                    t_1_3 : 6.5, t_4_6: 6, t_7_9: 5.5, t_10_12: 5, t_13_18: 5, t_19_24: 5, t_25_30: 4.5, t_30_36: 4.5
                },
                //amount 25000 - 35000
                s_25_35: { 
                    //period in months from 1 to 36
                    t_1_3 : 6.5, t_4_6: 6, t_7_9: 6.5, t_10_12: 6, t_13_18: 6, t_19_24: 4.5, t_25_30: 4.5, t_30_36: 4.5
                },
                //amount 35000 - 50000
                s_35_50: { 
                    //period in months from 1 to 36
                    t_1_3 : 6, t_4_6: 5.5, t_7_9: 5.5, t_10_12: 5, t_13_18: 5, t_19_24: 4.5, t_25_30: 4.5, t_30_36: 4
                },
                //amount 50000 - 100000
                s_50_100: { 
                    //period in months from 1 to 36
                    t_1_3 : 6, t_4_6: 5.5, t_7_9: 5, t_10_12: 5, t_13_18: 4.5, t_19_24: 4.5, t_25_30: 4, t_30_36: 4
                },
                //amount 100000 - 150000
                s_100_150: { 
                    //period in months from 1 to 36
                    t_1_3 : 5.5, t_4_6: 5, t_7_9: 4.5, t_10_12: 4.5, t_13_18: 4, t_19_24: 4, t_25_30: 3.5, t_30_36: 3
                },
                //amount 150000 - 200000
                s_150_200: { 
                    //period in months from 1 to 36
                    t_1_3 : 5, t_4_6: 4.5, t_7_9: 4, t_10_12: 3.5, t_13_18: 3.5, t_19_24: 3, t_25_30: 3, t_30_36: 3
                },
                //amount 200000 - 300000
                s_200_300: { 
                    //period in months from 1 to 36
                    t_1_3 : 4, t_4_6: 4, t_7_9: 3.5, t_10_12: 3.5, t_13_18: 3, t_19_24: 3, t_25_30: 3, t_30_36: 3
                }
            },
            {
                //tarif 3
                //amount 1000 - 5000 
                s_1_5: {
                        //period in months from 1 to 36
                        t_1_3 : 5, t_4_6: 5, t_7_9: 5, t_10_12: 4.5, t_13_18: 4.5, t_19_24: 4.5, t_25_30: 4, t_30_36: 4
                },
                //amount 5000 - 10000 
                s_5_10: { 
                        //period in months from 1 to 36
                        t_1_3 : 5, t_4_6: 5, t_7_9: 4.5, t_10_12: 4.5, t_13_18: 4.5, t_19_24: 4, t_25_30: 4, t_30_36: 4
                },
                //amount 10000 - 15000
                s_10_15: { 
                    //period in months from 1 to 36
                    t_1_3 : 5, t_4_6: 4.5, t_7_9: 4.5, t_10_12: 4, t_13_18: 3.5, t_19_24: 3.5, t_25_30: 3.5, t_30_36: 3
                },
                //amount 15000 - 20000
                s_15_20: { 
                    //period in months from 1 to 36
                    t_1_3 : 5, t_4_6: 4.5, t_7_9: 4.5, t_10_12: 4, t_13_18: 3.5, t_19_24: 3.5, t_25_30: 3.5, t_30_36: 3
                },
                //amount 20000 - 25000
                s_20_25: { 
                    //period in months from 1 to 36
                    t_1_3 : 5, t_4_6: 4.5, t_7_9: 4, t_10_12: 4, t_13_18: 3.5, t_19_24: 3.5, t_25_30: 3, t_30_36: 3
                },
                //amount 25000 - 35000
                s_25_35: { 
                    //period in months from 1 to 36
                    t_1_3 : 5, t_4_6: 4.5, t_7_9: 4, t_10_12: 3.5, t_13_18: 3.5, t_19_24: 3, t_25_30: 3, t_30_36: 3
                },
                //amount 35000 - 50000
                s_35_50: { 
                    //period in months from 1 to 36
                    t_1_3 : 4.5, t_4_6: 4, t_7_9: 3.5, t_10_12: 3.5, t_13_18: 3, t_19_24: 3, t_25_30: 3, t_30_36: 3
                },
                //amount 50000 - 100000
                s_50_100: { 
                    //period in months from 1 to 36
                    t_1_3 : 4.5, t_4_6: 4, t_7_9: 3.5, t_10_12: 3, t_13_18: 3, t_19_24: 3, t_25_30: 3, t_30_36: 3
                },
                //amount 100000 - 150000
                s_100_150: { 
                    //period in months from 1 to 36
                    t_1_3 : 4, t_4_6: 3.5, t_7_9: 3, t_10_12: 3, t_13_18: 3, t_19_24: 3, t_25_30: 3, t_30_36: 3
                },
                //amount 150000 - 200000
                s_150_200: { 
                    //period in months from 1 to 36
                    t_1_3 : 4, t_4_6: 3, t_7_9: 3, t_10_12: 3, t_13_18: 3, t_19_24: 3, t_25_30: 3, t_30_36: 3
                },
                //amount 200000 - 300000
                s_200_300: { 
                    //period in months from 1 to 36
                    t_1_3 : 4, t_4_6: 3, t_7_9: 3, t_10_12: 3, t_13_18: 3, t_19_24: 3, t_25_30: 3, t_30_36: 3
                }
            },
        ] 