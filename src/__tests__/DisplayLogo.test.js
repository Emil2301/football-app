import React from 'react';
import { create } from 'react-test-renderer';
import DisplayLogo from '../components/DisplayLogo';
import Form from '../components/Form';
import Football from '../components/Football';
import axios from "axios";
import { shallow } from 'enzyme'


it('renders Football', () => {
    expect(shallow(<DisplayLogo/>).containsMatchingElement(<Football />)).toEqual(true);
  });


// jest.mock('axios');
// describe('Display Logo component', () => {
//     it('shows random club name after button click', async () => {
//         const response = {
//             data:  {name: "Kevin Mitnick"}
//         };
//         axios.get.mockResolvedValue(response);
        
//         // const component = create(<DisplayLogo />);
//         // const instance = component.getInstance();
//         // await instance.handleButtonClick();
//         // const root = component.root;
//         // const div = root.find(element => element.type === 'h3')
//         // console.log(instance.state)
//         // expect(div.props.children).toBe("Kevin Mitnick");
//     })
// })

