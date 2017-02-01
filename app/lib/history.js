import createHistory from 'history/lib/createHashHistory';
import {useRouterHistory} from 'react-router';

export default useRouterHistory(createHistory)({
    queryKey: false
});
