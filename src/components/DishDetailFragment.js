import React from "react";
import { useParams } from "react-router-dom";
import DishDetail from "./DishdetailComponent";

export const DishDetailFragment = (props) => {
	const { dishId } = useParams();
	return (
		<DishDetail
			dish={props.dishes.filter((dish) => dish.id === +dishId)[0]}
			comments={props.comments.filter((comment) => comment.dishId === +dishId)}
		/>
	);
};
