import coverImg from '../../assets/pr-gallery-image-01.jpg';
import thumbnailOne from '../../assets/pr-gallery-image-02.jpg';
import thumbnailTwo from '../../assets/pr-gallery-image-03.jpg';
import thumbnailThree from '../../assets/pr-gallery-image-03.jpg';

function BuyNow() {
    return (
        <section className="pb-5 single_product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 text-center">
                        <img className="large-view" src={coverImg} alt="largeView" />
                        <div className="img-select row p-2" style={{ cursor: 'pointer' }}>
                            <img className='col-3 m-0 p-1' src={thumbnailOne} alt='thumbnail' />
                            <img className='col-3 m-0 p-1' src={thumbnailTwo} alt='thumbnail' />
                            <img className='col-3 m-0 p-1' src={thumbnailThree} alt='thumbnail' />
                            <img className='col-3 m-0 p-1' src={thumbnailThree} alt='thumbnail' />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="product-content">
                            <h3>Mar 2022</h3>
                            <p className="pr-vl">Vol. 31</p>
                            <p className="pr-desc">FREE delivery: Saturday, Feb 19 Order within 2 hrs and 26 mins</p>
                            <p className="pr-price">Price : ₹ 100</p>
                            <div className="row">
                                <div className="col-2">
                                    <p className="pr-lang">Language: </p>
                                </div>
                                <div className="col-4">
                                    <select className="form-select col-6" aria-label="Default select example">
                                        <option>English</option>
                                        <option>Malayalm</option>
                                        <option>Tamil</option>
                                        <option>Hindi</option>
                                    </select>
                                </div>
                            </div>
                            {/* <a href="/cart">Buy Now</a> */}
                            {/* <a href="#">Buy Now</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BuyNow
