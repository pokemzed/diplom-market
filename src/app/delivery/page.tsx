import React from 'react';
import DeliveryPage from "@/pages/DeliveryPage/DeliveryPage";
import {Metadata} from "next";
import {META_DELIVERY} from "@/constants/metadata";

export const metadata: Metadata = META_DELIVERY;

const page = () => <DeliveryPage />;

export default page;
