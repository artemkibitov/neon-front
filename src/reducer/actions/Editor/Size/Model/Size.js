import Model from "@/reducer/actions/Model";

export class Size extends Model {
  option = null;
  selected = '';

  getSelectedOption() {
      return this.option.get(this.selected);
  }
}