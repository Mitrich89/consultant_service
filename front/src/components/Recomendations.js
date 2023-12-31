import React, { useEffect, useRef } from "react";
import AdditionVisibility from "./AdditionVisibility";
import Addition from "./Addition";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Anchor } from "./Anchor";
import { allRecomendations } from "../data/recommendations";
import { riskAddition } from "../data/recommendations";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { type } from "@testing-library/user-event/dist/type";

export const Recomendations = ({ recommendations, maxRisk, end }) => {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const downloadDate =
    new Date().toLocaleString("en-US", {
      day: "2-digit",
    }) +
    "_" +
    new Date().toLocaleString("en-US", {
      month: "2-digit",
    }) +
    "_" +
    new Date().getFullYear();

  const relevanceDate =
    new Date().toLocaleString("en-US", {
      day: "2-digit",
    }) +
    "." +
    new Date().toLocaleString("en-US", {
      month: "2-digit",
    }) +
    "." +
    new Date().getFullYear();

  console.log(maxRisk);
  const risk_btn = ["", "", "", ""];
  if (end && maxRisk.slice(-1)[0][0] < 2) {
    risk_btn[1] = "!!!";
  } else {
    if (maxRisk) {
      if (maxRisk.slice(-1)[0][0] === -1) {
        risk_btn[1] = "!!!";
      } else if (maxRisk.slice(-1)[0][0] === 0) {
        risk_btn[0] = "!!!";
      } else if (maxRisk.slice(-1)[0][0] === 1) {
        risk_btn[1] = "!!!";
      } else if (maxRisk.slice(-1)[0][0] === 2) {
        risk_btn[2] = "!!!";
      } else if (maxRisk.slice(-1)[0][0] === 3) {
        risk_btn[3] = "!!!";
      }
    }
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
            fileName={"Рекомендации" + "_" + downloadDate}
            ref={pdfExportComponent}
            paperSize="A4"
          >
            <div ref={contentArea}>
              <p className="relevance">{"Актуально на " + relevanceDate}</p>
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
};
