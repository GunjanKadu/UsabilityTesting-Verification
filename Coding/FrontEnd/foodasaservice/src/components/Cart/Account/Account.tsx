import React from "react";
import { Toast, ToastBody, ToastHeader, Row, Col, Input } from "reactstrap";
import COD from "assets/images/COD.png";
import OnlinePayment from "assets/images/OnlinePayment.png";

const Account = () => {
  return (
    <div style={{ position: "relative", left: "34%" }}>
      <h4 style={{ position: "relative", left: "1%", width: "fit-content" }}>
        Account
      </h4>
      <Row style={{ marginBottom: "2%" }}>
        <Col sm={12}>
          <Toast style={{ border: "1px solid #c82333" }}>
            <ToastHeader>Delivery Address</ToastHeader>
            <ToastBody>
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur{" "}
            </ToastBody>
          </Toast>
        </Col>
      </Row>
      <Row style={{ marginBottom: "2%" }}>
        <Col sm={12}>
          <Toast style={{ border: "1px solid #c82333" }}>
            <ToastHeader>Payment Methods</ToastHeader>
            <ToastBody style={{ textAlign: "left", fontWeight: "bold" }}>
              <img style={{ height: "50px", width: "50px" }} src={COD} alt="" />
              <span style={{ marginLeft: "10px" }}>Cash On Delievery</span>
              <Input
                style={{ position: "relative", left: "18%" }}
                type="radio"
                name="COD"
                checked="checked"
              ></Input>
            </ToastBody>
            <ToastBody style={{ textAlign: "left", fontWeight: "bold" }}>
              <img
                style={{ height: "50px", width: "50px" }}
                src={OnlinePayment}
                alt=""
              />
              <span style={{ marginLeft: "10px" }}>Online Payment</span>
              <Input
                style={{ position: "relative", left: "26%" }}
                type="radio"
                disabled="disabled"
                name="Online Payment"
              ></Input>
            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default Account;
