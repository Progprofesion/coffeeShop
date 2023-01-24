import { useState, useRef, useEffect } from 'react';

import useOnScreen from 'src/hooks/use-on-screen';
import cn from 'classnames'
import styles from './loadableImages.module.scss';

export interface IloadebleImage {
    src: string;
    alt?: string;
    onLoad?(): void;
}

const LoadebleImage = (props: IloadebleImage) => {

    const { src, alt = '', onLoad = () => { } } = props
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(containerRef);


    useEffect(() => {
        if (!isVisible || isLoaded) return;
        if (imageRef.current) {
            imageRef.current.onload = () => {
                setIsLoaded(true);
                onLoad();
            }
        }
    }, [isVisible, onLoad, isLoaded]);

    return (
        <div ref={containerRef} className={cn(styles.wrapper, {
            [styles.wrapperLoaded]: isLoaded
        })}>
            {(isVisible || isLoaded) && (<img ref={imageRef} className={cn(styles.image, {
                [styles.imageLoaded]: isLoaded
            })} src={src} alt={alt} />)}
        </div>
    )
}

export default LoadebleImage