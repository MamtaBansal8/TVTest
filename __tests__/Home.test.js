import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../src/Screens/Home';
import { fetchHomeData } from '../src/redux/actions';
import { useNavigation } from '@react-navigation/native';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../src/redux/actions', () => ({
  fetchHomeData: jest.fn(),
}));

jest.mock('@react-native-vector-icons/Feather', () => 'Icon');
jest.mock('@react-native-vector-icons/ant-design',() => 'AntDesign')
jest.mock('@react-native-vector-icons/evil-icons',() => 'EvilIcons')

describe('Home Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches fetchHomeData action on mount', () => {
    useSelector.mockReturnValue({ loading: false, data: [], error: null });
    render(<Home />);

    expect(mockDispatch).toHaveBeenCalledWith(fetchHomeData());
  });

  it('renders loading indicator when loading', () => {
    useSelector.mockReturnValue({ loading: true, data: [], error: null });
    const { getByTestId } = render(<Home />);

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('renders error message and retry button on error', () => {
    useSelector.mockReturnValue({ loading: false, data: [], error: 'Network Error' });
    const { getByText } = render(<Home />);

    expect(getByText('Error: Network Error')).toBeTruthy();

    const retryButton = getByText('Retry');
    expect(retryButton).toBeTruthy();

    fireEvent.press(retryButton);
    expect(mockDispatch).toHaveBeenCalledWith(fetchHomeData());
  });

  it('renders empty state when no movies are available', () => {
    useSelector.mockReturnValue({ loading: false, data: [], error: null });
    const { getByText } = render(<Home />);

    expect(getByText('No movies available')).toBeTruthy();
  });

  it('renders movie sections and items correctly', () => {
    const mockData = [
      {
        id: '1',
        title: 'Popular Movies',
        movies: [{ id: '101', banner_image: 'image_url', title: 'Movie 1' }],
      },
    ];

    useSelector.mockReturnValue({ loading: false, data: mockData, error: null });
    const { getByText, getByTestId } = render(<Home />);

    expect(getByText('Popular Movies')).toBeTruthy();
    // expect(getByTestId('movie-item-101')).toBeTruthy();
  });

  it('navigates to Details screen on movie click', async () => {
    useSelector.mockImplementation((callback) =>
      callback({
        homeData: {
          loading: false,
          data: [
            {
              id: '1',
              title: 'Popular Movies',
              movies: [
                { id: '101', banner_image: 'https://example.com/image1.jpg' },
              ],
            },
          ],
          error: null,
        },
      })
    );

    render(<Home />);
    const movieItem = await waitFor(() => screen.getByTestId('movie-item-101'));
    expect(movieItem).toBeTruthy();
    fireEvent.press(movieItem);
    expect(mockNavigate).toHaveBeenCalledWith('Details', {
      movie: { id: '101', banner_image: 'https://example.com/image1.jpg' },
    });
  });
});
