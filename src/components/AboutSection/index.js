import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// styles
import "./AboutSection.css";
// bootstrap components
import {
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap';

function AboutSection() {
    return (
        <div className="about-container">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="biography-container p-5">
                        <h3>Biography</h3>
                        <p>
                            Maeve O'Byrne is a graduate of Dun Laoghaire College of Art (Painting, Printmaking) now I.A.D.T.
                            She is Irish based. In 1983 she was awarded the Sir Alfred Beit Award, for the most promising painter.
                            During the 1980's and the 1990's she lived and painted in New York, San Francisco and Hawaii.
                            Her Art was well received in California, and it was selling well. Maeve was involved in the Community
                            Arts Movement, creating two very large Murals, and creating Annual exhibitions, both in solo and group
                            shows. It was during a solo exhibition that Maeve was invited to move to Hawaii and produce a portfolio
                            of 28 paintings, for 'Roys' in Honolulu. The exhibition was a great success and it was there that she
                            began to work as a freelance textile designer of men's 'Aloha Shirts' working for 'Kahala' for a decade.
                            Her shirts featured on local Hawaiian T.V. and newspapers.
                        </p>
                    </Col>
                    <Col lg={4} md={12}>
                        <StaticImage
                            src="./images/maeve_layered_profile.png"
                            alt="Maeve at Van Gogh Exhibition"
                            className="maeve-profile-image p-4 img-fluid"
                            layout="constrained"
                            width={600}
                            placeholder="blurred"
                        />
                    </Col>
                </Row>
                <Row className="mission-row text-center">
                    <Col className="mission-container p-5">
                        <h2>
                            "I am currently living and working in Co. Wexford, <br/> 
                            I am a member of Visual Artists Ireland and of Artlinks."
                        </h2>
                    </Col>
                </Row>
                <div className="cv-container">
                    <Row className="p-4">
                        <Col lg={6} md={12}>
                            <h5>Solo Exhibitions</h5>
                            <ul>
                                <li>Circa Design, Wexford</li>
                                <li>Cockleshell Gallery</li>
                                <li>Bodega Gallery, Cornmarket, Cork</li>
                                <li>Grapevine Arts Centre, Dublin</li>
                                <li>Roy's Art Gallery, Hawaii Kai, Hawaii</li>
                                <li>Pendragon Gallery, San Francisco, CA</li>
                                <li>101 Talbot, Dublin</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h5>Group Exhibitions</h5>
                            <ul>
                                <li>Van Gard Gallery, Macroom, Cork</li>
                                <li>Narrow Space Gallery, Clonmel</li>
                                <li>Kilcock Art Gallery</li>
                                <li>Cockleshell Gallery, Co. Wexford</li>
                                <li>Wexford Opera Festival, Rosslare</li>
                                <li>Riverrun Gallery, Dublin</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="p-4">
                        <Col lg={6} md={12}>
                            <h5>Collections</h5>
                            <ul>
                                <li>Office of Public Works</li>
                                <li>Fitzers Café Group, Dublin</li>
                                <li>Brandon House Hotel, Wexford</li>
                                <li>Law Library, Dublin</li>
                                <li>Sumitomo Bank, San Francisco</li>
                            </ul>
                        </Col>
                        <Col lg={6} md={12}>
                            <h5>Reviews and Interviews</h5>
                            <ul>
                                <li>Saturday Irish Times by Deirdre McQuillan</li>
                                <li>Ireland On Sunday by Jill Turner</li>
                                <li>New Ross Standard by Aisling Donnelly</li>
                                <li>Examiner Newspaper, Cork</li>
                                <li>Sunday Independent by Brigid McLaughlin</li>
                                <li>Sunday Tribune - Arts Review</li>
                                <li>Image Magazine - Dublin</li>
                                <li>Honolulu Star Newspaper</li>
                                <li>Honolulu Business Magazine</li>
                                <li>Sunday Business Post, Margaret Dunne</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="p-4">
                        <Col>
                            <h5>Private Collections</h5>
                            <p>California, Hawaii, Japan, France, Mexico, Spain and Ireland</p>
                        </Col>
                    </Row>
                    <Row className="p-4">
                        <Col lg={6} md={12}>
                            <h5>Commission and Private Collections</h5>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>2021</td>
                                        <td>The Allen Family, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td>2008</td>
                                        <td>RTE 'The Clinic'</td>
                                    </tr>
                                    <tr>
                                        <td>2002</td>
                                        <td>Hook Lighthouse, Co. Wexford</td>
                                    </tr>
                                    <tr>
                                        <td>1998</td>
                                        <td>Pauline Walley, Law Library, Dublin</td>
                                    </tr>
                                    <tr>
                                        <td>1996</td>
                                        <td>David Murphy, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Declan Buckley, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Mr. Peter Waller, North Shore Resident, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Ms. Jennifer Garvey, North Shore Resident, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td>1995</td>
                                        <td>Dr Brent Shigeioka, Oahu Resident, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Dillingham Estates in Mokuleia, Waimea Bay, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Monta Koch, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td>1993</td>
                                        <td>Frank Fitzpatrick, Fitzers Restaurant Group, Dublin, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Poolbeg Press, Swords, Dublin, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td>1991</td>
                                        <td>Tyrone Guturie Art Centre, Annaghmakerrig, Co. Monaghan</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={6} md={12}>
                            <h5>Education</h5>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>1980-1984</td>
                                        <td>Dun Laoighre School of Art and Design, Fine Art and Printing</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Qualified with National Council of Education Awards</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>Diploma in Painting (with credit)</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row className="p-4">
                        <Col lg={6} md={12}>
                            <h5>Awards</h5>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>1990</td>
                                        <td>Tyrone Guturie Art Centre, Annaghmakerrig, Co. Monaghan<br/>6 week residential work</td>
                                    </tr>
                                    <tr>
                                        <td>1991</td>
                                        <td>Painting Award, "celebration 750", Ennis Arts Festival</td>
                                    </tr>
                                    <tr>
                                        <td>1986</td>
                                        <td>Norah McGuinness Award, Dublin, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td>1984</td>
                                        <td>Sir Alfred Beit Foundation Award, Dublin, Ireland</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={6} md={12}>
                            <h5>Art Employment - Graphics</h5>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>1993-2004</td>
                                        <td>In House Fabric Designer for Kahala Aloha Wear, Honolulu, Hawaii<br/>Design Feature for Cannes Film Festival, 1999, Men's Aloha Shirts</td>
                                    </tr>
                                    <tr>
                                        <td>1992-1997</td>
                                        <td>Graphic Designer for Greeting/ Art Cards, Halewia, Hawaii</td>
                                    </tr>
                                    <tr>
                                        <td>1991</td>
                                        <td>Designer for Fitzers Café, Dawson Street, Dublin, Ireland</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default AboutSection