import React from 'react';

import {render, fireEvent, queryAllByText,findByText, getByText, waitFor} from '@testing-library/react';
import {fetchShow  as mockFetchShow} from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');
console.log('mockFetchShow',mockFetchShow);

test('App fetches show data and render data', async()=>{
    const mockData = [{id:1, url:'mockurl', name:'mockname', type:'mock', language:'eng',generes:['fake'], status:'fake', runtime:1, premiered:'1-1-01',officialSite:'fakeurl',schedule:{time:'',days:['monday']},rating:{average:9},weight:99,network:'none',webChannel:{id:1, name:'test',country:'test'},externals:{tvRange:1234,thetvdb:1234,imdb:'test'},image:{medium:'imglink.jpg', original:'imglink.jpg'},_links:{self:{href:'selflink'},previousepisode:{href:'preveplink'}},_embedded:{episodes:[{id:1, url:'testurl',name:'testname',season:1,number:1,airdate:'2010-01-01',airtime:'',airstamp:'2010-01-01t12:00:00+00:00',runtime:10,image:{medium:'medimgurl',original:'origimgurl'},summary:'<p>ep summary</p>',_links:{self:{href:'selflink.url'}}}]}}];
    mockFetchShow.mockResolvedValueOnce(mockData)
    const {getByText} = render(<App mockData={mockData}/>)
    const fetching = getByText('Fetching data...')
    expect(fetching).toBeInTheDocument

})

// test('dropdown displays', async()=>{
//     const{getByText} = render(<App/>)
   
//     await waitFor(()=>{
//         expect(/select a season/i).toBeInTheDocument
//     })
// })

// test('dropdown works', async ()=>{
//     const{getByText, findByText} = render(<App/>)
    

//     const list = await findByText(/season/i)
//     expect(list).toHaveLength(4)
// })