import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { useApp } from "../../contexts/AppContext";

import "@react-pdf-viewer/core/lib/styles/index.css";

function PlanoTreinoDisplay({ trainingPlanId }) {
  const { users, activeUserName } = useApp();

  const displayTrainingPlan = users
    .find((user) => user.userName === activeUserName)
    .trainingPlans.find((a) => a.id === trainingPlanId);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer fileUrl={displayTrainingPlan.trainingPlan.name} />
    </Worker>
  );
}

export default PlanoTreinoDisplay;
