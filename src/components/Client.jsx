import React from 'react'

const Client = () => {
    return (
        <section id="clients" class="clients">
            <div class="container">
                <div class="owl-carousel owl-theme" id="client">
                    <div class="item">
                        <a href="#">
                            <img src="assets/images/clients/c1.png" alt="brand-image" />
                        </a>
                    </div>
                    {/* <!--/.item--> */}
                    <div class="item">
                        <a href="#">
                            <img src="assets/images/clients/c2.png" alt="brand-image" />
                        </a>
                    </div>
                    {/* <!--/.item--> */}
                    <div class="item">
                        <a href="#">
                            <img src="assets/images/clients/c3.png" alt="brand-image" />
                        </a>
                    </div>
                    {/* <!--/.item--> */}
                    <div class="item">
                        <a href="#">
                            <img src="./assets/images/clients/c4.png" alt="brand-image" />
                        </a>
                    </div>
                    {/* <!--/.item--> */}
                    <div class="item">
                        <a href="#">
                            <img src="./assets/images/clients/c5.png" alt="brand-image" />
                        </a>
                    </div>
                    {/* <!--/.item--> */}
                </div>
                {/* <!--/.owl-carousel--> */}

            </div>
            {/* <!--/.container--> */}

        </section>
    )
}

export default Client