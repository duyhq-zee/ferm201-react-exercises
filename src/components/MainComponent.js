import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Navigate, Route, Routes } from "react-router-dom";

import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { DishDetailFragment } from "./DishDetailFragment";

// const mapStateToProps = (state) => {
// 	return {
// 		dishes: state.dishes,
// 		comments: state.comments,
// 		promotions: state.promotions,
// 		leaders: state.leaders,
// 	};
// };

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS,
		};
	}
	//    // }
	//    // onDishSelect(dishId) {
	//    //    this.setState({ selectedDish: dishId });
	// }

	render() {
		return (
			<div>
				<Header />
				{/* <Menu
               dishes={this.state.dishes}
               onClick={(dishId) => this.onDishSelect(dishId)}
            /> */}
				{/* <DishDetail
               dish={
                  this.state.dishes.filter((dish) => this.state.selectedDish)[0]
               }
            /> */}
				<div>
					<Routes>
						<Route
							path="home"
							element={
								<Home
									dish={this.state.dishes.filter((dish) => dish.featured)[0]}
									promotion={
										this.state.promotions.filter(
											(promotion) => promotion.featured
										)[0]
									}
									leader={
										this.state.leaders.filter((leader) => leader.featured)[0]
									}
								/>
							}
						/>
						<Route
							exact
							path="aboutus"
							element={<About leaders={this.state.leaders} />}
						/>
						<Route
							exact
							path="menu"
							element={<Menu dishes={this.state.dishes} />}
						></Route>
						<Route
							path="menu/:dishId"
							element={
								<DishDetailFragment
									dishes={this.state.dishes}
									comments={this.state.comments}
								/>
							}
						/>
						<Route exact path="contactus" element={<Contact />} />
						<Route path="*" element={<Navigate to="home" replace />} />
					</Routes>
				</div>
				<Footer />
			</div>
		);
	}
}
export default Main;
