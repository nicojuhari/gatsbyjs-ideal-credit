import React from 'react'

export function ToateRateleGrafic({ grafic, total, closeGrafic }) {

    const graficArray = Object.entries(grafic);


    const garficTable = graficArray.map((rata, i) => {
        let date = new Date(rata[0]);
        let formatted_date = (date.getDate() < 10 ? '0': '') + date.getDate() + "-" + (date.getMonth() < 9 ? '0': '') + (date.getMonth() + 1) + "-" + date.getFullYear();
        return (<div key={i} className="rata-lunara">
                    <div className="rata-nr">{i + 1}</div>
                    <div className="rata-data">{formatted_date}</div>
                    <div className="rata-suma">{rata[1]} MDL</div>
                </div>);
    });

    return (
        <div className="grafic-content">
            <h5 className="grafic-title">Graficul de Achitare</h5>
            <div className="grafic-table">
                <div className="table-header">
                    <div className="rata-nr">Nr rata</div>
                    <div className="rata-data">Data de achitare</div>
                    <div className="rata-suma">Suma spre achitare</div>
                </div>
                {garficTable}
                <div className="grafic-total">
                    <div className="grafic-total-suma">Total: {total} MDL* </div>
                    <div className="grafic-close" onClick={closeGrafic}>&times;</div>
                </div>
            </div>
            <div className="text-notice">* suma totală este formată din credit, dobindă și comisionul de acordare.</div>
        </div>
        
    )
}
