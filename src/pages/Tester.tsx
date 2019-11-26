import React, { Suspense, useEffect, useState, useLayoutEffect } from 'react';
import styles from './index.css';
import { fetchProfileData } from '@/fetchData';
import { ErrorBoundary } from './ErrorBoundary';

const resource = fetchProfileData();
export function Tester() {
  // const [resource, setResource] = useState<any>(undefined);
  useEffect(() => {
    if (resource.read().then === 'function')
    throw resource.read();
  }, []);
  return (
        <div className={styles.normal}>
          <div className={styles.welcome} />
          <ul className={styles.list}>
            <li>
              To get started, edit <code>src/pages/index.js</code> and save to reload.
            </li>
            <li>
              <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
            </li>
            <pre>
              <code>

                  {JSON.stringify(resource.read())}
              </code>
            </pre>
          </ul>
        </div>
  );
}
