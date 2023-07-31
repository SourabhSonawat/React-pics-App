import './ImageList.css';
import ImageShow from './ImageShow';
function ImageList({ images }) {

    const renderesImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
    return <div className='image-list'>{renderesImages}</div>;
};


export default ImageList;