import React, { useState, useEffect } from 'react';

export default function Layout({ children }): JSX.Element {
  return <div className='layout'>{children}</div>;
}
