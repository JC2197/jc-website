import './LandingPage.css';

function LandingPage() {
    const name = "Joe Conticello"
    const buttonList = ["About", "Projects", "Contact"];
    return <div className="page-wrapper">
        <h1>{name}</h1>
        <div className="button-list-wrapper">
            <div className="button-list">
                {buttonList.map((label) => (
                    <button key={label} >{label}</button>
                ))}
            </div>
        </div>
    </div>;
}

export default LandingPage;