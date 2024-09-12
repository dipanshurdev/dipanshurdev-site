import "./link.css";

type Props = {
  url: string;
  image: string;
  children: React.ReactNode;
  icon?: string;
};

const LinkPopup = (props: Props) => {
  const { url, image, icon, children } = props;
  return (
    <>
      <div className="hover-container">
        <a
          href={url}
          className="hover-link underline-animation"
          target="_blank"
          rel="noreferer"
        >
          <div className="hover-image">
            <img src={`/images/${image}`} alt="Hover Image" />
          </div>
        </a>
        {children}
      </div>
    </>
  );
};

export default LinkPopup;
