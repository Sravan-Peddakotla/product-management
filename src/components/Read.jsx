import { Col, Row, Container } from 'react-bootstrap'

const Read = (props) => {
    const { selectedCity, handleGoBack } = props
    const { name, regPrice, dealPrice, tax, category, availableQty, storeName } = selectedCity
    const goBackHandle = () => {
        handleGoBack()
    }
    return (
        <div className="create-update-dialog " >
            <Container>
                <Row>
                    <Col sm={3}  className="padding-bottom"> <img className="logo-width" src="./idealmartlogo.jpeg" alt="logo" /></Col>
                    <Col sm={5}  className="padding-bottom">
                        <h3 className="under-line">Product Details</h3>
                    </Col>
                    <Col sm={3} className="padding-bottom"></Col>
                    <Col sm={1}  className="padding-bottom">
                        <button type="button" className="delete-btn" onClick={goBackHandle} >X</button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={3} className="padding-bottom">
                        <b>Store Name :</b>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <span className="font-weight user-detail">{storeName}</span>
                    </Col>
                    <Col sm={3} className="padding-bottom">
                        <b>Product Name :</b>
                    </Col>
                    <Col sm={3} className="padding-bottom">
                        <span className="font-weight user-detail">{name}</span>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <b>Category :</b>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <span className="font-weight user-detail">{category}</span>
                    </Col>
                    <Col sm={3} className="padding-bottom">
                        <b>Available Qty :</b>
                    </Col>
                    <Col sm={3}>
                        <span className="font-weight user-detail">{availableQty}</span>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <b>Regular Price :</b>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <span className="font-weight user-detail">{regPrice}</span>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <b>Deal Price :</b>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <span className="font-weight user-detail">{dealPrice}</span>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <b>Tax % :</b>
                    </Col>
                    <Col sm={3}  className="padding-bottom">
                        <span className="font-weight user-detail">{tax}</span>
                    </Col>
                </Row>
            </Container>
            <br />
            <button type="button" className="delete-btn" onClick={goBackHandle} >CLOSE</button>
        </div>
    )
}

export default Read