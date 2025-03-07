import { useState, useEffect } from "react"
import { Col, Row } from 'react-bootstrap'


const CreateAndUpdateUser = (props) => {
    const [state, setState] = useState({
        name: "",
        regPrice: "",
        dealPrice: "",
        tax: "",
        id: "",
        availableQty: '',
        category: "FOOD",
        storeName: "Whitefield",
        isLoading: false,
        showErrorMessage: false,
        showQtyErroMes: false,
        showCityErrorMessage: false,
        showPhoneErroMessage: false,
        showEmailErrorMessage: false,
        showtaxPerMessage: false,
        categoryOptions: ["FOOD", 'GROCERY', "HOME NEED", 'CLOTH'],
        storeNameOptions: ["Whitefield", "Mejestic", "Hebbal", "KR Puram"]
    })
    const { addCity, action, selectedCity } = props
    useEffect(() => {
        if (action === 'UPDATE') {
            const { name, regPrice, dealPrice, tax, id, category, availableQty, storeName } = selectedCity
            setState((prev) => ({
                ...prev, name: name,
                regPrice: regPrice,
                dealPrice: dealPrice,
                category: category,
                storeName: storeName,
                tax: tax,
                availableQty: availableQty,
                id: id
            }))
        }
    }, [action, selectedCity])
    const inputName = (event) => {
        setState((prev) => ({ ...prev, name: event.target.value }))
    }
    const inputQty = (event) => {
        setState((prev) => ({ ...prev, availableQty: event.target.value }))
    }
    const onCatChange = (event) => {
        setState((prev) => ({ ...prev, category: event.target.value }))
    }
    const onStoreChange = (event) => {
        setState((prev) => ({ ...prev, storeName: event.target.value }))
    }
    const inputPhone = (event) => {
        setState((prev) => ({ ...prev, regPrice: event.target.value }))
    }
    const inputEmail = (event) => {
        setState((prev) => ({ ...prev, dealPrice: event.target.value }))
    }
    const inputTax = (event) => {
        setState((prev) => ({ ...prev, tax: event.target.value }))
    }
    const goBackHandle = () => {
        addCity(undefined)
    }
    const checkCityValidation = (event) => {
        if (event.target.value === '') {
            setState((prev) => ({ ...prev, showCityErrorMessage: true }))
        } else {
            setState((prev) => ({ ...prev, showCityErrorMessage: false }))
        }
    }
    const checkQtyValidation = (event) => {
        if (event.target.value === '') {
            setState((prev) => ({ ...prev, showQtyErroMes: true }))
        } else {
            setState((prev) => ({ ...prev, showQtyErroMes: false }))
        }
    }
    // checkQtyValidation
    const checkStateValidation = (event) => {
        if (event.target.value === '') {
            setState((prev) => ({ ...prev, showPhoneErroMessage: true }))
        } else {
            setState((prev) => ({ ...prev, showPhoneErroMessage: false }))
        }
    }
    const checkTaxValidation = (event) => {
        if (event.target.value === '') {
            setState((prev) => ({ ...prev, showtaxPerMessage: true }))
        } else {
            setState((prev) => ({ ...prev, showtaxPerMessage: false }))
        }
    }
    const checkCountryValidation = (event) => {
        if (event.target.value === '') {
            setState((prev) => ({ ...prev, showEmailErrorMessage: true }))
        } else {
            setState((prev) => ({ ...prev, showEmailErrorMessage: false }))
        }
    }
    // Submit Form Function
    const submitForm = (event) => {
        event.preventDefault();
        if (name !== '' && regPrice !== '' && dealPrice !== '' && tax !== "" && category !== "" && availableQty !== '' && storeName !== '') {
            setState((prev) => ({ ...prev, isLoading: true, showErrorMessage: false }))
            const productDetails = {
                name,
                regPrice,
                dealPrice,
                tax,
                availableQty,
                category,
                storeName,
                id: new Date()
            }
            if (action === 'CREATE') {
                addCity(productDetails, action, null)
            } else {
                addCity(productDetails, action, id)
            }
        } else {
            setState((prev) => ({ ...prev, showErrorMessage: true }))
        }
    }
    const {
        name,
        id,
        regPrice,
        dealPrice,
        tax,
        category,
        storeName,
        isLoading,
        categoryOptions,
        storeNameOptions,
        showErrorMessage,
        showPhoneErroMessage,
        showtaxPerMessage,
        showCityErrorMessage,
        availableQty,
        showQtyErroMes,
        showEmailErrorMessage } = state
    return (
        <div className="create-update-dialog" >
            <Row className="magin-botton">
                <Col sm={3}><img className="logo-width" src="./idealmartlogo.jpeg" alt="logo" /></Col>
                <Col sm={12} md={4}>
                    <h3 className="under-line" > {action === 'CREATE' ? 'Add Product' : "Update Product"}</h3>
                </Col>
                <Col sm={12} md={4}></Col>
                <Col sm={12} md={1}>
                    <button type="button" className="delete-btn" onClick={goBackHandle} >X</button>
                </Col>
            </Row>
            <form onSubmit={submitForm} className="form-fields" >
                <Row>
                    <Col sm={12} md={6}>
                        <label className="label-width">Store Name :</label>
                        <select  className="input-padding" onChange={onStoreChange} value={storeName}>
                            {storeNameOptions.map((item) =>
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            )}
                        </select>
                    </Col>
                    <Col sm={12} md={6}>
                        <label className="label-width">Category Name :</label>
                        <select  className="input-padding" onChange={onCatChange} value={category}>
                            {categoryOptions.map((item) =>
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            )}
                        </select>
                    </Col>
                    <Col sm={12} md={6}>
                        <label className="label-width">Product Name :</label>
                        <input value={name} type="text" className="input-field" placeholder="Product Name" onBlur={checkCityValidation} onChange={inputName} />
                        {showCityErrorMessage && <p className="error-message"> * Product is Required</p>}
                    </Col>
                    <Col sm={12} md={6}>
                        <label className="label-width">Available Quantity :</label>
                        <input value={availableQty} type="number" className="input-field" placeholder="Only Numbers Allowed" onBlur={checkQtyValidation} onChange={inputQty} />
                        <br />
                        {showQtyErroMes && <p className="error-message"> * Available Quatity is Required</p>}
                    </Col>
                    <Col sm={12} md={6}>
                        <label className="label-width">Regular Price :</label>
                        <input value={regPrice} type="number" className="input-field" placeholder="Only Numbers Allowed" onBlur={checkStateValidation} onChange={inputPhone} />
                        <br />
                        {showPhoneErroMessage && <p className="error-message"> * Regular Price is Required</p>}
                    </Col>
                    <Col sm={12} md={6}>
                        <label className="label-width">Deal Price :</label>
                        <input value={dealPrice} type="number" className="input-field" placeholder="Only Numbers Allowed" onBlur={checkCountryValidation} onChange={inputEmail} />
                        <br />
                        {showEmailErrorMessage && <p className="error-message">* Deal Price is Required</p>}                    </Col>
                    <Col sm={12} md={6}>
                        <label className="label-width">Tax Percentage :</label>
                        <input value={tax} type="number" className="input-field" placeholder="Only Numbers Allowed" onBlur={checkTaxValidation} onChange={inputTax} />
                        {showtaxPerMessage && <p className="error-message"> * Tax % Number is Required</p>}
                        <br />
                    </Col>
                </Row>
                <button type="submit" className="update-btn" >{action === 'CREATE' ? 'CREATE' : "UPDATE"}</button>
                <button type="button" className="delete-btn" onClick={goBackHandle} >BACK</button>
                <br />
                {showErrorMessage && <p className="error-message" >* Fill All Fields</p>}
                {isLoading && <img src="./loader_new.gif" alt="loading" width={45} height={45} />}
            </form>
        </div>
    )
}

export default CreateAndUpdateUser