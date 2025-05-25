// components/ScrollManager.js
'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from './ScrollContext';

export default function ScrollManager() {
    const { setSectionRefs } = useScroll();

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    useEffect(() => {
        setSectionRefs([section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current]);
    }, [setSectionRefs]);

    return (
        <>
            <div ref={section1Ref} />
            <div ref={section2Ref} />
            <div ref={section3Ref} />
            <div ref={section4Ref} />
        </>
    );
}
