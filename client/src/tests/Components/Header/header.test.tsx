import { shallow } from "enzyme";

import Header from "../../../components/Header/Header";

test("Should render header correctly", () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();

  expect(wrapper.contains("Task Management")).toBe(true);
  expect(wrapper.contains("Tasks")).toBe(true);
});
