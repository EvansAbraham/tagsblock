import React from 'react';
import { User } from '@clerk/nextjs/server'
import Image from "next/image";

type Props = {
    user?: null | User
}
const Navigation = ({user}: Props) => {
    return <div className='p-4 flex items-center justify-between relative'>
        <aside className="flex items-center gap-2">
            <Image src={"/assets/logo-short.png"} alt={"Logo"} height={40} width={40} />
        </aside>
    </div>
};

export default Navigation;
