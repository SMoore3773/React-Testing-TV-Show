import React from 'react';
import {render} from '@testing-library/react'
import Episodes from './Episodes';

test('episode component renders', async()=>{
    const mockEps=[{season:'1', number:'1'}];
    const mockEps2=[{season:'1', number:'1'},{season:'1', number:'2'},{season:'1', number:'3'}]
    const {queryAllByText, rerender} = render(<Episodes episodes={mockEps}/>)

    let allEps = queryAllByText(/season/i)
    expect(allEps).toHaveLength(1);
    
    rerender(<Episodes episodes={mockEps2}/>)
    allEps = queryAllByText(/season/i);
    expect(allEps).toHaveLength(1)
})
