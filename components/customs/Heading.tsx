import TagLine from "./Tagline";

interface HeadingProps {
    className?: string;
    title?: string;
    text?: string;
    tag?: string;
    align?: "left" | "center" | "right";
}

const Heading: React.FC<HeadingProps> = ({
    className = "",
    title,
    text,
    tag,
    align = "center",
}) => {
    return (
        <div
            className={`${className} text-${align} max-w-[50rem] mx-auto mb-12 lg:mb-20`}
        >
            {tag && <TagLine className={`mb-4 justify-${align} text-${align}`}>{tag}</TagLine>}
            {title && <h2 className="h2">{title}</h2>}
            {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
        </div>
    );
};

export default Heading