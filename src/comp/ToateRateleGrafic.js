import React from 'react'

export function ToateRateleGrafic({ grafic, total, closeGrafic }) {

    const garficTable = grafic.map((rata, i) => {

        return (<div key={i} className="rata-lunara">
                    <div className="rata-nr">{i + 1}</div>
                    <div className="rata-data">{ new Date(rata.date).toLocaleDateString('ro-RO') }</div>
                    <div className="rata-suma">{ rata.credit }</div>
                    <div className="rata-suma">{ rata.dobinda }</div>
                    <div className="rata-suma">{ rata.dobinda + rata.credit }</div>
                </div>);
    });

    return (
        <div className="grafic-content">
            <h5 className="grafic-title">Graficul de Achitare (MDL)</h5>
            <div className="grafic-table">
                <div className="table-header">
                    <div className="rata-nr">Nr</div>
                    <div className="rata-data">Data</div>
                    <div className="rata-suma">Credit</div>
                    <div className="rata-suma">Dobinda</div>
                    <div className="rata-suma">Total</div>
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
