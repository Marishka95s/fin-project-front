import Media from 'react-media';

import AuthBar from '../../components/authorization/AuthBar/AuthBar';
import Currency from '../../components/currency/Currency';
import NavigationBtns from '../../components/dashboard/Navigation';
import Balance from '../../components/dashboard/Balance/Balance';
import Diagram from '../../components/statistic/Diagram';
import './CurrencyPage';


import './CurrencyPage.scss';


export default function CurrencyPage() {
    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
            (<> <AuthBar />
            <div className="statisticsPage">
                <div className="left-side-block" >                    
                    <NavigationBtns />                    
                </div>
                <div className="right-side-block" > 
                <div className="currency-block" style={{"width" : "334px", "display": "inline-flex", "align-items": "center", "justify-content": "center", "margin-top": "30px"}}>                  
                    <Currency/>
                </div> 
                </div>
            </div>
            </>
            )}
            />            
        </>


    );
};