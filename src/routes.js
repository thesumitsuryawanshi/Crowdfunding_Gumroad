import Presentation from "./components/Presentation";
import Crowdfunding from "./components/crowdfunding";
import Stripesuccess from "./components/stripesuccess";
import Stripefailure from "./components/stripefailure";

const routes = [
  { path: "/", component: Presentation },
  { path: "/presentation", component: Presentation },
  { path: "/crowdfunding", component: Crowdfunding },
  { path: "/success", component: Stripesuccess },
  { path: "/cancel", component: Stripefailure },
];

export default routes;
