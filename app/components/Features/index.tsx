
import React from 'react';

const Features = () => {
    return (
        <div className="xc-features-one pb-80">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-xl-3 col-md-6">
                        <div className="xc-feature-one__item">
                            <div className="xc-feature-one__icon">
                                <i className="icon-box"></i>
                            </div>
                            <div className="xc-feature-one__content">
                                <h3 className="xc-feature-one__title">Fasted Delivery</h3>
                                <p className="xc-feature-one__info">Delivery in 24/H</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="xc-feature-one__item">
                            <div className="xc-feature-one__icon">
                                <i className="icon-clock"></i>
                            </div>
                            <div className="xc-feature-one__content">
                                <h3 className="xc-feature-one__title">24 Hours Return</h3>
                                <p className="xc-feature-one__info">Money-back guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="xc-feature-one__item">
                            <div className="xc-feature-one__icon">
                                <i className="icon-credit-card"></i>
                            </div>
                            <div className="xc-feature-one__content">
                                <h3 className="xc-feature-one__title">Secure Payment</h3>
                                <p className="xc-feature-one__info">Your money is safe</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="xc-feature-one__item">
                            <div className="xc-feature-one__icon">
                                <i className="icon-support"></i>
                            </div>
                            <div className="xc-feature-one__content">
                                <h3 className="xc-feature-one__title">Support 24/7</h3>
                                <p className="xc-feature-one__info">Live contact/message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
