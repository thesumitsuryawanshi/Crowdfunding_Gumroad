import Presentation from "./components/Presentation";
import Crowdfunding from "./components/crowdfunding";
const routes = [
  { path: "/", component: Presentation },
  { path: "/presentation", component: Presentation },
  { path: "/crowdfunding", component: Crowdfunding },
  { path: "/success", component: Crowdfunding },
  { path: "/cancel", component: Crowdfunding },
];

export default routes;
