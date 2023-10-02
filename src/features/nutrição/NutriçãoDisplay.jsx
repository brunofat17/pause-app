import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { useApp } from "../../contexts/AppContext";

import "@react-pdf-viewer/core/lib/styles/index.css";

function NutriçãoDislplay({ nutriPlanId }) {
  const { users, activeUserName } = useApp();

  const displayNutriPlan = users
    .find((user) => user.userName === activeUserName)
    .nutriPlans.find((a) => a.id === nutriPlanId);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={displayNutriPlan.nutriPlan.name} />
    </Worker>
  );
}

export default NutriçãoDislplay;
