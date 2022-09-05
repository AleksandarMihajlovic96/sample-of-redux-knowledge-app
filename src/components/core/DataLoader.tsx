import Loading from "./Loading";

interface DataLoaderProps {
  error: string | null;
  loading: boolean;
  renderComponent: React.ReactNode;
  loadingText: string;
}

const DataLoader: React.FC<DataLoaderProps> = (props) => {
  return (
    <div>
      {props.error && <h3>{props.error}</h3>}
      {props.loading && <Loading loadingText={props.loadingText}/>}
      {!props.error && !props.loading && props.renderComponent}
    </div>
  );
};

export default DataLoader;
