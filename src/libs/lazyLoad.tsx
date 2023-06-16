import { Suspense, type LazyExoticComponent } from 'react';

const lazyLoad = (LazyElement: LazyExoticComponent<() => JSX.Element>): JSX.Element => {
    return (
        <Suspense fallback={<p>Loading</p>}>
            <LazyElement />
        </Suspense>
    );
};

export default lazyLoad;
