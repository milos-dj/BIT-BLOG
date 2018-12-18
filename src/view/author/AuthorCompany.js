import React, { Fragment } from "react";

const AuthorCompany = (props) => {
    if (!props.company) {
        return null
    }

    const { company } = props;
    return (
        <Fragment>
            <div className="container author-div">
                <h2>Company</h2>
                <p>Name: {company.name}</p>
                <p>Slogan: {company.slogan}</p>

            </div>
        </Fragment>
    );
}
export { AuthorCompany }