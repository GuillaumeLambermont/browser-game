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
                    <td>{Math.floor(props.food)}</td>
                    <td>{Math.floor(props.wood)}</td>
                    <td>{Math.floor(props.stone)}</td>
                    <td>{Math.floor(props.iron)}</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
)};

export default ResourcesTable;