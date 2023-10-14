import React, { useState } from "react";

function CardAttachment({ id, imageUrl, onDelete }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <article>
      <div
        className="card overflow-hidden position-relative mt-2"
        style={{ maxHeight: 130 }}
        onClick={() => setIsFullScreen(!isFullScreen)}
      >
        {/* Image */}
        <div className={`w-100 ${isFullScreen ? "full-screen" : ""}`}>
          <img src={imageUrl} className="img-fluid" alt={`Attachment ${id}`} />
        </div>

        {/* Actions */}
        <a
          name="deleteBtn"
          type="button"
          onClick={() => onDelete(id)}
          className="position-absolute end-0 top-0 d-flex justify-content-center align-items-center btn-close-bg btn-accions-blue m-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height={"1.1rem"}
          >
            <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default CardAttachment;
