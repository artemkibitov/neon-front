import createOptionsFactory, {
  calculateOptionSize
} from "@/components/Editor/reducer/actions/Editor/SignOptions/OptionsFactory";

const sizeOptionFactory = createOptionsFactory(
  ["key", "name", "width", "height", "space", "lineSpace", "totalSize"]
);

export default sizeOptionFactory;
