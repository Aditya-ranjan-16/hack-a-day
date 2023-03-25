import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    width: 700,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
const MyDocument = ({ pdfdata }) => {
  console.log(pdfdata);
  return (
    <Document>
      <Page style={styles.body}>
        <Text classname="mt-[400px]" style={styles.title}>
          {pdfdata.title}
        </Text>
        <Text style={styles.author}>{pdfdata.subtitle}</Text>
        <Text style={styles.author}>Date Created : {pdfdata.cdate}</Text>
        <Text style={styles.author}>Developer : {pdfdata.dname}</Text>
        <Text style={styles.author}>
          Last Review Date : {pdfdata.lrdate}
        </Text>

        <Text style={styles.subtitle} break>Model Risk Evaluation</Text>
        <Text style={styles.text}>
          Model risk occurs primarily for two reasons: - - A model may have
          fundamental errors and produce inaccurate outputs when viewed against
          its design objective and intended business uses A model may be used
          incorrectly or inappropriately or there may be a misunderstanding
          about its limitations and assumptions. Model risk increases with
          greater model complexity, higher uncertainty about inputs and
          assumptions, broader extent of use, and larger potential impact.
        </Text>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.text} >
          {pdfdata.overview}
        </Text>
        <Text style={styles.subtitle} break>Graph</Text>

        <Image src={pdfdata.graph1}></Image>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

export default MyDocument;
