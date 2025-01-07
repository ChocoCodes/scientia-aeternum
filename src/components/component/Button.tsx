import { PageTrackerProp } from '../../utils/utils';
import GithubIcon from '../../../public/Github.svg';
import LeftArrowIcon from '../../../public/larr.svg';

export default function Button({ onMainPage }: PageTrackerProp) {
    return (
        <button onClick={ () => onMainPage ? 
            window.open('https://github.com/ChocoCodes', '_blank') :
            window.location.href = '/'
        }>
            <div className="btn-content">
                <img src={ onMainPage ? GithubIcon : LeftArrowIcon } 
                     alt={ onMainPage ? `Github Icon` : `Left Arrow Icon` }
                />
                <p>{ onMainPage ? `My Github` : `Back` }</p>
            </div>
        </button>
    )
}