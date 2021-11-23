import Media from 'react-media';
import React, { Suspense} from 'react';
import { Redirect } from 'react-router-dom';
import AuthBar from '../../components/authorization/AuthBar/AuthBar';
import Currency from '../../components/currency/Currency';
import NavigationBtns from '../../components/dashboard/Navigation';
import './CurrencyPage';
import Loader from 'react-loader-spinner';

import PrivateRoute from '../../components/PrivateRoute'

import './CurrencyPage.scss';

export default function CurrencyPage() {
  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <>
            {' '}
            <AuthBar />
            <div style={{ overflow: "scroll", height: "90vh"}}>
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
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
            <Suspense fallback={<Loader type="ThreeDots" color="brown" height={80} width={80} />}>                
                <PrivateRoute path="/fin-project-front/currency" redirectTo="/fin-project-front/home" >
                    <Redirect to="/fin-project-front/home" />
                </PrivateRoute>
            </Suspense>
          </>
        )}
      />
    </>
  );
}
