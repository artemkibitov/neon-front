import Model from "@/reducer/Core/Model/Model";

export class Sign extends Model {
  sizeOption = null;
  priceOption = null;
  lightOption = null;
  selected = '';
  selectedLight = '';
  waterproof = false;
  waterproofPrice = 0;
  powerAdapter = null;
  backboardForm = null;
  backboardColor = null;

  getSelectedSizeOption() {
    return this.sizeOption.get(this.selected);
  }

  getSelectedPriceOption() {
    return this.priceOption.get(this.selected);
  }

  getSelectedLightOption() {
    return this.lightOption.get(this.selectedLight);
  }
}
