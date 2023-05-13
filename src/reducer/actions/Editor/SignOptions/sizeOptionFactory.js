import createOptionsFactory, {
  calculateOptionSize
} from "@/reducer/actions/Editor/Sign/Factory/OptionsFactory";

const sizeOptionFactory = createOptionsFactory(
  ["key", "name", "width", "height", "space", "lineSpace", "totalSize"]
);

export default sizeOptionFactory;
