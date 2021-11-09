import React from "react";
import classNames from "classnames";
import Badge from "../Badge";

import removeSvg from "../../assets/img/remove.svg";
import "./List.scss";

// здесь происходит деструкторизация объекта (пропса),
// вытаскиваем свойства объекта в отдельные переменные
const List = ({ items, isRemovable, onClick, onRemove }) => {

	const removeList = (item) => {
		// confirm не является частью частью ES, эту ф-ию предоставляет браузерный API
		if (window.confirm("Вы действительно хотите удалить список?")) {
			onRemove(item);
		}
	}

	return (
		<ul onClick={onClick} className="list">
			{
				items.map((item, index) => ( 
					// ключ нужен для того, чтобы react мог понимать какой конкретно объект нужно обновить
					// ф-ия classNames позволяет установить элементу классы при их наличии
					<li key={index} className={classNames(item.className, {"active": item.active})}>
						<i>
							{
								item.icon ? item.icon :
								<Badge color={item.color} />
							}
						</i>
						<span>{item.name}</span>
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