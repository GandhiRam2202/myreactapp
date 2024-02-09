import React from 'react';


const CompA = ({ obj }) => {
    return (
        <div className='row'>
            {
                obj.map((item, index) => {
                    if (item.subscribe === 'FREE') {
                        return (
                            <>

                                <div key={index} className='col-sm-12 col-md-6 col-lg-4 p-5'>
                                    <div className='card rounded-5'>
                                        <div className='card-body p-0'>

                                            <div className='card-header p-2 m-0 text-center rounded-top-5 bg-primary'>
                                                <h5 className='p-0 m-0 text-warning'>{item.subscribe}</h5>
                                                <h1 className='p-0 m-0 text-white'>{item.header}</h1>
                                            </div>
                                            <div className='card-text p-3'>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.user}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.storage}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.public}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.access}</h5>
                                                <h5 className='opacity-50'><i className='fa fa-times text-danger'></i>{item.private}</h5>
                                                <h5 className='opacity-50'><i className='fa fa-times text-danger'></i>{item.support}</h5>
                                                <h5 className='opacity-50'><i className='fa fa-times text-danger'></i>{item.subdomain}</h5>
                                                <h5 className='opacity-50'><i className='fa fa-times text-danger'></i>{item.report}</h5>
                                            </div>
                                            <div className='card-footer border rounded-bottom-5 d-flex justify-content-center'>
                                                <button className='btn rounded-5 col-8'>BUTTON</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    }
                    else if (item.subscribe === 'PLUS') {
                        return (
                            <>

                                <div key={index} className='col-sm-12 col-md-6 col-lg-4 p-5'>
                                    <div className='card rounded-5'>
                                        <div className='card-body p-0'>

                                            <div className='card-header p-2 m-0 text-center rounded-top-5 bg-primary'>
                                                <h5 className='p-0 m-0 text-warning'>{item.subscribe}</h5>
                                                <h1 className='p-0 m-0 text-white'>{item.header}</h1>
                                            </div>
                                            <div className='card-text p-3'>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.user}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.storage}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.public}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.access}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.private}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.support}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.subdomain}</h5>
                                                <h5 className='opacity-50'><i className='fa fa-times text-danger'></i>{item.report}</h5>
                                            </div>
                                            <div className='card-footer border rounded-bottom-5 d-flex justify-content-center'>
                                                <button className='btn rounded-5 col-8'>BUTTON</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    }
                    else {
                        return (
                            <>

                                <div key={index} className='col-sm-12 col-md-6 col-lg-4 p-5'>
                                    <div className='card rounded-5'>
                                        <div className='card-body p-0'>

                                            <div className='card-header p-2 m-0 text-center rounded-top-5 bg-primary'>
                                                <h5 className='p-0 m-0 text-warning'>{item.subscribe}</h5>
                                                <h1 className='p-0 m-0 text-white'>{item.header}</h1>
                                            </div>
                                            <div className='card-text p-3'>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.user}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.storage}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.public}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.access}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.private}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.support}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.subdomain}</h5>
                                                <h5><i className='fa fa-check text-success' aria-hidden='true'></i>{item.report}</h5>
                                            </div>
                                            <div className='card-footer border rounded-bottom-5 d-flex justify-content-center'>
                                                <button className='btn rounded-5 col-8'>BUTTON</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    }
                })
            }


        </div>

    );
};

export default CompA;