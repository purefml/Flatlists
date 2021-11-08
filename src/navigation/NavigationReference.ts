import * as React from 'react';

// REFERENCE FOR NAVIGATION CONTAINER IN Index.js
export const navigationRef:any = React.createRef();

// Navigate
export function navigate(name:string, params:any) {
  navigationRef.current?.navigate(name, params);
}

// Simple Go back
export function goBack() {
  navigationRef.current?.goBack();
}