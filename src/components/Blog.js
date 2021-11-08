export default function Blog() {
    return (
        <section id="blog" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="section-title text-center">
                            <h1> <span className="alo">Hire Lab</span> News</h1> 
                            <span className="border-line"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news-wrapper  container-fluid">
                <div className='row'>
                <div className="col-sm-6 text-center no-padding">
                    <a className="news-inner" href="post-single.html" style={{background: "url(images/bg-1.jpg) no-repeat", backgroundSize: "cover"}}>
                        <div className="post-overlay"></div>
                        <div className="post-preview-content">
                            <h4 className="date">24 April, 2015</h4>
                            <h2 className="title">Clean & Flat one page theme</h2>
                            <span className="border-line"></span>
                            <p className="author">By Maria</p>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6 text-center no-padding">
                    <a className="news-inner" href="post-single.html" style={{background: "url(images/bg-2.jpg) no-repeat", backgroundSize: "cover"}}>
                        <div className="post-overlay"></div>
                        <div className="post-preview-content">
                            <h4 className="date">24 April, 2015</h4>
                            <h2 className="title">Clean & Flat one page theme</h2>
                            <span className="border-line"></span>
                            <p className="author">By Maria</p>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6 text-center no-padding">
                    <a className="news-inner" href="post-single.html" style={{background: "url(images/bg-3.jpg) no-repeat", backgroundSize: "cover"}}>
                        <div className="post-overlay"></div>
                        <div className="post-preview-content">
                            <h4 className="date">24 April, 2015</h4>
                            <h2 className="title">Clean & Flat one page theme</h2>
                            <span className="border-line"></span>
                            <p className="author">By Maria</p>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6 text-center no-padding">
                    <a className="news-inner" href="post-single.html" style={{background: "url(images/bg-1.jpg) no-repeat", backgroundSize: "cover"}}>
                        <div className="post-overlay"></div>
                        <div className="post-preview-content">
                            <h4 className="date">24 April, 2015</h4>
                            <h2 className="title">Clean & Flat one page theme</h2>
                            <span className="border-line"></span>
                            <p className="author">By Maria</p>
                        </div>
                    </a>
                </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </section>
    )
}