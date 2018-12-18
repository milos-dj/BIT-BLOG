import React, { Fragment } from "react";
import "./AuthorAddress.css"

const AuthorAddress = (props) => {
    console.log(props);
    if (!props.address) {
        return null
    }

    const { address } = props;
    return (
        <Fragment>
            <div className="container clearFix author-div">
                <div className="author-address-text ">
                    <h2>Address</h2>
                    <p>Street: {address.city}</p>
                    <p>City: {address.city}</p>
                    <p>ZipCode: {address.zipcode}</p>
                </div>

                <iframe title="frame" className="author-address-img" src={`https://maps.google.com/maps?q=${address.geoLat},${address.geoLng}&z=5&output=embed`}></iframe>

            </div>
        </Fragment>
    );
}
export { AuthorAddress }