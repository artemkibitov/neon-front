import Model from "@/components/Editor/reducer/actions/Model";

export class Text extends Model {
  value = "";
  lines = 0;
  spaces = 0;
  chars = 0;
  maxLineLength = 0;
}
