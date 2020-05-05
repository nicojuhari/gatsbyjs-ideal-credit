import React from 'react';
import { Link } from "gatsby";
import './../styles/pages/notFoundPage.scss';

export default function PageNotFound() {
    return (
        <div className='page-not-found'>
            <div className='page-not-found__content'>
                <h3>Pagina nu a fost găsită</h3>
                <Link to='/'>Apasă aici</Link>
            </div>
        </div>
    )
}
