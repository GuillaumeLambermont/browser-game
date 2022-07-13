import React, { Fragment } from "react";

const BuildingsTable = (props) => {
    
    return (
    <Fragment>
        {" "} 
        <table>
            <thead>
                <tr>
                    <th>Farm</th>
                    <th>Lumberjack</th>
                    <th>Quarry</th>
                    <th>Mine</th>
                    <th>Forum</th>
                    <th>Workshop</th>
                    <th>Barracks</th>
                    <th>Academy</th>
                    <th>Wall</th>
                    <th>Fort</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.farm}</td>
                    <td>{props.lumberjack}</td>
                    <td>{props.quarry}</td>
                    <td>{props.mine}</td>
                    <td>{props.forum}</td>
                    <td>{props.workshop}</td>
                    <td>{props.barracks}</td>
                    <td>{props.academy}</td>
                    <td>{props.wall}</td>
                    <td>{props.fort}</td>
                </tr>
            </tbody>
        </table>
    </Fragment>

)};

export default BuildingsTable;