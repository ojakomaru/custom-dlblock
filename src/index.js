import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import "./editor.scss";
// definition list
import Dl from "./blocks/dl.js";
import Dt from "./blocks/dt.js";
import Dd from "./blocks/dd.js";

registerBlockType(Dl.name, Dl);
registerBlockType(Dt.name, Dt);
registerBlockType(Dd.name, Dd);
