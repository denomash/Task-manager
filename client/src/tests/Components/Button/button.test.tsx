import { shallow } from "enzyme";

import Button from "../../../components/Botton/Button";

test("Should render button correctly", () => {
  const wrapper = shallow(<Button />);

  expect(wrapper).toMatchSnapshot();
});
