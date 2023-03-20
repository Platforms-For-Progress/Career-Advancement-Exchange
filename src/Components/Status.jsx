import '../index.css'

const Status = () => {
    const uid = window.location.href.split("/")[4];

    const goToCollab = () => {
        window.location.href = "/collab/" + uid;
    }
    return (
        <div className="status">
            <h1>Thank you for your submission!</h1>
            <div className='coller'>
            <div className="coller1">
                <h2>Our team will review your request and get back to you as soon as possible.</h2>
                <p>Check Status</p>
            </div>
            <div className="coller2" onClick={goToCollab}>
                <h2>Visit Creation Page</h2>
                <p>Here you can collaborate on your page with your engineer</p>
            </div>
            </div>
        </div>

    )
};
export default Status;