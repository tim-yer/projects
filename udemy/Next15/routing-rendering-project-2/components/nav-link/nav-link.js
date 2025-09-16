'use client'

import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({href, children}) => {

    const path = usePathname();

    return (
        <li>
            <Link href={href} className={path.startsWith(href) ? 'active' : undefined}>
                {children}
            </Link>
        </li>
    )
}
export default NavLink
