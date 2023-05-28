import { MDXCreateElement, OrderSummaryV2 } from "carbon-for-ibm-cloud";

const Example = () => {
  return (
    <div>
      <OrderSummaryV2
        countrySwitcher={
          <p>Country Switcher</p>
        }
        estimateData={{}}
        footnotes="*Some Terms and conditions may apply"
        items={[
          {
            details: [
              {
                name: "Network SVI-Cloud-1",
              },
              {
                name: "Name Frankfurt-XC00",
              },
              {
                name: "User IP 172.16.10.1/32",
              },
              {
                name: "IBM IP 172.16.10.2/32",
              },
              {
                name: "Location NA West - Equinix",
              },
              {
                name: "BGP ASN Customer IP 645556",
              },
            ],
            name: "Attribute 1",
            value: "$700.00",
          },
          {
            details: [
              {
                name: "Local",
              },
            ],
            name: "Attribute Name Again",
            value: "$0.00/GB hour",
          },
        ]}
        locale="en"
        primaryButtonText="Create"
        secondaryButtonProps={{
          onClick: function noRefCheck() {},
        }}
        secondaryButtonText="Save as quote"
        submitPromoCode={function noRefCheck() {}}
        termsText={
          'View Terms and Conditions'
        }
        totalCost="$241.00"
      />
    </div>
  );
};

export default Example;
