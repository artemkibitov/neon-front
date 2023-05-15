import Model from "@/reducer/actions/Model";

export class Sign extends Model {
  sizeOption = null;
  priceOption = null;
  selected = '';
  waterproof = false;
  powerAdapter = null;
  backboardForm = null;
  backboardColor = null;

  getSelectedSizeOption() {
    return this.sizeOption.get(this.selected);
  }

  getSelectedPriceOption() {
    return this.priceOption.get(this.selected);
  }
}
