import React from 'react';
import ModalImage from 'react-modal-image';

const ImageModal = ({ src, alt }) => (
  <ModalImage small={src} large={src} alt={alt} hideDownload />
);

export default ImageModal;
