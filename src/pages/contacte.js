import React, { useState } from "react";
import axios from "axios";
import MainLayout from '../comp/layouts/main';


export default function ContactPage(props) {
        
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/334818cf-734d-4c79-b930-d9f75f8c1760",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Mesajul a fost transmis cu success!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
    };

    const seo = {
        title: 'Contactele Companiei Ideal Credit',
        description: 'Contactele Companiei de Creditare Ideal Credit ce oferă credite rapide în Republica Moldova pentru consum și afacere',
        keywords: 'contacte, credite, bani, moldova, împrumuturi'
    }

    return (

        <MainLayout info={seo}>
            <div className="container">
                <div className="block-page-title">
                    <h1 className="page-title">Contacte</h1>
                </div>
                <div className="contact-row flex-sm-column-l-row">
                    <div className="contact-details">
                        <div className="block">
                            <p className="block-title">Contacte</p>
                            <div>fix: +373 243 93 222;</div>
                            <div>mob: +373 790 66 5 66; 078 80 50 60;</div>
                            <div>email: info@idealcredit.md.</div>
                        </div>
                        <div className="block">
                            <p className="block-title">Adresa oficiilor</p>
                            <div><strong>m. Chișinău,</strong> str. Miron Costin 25, of .115</div>
                            <div><strong>or. Căușeni,</strong> str. M. Eminescu, nr. 17, etajul 4, of.47</div>
                        </div>
                    </div>
                    <div className='contact-form block'>
                        <div>
                            
                        <form onSubmit={handleOnSubmit} >
                            <div className='form-control'>
                                <label>Nume: </label>
                                <input type="text" name="name" />
                            </div>
                            <div className='form-control'>
                                <label>Email: </label>
                                <input type="email" name="email" />
                            </div>
                            <div className='form-control'>
                                <label>Mesaj: </label>
                                <textarea name='message'></textarea>
                            </div>
                            <div className='form-control'>
                                <button type="submit">Trimite Mesajul</button>
                            </div>
                            
                            {serverState.status && (
                                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                    {serverState.status.msg}
                                </p>
                            )}
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
        
    )
}

ContactPage.getInitialProps = async function(){
    return {title : 'Contactele Companiei Ideal Credit'}
}

