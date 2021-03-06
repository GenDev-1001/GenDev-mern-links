import React from "react";

export const LinkCard = ({link}) => {


    return (
        <>
        <h2>Link:</h2>
            <p>Abbreviated link: <a href={link.to} target='_blank' rel='noopener noreferrer'>{link.to}</a></p>
            <p>From link: <a href={link.from} target='_blank' rel='noopener noreferrer'>{link.from}</a></p>
            <p>Counter click: <strong>{link.clicks}</strong></p>
            <p>Date create: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}
