import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {fetchShow  as mockFetchShow} from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');
console.log('mockFetchShow',mockFetchShow);

test('App fetches show data and render data', async()=>{
    const mockData = [{}];
    mockFetchShow.mockResolvedValueOnce(mockData)
})