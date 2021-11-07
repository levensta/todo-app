import React, { useState } from "react";
import List from "../List";
import Badge from '../Badge';

import "./AddList.scss"

const AddList = ( {colors}) => {
	// значение по умолчанию – false
	const [visiblePopup, setVisiblePopup] = useState(true);
	return (
		// react не может отрендерить сразу два элемента, поэтому им обязательно иметь родительский
		// чтобы не плодить лишние div'ы внутри друг друга, можно использовать React.Fragment
		<div className="add-list">
			<List  
				oncClick={() => setVisiblePopup(true)}
				items={[
					{
						className: "list__add-button",
						icon: (
						<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						),
						name: "Добавить список"
					},
				]}
			/>
			{visiblePopup && (
				<div className="add-list__popup">
					<input className="field" type="text" placeholder="Название списка" />
					<div className="add-list__popup-colors">
						<ul>
							<Badge color="pink" />
						</ul>
					</div>
					<button className="button">Добавить список</button>
				</div>
			)}
		</div>
	);
};

export default AddList;