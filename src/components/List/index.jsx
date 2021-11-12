import React from "react";
import classNames from "classnames";
import axios from "axios";

import Badge from "../Badge";

import removeSvg from "../../assets/img/remove.svg";
import "./List.scss";

// здесь происходит деструкторизация объекта (пропса),
// вытаскиваем свойства объекта в отдельные переменные
const List = ({items, isRemovable, onClick, onRemove, onClickItem, activeItem}) => {

	const removeList = item => {
		// confirm не является частью частью ES, эту ф-ию предоставляет браузерный API
		if (window.confirm("Вы действительно хотите удалить список?")) {
			axios
				.delete("http://localhost:8000/lists/" + item.id)
				.then(() => {
					onRemove(item.id);
				})
		}
	}

	return (
		<ul onClick={onClick} className="list">
			{
				items.map((item, index) => ( 
					// ключ нужен для того, чтобы react мог понимать какой конкретно объект нужно обновить
					// ф-ия classNames позволяет установить элементу классы при их наличии
					<li
						key={index}
						className={classNames(item.className, {
							active: item.active
								? item.active
								: activeItem && activeItem.id === item.id
						})}
						onClick={onClickItem ? () => onClickItem(item): null}
					>
						<i>
							{ item.icon ? item.icon : <Badge color={item.color.name} /> }
						</i>
						<span>
							{item.name}
							{item.tasks && ` (${item.tasks.length})`}
						</span>
						{isRemovable && (
							<img
								src={removeSvg}
								className="list__remove-icon"
								alt="remove icon"
								onClick={() => removeList(item)}
							/>
						)}
					</li>
				))
			}
		</ul>
	);
};

export default List;