import { Box, IconButton } from "@mui/material";

import Colophon from "./Colophon.jsx";
import Steps from "./Steps.jsx";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function About() {
    const large = "80%";
    const medium = "50%";
    const small = "30%";

    const sTitle = {
        paddingTop: 100,
        width: large,
        textAlign: "center",
        margin: "50px auto",
        fontSize: "10rem",
    };

    const sIntro = {
        marginTop: 300,
        width: medium,
        margin: "50px auto ",

        textAlign: "justify",
        textJustify: "inter-word",
        // marginBottom: 100,
    };

    const sDiagram = {
        height: 700,
        width: large,

        margin: "50px auto",
    };

    const sContainer = {
        overflow: "auto",
    };

    const sUl = {
        listStyleType: "square",
    };

    const sLi = {
        paddingBottom: "15px",
        paddingLeft: "60px",
        paddingRight: "60px",
        fontStyle: "italic",
    };

    const sColophon = {
        width: "60%",
        margin: "50px auto",
        marginTop: "50px",
    };

    return (
        <>
            <Box
                className="full_screen"
                sx={{
                    ...sContainer,
                }}
            >
                <Box style={{ ...sTitle }}>
                    DATATHINK
                    <p style={{ fontSize: "1.5rem", padding: 0, margin: 0 }}>
                        AI & Cities: Sampling the Past, Interpreting the Present
                        in Future Tense / 2024
                    </p>
                </Box>

                <Box style={{ ...sIntro }}>
                    <p>
                        We invite doctoral students and early career researchers
                        to participate in a 4-day winter school exploring
                        emerging intersections of artificial intelligence,
                        machine learning, urban studies, urban landscape, and
                        architectural and urban history. This interdisciplinary
                        forum will critically investigate how we understand
                        cities' pasts, presents, and futures in light of these
                        accelerating sociotechnical shifts.
                    </p>
                    <p style={{ marginTop: "50px", marginBottom: "35px" }}>
                        The thematic lines for Datathink 2024 revolve around the
                        following questions:
                        <ul style={{ ...sUl }}>
                            <li style={{ ...sLi }}>
                                How do algorithmic techniques like deep learning
                                and computer vision challenge or complement
                                existing methods in fields like architecture,
                                urban studies, and architectural and urban
                                history? What new questions and blindspots
                                emerge?
                            </li>
                            <li style={{ ...sLi }}>
                                As urban data extraction and analysis grows
                                increasingly automated, how does this transform
                                disciplinary notions of evidence, objectivity,
                                and knowledge production?
                            </li>
                            <li style={{ ...sLi }}>
                                How do algorithmic interfaces, predictive
                                policing, and automated urban management systems
                                constrain or enable social justice claims and
                                aspirations in the city?
                            </li>
                        </ul>
                    </p>
                    <p>
                        We encourage candidates from diverse backgrounds in the
                        arts, humanities, social sciences, information science,
                        engineering, and design to apply. An ability to converse
                        across disciplinary perspectives is essential.
                    </p>
                    <p>
                        The winter school is offered at no cost upon application
                        and selection. The travel, accommodation, and food costs
                        will be covered individually by the participants
                        themselves.
                    </p>
                    <p>
                        Co-organized by Digital Visual Studies, a Max Planck
                        Society project hosted at the University of Zurich, and
                        the UNESCO Chair in Urban Landscape at the University of
                        Montreal, Datathink 2024 is hosted by the Bibliotheca
                        Hertziana – Max Planck Institute for Art History, in
                        Rome, one of the most recognized institutions in its
                        field, giving us an invaluable chance to get to know its
                        assets and interact with its staff and researchers.
                    </p>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{
                        ...sDiagram,
                        width: "100%",
                        marginTop: "100px",
                        // marginBottom: "100px",
                    }}
                >
                    <img
                        src="poster.png"
                        alt="process diagram"
                        width="500px"
                        height="auto"
                        className="shadow"
                    ></img>
                </Box>
                <Box
                    sx={{
                        alignItems: "center",
                        marginBottom: "100px",
                        ...sColophon,

                        marginTop: "100px",
                    }}
                >
                    <Box
                        style={{ ...sIntro, textAlign: "center" }}
                        textAlign="center"
                    >
                        <Box style={{ width: "100%" }}>
                            <p
                                style={{
                                    textAlign: "center",
                                    textJustify: "inter-word",
                                    fontStyle: "italic",
                                    padding: "0 0",
                                }}
                            >
                                for more informations on <br />
                                how to apply, the detailed schedule or the list
                                of the invited speakers
                                <br />
                                <br />
                                please read the full call <br />
                            </p>
                        </Box>
                        <Box>
                            <IconButton
                                style={{
                                    padding: 12,
                                    marginBottom: "10px",
                                }}
                                className="info_btn btnSelected"
                                target="_blank"
                                href="https://docs.google.com/document/d/1BWIDzM9R8VebRiunXTuYle8n9UKsLBslp8ko3kRAnm0/edit?usp=sharing"
                            >
                                <TextSnippetIcon
                                    sx={{
                                        padding: "2px",
                                        margin: 0,
                                        fontSize: "2rem",
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Colophon />
            </Box>
        </>
    );
}
