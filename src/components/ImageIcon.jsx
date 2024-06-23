const ImageIcon = ({name, height, width}) => {
    return (
        <img
            className="image-icon"
            height={height}
            width={width}
            src={`/icons/${name}.png`}
        />
    )
}

export default ImageIcon