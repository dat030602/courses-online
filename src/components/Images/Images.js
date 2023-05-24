import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';

const Image = forwardRef(({ className, src, alt, fallBack: customFallBack = images.noImage, ...prop }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...prop}
            onError={handleError}
        />
    );
});

export default Image;
