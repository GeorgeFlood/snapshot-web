import React from "react";

const Table = () => {
  const features = [
    { name: "UNLIMITED STORY POSTING", basic: true, pro: true, business: true },
    { name: "UNLIMITED PHOTO UPLOAD", basic: true, pro: true, business: true },
    {
      name: "EMBEDDING CUSTOM CONTENT",
      basic: false,
      pro: true,
      business: true,
    },
    { name: "CUSTOMIZE METADATA", basic: false, pro: true, business: true },
    { name: "ADVANCED METRICS", basic: false, pro: false, business: true },
    { name: "PHOTO DOWNLOADS", basic: false, pro: false, business: true },
    {
      name: "SEARCH ENGINE INDEXING",
      basic: false,
      pro: false,
      business: true,
    },
    { name: "CUSTOM ANALYTICS", basic: false, pro: false, business: true },
  ];

  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <th>THE FEATURES</th>
          <th>BASIC</th>
          <th>PRO</th>
          <th>BUSINESS</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature, index) => (
          <tr key={index}>
            <td>{feature.name}</td>
            <td>{feature.basic ? "✓" : "x"}</td>
            <td>{feature.pro ? "✓" : "x"}</td>
            <td>{feature.business ? "✓" : "x"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
