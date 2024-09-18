// the modal(?) information side bar


// imports


// component
export default function Sidebar(props) {

    //props
    const { handleToggleModal, data } = props

    return (
        <div className="sidebar">

            {/* semi transparent view of photo backround in mobile mode */}
            <div onClick={handleToggleModal} // if they click off sidebar, it closes
                className="backgr-overlay">

            </div>
            <div className="sidebar-contents">
                <h2>{data?.title}</h2>

                <div className="description-container">
                    <p className="descriptionTitle" >{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>

                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
            
        </div>
    )
}

// when not in mobile mode, where is backr-overlay?