import React, { useRef } from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";
import { allRecomendations } from "../data/recommendations";
import { riskAddition } from "../data/recommendations";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { type } from "@testing-library/user-event/dist/type";

export default function Recomendations({ recommendations, maxRisk }) {
  console.log(maxRisk);
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const filename =
    "Рекомендации" +
    "_" +
    new Date().toLocaleString("en-US", {
      day: "2-digit",
    }) +
    "_" +
    new Date().toLocaleString("en-US", {
      month: "2-digit",
    }) +
    "_" +
    new Date().getFullYear();

  const risk_btn = ["", "", "", ""];
  if (
    maxRisk[maxRisk.length - 1][0] === -1 ||
    typeof maxRisk[maxRisk.length - 1][0] === "undefined"
  ) {
    risk_btn[1] = "!!!";
  } else if (maxRisk[maxRisk.length - 1][0] === 0) {
    risk_btn[0] = "!!!";
  } else if (maxRisk[maxRisk.length - 1][0] === 1) {
    risk_btn[1] = "!!!";
  } else if (maxRisk[maxRisk.length - 1][0] === 2) {
    risk_btn[2] = "!!!";
  } else if (maxRisk[maxRisk.length - 1][0] === 3) {
    risk_btn[3] = "!!!";
  }
  return (
    <div className="recomendation">
      <h1>
        {recommendations.length > 0 ? "Рекомендации" : "Нет рекомендаций"}
      </h1>
      <div className="risk-buttons">
        <button className="gray-button">{risk_btn[0]}</button>
        <button className="green-button ">{risk_btn[1]}</button>
        <button className="yellow-button">{risk_btn[2]}</button>
        <button className="red-button ">{risk_btn[3]}</button>
      </div>
      <AdditionVisibility component={"riskAddition"}>
        <Addition addition={riskAddition} />
      </AdditionVisibility>
      {recommendations.length > 0 && (
        <div className="recomendation">
          <div className="button-area">
            <button
              className="downloadBtn"
              primary={true}
              onClick={handleExportWithComponent}
            >
              Скачать рекомендации
            </button>
          </div>
          <PDFExport
            fileName={filename}
            ref={pdfExportComponent}
            paperSize="A4"
          >
            <div ref={contentArea}>
              {recommendations.map((r, i) => {
                const recommendation = allRecomendations.find(
                  (ar) => ar.id === r
                );
                return (
                  <div key={i} className="shortRecomandation">
                    <div className="recommendation-item">
                      <span className="recommendation-text">
                        <ReactMarkdown
                          components={{
                            a: Anchor,
                          }}
                        >
                          {recommendation.shortText}
                        </ReactMarkdown>
                      </span>
                      {recommendation.longText && (
                        <AdditionVisibility>
                          <Addition addition={recommendation.longText} />
                        </AdditionVisibility>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </PDFExport>
        </div>
      )}
    </div>
  );
}
