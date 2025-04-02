'use client'

import { useRouter } from 'next/navigation'
import classes from './modal.module.css' // use spesific css file

export default function Modal({children}){ // herhangi bir yerden bunun çağrılmasını sağlar.
    const router = useRouter();
    return(
        <div className={classes.modal}>
            <div className={classes.modalBody}>
                {children}
                <button onClick={()=> router.back()}>Cancel</button>
            </div>
        </div>
    )
}