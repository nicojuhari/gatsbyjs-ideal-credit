import React from "react"
// import { Link } from "gatsby"



// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

import MainLayout from '../comp/layouts/main';
import Calculator from '../comp/Calculator';
import CreditConditions from '../comp/CreditConditions';
import AboutCredits from '../comp/AboutCredits';

export default function HomePage() {
    const seo = {
        title: 'Credite Rapide în Moldova',
        description: 'Credite Rapide în Moldova pentru consum și business. Credite doar cu buletinul, fără gaj',
        keywords: 'credite, credite rapide, bani, moldova, împrumuturi'
    }

    return (
        <MainLayout info={seo}>
            <div className="container home-page">
                <div className="block-page-title">
                    <h1 className="page-title">Credite Rapide</h1>
                    <h2 className="page-subtitle">pentru necesități urgente</h2>
                </div>
                <Calculator/>
                <div className="flex-sm-column-l-row">
                    <CreditConditions />
                    <AboutCredits />
                </div>
            </div>
        </MainLayout>
        
    )
}

