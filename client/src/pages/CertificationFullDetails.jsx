import React from "react";
import { useParams } from "react-router-dom";
import { useGetCertificationByIdQuery } from "../Features/Api/certificationsApi";

const CertificationFullDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCertificationByIdQuery(id);
  if(!id) return <p className="p-4">Invalid certification ID.</p>;
  // Check if the ID is valid and not undefined
  if(id){
    console.log("Certification ID:", id, "Data:", data);
  }

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error || !data) return <p className="p-4 text-red-500">Error loading certification.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <img
        src={data.imageUrl || data.image?.[0]}
        alt={data.title}
        className="w-full max-w-md rounded mb-4"
      />
      <p className="text-gray-600 mb-2">{data.description}</p>
      <p><strong>Price:</strong> ${data.price}</p>
      <p><strong>Issued By:</strong> {data.issuedBy}</p>
      <p><strong>Duration:</strong> {data.duration}</p>
      <p><strong>Validity:</strong> {data.validity}</p>
    </div>
  );
};

export default CertificationFullDetails;
