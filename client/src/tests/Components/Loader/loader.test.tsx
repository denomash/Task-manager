import { shallow } from "enzyme";

import { Loader } from "../../../components/Loader/Loader";

test("Should render header correctly", () => {
  const wrapper = shallow(<Loader />);

  expect(wrapper).toMatchSnapshot();
});
