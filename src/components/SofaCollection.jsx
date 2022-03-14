import React from 'react'

const SofaCollection = () => {
    return (
        <section id="sofa-collection">
            <div class="owl-carousel owl-theme" id="collection-carousel">
                <div class="sofa-collection collectionbg1" style={{
                    backgroundImage: 'url(/assets/images/collection/sofa-collection-banner.jpg)no-repeat'
                }}>
                    <div class="container">
                        <div class="sofa-collection-txt">
                            <h2>unlimited sofa collection</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div class="sofa-collection-price">
                                <h4>strting from <span>$ 199</span></h4>
                            </div>
                            <button class="btn-cart welcome-add-cart sofa-collection-btn"
                                onclick="window.location.href='#'">
                                view more
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!--/.sofa-collection--> */}
                <div class="sofa-collection collectionbg2"
                    style={{
                        backgroundImage: 'url(/assets/images/collection/table-banner.jpg)no-repeat'
                    }}
                >
                    <div class="container">
                        <div class="sofa-collection-txt">
                            <h2>unlimited dainning table collection</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div class="sofa-collection-price">
                                <h4>strting from <span>$ 299</span></h4>
                            </div>
                            <button class="btn-cart welcome-add-cart sofa-collection-btn"
                                onclick="window.location.href='#'">
                                view more
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!--/.sofa-collection--> */}
            </div>
            {/* <!--/.collection-carousel--> */}

        </section>
    )
}

export default SofaCollection