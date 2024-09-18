
// the main component on screen

// imports


// component
export default function Main(props) {

    // variables / props
    const {data} = props

    // handlers and functions


    // jsx 
    return (
        <div className="img-container">

            <img src={data.hdurl} alt={data.title || 'background image'} className="background-img"/>


        </div>
    )
}