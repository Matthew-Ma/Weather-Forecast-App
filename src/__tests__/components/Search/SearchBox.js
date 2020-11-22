import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBox from '../../../components/Search/SearchBox';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

configure({ adapter: new Adapter() });

describe('SearchBox component:', () => {
    jest.spyOn(window, 'alert').mockReturnValue();
    const wrapper = mount(<SearchBox />);
    it('renders SearchBox', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });
});
