import React, { Suspense, useEffect, useState, useLayoutEffect } from 'react';
import styles from './index.css';
import { fetchProfileData } from '@/fetchData';
import { ErrorBoundary } from './ErrorBoundary';
import { Tester } from './Tester';
export default function() {
  return (
    <ErrorBoundary fallback={<h2>Could not fetch </h2>}>
      <Suspense fallback={<h1>loading...</h1>}>
        <Tester />
      </Suspense>
    </ErrorBoundary>
  );
}
