
function ImageCards({ src, alt, active, click }) {

    return (
        <img
            src={src}
            className={active ? "logo_active" : "logo"}
            alt={alt}
            onClick={click}
        ></img>
    );
}

export default ImageCards