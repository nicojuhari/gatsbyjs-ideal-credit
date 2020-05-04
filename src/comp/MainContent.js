import Calculator from '../comp/Calculator';
import CreditConditions from './CreditConditions';
import AboutCredits from './AboutCredits';

export default function MainContent() {
    return (
        <div className="home-page">
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
    )
}
