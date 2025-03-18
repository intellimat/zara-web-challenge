import { MemoryRouter, MemoryRouterProps } from "react-router";
import RoutesWrapper from "../../routing/RoutesWrapper";

const TestRouter: React.FC<MemoryRouterProps> = ({ ...props }) => (
  <MemoryRouter {...props}>
    <RoutesWrapper />
  </MemoryRouter>
);

export default TestRouter;
