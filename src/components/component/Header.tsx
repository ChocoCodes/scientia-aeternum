import { PageTrackerProp } from '../../utils/utils';
import Button from '../component/Button';

export default function Header ({ onMainPage } : PageTrackerProp) {
    return (
        <header>
            { onMainPage && <h2>Scientia Aeternum</h2> }
            <Button onMainPage={ onMainPage } />
            { !onMainPage && <h2>Scientia Aeternum</h2> }
        </header>
    );
}