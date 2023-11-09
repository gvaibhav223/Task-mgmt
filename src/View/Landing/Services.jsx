import React from "react";

const Services = () => {
  const array_of_services = [
    {
      title: "Keep Task in one Place",
      desc: "lorem Ips but tristique senect et netus et sapien et netus et sapien et sapien et sap sapien et sapien et sapien",
    },
    {
      title: "Prioritize your work",
      desc: "lorem Ips but tristique senect et netus et sapien et netus et sapien et sapien et sap sapien et sapien et sapien",
    },
    {
      title: "Imporve your collaboration",
      desc: "lorem Ips but tristique senect et netus et sapien et netus et sapien et sapien et sap sapien et sapien et sapien",
    },
  ];
  return (
    <>
      <div className="row">
        {array_of_services.map((values, i) => {
          return (
            <div key={i} className="col-xs-12 col-sm-6 col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img
                    src="./images/service_card.png"
                    className="img-fluid"
                    alt="The service"
                  />
                </div>
                <div className="service-cont-box">
                  <div className="title">{values?.title}</div>
                  <div className="desc">{values?.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
