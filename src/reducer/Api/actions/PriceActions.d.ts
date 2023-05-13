import AbstractActions from "./AbstractActions";
import {SizeActions} from "./SizeActions";
import TextActions from "./TextActions";

declare class PriceActions extends AbstractActions {
  protected _sizeActions: SizeActions;
  protected _textActions: TextActions;


}
