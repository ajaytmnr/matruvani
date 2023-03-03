import editionsImg from '../../assets/editions.jpg'
function Editions() {
    return (
        <section className='product_slider'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={editionsImg} alt="issues" className="editionsImages"/>
                        <p>DEC 2021</p>
                    </div>
                    <div className="col-md-3">
                        <img src={editionsImg} alt="issues" className="editionsImages"/>
                        <p>NOV 2021</p>
                    </div>
                    <div className="col-md-3">
                        <img src={editionsImg} alt="issues" className="editionsImages"/>
                        <p>JAN 2021</p>
                    </div>
                    <div className="col-md-3">
                        <img src={editionsImg} alt="issues" className="editionsImages"/>
                        <p>DEC 2021</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Editions
