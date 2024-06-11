import "./ReadOur.css"
import post from './../../../images/post.jpg'
import post2 from './../../../images/post2.jpg'
import post3 from './../../../images/post3.jpg'

const ReadOur = () => {
    return (
        <div>
            <section id="ReadOur" className="container m-3 center">
                <h1 className="title">Read Our Fitness Blog</h1>
                <div className="blog">
                    <div className="blog__img-wrapper">
                        <div className="blog__img">
                            <img src={post} alt="" />
                            <div className="blog__popup">
                                <div className="blog__popup-content">
                                    <b>How to create your fitness routine<br />- John Smith</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__img-wrapper">
                        <div className="blog__img">
                            <img src={post2} alt="" />
                            <div className="blog__popup">
                                <div className="blog__popup-content">
                                    <b>Living a healthy lifestyle is easy<br />- Carla Harvis</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__img-wrapper">
                        <div className="blog__img">
                            <img src={post3} alt="" />
                            <div className="blog__popup">
                                <div className="blog__popup-content">
                                    <b>Marathon event rocked last Sunday<br />- Joshua Arreola</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div>
                <h1 style={{ paddingLeft: '270px', color: 'white', fontWeight: 'bold', backgroundColor: 'orange', textAlign: 'left', height: '80px', marginTop: '50px', alignItems: 'center', paddingTop: '18px' }}>Ready to get fit?</h1>
            </div>
        </div>
    );
};

export default ReadOur;