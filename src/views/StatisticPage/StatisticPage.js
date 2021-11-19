import Media from 'react-media';

import AuthBar from '../../components/authorization/AuthBar/AuthBar';
import Currency from '../../components/currency/Currency';
import NavigationBtns from '../../components/dashboard/Navigation';
import Balance from '../../components/dashboard/Balance/Balance';
import Diagram from '../../components/statistic/Diagram';

import './StatisticPage.scss';


export default function StatisticPage() {
    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
            (<> <AuthBar />
            <div className="statisticsPage">
                <div className="left-side-block" style={{"width" : "320px"}}>
                    
                    <NavigationBtns />
                    {/* <Balance />  */}
                    {/* <Currency/> */}
                </div>
                <div className="right-side-block" style={{"width" : "320px"}}>                    
                    <Diagram />
                </div>
            </div>
            </>
            )}
            />
            <Media query="(min-width: 768px) and (max-width: 1279px)" render={() =>
            (<> <AuthBar />
                <div className="left-side-block tablet-placement" style={{"width" : "768px"}}>         
                    <div className="sub-division-tablet">           
                        <NavigationBtns />
                        <Balance /> 
                    </div>
                <div style={{"width" : "334px", "display": "inline-flex"}}>
                    <Currency/>
                </div>
                </div>
                <div className="right-side-block" style={{"width" : "768px"}}>                    
                    <Diagram />
                </div>
            </>)}
            />
            <Media query="(min-width: 1280px)" render={() =>
            (<> <AuthBar />
            <div className="statisticsPage" style={{ "display": "flex"}}>
                <div className="left-side-block" style={{"width" : "465px"}}>                    
                    <NavigationBtns />
                    <Balance /> 
                    <div style={{"width" : "348px", "display": "inline-flex"}}>
                    <Currency/>
                    </div>
                </div>
                <div className="right-side-block" style={{"width" : "815px"}}>                    
                    <Diagram />
                </div>
            </div>
            </>
            )}
            />
        </>


    );
};