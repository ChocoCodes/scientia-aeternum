import { PageTrackerProp } from '../../utils/utils';

const Footer = ({ onMainPage }: PageTrackerProp) => {
    console.log(onMainPage);
    return (
        <footer className={ !onMainPage ? 'content-footer' : ''}>
            <p><a href="https://www.linkedin.com/in/john-roland-octavio-3a2457323" target="_blank">John Octavio</a> | 2024</p>
            <p>Science, Technology, and Society</p>
        </footer>
    )
}

export default Footer;