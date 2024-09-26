import "./linkpopup.css";

type Props = {
  url: string;
  image: string;
  children: React.ReactNode;
  // icon?: string;
};

const LinkPopup = (props: Props) => {
  const { url, image, children } = props;
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
              src={`/images/${image}`}
              className="h-[150px] w-full border-4 border-neutral-800 rounded-lg"
              alt={children as string}
            />
          </div>
          {children}
        </a>
      </div>
    </>
  );
};

export default LinkPopup;
