import Model from "@/reducer/Core/Model/Model";

export class Backboard extends Model {
  styles = null;
  colors = null;
  selectedStyle = '';
  selectedColor = '';

  getSelectedStyle() {
    return this.styles.get(this.selectedStyle);
  }

  getSelectedColor() {
    return this.colors.get(this.selectedColor);
  }
}

