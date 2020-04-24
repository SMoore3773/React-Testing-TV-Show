import React from 'react';
import {render} from '@testing-library/react'
import Episodes from './Episodes';

test('episode renders', async()=>{
    const mockEps=[];
    render(<Episodes episodes={mockEps}/>)
})