import React from "react";
import { useState } from "react";
import shortid from "shortid";
import { toast } from "react-toastify";

import "../Styles/styles.css";

export default function Searchbar ({onSubmit}) {
  const [nameImage, setNameImage] = useState("");

  const onValueInput = e => {
    setNameImage(e.currentTarget.value.toLowerCase());
  };

  const onSubmitFetch = e => {
    e.preventDefault();

    if (nameImage.trim() === "") {
      toast.error("Input image name!!");
      return;
    }

    onSubmit(nameImage.trim());
    setNameImage("");
  };

    const keySearch = shortid.generate();
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmitFetch}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            id={keySearch}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            value={nameImage}
            onChange={onValueInput}
          />
        </form>
      </header>
    );
}