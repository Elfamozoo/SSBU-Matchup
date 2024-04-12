import React from 'react';
import {routes} from "../../services/routes";
import {Link, To} from "react-router-dom";

export const NavLink = (props: { className?: string }) => {
    return (
        <>
            {routes.filter((route) => !route.isNotWatchable)
                .map((route) => {
                    return (
                        <Link key={route.name} to={route.path as To} className={props.className}>
                            {route.name}
                        </Link>
                    );
                })}
        </>
    );
};

