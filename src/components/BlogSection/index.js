import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// styles
import "./BlogSection.css"
// bootstrap components
import { 
    Container, 
    Card, 
    Row, 
    Col 
} from 'react-bootstrap'

function BlogSection() {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "blog" } }) {
                nodes {
                    base
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                    }
                }
            }
        }
    `)

    const byFile = {}
    data.allFile.nodes.forEach(node => {
        if (node.childImageSharp) {
            byFile[node.base] = node.childImageSharp.gatsbyImageData
        }
    })

    return (
        <div className="blog-container">
            <Container>
                <Card className="border-0 blog-card shadow">
                    <Card.Body>
                        <Card.Header className="text-center border-0">"Lost and Found" A New Collection of Paintings.</Card.Header>
                        <Row>
                            <Col lg={5} md={12}>
                                <div className="plate">
                                    <GatsbyImage
                                        image={byFile["lost_and_found_thumb.jpg"]}
                                        alt="Paintings from the Lost and Found collection"
                                    />
                                </div>
                            </Col>
                            <Col lg={7} md={12}>
                            <Card.Text className="blog-text">
                                The work in this new collection of paintings 'lost and found', was created during Covid when I found the luxury
                                of time to do what I love, painting and printmaking. Both my kitchen table and back garden became my studio and
                                these 14 paintings emerged as a visual diary of sorts, of the places I have lived and worked over the past decade.
                                <br /><br />
                                Annual journeys to Agrigento in Sicily have played a major part in my changing palette as the harsh sunlight and
                                soaring temperatures played on the landscape and seascapes of this Mediterranean island, alongisde the more subtle
                                and gentle sunlight on the Irish landscape.
                                <br /><br />
                                This collection is a mix of Irish and Sicilian recurring motifs, in both still life and landscapes. A sweet escape
                                for the viewer.
                            </Card.Text>
                            </Col>
                        </Row>
                        <Card.Footer className="text-muted text-right">July 2022</Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="border-0 blog-card shadow">
                    <Card.Body>
                        <Card.Header className="text-center border-0">"Maeve's mana from Hawaii" An article written in the Irish Examiner by Des O'Sullivan</Card.Header>
                        <Row>
                            <Col lg={5} md={12}>
                                <div className="plate">
                                    <GatsbyImage
                                        image={byFile["maeve_examiner_article.png"]}
                                        alt="Maeve's mana from Hawaii, Irish Examiner article by Des O'Sullivan"
                                    />
                                </div>
                            </Col>
                            <Col lg={7} md={12}>
                            <Card.Text className="blog-text">
                                LOOKING at Maeve O'Byrne's paintings you wonder, how did she ever manage to drag herself away from Hawaii. Infused 
                                with colour and light, they radiate contentment and good cheer. She loves it there and it shows in the work now hanging 
                                at The Bodega in Cork's Commarket Street. But drag herself away she did. After four years on these lush volcanic Pacific 
                                rocks she returned home to Dublin in December and is already planning a series of Irish landscapes. <br />It may be possible 
                                to see these as yet unpainted landscapes later on this year at the Vangard in Macroom, where she has previously shown. 
                                For now Maeve O'Byrne has brought mana to Cork. Her show, Mana in Cork, borrows the Polynesian word 'mana', meaning 
                                spiritual or energy, for its title.<br />These are vivid, colourful works. O'Byrne is a colourist who produces pictures that, 
                                above all, are vibrant. She is passionate about her work but this artist does not like work that traumatises or pictures 
                                that get in your face. She also has to live by her art, and this is a perpetual challenge that she has risen to in all 
                                sorts of places.<br />Maeve O'Byrne is an artist and a worker. She treats her career exactly like any other job and puts in at 
                                least a 40 hour week most weeks which is why it is perfectly reasonable to speculate that pictures now forming in her head 
                                will actually be on the walls of a gallery within months. She produces her own paintings or she works on commissions, 
                                striving to achieve what the client wants and at the same time producing a work of art. She has been successful. She has 
                                been selling work for 15 years. When she left art college at Dun Laoghaire Maeve O'Byrne would charge £60 for a picture. 
                                Most of the work now on show at the Bodega, which. has generously sponsored this exhibition, sells for around the £300 mark.<br /> 
                                She left Dun Laoghaire armed with a Beit Foundation Award. It is only given out to one student in every five years and is 
                                substantial. She also won the Norah McGuinness Award. Maeve O'Bryne went to New York and worked as a pavement artist in a 
                                city unfamiliar with pavement art. It led to a show in Greenwich Village at a restaurant and before she left the Big Apple 
                                she had even designed a series of shop windows for Valentino at the top Manhattan fashion emporium, Bergdorf Goodman on a 
                                Greek Underworld theme.<br /> With a coup like that on her CV she could have opted for a career in window design. Other artists 
                                have done it. But she prefers to teach, or to work in restaurants when she needs extra money. Money to live on comes mostly 
                                through her art. Maeve O'Byrne spent five years in California where she designed two restaurants.<br /> She draws, she makes 
                                field trips, she is fascinated with the changing colours and shapes of nature, she paints in the studio. She captures moods.<br /> 
                                Maeve O'Bryne has received numerous commissions. One commission in Hawaii came from a large Tokyo-based Japanese insurance 
                                company. It provided the opportunity to work in large scale; which she loves. These Japanese were difficult to work for. 
                                They sort of knew what they wanted. She made numerous drawings, and some took many hours of work. There were meetings, 
                                finally a shape was agreed. At the end they were gobsmacked and could not believe how she had captured so surely exactly 
                                what they wanted. A lot of the work has gone from Hawaii, where she is well known, to Japan. She is an artist at a company 
                                called Aloha Shirts which is to be featured at the Cannes Film Festival next year. Maeve O'Bryne does not know where her 
                                career as an artist will take her to next. For now it is Dublin, where she has a studio in Donnybrook. The Irish landscapes 
                                she has started to work on are inspired by Wicklow. The rhododendrons are out in PowerScourt Gardens. The waterlilies there 
                                are in bud and will find their way into this work.<br /> Hawaii is somewhere she says she will always go back to. You could guess 
                                this easily anyhow. The works on show at The Bodega for the next couple of weeks make it quite clear.<br />
                                <br />
                                - Des O'Sullivan
                            </Card.Text>
                            </Col>
                        </Row>
                        <Card.Footer className="text-muted text-right">April 1998</Card.Footer>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default BlogSection