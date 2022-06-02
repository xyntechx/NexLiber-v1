import Image from "next/image";
import styles from "./Pic.module.css";

const Pic = ({
    src,
    alt,
    width,
    height,
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
}) => {
    return (
        <div className={styles.imageContainer}>
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    );
};

export default Pic;
