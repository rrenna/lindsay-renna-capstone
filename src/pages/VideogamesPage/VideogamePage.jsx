import "./VideogamePage.scss";
import { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import PersonSelection from "../../components/PersonSelection/PersonSelection";
import ChildAgeSelector from "../../components/ChildAgeSelector/ChildAgeSelector";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

function VideogamePage() {
	const [data, setData] = useState({
		numKids: 0,
		numAdults: 0,
		childAges: [],
		systems: [],
		gameType: [],
		minYear: 1980,
		maxYear: 2024,
	});

	const addKid = () => {
		setData((prevData) => {
			if (prevData.numKids < 8) {
				return { ...prevData, numKids: prevData.numKids + 1 };
			}
			return prevData;
		});
	};

	const removeKid = () => {
		setData((prevData) => ({
			...prevData,
			numKids: Math.max(0, prevData.numKids - 1),
		}));
	};

	const addAdult = () => {
		setData((prevData) => {
			if (prevData.numAdults < 8) {
				return { ...prevData, numAdults: prevData.numAdults + 1 };
			}
			return prevData;
		});
	};

	const removeAdult = () => {
		setData((prevData) => ({
			...prevData,
			numAdults: Math.max(0, prevData.numAdults - 1),
		}));
	};

	const handleAgeSelect = (event, index) => {
		const value = event.target.value;
		setData((prevData) => {
			const newChildAges = [...prevData.childAges];
			newChildAges[index] = value;
			return { ...prevData, childAges: newChildAges };
		});
	};

	const handleGenreSelect = (event) => {
		const genreId = parseInt(event.currentTarget.id);
		setData((prevData) => {
			const isSelected = prevData.genres.includes(genreId);
			const newGenres = isSelected
				? prevData.genres.filter((id) => id !== genreId)
				: [...prevData.genres, genreId];
			return { ...prevData, genres: newGenres };
		});
	};

	const handleSliderChange = (field, value) => {
		setData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	return (
		<div id="videogame-selection">
			<main className="videogame-main">
				<Carousel
					data={data}
					addKid={addKid}
					removeKid={removeKid}
					addAdult={addAdult}
					removeAdult={removeAdult}
					handleAgeSelect={handleAgeSelect}
					handleSliderChange={handleSliderChange}
				>
					<PersonSelection />
					<ChildAgeSelector />
					<SliderComponent />
				</Carousel>
			</main>
		</div>
	);
}

export default VideogamePage;
