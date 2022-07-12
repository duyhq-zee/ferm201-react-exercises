import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
   Button,
   Collapse,
   Form,
   FormGroup,
   Input,
   Jumbotron,
   Label,
   Modal,
   ModalBody,
   ModalHeader,
   Nav,
   Navbar,
   NavbarBrand,
   NavbarToggler,
   NavItem,
} from "reactstrap";

class Header extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isNavOpen: false,
         isModalOpen: false,
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
   }

   toggleNav() {
      this.setState({ isNavOpen: !this.state.isNavOpen });
   }
   toggleModal() {
      this.setState({ isModalOpen: !this.state.isModalOpen });
   }
   handleLogin(event) {
      this.toggleModal();
      alert(
         "Username: " +
            this.username.value +
            " Password: " +
            this.password.value +
            " Remember: " +
            this.remember.checked
      );
      event.preventDefault();
      // console.log("handleLogin");
   }
   render() {
      return (
         <div>
            <Navbar dark expand="md">
               <NavbarToggler onClick={this.toggleNav} />
               <NavbarBrand className="mr-auto" href="/">
                  <img src="assets/images/logo.png" height="20" alt="logo" />
               </NavbarBrand>
               <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                     <NavItem>
                        <NavLink className="nav-link" to="/home">
                           <span className="hover fa fa-home fa-lg"></span> Home
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                           <span className="fa fa-info fa-lg"></span> About Us
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink className="nav-link" to="/menu">
                           <span className="fa fa-list fa-lg"></span> Menu
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                           <span className="fa fa-address-card fa-lg"></span>{" "}
                           Contact
                        </NavLink>
                     </NavItem>
                     <Modal
                        isOpen={this.state.isModalOpen}
                        toggle={this.toggleModal}
                     >
                        <ModalHeader toggle={this.toggleModal}>
                           Login
                        </ModalHeader>
                        <ModalBody>
                           <Form onSubmit={this.handleLogin}>
                              <FormGroup>
                                 <Label htmlFor="username">Username</Label>
                                 <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    innerRef={(input) =>
                                       (this.username = input)
                                    }
                                 />
                              </FormGroup>
                              <FormGroup>
                                 <Label htmlFor="password">Password</Label>
                                 <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    innerRef={(input) =>
                                       (this.password = input)
                                    }
                                 />
                              </FormGroup>
                              <FormGroup check>
                                 <Label check>
                                    <Input
                                       type="checkbox"
                                       name="remember"
                                       innerRef={(input) =>
                                          (this.remember = input)
                                       }
                                    />
                                    Remember me
                                 </Label>
                              </FormGroup>
                              <Button
                                 color="primary"
                                 type="submit"
                                 value="submit"
                              >
                                 Login
                              </Button>
                           </Form>
                        </ModalBody>
                     </Modal>
                  </Nav>
                  <Nav className="ml-auto" navbar>
                     <NavItem>
                        <Button outline onClick={this.toggleModal}>
                           <span className="fa fa-sign-in fa-lg"></span> Login
                        </Button>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
            <Jumbotron>
               <div className="container">
                  <div className="row row-header">
                     <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>
                           We take inspiration from the World's best
                           cuisines,and createaunique fusion experience
                        </p>
                     </div>
                  </div>
               </div>
            </Jumbotron>
         </div>
      );
   }
}
export default Header;
