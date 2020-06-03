import * as React from "react";

function timeConverter(UNIX_timestamp: string) {
  // console.log(UNIX_timestamp);

  let time = new Date(Number.parseInt(UNIX_timestamp)).toLocaleTimeString(
    "en-US"
  );
  let date = new Date(Number.parseInt(UNIX_timestamp)).toLocaleDateString(
    "en-US"
  );

  return `${date} ${time}`;
}

function destructure(tables: any) {
  let finalTables = "";
  let drawnTables = "";
  let tempDraw = "";

  for (let top = 0; top < tables.length; top++) {
    let currentTableObject = tables[top];

    let tableDate = currentTableObject.tableDate;
    let tableTitle = currentTableObject.tableTitle;
    let tableRows = currentTableObject.tableRows;
    let tableHeads = currentTableObject.tableHeads;

    finalTables += "<thead> <tr>";

    for (let k = 0; k < tableHeads.length; k++) {
      finalTables += `<th> ${tableHeads[k]} </th>`;
    }

    finalTables += " <tr> </thead>   <tbody>";

    for (let j = 0; j < tableRows.length; j++) {
      finalTables += `<tr>`;
      for (let k = 0; k < tableHeads.length; k++) {
        finalTables += `<td> ${tableRows[j][k]} </td>`;
      }
    }

    finalTables += "</tbody> </tr>";

    tempDraw = `<code>${tableTitle}  ${tableDate}</code> <br><br> <table class="table" border="1"> ${finalTables} </table>`;

    drawnTables += tempDraw;

    tempDraw = "";
    finalTables = "";
  }

  return drawnTables as string;
}

export const RenderPage = (props: any) => {
  return (
    <div>
      {props.location.state ? (
        <div className="text-center">
          <h1>{timeConverter(props.location.state.page.time)}</h1>
          <hr />
          <div>
            <img
              width="1000px"
              height="780px"
              src={`${props.location.state.page.imageUrl}`}
              alt={`${props.location.state.page.time}`}
            />
          </div>
          <hr />
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: destructure(props.location.state.page.tables),
              }}
            ></div>

            <hr />
          </div>
        </div>
      ) : (
        <p>No table selected for preview</p>
      )}
    </div>
  );
};
