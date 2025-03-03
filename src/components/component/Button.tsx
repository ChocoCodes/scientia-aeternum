import { PageTrackerProp } from '../../utils/utils';
import GithubIcon from '/icons/Github.svg';
import LeftArrowIcon from '/icons/larr.svg';

export default function Button({ onMainPage }: PageTrackerProp) {
    return (
        <button onClick={ () => onMainPage ? 
            window.open('https://github.com/ChocoCodes', '_blank') :
            window.location.href = '/'
        }>
            <div className={ onMainPage ? "main-btn-content" : "back-btn-content"}>
                <img src={ onMainPage ? GithubIcon : LeftArrowIcon } 
                     alt={ onMainPage ? `Github Icon` : `Left Arrow Icon` }
                />
                <p className={ !onMainPage ? 'back' : '' }>{ onMainPage ? `My Github` : `Back` }</p>
            </div>
        </button>
    )
}