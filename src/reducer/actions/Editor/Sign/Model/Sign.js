import Model from "@/reducer/actions/Model";

export class Sign extends Model {
  sizeOption = null;
  priceOption = null;
  selected = '';

  getSelectedSizeOption() {
    return this.sizeOption.get(this.selected);
  }

  getSelectedPriceOption() {
    return this.priceOption.get(this.selected);
  }
}
