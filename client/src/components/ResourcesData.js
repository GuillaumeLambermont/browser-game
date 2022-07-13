import React, { Fragment } from "react";

const ResourcesTable = (props) => {

    return (
    <Fragment>
        {" "} 
        <table>
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Wood</th>
                    <th>Stone</th>
                    <th>Iron</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.food}</td>
                    <td>{props.wood}</td>
                    <td>{props.stone}</td>
                    <td>{props.iron}</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
)};

export default ResourcesTable;