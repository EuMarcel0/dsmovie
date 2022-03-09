import {ReactComponent as GitHubIcon} from 'assets/images/github.svg';
import './style.css';

function navBar() {
    return(
        <header>
            <nav className="container">
                <div className="navBar-Content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/EuMarcel0" target="_blank" rel="noreferrer">    
                        <div className="navBar-linkContact">
                            <GitHubIcon />
                            <p>/EuMarcel0</p>
                        </div>	
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default navBar;