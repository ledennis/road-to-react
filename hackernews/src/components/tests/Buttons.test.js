import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Button } from '../Buttons/Buttons';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Button onClick={() => console.log('Hello.')} children={<div>Hi</div>}/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('class name is passed through', () => {
      const element = shallow(
          <Button onClick={() => console.log('Hello.')} className="interactions" children={<div>Hi</div>}> Button </Button>
      )

      expect(element.find('.interactions').length).toBe(1);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Button onClick={() => console.log('Hello.')} children={<div>Hi</div>}>Butt On Button</Button>
        );
        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    })
});
