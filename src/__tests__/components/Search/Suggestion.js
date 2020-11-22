import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Suggestion from '../../../components/Search/Suggestion';

const mockFn = jest.fn();
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

configure({ adapter: new Adapter() });

describe('Suggestion component:', () => {
    it('renders Suggestion', () => {
        const wrapper = shallow(
            <Suggestion
                key={1}
                woeid={2}
                label={'test'}
                hideSuggestionFn={mockFn}
                setNewSearchFn={mockFn}
                setLocationFn={mockFn}
            />,
        );
        expect(wrapper.find('.suggestion-item').text()).toEqual('test');
    });
});
