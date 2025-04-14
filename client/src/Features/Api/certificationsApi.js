import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ✅ Make sure the base path is correct (your route is `/api/v1/certifications`)
const CERTIFICATION_API = "http://localhost:9000/api/v1/certifications";

export const certificationApi = createApi({
  reducerPath: "certificationApi",
  tagTypes: ["Refetch_Certification"],
  baseQuery: fetchBaseQuery({
    baseUrl: CERTIFICATION_API,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // ✅ Create a new certification
    createCertification: builder.mutation({
      query: (certificationData) => ({
        url: "/",
        method: "POST",
        body: certificationData,
      }),
      invalidatesTags: ["Refetch_Certification"],
    }),

    // ✅ Fetch all certifications
    getAllCertifications: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Refetch_Certification"],
    }),

    // ✅ Fetch a single certification by ID
    getCertificationById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// ✅ Export hooks
export const {
  useCreateCertificationMutation,
  useGetAllCertificationsQuery,
  useGetCertificationByIdQuery,
} = certificationApi;



