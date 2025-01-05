const Header = () => {
    return (
        <header>
            <h2>Scientia Aeternum</h2>
            <button onClick={ () => window.open('https://github.com/ChocoCodes', '_blank') }>
                <div className="to-github">
                    <img src="./src/assets/Github.svg" alt="Github Account" />
                    <p>My Github</p>
                </div>
            </button>
        </header>
    );
}

export default Header;