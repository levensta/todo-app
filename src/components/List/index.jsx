import React from "react";
import classNames from "classnames";
import Badge from "../Badge";

import "./List.scss";

// здесь происходит деструкторизация объекта (пропса),
// вытаскиваем свойства объекта в отдельные переменные
const List = ({ items, isRemovable, onClick }) => {
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
					</li>
				))
			}
		</ul>
	);
};

export default List;