const Header = () => {
    return (
        <header>
            <h2>Scientia Aeternum</h2>
            <button onClick={() => window.location.href = 'https://github.com/ChocoCodes'}>
                <div className="to-github">
                    <img src="./src/assets/Github.svg" alt="Github Account" />
                    <p>My Github</p>
                </div>
            </button>
        </header>
    );
}

export default Header;