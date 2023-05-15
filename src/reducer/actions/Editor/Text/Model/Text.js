import Model from "@/reducer/actions/Model";

export class Text extends Model {
  original = "";
  value = "";
  spaces = 0;
  chars = 0;
  maxLineLength = 0;
  lines = 0;
  emptyLines = 0;
  nonEmptyLines = 0;
  firstInput = false;
}
