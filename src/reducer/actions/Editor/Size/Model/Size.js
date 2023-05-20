import Model from "@/reducer/Core/Model/Model";

export class Size extends Model {
  option = null;
  selected = '';

  getSelectedOption() {
      return this.option.get(this.selected);
  }
}
