import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Toast, ToastBody, ToastHeader, Row, Col, Badge } from "reactstrap";

const Summary = props => {
  useEffect(() => {}, [props.cart.CartContent]);

  const orderedItems = props.cart.CartContent;
  const price = props.cart.Price;

  const RenderItems = () => {
    if (orderedItems.length > 0) {
      return orderedItems.map(item => {
        return (
          <ToastBody key={item.id} style={{ position: "relative" }}>
            <Row>
              <Col sm={3}>
                <span style={{ fontWeight: "bold" }}>{item.name}</span>{" "}
              </Col>
              <Col sm={3}>
                <span style={{ position: "relative", left: "30%" }}>
                  {" "}
                  € {item.price}
                </span>
              </Col>{" "}
              <Col>
                <span style={{ position: "relative", left: "30%" }}>
                  {" "}
                  <Badge
                    color="danger"
                    style={{
                      fontWeight: "bold",
                      position: "relative",
                      left: "60%",
                      top: "-6%",
                      cursor: "pointer"
                    }}
                  >
                    X
                  </Badge>
                </span>
              </Col>
            </Row>
          </ToastBody>
        );
      });
    } else {
      return (
        <ToastBody>
          Choose delicious dishes from the menu and order your menu.{" "}
        </ToastBody>
      );
    }
  };
  return (
    <div>
      <h4 style={{ position: "relative", left: "1%", width: "fit-content" }}>
        Summary
      </h4>
      <Row style={{ marginBottom: "2%" }}>
        <Col sm={12}>
          <Toast style={{ border: "1px solid #c82333" }}>
            <ToastHeader>Ordered Dishes</ToastHeader>
            <RenderItems />
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2%" }}>
        <Col sm={12}>
          <Toast style={{ border: "1px solid #c82333" }}>
            <ToastBody style={{ position: "relative" }}>
              <Row>
                <Col sm={5}>
                  <span style={{ fontWeight: "bold" }}>SubTotal:</span>{" "}
                </Col>
                <Col sm={5}>
                  <span style={{ position: "relative", left: "30%" }}>
                    {" "}
                    € {price}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={5}>
                  <span style={{ fontWeight: "bold" }}>GrandTotal:</span>{" "}
                </Col>
                <Col sm={5}>
                  <span style={{ position: "relative", left: "30%" }}>
                    {price == 0 ? <p>€ 0</p> : <p>€ {price + 3}</p>}
                  </span>
                </Col>
              </Row>
            </ToastBody>
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: "4%" }}>
        <Col sm={12}>
          <Toast style={{ border: "1px solid #c82333" }}>
            <ToastBody style={{ textAlign: "left", fontWeight: "bold" }}>
              <span> Promo</span>{" "}
              <input type="text" placeholder="Enter Promo Code" />
              <button className="btn btn-danger" style={{ marginLeft: "18px" }}>
                Apply
              </button>
            </ToastBody>
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2%" }}>
        <Col sm={12}>
          <Toast style={{ border: "1px solid #c82333" }}>
            <button style={{ width: "100%" }} className="btn btn-danger">
              Order
            </button>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allDishes: state.allDishes,
    account: state.account,
    cuisines: state.cuisine,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Summary);
