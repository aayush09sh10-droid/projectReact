import React, { useState } from 'react';


export const DisplayTask = ({ taskList }) => {
    

    return (
        <div>
            <h1>Your Task</h1>
            <ul>
                {
                    taskList.map((item,index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};