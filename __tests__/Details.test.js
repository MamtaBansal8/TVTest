// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import Details from '../src/Screens/Details';

// const mockMovie = {
//     title: 'Sample Movie',
//     description: 'This is a sample movie description.',
//     video_link: 'https://www.youtube.com/embed/sample',
//     cast: ['Actor One', 'Actor Two'],
//     imdb_score: '8.5',
//     year: '2022',
//     rating: 'PG-13',
//     genre: 'Action'
// };

// jest.mock('react-native-webview', () => {
//     return {
//       WebView: () => 'WebView',
//     };
// });

// jest.mock('@react-navigation/native', () => ({
//     useNavigation: jest.fn(),
// }));
  

// describe('Details Screen', () => {
//     it('renders the movie title and description', () => {
//         const { findByText } = render(<Details route={{ params: { movie: mockMovie } }} />);

//         expect(findByText('Sample Movie')).toBeTruthy();
//         // expect(findByText('This is a sample movie description.')).toBeTruthy();
//     });

//     // it('renders cast and metadata correctly', () => {
//     //     const { getByText } = render(<Details route={{ params: { movie: mockMovie } }} />);

//     //     expect(getByText('Actor One, Actor Two')).toBeTruthy();
//     //     expect(getByText('IMDb 8.5     2022    PG-13')).toBeTruthy();
//     //     expect(getByText('Action')).toBeTruthy();
//     // });

//     // it('renders video with correct source', () => {
//     //     const { getByTestId } = render(<Details route={{ params: { movie: mockMovie } }} />);

//     //     const webView = getByTestId('video-player');

//     //     expect(webView.props.source.uri).toContain('https://www.youtube.com/embed/sample');
//     // });

//     // it('renders all action buttons', () => {
//     //     const { getAllByRole } = render(<Details route={{ params: { movie: mockMovie } }} />);

//     //     const buttons = getAllByRole('button');

//     //     expect(buttons.length).toBe(5); // Video, Download, Share, Like, Dislike
//     // });

//     // it('handles button presses', () => {
//     //     const { getAllByRole } = render(<Details route={{ params: { movie: mockMovie } }} />);

//     //     const buttons = getAllByRole('button');

//     //     fireEvent.press(buttons[0]); // Simulate press on the first button

//     //     expect(buttons[0]).toBeTruthy();
//     // });
//});

import React from 'react';
import { render } from '@testing-library/react-native';
import Details from '../src/Screens/Details';

jest.mock('react-native-webview', () => {
    return {
      WebView: () => 'WebView',
    };
});

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}));

jest.mock('@react-native-vector-icons/Feather', () => 'Feather');
jest.mock('@react-native-vector-icons/ant-design',() => 'AntDesign')
jest.mock('@react-native-vector-icons/evil-icons',() => 'EvilIcons')

const mockMovie = {
    title: 'Sample Movie',
    description: 'Sample Description',
    video_link: 'https://example.com',
    cast: ['Actor One'],
    imdb_score: '8.5',
    year: '2023',
    rating: 'PG-13',
    genre: 'Action',
};

describe('Details Screen', () => {
    it('renders movie title', async () => {
        const { findByText } = render(<Details route={{ params: { movie: mockMovie } }} />);
        expect(await findByText('Sample Movie')).toBeTruthy();
    });

    it('renders metadata correctly', async () => {
        const { findByText } = render(<Details route={{ params: { movie: mockMovie } }} />);
        expect(await findByText('Action')).toBeTruthy();
    });
});
