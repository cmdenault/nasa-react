// the text information footer bottom of screen

// imports


// component
export default function Footer(props) {

    //props
    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className="background-gradient"></div>

            <div className="title-subtitle">
                <h1>The APOD Project</h1>
                <h2>{data?.title}</h2>
                
            </div>


            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}