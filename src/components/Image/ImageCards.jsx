function ImageCards({ src, alt, active, click, id }) {

    return (
        <img
            src={src}
            className={active ? "logo_active" : "logo"}
            alt={alt}
            onClick={() => click(id)}
        ></img>
    );
}

export default ImageCards