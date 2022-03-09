import {ReactComponent as GitHubIcon} from 'assets/images/github.svg';


function navBar() {
    return(
        <header>
            <nav>
                <div className="navContainer">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/EuMarcel0" target="_blank" rel="noreferrer">    
                        <div>
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