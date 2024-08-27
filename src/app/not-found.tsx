import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFoundComponent from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page",
};

const NotFound = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFoundComponent />
    </>
  );
};

export default NotFound;
