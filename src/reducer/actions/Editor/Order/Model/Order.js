import Model from "@/reducer/Core/Model/Model";

export class Order extends Model {
  name = '';
  lastName = '';
  phone = '';
  city = '';
  total = 0;
  individual = false;
}
