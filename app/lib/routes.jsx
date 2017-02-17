import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from 'lib/redux-store';

import ChoosePlan from 'containers/ChoosePlan';
import ChooseTemplate from 'containers/ChooseTemplate';
import Home from 'containers/Home';
import PaymentResult from 'containers/PaymentResult';
import Privacy from 'containers/Privacy';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';

const history = syncHistoryWithStore(browserHistory, store);

//TODO Location "/payment-success?success=true&success=true&responseFrom=Response_From_Submit_Page&refId=2c92c0f85a407b84015a45f051275373&token=LnyI75yg0Y3GzaG8yNCPzAeqA0frMKYh&signature=SXt0%2FQu72qxI97EMiCfOTzWNwQvx5k%2B%2FxJlsGFp1lWFK0BQRpGgOhkqNbmNM4k465zOYGiP%2Bvebi%2F%2FRLGt2dhxT7J3MsxSEfaiIMwW4lSiCcAMaAfI8K4waLT%2BtT9r3FggQYFT1UznZc7BPwAQiwRmbPm5wiW1qMoceF8aI9jYYiBR9WRh%2FWr43MNS%2F8fZopibu%2BSJnH0ioL%2Baf%2FvLNXBAoLeldC4xGTq4ZEcod9l%2BgegIZPXeQu2c9SQwYPE%2FVPWxpOtPO1ODYUpt1%2BLuSaTO3e81Rx4go2BSkDT58kIh8qXsM%2FV4vZULHlh05NK6FlNYMxrsAtdRZ9dL0WLHK0eQ%3D%3D&tenantId=16925" did not match any routes

export default (
    <Router history={history}>
        <Route name='root' component={Root}>
            <Route name='home' path='/' component={Home} />
            <Route name='signup' path='/signup' component={SignUp} />
            <Route name='chooseTemplate' path='/choose-template' component={ChooseTemplate} />
            <Route name='choosePlan' path='/choose-plan' component={ChoosePlan} />
            <Route name='privacy' path='/privacy' component={Privacy} />
            <Route name='paymentResult' path='/payment-result' component={PaymentResult} />
        </Route>
    </Router>
);
