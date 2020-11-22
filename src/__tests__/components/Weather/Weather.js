import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Weather from '../../../components/Weather/Weather';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('Weather component:', () => {
    jest.spyOn(window, 'alert').mockReturnValue();
    beforeEach(() => {
        useSelector.mockImplementation((selector) =>
            selector({
                app: { isLoading: true },
            }),
        );
    });
    afterEach(() => {
        useSelector.mockClear();
    });

    it('renders Weather', () => {
        const { container } = render(<Weather />);
        expect(container).toMatchSnapshot();
    });
});
