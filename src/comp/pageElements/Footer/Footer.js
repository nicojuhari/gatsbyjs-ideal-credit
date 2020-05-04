import React from 'react';

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-flex">
                    <div className="footer-block f-contacts">
                        <p className="f-block__title">Contacte</p>
                        <div>fix: +373 243 93 222;</div>
                        <div>mob: +373 790 66 5 66; 078 80 50 60;</div>
                        <div>email: info@idealcredit.md.</div>
                    </div>
                    <div className="footer-block f-contacts">
                        <p className="f-block__title">Adresa oficiilor</p>
                        <div><strong>m. Chișinău,</strong> str. Miron Costin 25, of .115</div>
                        <div><strong>or. Căușeni,</strong> str. M. Eminescu, nr. 17, etajul 4, of.47</div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Ideal Credit - Credite Rapide.
                </div>
            </div>
        </section>
    )
}
