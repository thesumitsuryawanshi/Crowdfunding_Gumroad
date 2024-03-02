import Presentation from "./components/Presentation";
import Crowdfunding from "./components/crowdfunding";

import Bitcoin1 from "./components/Crowdfunding Items/Bitcoin1.js";
import MonkeyNFT from "./components/Crowdfunding Items/MonkeyNFT";
import MonkeyNFT2 from "./components/Crowdfunding Items/MonkeyNFT2.js";
import BrainCard from "./components/Crowdfunding Items/BrainCard";

import Mshair1 from "./components/Crowdfunding Items/Mshair1";
import Mshair2 from "./components/Crowdfunding Items/Mshair2";
import VitrivianMan from "./components/Crowdfunding Items/VitrivianMan.js";
import Alexander from "./components/Crowdfunding Items/Alexander.js";

import Bitcoin2 from "./components/Crowdfunding Items/Bitcoin2.js";
import MaxPack from "./components/Crowdfunding Items/MaxPack.js";
import EagleImg from "./components/Crowdfunding Items/EagleImg.js";
import NFTCoin3 from "./components/Crowdfunding Items/NFTCoin3.js";

const routes = [
  { path: "/", component: Presentation },
  { path: "/presentation", component: Presentation },
  { path: "/crowdfunding", component: Crowdfunding },
  { path: "/success", component: Crowdfunding },
  { path: "/cancel", component: Crowdfunding },

  { path: "/Bitcoin1", component: Bitcoin1 },
  { path: "/MonkeyNFT", component: MonkeyNFT },
  { path: "/MonkeyNFT2", component: MonkeyNFT2 },
  { path: "/BrainCard", component: BrainCard },

  { path: "/Mshair1", component: Mshair1 },
  { path: "/Mshair2", component: Mshair2 },
  { path: "/VitrivianMan", component: VitrivianMan },
  { path: "/Alexander", component: Alexander },

  { path: "/Bitcoin2", component: Bitcoin2 },
  { path: "/MaxPack", component: MaxPack },
  { path: "/EagleImg", component: EagleImg },
  { path: "/NFTCoin3", component: NFTCoin3 },
];

export default routes;
