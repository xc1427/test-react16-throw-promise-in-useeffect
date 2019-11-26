## purpose
This is to learn how useSWR works with Suspense mode.

## Limitation
This is a poor version of Suspense which is enabled in React 17.

Promise cannot be throw when rendering , but only in useEffect/useLayoutEffect.

Suspense granularity cannot be customized like in React 17. The `Suspense` boundary should be placed outside the component in which a Promise is thrown.


