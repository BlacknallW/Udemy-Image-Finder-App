import React, { useState } from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "../Components/ImageList";

const App = () => {
	const [images, setImages] = useState([]);

	const onSearchSubmit = async term => {
		const response = await unsplash.get(`/search/photos`, {
			params: { query: term }
		});
		setImages(response.data.results);
	};

	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<SearchBar onSubmit={onSearchSubmit} />
			<ImageList images={images} />
		</div>
	);
};

export default App;
