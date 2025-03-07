import { useState } from "react"
import Read from './Read.jsx'
import Snackbar from "./Snackbar.jsx"
import CreateAndUpdateCity from './CreateAndUpdateCity.jsx'
import '../App.css'

const Home = () => {
    const [state, setState] = useState({
        selectedCity: null,
        user: {},
        // currentFilter: "ALL",
        currentStoreFilter: "ALL",
        currentStoreNameFilter: "ALL",
        search: '',
        productDetails: [
            {
                name: "Sugar",
                regPrice: 50,
                dealPrice: 45,
                tax: 10,
                id: 1,
                category: "FOOD",
                storeName: 'Whitefield',
                availableQty: 45
            },
            {
                name: "Dal",
                regPrice: 120,
                dealPrice: 110,
                tax: 10,
                id: 2,
                category: "GROCERY",
                storeName: 'Hebbal',
                availableQty: 12
            },
            {
                name: "Chudidar",
                regPrice: 400,
                dealPrice: 385,
                tax: 15,
                id: 3,
                category: "CLOTH",
                storeName: 'Mejestic',
                availableQty: 54
            },
            {
                name: "Torch Light",
                regPrice: 500,
                dealPrice: 450,
                tax: 8,
                id: 4,
                category: "HOME NEED",
                storeName: 'KR Puram',
                availableQty: 134
            },
            {
                name: "Chocolates",
                regPrice: 100,
                dealPrice: 90,
                tax: 10,
                id: 5,
                category: "FOOD",
                storeName: 'Whitefield',
                availableQty: 45
            },
            {
                name: "Vegetables",
                regPrice: 120,
                dealPrice: 110,
                tax: 10,
                id: 6,
                category: "GROCERY",
                storeName: 'KR Puram',
                availableQty: 12
            },
            {
                name: "Shirt",
                regPrice: 120,
                dealPrice: 110,
                tax: 10,
                id: 7,
                category: "CLOTH",
                storeName: 'Hebbal',
                availableQty: 54
            },
            {
                name: "Rice Cooker",
                regPrice: 120,
                dealPrice: 110,
                tax: 10,
                id: 8,
                category: "HOME NEED",
                storeName: 'Mejestic',
                availableQty: 134
            },
            {
                name: "Gas Stove",
                regPrice: 120,
                dealPrice: 110,
                tax: 10,
                id: 9,
                category: "HOME NEED",
                storeName: 'Whitefield',
                availableQty: 40
            },
        ],
        storeFilterItems: ['ALL', "Whitefield", "Mejestic", "Hebbal", "KR Puram"],
        isLoading: false,
        currentView: "LIST",
        showSnackbar: false
    })
    const addCity = (newCity, action, id) => {
        if (newCity !== undefined) {
            const { productDetails } = state
            if (action === 'CREATE') {
                setState((prev) => ({ ...prev, showSnackbar: true, currentView: "LIST", productDetails: [...prev.productDetails, newCity] }))
            } else if (action === 'UPDATE') {
                const index = productDetails.findIndex((item) => item.id === id)
                productDetails.splice(index, 1, newCity)
                setState((prev) => ({ ...prev, productDetails, showSnackbar: true, currentView: "LIST" }))
            }
        } else {
            setState((prev) => ({ ...prev, currentView: 'LIST' }))
        }
    }
    const closeSnackbar = () => {
        setState((prev) => ({ ...prev, showSnackbar: false }))
    }
    const handleUpdate = (selectedCity) => {
        setState((prev) => ({ ...prev, currentView: 'UPDATE', selectedCity }))
    }
    const handleRead = (selectedCity) => {
        setState((prev) => ({ ...prev, currentView: "READ", selectedCity }))
    }
    // const categoryFilterInput = (event) => {
    //     setState((prev) => ({ ...prev, currentFilter: event.target.value }))
    // }
    const currentStoreFilterInput = (event) => {
        setState((prev) => ({ ...prev, currentStoreFilter: event.target.value }))
    }
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete ?')
        if (confirm) {
            setState((prev) => ({ ...prev, isLoading: true }))
            const filteredDataByCat = productDetails.filter((item) => item.id !== id);
            setState((prev) => ({ ...prev, productDetails: filteredDataByCat, isLoading: false }))
        }
    }
    const searchInput = (event) => {
        setState((prev) => ({ ...prev, search: event.target.value }))
    }
    const renderLoader = () => {
        return (
            <div className="loader-view" >
                <img src="./loader_new.gif" alt="Loading" width={50} height={50} />
                <h2>Loading...</h2>
            </div>
        )
    }
    const { search, storeFilterItems } = state
    let filteredDataByCat

    const renderData = () => {
        if (currentView === 'LIST') {
            return (
                <div>
                    <div className="d-flex" >
                        <img className="img-width-logo" src="./idealmartlogo.jpeg" alt="logo" />
                        <h2 className="under-line ms-auto">Product Management</h2>
                        <label className="ms-auto table-margin">Store : 
                            <select className="padding-select" onChange={currentStoreFilterInput}>
                                {storeFilterItems.map((item) =>
                                    <option key={item} value={item}>{item}</option>
                                )}
                            </select>
                        </label>
                        <div className="input-search">
                            <input
                                type="text"
                                placeholder="Search Product..."
                                value={search}
                                onChange={searchInput}
                                className="border p-2 rounded mb-4 search-input "
                            />
                        </div>
                        <div className="but-mar">
                            <button type="button" className="ms-auto create-btn" onClick={addUserMethod} >+ ADD PRODUCT  </button>
                        </div>
                    </div>
                    <table className="table table-margin" >
                        <thead >
                            <tr>
                                <th>#</th>
                                <th>Store</th>
                                <th>Product</th>
                                <th>Regular Price</th>
                                <th>Deal Price</th>
                                <th>Tax %</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {finalData.map((product, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{product.storeName}</td>
                                    <td>{product.name}</td>
                                    <td>{product.regPrice}</td>
                                    <td>{product.dealPrice}</td>
                                    <td>{product.tax}</td>
                                    <td>{product.category}</td>
                                    <td>{product.availableQty}</td>
                                    <td>
                                        <button type="button" className='read-btn' onClick={e => handleRead(product)} >VIEW</button>
                                        <button type="button" className='update-btn' onClick={e => handleUpdate(product)} >UPDATE</button>
                                        <button type="button" className="delete-btn" onClick={e => handleDelete(product.id)} >DELETE</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        } else if (currentView === 'CREATE') {
            return <CreateAndUpdateCity addCity={addCity} id={null} action="CREATE" />
        } else if (currentView === 'UPDATE') {
            return <CreateAndUpdateCity addCity={addCity} id={id} selectedCity={selectedCity} action="UPDATE" />
        } else if (currentView === 'READ') {
            return <Read selectedCity={selectedCity} handleGoBack={handleGoBack} />
        }
    }
    const handleGoBack = () => {
        setState((prev) => ({ ...prev, currentView: "LIST" }))
    }
    const addUserMethod = () => {
        setState((prev) => ({ ...prev, currentView: 'CREATE' }))
    }
    const { productDetails, isLoading, currentView, id, showSnackbar, selectedCity, currentStoreFilter } = state
    if (currentStoreFilter === 'ALL') {
        filteredDataByCat = productDetails
    } else if (currentStoreFilter !== 'ALL') {
        filteredDataByCat = productDetails.filter((item) => item.storeName === currentStoreFilter)
    }
    const finalData = filteredDataByCat.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
        || item.storeName.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <div>
                {isLoading ? renderLoader() : renderData()}
                {showSnackbar && <Snackbar message="Added Successfully" isOpen={showSnackbar} onClose={closeSnackbar} />}
            </div>
        </div>
    )
}

export default Home