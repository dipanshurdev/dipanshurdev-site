import "./linkpopup.css";

type Props = {
  url: string;
  image: string;
  children: React.ReactNode;
  icon?: string;
};

const LinkPopup = (props: Props) => {
  const { url, image, children, icon } = props;
  return (
    <>
      <div className="hover-container">
        <a
          href={url}
          className="underline-animation  "
          target="_blank"
          rel="noreferer"
        >
          <div className="hover-image">
            <img
              src={`/assets/images/${image}`}
              className="h-[150px] w-full border-4 border-neutral-800 rounded-lg"
              alt={children as string}
            />
          </div>
          {children}
        </a>
      </div>
      {icon && (
        <span className="inline-block w-10 h-10 relative ml-1">
          <img
            className="w-full top-[8px] absolute"
            src={`/assets/icons/${icon}.svg`}
            alt=""
          />
        </span>
      )}
    </>
  );
};

export default LinkPopup;
